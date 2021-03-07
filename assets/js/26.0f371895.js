(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{464:function(e,t,r){"use strict";r.r(t);var o=r(43),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"about-handsfree-js-org"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#about-handsfree-js-org"}},[e._v("#")]),e._v(" About Handsfree.js.org")]),e._v(" "),r("h2",{attrs:{id:"master-plan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#master-plan"}},[e._v("#")]),e._v(" Master Plan")]),e._v(" "),r("ol",[r("li",[e._v("Create a library that makes face, hand, eye, and pose tracking and voice and mind control easy to use")]),e._v(" "),r("li",[e._v("Use the library to build a repository of custom handsfree plugins, components, and gestures")]),e._v(" "),r("li",[e._v('Use the repository to seed a "user script manager" to power a handsfree browser extension')]),e._v(" "),r("li",[e._v("Grow a community of handsfree users and developers around the library and repository")]),e._v(" "),r("li",[e._v('Start "The Handsfree Foundation" to promote creative expression')])]),e._v(" "),r("h2",{attrs:{id:"special-thanks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#special-thanks"}},[e._v("#")]),e._v(" Special Thanks")]),e._v(" "),r("p",[e._v("This project couldn't have been possible without:")]),e._v(" "),r("ul",[r("li",[e._v("Invitations to residencies at "),r("a",{attrs:{href:"https://studioforcreativeinquiry.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("The STUDIO for Creative Inquiry"),r("OutboundLink")],1),e._v(" (Spring 2019, 2021)")]),e._v(" "),r("li",[e._v("Grant from "),r("a",{attrs:{href:"https://glitch.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Glitch.com"),r("OutboundLink")],1),e._v(" (Winter 2019)")]),e._v(" "),r("li",[e._v("Grant from the School of AI Grant (Fall 2018)")]),e._v(" "),r("li",[e._v("Grant from "),r("a",{attrs:{href:"https://pair.withgoogle.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google PAIR"),r("OutboundLink")],1),e._v(" (Spring 2018)")]),e._v(" "),r("li",[e._v("GitHub Sponsors and supporters through Patreon, GoFundMe, social media, and more!")])]),e._v(" "),r("h2",{attrs:{id:"support-handsfree-js-org"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#support-handsfree-js-org"}},[e._v("#")]),e._v(" Support Handsfree.js.org")]),e._v(" "),r("p",[e._v("Please consider supporting this project 💜 There are several ways to help:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/sponsors/midiblocks",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sponsor the project on GitHub"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/midiblocks",target:"_blank",rel:"noopener noreferrer"}},[e._v("Make a Pull Request"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"changelog"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),r("div",{staticClass:"next-element-is-changelog"}),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Date")]),e._v(" "),r("th",[e._v("Version")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("2020-03-07")]),e._v(" "),r("td",[e._v("8.4.3")]),e._v(" "),r("td",[e._v("Fixes filename casing issue that prevented Handsfree.js from building on Linux")])]),e._v(" "),r("tr",[r("td",[e._v("2020-02-26")]),e._v(" "),r("td",[e._v("8.4.2")]),e._v(" "),r("td",[e._v("Adds ability to "),r("RouterLink",{attrs:{to:"/example/video-instead-of-webcam/"}},[e._v("use a video or stream instead of a webcam")])],1)]),e._v(" "),r("tr",[r("td",[e._v("2020-02-18")]),e._v(" "),r("td",[e._v("8.4.0")]),e._v(" "),r("td",[e._v("Removes the MediaPipe Holistic model. The holistic model is essentially the same as running "),r("RouterLink",{attrs:{to:"/ref/model/hands/"}},[e._v("Hands")]),e._v(", "),r("RouterLink",{attrs:{to:"/ref/model/facemesh/"}},[e._v("Facemesh")]),e._v(", and "),r("RouterLink",{attrs:{to:"/ref/model/pose/"}},[e._v("Pose")]),e._v(" together, although because the holistic data is structured differently (despite using the same models) it led to a lot of confusion and was incompatible with plugins.")],1)]),e._v(" "),r("tr",[r("td",[e._v("2020-02-06")]),e._v(" "),r("td",[e._v("8.3.0")]),e._v(" "),r("td",[e._v("Adds basic gesture support through the "),r("RouterLink",{attrs:{to:"/create-gesture/"}},[e._v("Gesture Creator")]),e._v(". This is still mostly undocumented")],1)]),e._v(" "),r("tr",[r("td",[e._v("2020-01-28")]),e._v(" "),r("td",[e._v("8.2.6")]),e._v(" "),r("td",[e._v("Adds "),r("code",[e._v("handsfree.data.hands.landmarks")]),e._v(" and "),r("code",[e._v("handsfree.data.hands.landmarksVisible")]),e._v(" to "),r("RouterLink",{attrs:{to:"/ref/model/hands/"}},[e._v("MediaPipe Hands")]),e._v(", which contain the landmarks for each hand in specific indexes:"),r("br"),r("code",[e._v(".landmarks[0] === Left Hand, Person #1")]),r("br"),r("code",[e._v(".landmarks[1] === Right Hand, Person #1")]),r("br"),r("code",[e._v(".landmarks[2] === Left Hand, Person #2")]),r("br"),r("code",[e._v(".landmarks[3] === Right Hand, Person #2")])],1)]),e._v(" "),r("tr",[r("td",[e._v("2020-01-27")]),e._v(" "),r("td",[e._v("8.2.4")]),e._v(" "),r("td",[e._v("Improved the "),r("RouterLink",{attrs:{to:"/ref/plugin/pinchScroll/"}},[e._v("pinchScroll plugin")]),e._v(" so that it continuously scrolls (instead of having to release and pinch again); "),r("code",[e._v(".handsfree-started")]),e._v(" is added to body of a "),r("a",{attrs:{href:"http://localhost:8080/ref/prop/config.html#isclient",target:"_blank",rel:"noopener noreferrer"}},[e._v("client install"),r("OutboundLink")],1),e._v(" (useful in Browser Extensions); merges the "),r("RouterLink",{attrs:{to:"/extension/"}},[e._v("Handsfree Browser Extension")]),e._v(" to improve iteration feedback cycle (not documented yet); disabling the last active model turns off the camera; fixes a few "),r("RouterLink",{attrs:{to:"/ref/model/weboji/"}},[e._v("Weboji")]),e._v(" bugs that prevented it from working with other models")],1)]),e._v(" "),r("tr",[r("td",[e._v("2020-01-25")]),e._v(" "),r("td",[e._v("8.2.3")]),e._v(" "),r("td",[r("RouterLink",{attrs:{to:"/ref/plugin/palmPointers/"}},[e._v("palmPointers plugin")]),e._v(" and "),r("RouterLink",{attrs:{to:"/ref/plugin/faceClick/"}},[e._v("faceClick")]),e._v(" now emit "),r("code",[e._v("mousedown")]),e._v(", "),r("code",[e._v("mousemove")]),e._v(", "),r("code",[e._v("mousedrag")]),e._v(", and "),r("code",[e._v("mouseup")]),e._v(" instead of just "),r("code",[e._v("click")])],1)]),e._v(" "),r("tr",[r("td",[e._v("2020-01-18")]),e._v(" "),r("td",[e._v("8.2.2")]),e._v(" "),r("td",[e._v("Adds new "),r("RouterLink",{attrs:{to:"/ref/plugin/palmPointers/"}},[e._v("palmPointers plugin")]),e._v(" and updates the "),r("RouterLink",{attrs:{to:"/ref/plugin/pinchScroll/"}},[e._v("pinchScroll plugin")]),e._v(" to support all hands. Also adds a new "),r("code",[e._v("/boilerplate/cdn/pinch-scrolling.html")])],1)]),e._v(" "),r("tr",[r("td",[e._v("2020-01-13")]),e._v(" "),r("td",[e._v("8.2.1")]),e._v(" "),r("td",[e._v("Adds new "),r("RouterLink",{attrs:{to:"/ref/model/handpose/#data"}},[e._v("normalized helper")]),e._v(": "),r("code",[e._v("handsfree.data.handpose.normalized")]),e._v(". These "),r("code",[e._v("[x, y, z]")]),e._v(" are similar to "),r("code",[e._v(".handpose.landmarks")]),e._v(" but normalized between [0, 1]")],1)]),e._v(" "),r("tr",[r("td",[e._v("2020-01-06")]),e._v(" "),r("td",[e._v("8.2.0")]),e._v(" "),r("td",[e._v("Adds "),r("RouterLink",{attrs:{to:"/ref/model/handpose/"}},[e._v("TensorFlow Handpose")]),e._v(" including a basic THREE boilerplate remixed from "),r("a",{attrs:{href:"https://github.com/LingDong-/handpose-facemesh-demos",target:"_blank",rel:"noopener noreferrer"}},[e._v("@LingDong-'s handpose-facemesh-demos"),r("OutboundLink")],1),e._v(", and a fingertip raycaster")],1)]),e._v(" "),r("tr",[r("td",[e._v("2020-01-01")]),e._v(" "),r("td",[e._v("8.1.2")]),e._v(" "),r("td",[e._v("Fixes "),r("RouterLink",{attrs:{to:"/ref/plugin/facePointer/"}},[e._v("Face Pointer")]),e._v(" offsets, which was causing the pointer to assume you were facing straight up 😆")],1)]),e._v(" "),r("tr",[r("td",[e._v("2020-12-31")]),e._v(" "),r("td",[e._v("8.1.1")]),e._v(" "),r("td",[e._v("Adds "),r("RouterLink",{attrs:{to:"/ref/plugin/pinchers/"}},[e._v("pinchers Plugin")]),e._v(" for easily working with finger pinches through events, new properties, and styles")],1)]),e._v(" "),r("tr",[r("td",[e._v("2020-12-30")]),e._v(" "),r("td",[e._v("8.1.0")]),e._v(" "),r("td",[e._v("Adds "),r("RouterLink",{attrs:{to:"/ref/method/showDebugger/"}},[e._v(".showDebugger()")]),e._v(", "),r("RouterLink",{attrs:{to:"/ref/method/hideDebugger/"}},[e._v(".hideDebugger()")]),e._v(", and helper classes. Renames "),r("code",[e._v("feedback")]),e._v(" to "),r("code",[e._v("debugger")])],1)]),e._v(" "),r("tr",[r("td",[e._v("2020-12-29")]),e._v(" "),r("td",[e._v("8.0.10")]),e._v(" "),r("td",[e._v("Fixes a bug where "),r("code",[e._v("handsfree.debug.$video")]),e._v(" had 0 width and height; Fixed issue where the webcam feed was not showing behind model wireframes when "),r("code",[e._v("handsfree.config.showDebug === true")])])]),e._v(" "),r("tr",[r("td",[e._v("2020-12-28")]),e._v(" "),r("td",[e._v("8.0.9")]),e._v(" "),r("td",[e._v("Adds "),r("a",{attrs:{href:"/ref/prop/config#isclient"}},[e._v("isClient Mode")]),e._v(" for remote inference. "),r("RouterLink",{attrs:{to:"/ref/method/runPlugins/"}},[e._v(".runPlugins()")]),e._v(" "),r("RouterLink",{attrs:{to:"/ref/method/TweenMax/"}},[e._v(".TweenMax()")]),e._v(", "),r("RouterLink",{attrs:{to:"/ref/method/throttle/"}},[e._v(".throttle()")]),e._v(", reduced filesize by 80kb+")],1)]),e._v(" "),r("tr",[r("td",[e._v("2020-12-22")]),e._v(" "),r("td",[e._v("8.0.7")]),e._v(" "),r("td",[e._v("Adds "),r("RouterLink",{attrs:{to:"/ref/model/weboji/"}},[e._v("handsfree.model.weboji.isDetected")])],1)])])])])}),[],!1,null,null,null);t.default=a.exports}}]);