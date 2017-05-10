webpackJsonp([1],{

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(34),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\WINDOWS\\GD2\\web\\testfiles\\webpack2\\_node_dev\\tf_vuejs_spa3\\src\\vue-components\\about.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] about.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e748694", Component.options)
  } else {
    hotAPI.reload("data-v-2e748694", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_store_js__ = __webpack_require__(3);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
  data: function data() {
    return {
      msg: __WEBPACK_IMPORTED_MODULE_0__js_store_js__["a" /* store */].currentItem
    };
  }
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_component1_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_component1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__about_component1_vue__);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
  data: function data() {
    return {};
  },

  created: function created() {
    console.log("created");
  },
  beforeUpdate: function beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated: function updated() {
    console.log("updated");
  },
  mounted: function mounted() {
    console.log("mounted");

    // inject page-specific component
    new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
      el: '#about-component1',
      render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_1__about_component1_vue___default.a);
      }
    });
  },
  methods: {}
};

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(35),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\WINDOWS\\GD2\\web\\testfiles\\webpack2\\_node_dev\\tf_vuejs_spa3\\src\\vue-components\\about-component1.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] about-component1.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e466f5d", Component.options)
  } else {
    hotAPI.reload("data-v-3e466f5d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vc-about",
    attrs: {
      "id": "about"
    }
  }, [_c('p', [_vm._v("vc-about")]), _vm._v(" "), _c('p', {
    attrs: {
      "id": "about-component1"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2e748694", module.exports)
  }
}

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', [_vm._v("vc-about-component1")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.msg))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e466f5d", module.exports)
  }
}

/***/ })

});