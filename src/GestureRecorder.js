import { merge } from 'lodash'

const Handsfree = window.Handsfree

/**
 * Creates a calibrator panel
 */
// Handsfree.prototype.createGestureRecorderOverlay = function() {
//   if (!this.config.$wrap) {
//     // Wrap
//     this.overlay.$wrap = document.createElement('DIV')
//     this.overlay.$wrap.classList.add('handsfree-gesture-recorder-wrap')

//     // Countdown Message
//     this.overlay.$message = document.createElement('h1')

//     document.body.appendChild(this.overlay.$wrap)
//     this.overlay.$wrap.appendChild(this.overlay.$message)
//   }
// }

/**
 * Start calibrating
 */
Handsfree.prototype.recordGesture = function(opts, onReady) {
  // Setup opts
  opts = merge(
    {
      gestureSet: '',
      download: false,
      delaySeconds: 3,
      numSamples: 100,
      labels: ['base'],
      models: ['weboji'],
      onReady
    },
    opts
  )

  // Make sure selected models are running
  if (typeof opts.models === 'string') opts.models = [opts.models]
  opts.models.forEach((model) => {
    this.model[model].enabled = true
  })
  this.gestureRecorder.config = opts
  this.gestureRecorder.countdownTimesLooped = 0
  this.reload()
  handsfree.start()

  // Enable gestureRecorder plugin
  this.gestureRecorder.curLabelIndex = 0
  this.gestureRecordCountdown(() => {
    this.gestureRecorder.samples = []
    this.gestureRecorder.curLabelIndex = 0
    this.gestureRecorder.config.labels.forEach(() => {
      this.gestureRecorder.samples.push([])
    })

    Handsfree.enable('gestureRecorder.collectSample')
  })

  // End gesture recording
  this.on('handsfreeGestureRecordingEnded', () => {
    Handsfree.disable('gestureRecorder.collectSample')
    this.createGestureModel()
  })
}

/**
 * Countdown to recording a gesture
 * @param {Function} cb The callback to call once we've counted down
 */
Handsfree.prototype.gestureRecordCountdown = function(cb) {
  // Show countdown
  this.overlay.$wrap.classList.add('handsfree-visible')
  document.body.classList.add('handsfree-recording-gesture')

  // Update message
  let secondsLeft =
    this.gestureRecorder.config.delaySeconds -
    this.gestureRecorder.countdownTimesLooped

  secondsLeft = secondsLeft < 0 ? 0 : secondsLeft
  let message = this.config.countdownMessage.replace(
    /\{countdown\}/g,
    secondsLeft
  )
  message = message.replace(
    /\{label\}/g,
    this.gestureRecorder.config.labels[this.gestureRecorder.curLabelIndex]
  )
  this.overlay.$message.innerHTML = message

  // Zero data and start collecting samples
  if (
    this.gestureRecorder.countdownTimesLooped >=
    this.gestureRecorder.config.delaySeconds
  ) {
    cb()
  } else {
    setTimeout(() => {
      ++this.gestureRecorder.countdownTimesLooped
      this.gestureRecordCountdown(cb)
    }, 1000)
  }
}

/**
 * Recursively collect gesture samples
 */
Handsfree.use('gestureRecorder.collectSample', {
  enabled: false,

  onFrame(handsfree) {
    let data = []
    let gestureRecorder = handsfree.gestureRecorder

    // Exit if models aren't active yet
    if (
      gestureRecorder.config.models.includes('weboji') &&
      !handsfree.weboji.translation.length
    )
      return

    // Loop through each model and store data in a flattened array
    gestureRecorder.config.models.forEach((model) => {
      switch (model) {
        case 'weboji':
          Array.prototype.push.apply(
            data,
            handsfree.weboji.translation,
            handsfree.weboji.rotation,
            handsfree.weboji.morphs
          )
          break
      }
    })
    gestureRecorder.samples[gestureRecorder.curLabelIndex].push(data)

    // Update message
    let message = handsfree.config.recordingMessage.replace(
      /\{numSamples\}/g,
      gestureRecorder.samples[gestureRecorder.curLabelIndex].length
    )
    message = message.replace(
      /\{label\}/g,
      gestureRecorder.config.labels[gestureRecorder.curLabelIndex]
    )
    gestureRecorder.$message.innerHTML = message

    // Finish recording or countdown for next label
    if (
      gestureRecorder.samples[gestureRecorder.curLabelIndex].length >=
      gestureRecorder.config.numSamples
    ) {
      gestureRecorder.curLabelIndex++
      Handsfree.disable('gestureRecorder.collectSample')

      if (
        gestureRecorder.curLabelIndex < gestureRecorder.config.labels.length
      ) {
        handsfree.gestureRecorder.countdownTimesLooped = 0
        handsfree.gestureRecordCountdown(() => {
          Handsfree.enable('gestureRecorder.collectSample')
        })
      } else {
        handsfree.emit('handsfreeGestureRecordingEnded')
      }
    }
  }
})

