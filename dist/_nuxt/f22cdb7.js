(window.webpackJsonp=window.webpackJsonp||[]).push([[40,8],{430:function(t,e,r){var content=r(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("1abd3a12",content,!0,{sourceMap:!1})},432:function(t,e,r){"use strict";r(430)},433:function(t,e,r){var l=r(68)((function(i){return i[1]}));l.push([t.i,".nuxt-link-exact-active[data-v-72752b35]{background-color:#000;color:#fff}",""]),l.locals={},t.exports=l},434:function(t,e,r){"use strict";r.r(e);r(27),r(132);var l=[function(){var t=this._self._c;return t("div",{staticClass:"md:w-2/12"},[t("h1",{staticClass:"font-medium dark:text-white"},[this._v("Welcome James! 😊")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("button",{staticClass:"bg-[#0cb0bd] flex items-center gap-x-3 w-full rounded-md justify-center py-2.5"},[e("img",{staticClass:"h-10 w-10",attrs:{src:r(165),alt:""}}),t._v(" "),e("span",{staticClass:"font-medium text-gray-900 text-sm"},[t._v("James Nelson")])])])}],o=r(0),c=Object(o.k)(""),n=r(166),d={search:c,setSearch:function(data){c.value=data}},h=d.setSearch,m={name:"DashboardHeader",components:{Breadcrumb:n.default},data:function(){return{isDarkMode:!1,form:{search:""},showSidebar:!1,sidebarItems:[{header:"",children:[{urlPath:"/dashboard",title:"Dashboard",icon:"user"}]},{header:"MANAGE",children:[{urlPath:"/dashboard/users",title:"Users",icon:"user"},{urlPath:"/dashboard/stories",title:"Stories",icon:"stories"},{urlPath:"/dashboard/ad-service",title:"Ad Service",icon:"ad"}]},{header:"SYSTEM",children:[{urlPath:"/dashboard/admin",title:"Admin",icon:"admin"},{urlPath:"/dashboard/config",title:"Configuration",icon:"config"}]}]}},methods:{toggleDarkMode:function(){this.isDarkMode=!this.isDarkMode,this.isDarkMode?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},toggleSidebar:function(){this.showSidebar=!this.showSidebar}},mounted:function(){this.isDarkMode="dark"===localStorage.getItem("theme"),this.isDarkMode&&document.documentElement.classList.add("dark")},watch:{"form.search":function(t){h(t),this.$emit("search",t)}}},f=(r(432),r(23)),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("main",[e("header",{staticClass:"space-y-3 bg-white p-6"},[e("section",{staticClass:"md:flex space-y-6 md:space-y-0 items-center border-b pb-3 hidden"},[e("div",{staticClass:"xl:w-2/12"},[e("h1",{staticClass:"font-medium dark:text-white"},[t._v("\n          Welcome James! 😊 "+t._s(t.form.search)+"\n        ")])]),t._v(" "),e("div",{staticClass:"flex w-full flex-grow justify-end"},[e("div",{staticClass:"flex items-center gap-x-10"},[e("div",{staticClass:"relative w-full"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.search,expression:"form.search"}],staticClass:"w-full rounded-md bg-gray-100 px-3 py-2.5 pl-10 text-sm outline-none",attrs:{type:"text",placeholder:"Search keyword"},domProps:{value:t.form.search},on:{input:function(e){e.target.composing||t.$set(t.form,"search",e.target.value)}}}),t._v(" "),e("img",{staticClass:"absolute left-4 top-2",attrs:{src:r(245),alt:""}})]),t._v(" "),e("div",{staticClass:"flex justify-between items-center gap-x-4"},[e("div",[t.isDarkMode?t._e():e("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(243),alt:""},on:{click:t.toggleDarkMode}}),t._v(" "),t.isDarkMode?e("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(242),alt:""},on:{click:t.toggleDarkMode}}):t._e()]),t._v(" "),e("div",[e("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(248),alt:""},on:{click:function(e){return t.$router.push("/dashboard/users/notify")}}})])])])])]),t._v(" "),e("section",{staticClass:"flex items-center justify-between border-b pb-3 md:hidden"},[t._m(0),t._v(" "),e("div",{staticClass:"flex justify-between items-center gap-x-4"},[e("div",[t.isDarkMode?t._e():e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(243),alt:""},on:{click:t.toggleDarkMode}}),t._v(" "),t.isDarkMode?e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(242),alt:""},on:{click:t.toggleDarkMode}}):t._e()]),t._v(" "),e("div",[t.isDarkMode?e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(250),alt:""},on:{click:t.toggleSidebar}}):t._e(),t._v(" "),t.isDarkMode?t._e():e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(249),alt:""},on:{click:t.toggleSidebar}})])])]),t._v(" "),e("div",{staticClass:"text-white flex justify-between items-center"},[e("div",[e("Breadcrumb")],1),t._v(" "),t._t("action")],2)]),t._v(" "),e("div",{staticClass:"w-64 bg-white shadow-md",class:["fixed inset-y-0 left-0 z-30 transition duration-300 ease-in-out",t.showSidebar?"translate-x-0":"-translate-x-full"]},[e("nav",[e("main",{staticClass:"w-full p-6 relative flex flex-col h-screen"},[e("div",{staticClass:"flex-grow relative"},[t.isDarkMode?t._e():e("img",{attrs:{src:r(247),alt:""}}),t._v(" "),t.isDarkMode?e("img",{staticClass:"px-3",attrs:{src:r(246),alt:""}}):t._e(),t._v(" "),t._l(t.sidebarItems,(function(l,o){var header=l.header,c=l.children;return e("div",{key:o},[e("h2",{staticClass:"py-3 pb-3 text-[#B3BBCA]",class:[header?"border-b-[0.2px] border-gray-300":""]},[t._v("\n              "+t._s(header)+"\n            ")]),t._v(" "),e("div",{staticClass:"w-full space-y-1 rounded"},t._l(c,(function(l){return e("NuxtLink",{key:l.title,staticClass:"flex w-full items-center gap-x-3 rounded-md px-3 py-2.5 leading-loose text-black dark:text-white",attrs:{to:l.urlPath},nativeOn:{click:function(e){return t.toggleSidebar.apply(null,arguments)}}},[e("img",{attrs:{src:r(244)("./".concat(l.icon,".svg")),alt:""}}),t._v("\n                "+t._s(l.title)+"\n              ")])})),1)])}))],2),t._v(" "),t._m(1)])])])])}),l,!1,null,"72752b35",null);e.default=component.exports},476:function(t,e,r){t.exports=r.p+"img/aeroplane.a78ef4d.png"},563:function(t,e,r){"use strict";r.r(e);var l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-screen place-content-center grid"},[e("div",{staticClass:"flex items-center gap-x-3"},[e("h1",{staticClass:"text-gray-700 text-xl"},[t._v("Coming Soon..")]),t._v(" "),e("img",{staticClass:"h-10 w-10",attrs:{src:r(476),alt:""}})])])}],o={layout:"dashboard"},c=r(23),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("DashboardHeader"),t._v(" "),t._m(0)],1)}),l,!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardHeader:r(434).default})}}]);