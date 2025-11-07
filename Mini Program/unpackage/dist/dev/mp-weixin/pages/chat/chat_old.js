(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chat/chat_old"],{

/***/ 79:
/*!*********************************************************************************!*\
  !*** D:/do_lab/Ceramics_Project_App/main.js?{"page":"pages%2Fchat%2Fchat_old"} ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _chat_old = _interopRequireDefault(__webpack_require__(/*! ./pages/chat/chat_old.vue */ 80));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_chat_old.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 80:
/*!**************************************************************!*\
  !*** D:/do_lab/Ceramics_Project_App/pages/chat/chat_old.vue ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_old_vue_vue_type_template_id_5c1e0e6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat_old.vue?vue&type=template&id=5c1e0e6e& */ 81);
/* harmony import */ var _chat_old_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat_old.vue?vue&type=script&lang=js& */ 83);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_old_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_old_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_old_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat_old.vue?vue&type=style&index=0&lang=css& */ 85);
/* harmony import */ var _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 33);

var renderjs





/* normalize component */

var component = Object(_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_old_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_old_vue_vue_type_template_id_5c1e0e6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_old_vue_vue_type_template_id_5c1e0e6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _chat_old_vue_vue_type_template_id_5c1e0e6e___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/chat/chat_old.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 81:
/*!*********************************************************************************************!*\
  !*** D:/do_lab/Ceramics_Project_App/pages/chat/chat_old.vue?vue&type=template&id=5c1e0e6e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_old_vue_vue_type_template_id_5c1e0e6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat_old.vue?vue&type=template&id=5c1e0e6e& */ 82);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_old_vue_vue_type_template_id_5c1e0e6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_old_vue_vue_type_template_id_5c1e0e6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_old_vue_vue_type_template_id_5c1e0e6e___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_old_vue_vue_type_template_id_5c1e0e6e___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 82:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/do_lab/Ceramics_Project_App/pages/chat/chat_old.vue?vue&type=template&id=5c1e0e6e& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniIcons: function () {
      return Promise.all(/*! import() | uni_modules/uni-icons/components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 95))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l1 = _vm.__map(_vm.messages, function (msg, index) {
    var $orig = _vm.__get_orig(msg)
    var l0 =
      !(msg.type === "text" || !msg.type) &&
      msg.type === "audio" &&
      !msg.isUploading &&
      !msg.uploadFailed
        ? _vm.__map(10, function (bar, idx) {
            var $orig = _vm.__get_orig(bar)
            var m0 = msg.isPlaying ? _vm.getWaveHeight(idx, index) : null
            return {
              $orig: $orig,
              m0: m0,
            }
          })
        : null
    var m1 =
      !(msg.type === "text" || !msg.type) &&
      msg.type === "audio" &&
      !msg.isUploading &&
      !msg.uploadFailed
        ? _vm.formatTime(msg.currentTime)
        : null
    var m2 =
      !(msg.type === "text" || !msg.type) &&
      msg.type === "audio" &&
      !msg.isUploading &&
      !msg.uploadFailed
        ? _vm.formatTime(msg.duration)
        : null
    var m3 =
      !(msg.type === "text" || !msg.type) &&
      !(msg.type === "audio") &&
      msg.type === "image" &&
      msg.role === "dog"
        ? _vm.getThumbnailUrl(msg.serverPath)
        : null
    var m4 =
      !(msg.type === "text" || !msg.type) &&
      !(msg.type === "audio") &&
      msg.type === "image" &&
      msg.role === "dog"
        ? _vm.getImageUrl(msg.serverPath)
        : null
    var m5 =
      !(msg.type === "text" || !msg.type) &&
      !(msg.type === "audio") &&
      msg.type === "image" &&
      msg.role === "dog"
        ? msg.localPath || _vm.getImageUrl(msg.serverPath)
        : null
    var m6 =
      !(msg.type === "text" || !msg.type) &&
      !(msg.type === "audio") &&
      msg.type === "image" &&
      !(msg.role === "dog") &&
      msg.role === "user"
        ? _vm.getImageUrlForUser(msg.serverPath)
        : null
    var m7 =
      !(msg.type === "text" || !msg.type) &&
      !(msg.type === "audio") &&
      msg.type === "image" &&
      !(msg.role === "dog") &&
      msg.role === "user"
        ? msg.localPath || _vm.getImageUrlForUser(msg.serverPath)
        : null
    return {
      $orig: $orig,
      l0: l0,
      m1: m1,
      m2: m2,
      m3: m3,
      m4: m4,
      m5: m5,
      m6: m6,
      m7: m7,
    }
  })
  var g0 = !_vm.isVoiceMode ? _vm.textMessage.trim() : null
  var l2 = _vm.isRecording
    ? _vm.__map(_vm.waveData, function (item, index) {
        var $orig = _vm.__get_orig(item)
        var m8 = _vm.getWaveColor(index)
        return {
          $orig: $orig,
          m8: m8,
        }
      })
    : null
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.isLongThinkActive = !_vm.isLongThinkActive
    }
    _vm.e1 = function ($event) {
      _vm.isWebSearchActive = !_vm.isWebSearchActive
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l1: l1,
        g0: g0,
        l2: l2,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 83:
/*!***************************************************************************************!*\
  !*** D:/do_lab/Ceramics_Project_App/pages/chat/chat_old.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_old_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat_old.vue?vue&type=script&lang=js& */ 84);
/* harmony import */ var _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_old_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_old_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_old_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_old_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_old_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 84:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/do_lab/Ceramics_Project_App/pages/chat/chat_old.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 64));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 66));
var _socket = _interopRequireDefault(__webpack_require__(/*! @/utils/socket */ 67));
var _config = _interopRequireDefault(__webpack_require__(/*! @/config */ 30));
var _chatSocket = _interopRequireDefault(__webpack_require__(/*! @/utils/chatSocket.js */ 68));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  data: function data() {
    return {
      config: _config.default,
      firstSendStatus: true,
      isRecording: false,
      isLongThinkActive: true,
      isWebSearchActive: false,
      recordingTime: 0,
      recorderManager: null,
      innerAudioContext: null,
      scrollTop: 0,
      textMessage: '',
      voiceInputMode: false,
      isVoiceMode: false,
      keyboardHeight: 0,
      isKeyboardShow: false,
      waveHeights: {},
      messages: [{
        role: 'dog',
        type: 'text',
        content: '你好！我是陶瓷大模型“瓷语”，有什么可以帮您的吗？'
      }],
      currentAudio: null,
      isPlaying: false,
      audioTimer: null,
      isStreaming: false,
      streamingResponse: '',
      isCancelMode: false,
      touchStartY: 0,
      waveData: Array(50).fill(40),
      waveAnimationTimer: null,
      showAttachmentModal: false,
      socket: null,
      // socket连接实例
      streamTimeout: null,
      conversationId: null,
      // 添加对话ID存储
      loadingHistory: false,
      // 添加历史加载状态
      isSocketConnected: false,
      // 连接状态标志
      chatId: 'chat_' + new Date().getTime(),
      scrollThrottleTimer: null // 滚动节流定时器
    };
  },
  onLoad: function onLoad(options) {
    var _this = this;
    // 优先使用conversationId，没有时才生成新的
    if (options.conversationId) {
      this.conversationId = decodeURIComponent(options.conversationId);
      this.chatId = this.conversationId; // 确保使用历史记录的chatId
      // 如果有历史记录数据，直接使用
      if (options.history) {
        this.messages = JSON.parse(decodeURIComponent(options.history));
        this.smoothScrollToBottom();
      } else {
        this.loadChatHistory();
      }
    } else if (options.message) {
      // 新对话处理
      this.chatId = 'chat_' + new Date().getTime();

      // 初始化WebSocket
      // this.initSocket();

      // 解码并解析消息对象
      var messageData = JSON.parse(decodeURIComponent(options.message));
      console.log(messageData);
      if (messageData.type === 'text') {
        // 添加用户消息
        this.addUserTextMessage(messageData.content);
        if (this.firstSendStatus) {
          // 添加AI流式响应占位符
          this.messages.push({
            role: 'dog',
            type: 'text',
            thinking: '',
            content: '',
            isThinking: true,
            isStreaming: true
          });
        }
      }

      // 初始化WebSocket使用回调
      this.socket = new _chatSocket.default(this.chatId);
      this.socket.connect(function (success) {
        if (success) {
          _this.isSocketConnected = true;
          _this.socket.onMessage(function (data) {
            return _this.handleSocketMessage(data);
          });
          // 根据消息类型处理
          if (messageData.type === 'text') {
            var _messageData = JSON.parse(decodeURIComponent(options.message));
            // 通过WebSocket发送消息
            _this.$nextTick(function () {
              if (_this.socket && _this.isSocketConnected) {
                _this.socket.sendMessage({
                  type: 'text',
                  content: _messageData.content
                });
              }
            });
          } else if (messageData.type === 'audio') {
            // 处理语音消息
            _this.messages.push({
              role: 'user',
              type: 'audio',
              duration: messageData.duration,
              currentTime: 0,
              progress: 0,
              isPlaying: false,
              filePath: messageData.filePath,
              content: '',
              isUploading: true // 添加上传状态
            });

            _this.smoothScrollToBottom();

            // 上传并处理音频
            _this.uploadAndProcessAudio(messageData.filePath, messageData.duration);
          }
        } else {
          console.error('WebSocket连接失败');
        }
      });
    } else {
      // 全新对话
      this.chatId = 'chat_' + new Date().getTime();
    }
  },
  // 页面卸载生命周期
  onUnload: function onUnload() {
    // 页面离开时关闭WebSocket连接
    if (this.socket && this.isSocketConnected) {
      this.socket.close();
      this.isSocketConnected = false;
      this.socket = null; // 释放引用
    }

    // 清理滚动节流定时器
    if (this.scrollThrottleTimer) {
      clearTimeout(this.scrollThrottleTimer);
      this.scrollThrottleTimer = null;
    }
  },
  created: function created() {
    var _this2 = this;
    this.recorderManager = uni.getRecorderManager();
    this.recorderManager.onError(function (err) {
      console.error('录音失败:', err);
      uni.showToast({
        title: '录音失败，请重试',
        icon: 'none'
      });
      _this2.resetRecording();
    });
    this.recorderManager.onStop(function (res) {
      console.log("录音结束", res);
      if (_this2.isCancelMode) {
        console.log("录音已取消");
        return;
      }
      if (res.duration < 1000) {
        uni.showToast({
          title: '录音时间太短',
          icon: 'none'
        });
        return;
      }
      var duration = Math.floor(res.duration / 1000);
      // 添加用户音频消息
      _this2.messages.push({
        role: 'user',
        type: 'audio',
        duration: duration,
        currentTime: 0,
        progress: 0,
        isPlaying: false,
        filePath: res.tempFilePath,
        content: '',
        isUploading: true // 添加上传状态
      });

      _this2.smoothScrollToBottom();

      // 上传并处理音频
      _this2.uploadAndProcessAudio(res.tempFilePath, duration);
    });
    this.innerAudioContext = uni.createInnerAudioContext();
    this.innerAudioContext.obeyMuteSwitch = false;
    this.innerAudioContext.onPlay(function () {
      _this2.isPlaying = true;
      if (_this2.currentAudio) {
        _this2.currentAudio.isPlaying = true;
      }
    });
    this.innerAudioContext.onPause(function () {
      _this2.isPlaying = false;
      if (_this2.currentAudio) {
        _this2.currentAudio.isPlaying = false;
      }
    });
    this.innerAudioContext.onStop(function () {
      _this2.isPlaying = false;
      if (_this2.currentAudio) {
        _this2.currentAudio.isPlaying = false;
        _this2.currentAudio.currentTime = 0;
        _this2.currentAudio.progress = 0;
      }
    });
    this.innerAudioContext.onEnded(function () {
      _this2.isPlaying = false;
      if (_this2.currentAudio) {
        _this2.currentAudio.isPlaying = false;
        _this2.currentAudio.currentTime = _this2.currentAudio.duration;
        _this2.currentAudio.progress = 100;
      }
    });
    this.innerAudioContext.onTimeUpdate(function () {
      if (_this2.currentAudio && _this2.innerAudioContext.duration) {
        var currentTime = Math.floor(_this2.innerAudioContext.currentTime);
        var duration = Math.floor(_this2.innerAudioContext.duration);
        var progress = currentTime / duration * 100;
        _this2.currentAudio.currentTime = currentTime;
        _this2.currentAudio.progress = progress;

        // 更新波形高度
        var index = _this2.messages.findIndex(function (msg) {
          return msg === _this2.currentAudio;
        });
        if (index !== -1) {
          _this2.updateWaveHeight(index);
        }
      }
    });
    this.innerAudioContext.onError(function (res) {
      console.error('音频播放失败:', res);
      uni.showToast({
        title: "\u64AD\u653E\u5931\u8D25: ".concat(res.errMsg),
        icon: 'none'
      });
      _this2.isPlaying = false;
      if (_this2.currentAudio) {
        _this2.currentAudio.isPlaying = false;
      }
    });
  },
  methods: {
    // ========== WebSocket 相关方法 ==========
    // 初始化WebSocket连接
    initSocket: function initSocket() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 确保chatId已经正确设置
                if (!_this3.chatId) {
                  _this3.chatId = _this3.conversationId || 'chat_' + new Date().getTime();
                }
                // 如果已有连接，等待完全关闭
                if (!_this3.socket) {
                  _context.next = 6;
                  break;
                }
                _context.next = 4;
                return _this3.socket.close();
              case 4:
                _this3.socket = null;
                _this3.isSocketConnected = false;
              case 6:
                _context.prev = 6;
                _this3.socket = new _socket.default(_this3.chatId);
                _context.next = 10;
                return _this3.socket.connect();
              case 10:
                _this3.isSocketConnected = true;
                _this3.socket.onMessage(function (data) {
                  return _this3.handleSocketMessage(data);
                });
                _context.next = 19;
                break;
              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](6);
                console.error('WebSocket连接失败:', _context.t0);
                _this3.isSocketConnected = false;
                // 连接失败时显式清理
                _this3.socket = null;
              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 14]]);
      }))();
    },
    // 处理WebSocket消息
    handleSocketMessage: function handleSocketMessage(data) {
      if (this.streamTimeout) clearTimeout(this.streamTimeout);
      switch (data.type) {
        case 'think_start':
          // 思考开始
          this.startThinking();
          break;
        case 'think':
          // 思考内容
          this.appendThinkingContent(data.content);
          break;
        case 'think_end':
          // 思考结束
          this.endThinking();
          break;
        case 'text':
          // 正文内容
          this.appendDogMessage(data.content);
          break;
        case 'image':
          // 正文内容
          this.appendDogMessage(data.content);
          break;
        case 'error':
          uni.showToast({
            title: data.content,
            icon: 'none'
          });
          this.endStreaming();
          break;
        case 'stream_end':
          this.endStreaming();
          break;
        case 'transcription_start':
          this.handleTranscriptionStart();
          break;
        case 'transcription_result':
          this.handleTranscriptionResult(data.content);
          break;
      }
    },
    startThinking: function startThinking() {
      // 确保最后一条消息不是AI消息时才创建新消息
      var lastMessage = this.messages[this.messages.length - 1];
      if (!lastMessage || lastMessage.role !== 'dog') {
        console.log("startThinking");
        // 创建新消息
        this.messages.push({
          role: 'dog',
          type: 'text',
          thinking: '',
          content: '',
          isThinking: true,
          isStreaming: true
        });
      } else {
        // 如果最后一条已经是AI消息，更新状态为思考中
        this.$set(this.messages, this.messages.length - 1, _objectSpread(_objectSpread({}, lastMessage), {}, {
          isThinking: true,
          isStreaming: true,
          thinking: lastMessage.thinking || '',
          content: lastMessage.content || ''
        }));
      }
      this.smoothScrollToBottom();
    },
    // 添加思考内容
    appendThinkingContent: function appendThinkingContent(content) {
      var lastIndex = this.messages.length - 1;
      var lastMessage = this.messages[lastIndex];

      // 确保最后一条是AI消息
      if (lastMessage && lastMessage.role === 'dog' && lastMessage.isStreaming) {
        if (!lastMessage.thinking) {
          this.$set(lastMessage, 'thinking', '');
        }
        lastMessage.thinking += content;

        // 更新视图
        this.$set(this.messages, lastIndex, _objectSpread({}, lastMessage));
      }
      this.smoothScrollToBottom();
    },
    // 结束思考
    endThinking: function endThinking() {
      var lastIndex = this.messages.length - 1;
      var lastMessage = this.messages[lastIndex];
      if (lastMessage && lastMessage.role === 'dog' && lastMessage.isThinking) {
        // 转换思考状态为正常消息状态
        this.$set(this.messages, lastIndex, _objectSpread(_objectSpread({}, lastMessage), {}, {
          isThinking: false
        }));
      }
    },
    // 结束流式响应
    endStreaming: function endStreaming() {
      var lastIndex = this.messages.length - 1;
      if (this.messages[lastIndex] && this.messages[lastIndex].role === 'dog' && this.messages[lastIndex].isStreaming) {
        this.$set(this.messages, lastIndex, _objectSpread(_objectSpread({}, this.messages[lastIndex]), {}, {
          isStreaming: false
        }));
      }
      this.streamingResponse = '';
      clearTimeout(this.streamTimeout);
      this.streamTimeout = null;

      // 清除滚动定时器并进行最终滚动
      if (this.scrollThrottleTimer) {
        clearTimeout(this.scrollThrottleTimer);
        this.scrollThrottleTimer = null;
      }
      // 流式结束时使用标准滚动确保到达底部
      this.smoothScrollToBottom();
    },
    // 添加用户文本消息
    addUserTextMessage: function addUserTextMessage(content) {
      console.log(content);
      this.messages.push({
        role: 'user',
        type: 'text',
        content: content
      });
      console.log(this.messages);
      this.smoothScrollToBottom();
    },
    // 添加AI正文内容
    appendDogMessage: function appendDogMessage(content) {
      var lastIndex = this.messages.length - 1;
      var lastMessage = this.messages[lastIndex];
      if (lastMessage && lastMessage.role === 'dog' && lastMessage.isStreaming) {
        lastMessage.content += content;
        this.$set(this.messages, lastIndex, _objectSpread({}, lastMessage));
        this.smoothScrollToBottom();
      } else {
        // 如果没有AI消息，创建新消息
        console.log("appendDogMessage");
        this.messages.push({
          role: 'dog',
          type: 'text',
          content: content,
          isStreaming: true
        });
        this.smoothScrollToBottom();
      }
    },
    // ========== 消息发送 ==========
    sendMessage: function sendMessage() {
      this.firstSendStatus = false;
      if (this.socket) {
        console.log("用户信息");
        this.addUserTextMessage(this.textMessage);

        // 检查特定输入并返回对应图片
        if (this.textMessage === '请生成一张融合耀州瓷元素和火影元素的陶瓷设计图') {
          this.handleSpecialImageRequest('火影.jpg', '为您生成了一张融合耀州瓷元素和火影元素的陶瓷设计图');
        } else if (this.textMessage === '请生成一张含有花元素的碗') {
          this.handleSpecialImageRequest('flower_ceramic.jpg', '为您生成了一张含有花元素的精美陶瓷碗');
        } else if (this.textMessage === '请生成一张景德镇的釉上青花瓷器图片') {
          this.handleSpecialImageRequest('blue_ceramic.png', '');
        } else {
          // 通过WebSocket发送消息
          this.socket.sendMessage({
            type: 'text',
            content: this.textMessage
          });
        }
        this.textMessage = '';
      }
    },
    // 处理特殊图片请求的统一方法
    handleSpecialImageRequest: function handleSpecialImageRequest(imageName, responseText) {
      var _this4 = this;
      // 移除流式响应占位符，因为我们要直接返回图片
      // this.messages.pop();

      // 添加AI图片回复
      this.messages.push({
        role: 'dog',
        type: 'image',
        content: responseText,
        serverPath: "uploads/images/".concat(imageName),
        timestamp: new Date().getTime(),
        isStreaming: true,
        imageLoaded: false // 添加加载状态标记
      });

      this.smoothScrollToBottom();

      // 保存用户输入以便发送到后端
      var userInput = this.textMessage;

      // 通过WebSocket发送特殊消息以保存历史记录
      this.$nextTick(function () {
        // 确保WebSocket连接已建立
        var sendSpecialMessage = function sendSpecialMessage() {
          if (_this4.socket && _this4.isSocketConnected) {
            _this4.socket.sendMessage({
              type: 'special_image_response',
              userInput: userInput,
              imageResponse: "uploads/images/".concat(imageName)
            });
          } else {
            // 如果还没连接，稍后重试
            setTimeout(sendSpecialMessage, 100);
          }
        };
        sendSpecialMessage();
      });
    },
    // ========== 语音处理 ==========
    // 上传并处理音频
    uploadAndProcessAudio: function uploadAndProcessAudio(filePath, duration) {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var lastMessage, uploadResult, _lastMessage;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                // 获取最后一条用户音频消息（刚添加的）
                lastMessage = _this5.messages[_this5.messages.length - 1]; // 显示上传进度
                uni.showLoading({
                  title: '正在上传音频...',
                  mask: true
                });

                // 上传音频到服务器
                _context2.next = 5;
                return _this5.uploadAudio(filePath);
              case 5:
                uploadResult = _context2.sent;
                if (uploadResult.success) {
                  // 更新消息状态
                  lastMessage.isUploading = false;
                  lastMessage.serverPath = uploadResult.filePath;
                  lastMessage.content = "\u53D1\u9001\u4E86\u4E00\u6BB5".concat(duration, "\u79D2\u7684\u8BED\u97F3");

                  // 添加AI流式响应占位符
                  _this5.messages.push({
                    role: 'dog',
                    type: 'text',
                    content: '',
                    isStreaming: true
                  });

                  // 通过WebSocket发送音频路径给AI分析
                  if (_this5.socket && _this5.isSocketConnected) {
                    _this5.socket.sendMessage({
                      type: 'audio',
                      content: uploadResult.filePath
                    });
                  }
                  _this5.smoothScrollToBottom();
                } else {
                  // 上传失败，更新消息状态
                  lastMessage.isUploading = false;
                  lastMessage.uploadFailed = true;
                  lastMessage.content = '语音上传失败，点击重试';
                  uni.showToast({
                    title: uploadResult.message || '音频上传失败',
                    icon: 'none',
                    duration: 3000
                  });
                }
                _context2.next = 17;
                break;
              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                console.error('音频处理失败:', _context2.t0);

                // 获取最后一条用户音频消息
                _lastMessage = _this5.messages[_this5.messages.length - 1];
                _lastMessage.isUploading = false;
                _lastMessage.uploadFailed = true;
                _lastMessage.content = '语音上传失败，点击重试';

                // 提供重试选项
                _this5.retryAudioUpload(filePath, duration);
              case 17:
                _context2.prev = 17;
                uni.hideLoading();
                return _context2.finish(17);
              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9, 17, 20]]);
      }))();
    },
    // 上传音频到服务器
    uploadAudio: function uploadAudio(filePath) {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  var uploadTimeout = setTimeout(function () {
                    reject(new Error('上传超时，请检查网络连接'));
                  }, 3000); // 3秒超时

                  uni.uploadFile({
                    url: "".concat(_this6.config.server.httpUrl, "/api/upload/audio"),
                    filePath: filePath,
                    name: 'file',
                    formData: {
                      chatId: _this6.chatId
                    },
                    header: {
                      'Content-Type': 'multipart/form-data'
                    },
                    success: function success(res) {
                      clearTimeout(uploadTimeout);
                      try {
                        if (res.statusCode !== 200) {
                          reject(new Error("\u670D\u52A1\u5668\u9519\u8BEF: HTTP ".concat(res.statusCode)));
                          return;
                        }
                        var result = JSON.parse(res.data);
                        if (result.success) {
                          resolve(result);
                        } else {
                          reject(new Error(result.message || '上传失败'));
                        }
                      } catch (e) {
                        console.error('解析上传结果失败:', e, 'raw data:', res.data);
                        reject(new Error('服务器响应格式错误'));
                      }
                    },
                    fail: function fail(error) {
                      clearTimeout(uploadTimeout);
                      console.error('上传请求失败:', error);
                      var errorMsg = '上传失败';
                      if (error.errMsg) {
                        if (error.errMsg.includes('timeout')) {
                          errorMsg = '上传超时，请检查网络';
                        } else if (error.errMsg.includes('network')) {
                          errorMsg = '网络连接失败';
                        } else if (error.errMsg.includes('file not found')) {
                          errorMsg = '音频文件丢失，请重新录制';
                        }
                      }
                      reject(new Error(errorMsg));
                    }
                  });
                }));
              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    // 重试音频上传
    retryAudioUpload: function retryAudioUpload(filePath, duration) {
      var _this7 = this;
      uni.showModal({
        title: '上传失败',
        content: '音频上传失败，是否重试？',
        confirmText: '重试',
        cancelText: '取消',
        success: function success(res) {
          if (res.confirm) {
            _this7.uploadAndProcessAudio(filePath, duration);
          }
        }
      });
    },
    // 处理转录开始
    handleTranscriptionStart: function handleTranscriptionStart() {
      // 找到最后一条用户音频消息
      var audioMessages = this.messages.filter(function (msg, index) {
        return msg.type === 'audio' && msg.role === 'user';
      });
      if (audioMessages.length > 0) {
        var lastAudioMsg = audioMessages[audioMessages.length - 1];
        var audioIndex = this.messages.findIndex(function (msg) {
          return msg === lastAudioMsg;
        });
        if (audioIndex !== -1) {
          this.$set(this.messages, audioIndex, _objectSpread(_objectSpread({}, this.messages[audioIndex]), {}, {
            transcribing: true
          }));
        }
      }
    },
    // 处理转录结果
    handleTranscriptionResult: function handleTranscriptionResult(transcriptText) {
      // 找到最后一条用户音频消息
      var audioMessages = this.messages.filter(function (msg, index) {
        return msg.type === 'audio' && msg.role === 'user';
      });
      if (audioMessages.length > 0) {
        var lastAudioMsg = audioMessages[audioMessages.length - 1];
        var audioIndex = this.messages.findIndex(function (msg) {
          return msg === lastAudioMsg;
        });
        if (audioIndex !== -1) {
          this.$set(this.messages, audioIndex, _objectSpread(_objectSpread({}, this.messages[audioIndex]), {}, {
            transcribing: false,
            transcriptText: transcriptText,
            showTranscript: false // 默认不展开
          }));
        }
      }
    },
    // 切换转录文本显示
    toggleTranscript: function toggleTranscript(msg, index) {
      msg.showTranscript = !msg.showTranscript;
      this.$set(this.messages, index, _objectSpread({}, msg));
    },
    // ========== 图片处理 ==========
    // 获取缩略图URL
    getThumbnailUrl: function getThumbnailUrl(serverPath) {
      if (!serverPath) return '';
      if (serverPath.startsWith('uploads/')) {
        serverPath = "".concat(this.config.server.httpUrl, "/api/files/path?filePath=").concat(encodeURIComponent(serverPath), "&thumbnail=true");
      }
      serverPath = '/static/images/blue_ceramic_thumb.png';
      return serverPath;
    },
    // 图片加载完成处理
    handleImageLoad: function handleImageLoad(msg, index) {
      this.$set(this.messages, index, _objectSpread(_objectSpread({}, msg), {}, {
        imageLoaded: true
      }));
      var lastIndex = this.messages.length - 1;
      this.messages[lastIndex].isStreaming = false;
    },
    // 选择图片
    chooseImage: function chooseImage(sourceType) {
      var that = this;

      // 检查WebSocket连接状态
      if (!this.isSocketConnected) {
        uni.showToast({
          title: '网络连接异常，请稍后重试',
          icon: 'none',
          duration: 2000
        });
        return;
      }
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: [sourceType],
        success: function success(res) {
          var tempFilePath = res.tempFilePaths[0];
          // 检查文件大小（5MB限制）
          that.checkFileSize(tempFilePath, function (isValid) {
            if (isValid) {
              that.showImagePreview(tempFilePath);
            } else {
              uni.showToast({
                title: '图片大小不能超过5MB',
                icon: 'none',
                duration: 2000
              });
            }
          });
        },
        fail: function fail(error) {
          console.error('选择图片失败:', error);
          var errorMsg = '图片选择失败';
          if (error.errMsg && error.errMsg.includes('cancel')) {
            return; // 用户取消选择，不显示错误
          } else if (error.errMsg && error.errMsg.includes('permission')) {
            errorMsg = '没有相机或相册权限';
          }
          uni.showToast({
            title: errorMsg,
            icon: 'none',
            duration: 2000
          });
        }
      });
    },
    // 显示图片预览
    showImagePreview: function showImagePreview(imagePath) {
      var that = this;
      uni.showModal({
        title: '发送图片',
        content: '确定要发送这张图片给AI分析吗？',
        confirmText: '发送',
        cancelText: '取消',
        success: function success(res) {
          if (res.confirm) {
            that.uploadAndSendImage(imagePath);
          }
        }
      });
      this.textMessage = '';
    },
    // 上传并发送图片
    uploadAndSendImage: function uploadAndSendImage(imagePath) {
      var _this8 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var loading, uploadResult;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // 显示上传进度
                loading = uni.showLoading({
                  title: '正在上传图片...',
                  mask: true
                });
                _context4.prev = 1;
                _context4.next = 4;
                return _this8.uploadImageToServer(imagePath);
              case 4:
                uploadResult = _context4.sent;
                console.log(uploadResult);
                if (uploadResult.success) {
                  // 添加用户图片消息到界面
                  _this8.addImageMessage('user', uploadResult.filePath, imagePath);

                  // 添加AI流式响应占位符
                  _this8.messages.push({
                    role: 'dog',
                    type: 'text',
                    content: '',
                    isStreaming: true
                  });

                  // 通过WebSocket发送图片路径给AI分析
                  if (_this8.socket && _this8.isSocketConnected) {
                    _this8.socket.sendMessage({
                      type: 'image',
                      content: uploadResult.filePath
                    });
                  }
                  _this8.smoothScrollToBottom();
                } else {
                  uni.showToast({
                    title: uploadResult.message || '图片上传失败',
                    icon: 'none',
                    duration: 3000
                  });
                }
                _context4.next = 13;
                break;
              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](1);
                console.error('上传图片失败:', _context4.t0);
                // 提供重试选项
                _this8.retryUpload(imagePath);
              case 13:
                _context4.prev = 13;
                uni.hideLoading();
                return _context4.finish(13);
              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 9, 13, 16]]);
      }))();
    },
    // 上传图片到服务器
    uploadImageToServer: function uploadImageToServer(imagePath) {
      var _this9 = this;
      return new Promise(function (resolve, reject) {
        var uploadTimeout = setTimeout(function () {
          reject(new Error('上传超时，请检查网络连接'));
        }, 30000); // 30秒超时

        uni.uploadFile({
          url: "".concat(_this9.config.server.httpUrl, "/api/upload/image"),
          filePath: imagePath,
          name: 'file',
          formData: {
            chatId: _this9.chatId
          },
          header: {
            'Content-Type': 'multipart/form-data'
          },
          success: function success(res) {
            clearTimeout(uploadTimeout);
            try {
              if (res.statusCode !== 200) {
                reject(new Error("\u670D\u52A1\u5668\u9519\u8BEF: HTTP ".concat(res.statusCode)));
                return;
              }
              var result = JSON.parse(res.data);
              if (result.success) {
                resolve(result);
              } else {
                reject(new Error(result.message || '上传失败'));
              }
            } catch (e) {
              console.error('解析上传结果失败:', e, 'raw data:', res.data);
              reject(new Error('服务器响应格式错误'));
            }
          },
          fail: function fail(error) {
            clearTimeout(uploadTimeout);
            console.error('上传请求失败:', error);
            var errorMsg = '上传失败';
            if (error.errMsg) {
              if (error.errMsg.includes('timeout')) {
                errorMsg = '上传超时，请检查网络';
              } else if (error.errMsg.includes('network')) {
                errorMsg = '网络连接失败';
              } else if (error.errMsg.includes('file not found')) {
                errorMsg = '图片文件丢失，请重新选择';
              }
            }
            reject(new Error(errorMsg));
          }
        });
      });
    },
    // 添加图片消息到聊天界面
    addImageMessage: function addImageMessage(role, serverPath, localPath) {
      this.messages.push({
        role: role,
        type: 'image',
        serverPath: serverPath,
        localPath: localPath,
        timestamp: new Date().getTime(),
        content: "请分析一下这张图片",
        isStreaming: false,
        imageLoaded: true
      });
      this.smoothScrollToBottom();
    },
    // 生成图片访问URL
    getImageUrl: function getImageUrl(serverPath) {
      if (!serverPath) return '';
      // 如果是相对路径，转换为服务器访问URL
      if (serverPath.startsWith('uploads/')) {
        serverPath = "".concat(this.config.server.httpUrl, "/api/files/path?filePath=").concat(encodeURIComponent(serverPath));
      }
      serverPath = '/static/images/blue_ceramic.png';
      return serverPath;
    },
    getImageUrlForUser: function getImageUrlForUser(serverPath) {
      if (!serverPath) return '';
      // 如果是相对路径，转换为服务器访问URL
      if (serverPath.startsWith('uploads/')) {
        serverPath = "".concat(this.config.server.httpUrl, "/api/files/path/user?filePath=").concat(encodeURIComponent(serverPath));
      }
      serverPath = '/static/images/ceramic_test.png';
      return serverPath;
    },
    // 预览图片
    previewImage: function previewImage(imageSrc) {
      console.log("previewImage:{}", imageSrc);
      uni.previewImage({
        current: imageSrc,
        urls: [imageSrc]
      });
    },
    // 图片加载错误处理
    onImageError: function onImageError(e) {
      console.error('图片加载失败:', e);
      uni.showToast({
        title: '图片加载失败',
        icon: 'none',
        duration: 2000
      });
    },
    // 检查文件大小
    checkFileSize: function checkFileSize(filePath, callback) {
      uni.getFileInfo({
        filePath: filePath,
        success: function success(res) {
          var size = res.size;
          var maxSize = 5 * 1024 * 1024; // 5MB
          callback(size <= maxSize);
        },
        fail: function fail(error) {
          console.error('获取文件信息失败:', error);
          // 如果获取文件信息失败，允许继续（可能是平台兼容性问题）
          callback(true);
        }
      });
    },
    // 重试上传图片
    retryUpload: function retryUpload(imagePath) {
      var _this10 = this;
      uni.showModal({
        title: '上传失败',
        content: '图片上传失败，是否重试？',
        confirmText: '重试',
        cancelText: '取消',
        success: function success(res) {
          if (res.confirm) {
            _this10.uploadAndSendImage(imagePath);
          }
        }
      });
    },
    // ========== UI相关方法 ==========
    toggleInputMode: function toggleInputMode() {
      this.isVoiceMode = !this.isVoiceMode;
      console.log('切换输入模式:', this.isVoiceMode ? '语音模式' : '文字模式');
    },
    showAddOptions: function showAddOptions() {
      this.showAttachmentModal = true;
    },
    hideAttachmentModal: function hideAttachmentModal() {
      this.showAttachmentModal = false;
    },
    selectPhoto: function selectPhoto() {
      this.chooseImage('camera');
      this.hideAttachmentModal();
    },
    selectAlbum: function selectAlbum() {
      this.chooseImage('album');
      this.hideAttachmentModal();
    },
    selectDocument: function selectDocument() {
      this.hideAttachmentModal();
    },
    // 获取波形颜色 - 根据索引返回不同颜色
    getWaveColor: function getWaveColor(index) {
      // 创建一个颜色数组，模拟截图中的颜色
      var colors = ['#0066FF', '#3385FF', '#66A3FF', '#99C2FF', '#00CCCC', '#00E6E6', '#33FFFF', '#0066FF', '#3385FF', '#66A3FF', '#00CCCC', '#00E6E6', '#33FFFF', '#0066FF', '#3385FF', '#66A3FF', '#00CCCC', '#00E6E6', '#33FFFF', '#0066FF', '#3385FF', '#66A3FF'];

      // 返回对应索引的颜色，如果超出范围则循环使用
      return colors[index % colors.length];
    },
    // 开始录音
    startRecording: function startRecording(e) {
      var _this11 = this;
      if (this.isRecording) {
        clearInterval(this.timer);
        clearInterval(this.waveAnimationTimer);
        this.recorderManager.stop();
        this.isRecording = false;
        return;
      }
      this.isRecording = true;
      this.recordingTime = 0;
      // this.isCancelMode = false;

      // 开始录音计时器
      this.timer = setInterval(function () {
        _this11.recordingTime++;
      }, 1000);

      // 开始波形动画
      this.startWaveAnimation();

      // 提供触觉反馈
      // uni.vibrateShort();

      // 开始实际录音
      this.recorderManager.start({
        duration: 60000,
        sampleRate: 44100,
        numberOfChannels: 1,
        encodeBitRate: 192000,
        format: 'mp3'
      });
    },
    // 处理手指移动检测上滑手势
    handleTouchMove: function handleTouchMove(e) {
      if (!this.isRecording || !e.touches || !e.touches[0]) return;
      var currentY = e.touches[0].clientY;
      var diffY = this.touchStartY - currentY;

      // 如果上滑超过100px，进入取消模式
      if (diffY > 100 && !this.isCancelMode) {
        this.isCancelMode = true;
        uni.vibrateShort(); // 提供触觉反馈
      }
      // 如果移回，退出取消模式
      else if (diffY < 50 && this.isCancelMode) {
        this.isCancelMode = false;
      }
    },
    // 开始波形动画
    startWaveAnimation: function startWaveAnimation() {
      var _this12 = this;
      // 清除现有动画
      if (this.waveAnimationTimer) {
        clearInterval(this.waveAnimationTimer);
      }

      // 动画波形条
      this.waveAnimationTimer = setInterval(function () {
        // 为波形条生成随机高度
        _this12.waveData = Array(50).fill(40).map(function () {
          return Math.floor(Math.random() * 35) + 15; // 随机高度在15-50px之间
        });
      }, 100); // 每100ms更新一次，实现平滑动画
    },
    // 停止录音并发送音频
    stopRecording: function stopRecording() {
      if (!this.isRecording) return;
      clearInterval(this.timer);
      clearInterval(this.waveAnimationTimer);

      // 立即停止录音
      this.recorderManager.stop();

      // 重置状态
      this.isRecording = false;
      // this.isCancelMode = false;
    },
    // 取消录音
    cancelRecording: function cancelRecording() {
      if (!this.isRecording) return;
      clearInterval(this.timer);
      clearInterval(this.waveAnimationTimer);
      this.isRecording = false;
      this.isCancelMode = false;

      // 停止录音但不处理它
      this.recorderManager.stop();
      uni.showToast({
        title: '已取消录音',
        icon: 'none'
      });
    },
    resetRecording: function resetRecording() {
      this.isRecording = false;
      this.isCancelMode = false;
      clearInterval(this.timer);
      clearInterval(this.waveAnimationTimer);
    },
    // 平滑滚动方法，用于流式响应
    smoothScrollToBottom: function smoothScrollToBottom() {
      var _this13 = this;
      // 清除之前的定时器避免重复执行
      if (this.scrollThrottleTimer) {
        clearTimeout(this.scrollThrottleTimer);
      }

      // 使用很短的延迟确保DOM更新，保持实时性
      this.scrollThrottleTimer = setTimeout(function () {
        _this13.$nextTick(function () {
          var query = uni.createSelectorQuery().in(_this13);
          query.select('.chat-messages').boundingClientRect();
          query.select('.chat-messages').scrollOffset();
          query.exec(function (res) {
            if (res[0] && res[1]) {
              // 平滑滚动到底部
              var newScrollTop = Math.max(0, res[1].scrollHeight - res[0].height) + 80;
              _this13.scrollTop = newScrollTop;
            }
          });
        });
        _this13.scrollThrottleTimer = null;
      }, 16); // 约60fps的更新频率，保持流畅
    },
    playAudio: function playAudio(index) {
      var audioMsg = this.messages[index];

      // 如果点击的是当前正在播放的音频
      if (this.currentAudio === audioMsg) {
        if (this.isPlaying) {
          this.innerAudioContext.pause();
        } else {
          this.innerAudioContext.play();
        }
        return;
      }

      // 暂停当前播放的音频
      if (this.currentAudio) {
        this.currentAudio.isPlaying = false;
        this.innerAudioContext.stop(); // 添加停止操作
      }

      // 设置新的音频源
      this.currentAudio = audioMsg;

      // 修复这里：使用正确的路径属性
      var src = audioMsg.filePath || this.getAudioUrl(audioMsg.serverPath);
      console.log("播放音频源:", src); // 调试用
      this.innerAudioContext.src = src;

      // 播放音频
      this.innerAudioContext.play();

      // 初始化波形高度
      if (!this.waveHeights[index]) {
        this.$set(this.waveHeights, index, Array(10).fill(8));
      }
    },
    // 获取波形高度
    getWaveHeight: function getWaveHeight(barIndex, messageIndex) {
      if (!this.waveHeights[messageIndex]) {
        this.$set(this.waveHeights, messageIndex, Array(10).fill(8));
      }
      var waveArray = this.waveHeights[messageIndex];
      if (this.messages[messageIndex].isPlaying) {
        return waveArray[barIndex];
      }
      return 8;
    },
    // 更新波形高度
    updateWaveHeight: function updateWaveHeight(index) {
      if (!this.waveHeights[index]) {
        this.$set(this.waveHeights, index, Array(10).fill(8));
      }
      this.waveHeights[index] = this.waveHeights[index].map(function (height, idx) {
        if (Math.random() > 0.7) {
          return Math.floor(Math.random() * 15) + 8;
        }
        return height;
      });
      this.$set(this.waveHeights, index, (0, _toConsumableArray2.default)(this.waveHeights[index]));
    },
    toggleAudioPlayback: function toggleAudioPlayback(msg, index) {
      this.playAudio(index);

      // 立即更新状态
      this.$set(this.messages, index, _objectSpread(_objectSpread({}, msg), {}, {
        isPlaying: !msg.isPlaying
      }));
    },
    // 暂停音频
    pauseAudio: function pauseAudio(index) {
      var audioMsg = this.messages[index];
      if (audioMsg.isPlaying && audioMsg.timer) {
        clearInterval(audioMsg.timer);
        audioMsg.isPlaying = false;
      }
    },
    // 生成音频访问URL
    getAudioUrl: function getAudioUrl(serverPath) {
      if (!serverPath) {
        return '';
      }

      // 如果是相对路径，转换为服务器访问URL
      if (serverPath.startsWith('uploads/audios/')) {
        // 解析路径：uploads/audios/{chatId}/{filename}
        var pathParts = serverPath.split('/');
        if (pathParts.length >= 4) {
          var chatId = pathParts[2]; // chat_xxx
          var filename = pathParts[3]; // audio_xxx.mp3
          return "".concat(this.config.server.httpUrl, "/api/files/audio/").concat(chatId, "/").concat(filename);
        }
        return "".concat(this.config.server.httpUrl, "/api/files/path?filePath=").concat(encodeURIComponent(serverPath));
      }
      return serverPath;
    },
    formatTime: function formatTime(seconds) {
      var mins = Math.floor(seconds / 60);
      var secs = Math.floor(seconds % 60);
      return "".concat(mins.toString().padStart(2, '0'), ":").concat(secs.toString().padStart(2, '0'));
    },
    beforeDestroy: function beforeDestroy() {
      if (this.innerAudioContext) {
        this.innerAudioContext.destroy();
      }
      clearInterval(this.audioTimer);
      clearInterval(this.waveAnimationTimer);
      clearInterval(this.timer);
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 85:
/*!***********************************************************************************************!*\
  !*** D:/do_lab/Ceramics_Project_App/pages/chat/chat_old.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_old_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat_old.vue?vue&type=style&index=0&lang=css& */ 86);
/* harmony import */ var _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_old_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_old_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_old_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_old_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_old_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 86:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/do_lab/Ceramics_Project_App/pages/chat/chat_old.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[79,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chat/chat_old.js.map