(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{459:function(t,e,r){"use strict";r.r(e);r(259);var n={props:{totalPages:{type:Number,required:!0},currentPage:{type:Number,required:!0}},methods:{goToPage:function(t){t<1||t>this.totalPages||this.$emit("page-changed",t)}}},l=r(17),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-center items-center w-full lg:ml-6"},[e("div",{staticClass:"lg:flex space-y-4 lg;space-y-0 items-center w-full justify-between lg:px-6 py-4 bg-gray-50"},[t._m(0),t._v(" "),e("div",{staticClass:"flex items-center justify-center space-x-1 overflow-x-auto"},[e("button",{staticClass:"p-2 text-gray-500 border bg-gray-50 border-gray-600 rounded-full disabled:opacity-50",attrs:{disabled:1===t.currentPage},on:{click:function(e){return t.goToPage(t.currentPage-1)}}},[e("img",{staticClass:"h-6 w-6",attrs:{src:r(258),alt:""}})]),t._v(" "),t._l(t.totalPages,(function(r){return e("button",{key:r,class:["px-4 py-2 border-2 bg-white text-gray-800 rounded-full",{"bg-[#F5FFFA] border-2 border-[#0BA9B9] text-gray-700":r===t.currentPage}],on:{click:function(e){return t.goToPage(r)}}},[t._v("\n        "+t._s(r)+"\n      ")])})),t._v(" "),e("button",{staticClass:"p-2 text-gray-500 border bg-gray-50 border-gray-600 rounded-full disabled:opacity-50",attrs:{disabled:t.currentPage===t.totalPages},on:{click:function(e){return t.goToPage(t.currentPage+1)}}},[e("img",{staticClass:"h-6 w-6",attrs:{src:r(257),alt:""}})])],2)])])}),[function(){var t=this._self._c;return t("div",[t("p",{staticClass:"font-semibold text-gray-500"},[this._v("Viewing Products 1 - 8 of 22")])])}],!1,null,null,null);e.default=component.exports}}]);