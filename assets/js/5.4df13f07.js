(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{313:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},314:function(e,t,r){var n=r(0),i=r(3),s=r(106),o=[].slice,a=function(e){return function(t,r){var n=arguments.length>2,i=n?o.call(arguments,2):void 0;return e(n?function(){("function"==typeof t?t:Function(t)).apply(this,i)}:t,r)}};n({global:!0,bind:!0,forced:/MSIE .\./.test(s)},{setTimeout:a(i.setTimeout),setInterval:a(i.setInterval)})},315:function(e,t,r){var n=r(22),i="["+r(313)+"]",s=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),a=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(s,"")),2&e&&(r=r.replace(o,"")),r}};e.exports={start:a(1),end:a(2),trim:a(3)}},316:function(e,t,r){"use strict";var n=r(6),i=r(3),s=r(104),o=r(10),a=r(7),l=r(27),c=r(318),d=r(49),u=r(1),h=r(31),f=r(73).f,g=r(25).f,p=r(8).f,v=r(315).trim,m=i.Number,b=m.prototype,y="Number"==l(h(b)),w=function(e){var t,r,n,i,s,o,a,l,c=d(e,!1);if("string"==typeof c&&c.length>2)if(43===(t=(c=v(c)).charCodeAt(0))||45===t){if(88===(r=c.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(o=(s=c.slice(2)).length,a=0;a<o;a++)if((l=s.charCodeAt(a))<48||l>i)return NaN;return parseInt(s,n)}return+c};if(s("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var _,x=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof x&&(y?u((function(){b.valueOf.call(r)})):"Number"!=l(r))?c(new m(w(t)),r,x):w(t)},k=n?f(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;k.length>S;S++)a(m,_=k[S])&&!a(x,_)&&p(x,_,g(m,_));x.prototype=b,b.constructor=x,o(i,"Number",x)}},317:function(e,t,r){"use strict";var n=r(178),i=r(176),s=r(5),o=r(22),a=r(108),l=r(179),c=r(13),d=r(180),u=r(75),h=r(1),f=[].push,g=Math.min,p=!h((function(){return!RegExp(4294967295,"y")}));n("split",2,(function(e,t,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var n=String(o(this)),s=void 0===r?4294967295:r>>>0;if(0===s)return[];if(void 0===e)return[n];if(!i(e))return t.call(n,e,s);for(var a,l,c,d=[],h=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,p=new RegExp(e.source,h+"g");(a=u.call(p,n))&&!((l=p.lastIndex)>g&&(d.push(n.slice(g,a.index)),a.length>1&&a.index<n.length&&f.apply(d,a.slice(1)),c=a[0].length,g=l,d.length>=s));)p.lastIndex===a.index&&p.lastIndex++;return g===n.length?!c&&p.test("")||d.push(""):d.push(n.slice(g)),d.length>s?d.slice(0,s):d}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var i=o(this),s=null==t?void 0:t[e];return void 0!==s?s.call(t,i,r):n.call(String(i),t,r)},function(e,i){var o=r(n,e,this,i,n!==t);if(o.done)return o.value;var u=s(e),h=String(this),f=a(u,RegExp),v=u.unicode,m=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(p?"y":"g"),b=new f(p?u:"^(?:"+u.source+")",m),y=void 0===i?4294967295:i>>>0;if(0===y)return[];if(0===h.length)return null===d(b,h)?[h]:[];for(var w=0,_=0,x=[];_<h.length;){b.lastIndex=p?_:0;var k,S=d(b,p?h:h.slice(_));if(null===S||(k=g(c(b.lastIndex+(p?0:_)),h.length))===w)_=l(h,_,v);else{if(x.push(h.slice(w,_)),x.length===y)return x;for(var C=1;C<=S.length-1;C++)if(x.push(S[C]),x.length===y)return x;_=w=k}}return x.push(h.slice(w)),x}]}),!p)},318:function(e,t,r){var n=r(4),i=r(105);e.exports=function(e,t,r){var s,o;return i&&"function"==typeof(s=t.constructor)&&s!==r&&n(o=s.prototype)&&o!==r.prototype&&i(e,o),e}},319:function(e,t,r){"use strict";var n=r(0),i=r(29).find,s=r(102),o=r(17),a=!0,l=o("find");"find"in[]&&Array(1).find((function(){a=!1})),n({target:"Array",proto:!0,forced:a||!l},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),s("find")},321:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(175);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},323:function(e,t,r){var n=r(0),i=r(6);n({target:"Object",stat:!0,forced:!i,sham:!i},{defineProperties:r(182)})},328:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r(44),r(24),r(96),r(323),r(175),r(329),r(184),r(98),r(97);var n=r(321);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},329:function(e,t,r){var n=r(0),i=r(1),s=r(14),o=r(25).f,a=r(6),l=i((function(){o(1)}));n({target:"Object",stat:!0,forced:!a||l,sham:!a},{getOwnPropertyDescriptor:function(e,t){return o(s(e),t)}})},350:function(e,t,r){},397:function(e,t,r){r(44),r(47),r(74),r(398),r(400),r(316),r(323),r(175),r(9),r(45),r(26),r(317),r(30);var n=r(401);(function(){"use strict";function e(e){var t=0;return function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}}}function t(t){var r="undefined"!=typeof Symbol&&Symbol.iterator&&t[Symbol.iterator];return r?r.call(t):{next:e(t)}}var r="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,r){return e==Array.prototype||e==Object.prototype||(e[t]=r.value),e};var i=function(e){e=["object"==("undefined"==typeof globalThis?"undefined":n(globalThis))&&globalThis,e,"object"==("undefined"==typeof window?"undefined":n(window))&&window,"object"==("undefined"==typeof self?"undefined":n(self))&&self,"object"==("undefined"==typeof global?"undefined":n(global))&&global];for(var t=0;t<e.length;++t){var r=e[t];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}(this);function s(e,t){if(t)e:{var n=i;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in n))break e;n=n[o]}(t=t(s=n[e=e[e.length-1]]))!=s&&null!=t&&r(n,e,{configurable:!0,writable:!0,value:t})}}var o="function"==typeof Object.assign?Object.assign:function(e,t){for(var r=1;r<arguments.length;r++){var n=arguments[r];if(n)for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function a(e){return e||Array.prototype.fill}s("Object.assign",(function(e){return e||o})),s("Array.prototype.fill",(function(e){return e||function(e,t,r){var n=this.length||0;for(0>t&&(t=Math.max(0,n+t)),(null==r||r>n)&&(r=n),0>(r=Number(r))&&(r=Math.max(0,n+r)),t=Number(t||0);t<r;t++)this[t]=e;return this}})),s("Int8Array.prototype.fill",a),s("Uint8Array.prototype.fill",a),s("Uint8ClampedArray.prototype.fill",a),s("Int16Array.prototype.fill",a),s("Uint16Array.prototype.fill",a),s("Int32Array.prototype.fill",a),s("Uint32Array.prototype.fill",a),s("Float32Array.prototype.fill",a),s("Float64Array.prototype.fill",a);var l=this||self;function c(e,t){e=e.split(".");var r,n=l;e[0]in n||void 0===n.execScript||n.execScript("var "+e[0]);for(;e.length&&(r=e.shift());)e.length||void 0===t?n=n[r]&&n[r]!==Object.prototype[r]?n[r]:n[r]={}:n[r]=t}var d={color:"white",lineWidth:4,radius:6};function u(e){return e=e||{},Object.assign(Object.assign(Object.assign({},d),{fillColor:e.color}),e)}c("drawLandmarks",(function(e,r,n){if(r){n=u(n),e.save();var i=e.canvas;e.fillStyle=n.fillColor,e.strokeStyle=n.color,e.lineWidth=n.lineWidth;for(var s=(r=t(r)).next();!s.done;s=r.next())if(void 0!==(s=s.value)&&!(void 0!==s.visibility&&.1>s.visibility)){var o=new Path2D;o.arc(s.x*i.width,s.y*i.height,n.radius,0,2*Math.PI),e.fill(o),e.stroke(o)}e.restore()}})),c("drawConnectors",(function(e,r,n,i){if(r&&n){var s=u(i);for(e.save(),i=e.canvas,e.strokeStyle=s.color,e.lineWidth=s.lineWidth,e.beginPath(),s=(n=t(n)).next();!s.done;s=n.next()){var o=s.value;s=r[o[0]],o=r[o[1]],s&&o&&(e.moveTo(s.x*i.width,s.y*i.height),e.lineTo(o.x*i.width,o.y*i.height))}e.stroke(),e.restore()}})),c("drawRectangle",(function(e,t,r){r=u(r),e.save();var n=e.canvas;e.scale(n.width,n.height),e.fillStyle=r.color,e.translate(t.xCenter,t.yCenter),e.rotate(t.rotation*Math.PI/180),e.fillRect(-t.width/2,-t.height/2,t.width,t.height),e.restore()}))}).call(this)},398:function(e,t,r){var n=r(0),i=r(399),s=r(102);n({target:"Array",proto:!0},{fill:i}),s("fill")},399:function(e,t,r){"use strict";var n=r(11),i=r(113),s=r(13);e.exports=function(e){for(var t=n(this),r=s(t.length),o=arguments.length,a=i(o>1?arguments[1]:void 0,r),l=o>2?arguments[2]:void 0,c=void 0===l?r:i(l,r);c>a;)t[a++]=e;return t}},400:function(e,t,r){r(0)({global:!0},{globalThis:r(3)})},401:function(e,t,r){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}r(44),r(47),r(74),r(9),r(26),r(30),e.exports=n},402:function(e,t,r){"use strict";r(350)},435:function(e,t,r){"use strict";r.r(t);r(44),r(47),r(172),r(319),r(96),r(174),r(181),r(71),r(50),r(69),r(98),r(45),r(72),r(317),r(97),r(314);var n=r(328),i=r(41),s=r(397),o=3,a=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]],l={filters:{prettyPrintJSON:function(e){return"handsfree.useGesture(".concat(JSON.stringify(e,null,2),")")}},data:function(){var e={};if("undefined"!=typeof localStorage&&(e=localStorage.lastCreatedGesture||{}),"string"==typeof e)try{e=JSON.parse(e)}catch(t){console.error(t),e={}}var t=Object.assign({},e);return delete t.recordedShapes,delete t.fingerWeights,delete t.mirror,{recordedShapes:e.recordedShapes||[],currentGesture:{name:null,confidence:0},gesture:t.name?t:{name:"untitled",algorithm:"fingerpose",models:"hands",confidence:7.5,description:[]},fingerWeights:e.fingerWeights||{Thumb:null,Index:null,Middle:null,Ring:null,Pinky:null},mirror:e.mirror||{horiz:!1,vert:!1},demoOpts:{hands:{autostart:!0,weboji:!1,hands:{enabled:!0,maxNumHands:1},handpose:!1,facemesh:!1,pose:!1},handpose:{autostart:!0,weboji:!1,hands:!1,handpose:!0,facemesh:!1,pose:!1}}}},mounted:function(){var e=this;!function t(){e.$root.handsfree?e.$nextTick((function(){e.$root.handsfree.use("displayShape",e.displayShape),e.$root.handsfree.use("recordShapes",{enabled:!1,onFrame:e.$root.handsfree.throttle(e.recordShapes,100),onEnable:e.resetShapes,onDisable:e.stopRecordingShapes}),e.$root.handsfree.use("displayCurrentGesture",e.displayCurrentGesture),e.recordedShapes.length&&e.renderRecording()})):setTimeout(t,5)}()},destroyed:function(){this.$root.handsfree.plugin.displayShape.disable(),this.$root.handsfree.plugin.recordShapes.disable()},methods:{startDemo:function(e,t){this.$root.handsfree.update(this.demoOpts[e],t)},updateModel:function(e){var t=e.target.value;this.gesture.models=t,document.querySelectorAll(".model-button-container").forEach((function(e){e.classList.contains("model-button-container-".concat(t))?e.classList.remove("hidden"):e.classList.add("hidden")}))},resetShapes:function(){this.recordedShapes=[]},displayShape:function(e){if(e.hands&&e.hands.gesture){var t="",r=e.hands.gesture.find((function(e){return!!e}));r?(t+="<li>Thumb | ".concat(r.pose[0][1]," | ").concat(r.pose[0][2],"</li>"),t+="<li>Index | ".concat(r.pose[1][1]," | ").concat(r.pose[1][2],"</li>"),t+="<li>Middle | ".concat(r.pose[2][1]," | ").concat(r.pose[2][2],"</li>"),t+="<li>Ring | ".concat(r.pose[3][1]," | ").concat(r.pose[3][2],"</li>"),t+="<li>Pinky | ".concat(r.pose[4][1]," | ").concat(r.pose[4][2],"</li>"),t+="<li>--------</li>",t+="<li></li>"):t+="<li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li>",this.$refs.currentShapeBox.innerHTML=t}},startRecordingShapes:function(){this.$root.handsfree.isLooping?(o=0,this.$refs.recordLandmarks.disabled=!0,this.countdown()):this.startDemo(this.$refs.modelSelector.value,this.startRecordingShapes)},countdown:function(){var e=this;--o>0?(this.$refs.recordLandmarks.innerText="".concat(o,"..."),setTimeout((function(){e.countdown()}),1e3)):(this.$root.handsfree.plugin.recordShapes.enable(),this.$refs.recordLandmarks.innerText="Recording...")},recordShapes:function(e){e.hands&&this.recordedShapes.push({gesture:e.hands.gesture,landmarks:e.hands.landmarks}),this.recordedShapes.length>29&&this.$root.handsfree.plugin.recordShapes.disable()},stopRecordingShapes:function(){this.$refs.recordLandmarks.disabled=!1,this.$refs.recordLandmarks.innerText="Record Landmarks",this.renderRecording()},renderRecording:function(){var e=this;this.$refs.recordingCanvasContainer.innerHTML="",this.recordedShapes.forEach((function(t,r){var n=document.createElement("DIV");n.classList.add("landmark-canvas-wrap","col-5");var i=document.createElement("CANVAS");i.classList.add("landmark-canvas"),i.width=e.$root.handsfree.debug.$canvas.hands.width,i.height=e.$root.handsfree.debug.$canvas.hands.height,i.addEventListener("click",(function(){return e.toggleFrame(i,r)})),t.removed&&i.classList.add("removed"),n.appendChild(i),e.$refs.recordingCanvasContainer.appendChild(n),e.renderHand(i,t)})),this.generateGestureDescription()},renderHand:function(e,t){var r=e.getContext("2d");t.landmarks.forEach((function(e){Object(s.drawConnectors)(r,e,a,{color:"#00FF00",lineWidth:5}),Object(s.drawLandmarks)(r,e,{color:"#FF0000",lineWidth:2})}))},toggleFrame:function(e,t){e.classList.contains("removed")?(e.classList.remove("removed"),this.recordedShapes[t].removed=!1):(e.classList.add("removed"),this.recordedShapes[t].removed=!0),this.generateGestureDescription()},generateGestureDescription:function(){var e=this,t=[],r={Thumb:{curl:{},direction:{}},Index:{curl:{},direction:{}},Middle:{curl:{},direction:{}},Ring:{curl:{},direction:{}},Pinky:{curl:{},direction:{}}};if(this.recordedShapes.forEach((function(e){if(!e.removed){var t=e.gesture.find((function(e){return!!e}));null!=t&&t.pose&&t.pose.forEach((function(e){r[e[0]].curl[e[1]]?r[e[0]].curl[e[1]]++:r[e[0]].curl[e[1]]=1,r[e[0]].direction[e[2]]?r[e[0]].direction[e[2]]++:r[e[0]].direction[e[2]]=1}))}})),Object.keys(r).forEach((function(e){var n=r[e],s=Object.keys(n.curl).map((function(e){return n.curl[e]})),o=s[s.indexOf(Math.max.apply(Math,Object(i.a)(s)))];Object.keys(n.curl).forEach((function(r){t.push(["addCurl",e,r.split(" ").join(""),n.curl[r]/o])}));var a=Object.keys(n.direction).map((function(e){return n.direction[e]})),l=a[a.indexOf(Math.max.apply(Math,Object(i.a)(a)))];Object.keys(n.direction).forEach((function(r){t.push(["addDirection",e,r.split(" ").join(""),n.direction[r]/l])}))})),this.mirror.horiz){var n=[];t.forEach((function(e){var t=[];"addDirection"===e[0]&&(e[2].indexOf("UpLeft")>-1?(t=e.slice())[2]=t[2].replace("UpLeft","UpRight"):e[2].indexOf("UpRight")>-1?(t=e.slice())[2]=t[2].replace("UpRight","UpLeft"):e[2].indexOf("DownLeft")>-1?(t=e.slice())[2]=t[2].replace("DownLeft","DownRight"):e[2].indexOf("DownRight")>-1?(t=e.slice())[2]=t[2].replace("DownRight","DownLeft"):e[2].indexOf("Right")>-1?(t=e.slice())[2]=t[2].replace("Right","Left"):e[2].indexOf("Left")>-1&&((t=e.slice())[2]=t[2].replace("Left","Right"))),t.length&&n.push(t)})),n.length&&(t=t.concat(n))}if(this.mirror.vert){var s=[];t.forEach((function(e){var t=[];"addDirection"===e[0]&&(e[2].indexOf("UpLeft")>-1?(t=e.slice())[2]=t[2].replace("UpLeft","DownLeft"):e[2].indexOf("UpRight")>-1?(t=e.slice())[2]=t[2].replace("UpRight","DownRight"):e[2].indexOf("DownLeft")>-1?(t=e.slice())[2]=t[2].replace("DownLeft","UpLeft"):e[2].indexOf("DownRight")>-1?(t=e.slice())[2]=t[2].replace("DownRight","UpRight"):e[2].indexOf("Up")>-1?(t=e.slice())[2]=t[2].replace("Up","Down"):e[2].indexOf("Down")>-1&&((t=e.slice())[2]=t[2].replace("Down","Up"))),t.length&&s.push(t)})),s.length&&(t=t.concat(s))}Object.keys(this.fingerWeights).forEach((function(r){e.fingerWeights[r]&&t.push(["setWeight",r,2])})),this.gesture.description=t,this.saveGesture(),this.$root.handsfree.useGesture(this.gesture)},displayCurrentGesture:function(e){var t,r;null!==(t=e.hands)&&void 0!==t&&null!==(r=t.gesture)&&void 0!==r&&r[0]?this.currentGesture=e.hands.gesture[0]:this.currentGesture={name:null,confidence:0}},updateFingerWeight:function(){this.generateGestureDescription()},onGestureNameUpdate:function(){this.gesture.name.indexOf(" ")>=0&&(this.gesture.name=this.gesture.name.split(" ").join("")),this.gesture.name||(this.gesture.name="untitled"),this.saveGesture()},saveGesture:function(){localStorage.lastCreatedGesture=JSON.stringify(Object(n.a)(Object(n.a)({},this.gesture),{},{enabled:!0,mirror:this.mirror,recordedShapes:this.recordedShapes,fingerWeights:this.fingerWeights}))},reset:function(){localStorage.removeItem("lastCreatedGesture"),this.gesture={name:"untitled",algorithm:"fingerpose",models:"hands",confidence:7.5,description:[]},this.recordedShapes=[],this.currentGesture={name:null,confidence:0},this.fingerWeights={Thumb:null,Index:null,Middle:null,Ring:null,Pinky:null},this.mirror={horiz:!1,vert:!1},this.$refs.recordingCanvasContainer.innerHTML="",window.scrollTo(0,0)}}},c=(r(402),r(43)),d=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"🖖-create-gesture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#🖖-create-gesture"}},[e._v("#")]),e._v(" 🖖 Create Gesture")]),e._v(" "),r("div",{staticClass:"row align-top"},[r("div",{staticClass:"col-6"},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("Video and documentation coming soon!")])])]),e._v(" "),r("div",{staticClass:"col-6"},[r("Window",{attrs:{title:"Step 1: Choose a model"}},[r("section",[r("p",[e._v("To begin, select a model below:")]),e._v(" "),r("p",[r("select",{ref:"modelSelector",staticClass:"full-width",on:{change:e.updateModel}},[r("option",{attrs:{value:"hands"}},[e._v("🖐 MediaPipe Hands")])])]),e._v(" "),r("div",{staticClass:"model-button-container model-button-container-hands"},[r("HandsfreeToggle",{staticClass:"full-width handsfree-hide-when-started-without-hands",attrs:{"text-off":"Start Hands","text-on":"Stop Hands Model",opts:e.demoOpts.hands}}),e._v(" "),r("button",{staticClass:"handsfree-show-when-started-without-hands handsfree-show-when-loading",attrs:{disabled:""}},[r("Fa-Spinner",{attrs:{spin:""}}),e._v(" Loading...")],1),e._v(" "),r("button",{staticClass:"handsfree-show-when-started-without-hands handsfree-hide-when-loading",on:{click:function(t){return e.startDemo("hands")}}},[r("Fa-Video"),e._v(" Start Hands")],1)],1),e._v(" "),r("div",{staticClass:"model-button-container model-button-container-handpose hidden"},[r("HandsfreeToggle",{staticClass:"full-width handsfree-hide-when-started-without-handpose",attrs:{"text-off":"Start Handpose","text-on":"Stop Handpose Model",opts:e.demoOpts.handpose}}),e._v(" "),r("button",{staticClass:"handsfree-show-when-started-without-handpose handsfree-show-when-loading",attrs:{disabled:""}},[r("Fa-Spinner",{attrs:{spin:""}}),e._v(" Loading...")],1),e._v(" "),r("button",{staticClass:"handsfree-show-when-started-without-handpose handsfree-hide-when-loading",on:{click:function(t){return e.startDemo("handpose")}}},[r("Fa-Video"),e._v(" Start Handpose")],1)],1)])])],1)]),e._v(" "),r("Window",{attrs:{title:"Step 2: Collect samples"}},[r("div",{staticClass:"row align-top"},[r("div",{staticClass:"col-6"},[r("fieldset",[r("legend",[e._v("Current Shape")]),e._v(" "),r("ul",{ref:"currentShapeBox",staticClass:"mt-0 mb-0 tree-view",staticStyle:{"min-height":"220px"}},[r("li",[e._v(" ")]),e._v(" "),r("li",[e._v(" ")]),e._v(" "),r("li",[e._v(" ")]),e._v(" "),r("li",[e._v(" ")]),e._v(" "),r("li",[e._v(" ")]),e._v(" "),r("li",[e._v(" ")]),e._v(" "),r("li",[e._v(" ")])])])]),e._v(" "),r("div",{staticClass:"col-6"},[r("ol",[r("li",[e._v("Select the number of hands required for this gesture to work")]),e._v(" "),r("li",[e._v("Click the button below to record landmarks for 3 seconds")]),e._v(" "),r("li",[e._v("Move your hands around slightly to capture subtle variations")])]),e._v(" "),r("p"),r("fieldset",[r("legend",[e._v("Number of hands")]),e._v(" "),r("div",{staticClass:"field-row"},[r("input",{attrs:{id:"radio-1-hands",type:"radio",name:"radio-number-hands",checked:""}}),e._v(" "),r("label",{attrs:{for:"radio-1-hands"}},[e._v("1 Hand")])]),e._v(" "),r("div",{staticClass:"field-row"},[r("input",{attrs:{id:"radio-2-hands",disabled:"",type:"radio",name:"radio-number-hands"}}),e._v(" "),r("label",{attrs:{for:"radio-2-hands"}},[e._v("2 Hands")])])]),e._v(" "),r("p"),e._v(" "),r("div",[r("button",{ref:"recordLandmarks",staticClass:"handsfree-hide-when-loading full-width",on:{click:e.startRecordingShapes}},[e._v("Record landmarks")]),e._v(" "),r("button",{staticClass:"handsfree-show-when-loading",attrs:{disabled:""}},[r("Fa-Spinner",{attrs:{spin:""}}),e._v(" Loading...")],1)])])])]),e._v(" "),r("Window",{attrs:{title:"Step 3: Clean Data"}},[r("p",[e._v("Click on any of the frames below that don't look right to remove them. The final gesture description does not use a neural network, so the number of samples isn't as important as the quality!")]),e._v(" "),r("div",{ref:"recordingCanvasContainer",staticClass:"row align-top"})]),e._v(" "),r("Window",{attrs:{title:"Step 4: Gesture Description"}},[r("div",{staticClass:"row align-top"},[r("div",{staticClass:"col-6"},[r("fieldset",[r("legend",[e._v("Gesture Description")]),e._v(" "),r("textarea",{ref:"gestureDescriptionJSON",staticStyle:{width:"100%"},attrs:{readonly:"",rows:"20"},domProps:{value:e._f("prettyPrintJSON")(e.gesture)}})])]),e._v(" "),r("div",{staticClass:"col-6"},[r("div",{staticClass:"field-row-stacked"},[r("label",{attrs:{for:"input-gesture-name"}},[r("strong",[e._v("Gesture Name (no spaces):")])]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.gesture.name,expression:"gesture.name"}],attrs:{id:"input-gesture-name",type:"text"},domProps:{value:e.gesture.name},on:{input:[function(t){t.target.composing||e.$set(e.gesture,"name",t.target.value)},e.onGestureNameUpdate]}})]),e._v(" "),r("br"),e._v(" "),r("fieldset",[r("legend",[e._v("Emphasize Fingers")]),e._v(" "),r("div",{staticClass:"field-row"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.fingerWeights.Thumb,expression:"fingerWeights.Thumb"}],attrs:{id:"finger-weight-thumb",type:"checkbox",name:"radio-number-hands"},domProps:{checked:Array.isArray(e.fingerWeights.Thumb)?e._i(e.fingerWeights.Thumb,null)>-1:e.fingerWeights.Thumb},on:{change:[function(t){var r=e.fingerWeights.Thumb,n=t.target,i=!!n.checked;if(Array.isArray(r)){var s=e._i(r,null);n.checked?s<0&&e.$set(e.fingerWeights,"Thumb",r.concat([null])):s>-1&&e.$set(e.fingerWeights,"Thumb",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.fingerWeights,"Thumb",i)},e.generateGestureDescription]}}),e._v(" "),r("label",{attrs:{for:"finger-weight-thumb"}},[e._v("Thumb")])]),e._v(" "),r("div",{staticClass:"field-row"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.fingerWeights.Index,expression:"fingerWeights.Index"}],attrs:{id:"finger-weight-index",type:"checkbox",name:"radio-number-hands"},domProps:{checked:Array.isArray(e.fingerWeights.Index)?e._i(e.fingerWeights.Index,null)>-1:e.fingerWeights.Index},on:{change:[function(t){var r=e.fingerWeights.Index,n=t.target,i=!!n.checked;if(Array.isArray(r)){var s=e._i(r,null);n.checked?s<0&&e.$set(e.fingerWeights,"Index",r.concat([null])):s>-1&&e.$set(e.fingerWeights,"Index",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.fingerWeights,"Index",i)},e.generateGestureDescription]}}),e._v(" "),r("label",{attrs:{for:"finger-weight-index"}},[e._v("Index")])]),e._v(" "),r("div",{staticClass:"field-row"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.fingerWeights.Middle,expression:"fingerWeights.Middle"}],attrs:{id:"finger-weight-middle",type:"checkbox",name:"radio-number-hands"},domProps:{checked:Array.isArray(e.fingerWeights.Middle)?e._i(e.fingerWeights.Middle,null)>-1:e.fingerWeights.Middle},on:{change:[function(t){var r=e.fingerWeights.Middle,n=t.target,i=!!n.checked;if(Array.isArray(r)){var s=e._i(r,null);n.checked?s<0&&e.$set(e.fingerWeights,"Middle",r.concat([null])):s>-1&&e.$set(e.fingerWeights,"Middle",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.fingerWeights,"Middle",i)},e.generateGestureDescription]}}),e._v(" "),r("label",{attrs:{for:"finger-weight-middle"}},[e._v("Middle")])]),e._v(" "),r("div",{staticClass:"field-row"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.fingerWeights.Ring,expression:"fingerWeights.Ring"}],attrs:{id:"finger-weight-ring",type:"checkbox",name:"radio-number-hands"},domProps:{checked:Array.isArray(e.fingerWeights.Ring)?e._i(e.fingerWeights.Ring,null)>-1:e.fingerWeights.Ring},on:{change:[function(t){var r=e.fingerWeights.Ring,n=t.target,i=!!n.checked;if(Array.isArray(r)){var s=e._i(r,null);n.checked?s<0&&e.$set(e.fingerWeights,"Ring",r.concat([null])):s>-1&&e.$set(e.fingerWeights,"Ring",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.fingerWeights,"Ring",i)},e.generateGestureDescription]}}),e._v(" "),r("label",{attrs:{for:"finger-weight-ring"}},[e._v("Ring")])]),e._v(" "),r("div",{staticClass:"field-row"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.fingerWeights.Pinky,expression:"fingerWeights.Pinky"}],attrs:{id:"finger-weight-pinky",type:"checkbox",name:"radio-number-hands"},domProps:{checked:Array.isArray(e.fingerWeights.Pinky)?e._i(e.fingerWeights.Pinky,null)>-1:e.fingerWeights.Pinky},on:{change:[function(t){var r=e.fingerWeights.Pinky,n=t.target,i=!!n.checked;if(Array.isArray(r)){var s=e._i(r,null);n.checked?s<0&&e.$set(e.fingerWeights,"Pinky",r.concat([null])):s>-1&&e.$set(e.fingerWeights,"Pinky",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.fingerWeights,"Pinky",i)},e.generateGestureDescription]}}),e._v(" "),r("label",{attrs:{for:"finger-weight-pinky"}},[e._v("Pinky")])])]),e._v(" "),r("br"),e._v(" "),r("fieldset",[r("legend",[e._v("Confidence: "),r("span",{domProps:{innerHTML:e._s(e.gesture.confidence)}})]),e._v(" "),r("div",{staticClass:"field-row"},[r("label",{attrs:{for:"range-confidence"}},[e._v("0")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.gesture.confidence,expression:"gesture.confidence"}],attrs:{id:"range-confidence",type:"range",step:"0.25",min:"0",max:"10",value:"7.5"},domProps:{value:e.gesture.confidence},on:{change:e.generateGestureDescription,__r:function(t){return e.$set(e.gesture,"confidence",t.target.value)}}}),e._v(" "),r("label",{attrs:{for:"range-confidence"}},[e._v("10")])])]),e._v(" "),r("br"),e._v(" "),r("fieldset",[r("legend",[e._v("Mirroring")]),e._v(" "),r("div",{staticClass:"field-row"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.mirror.horiz,expression:"mirror.horiz"}],attrs:{id:"mirror-horiz",type:"checkbox"},domProps:{checked:Array.isArray(e.mirror.horiz)?e._i(e.mirror.horiz,null)>-1:e.mirror.horiz},on:{change:[function(t){var r=e.mirror.horiz,n=t.target,i=!!n.checked;if(Array.isArray(r)){var s=e._i(r,null);n.checked?s<0&&e.$set(e.mirror,"horiz",r.concat([null])):s>-1&&e.$set(e.mirror,"horiz",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.mirror,"horiz",i)},e.generateGestureDescription]}}),e._v(" "),r("label",{attrs:{for:"mirror-horiz"}},[e._v("Mirror horizontally")])]),e._v(" "),r("div",{staticClass:"field-row"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.mirror.vert,expression:"mirror.vert"}],attrs:{id:"mirror-vert",type:"checkbox"},domProps:{checked:Array.isArray(e.mirror.vert)?e._i(e.mirror.vert,null)>-1:e.mirror.vert},on:{change:[function(t){var r=e.mirror.vert,n=t.target,i=!!n.checked;if(Array.isArray(r)){var s=e._i(r,null);n.checked?s<0&&e.$set(e.mirror,"vert",r.concat([null])):s>-1&&e.$set(e.mirror,"vert",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.mirror,"vert",i)},e.generateGestureDescription]}}),e._v(" "),r("label",{attrs:{for:"mirror-vert"}},[e._v("Mirror vertically")])])])])])]),e._v(" "),r("div",{staticClass:"row align-top"},[r("div",{staticClass:"col-6"},[r("Window",{attrs:{title:"Predicted Gesture"}},[r("div",[r("strong",[e._v("Name:")]),e._v(" "),r("span",{domProps:{innerHTML:e._s(e.currentGesture.name)}})]),e._v(" "),r("div",[r("strong",[e._v("Confidence:")]),e._v(" "),r("span",{domProps:{innerHTML:e._s(e.currentGesture.confidence)}})])])],1),e._v(" "),r("div",{staticClass:"col-6"},[r("Window",{attrs:{title:"Clear and reset"}},[r("button",{staticClass:"full-width",on:{click:e.reset}},[e._v("Start a new gesture")])])],1)])],1)}),[],!1,null,null,null);t.default=d.exports}}]);