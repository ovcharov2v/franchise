/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/_header.js":
/*!***************************!*\
  !*** ./src/js/_header.js ***!
  \***************************/
/*! exports provided: closeMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeMenu", function() { return closeMenu; });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/js/main.js");

var header = document.querySelector('.header');
if (header) {
  var menuBtn = document.querySelector('.header__menu-btn');
  var btn = document.querySelector('.header__btn');
  menuBtn.addEventListener('click', function () {
    if (header.classList.contains('header--menu-open')) {
      closeMenu();
    } else {
      header.classList.add('header--menu-open');
      Object(_main__WEBPACK_IMPORTED_MODULE_0__["setBodyOverflow"])(true);
    }
  });
  btn.addEventListener('click', function () {
    return closeMenu();
  });
}
var closeMenu = function closeMenu() {
  header.classList.remove('header--menu-open');
  Object(_main__WEBPACK_IMPORTED_MODULE_0__["setBodyOverflow"])(false);
};
document.addEventListener('click', function (evt) {
  if (!evt.target.closest('.header')) {
    closeMenu();
  }
});

/***/ }),

/***/ "./src/js/_modal.js":
/*!**************************!*\
  !*** ./src/js/_modal.js ***!
  \**************************/
/*! exports provided: showModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/js/main.js");

var modal = document.querySelector('.modal');
var header = document.querySelector('.header');
var modalCloseBtnList = modal.querySelectorAll('.modal__close');
if (modalCloseBtnList.length) {
  modalCloseBtnList.forEach(function (btn) {
    btn.addEventListener('click', function () {
      return closeModal();
    });
  });
}
modal.addEventListener('click', function (evt) {
  if (!evt.target.closest('.modal__window')) {
    closeModal();
  }
});
var showModal = function showModal() {
  Object(_main__WEBPACK_IMPORTED_MODULE_0__["setBodyOverflow"])(true);
  modal.style.display = 'flex';
  setTimeout(function () {
    modal.classList.add('modal--show');
  }, 50);
};
var closeModal = function closeModal() {
  modal.classList.remove('modal--show');
  setTimeout(function () {
    Object(_main__WEBPACK_IMPORTED_MODULE_0__["setBodyOverflow"])(false);
    modal.style.display = '';
  }, 300);
};

/***/ }),

/***/ "./src/js/_section-cities.js":
/*!***********************************!*\
  !*** ./src/js/_section-cities.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");

var section = document.querySelector('.section-cities');
if (section) {
  var citySlider = null;
  var initCitySlider = function initCitySlider() {
    if (window.innerWidth > 767) {
      if (citySlider) {
        citySlider.destroy(true, true);
        citySlider = null;
      }
    } else {
      if (!citySlider) {
        citySlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.section-cities__slider', {
          slidesPerView: 1.1,
          spaceBetween: 8
        });
      }
    }
  };
  initCitySlider();
  window.addEventListener('resize', function () {
    initCitySlider();
  });
}

/***/ }),

/***/ "./src/js/_section-conditions.js":
/*!***************************************!*\
  !*** ./src/js/_section-conditions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");

var section = document.querySelector('.section-conditions');
if (section) {
  var conditionsSlider = null;
  var initConditionsSlider = function initConditionsSlider() {
    if (window.innerWidth > 767) {
      if (conditionsSlider) {
        conditionsSlider.destroy(true, true);
        conditionsSlider = null;
      }
    } else {
      if (!conditionsSlider) {
        conditionsSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.section-conditions__slider', {
          slidesPerView: 1.3,
          spaceBetween: 8
        });
      }
    }
  };
  initConditionsSlider();
  window.addEventListener('resize', function () {
    initConditionsSlider();
  });
}

/***/ }),

/***/ "./src/js/_section-faq.js":
/*!********************************!*\
  !*** ./src/js/_section-faq.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var faqBlockList = document.querySelectorAll('.section-faq__block');
if (faqBlockList.length) {
  faqBlockList.forEach(function (block) {
    var titleBox = block.querySelector('.section-faq__block-title-box');
    titleBox.addEventListener('click', function () {
      faqBlockList.forEach(function (el) {
        if (el !== block) {
          el.classList.remove('section-faq__block--active');
        }
      });
      block.classList.toggle('section-faq__block--active');
    });
  });
}

/***/ }),

