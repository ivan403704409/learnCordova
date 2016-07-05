webpackJsonp([4],{

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

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(127)
	__vue_script__ = __webpack_require__(129)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/news/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(130)
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

/***/ 127:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(128);
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

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*全局sass设置*/\nbody {\n  font-size: 99px; }\n\n#news li {\n  float: left;\n  width: 12%;\n  margin-left: 4%;\n  border: 1px solid #eee;\n  margin-bottom: 0.26667rem; }\n\n#news li::after {\n  content: '';\n  display: block;\n  width: 100%;\n  padding-bottom: 100%; }\n\n#news li span {\n  position: absolute; }\n", ""]);
	
	// exports


/***/ },

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _api = __webpack_require__(92);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _common = __webpack_require__(100);
	
	var _sortable = __webpack_require__(8);
	
	var _sortable2 = _interopRequireDefault(_sortable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		data: function data() {
			return {
				paths: [], //面包屑导航数据
				path: '',
				list2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				config: { a: 123, b: 222 }
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
		route: {
			activate: function activate(transition) {
				// Vue.nextTick(function(){
				// 	var el = document.getElementById('list');
				// 	var sortable = Sortable.create(el,{
				// 		animation: 150,
				// 	});
				// });
				transition.next();
			}
		},
		components: {}
	
	};
	
	// </script>
	//
	//
	// <style>
	// @import '../../common/css/sass.scss';
	// #news li{ float: left; width: 12%; margin-left: 4%;  border: 1px solid #eee; margin-bottom: px2rem(20px); }
	// #news li::after{ content: ''; display: block; width: 100%; padding-bottom: 100%;  }
	// #news li span{ position: absolute; }
	// </style>
	/* generated by vue-loader */
	// <!-- 入口列表 -->
	// <template>
	// <div id="news">
	// {{list | json}}
	// 	<ul v-sortable="config">
	// 	    <li v-for="item in list2" :data-index="$index">{{ item }}</li>
	// 	</ul>
	// </div>
	// </template>
	//
	//
	// <script>

/***/ },

/***/ 130:
/***/ function(module, exports) {

	module.exports = "\n\n<div id=\"news\">\n{{list | json}}\n\t<ul v-sortable=\"config\">\n\t    <li v-for=\"item in list2\" :data-index=\"$index\">{{ item }}</li>\n\t</ul>\n</div>\n";

/***/ }

});
//# sourceMappingURL=4-8af07852ed1b21a258a7.js.map