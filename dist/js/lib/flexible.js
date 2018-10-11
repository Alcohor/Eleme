/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/lib/flexible.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/flexible.js":
/*!********************************!*\
  !*** ./src/js/lib/flexible.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n// 2.0\r\n// (function flexible (window, document) {\r\n\r\n//     // 根元素  html\r\n//     var docEl = document.documentElement\r\n//     // 设备像素缩放比\r\n//     var dpr = window.devicePixelRatio || 1\r\n//     // adjust body font size\r\n//     // 因为rem变化之后，body的fontsize也会变化，这里是为了还原body的fontsize\r\n//     function setBodyFontSize () {\r\n//       if (document.body) {\r\n//         document.body.style.fontSize = (12 * dpr) + 'px'\r\n//       }\r\n//       else {\r\n//         document.addEventListener('DOMContentLoaded', setBodyFontSize)\r\n//       }\r\n//     }\r\n//     setBodyFontSize();\r\n  \r\n//     // set 1rem = viewWidth / 10\r\n//     function setRemUnit () {\r\n//       var rem = docEl.clientWidth / 10\r\n//       docEl.style.fontSize = rem + 'px'\r\n//     }\r\n  \r\n//     setRemUnit()\r\n  \r\n//     // reset rem unit on page resize\r\n//     window.addEventListener('resize', setRemUnit)\r\n//     window.addEventListener('pageshow', function (e) {\r\n//       if (e.persisted) {\r\n//         setRemUnit()\r\n//       }\r\n//     })\r\n  \r\n//     // detect 0.5px supports\r\n//     // 处理0.5像素的偏差\r\n//     if (dpr >= 2) {\r\n//       var fakeBody = document.createElement('body')\r\n//       var testElement = document.createElement('div')\r\n//       testElement.style.border = '.5px solid transparent'\r\n//       fakeBody.appendChild(testElement)\r\n//       docEl.appendChild(fakeBody)\r\n//       if (testElement.offsetHeight === 1) {\r\n//         docEl.classList.add('hairlines')\r\n//       }\r\n//       docEl.removeChild(fakeBody)\r\n//     }\r\n//   }(window, document))\r\n\r\n\r\n  ;(function(win, lib) {\r\n    var doc = win.document;\r\n    var docEl = doc.documentElement; // 根元素\r\n    var metaEl = doc.querySelector('meta[name=\"viewport\"]');\r\n    var flexibleEl = doc.querySelector('meta[name=\"flexible\"]');\r\n    var dpr = 0;\r\n    var scale = 0;\r\n    var tid;\r\n    var flexible = lib.flexible || (lib.flexible = {});\r\n    \r\n    if (metaEl) {\r\n        console.warn('将根据已有的meta标签来设置缩放比例');\r\n        var match = metaEl.getAttribute('content').match(/initial\\-scale=([\\d\\.]+)/);\r\n        if (match) {\r\n            scale = parseFloat(match[1]);\r\n            dpr = parseInt(1 / scale);\r\n        }\r\n    } else if (flexibleEl) {\r\n        var content = flexibleEl.getAttribute('content');\r\n        if (content) {\r\n            var initialDpr = content.match(/initial\\-dpr=([\\d\\.]+)/);\r\n            var maximumDpr = content.match(/maximum\\-dpr=([\\d\\.]+)/);\r\n            if (initialDpr) {\r\n                dpr = parseFloat(initialDpr[1]);\r\n                scale = parseFloat((1 / dpr).toFixed(2));    \r\n            }\r\n            if (maximumDpr) {\r\n                dpr = parseFloat(maximumDpr[1]);\r\n                scale = parseFloat((1 / dpr).toFixed(2));    \r\n            }\r\n        }\r\n    }\r\n\r\n    if (!dpr && !scale) {\r\n        var isAndroid = win.navigator.appVersion.match(/android/gi);\r\n        var isIPhone = win.navigator.appVersion.match(/iphone/gi);\r\n        var devicePixelRatio = win.devicePixelRatio;\r\n        if (isIPhone) {\r\n            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案\r\n            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                \r\n                dpr = 3;\r\n            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){\r\n                dpr = 2;\r\n            } else {\r\n                dpr = 1;\r\n            }\r\n        } else {\r\n            // 其他设备下，仍旧使用1倍的方案\r\n            dpr = 1;\r\n        }\r\n        scale = 1 / dpr;\r\n    }\r\n\r\n    docEl.setAttribute('data-dpr', dpr);\r\n    if (!metaEl) {\r\n        metaEl = doc.createElement('meta');\r\n        metaEl.setAttribute('name', 'viewport');\r\n        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');\r\n        if (docEl.firstElementChild) {\r\n            docEl.firstElementChild.appendChild(metaEl);\r\n        } else {\r\n            var wrap = doc.createElement('div');\r\n            wrap.appendChild(metaEl);\r\n            doc.write(wrap.innerHTML);\r\n        }\r\n    }\r\n\r\n    function refreshRem(){\r\n        var width = docEl.getBoundingClientRect().width;\r\n        if (width / dpr > 540) {\r\n            width = 540 * dpr;\r\n        }\r\n        var rem = width / 10;\r\n        docEl.style.fontSize = rem + 'px';\r\n        flexible.rem = win.rem = rem;\r\n    }\r\n\r\n    win.addEventListener('resize', function() {\r\n        clearTimeout(tid);\r\n        tid = setTimeout(refreshRem, 300);\r\n    }, false);\r\n    win.addEventListener('pageshow', function(e) {\r\n        if (e.persisted) {\r\n            clearTimeout(tid);\r\n            tid = setTimeout(refreshRem, 300);\r\n        }\r\n    }, false);\r\n\r\n    if (doc.readyState === 'complete') {\r\n        doc.body.style.fontSize = 12 * dpr + 'px';\r\n    } else {\r\n        doc.addEventListener('DOMContentLoaded', function(e) {\r\n            doc.body.style.fontSize = 12 * dpr + 'px';\r\n        }, false);\r\n    }\r\n    \r\n\r\n    refreshRem();\r\n\r\n    flexible.dpr = win.dpr = dpr;\r\n    flexible.refreshRem = refreshRem;\r\n    flexible.rem2px = function(d) {\r\n        var val = parseFloat(d) * this.rem;\r\n        if (typeof d === 'string' && d.match(/rem$/)) {\r\n            val += 'px';\r\n        }\r\n        return val;\r\n    }\r\n    flexible.px2rem = function(d) {\r\n        var val = parseFloat(d) / this.rem;\r\n        if (typeof d === 'string' && d.match(/px$/)) {\r\n            val += 'rem';\r\n        }\r\n        return val;\r\n    }\r\n\r\n})(window, window['lib'] || (window['lib'] = {}));\n\n//# sourceURL=webpack:///./src/js/lib/flexible.js?");

/***/ })

/******/ });