/***/ "./src/js/_section-order.js":
/*!**********************************!*\
  !*** ./src/js/_section-order.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_modal */ "./src/js/_modal.js");



// Input masks
var phoneMask = Object(imask__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector('#phone'), {
  mask: '+{7}(000) 000-00-00'
});

// Form submit
var form = document.querySelector('.section-order__form');
if (form) {
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    Object(_modal__WEBPACK_IMPORTED_MODULE_1__["showModal"])();
    var data = new URLSearchParams(new FormData(form));
    fetch("https://ovcharov2v.github.io/franchise/index.html", {
      method: 'post',
      body: data
    }).then(function (response) {
      //response.json()
      // ----do something----
      Object(_modal__WEBPACK_IMPORTED_MODULE_1__["showModal"])();
    });
    formReset();
  });
}
var formReset = function formReset() {
  phoneMask.updateValue();
  form.reset();
};

/***/ }),

/***/ "./src/js/_section-photo.js":
/*!**********************************!*\
  !*** ./src/js/_section-photo.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");

var section = document.querySelector('.section-photo');
if (section) {
  var photoSlider = null;
  var initPhotoSlider = function initPhotoSlider() {
    if (window.innerWidth > 1024) {
      if (photoSlider) {
        photoSlider.destroy(true, true);
        photoSlider = null;
      }
    } else {
      if (!photoSlider) {
        photoSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.section-photo__slider', {
          slidesPerView: 'auto',
          spaceBetween: 8
        });
      }
    }
  };
  initPhotoSlider();
  window.addEventListener('resize', function () {
    initPhotoSlider();
  });
}

/***/ }),

/***/ "./src/js/_section-process.js":
/*!************************************!*\
  !*** ./src/js/_section-process.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");



// Desktop slider
var section = document.querySelector('.section-process');
if (section) {
  var processSlider = null;
  var processSubSliderList = [];
  var initProcessSlider = function initProcessSlider() {
    if (window.innerWidth < 1024) {
      if (processSlider) {
        processSlider.destroy(true, true);
        processSlider = null;
      }
      if (!processSubSliderList.length) {
        var list = section.querySelectorAll('.section-process__subslider');
        list.forEach(function (el) {
          var slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](el, {
            slidesPerView: 1.3,
            spaceBetween: 8,
            breakpoints: {
              768: {
                slidesPerView: 2.7
              }
            }
          });
          processSubSliderList.push(slider);
        });
      }
    } else {
      if (!processSlider) {
        processSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.section-process__slider', {
          modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Navigation"]],
          slidesPerView: 1,
          spaceBetween: 0,
          navigation: {
            prevEl: '.section-process .slider-btn--prev',
            nextEl: '.section-process .slider-btn--next'
          },
          on: {
            transitionStart: function transitionStart(slider) {
              var btn = section.querySelector(".section-process__nav-elem[data-slide=\"".concat(slider.realIndex, "\"]"));
              var activeBtn = section.querySelector('.section-process__nav-elem--active');
              btn.classList.add('section-process__nav-elem--active');
              activeBtn.classList.remove('section-process__nav-elem--active');
            }
          }
        });
      }
      if (processSubSliderList) {
        processSubSliderList.forEach(function (subslider) {
          subslider.destroy(true, true);
        });
        processSubSliderList = [];
      }
    }
  };
  initProcessSlider();
  window.addEventListener('resize', function () {
    initProcessSlider();
  });
  var navBtnList = section.querySelectorAll('.section-process__nav-elem');
  if (navBtnList.length) {
    navBtnList.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (processSlider && !btn.classList.contains('section-process__nav-elem--active')) {
          processSlider.slideTo(parseInt(btn.dataset.slide));
        }
      });
    });
  }
}

/***/ }),

