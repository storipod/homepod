(window.webpackJsonp=window.webpackJsonp||[]).push([[21,8],{455:function(e,t,n){"use strict";n.r(t);var o={props:{src:String},data:function(){return{isFullScreen:!1}},methods:{toggleImage:function(){this.isFullScreen=!this.isFullScreen}}},r=n(23),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("img",{staticClass:"cursor-pointer",attrs:{src:e.src,alt:""},on:{click:e.toggleImage}}),e._v(" "),e.isFullScreen?t("div",{staticClass:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",on:{click:function(t){return t.target!==t.currentTarget?null:e.toggleImage.apply(null,arguments)}}},[t("img",{staticClass:"max-w-full max-h-full transition-transform duration-500",class:{"scale-100":e.isFullScreen,"scale-0":!e.isFullScreen},attrs:{alt:"",src:e.src}})]):e._e()])}),[],!1,null,"e4752a02",null);t.default=component.exports},457:function(e,t,n){"use strict";n.r(t);var o={components:{ImageZoom:n(455).default},props:{users:{type:Array,required:!0}},methods:{handleSuspendConfirmation:function(){this.isSuspendConfirmationModal=!1,this.isSuspendSuccessModal=!0},handleFormCompletion:function(){this.isSuspendModal=!1,this.isSuspendConfirmationModal=!0},handleTableView:function(e){this.tableView=e},updateCurrentPage:function(e){this.currentPage=e},toggleDropdown:function(e){this.openDropdown===e?this.openDropdown=null:this.openDropdown=e},closeDropdown:function(){this.openDropdown=null},editUser:function(e){this.openDropdown=null},removeUser:function(e){this.isConfirmingRemoveUser=!0,this.openDropdown=null},toggleUserStatus:function(e){e.isActive?this.isSuspendModal=!0:this.isConfirmingActivateUser=!0,this.openDropdown=null},handleProceedRemoval:function(){this.isConfirmingRemoveUser=!1,this.isRemoveUserSuccess=!0},handleProceedActivation:function(){this.isConfirmingActivateUser=!1,this.isActivateUserSuccess=!0},handleSearch:function(e){console.log(e,"search val here from users")}}},r=n(23),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("main",[t("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4"},e._l(e.users,(function(o){return t("div",{key:o.email,staticClass:"flex justify-center items-center flex-col gap-y-3 bg-white rounded-lg border border-gray-200 py-10"},[t("image-zoom",{staticClass:"h-20 w-20 cursor-pointer",attrs:{src:n(250)("./".concat(o.avatar,".svg"))}}),e._v(" "),t("p",{staticClass:"font-bold text-lg"},[e._v(e._s(o.fname))]),e._v(" "),t("p",{staticClass:"text-gray-400"},[e._v(e._s(o.username))])],1)})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);