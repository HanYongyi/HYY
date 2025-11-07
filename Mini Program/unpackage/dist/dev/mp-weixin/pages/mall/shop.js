(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/mall/shop"],{

/***/ 87:
/*!*****************************************************************************!*\
  !*** D:/do_lab/Ceramics_Project_App/main.js?{"page":"pages%2Fmall%2Fshop"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _shop = _interopRequireDefault(__webpack_require__(/*! ./pages/mall/shop.vue */ 88));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_shop.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 88:
/*!**********************************************************!*\
  !*** D:/do_lab/Ceramics_Project_App/pages/mall/shop.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shop_vue_vue_type_template_id_14fdb568_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop.vue?vue&type=template&id=14fdb568&scoped=true& */ 89);
/* harmony import */ var _shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop.vue?vue&type=script&lang=js& */ 91);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _shop_vue_vue_type_style_index_0_id_14fdb568_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.vue?vue&type=style&index=0&id=14fdb568&scoped=true&lang=css& */ 93);
/* harmony import */ var _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 33);

var renderjs





/* normalize component */

var component = Object(_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _shop_vue_vue_type_template_id_14fdb568_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _shop_vue_vue_type_template_id_14fdb568_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "14fdb568",
  null,
  false,
  _shop_vue_vue_type_template_id_14fdb568_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/mall/shop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 89:
/*!*****************************************************************************************************!*\
  !*** D:/do_lab/Ceramics_Project_App/pages/mall/shop.vue?vue&type=template&id=14fdb568&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_template_id_14fdb568_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shop.vue?vue&type=template&id=14fdb568&scoped=true& */ 90);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_template_id_14fdb568_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_template_id_14fdb568_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_template_id_14fdb568_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_template_id_14fdb568_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 90:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/do_lab/Ceramics_Project_App/pages/mall/shop.vue?vue&type=template&id=14fdb568&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 91:
/*!***********************************************************************************!*\
  !*** D:/do_lab/Ceramics_Project_App/pages/mall/shop.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shop.vue?vue&type=script&lang=js& */ 92);