/***/ "./src/js/_section-steps.js":
/*!**********************************!*\
  !*** ./src/js/_section-steps.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


var section = document.querySelector('.section-steps');
if (section) {
  var stepsSliderDesktop = null;
  var stepsSliderMobile = null;
  var initStepsSlider = function initStepsSlider() {
    if (window.innerWidth < 1024) {
      if (stepsSliderDesktop) {
        stepsSliderDesktop.destroy(true, true);
        stepsSliderDesktop = null;
      }
      if (!stepsSliderMobile) {
        stepsSliderMobile = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.section-steps__slider', {
          slidesPerView: 'auto',
          spaceBetween: 8
        });
      }
    } else {
      if (stepsSliderMobile) {
        stepsSliderMobile.destroy(true, true);
        stepsSliderMobile = null;
      }
      if (!stepsSliderDesktop) {
        stepsSliderDesktop = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.section-steps__slider', {
          modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Grid"]],
          slidesPerGroup: 3,
          slidesPerView: 3,
          spaceBetween: 16,
          grid: {
            rows: 2,
            fill: 'row'
          },
          navigation: {
            prevEl: '.section-steps .slider-btn--prev',
            nextEl: '.section-steps .slider-btn--next'
          }
        });
      }
    }
  };
  initStepsSlider();
  window.addEventListener('resize', function () {
    initStepsSlider();
  });
}

/***/ }),

/***/ "./src/js/_section-structure.js":
/*!**************************************!*\
  !*** ./src/js/_section-structure.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");

var section = document.querySelector('.section-structure');
if (section) {
  var structureSlider = null;
  var initStructureSlider = function initStructureSlider() {
    if (window.innerWidth > 767) {
      if (structureSlider) {
        structureSlider.destroy(true, true);
        structureSlider = null;
      }
    } else {
      if (!structureSlider) {
        structureSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.section-structure__slider', {
          slidesPerView: 1.3,
          spaceBetween: 8
        });
      }
    }
  };
  initStructureSlider();
  window.addEventListener('resize', function () {
    initStructureSlider();
  });
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! exports provided: setBodyOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBodyOverflow", function() { return setBodyOverflow; });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_header.js */ "./src/js/_header.js");
/* harmony import */ var _section_photo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_section-photo.js */ "./src/js/_section-photo.js");
/* harmony import */ var _section_process_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_section-process.js */ "./src/js/_section-process.js");
/* harmony import */ var _section_steps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_section-steps.js */ "./src/js/_section-steps.js");
/* harmony import */ var _section_conditions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_section-conditions.js */ "./src/js/_section-conditions.js");
/* harmony import */ var _section_structure_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_section-structure.js */ "./src/js/_section-structure.js");
/* harmony import */ var _section_cities_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_section-cities.js */ "./src/js/_section-cities.js");
/* harmony import */ var _section_order_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_section-order.js */ "./src/js/_section-order.js");
/* harmony import */ var _section_faq_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_section-faq.js */ "./src/js/_section-faq.js");
/* harmony import */ var _section_faq_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_section_faq_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_modal.js */ "./src/js/_modal.js");











function setBodyOverflow(setOverflow) {
  var addPaddingToElems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  if (setOverflow) {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = "".concat(scrollbarWidth, "px");
  } else {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }
  if (addPaddingToElems.length) {
    addPaddingToElems.forEach(function (elem) {
      if (setOverflow) {
        elem.style.paddingRight = "".concat(scrollbarWidth, "px");
      } else {
        elem.style.paddingRight = '';
      }
    });
  }
}
function scrollToTarget(selector) {
  var target = document.querySelector(selector);
  if (target) {
    var headerHeight = 100;
    var targetPosition = target.getBoundingClientRect().top;
    var offsetPosition = targetPosition + window.scrollY - headerHeight;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  } else {
    console.warn("\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \"".concat(selector, "\" \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D!"));
  }
}
var linkList = document.querySelectorAll('[data-scroll-to]');
if (linkList.length) {
  linkList.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = link.dataset.scrollTo;
      if (target) {
        scrollToTarget("#".concat(target));
      }
      Object(_header_js__WEBPACK_IMPORTED_MODULE_0__["closeMenu"])();
      return false;
    });
  });
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map