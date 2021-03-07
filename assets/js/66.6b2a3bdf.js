(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{446:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{demoOpts:{autostart:!0,weboji:!0,hands:!1,facemesh:!1,pose:!1,handpose:!1,plugin:{facePointer:{enabled:!0},faceScroll:{enabled:!0},faceClick:{enabled:!0}}}}},mounted:function(){var t=document.createElement("SCRIPT");t.src="https://platform.twitter.com/widgets.js",document.body.appendChild(t)},methods:{startDemo:function(){this.$root.handsfree.update(this.demoOpts)}}},n=s(43),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"model-weboji"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-weboji"}},[t._v("#")]),t._v(" Model: Weboji")]),t._v(" "),s("div",{staticClass:"row align-top"},[s("div",{staticClass:"col-6"},[s("p",[s("img",{attrs:{alt:"A person moving a virtual mouse pointer by moving their head",src:"https://media0.giphy.com/media/Iv2aSMS0QTy2P5JNCX/giphy.gif"}})]),t._v(" "),s("ul",[s("li",[t._v("Powered by "),s("a",{attrs:{href:"https://github.com/jeeliz/jeelizWeboji"}},[t._v("Jeeliz's Weboji")])]),t._v(" "),s("li",[t._v("Full "),s("a",{attrs:{href:"https://github.com/jeeliz/jeelizWeboji/blob/master/doc/jeefacetransferAPI.pdf"}},[t._v("technical documentation")])])])]),t._v(" "),s("div",{staticClass:"col-6"},[s("Window",{attrs:{title:"Overview and basic demo"}},[s("section",[s("ul",[s("li",[t._v("😀 6DOF head pose estimations")]),t._v(" "),s("li",[t._v("😜 11 face morphs and 16 helper states")]),t._v(" "),s("li",[t._v('🔌 Comes with "Face Pointer" based plugins')])]),t._v(" "),s("p",[t._v("This model uses morphs to help estimate various face states simultaneously and includes assistive tech plugins for browsing pages with face gestures.")]),t._v(" "),s("div",[s("HandsfreeToggle",{staticClass:"full-width handsfree-hide-when-started-without-weboji",attrs:{"text-off":"Try basic Weboji demo","text-on":"Stop Weboji Model",opts:t.demoOpts}}),t._v(" "),s("button",{staticClass:"handsfree-show-when-started-without-weboji handsfree-show-when-loading",attrs:{disabled:""}},[s("Fa-Spinner",{attrs:{spin:""}}),t._v(" Loading...")],1),t._v(" "),s("button",{staticClass:"handsfree-show-when-started-without-weboji handsfree-hide-when-loading",on:{click:t.startDemo}},[s("Fa-Video"),t._v(" Try basic Weboji demo")],1)],1)])])],1)]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("h3",{attrs:{id:"with-defaults"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#with-defaults"}},[t._v("#")]),t._v(" With defaults")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" handsfree "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Handsfree")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("weboji"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"with-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#with-config"}},[t._v("#")]),t._v(" With config")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// These are all the default values")]),t._v("\nhandsfree "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Handsfree")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  weboji"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Whether the model is enabled or not")]),t._v("\n    enabled"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Custom video settings")]),t._v("\n    videoSettings"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The video, canvas, or image element")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Omit this to auto create a <VIDEO> with the webcam")]),t._v("\n      videoElement"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ID of the device to use")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Omit this to use the system default")]),t._v("\n      deviceId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Which camera to use on the device")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Possible values: 'user' (front), 'environment' (back)")]),t._v("\n      facingMode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Video dimensions")]),t._v("\n      idealWidth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("320")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      idealHeight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      minWidth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      maxWidth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1280")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      minHeight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      maxHeight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1280")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Thresholds needed before these are considered "activated"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// - Ranges from 0 (not active) to 1 (fully active)")]),t._v("\n    morphs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      threshold"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        smileRight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        smileLeft"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        browLeftDown"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        browRightDown"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        browLeftUp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        browRightUp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        eyeLeftClosed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        eyeRightClosed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        mouthOpen"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        mouthRound"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        upperLip"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" Data")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * {Boolean} Whether the face is detected or not\n */")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weboji"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isDetected\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * {Array} Face morphs, from 0 (not activated) to 1 (fully activated)\n * \n * 0: smileRight → closed mouth smile right\n * 1: smileLeft → closed mouth smile left\n * 2: eyeBrowLeftDown → left eyebrow frowned\n * 3: eyeBrowRightDown → right eyebrow frowned\n * 4: eyeBrowLeftUp → raise left eyebrow (surprise)\n * 5: eyeBrowRightUp → raise right eyebrow (surprise)\n * 6: mouthOpen → open mouth\n * 7: mouthRound → o shaped mouth\n * 8: eyeRightClose → close right eye\n * 9: eyeLeftClose → close left eye\n * 10: mouthNasty → nasty mouth (show teeth)\n */")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weboji"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("morphs\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * {Array} Head rotation [pitch, yaw, roll]\n * - in radians where [0, 0, 0] is the head pointed directly at camera\n */")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weboji"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotation\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * {Array} Head rotation [pitch, yaw, roll]\n * - in degrees where [0, 0, 0] is the head pointed directly at camera\n */")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weboji"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("degree\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * {Array} Head translation [x, y, s]\n * - These are each between 0 and 1\n * - Scale refers to the size of the head in relation to the webcam frame\n */")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weboji"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("translation\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * {Object} Where on the screen the head is pointed at {x, y}\n * - This is updated by: handsfree.plugin.facePointer\n */")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weboji"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pointer\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n * {Object} Helper booleans checking if the morph has reached a threshold\n * \n * .smileRight      Smirking lips to the right\n * .smileLeft       Smirking lips to the left\n * .smile           Smiling equally to both sides\n * .smirk           Smiling either to the right or left, but not both\n * .pursed          Kiss face\n * \n * .browLeftUp      Left eyebrow raised up\n * .browRightUp     Right eyebrow raised up\n * .browsUp         Both eyebrows raised up\n * .browLeftDown    Left eyebrow frowning down\n * .browRightDown   Right eyebrow frowning down\n * .browsDown       Both eyebrows frowning down\n * .browseUpDown    One eyebrow down and the other up ("The Rock eyebrows")\n * \n * .eyeLeftClosed   The left eye closed\n * .eyeRightClosed  The right eye closed\n * .eyesClosed      Both eyes closed\n * \n * .mouthClosed\n * .mouthOpen\n */')]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weboji"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state\n")])])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("p",[t._v("Please see the "),s("a",{attrs:{href:"https://github.com/jeeliz/jeelizWeboji/blob/master/doc/jeefacetransferAPI.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Weboji Docs"),s("OutboundLink")],1),t._v(" to see available methods exposed through "),s("code",[t._v("handsfree.model.weboji.api")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Check if the head is detected or not")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weboji"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("is_detected")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"using-a-pre-recorded-video-instead-of-a-webcam"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-a-pre-recorded-video-instead-of-a-webcam"}},[t._v("#")]),t._v(" Using a pre-recorded video instead of a webcam")]),t._v(" "),s("p",[t._v("By default, setting "),s("code",[t._v("{weboji: true}")]),t._v(" adds a new "),s("code",[t._v("<video>")]),t._v(" element to the DOM to grab the webcam:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("handsfree "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Handsfree")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("weboji"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("To use a pre-recorded video or video stream, a canvas, or an image instead of a webcam set the "),s("code",[t._v(".videoSettings.videoElement")]),t._v(" property:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("handsfree "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Handsfree")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  weboji"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    enabled"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    videoSettings"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      videoElement"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#my-video'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("div",{staticClass:"row align-top"},[s("div",{staticClass:"col-6"},[s("blockquote",{staticClass:"twitter-tweet",attrs:{"data-conversation":"none"}},[s("p",{attrs:{lang:"en",dir:"ltr"}},[t._v("The Handsfree.js repo can itself be loaded as an unpacked Chrome Extensions: "),s("a",{attrs:{href:"https://t.co/8RFl3yR0uA"}},[t._v("https://t.co/8RFl3yR0uA")]),s("br"),s("br"),t._v("So if you'd like to go that route, all the heavy work is already done for you. Additionally, with WebSockets and Robot.js, you can control your desktop too! "),s("a",{attrs:{href:"https://t.co/m7Xunc0pfq"}},[t._v("pic.twitter.com/m7Xunc0pfq")])]),t._v("— Oz Ramos (@MIDIBlocks) "),s("a",{attrs:{href:"https://twitter.com/MIDIBlocks/status/1357799020521902080?ref_src=twsrc%5Etfw"}},[t._v("February 5, 2021")])])]),t._v(" "),s("div",{staticClass:"col-6"},[s("blockquote",{staticClass:"twitter-tweet",attrs:{"data-conversation":"none"}},[s("p",{attrs:{lang:"en",dir:"ltr"}},[t._v("This newer rewrite does less out the box but will be way more extensible"),s("br"),s("br"),t._v("You can use it with Robot.js or other desktop automation libraries to control your desktop/devices. Here's an older demo of that (will share code to this soon) "),s("a",{attrs:{href:"https://t.co/ShoAwHGGHu"}},[t._v("pic.twitter.com/ShoAwHGGHu")])]),t._v("— Oz Ramos (@MIDIBlocks) "),s("a",{attrs:{href:"https://twitter.com/MIDIBlocks/status/1326763862457274368?ref_src=twsrc%5Etfw"}},[t._v("November 12, 2020")])])]),t._v(" "),s("div",{staticClass:"col-6"},[s("blockquote",{staticClass:"twitter-tweet",attrs:{"data-conversation":"none"}},[s("p",{attrs:{lang:"en",dir:"ltr"}},[t._v("Here's a 30sec video w positioning & smoothing"),s("br"),s("br"),t._v("On the right is my Chrome Dev Tools opened to the "),s("a",{attrs:{href:"https://twitter.com/hashtag/WebXR?src=hash&ref_src=twsrc%5Etfw"}},[t._v("#WebXR")]),t._v(" tab that comes with the Mozilla Emulator Extension with the new Handsfree button 🖐👀🖐"),s("br"),s("br"),t._v("Thanks to "),s("a",{attrs:{href:"https://twitter.com/i0nif?ref_src=twsrc%5Etfw"}},[t._v("@i0nif")]),t._v(" for the enthusiastic idea & vision! Repo + docs + more after holidays "),s("a",{attrs:{href:"https://t.co/rdV9MIjUBk"}},[t._v("pic.twitter.com/rdV9MIjUBk")])]),t._v("— Oz Ramos (@MIDIBlocks) "),s("a",{attrs:{href:"https://twitter.com/MIDIBlocks/status/1342356735814553600?ref_src=twsrc%5Etfw"}},[t._v("December 25, 2020")])])]),t._v(" "),s("div",{staticClass:"col-6"},[s("blockquote",{staticClass:"twitter-tweet"},[s("p",{attrs:{lang:"en",dir:"ltr"}},[t._v('Working on a boilerplate for "looking around" an A-Frame handsfree without a VR headset'),s("br"),s("br"),t._v("Going to release this tonight along with a tutorial! Since Handsfree.js is built in a way to support Hot Reload, one idea is to help you work on your 3D projects and look around while coding! "),s("a",{attrs:{href:"https://t.co/NlIMKxgqWT"}},[t._v("pic.twitter.com/NlIMKxgqWT")])]),t._v("— Oz Ramos (@MIDIBlocks) "),s("a",{attrs:{href:"https://twitter.com/MIDIBlocks/status/1341118933206646784?ref_src=twsrc%5Etfw"}},[t._v("December 21, 2020")])])]),t._v(" "),s("div",{staticClass:"col-6"},[s("blockquote",{staticClass:"twitter-tweet"},[s("p",{attrs:{lang:"en",dir:"ltr"}},[t._v("Handsfree projector w/ funky angles, test #1 🙌"),s("br"),s("br"),t._v("Goal is to see what happens when the surface you want to point at is different than where the webcam is"),s("br"),s("br"),t._v("This is the first step in my implementation of this paper but with projection mapping instead of AR: "),s("a",{attrs:{href:"https://t.co/bflVqmW2RJ"}},[t._v("https://t.co/bflVqmW2RJ")]),t._v(" "),s("a",{attrs:{href:"https://t.co/YgmYGRETB3"}},[t._v("pic.twitter.com/YgmYGRETB3")])]),t._v("— Oz Ramos (@MIDIBlocks) "),s("a",{attrs:{href:"https://twitter.com/MIDIBlocks/status/1334767867938525184?ref_src=twsrc%5Etfw"}},[t._v("December 4, 2020")])])]),t._v(" "),s("div",{staticClass:"col-6"},[s("Window",{attrs:{title:"Add your project"}},[t._v("\n      If you've made something with this model I'd love to showcase it here! DM me "),s("a",{attrs:{href:"https://twitter.com/midiblocks"}},[t._v("on Twitter")]),t._v(", "),s("a",{staticClass:"https://github.com/midiblocks/handsfree/edit/master/docs/ref/model/hands.md"},[t._v("make a pull request")]),t._v(", or "),s("a",{attrs:{href:"https://discord.gg/JeevWjTEdu"}},[t._v("find us on Discord")]),t._v(".  \n    ")])],1)]),t._v(" "),s("h2",{attrs:{id:"see-also"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" See also")]),t._v(" "),s("ul",[s("li",[t._v("Examples\n"),s("ul",[s("li",[t._v("A-Frame\n"),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/example/aframe/look-around-handsfree/"}},[t._v('"Look around" handsfree')])],1)])])])]),t._v(" "),s("li",[t._v("Plugins\n"),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ref/model/faceClick/"}},[t._v("faceClick")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ref/model/facePointer/"}},[t._v("facePointer")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ref/model/faceScroll/"}},[t._v("faceScroll")])],1)])])])])}),[],!1,null,null,null);e.default=r.exports}}]);