/**
 * Create a model
 */
Handsfree.prototype.createGestureModel = function() {
  const onML5Ready = () => {
    // Update message
    let message = this.config.trainingMessage.replace(
      /\{gestureSetName\}/g,
      this.gestureRecorder.config.gestureSet
    )
    this.overlay.$message.innerHTML = message

    // Create brain
    const brain = (this.gestureRecorder.brain = ml5.neuralNetwork({
      inputs: this.gestureRecorder.samples[0].length,
      outputs: this.gestureRecorder.config.labels.length,
      task: 'classification',
      debug: true
    }))

    // Add data
    this.gestureRecorder.samples.forEach((samples, i) => {
      let data = []
      samples.forEach((sample) => {
        data.push(...sample)
      })
      brain.addData(data, [this.gestureRecorder.config.labels[i]])
    })

    // Train
    brain.normalizeData()
    this.gestureRecorder.brain.vis.tfvis.visor().open &&
      this.gestureRecorder.brain.vis.tfvis.visor().open()
    brain.train({ epochs: 50 }, () => {
      this.finishedTrainingGestures()
    })
  }

  // Load ML5 if it hasn't been loaded yet
  if (this.dependencies.ml5) {
    onML5Ready()
  } else {
    this.loadAndWait([Handsfree.libSrc + 'models/ml5@0.4.3.js'], () => {
      this.dependencies.ml5 = true
      onML5Ready()
    })
  }
}

/**
 * Called once training is complete
 */
Handsfree.prototype.finishedTrainingGestures = function() {
  const model = this.gestureRecorder.brain.model
  this.gestureSets[this.gestureRecorder.config.gestureSet] = model

  this.gestureRecorder.brain.vis.tfvis.visor().close()

  // Persist models
  if (this.gestureRecorder.config.download) {
    this.gestureRecorder.brain.save(() => {
      this.gestureRecorder.config.onReady &&
        this.gestureRecorder.config.onReady(model)

      document.body.classList.remove('handsfree-recording-gesture')
      this.overlay.$wrap.classList.remove('handsfree-visible')
    }, this.gestureRecorder.config.gestureSet.toString())
  } else {
    document.body.classList.remove('handsfree-recording-gesture')
    this.overlay.$wrap.classList.remove('handsfree-visible')
  }
}

/**
 * Loads a gestureSet model
 *
 * @param {Object} gestureSets A list of {gesturSetName: URL}
 */
Handsfree.prototype.loadGestures = function(gestureSets) {
  // Load TensorFlow
  const onML5Ready = () => {
    let gesturesToLoad = Object.keys(gestureSets).length
    this.missingGestureSets = []
    document.body.classList.add('handsfree-loading-gestures')

    Object.keys(gestureSets).forEach(async (gestureSet) => {
      try {
        this.gestureSets[gestureSet] = await ml5.tf.loadLayersModel(
          gestureSets[gestureSet]
        )
      } catch (e) {
        this.missingGestureSets.push(gestureSet)
      }

      if (--gesturesToLoad <= 0) {
        document.body.classList.remove('handsfree-loading-gestures')
        this.emit('handsfreeGesturesLoaded')
      }
    })
  }

  // Load TensorFlow if it hasn't been loaded yet
  if (this.dependencies.ml5) {
    onML5Ready()
  } else {
    this.loadAndWait([Handsfree.libSrc + 'models/ml5@0.4.3.js'], () => {
      this.dependencies.ml5 = true
      onML5Ready()
    })
  }
}
