webpackJsonp([1],{

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(96)
	__vue_script__ = __webpack_require__(99)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/schedule/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(111)
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

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(97);
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

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);
	
	// exports


/***/ },

/***/ 99:
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
	// 	微信
	// 	<input type="file" id="uploadImg">
	// 	<div class="btn btn-default"  @click="fnUploadFile">上传</div>
	// 	<img :src="imagesUrl" alt="" style="width: 100%;">
	// </div>
	// </template>
	//
	// <script>
	exports.default = {
		data: function data() {
			return {
				paths: [], //面包屑导航数据
				path: '',
				imagesUrl: ''
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
			entranceList: function entranceList() {
				var channel_list = this.baseData.channel_list;
				var department_list = this.baseData.department_list;
	
				if (this.$route.path == '/index' && channel_list) {
					var temp = [];
					$.each(channel_list, function (index, val) {
						var data = $.extend(true, {}, val);
						data.id = val.channel_id;
						data.name = val.channel_name;
						temp.push(data);
					});
					this.paths = [{
						name: '入口',
						path: '/'
					}];
					return temp;
				} else if (this.$route.path == '/index_department' && department_list) {
					this.paths = [{
						name: '部类',
						path: '/'
					}];
					return department_list;
				}
	
				return [];
			},
			path: function path() {
				return this.$route.path;
			}
		},
		methods: {
			fnUploadFile: function fnUploadFile(ev) {
				var $vm = this;
				var file = document.getElementById("uploadImg").files[0];
				if (!/image\/\w+/.test(file.type)) {
					alert("看清楚，这个需要图片！");
					return false;
				}
				var reader = new FileReader();
				//将文件以Data URL形式读入页面 
				reader.readAsDataURL(file);
				reader.onload = function (e) {
					$vm.imagesUrl = this.result;
				};
				debugger;
			}
		},
		route: {
			activate: function activate(transition) {
				this.getBaseData();
	
				transition.next();
			},
			canReuse: false
		},
		components: {
			'breadCrumb': __webpack_require__(101),
			'entranceList': __webpack_require__(106)
		}
	
	};
	
	// </script>
	//
	//
	// <style>
	// </style>
	/* generated by vue-loader */

/***/ },

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

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(102)
	__vue_script__ = __webpack_require__(104)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/bread_crumb.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(105)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./bread_crumb.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(103);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(98)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./bread_crumb.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./bread_crumb.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".breadcrumb {\n  background-color: initial; }\n\n.breadcrumb {\n  padding-left: 0; }\n", ""]);
	
	// exports


/***/ },

/***/ 104:
/***/ function(module, exports) {

	"use strict";
	
	// <!-- 面包屑导航 -->
	// <template>
	// <ol class="breadcrumb bg-info" v-if="paths.length">
	//   <li v-for="item in paths" :class="{ active: $index===paths.length-1 }" >
	//   	<template v-if="$index===paths.length-1">
	//   		{{item.name}}
	//   	</template>
	//   	<a v-link="{ path: item.path }" v-else>{{item.name}}</a>
	//   </li>
	// </ol>
	// </template>
	// <script>
	/**
	 * paths = [
	 * 		{ name: '规则管理', path: 'rule' },
	 * 		{ name: '添加管理', path: 'rule/add' }
	 * ];
	 * 
	 */
	module.exports = {
	  props: {
	    paths: {
	      type: Array,
	      default: []
	    }
	  }
	};
	// </script>
	//
	// <style>
	// .breadcrumb{ background-color: initial; }
	// .breadcrumb { padding-left: 0; }
	// </style>
	/* generated by vue-loader */

/***/ },

/***/ 105:
/***/ function(module, exports) {

	module.exports = "\n\n<ol class=\"breadcrumb bg-info\" v-if=\"paths.length\">\n  <li v-for=\"item in paths\" :class=\"{ active: $index===paths.length-1 }\" >\n  \t<template v-if=\"$index===paths.length-1\">\n  \t\t{{item.name}}\n  \t</template>\n  \t<a v-link=\"{ path: item.path }\" v-else>{{item.name}}</a>\n  </li>\n</ol>\n";

/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(107)
	__vue_script__ = __webpack_require__(109)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/schedule/entrance_list/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(110)
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

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(108);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(98)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".m-entranceList tbody > tr:hover {\n  background-color: #eee; }\n\n.m-entranceList a:hover {\n  text-decoration: underline; }\n", ""]);
	
	// exports


/***/ },