/* harmony import */ var _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 92:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/do_lab/Ceramics_Project_App/pages/mall/shop.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
      searchQuery: '',
      tabs: [{
        key: 'all',
        name: '全部'
      }, {
        key: 'hot',
        name: '热销'
      }, {
        key: 'new',
        name: '新品'
      }, {
        key: 'cate',
        name: '分类'
      }],
      activeTab: 'all',
      productsRaw: [{
        name: '青花瓷梅瓶',
        price: 1299,
        sold: 2150,
        tag: '典藏',
        image: '/static/mall/qinghuaci.png',
        source: '景德镇·手工拉坯·1280℃ 还原焰',
        cate: '瓶',
        isHot: true,
        isNew: false,
        aiBrief: ['胎体细腻致密，透光性良好；', '青花料色层次分明，笔触有留锋；', '肩部线条饱满，足圈修坯规整。'],
        storySeed: ['青花瓷梅瓶起源于唐代，因其小口、丰肩、瘦腹、圈足的造型，宛若盛开的梅花由瘦口向宽肩舒展，因此被称为“梅瓶”。到宋元时期，它逐渐成为陈设与礼器的代表。', '元代青花梅瓶采用进口钴料，发色浓艳深沉。工艺上，匠人选用优质瓷土，胎体细腻，先以氧化钴勾勒纹饰，再施透明釉，经1280摄氏度高温焙烧，形成青花底色。', '梅瓶常用于陈设与赏玩，线条流畅，釉色润泽，如水中月、镜中花。它不仅是一件日用器皿，更是一件承载历史与文化的艺术品。']
      }, {
        name: '汝窑公道杯',
        price: 468,
        sold: 980,
        tag: '口碑',
        image: '/static/mall/ruyao.png',
        source: '河南汝州·仿古配方·入窑一色',
        cate: '茶具',
        isHot: false,
        isNew: true,
        aiBrief: ['釉面如凝脂，开片细密；', '器型匀称，线条圆融；', '口沿微内收，利于出水控流。'],
        storySeed: '汝釉温润，开片如初雪消融的纹络。手持温热茶汤，杯壁微泛青，恰似雨过天青。'
      }, {
        name: '定窑刻花盏',
        price: 620,
        sold: 1630,
        tag: '',
        image: '/static/mall/dingyao.png',
        source: '曲阳·白釉刻花·覆烧工艺',
        cate: '茶盏',
        isHot: true,
        isNew: true,
        aiBrief: ['刻花刀法利落，花叶转折自然；', '釉色清亮泛乳白，积釉处微见泪痕；', '圈足干净，露胎细腻偏黄。'],
        storySeed: '定瓷白若凝脂，刻花在光里浮沉。捧盏观纹，如见风过芦苇，留下一瞬的波纹。'
      }, {
        name: '耀州刻花梅瓶',
        price: 980,
        sold: 740,
        tag: '匠作',
        image: '/static/mall/yaozhou.png',
        source: '铜川耀州·青釉·模印与刻花结合',
        cate: '瓶',
        isHot: false,
        isNew: false,
        aiBrief: ['青釉通透微泛黄绿；', '刻花深浅有致，层次分明；', '瓶肩转折过渡柔和。'],
        storySeed: '耀州青釉带着山石的清气。灯下观之，花叶一明一暗，像被风吹皱的湖面。'
      }, {
        name: '龙泉青瓷茶壶',
        price: 850,
        sold: 1310,
        tag: '人气',
        image: '/static/mall/longquan.png',
        source: '龙泉·梅子青釉·还原焰',
        cate: '茶具',
        isHot: true,
        isNew: false,
        aiBrief: ['釉色清润通透，呈梅子青；', '壶钮与壶嘴比例协调；', '出水顺畅，断水利落。'],
        storySeed: '龙泉青瓷若雨后青苔的颜色，握在手心，像水光在掌间打转。'
      }, {
        name: '景德镇粉彩盖碗',
        price: 730,
        sold: 560,
        tag: '雅玩',
        image: '/static/mall/fencai.png',
        source: '景德镇·粉彩工艺·彩绘',
        cate: '茶具',
        isHot: false,
        isNew: true,
        aiBrief: ['粉彩晕染细腻，层层渲染；', '盖、碗、托尺寸配比协调；', '适合观汤色与闷香。'],
        storySeed: '粉彩如雾中花影，茶香从釉色间漫开，一盏一会，像把春天端在掌心。'
      }, {
        name: '宜兴紫砂杯',
        price: 420,
        sold: 2040,
        tag: '热卖',
        image: '/static/mall/zisha.png',
        source: '宜兴·段泥·手工成型',
        cate: '茶具',
        isHot: true,
        isNew: false,
        aiBrief: ['泥料细腻、砂感明显；', '器壁均匀，气孔通透；', '久用更显温润。'],
        storySeed: '紫砂“养人”，也被人养。日复一日，杯色更暖，仿佛留住了茶的四季。'
      }],
      products: [],
      showAi: false,
      currentItem: null,
      phase: 'thinking',
      storyFull: '',
      storyDisplay: '',
      sourceFull: '',
      sourceDisplay: '',
      isTypingStory: false,
      timerThink: null,
      timerStory: null,
      isPlaying: false,
      audio: null
    };
  },
  computed: {
    filteredProducts: function filteredProducts() {
      var list = this.products;
      if (this.activeTab === 'hot') list = list.filter(function (p) {
        return p.isHot;
      });else if (this.activeTab === 'new') list = list.filter(function (p) {
        return p.isNew;
      });else if (this.activeTab === 'cate') list = list.slice().sort(function (a, b) {
        return a.cate.localeCompare(b.cate);
      });
      var q = this.searchQuery.trim();
      if (q) {
        var s = q.toLowerCase();
        list = list.filter(function (p) {
          var text = (p.name || '') + (p.source || '') + (p.cate || '') + (p.tag || '');
          return text.toLowerCase().indexOf(s) !== -1;
        });
      }
      return list;
    }
  },
  created: function created() {
    var _this = this;
    this.products = this.productsRaw.map(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, {
        priceText: '¥' + Number(p.price).toFixed(2),
        soldText: _this.toSoldText(p.sold)
      });
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.clearTimers();
    if (this.audio) {
      this.audio.destroy();
      this.audio = null;
    }
  },
  methods: {
    toSoldText: function toSoldText(n) {
      var num = Number(n) || 0;
      if (num >= 10000) return (num / 10000).toFixed(1).replace(/\.0$/, '') + '万';
      if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
      return String(num);
    },
    switchTab: function switchTab(k) {
      this.activeTab = k;
    },
    clearSearch: function clearSearch() {
      this.searchQuery = '';
    },
    onSearchConfirm: function onSearchConfirm() {},
    openDetail: function openDetail(p) {
      uni.showToast({
        title: '可跳转到商品详情页',
        icon: 'none'
      });
    },
    openAiPanel: function openAiPanel(p) {
      var _this2 = this;
      this.currentItem = p;
      this.showAi = true;
      this.phase = 'thinking';
      this.storyDisplay = '';
      this.sourceDisplay = '';
      var intro = "\u8BA9\u6211\u4EEC\u7528\u4E09\u5341\u79D2\uFF0C\u8BB2\u6E05\u300C".concat(p.name, "\u300D\u7684\u770B\u70B9\u3002\n");
      var facts = p.aiBrief.map(function (l) {
        return "\xB7 ".concat(l);
      }).join('\n');
      var bridge = '\n——\n';
      var story = '';
      if (Array.isArray(p.storySeed)) {
        story = p.storySeed.join('\n\n');
      } else {
        story = p.storySeed || '';
      }
      this.storyFull = intro + facts + bridge + story;
      this.sourceFull = "".concat(p.source);
      var thinkMs = 1200 + Math.floor(Math.random() * 800);
      this.timerThink = setTimeout(function () {
        _this2.phase = 'speaking';
        _this2.typeStory();
        _this2.sourceDisplay = _this2.sourceFull;
      }, thinkMs);
    },
    typeStory: function typeStory() {
      var _this3 = this;
      this.isTypingStory = true;
      var i = 0;
      var text = this.storyFull;
      var tick = function tick() {
        if (i >= text.length) {
          _this3.isTypingStory = false;
          return;
        }
        var step = 1 + Math.floor(Math.random() * 3);
        var chunk = text.slice(i, i + step);
        _this3.storyDisplay += chunk;
        i += step;
        var next = 28 + Math.floor(Math.random() * 32);
        _this3.timerStory = setTimeout(tick, next);
      };
      tick();
      this.playVoice();
    },
    closeAiPanel: function closeAiPanel() {
      this.showAi = false;
      this.stopVoice();
      this.clearTimers();
    },
    clearTimers: function clearTimers() {
      if (this.timerThink) clearTimeout(this.timerThink);
      if (this.timerStory) clearTimeout(this.timerStory);
      this.timerThink = null;
      this.timerStory = null;
      this.isTypingStory = false;
    },
    playVoice: function playVoice() {
      var _this4 = this;
      try {
        if (!this.audio) {
          this.audio = uni.createInnerAudioContext();
          this.audio.src = '/static/audio/ai_story.mp3'; // 放置你的占位音频
          this.audio.onEnded(function () {
            _this4.isPlaying = false;
          });
          this.audio.onError(function () {
            _this4.isPlaying = false;
            uni.showToast({
              title: '未找到语音文件 /static/audio/ai_story.mp3',
              icon: 'none'
            });
          });
        }
        this.audio.play();
        this.isPlaying = true;
      } catch (e) {
        this.isPlaying = false;
        uni.showToast({
          title: '暂不支持语音播放',
          icon: 'none'
        });
      }
    },
    stopVoice: function stopVoice() {
      if (this.audio) {
        try {
          this.audio.stop();
        } catch (e) {}
      }
      this.isPlaying = false;
    },
    toggleVoice: function toggleVoice() {
      if (this.isPlaying) {
        this.stopVoice();
      } else {
        this.playVoice();
      }
    },
    goBack: function goBack() {
      // 返回上一级
      uni.navigateBack();
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 93:
/*!*******************************************************************************************************************!*\
  !*** D:/do_lab/Ceramics_Project_App/pages/mall/shop.vue?vue&type=style&index=0&id=14fdb568&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_style_index_0_id_14fdb568_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../SoftwareExploreTool/微信开发者工具/HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shop.vue?vue&type=style&index=0&id=14fdb568&scoped=true&lang=css& */ 94);
/* harmony import */ var _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_style_index_0_id_14fdb568_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_style_index_0_id_14fdb568_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_style_index_0_id_14fdb568_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_style_index_0_id_14fdb568_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftwareExploreTool_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_style_index_0_id_14fdb568_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 94:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/do_lab/Ceramics_Project_App/pages/mall/shop.vue?vue&type=style&index=0&id=14fdb568&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[87,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mall/shop.js.map