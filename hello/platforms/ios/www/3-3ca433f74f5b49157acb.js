webpackJsonp([3],{

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getBaseData = exports.showAlert = undefined;
	
	var _mutationTypes = __webpack_require__(89);
	
	var types = _interopRequireWildcard(_mutationTypes);
	
	var _api = __webpack_require__(92);
	
	var _api2 = _interopRequireDefault(_api);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// alert提示信息
	var showAlert = exports.showAlert = function showAlert(_ref, data) {
	  var dispatch = _ref.dispatch;
	
	  dispatch(types.COMMON__SHOW_ALERT, data);
	};
	
	// 获取base data
	var getBaseData = exports.getBaseData = function getBaseData(_ref2) {
	  var dispatch = _ref2.dispatch;
	
	  $.ajax({
	    url: _api2.default.get('getBaseData'),
	    type: 'GET',
	    dataType: 'json',
	    async: false
	  }).done(function (res) {
	    if (res.code != 200) {
	      dispatch(types.COMMON__GET_BASE_DATA, null);
	      return;
	    }
	    dispatch(types.COMMON__GET_BASE_DATA, res.data);
	  });
	};

/***/ },

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(122)
	__vue_script__ = __webpack_require__(124)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/name_list/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(125)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(123);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(98)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*全局sass设置*/\nbody {\n  font-size: 99px; }\n\n.input {\n  position: fixed;\n  z-index: 9999;\n  left: 0;\n  bottom: 0;\n  margin: 0;\n  width: 100%;\n  height: 0.64rem;\n  line-height: 0.64rem; }\n\nbody {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n\n#router {\n  /* main绝对定位，进行内部滚动 */\n  position: absolute;\n  top: 50px;\n  bottom: 34px;\n  /* 使之可以滚动 */\n  overflow-y: scroll;\n  /* 增加该属性，可以增加弹性，是滑动更加顺畅 */\n  -webkit-overflow-scrolling: touch; }\n\nmain .content {\n  height: 2000px; }\n", ""]);
	
	// exports


/***/ },

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _api = __webpack_require__(92);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _common = __webpack_require__(100);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <!-- 入口列表 -->
	// <template>
	// <div id="entrance">
	// 	<p v-for="i in 10000" >{{i}}</p>
	// 	<!-- <pre  class="input"  contenteditable="true" @click="focus" @blur="blur">{{msg}}</pre> -->
	// 	<!-- <input  class="input" type="text" v-model="msg"> -->
	// </div>	
	// </template>
	//
	// <script>
	exports.default = {
		data: function data() {
			return {
				paths: [], //面包屑导航数据
				path: '',
				imagesUrl: '',
				msg: ''
			};
		},
	
		vuex: {
			getters: {
				baseData: function baseData(state) {
					return state.common.baseData;
				}
			},
			actions: {
				getBaseData: _common.getBaseData
			}
		},
		computed: {
			path: function path() {
				return this.$route.path;
			}
		},
		methods: {
			focus: function focus() {
				$('.input').focus();
	
				$('body').scrollTop($('body').height());
			},
			blur: function blur() {},
			fnScroll: function fnScroll() {
				console.log(1);
				$('.input')[0].blur();
			}
		},
		route: {
			activate: function activate(transition) {
				$('#router').on('scroll', this.fnScroll);
				transition.next();
			}
		},
		components: {}
	
	};
	
	// </script>
	//
	// <style>
	// @import '../../common/css/sass.scss';
	// .input{ position: fixed; z-index: 9999; left: 0; bottom: 0; margin: 0; width: 100%; height: px2rem(48px); line-height: px2rem(48px); }
	// body{ position: fixed; width: 100%; height: 100%; overflow: hidden; }
	// #router {
	// /* main绝对定位，进行内部滚动 */
	// position: absolute;
	// top: 50px;
	// bottom: 34px;
	// /* 使之可以滚动 */
	//  overflow-y: scroll;
	//   /* 增加该属性，可以增加弹性，是滑动更加顺畅 */
	//   -webkit-overflow-scrolling: touch;  
	// }
	//
	// main .content {
	//     height: 2000px;
	// }
	// </style>
	/* generated by vue-loader */

/***/ },

/***/ 125:
/***/ function(module, exports) {

	module.exports = "\n\n<div id=\"entrance\">\n\t<p v-for=\"i in 10000\" >{{i}}</p>\n\t<!-- <pre  class=\"input\"  contenteditable=\"true\" @click=\"focus\" @blur=\"blur\">{{msg}}</pre> -->\n\t<!-- <input  class=\"input\" type=\"text\" v-model=\"msg\"> -->\n</div>\t\n";

/***/ }

});
//# sourceMappingURL=3-3ca433f74f5b49157acb.js.map