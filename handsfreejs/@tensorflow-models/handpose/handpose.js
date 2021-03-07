/**
    * @license
    * Copyright 2020 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */
   (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tensorflow/tfjs-converter'), require('@tensorflow/tfjs-core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@tensorflow/tfjs-converter', '@tensorflow/tfjs-core'], factory) :
    (global = global || self, factory(global.handpose = {}, global.tf, global.tf));
}(this, (function (exports, tfconv, tf) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function getBoxSize(box) {
        return [
            Math.abs(box.endPoint[0] - box.startPoint[0]),
            Math.abs(box.endPoint[1] - box.startPoint[1])
        ];
    }
    function getBoxCenter(box) {
        return [
            box.startPoint[0] + (box.endPoint[0] - box.startPoint[0]) / 2,
            box.startPoint[1] + (box.endPoint[1] - box.startPoint[1]) / 2
        ];
    }
    function cutBoxFromImageAndResize(box, image, cropSize) {
        var h = image.shape[1];
        var w = image.shape[2];
        var boxes = [[
                box.startPoint[1] / h, box.startPoint[0] / w, box.endPoint[1] / h,
                box.endPoint[0] / w
            ]];
        return tf.image.cropAndResize(image, boxes, [0], cropSize);
    }
    function scaleBoxCoordinates(box, factor) {
        var startPoint = [box.startPoint[0] * factor[0], box.startPoint[1] * factor[1]];
        var endPoint = [box.endPoint[0] * factor[0], box.endPoint[1] * factor[1]];
        var palmLandmarks = box.palmLandmarks.map(function (coord) {
            var scaledCoord = [coord[0] * factor[0], coord[1] * factor[1]];
            return scaledCoord;
        });
        return { startPoint: startPoint, endPoint: endPoint, palmLandmarks: palmLandmarks };
    }
    function enlargeBox(box, factor) {
        if (factor === void 0) { factor = 1.5; }
        var center = getBoxCenter(box);
        var size = getBoxSize(box);
        var newHalfSize = [factor * size[0] / 2, factor * size[1] / 2];
        var startPoint = [center[0] - newHalfSize[0], center[1] - newHalfSize[1]];
        var endPoint = [center[0] + newHalfSize[0], center[1] + newHalfSize[1]];
        return { startPoint: startPoint, endPoint: endPoint, palmLandmarks: box.palmLandmarks };
    }
    function squarifyBox(box) {
        var centers = getBoxCenter(box);
        var size = getBoxSize(box);
        var maxEdge = Math.max.apply(Math, size);
        var halfSize = maxEdge / 2;
        var startPoint = [centers[0] - halfSize, centers[1] - halfSize];
        var endPoint = [centers[0] + halfSize, centers[1] + halfSize];
        return { startPoint: startPoint, endPoint: endPoint, palmLandmarks: box.palmLandmarks };
    }
    function shiftBox(box, shiftFactor) {
        var boxSize = [
            box.endPoint[0] - box.startPoint[0], box.endPoint[1] - box.startPoint[1]
        ];
        var shiftVector = [boxSize[0] * shiftFactor[0], boxSize[1] * shiftFactor[1]];
        var startPoint = [box.startPoint[0] + shiftVector[0], box.startPoint[1] + shiftVector[1]];
        var endPoint = [box.endPoint[0] + shiftVector[0], box.endPoint[1] + shiftVector[1]];
        return { startPoint: startPoint, endPoint: endPoint, palmLandmarks: box.palmLandmarks };
    }

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var HandDetector = /** @class */ (function () {
        function HandDetector(model, width, height, anchors, iouThreshold, scoreThreshold) {
            this.model = model;
            this.width = width;
            this.height = height;
            this.iouThreshold = iouThreshold;
            this.scoreThreshold = scoreThreshold;
            this.anchors = anchors.map(function (anchor) { return [anchor.x_center, anchor.y_center]; });
            this.anchorsTensor = tf.tensor2d(this.anchors);
            this.inputSizeTensor = tf.tensor1d([width, height]);
            this.doubleInputSizeTensor = tf.tensor1d([width * 2, height * 2]);
        }
        HandDetector.prototype.normalizeBoxes = function (boxes) {
            var _this = this;
            return tf.tidy(function () {
                var boxOffsets = tf.slice(boxes, [0, 0], [-1, 2]);
                var boxSizes = tf.slice(boxes, [0, 2], [-1, 2]);
                var boxCenterPoints = tf.add(tf.div(boxOffsets, _this.inputSizeTensor), _this.anchorsTensor);
                var halfBoxSizes = tf.div(boxSizes, _this.doubleInputSizeTensor);
                var startPoints = tf.mul(tf.sub(boxCenterPoints, halfBoxSizes), _this.inputSizeTensor);
                var endPoints = tf.mul(tf.add(boxCenterPoints, halfBoxSizes), _this.inputSizeTensor);
                return tf.concat2d([startPoints, endPoints], 1);
            });
        };
        HandDetector.prototype.normalizeLandmarks = function (rawPalmLandmarks, index) {
            var _this = this;
            return tf.tidy(function () {
                var landmarks = tf.add(tf.div(rawPalmLandmarks.reshape([-1, 7, 2]), _this.inputSizeTensor), _this.anchors[index]);
                return tf.mul(landmarks, _this.inputSizeTensor);
            });
        };
        HandDetector.prototype.getBoundingBoxes = function (input) {
            return __awaiter(this, void 0, void 0, function () {
                var normalizedInput, batchedPrediction, savedWebglPackDepthwiseConvFlag, prediction, scores, rawBoxes, boxes, savedConsoleWarnFn, boxesWithHandsTensor, boxesWithHands, toDispose, boxIndex, matchingBox, rawPalmLandmarks, palmLandmarks;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            normalizedInput = tf.tidy(function () { return tf.mul(tf.sub(input, 0.5), 2); });
                            if (tf.getBackend() === 'webgl') {
                                savedWebglPackDepthwiseConvFlag = tf.env().get('WEBGL_PACK_DEPTHWISECONV');
                                tf.env().set('WEBGL_PACK_DEPTHWISECONV', true);
                                // The model returns a tensor with the following shape:
                                //  [1 (batch), 2944 (anchor points), 19 (data for each anchor)]
                                batchedPrediction = this.model.predict(normalizedInput);
                                tf.env().set('WEBGL_PACK_DEPTHWISECONV', savedWebglPackDepthwiseConvFlag);
                            }
                            else {
                                batchedPrediction = this.model.predict(normalizedInput);
                            }
                            prediction = batchedPrediction.squeeze();
                            scores = tf.tidy(function () { return tf.sigmoid(tf.slice(prediction, [0, 0], [-1, 1])).squeeze(); });
                            rawBoxes = tf.slice(prediction, [0, 1], [-1, 4]);
                            boxes = this.normalizeBoxes(rawBoxes);
                            savedConsoleWarnFn = console.warn;
                            console.warn = function () { };
                            boxesWithHandsTensor = tf.image.nonMaxSuppression(boxes, scores, 1, this.iouThreshold, this.scoreThreshold);
                            console.warn = savedConsoleWarnFn;
                            return [4 /*yield*/, boxesWithHandsTensor.array()];
                        case 1:
                            boxesWithHands = _a.sent();
                            toDispose = [
                                normalizedInput, batchedPrediction, boxesWithHandsTensor, prediction,
                                boxes, rawBoxes, scores
                            ];
                            if (boxesWithHands.length === 0) {
                                toDispose.forEach(function (tensor) { return tensor.dispose(); });
                                return [2 /*return*/, null];
                            }
                            boxIndex = boxesWithHands[0];
                            matchingBox = tf.slice(boxes, [boxIndex, 0], [1, -1]);
                            rawPalmLandmarks = tf.slice(prediction, [boxIndex, 5], [1, 14]);
                            palmLandmarks = tf.tidy(function () { return _this.normalizeLandmarks(rawPalmLandmarks, boxIndex).reshape([
                                -1, 2
                            ]); });
                            toDispose.push(rawPalmLandmarks);
                            toDispose.forEach(function (tensor) { return tensor.dispose(); });
                            return [2 /*return*/, { boxes: matchingBox, palmLandmarks: palmLandmarks }];
                    }
                });
            });
        };
        /**
         * Returns a Box identifying the bounding box of a hand within the image.
         * Returns null if there is no hand in the image.
         *
         * @param input The image to classify.
         */
        HandDetector.prototype.estimateHandBounds = function (input) {
            return __awaiter(this, void 0, void 0, function () {
                var inputHeight, inputWidth, image, prediction, boundingBoxes, startPoint, endPoint, palmLandmarks;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            inputHeight = input.shape[1];
                            inputWidth = input.shape[2];
                            image = tf.tidy(function () { return input.resizeBilinear([_this.width, _this.height]).div(255); });
                            return [4 /*yield*/, this.getBoundingBoxes(image)];
                        case 1:
                            prediction = _a.sent();
                            if (prediction === null) {
                                image.dispose();
                                return [2 /*return*/, null];
                            }
                            boundingBoxes = prediction.boxes.arraySync();
                            startPoint = boundingBoxes[0].slice(0, 2);
                            endPoint = boundingBoxes[0].slice(2, 4);
                            palmLandmarks = prediction.palmLandmarks.arraySync();
                            image.dispose();
                            prediction.boxes.dispose();
                            prediction.palmLandmarks.dispose();
                            return [2 /*return*/, scaleBoxCoordinates({ startPoint: startPoint, endPoint: endPoint, palmLandmarks: palmLandmarks }, [inputWidth / this.width, inputHeight / this.height])];
                    }
                });
            });
        };
        return HandDetector;
    }());

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var MESH_ANNOTATIONS = {
        thumb: [1, 2, 3, 4],
        indexFinger: [5, 6, 7, 8],
        middleFinger: [9, 10, 11, 12],
        ringFinger: [13, 14, 15, 16],
        pinky: [17, 18, 19, 20],
        palmBase: [0]
    };

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function normalizeRadians(angle) {
        return angle - 2 * Math.PI * Math.floor((angle + Math.PI) / (2 * Math.PI));
    }
    function computeRotation(point1, point2) {
        var radians = Math.PI / 2 - Math.atan2(-(point2[1] - point1[1]), point2[0] - point1[0]);
        return normalizeRadians(radians);
    }
    var buildTranslationMatrix = function (x, y) {
        return ([[1, 0, x], [0, 1, y], [0, 0, 1]]);
    };
    function dot(v1, v2) {
        var product = 0;
        for (var i = 0; i < v1.length; i++) {
            product += v1[i] * v2[i];
        }
        return product;
    }
    function getColumnFrom2DArr(arr, columnIndex) {
        var column = [];
        for (var i = 0; i < arr.length; i++) {
            column.push(arr[i][columnIndex]);
        }
        return column;
    }
    function multiplyTransformMatrices(mat1, mat2) {
        var product = [];
        var size = mat1.length;
        for (var row = 0; row < size; row++) {
            product.push([]);
            for (var col = 0; col < size; col++) {
                product[row].push(dot(mat1[row], getColumnFrom2DArr(mat2, col)));
            }
        }
        return product;
    }
    function buildRotationMatrix(rotation, center) {
        var cosA = Math.cos(rotation);
        var sinA = Math.sin(rotation);
        var rotationMatrix = [[cosA, -sinA, 0], [sinA, cosA, 0], [0, 0, 1]];
        var translationMatrix = buildTranslationMatrix(center[0], center[1]);
        var translationTimesRotation = multiplyTransformMatrices(translationMatrix, rotationMatrix);
        var negativeTranslationMatrix = buildTranslationMatrix(-center[0], -center[1]);
        return multiplyTransformMatrices(translationTimesRotation, negativeTranslationMatrix);
    }
    function invertTransformMatrix(matrix) {
        var rotationComponent = [[matrix[0][0], matrix[1][0]], [matrix[0][1], matrix[1][1]]];
        var translationComponent = [matrix[0][2], matrix[1][2]];
        var invertedTranslation = [
            -dot(rotationComponent[0], translationComponent),
            -dot(rotationComponent[1], translationComponent)
        ];
        return [
            rotationComponent[0].concat(invertedTranslation[0]),
            rotationComponent[1].concat(invertedTranslation[1]),
            [0, 0, 1]
        ];
    }
    function rotatePoint(homogeneousCoordinate, rotationMatrix) {
        return [
            dot(homogeneousCoordinate, rotationMatrix[0]),
            dot(homogeneousCoordinate, rotationMatrix[1])
        ];
    }

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var UPDATE_REGION_OF_INTEREST_IOU_THRESHOLD = 0.8;
    var PALM_BOX_SHIFT_VECTOR = [0, -0.4];
    var PALM_BOX_ENLARGE_FACTOR = 3;
    var HAND_BOX_SHIFT_VECTOR = [0, -0.1];
    var HAND_BOX_ENLARGE_FACTOR = 1.65;
    var PALM_LANDMARK_IDS = [0, 5, 9, 13, 17, 1, 2];
    var PALM_LANDMARKS_INDEX_OF_PALM_BASE = 0;
    var PALM_LANDMARKS_INDEX_OF_MIDDLE_FINGER_BASE = 2;
    // The Pipeline coordinates between the bounding box and skeleton models.
    var HandPipeline = /** @class */ (function () {
        function HandPipeline(boundingBoxDetector, meshDetector, meshWidth, meshHeight, maxContinuousChecks, detectionConfidence) {
            // An array of hand bounding boxes.
            this.regionsOfInterest = [];
            this.runsWithoutHandDetector = 0;
            this.boundingBoxDetector = boundingBoxDetector;
            this.meshDetector = meshDetector;
            this.maxContinuousChecks = maxContinuousChecks;
            this.detectionConfidence = detectionConfidence;
            this.meshWidth = meshWidth;
            this.meshHeight = meshHeight;
            this.maxHandsNumber = 1; // TODO(annxingyuan): Add multi-hand support.
        }
        // Get the bounding box surrounding the hand, given palm landmarks.
        HandPipeline.prototype.getBoxForPalmLandmarks = function (palmLandmarks, rotationMatrix) {
            var rotatedPalmLandmarks = palmLandmarks.map(function (coord) {
                var homogeneousCoordinate = coord.concat([1]);
                return rotatePoint(homogeneousCoordinate, rotationMatrix);
            });
            var boxAroundPalm = this.calculateLandmarksBoundingBox(rotatedPalmLandmarks);
            // boxAroundPalm only surrounds the palm - therefore we shift it
            // upwards so it will capture fingers once enlarged + squarified.
            return enlargeBox(squarifyBox(shiftBox(boxAroundPalm, PALM_BOX_SHIFT_VECTOR)), PALM_BOX_ENLARGE_FACTOR);
        };
        // Get the bounding box surrounding the hand, given all hand landmarks.
        HandPipeline.prototype.getBoxForHandLandmarks = function (landmarks) {
            // The MediaPipe hand mesh model is trained on hands with empty space
            // around them, so we still need to shift / enlarge boxAroundHand even
            // though it surrounds the entire hand.
            var boundingBox = this.calculateLandmarksBoundingBox(landmarks);
            var boxAroundHand = enlargeBox(squarifyBox(shiftBox(boundingBox, HAND_BOX_SHIFT_VECTOR)), HAND_BOX_ENLARGE_FACTOR);
            var palmLandmarks = [];
            for (var i = 0; i < PALM_LANDMARK_IDS.length; i++) {
                palmLandmarks.push(landmarks[PALM_LANDMARK_IDS[i]].slice(0, 2));
            }
            boxAroundHand.palmLandmarks = palmLandmarks;
            return boxAroundHand;
        };
        // Scale, rotate, and translate raw keypoints from the model so they map to
        // the input coordinates.
        HandPipeline.prototype.transformRawCoords = function (rawCoords, box, angle, rotationMatrix) {
            var _this = this;
            var boxSize = getBoxSize(box);
            var scaleFactor = [boxSize[0] / this.meshWidth, boxSize[1] / this.meshHeight];
            var coordsScaled = rawCoords.map(function (coord) {
                return [
                    scaleFactor[0] * (coord[0] - _this.meshWidth / 2),
                    scaleFactor[1] * (coord[1] - _this.meshHeight / 2), coord[2]
                ];
            });
            var coordsRotationMatrix = buildRotationMatrix(angle, [0, 0]);
            var coordsRotated = coordsScaled.map(function (coord) {
                var rotated = rotatePoint(coord, coordsRotationMatrix);
                return rotated.concat([coord[2]]);
            });
            var inverseRotationMatrix = invertTransformMatrix(rotationMatrix);
            var boxCenter = getBoxCenter(box).concat([1]);
            var originalBoxCenter = [
                dot(boxCenter, inverseRotationMatrix[0]),
                dot(boxCenter, inverseRotationMatrix[1])
            ];
            return coordsRotated.map(function (coord) {
                return [
                    coord[0] + originalBoxCenter[0], coord[1] + originalBoxCenter[1],
                    coord[2]
                ];
            });
        };
        HandPipeline.prototype.estimateHand = function (image) {
            return __awaiter(this, void 0, void 0, function () {
                var useFreshBox, boundingBoxPrediction, currentBox, angle, palmCenter, palmCenterNormalized, rotatedImage, rotationMatrix, box, croppedInput, handImage, prediction, savedWebglPackDepthwiseConvFlag, flag, keypoints, flagValue, keypointsReshaped, rawCoords, coords, nextBoundingBox, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            useFreshBox = this.shouldUpdateRegionsOfInterest();
                            if (!(useFreshBox === true)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.boundingBoxDetector.estimateHandBounds(image)];
                        case 1:
                            boundingBoxPrediction = _a.sent();
                            if (boundingBoxPrediction === null) {
                                image.dispose();
                                this.regionsOfInterest = [];
                                return [2 /*return*/, null];
                            }
                            this.updateRegionsOfInterest(boundingBoxPrediction, true /*force update*/);
                            this.runsWithoutHandDetector = 0;
                            return [3 /*break*/, 3];
                        case 2:
                            this.runsWithoutHandDetector++;
                            _a.label = 3;
                        case 3:
                            currentBox = this.regionsOfInterest[0];
                            angle = computeRotation(currentBox.palmLandmarks[PALM_LANDMARKS_INDEX_OF_PALM_BASE], currentBox.palmLandmarks[PALM_LANDMARKS_INDEX_OF_MIDDLE_FINGER_BASE]);
                            palmCenter = getBoxCenter(currentBox);
                            palmCenterNormalized = [palmCenter[0] / image.shape[2], palmCenter[1] / image.shape[1]];
                            rotatedImage = tf.image.rotateWithOffset(image, angle, 0, palmCenterNormalized);
                            rotationMatrix = buildRotationMatrix(-angle, palmCenter);
                            // The bounding box detector only detects palms, so if we're using a fresh
                            // bounding box prediction, we have to construct the hand bounding box from
                            // the palm keypoints.
                            if (useFreshBox === true) {
                                box =
                                    this.getBoxForPalmLandmarks(currentBox.palmLandmarks, rotationMatrix);
                            }
                            else {
                                box = currentBox;
                            }
                            croppedInput = cutBoxFromImageAndResize(box, rotatedImage, [this.meshWidth, this.meshHeight]);
                            handImage = croppedInput.div(255);
                            croppedInput.dispose();
                            rotatedImage.dispose();
                            if (tf.getBackend() === 'webgl') {
                                savedWebglPackDepthwiseConvFlag = tf.env().get('WEBGL_PACK_DEPTHWISECONV');
                                tf.env().set('WEBGL_PACK_DEPTHWISECONV', true);
                                prediction =
                                    this.meshDetector.predict(handImage);
                                tf.env().set('WEBGL_PACK_DEPTHWISECONV', savedWebglPackDepthwiseConvFlag);
                            }
                            else {
                                prediction =
                                    this.meshDetector.predict(handImage);
                            }
                            flag = prediction[0], keypoints = prediction[1];
                            handImage.dispose();
                            flagValue = flag.dataSync()[0];
                            flag.dispose();
                            if (flagValue < this.detectionConfidence) {
                                keypoints.dispose();
                                this.regionsOfInterest = [];
                                return [2 /*return*/, null];
                            }
                            keypointsReshaped = tf.reshape(keypoints, [-1, 3]);
                            rawCoords = keypointsReshaped.arraySync();
                            keypoints.dispose();
                            keypointsReshaped.dispose();
                            coords = this.transformRawCoords(rawCoords, box, angle, rotationMatrix);
                            nextBoundingBox = this.getBoxForHandLandmarks(coords);
                            this.updateRegionsOfInterest(nextBoundingBox, false /* force replace */);
                            result = {
                                landmarks: coords,
                                handInViewConfidence: flagValue,
                                boundingBox: {
                                    topLeft: nextBoundingBox.startPoint,
                                    bottomRight: nextBoundingBox.endPoint
                                }
                            };
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        HandPipeline.prototype.calculateLandmarksBoundingBox = function (landmarks) {
            var xs = landmarks.map(function (d) { return d[0]; });
            var ys = landmarks.map(function (d) { return d[1]; });
            var startPoint = [Math.min.apply(Math, xs), Math.min.apply(Math, ys)];
            var endPoint = [Math.max.apply(Math, xs), Math.max.apply(Math, ys)];
            return { startPoint: startPoint, endPoint: endPoint };
        };
        // Updates regions of interest if the intersection over union between
        // the incoming and previous regions falls below a threshold.
        HandPipeline.prototype.updateRegionsOfInterest = function (box, forceUpdate) {
            if (forceUpdate) {
                this.regionsOfInterest = [box];
            }
            else {
                var previousBox = this.regionsOfInterest[0];
                var iou = 0;
                if (previousBox != null && previousBox.startPoint != null) {
                    var _a = box.startPoint, boxStartX = _a[0], boxStartY = _a[1];
                    var _b = box.endPoint, boxEndX = _b[0], boxEndY = _b[1];
                    var _c = previousBox.startPoint, previousBoxStartX = _c[0], previousBoxStartY = _c[1];
                    var _d = previousBox.endPoint, previousBoxEndX = _d[0], previousBoxEndY = _d[1];
                    var xStartMax = Math.max(boxStartX, previousBoxStartX);
                    var yStartMax = Math.max(boxStartY, previousBoxStartY);
                    var xEndMin = Math.min(boxEndX, previousBoxEndX);
                    var yEndMin = Math.min(boxEndY, previousBoxEndY);
                    var intersection = (xEndMin - xStartMax) * (yEndMin - yStartMax);
                    var boxArea = (boxEndX - boxStartX) * (boxEndY - boxStartY);
                    var previousBoxArea = (previousBoxEndX - previousBoxStartX) *
                        (previousBoxEndY - boxStartY);
                    iou = intersection / (boxArea + previousBoxArea - intersection);
                }
                this.regionsOfInterest[0] =
                    iou > UPDATE_REGION_OF_INTEREST_IOU_THRESHOLD ? previousBox : box;
            }
        };
        HandPipeline.prototype.shouldUpdateRegionsOfInterest = function () {
            var roisCount = this.regionsOfInterest.length;
            return roisCount !== this.maxHandsNumber ||
                this.runsWithoutHandDetector >= this.maxContinuousChecks;
        };
        return HandPipeline;
    }());

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    // Load the bounding box detector model.
    function loadHandDetectorModel() {
        return __awaiter(this, void 0, void 0, function () {
            var HANDDETECT_MODEL_PATH;
            return __generator(this, function (_a) {
                HANDDETECT_MODEL_PATH = 'https://tfhub.dev/mediapipe/tfjs-model/handdetector/1/default/1';
                return [2 /*return*/, tfconv.loadGraphModel(HANDDETECT_MODEL_PATH, { fromTFHub: true })];
            });
        });
    }
    var MESH_MODEL_INPUT_WIDTH = 256;
    var MESH_MODEL_INPUT_HEIGHT = 256;
    // Load the mesh detector model.
    function loadHandPoseModel() {
        return __awaiter(this, void 0, void 0, function () {
            var HANDPOSE_MODEL_PATH;
            return __generator(this, function (_a) {
                HANDPOSE_MODEL_PATH = 'https://tfhub.dev/mediapipe/tfjs-model/handskeleton/1/default/1';
                return [2 /*return*/, tfconv.loadGraphModel(HANDPOSE_MODEL_PATH, { fromTFHub: true })];
            });
        });
    }
    // In single shot detector pipelines, the output space is discretized into a set
    // of bounding boxes, each of which is assigned a score during prediction. The
    // anchors define the coordinates of these boxes.
    function loadAnchors() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, tf.util
                        .fetch('https://tfhub.dev/mediapipe/tfjs-model/handskeleton/1/default/1/anchors.json?tfjs-format=file')
                        .then(function (d) { return d.json(); })];
            });
        });
    }
    /**
     * Load handpose.
     *
     * @param config A configuration object with the following properties:
     * - `maxContinuousChecks` How many frames to go without running the bounding
     * box detector. Defaults to infinity. Set to a lower value if you want a safety
     * net in case the mesh detector produces consistently flawed predictions.
     * - `detectionConfidence` Threshold for discarding a prediction. Defaults to
     * 0.8.
     * - `iouThreshold` A float representing the threshold for deciding whether
     * boxes overlap too much in non-maximum suppression. Must be between [0, 1].
     * Defaults to 0.3.
     * - `scoreThreshold` A threshold for deciding when to remove boxes based
     * on score in non-maximum suppression. Defaults to 0.75.
     */
    function load(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.maxContinuousChecks, maxContinuousChecks = _c === void 0 ? Infinity : _c, _d = _b.detectionConfidence, detectionConfidence = _d === void 0 ? 0.8 : _d, _e = _b.iouThreshold, iouThreshold = _e === void 0 ? 0.3 : _e, _f = _b.scoreThreshold, scoreThreshold = _f === void 0 ? 0.5 : _f;
        return __awaiter(this, void 0, void 0, function () {
            var _g, ANCHORS, handDetectorModel, handPoseModel, detector, pipeline, handpose;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0: return [4 /*yield*/, Promise.all([loadAnchors(), loadHandDetectorModel(), loadHandPoseModel()])];
                    case 1:
                        _g = _h.sent(), ANCHORS = _g[0], handDetectorModel = _g[1], handPoseModel = _g[2];
                        detector = new HandDetector(handDetectorModel, MESH_MODEL_INPUT_WIDTH, MESH_MODEL_INPUT_HEIGHT, ANCHORS, iouThreshold, scoreThreshold);
                        pipeline = new HandPipeline(detector, handPoseModel, MESH_MODEL_INPUT_WIDTH, MESH_MODEL_INPUT_HEIGHT, maxContinuousChecks, detectionConfidence);
                        handpose = new HandPose(pipeline);
                        return [2 /*return*/, handpose];
                }
            });
        });
    }
    function getInputTensorDimensions(input) {
        return input instanceof tf.Tensor ? [input.shape[0], input.shape[1]] :
            [input.height, input.width];
    }
    function flipHandHorizontal(prediction, width) {
        var handInViewConfidence = prediction.handInViewConfidence, landmarks = prediction.landmarks, boundingBox = prediction.boundingBox;
        return {
            handInViewConfidence: handInViewConfidence,
            landmarks: landmarks.map(function (coord) {
                return [width - 1 - coord[0], coord[1], coord[2]];
            }),
            boundingBox: {
                topLeft: [width - 1 - boundingBox.topLeft[0], boundingBox.topLeft[1]],
                bottomRight: [
                    width - 1 - boundingBox.bottomRight[0], boundingBox.bottomRight[1]
                ]
            }
        };
    }
    var HandPose = /** @class */ (function () {
        function HandPose(pipeline) {
            this.pipeline = pipeline;
        }
        HandPose.getAnnotations = function () {
            return MESH_ANNOTATIONS;
        };
        /**
         * Finds hands in the input image.
         *
         * @param input The image to classify. Can be a tensor, DOM element image,
         * video, or canvas.
         * @param flipHorizontal Whether to flip the hand keypoints horizontally.
         * Should be true for videos that are flipped by default (e.g. webcams).
         */
        HandPose.prototype.estimateHands = function (input, flipHorizontal) {
            if (flipHorizontal === void 0) { flipHorizontal = false; }
            return __awaiter(this, void 0, void 0, function () {
                var _a, width, image, result, prediction, annotations, _i, _b, key;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = getInputTensorDimensions(input), width = _a[1];
                            image = tf.tidy(function () {
                                if (!(input instanceof tf.Tensor)) {
                                    input = tf.browser.fromPixels(input);
                                }
                                return input.toFloat().expandDims(0);
                            });
                            return [4 /*yield*/, this.pipeline.estimateHand(image)];
                        case 1:
                            result = _c.sent();
                            image.dispose();
                            if (result === null) {
                                return [2 /*return*/, []];
                            }
                            prediction = result;
                            if (flipHorizontal === true) {
                                prediction = flipHandHorizontal(result, width);
                            }
                            annotations = {};
                            for (_i = 0, _b = Object.keys(MESH_ANNOTATIONS); _i < _b.length; _i++) {
                                key = _b[_i];
                                annotations[key] =
                                    MESH_ANNOTATIONS[key].map(function (index) { return prediction.landmarks[index]; });
                            }
                            return [2 /*return*/, [{
                                        handInViewConfidence: prediction.handInViewConfidence,
                                        boundingBox: prediction.boundingBox,
                                        landmarks: prediction.landmarks,
                                        annotations: annotations
                                    }]];
                    }
                });
            });
        };
        return HandPose;
    }());

    exports.HandPose = HandPose;
    exports.load = load;

    Object.defineProperty(exports, '__esModule', { value: true });

})));