(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{448:function(t,e,r){var content=r(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("f7cf1fb4",content,!0,{sourceMap:!1})},449:function(t,e,r){t.exports=r.p+"img/mobileLogo.e0c7e51.png"},450:function(t,e,r){"use strict";r(448)},451:function(t,e,r){var l=r(35)((function(i){return i[1]}));l.push([t.i,".nuxt-link-exact-active[data-v-c590fa2e]{background-color:#000;color:#fff}",""]),l.locals={},t.exports=l},452:function(t,e,r){"use strict";r.r(e);r(27),r(133);var l=[function(){var t=this._self._c;return t("div",{staticClass:"xl:w-2/12"},[t("h6",{staticClass:"font-medium text-sm md:text-lg"},[this._v("\n          Welcome James! 😊\n        ")])])},function(){var t=this._self._c;return t("div",{staticClass:"flex justify-between items-center gap-x-4"},[t("div",[t("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(251),alt:""}})]),this._v(" "),t("div",[t("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(255),alt:""}})])])},function(){var t=this._self._c;return t("div",{staticClass:"md:w-2/12"},[t("h6",{staticClass:"font-medium dark:text-white"},[this._v("Welcome James! 😊")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("button",{staticClass:"bg-[#0cb0bd] flex items-center gap-x-3 w-full rounded-md justify-center py-2.5"},[e("img",{staticClass:"h-10 w-10",attrs:{src:r(167),alt:""}}),t._v(" "),e("span",{staticClass:"font-medium text-gray-900 text-sm"},[t._v("James Nelson")])])])}],o=r(0),c=Object(o.ref)(""),n=r(168),d={search:c,setSearch:function(data){c.value=data}},m=d.setSearch,f={name:"DashboardHeader",components:{Breadcrumb:n.default},data:function(){return{isDarkMode:!1,form:{search:""},showSidebar:!1,sidebarItems:[{header:"",children:[{urlPath:"/dashboard",title:"Dashboard",icon:"user"}]},{header:"MANAGE",children:[{urlPath:"/dashboard/users",title:"Users",icon:"user"},{urlPath:"/dashboard/stories",title:"Stories",icon:"stories"},{urlPath:"/dashboard/notify",title:"Notify",icon:"bell"},{urlPath:"/dashboard/ad-service",title:"Ad Service",icon:"ad"}]},{header:"SYSTEM",children:[{urlPath:"/dashboard/admin",title:"Admin",icon:"admin"},{urlPath:"/dashboard/config",title:"Configuration",icon:"config"}]}]}},methods:{toggleDarkMode:function(){this.isDarkMode=!this.isDarkMode,this.isDarkMode?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},toggleSidebar:function(){this.showSidebar=!this.showSidebar}},mounted:function(){this.isDarkMode="dark"===localStorage.getItem("theme"),this.isDarkMode&&document.documentElement.classList.add("dark")},watch:{"form.search":function(t){m(t),this.$emit("search",t)}}},h=(r(450),r(16)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("main",[e("header",{staticClass:"space-y-3 bg-white px-6 py-3"},[e("section",{staticClass:"md:flex space-y-6 md:space-y-0 items-center border-b hidden"},[t._m(0),t._v(" "),e("div",{staticClass:"flex w-full flex-grow justify-end"},[e("div",{staticClass:"flex items-center gap-x-10 pb-3"},[e("div",{staticClass:"relative w-full"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.search,expression:"form.search"}],staticClass:"w-full rounded-md bg-gray-100 px-3 py-2.5 pl-32 text-sm outline-none",attrs:{type:"text",placeholder:"Search keyword"},domProps:{value:t.form.search},on:{input:function(e){e.target.composing||t.$set(t.form,"search",e.target.value)}}}),t._v(" "),e("img",{staticClass:"absolute left-2 top-2",attrs:{src:r(253),alt:""}})]),t._v(" "),t._m(1)])])]),t._v(" "),e("section",{staticClass:"flex items-center justify-between border-b pb-3 md:hidden"},[t._m(2),t._v(" "),e("div",{staticClass:"flex justify-between items-center gap-x-4"},[e("div",[t.isDarkMode?t._e():e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(251),alt:""}}),t._v(" "),t.isDarkMode?e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(257),alt:""}}):t._e()]),t._v(" "),e("div",[t.isDarkMode?e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(258),alt:""},on:{click:t.toggleSidebar}}):t._e(),t._v(" "),t.isDarkMode?t._e():e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(256),alt:""},on:{click:t.toggleSidebar}})])])]),t._v(" "),e("div",{staticClass:"text-white flex justify-between items-center"},[e("Breadcrumb"),t._v(" "),t._t("action")],2)]),t._v(" "),e("div",{staticClass:"w-64 bg-white shadow-md",class:["fixed inset-y-0 left-0 z-30 transition duration-300 ease-in-out",t.showSidebar?"translate-x-0":"-translate-x-full"]},[e("nav",[e("main",{staticClass:"w-full p-6 relative flex flex-col h-screen"},[e("div",{staticClass:"flex-grow relative"},[t.isDarkMode?t._e():e("img",{attrs:{src:r(254),alt:""}}),t._v(" "),t.isDarkMode?e("img",{staticClass:"px-3",attrs:{src:r(449),alt:""}}):t._e(),t._v(" "),t._l(t.sidebarItems,(function(l,o){var header=l.header,c=l.children;return e("div",{key:o},[e("h6",{staticClass:"py-3 pb-3 text-[#B3BBCA]",class:[header?"border-b-[0.2px] border-gray-300":""]},[t._v("\n              "+t._s(header)+"\n            ")]),t._v(" "),e("div",{staticClass:"w-full space-y-1 rounded"},t._l(c,(function(l){return e("nuxt-link",{key:l.title,staticClass:"flex w-full no-underline items-center gap-x-3 text-gray-500 rounded-md px-3 py-2.5 leading-loose dark:text-white",attrs:{to:l.urlPath},nativeOn:{click:function(e){return t.toggleSidebar.apply(null,arguments)}}},[e("img",{attrs:{src:r(252)("./".concat(l.icon,".svg")),alt:""}}),t._v("\n                "+t._s(l.title)+"\n              ")])})),1)])}))],2),t._v(" "),t._m(3)])])])])}),l,!1,null,"c590fa2e",null);e.default=component.exports}}]);