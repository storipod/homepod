(window.webpackJsonp=window.webpackJsonp||[]).push([[28,8],{495:function(t,e,r){var content=r(498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("198ded67",content,!0,{sourceMap:!1})},496:function(t,e,r){t.exports=r.p+"img/mobileLogo.e0c7e51.png"},497:function(t,e,r){"use strict";r(495)},498:function(t,e,r){var l=r(43)((function(i){return i[1]}));l.push([t.i,".nuxt-link-exact-active[data-v-4863cba7]{background-color:#000;color:#fff}",""]),l.locals={},t.exports=l},499:function(t,e,r){"use strict";r.r(e);r(26),r(139);var l=[function(){var t=this._self._c;return t("div",{staticClass:"flex justify-between items-center gap-x-4"},[t("div",[t("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(279),alt:""}})]),this._v(" "),t("div",[t("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(283),alt:""}})])])},function(){var t=this._self._c;return t("div",[t("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(279),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("button",{staticClass:"bg-[#0cb0bd] flex items-center gap-x-3 w-full rounded-md justify-center py-2.5"},[e("img",{staticClass:"h-10 w-10",attrs:{src:r(182),alt:""}}),t._v(" "),e("span",{staticClass:"font-medium text-gray-900 text-sm"},[t._v("James Nelson")])])])}],n=(r(53),r(64),r(0)),o=Object(n.ref)(""),c=r(183),d={search:o,setSearch:function(data){o.value=data}},m=d.setSearch,h={name:"DashboardHeader",components:{Breadcrumb:c.default},data:function(){return{isDarkMode:!1,user:{},form:{search:""},showSidebar:!1,sidebarItems:[{header:"",children:[{urlPath:"/dashboard",title:"Dashboard",icon:"user"}]},{header:"MANAGE",children:[{urlPath:"/dashboard/users",title:"Users",icon:"user"},{urlPath:"/dashboard/stories",title:"Stories",icon:"stories"},{urlPath:"/dashboard/notify",title:"Notify",icon:"bell"},{urlPath:"/dashboard/ad-service",title:"Ad Service",icon:"ad"}]},{header:"SYSTEM",children:[{urlPath:"/dashboard/admin",title:"Admin",icon:"admin"},{urlPath:"/dashboard/config",title:"Configuration",icon:"config"}]}]}},methods:{toggleDarkMode:function(){this.isDarkMode=!this.isDarkMode,this.isDarkMode?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},toggleSidebar:function(){this.showSidebar=!this.showSidebar}},mounted:function(){var t,e;(this.isDarkMode="dark"===localStorage.getItem("theme"),this.isDarkMode&&document.documentElement.classList.add("dark"),null!==(t=this.$store)&&void 0!==t&&null!==(t=t.state)&&void 0!==t&&null!==(t=t.app)&&void 0!==t&&t.isLoggedIn)&&(this.user=null===(e=this.$store)||void 0===e||null===(e=e.state)||void 0===e||null===(e=e.app)||void 0===e||null===(e=e.auth)||void 0===e?void 0:e.user)},watch:{"form.search":function(t){m(t),this.$emit("search",t)}},computed:{username:function(){var t,e,r;return Object.keys(null===(t=this.$store)||void 0===t?void 0:t.state).length?"".concat(null==this||null===(e=this.user)||void 0===e?void 0:e.firstname," ").concat(null==this||null===(r=this.user)||void 0===r?void 0:r.lastname):""}}},f=(r(497),r(18)),component=Object(f.a)(h,(function(){var t,e,l=this,n=l._self._c;return n("main",[n("header",{staticClass:"space-y-3 bg-white px-6 py-3"},[n("section",{staticClass:"md:flex space-y-6 md:space-y-0 items-center border-b hidden"},[n("div",{staticClass:"xl:w-2/12"},[n("h6",{staticClass:"font-medium text-sm md:text-lg"},[l._v("\n          Welcome "+l._s(null!==(t=l.username)&&void 0!==t?t:"N/A")+"! 😊\n        ")])]),l._v(" "),n("div",{staticClass:"flex w-full flex-grow justify-end"},[n("div",{staticClass:"flex items-center gap-x-10 pb-3"},[n("div",{staticClass:"relative w-full"},[n("input",{directives:[{name:"model",rawName:"v-model",value:l.form.search,expression:"form.search"}],staticClass:"w-full rounded-md bg-gray-100 px-3 py-2.5 pl-32 text-sm outline-none",attrs:{type:"text",placeholder:"Search keyword"},domProps:{value:l.form.search},on:{input:function(t){t.target.composing||l.$set(l.form,"search",t.target.value)}}}),l._v(" "),n("img",{staticClass:"absolute left-2 top-2",attrs:{src:r(281),alt:""}})]),l._v(" "),l._m(0)])])]),l._v(" "),n("section",{staticClass:"flex items-center justify-between border-b pb-3 md:hidden"},[n("div",{staticClass:"md:w-2/12"},[n("h6",{staticClass:"font-medium"},[l._v(" Welcome "+l._s(null!==(e=l.username)&&void 0!==e?e:"N/A")+"! 😊")])]),l._v(" "),n("div",{staticClass:"flex justify-between items-center gap-x-4"},[l._m(1),l._v(" "),n("div",[n("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(284),alt:""},on:{click:l.toggleSidebar}})])])]),l._v(" "),n("div",{staticClass:"text-white flex justify-between items-center"},[n("Breadcrumb"),l._v(" "),l._t("action")],2)]),l._v(" "),n("div",{staticClass:"w-64 bg-white shadow-md",class:["fixed inset-y-0 left-0 z-30 transition duration-300 ease-in-out",l.showSidebar?"translate-x-0":"-translate-x-full"]},[n("nav",[n("main",{staticClass:"w-full p-6 relative flex flex-col h-screen"},[n("div",{staticClass:"flex-grow relative"},[l.isDarkMode?l._e():n("img",{attrs:{src:r(282),alt:""}}),l._v(" "),l.isDarkMode?n("img",{staticClass:"px-3",attrs:{src:r(496),alt:""}}):l._e(),l._v(" "),l._l(l.sidebarItems,(function(t,e){var header=t.header,o=t.children;return n("div",{key:e},[n("h6",{staticClass:"py-3 pb-3 text-[#B3BBCA]",class:[header?"border-b-[0.2px] border-gray-300":""]},[l._v("\n              "+l._s(header)+"\n            ")]),l._v(" "),n("div",{staticClass:"w-full space-y-1 rounded"},l._l(o,(function(t){return n("nuxt-link",{key:t.title,staticClass:"flex w-full no-underline items-center gap-x-3 text-gray-500 rounded-md px-3 py-2.5 leading-loose",attrs:{to:t.urlPath},nativeOn:{click:function(t){return l.toggleSidebar.apply(null,arguments)}}},[n("img",{attrs:{src:r(280)("./".concat(t.icon,".svg")),alt:""}}),l._v("\n                "+l._s(t.title)+"\n              ")])})),1)])}))],2),l._v(" "),l._m(2)])])])])}),l,!1,null,"4863cba7",null);e.default=component.exports},525:function(t,e,r){t.exports=r.p+"img/aeroplane.a78ef4d.png"},580:function(t,e,r){"use strict";r.r(e);var l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-screen place-content-center grid"},[e("div",{staticClass:"flex items-center gap-x-3"},[e("h1",{staticClass:"text-gray-700 text-xl"},[t._v("Coming Soon..")]),t._v(" "),e("img",{staticClass:"h-10 w-10",attrs:{src:r(525),alt:""}})])])}],n={layout:"dashboard"},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("DashboardHeader"),t._v(" "),t._m(0)],1)}),l,!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardHeader:r(499).default})}}]);