/***/ 109:
/***/ function(module, exports) {

	'use strict';
	
	// <!-- 规则列表 -->
	// <template>
	// <div class="panel panel-default">
	//   <!-- Default panel contents -->
	//   <!-- <div class="panel-heading">Panel heading</div> -->
	//   <!-- Table -->
	//   <table class="table m-entranceList">
	//     <thead>
	//       <tr>
	//         <th style="width: 15%;">{{isDepartment ? '部类' : '入口'}}</th>
	//         <th style="width: 10%;">平台</th>
	//         <th></th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr v-for="item in entranceList" v-if="item.platform">
	//         <td style="width: 15%;">{{item.name}}</td>
	//
	//         <td style="width: 10%;">
	//           <!-- PC -->
	//           <template v-if="~item.platform.indexOf('2')">
	//             <a style="margin-right: 12px;"
	//               v-link="{ path: (isDepartment ? '/sort_list_manage_department?id=' : '/sort_list_manage?id=' )+ item.id +'&platform_id=2' }"
	//               v-if="~item.allow.indexOf('2')"
	//             >PC</a>
	//             <span style="margin-right: 12px;"
	//               v-else
	//             >PC</span>
	//           </template>
	//
	//           <!-- 移动 -->
	//           <template v-if="~item.platform.indexOf('1')">
	//             <a style="margin-right: 12px;"
	//               v-link="{ path: (isDepartment ? '/sort_list_manage_department?id=' : '/sort_list_manage?id=' )+ item.id +'&platform_id=1' }"
	//               v-if="~item.allow.indexOf('1')"
	//             >移动</a>
	//             <span style="margin-right: 12px;"
	//               v-else
	//             >移动</span>
	//           </template>
	//         </td>
	//         <th></th>
	//       </tr>
	//     </tbody>
	//   </table>
	// </div>
	// </template>
	//
	//
	// <script>
	module.exports = {
	  props: {
	    entranceList: {
	      type: Array,
	      default: []
	    }
	  },
	  data: function data() {
	    return {
	      isDepartment: false
	    };
	  },
	  computed: {
	    isDepartment: function isDepartment() {
	      return this.$route.matched[0].handler.fullPath === '/index_department' ? true : false;
	    }
	  }
	};
	// </script>
	//
	//
	// <style>
	// .m-entranceList tbody>tr:hover{ background-color: #eee; }
	// .m-entranceList a:hover{ text-decoration: underline; }
	// </style>
	/* generated by vue-loader */

/***/ },

/***/ 110:
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"panel panel-default\">\n  <!-- Default panel contents -->\n  <!-- <div class=\"panel-heading\">Panel heading</div> -->\n  <!-- Table -->\n  <table class=\"table m-entranceList\">\n    <thead>\n      <tr>\n        <th style=\"width: 15%;\">{{isDepartment ? '部类' : '入口'}}</th>\n        <th style=\"width: 10%;\">平台</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr v-for=\"item in entranceList\" v-if=\"item.platform\">\n        <td style=\"width: 15%;\">{{item.name}}</td>\n\n        <td style=\"width: 10%;\">\n          <!-- PC -->\n          <template v-if=\"~item.platform.indexOf('2')\">\n            <a style=\"margin-right: 12px;\"\n              v-link=\"{ path: (isDepartment ? '/sort_list_manage_department?id=' : '/sort_list_manage?id=' )+ item.id +'&platform_id=2' }\"\n              v-if=\"~item.allow.indexOf('2')\"\n            >PC</a>\n            <span style=\"margin-right: 12px;\"\n              v-else\n            >PC</span>\n          </template>\n          \n          <!-- 移动 -->\n          <template v-if=\"~item.platform.indexOf('1')\">\n            <a style=\"margin-right: 12px;\"\n              v-link=\"{ path: (isDepartment ? '/sort_list_manage_department?id=' : '/sort_list_manage?id=' )+ item.id +'&platform_id=1' }\"\n              v-if=\"~item.allow.indexOf('1')\"\n            >移动</a>\n            <span style=\"margin-right: 12px;\"\n              v-else\n            >移动</span>\n          </template>\n        </td>\n        <th></th>\n      </tr>\n    </tbody>\n  </table>\n</div>\n";

/***/ },

/***/ 111:
/***/ function(module, exports) {

	module.exports = "\n\n<div id=\"entrance\">\n\t微信\n\t<input type=\"file\" id=\"uploadImg\">\n\t<div class=\"btn btn-default\"  @click=\"fnUploadFile\">上传</div>\n\t<img :src=\"imagesUrl\" alt=\"\" style=\"width: 100%;\">\n</div>\n";

/***/ }

});
//# sourceMappingURL=1-d7cf1dd07fd198d66ff1.js.map