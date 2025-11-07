(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index_ai"],{

/***/ 50:
/*!**************************************************************************!*\
  !*** D:/do_lab/Ceramics_Project_App/main.js?{"page":"pages%2Findex_ai"} ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _index_ai = _interopRequireDefault(__webpack_require__(/*! ./pages/index_ai.vue */ 51));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_index_ai.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 51:
/*!*********************************************************!*\
  !*** D:/do_lab/Ceramics_Project_App/pages/index_ai.vue ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_ai_vue_vue_type_template_id_d5706ca4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_ai.vue?vue&type=template&id=d5706ca4&scoped=true& */ 52);
/* harmony import */ var _index_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_ai.vue?vue&type=script&lang=js& */ 54);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_ai_vue_vue_type_style_index_0_id_d5706ca4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index_ai.vue?vue&type=style&index=0&id=d5706ca4&scoped=true&lang=css& */ 56);
/* harmony import */ var _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 33);

var renderjs





/* normalize component */

var component = Object(_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_ai_vue_vue_type_template_id_d5706ca4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_ai_vue_vue_type_template_id_d5706ca4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d5706ca4",
  null,
  false,
  _index_ai_vue_vue_type_template_id_d5706ca4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index_ai.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 52:
/*!****************************************************************************************************!*\
  !*** D:/do_lab/Ceramics_Project_App/pages/index_ai.vue?vue&type=template&id=d5706ca4&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_ai_vue_vue_type_template_id_d5706ca4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index_ai.vue?vue&type=template&id=d5706ca4&scoped=true& */ 53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_ai_vue_vue_type_template_id_d5706ca4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_ai_vue_vue_type_template_id_d5706ca4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_ai_vue_vue_type_template_id_d5706ca4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_ai_vue_vue_type_template_id_d5706ca4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 53:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/do_lab/Ceramics_Project_App/pages/index_ai.vue?vue&type=template&id=d5706ca4&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = !_vm.isVoiceMode ? _vm.inputValue.trim() : null
  var l0 = _vm.isRecording
    ? _vm.__map(_vm.waveData, function (item, index) {
        var $orig = _vm.__get_orig(item)
        var m0 = _vm.getWaveColor(index)
        return {
          $orig: $orig,
          m0: m0,
        }
      })
    : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 54:
/*!**********************************************************************************!*\
  !*** D:/do_lab/Ceramics_Project_App/pages/index_ai.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index_ai.vue?vue&type=script&lang=js& */ 55);
