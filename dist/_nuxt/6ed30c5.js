(window.webpackJsonp=window.webpackJsonp||[]).push([[31,8],{495:function(t,e,l){var content=l(498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(44).default)("198ded67",content,!0,{sourceMap:!1})},496:function(t,e,l){t.exports=l.p+"img/mobileLogo.e0c7e51.png"},497:function(t,e,l){"use strict";l(495)},498:function(t,e,l){var r=l(43)((function(i){return i[1]}));r.push([t.i,".nuxt-link-exact-active[data-v-4863cba7]{background-color:#000;color:#fff}",""]),r.locals={},t.exports=r},499:function(t,e,l){"use strict";l.r(e);l(26),l(139);var r=[function(){var t=this._self._c;return t("div",{staticClass:"flex justify-between items-center gap-x-4"},[t("div",[t("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:l(279),alt:""}})]),this._v(" "),t("div",[t("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:l(283),alt:""}})])])},function(){var t=this._self._c;return t("div",[t("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:l(279),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("button",{staticClass:"bg-[#0cb0bd] flex items-center gap-x-3 w-full rounded-md justify-center py-2.5"},[e("img",{staticClass:"h-10 w-10",attrs:{src:l(182),alt:""}}),t._v(" "),e("span",{staticClass:"font-medium text-gray-900 text-sm"},[t._v("James Nelson")])])])}],n=(l(53),l(64),l(0)),o=Object(n.ref)(""),c=l(183),d={search:o,setSearch:function(data){o.value=data}},m=d.setSearch,v={name:"DashboardHeader",components:{Breadcrumb:c.default},data:function(){return{isDarkMode:!1,user:{},form:{search:""},showSidebar:!1,sidebarItems:[{header:"",children:[{urlPath:"/dashboard",title:"Dashboard",icon:"user"}]},{header:"MANAGE",children:[{urlPath:"/dashboard/users",title:"Users",icon:"user"},{urlPath:"/dashboard/stories",title:"Stories",icon:"stories"},{urlPath:"/dashboard/notify",title:"Notify",icon:"bell"},{urlPath:"/dashboard/ad-service",title:"Ad Service",icon:"ad"}]},{header:"SYSTEM",children:[{urlPath:"/dashboard/admin",title:"Admin",icon:"admin"},{urlPath:"/dashboard/config",title:"Configuration",icon:"config"}]}]}},methods:{toggleDarkMode:function(){this.isDarkMode=!this.isDarkMode,this.isDarkMode?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},toggleSidebar:function(){this.showSidebar=!this.showSidebar}},mounted:function(){var t,e;(this.isDarkMode="dark"===localStorage.getItem("theme"),this.isDarkMode&&document.documentElement.classList.add("dark"),null!==(t=this.$store)&&void 0!==t&&null!==(t=t.state)&&void 0!==t&&null!==(t=t.app)&&void 0!==t&&t.isLoggedIn)&&(this.user=null===(e=this.$store)||void 0===e||null===(e=e.state)||void 0===e||null===(e=e.app)||void 0===e||null===(e=e.auth)||void 0===e?void 0:e.user)},watch:{"form.search":function(t){m(t),this.$emit("search",t)}},computed:{username:function(){var t,e,l;return Object.keys(null===(t=this.$store)||void 0===t?void 0:t.state).length?"".concat(null==this||null===(e=this.user)||void 0===e?void 0:e.firstname," ").concat(null==this||null===(l=this.user)||void 0===l?void 0:l.lastname):""}}},f=(l(497),l(18)),component=Object(f.a)(v,(function(){var t,e,r=this,n=r._self._c;return n("main",[n("header",{staticClass:"space-y-3 bg-white px-6 py-3"},[n("section",{staticClass:"md:flex space-y-6 md:space-y-0 items-center border-b hidden"},[n("div",{staticClass:"xl:w-2/12"},[n("h6",{staticClass:"font-medium text-sm md:text-lg"},[r._v("\n          Welcome "+r._s(null!==(t=r.username)&&void 0!==t?t:"N/A")+"! 😊\n        ")])]),r._v(" "),n("div",{staticClass:"flex w-full flex-grow justify-end"},[n("div",{staticClass:"flex items-center gap-x-10 pb-3"},[n("div",{staticClass:"relative w-full"},[n("input",{directives:[{name:"model",rawName:"v-model",value:r.form.search,expression:"form.search"}],staticClass:"w-full rounded-md bg-gray-100 px-3 py-2.5 pl-32 text-sm outline-none",attrs:{type:"text",placeholder:"Search keyword"},domProps:{value:r.form.search},on:{input:function(t){t.target.composing||r.$set(r.form,"search",t.target.value)}}}),r._v(" "),n("img",{staticClass:"absolute left-2 top-2",attrs:{src:l(281),alt:""}})]),r._v(" "),r._m(0)])])]),r._v(" "),n("section",{staticClass:"flex items-center justify-between border-b pb-3 md:hidden"},[n("div",{staticClass:"md:w-2/12"},[n("h6",{staticClass:"font-medium"},[r._v(" Welcome "+r._s(null!==(e=r.username)&&void 0!==e?e:"N/A")+"! 😊")])]),r._v(" "),n("div",{staticClass:"flex justify-between items-center gap-x-4"},[r._m(1),r._v(" "),n("div",[n("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:l(284),alt:""},on:{click:r.toggleSidebar}})])])]),r._v(" "),n("div",{staticClass:"text-white flex justify-between items-center"},[n("Breadcrumb"),r._v(" "),r._t("action")],2)]),r._v(" "),n("div",{staticClass:"w-64 bg-white shadow-md",class:["fixed inset-y-0 left-0 z-30 transition duration-300 ease-in-out",r.showSidebar?"translate-x-0":"-translate-x-full"]},[n("nav",[n("main",{staticClass:"w-full p-6 relative flex flex-col h-screen"},[n("div",{staticClass:"flex-grow relative"},[r.isDarkMode?r._e():n("img",{attrs:{src:l(282),alt:""}}),r._v(" "),r.isDarkMode?n("img",{staticClass:"px-3",attrs:{src:l(496),alt:""}}):r._e(),r._v(" "),r._l(r.sidebarItems,(function(t,e){var header=t.header,o=t.children;return n("div",{key:e},[n("h6",{staticClass:"py-3 pb-3 text-[#B3BBCA]",class:[header?"border-b-[0.2px] border-gray-300":""]},[r._v("\n              "+r._s(header)+"\n            ")]),r._v(" "),n("div",{staticClass:"w-full space-y-1 rounded"},r._l(o,(function(t){return n("nuxt-link",{key:t.title,staticClass:"flex w-full no-underline items-center gap-x-3 text-gray-500 rounded-md px-3 py-2.5 leading-loose",attrs:{to:t.urlPath},nativeOn:{click:function(t){return r.toggleSidebar.apply(null,arguments)}}},[n("img",{attrs:{src:l(280)("./".concat(t.icon,".svg")),alt:""}}),r._v("\n                "+r._s(t.title)+"\n              ")])})),1)])}))],2),r._v(" "),r._m(2)])])])])}),r,!1,null,"4863cba7",null);e.default=component.exports},582:function(t,e,l){"use strict";l.r(e);l(53);var r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center"},[e("h5",{staticClass:"font-semibold text-gray-950"},[t._v("Messages")]),t._v(" "),e("div",{staticClass:"flex items-center gap-x-3"},[e("img",{attrs:{src:l(281),alt:""}}),t._v(" "),e("select",{staticClass:"outline-none px-6 py-2 bg-gray-100 rounded-lg text-sm"},[e("option",[t._v("All")])])])])},function(){var t=this._self._c;return t("div",[t("img",{staticClass:"lg:h-14 lg:w-20 h-10 w-10 rounded-full object-cover object-center border p-1",attrs:{src:l(496),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"space-y-6 pl-8"},[e("div",{staticClass:"space-y-2"},[e("h6",{staticClass:"text-gray-900 font-semibold"},[t._v("Sent to")]),t._v(" "),e("div",{staticClass:"flex items-center gap-x-2"},[e("img",{staticClass:"h-10 w-10 rounded-full bg-white shadow p-2",attrs:{src:l(303),alt:""}}),t._v(" "),e("p",{staticClass:"font-medium text-gray-600 text-sm"},[t._v("All users")])])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("h6",{staticClass:"text-gray-900 font-semibold"},[t._v("Sent as")]),t._v(" "),e("div",{staticClass:"flex items-center gap-x-2"},[e("img",{staticClass:"h-10 w-10 rounded-full bg-white shadow p-2",attrs:{src:l(299),alt:""}}),t._v(" "),e("p",{staticClass:"font-medium text-gray-600 text-sm"},[t._v("Flash message")])])])])}],n={layout:"dashboard",data:function(){return{selectedMessage:{},messages:[{title:"Promo!!!",desc:"Hey you!!! To celebrate Nigeria’s Independence Day, we will  be offering 25% discount on every tri... ",time:"08:32 AM"},{title:"Happy Independence",desc:"Hey you!!! To celebrate Nigeria’s Independence Day, we will  be offering 25% discount on every tri... ",time:"08:32 AM"},{title:"Labor Day",desc:"Hey you!!! To celebrate Nigeria’s Independence Day, we will  be offering 25% discount on every tri... ",time:"08:32 AM"}]}},methods:{handleSelectedMessage:function(t){this.selectedMessage=t}}},o=l(18),component=Object(o.a)(n,(function(){var t,e,r,n=this,o=n._self._c;return o("main",[o("DashboardHeader",{scopedSlots:n._u([{key:"action",fn:function(){return[o("nuxt-link",{staticClass:"rounded-md flex items-center no-underline gap-x-3 bg-[#0BA9B9] px-6 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",attrs:{to:"/dashboard/notify/new",type:"button"}},[n._v("\n        New\n      ")])]},proxy:!0}])}),n._v(" "),o("div",{staticClass:"space-y-6 mx-3 md:mx-10 my-6"},[o("section",{staticClass:"bg-white rounded-lg lg:flex h-screen"},[o("section",{staticClass:"lg:w-6/12 border-r border-gray-200 p-10"},[n._m(0),n._v(" "),o("div",{staticClass:"space-y-6"},n._l(n.messages,(function(t,e){return o("div",{key:e,staticClass:"cursor-pointer",on:{click:function(e){return n.handleSelectedMessage(t)}}},[o("div",{staticClass:"lg:flex justify-between gap-x-3 border-b border-gray-200 py-4"},[o("div",{staticClass:"lg:flex space-y-1 lg:space-y-0 justify-between gap-x-6 lg:w-10/12"},[n._m(1,!0),n._v(" "),o("div",{staticClass:"space-y-3"},[o("p",{staticClass:"font-medium text-gray-950"},[n._v(n._s(t.title))]),n._v(" "),o("p",{staticClass:"font-medium text-sm lg:text-base text-gray-600"},[n._v("\n                    "+n._s(t.desc)+"\n                  ")])])]),n._v(" "),o("div",{staticClass:"lg:w-2/12 flex justify-end"},[o("p",{staticClass:"text-sm text-gray-500"},[n._v(n._s(t.time))])])])])})),0)]),n._v(" "),o("section",{staticClass:"lg:w-6/12 border-l border-gray-200"},[Object.keys(n.selectedMessage).length?o("div",[o("div",{staticClass:"flex items-center gap-x-3 border-b border-gray-300 py-4 pl-6"},[o("img",{staticClass:"h-10 w-10 rounded-full object-cover object-center border p-1",attrs:{src:l(496),alt:""}}),n._v(" "),o("p",{staticClass:"font-semibold"},[n._v(n._s(null===(t=n.selectedMessage)||void 0===t?void 0:t.title))])]),n._v(" "),o("div",{staticClass:"space-y-6 py-6"},[o("p",{staticClass:"text-center font-medium text-gray-500"},[n._v("\n              15th September 2022, "+n._s(null===(e=n.selectedMessage)||void 0===e?void 0:e.time)+"\n            ")]),n._v(" "),o("div",{staticClass:"border-b border-gray-300"},[o("p",{staticClass:"text-gray-800 rounded-lg font-medium leading-loose text-justify tracking-wider bg-gray-50 p-6 m-6"},[n._v("\n                "+n._s(null===(r=n.selectedMessage)||void 0===r?void 0:r.desc)+"\n              ")])])]),n._v(" "),n._m(2)]):o("div",{staticClass:"flex justify-center items-center flex-col gap-y-4 border-y border-gray-200 px-6 lg:px-0 py-14 mt-16"},[o("img",{staticClass:"h-32 w-60 rounded-full",attrs:{src:l(298),alt:""}}),n._v(" "),o("p",{staticClass:"font-semibold text-gray-900 max-w-sm text-center"},[n._v("\n            There is no content to display. Select a Message card to view\n            details.\n          ")])])])])])],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardHeader:l(499).default})}}]);