/* harmony import */ var _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 55:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/do_lab/Ceramics_Project_App/pages/index_ai.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      commerceNav: [{
        title: '购物中心',
        icon: '/static/icons/shop.png',
        path: '/pages/mall/shop',
        featured: true,
        badge: '热'
      }, {
        title: '分类',
        icon: '/static/icons/category.png',
        path: '/pages/mall/category'
      }, {
        title: '新品',
        icon: '/static/icons/new.png',
        path: '/pages/mall/new',
        badge: 'NEW'
      }, {
        title: '热销榜',
        icon: '/static/icons/hot.png',
        path: '/pages/mall/hot'
      }, {
        title: '活动',
        icon: '/static/icons/event.png',
        path: '/pages/mall/events'
      }, {
        title: '个人中心',
        icon: '/static/icons/mine.png',
        path: '/pages/mall/all'
      }],
      inputValue: "",
      isLongThinkActive: true,
      isWebSearchActive: false,
      recorderManager: null,
      // 录音管理器
      isRecording: false,
      // 是否正在录音
      audioTempFilePath: '',
      // 临时存储录音文件路径
      audioDuration: 0,
      // 录音时长
      keyboardHeight: 0,
      currentDate: "",
      isVoiceMode: false,
      showAttachmentModal: false,
      showSidebar: false,
      waveData: Array(50).fill(40),
      waveAnimationTimer: null
    };
  },
  mounted: function mounted() {
    var _this = this;
    uni.onKeyboardHeightChange(function (res) {
      console.log(res);
      _this.keyboardHeight = res.height;
    });

    // 初始化日期
    this.updateDate();
    this.dateInterval = setInterval(function () {
      _this.updateDate();
    }, 24 * 60 * 60 * 1000); // 每天更新一次
  },
  created: function created() {
    var _this2 = this;
    // 初始化录音管理器
    this.recorderManager = uni.getRecorderManager();

    // 监听录音停止事件
    this.recorderManager.onStop(function (res) {
      console.log('recorder stop', res);
      _this2.isRecording = false;
      if (res.duration < 1000) {
        uni.showToast({
          title: '录音时间太短',
          icon: 'none'
        });
        return;
      }

      // 保存录音文件信息
      _this2.audioTempFilePath = res.tempFilePath;
      _this2.audioDuration = Math.floor(res.duration / 1000);
      _this2.sendAudioMessage();
    });

    // 监听录音错误事件
    this.recorderManager.onError(function (err) {
      console.error('录音失败:', err);
      _this2.isRecording = false;
      uni.showToast({
        title: '录音失败，请重试',
        icon: 'none'
      });
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.dateInterval) {
      clearInterval(this.dateInterval);
    }
    clearInterval(this.waveAnimationTimer);
    clearInterval(this.timer);
  },
  methods: {
    openEntry: function openEntry(item) {
      uni.navigateTo({
        url: item.path
      });
    },
    goSmartPick: function goSmartPick() {
      uni.navigateTo({
        url: '/pages/mall/smart_pick'
      });
    },
    goImageSearch: function goImageSearch() {
      uni.navigateTo({
        url: '/pages/mall/image_search'
      });
    },
    updateDate: function updateDate() {
      var now = new Date();
      this.currentDate = "".concat((now.getMonth() + 1).toString().padStart(2, '0'), ".").concat(now.getDate().toString().padStart(2, '0'));
    },
    toggleLongThink: function toggleLongThink() {
      this.isLongThinkActive = !this.isLongThinkActive;
    },
    toggleWebSearch: function toggleWebSearch() {
      this.isWebSearchActive = !this.isWebSearchActive;
    },
    toggleInputMode: function toggleInputMode() {
      this.isVoiceMode = !this.isVoiceMode;
    },
    // 开始录音
    startRecording: function startRecording(e) {
      var _this3 = this;
      console.log("start:", this.isRecording);
      if (this.isRecording) {
        clearInterval(this.timer);
        clearInterval(this.waveAnimationTimer);
        this.recorderManager.stop();
        this.isRecording = false;
        return;
      }
      this.isRecording = true;
      this.recordingTime = 0;

      // 开始录音计时器
      this.timer = setInterval(function () {
        _this3.recordingTime++;
      }, 1000);

      // 开始波形动画
      this.startWaveAnimation();

      // 开始实际录音
      this.recorderManager.start({
        duration: 60000,
        sampleRate: 44100,
        numberOfChannels: 1,
        encodeBitRate: 192000,
        format: 'mp3'
      });
    },
    stopRecording: function stopRecording() {
      console.log(this.isRecording);
      if (!this.isRecording) return;
      clearInterval(this.timer);
      clearInterval(this.waveAnimationTimer);

      // 立即停止录音
      this.recorderManager.stop();

      // 重置状态
      this.isRecording = false;
    },
    cancelRecording: function cancelRecording() {
      if (this.isRecording) {
        console.log("取消录音");
        this.isRecording = false;
        // 停止录音
        this.recorderManager.stop();
      }
    },
    showAddOptions: function showAddOptions() {
      this.showAttachmentModal = true;
    },
    hideAttachmentModal: function hideAttachmentModal() {
      this.showAttachmentModal = false;
    },
    selectPhoto: function selectPhoto() {
      console.log("选择拍照");
      this.hideAttachmentModal();
      // 调用拍照功能
    },
    selectAlbum: function selectAlbum() {
      console.log("选择本地相册");
      this.hideAttachmentModal();
      // 调用相册选择功能
    },
    selectFile: function selectFile() {
      console.log("从微信聊天记录中选择");
      this.hideAttachmentModal();
      // 调用文件选择功能
    },
    selectDocument: function selectDocument() {
      console.log("取消");
      this.hideAttachmentModal();
    },
    // 发送文本消息
    sendMessage: function sendMessage() {
      // 文本消息
      var message = {
        type: 'text',
        content: this.inputValue.trim(),
        timestamp: new Date().getTime()
      };
      this.navigateToChat(message);
      this.inputValue = "";
    },
    // 发送语音消息
    sendAudioMessage: function sendAudioMessage() {
      // 创建语音消息对象
      var message = {
        type: 'audio',
        filePath: this.audioTempFilePath,
        duration: this.audioDuration,
        timestamp: new Date().getTime()
      };
      this.navigateToChat(message);
      this.audioTempFilePath = '';
      this.audioDuration = 0;
    },
    // 将消息进行编码并跳转
    navigateToChat: function navigateToChat(message) {
      // 编码消息对象并传递
      var encodedMessage = encodeURIComponent(JSON.stringify(message));
      uni.navigateTo({
        url: "/pages/chat/chat_old?message=".concat(encodedMessage)
      });
    },
    openSidebar: function openSidebar() {
      this.showSidebar = true;
    },
    closeSidebar: function closeSidebar() {
      this.showSidebar = false;
    },
    openChat: function openChat(chatId) {
      console.log('打开聊天记录:', chatId);
      uni.navigateTo({
        url: "/pages/chat/chat_previous?chatId=".concat(chatId)
      });
      this.closeSidebar();
    },
    // 获取波形颜色 - 根据索引返回不同颜色
    getWaveColor: function getWaveColor(index) {
      // 创建一个颜色数组，模拟截图中的颜色
      var colors = ['#0066FF', '#3385FF', '#66A3FF', '#99C2FF', '#00CCCC', '#00E6E6', '#33FFFF', '#0066FF', '#3385FF', '#66A3FF', '#00CCCC', '#00E6E6', '#33FFFF', '#0066FF', '#3385FF', '#66A3FF', '#00CCCC', '#00E6E6', '#33FFFF', '#0066FF', '#3385FF', '#66A3FF'];

      // 返回对应索引的颜色，如果超出范围则循环使用
      return colors[index % colors.length];
    },
    // 开始波形动画
    startWaveAnimation: function startWaveAnimation() {
      var _this4 = this;
      // 清除现有动画
      if (this.waveAnimationTimer) {
        clearInterval(this.waveAnimationTimer);
      }

      // 动画波形条
      this.waveAnimationTimer = setInterval(function () {
        // 为波形条生成随机高度
        _this4.waveData = Array(50).fill(40).map(function () {
          return Math.floor(Math.random() * 35) + 15; // 随机高度在15-50px之间
        });
      }, 100); // 每100ms更新一次，实现平滑动画
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 56:
/*!******************************************************************************************************************!*\
  !*** D:/do_lab/Ceramics_Project_App/pages/index_ai.vue?vue&type=style&index=0&id=d5706ca4&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_ai_vue_vue_type_style_index_0_id_d5706ca4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index_ai.vue?vue&type=style&index=0&id=d5706ca4&scoped=true&lang=css& */ 57);
/* harmony import */ var _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_ai_vue_vue_type_style_index_0_id_d5706ca4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_ai_vue_vue_type_style_index_0_id_d5706ca4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_ai_vue_vue_type_style_index_0_id_d5706ca4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_ai_vue_vue_type_style_index_0_id_d5706ca4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_ai_vue_vue_type_style_index_0_id_d5706ca4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 57:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/do_lab/Ceramics_Project_App/pages/index_ai.vue?vue&type=style&index=0&id=d5706ca4&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[50,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/pages/index_ai.js.map