(window.webpackJsonp=window.webpackJsonp||[]).push([[32,6],{440:function(t,e,r){var content=r(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("fec8ebc2",content,!0,{sourceMap:!1})},441:function(t,e,r){"use strict";r(440)},442:function(t,e,r){var l=r(49)((function(i){return i[1]}));l.push([t.i,".nuxt-link-exact-active[data-v-0d99538d]{background-color:#000;color:#fff}",""]),l.locals={},t.exports=l},443:function(t,e,r){"use strict";r.r(e);r(27),r(133);var l=[function(){var t=this._self._c;return t("div",{staticClass:"xl:w-2/12"},[t("h6",{staticClass:"font-medium dark:text-white text-sm"},[this._v("\n          Welcome James! 😊\n        ")])])},function(){var t=this._self._c;return t("div",{staticClass:"md:w-2/12"},[t("h6",{staticClass:"font-medium dark:text-white"},[this._v("Welcome James! 😊")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("button",{staticClass:"bg-[#0cb0bd] flex items-center gap-x-3 w-full rounded-md justify-center py-2.5"},[e("img",{staticClass:"h-10 w-10",attrs:{src:r(167),alt:""}}),t._v(" "),e("span",{staticClass:"font-medium text-gray-900 text-sm"},[t._v("James Nelson")])])])}],n=r(0),c=Object(n.ref)(""),o=r(168),d={search:c,setSearch:function(data){c.value=data}},m=d.setSearch,f={name:"DashboardHeader",components:{Breadcrumb:o.default},data:function(){return{isDarkMode:!1,form:{search:""},showSidebar:!1,sidebarItems:[{header:"",children:[{urlPath:"/dashboard",title:"Dashboard",icon:"user"}]},{header:"MANAGE",children:[{urlPath:"/dashboard/users",title:"Users",icon:"user"},{urlPath:"/dashboard/stories",title:"Stories",icon:"stories"},{urlPath:"/dashboard/ad-service",title:"Ad Service",icon:"ad"}]},{header:"SYSTEM",children:[{urlPath:"/dashboard/admin",title:"Admin",icon:"admin"},{urlPath:"/dashboard/config",title:"Configuration",icon:"config"}]}]}},methods:{toggleDarkMode:function(){this.isDarkMode=!this.isDarkMode,this.isDarkMode?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},toggleSidebar:function(){this.showSidebar=!this.showSidebar}},mounted:function(){this.isDarkMode="dark"===localStorage.getItem("theme"),this.isDarkMode&&document.documentElement.classList.add("dark")},watch:{"form.search":function(t){m(t),this.$emit("search",t)}}},v=(r(441),r(23)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("main",[e("header",{staticClass:"space-y-3 bg-white px-6 py-3"},[e("section",{staticClass:"md:flex space-y-6 md:space-y-0 items-center border-b hidden"},[t._m(0),t._v(" "),e("div",{staticClass:"flex w-full flex-grow justify-end"},[e("div",{staticClass:"flex items-center gap-x-10 pb-3"},[e("div",{staticClass:"relative w-full"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.search,expression:"form.search"}],staticClass:"w-full rounded-md bg-gray-100 px-3 py-2.5 pl-32 text-sm outline-none",attrs:{type:"text",placeholder:"Search keyword"},domProps:{value:t.form.search},on:{input:function(e){e.target.composing||t.$set(t.form,"search",e.target.value)}}}),t._v(" "),e("img",{staticClass:"absolute left-2 top-2",attrs:{src:r(251),alt:""}})]),t._v(" "),e("div",{staticClass:"flex justify-between items-center gap-x-4"},[e("div",[t.isDarkMode?t._e():e("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(249),alt:""},on:{click:t.toggleDarkMode}}),t._v(" "),t.isDarkMode?e("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(248),alt:""},on:{click:t.toggleDarkMode}}):t._e()]),t._v(" "),e("div",[e("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(254),alt:""},on:{click:function(e){return t.$router.push("/dashboard/users/notify")}}})])])])])]),t._v(" "),e("section",{staticClass:"flex items-center justify-between border-b pb-3 md:hidden"},[t._m(1),t._v(" "),e("div",{staticClass:"flex justify-between items-center gap-x-4"},[e("div",[t.isDarkMode?t._e():e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(249),alt:""},on:{click:t.toggleDarkMode}}),t._v(" "),t.isDarkMode?e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(248),alt:""},on:{click:t.toggleDarkMode}}):t._e()]),t._v(" "),e("div",[t.isDarkMode?e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(256),alt:""},on:{click:t.toggleSidebar}}):t._e(),t._v(" "),t.isDarkMode?t._e():e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(255),alt:""},on:{click:t.toggleSidebar}})])])]),t._v(" "),e("div",{staticClass:"text-white flex justify-between items-center"},[e("Breadcrumb"),t._v(" "),t._t("action")],2)]),t._v(" "),e("div",{staticClass:"w-64 bg-white shadow-md",class:["fixed inset-y-0 left-0 z-30 transition duration-300 ease-in-out",t.showSidebar?"translate-x-0":"-translate-x-full"]},[e("nav",[e("main",{staticClass:"w-full p-6 relative flex flex-col h-screen"},[e("div",{staticClass:"flex-grow relative"},[t.isDarkMode?t._e():e("img",{attrs:{src:r(253),alt:""}}),t._v(" "),t.isDarkMode?e("img",{staticClass:"px-3",attrs:{src:r(252),alt:""}}):t._e(),t._v(" "),t._l(t.sidebarItems,(function(l,n){var header=l.header,c=l.children;return e("div",{key:n},[e("h6",{staticClass:"py-3 pb-3 text-[#B3BBCA]",class:[header?"border-b-[0.2px] border-gray-300":""]},[t._v("\n              "+t._s(header)+"\n            ")]),t._v(" "),e("div",{staticClass:"w-full space-y-1 rounded"},t._l(c,(function(l){return e("nuxt-link",{key:l.title,staticClass:"flex w-full no-underline items-center gap-x-3 text-gray-500 rounded-md px-3 py-2.5 leading-loose dark:text-white",attrs:{to:l.urlPath},nativeOn:{click:function(e){return t.toggleSidebar.apply(null,arguments)}}},[e("img",{attrs:{src:r(250)("./".concat(l.icon,".svg")),alt:""}}),t._v("\n                "+t._s(l.title)+"\n              ")])})),1)])}))],2),t._v(" "),t._m(2)])])])])}),l,!1,null,"0d99538d",null);e.default=component.exports},520:function(t,e,r){"use strict";r.r(e);r(52);var l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center"},[e("h5",{staticClass:"font-semibold text-gray-950"},[t._v("Messages")]),t._v(" "),e("div",{staticClass:"flex items-center gap-x-3"},[e("img",{attrs:{src:r(251),alt:""}}),t._v(" "),e("select",{staticClass:"outline-none px-6 py-2 bg-gray-100 rounded-lg text-sm"},[e("option",[t._v("All")])])])])},function(){var t=this._self._c;return t("div",[t("img",{staticClass:"lg:h-14 lg:w-20 h-10 w-10 rounded-full object-cover object-center border p-1",attrs:{src:r(252),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"space-y-6 pl-8"},[e("div",{staticClass:"space-y-2"},[e("h6",{staticClass:"text-gray-900 font-semibold"},[t._v("Sent to")]),t._v(" "),e("div",{staticClass:"flex items-center gap-x-2"},[e("img",{staticClass:"h-10 w-10 rounded-full bg-white shadow p-2",attrs:{src:r(274),alt:""}}),t._v(" "),e("p",{staticClass:"font-medium text-gray-600 text-sm"},[t._v("All users")])])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("h6",{staticClass:"text-gray-900 font-semibold"},[t._v("Sent as")]),t._v(" "),e("div",{staticClass:"flex items-center gap-x-2"},[e("img",{staticClass:"h-10 w-10 rounded-full bg-white shadow p-2",attrs:{src:r(268),alt:""}}),t._v(" "),e("p",{staticClass:"font-medium text-gray-600 text-sm"},[t._v("Flash message")])])])])}],n={layout:"dashboard",data:function(){return{selectedMessage:{},messages:[{title:"Promo!!!",desc:"Hey you!!! To celebrate Nigeria’s Independence Day, we will  be offering 25% discount on every tri... ",time:"08:32 AM"},{title:"Happy Independence",desc:"Hey you!!! To celebrate Nigeria’s Independence Day, we will  be offering 25% discount on every tri... ",time:"08:32 AM"},{title:"Labor Day",desc:"Hey you!!! To celebrate Nigeria’s Independence Day, we will  be offering 25% discount on every tri... ",time:"08:32 AM"}]}},methods:{handleSelectedMessage:function(t){this.selectedMessage=t}}},c=r(23),component=Object(c.a)(n,(function(){var t,e,l,n=this,c=n._self._c;return c("main",[c("DashboardHeader",{scopedSlots:n._u([{key:"action",fn:function(){return[c("nuxt-link",{staticClass:"rounded-md flex items-center no-underline gap-x-3 bg-[#0BA9B9] px-6 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",attrs:{to:"/dashboard/users/create-notification",type:"button"}},[n._v("\n        New\n      ")])]},proxy:!0}])}),n._v(" "),c("div",{staticClass:"space-y-6 mx-3 md:mx-10 my-6"},[c("section",{staticClass:"bg-white rounded-lg lg:flex h-screen"},[c("section",{staticClass:"lg:w-6/12 border-r border-gray-200 p-10"},[n._m(0),n._v(" "),c("div",{staticClass:"space-y-6"},n._l(n.messages,(function(t,e){return c("div",{key:e,staticClass:"cursor-pointer",on:{click:function(e){return n.handleSelectedMessage(t)}}},[c("div",{staticClass:"lg:flex justify-between gap-x-3 border-b border-gray-200 py-4"},[c("div",{staticClass:"lg:flex space-y-1 lg:space-y-0 justify-between gap-x-6 lg:w-10/12"},[n._m(1,!0),n._v(" "),c("div",{staticClass:"space-y-3"},[c("p",{staticClass:"font-medium text-gray-950"},[n._v(n._s(t.title))]),n._v(" "),c("p",{staticClass:"font-medium text-sm lg:text-base text-gray-600"},[n._v("\n                    "+n._s(t.desc)+"\n                  ")])])]),n._v(" "),c("div",{staticClass:"lg:w-2/12 flex justify-end"},[c("p",{staticClass:"text-sm text-gray-500"},[n._v(n._s(t.time))])])])])})),0)]),n._v(" "),c("section",{staticClass:"lg:w-6/12 border-l border-gray-200"},[Object.keys(n.selectedMessage).length?c("div",[c("div",{staticClass:"flex items-center gap-x-3 border-b border-gray-300 py-4 pl-6"},[c("img",{staticClass:"h-10 w-10 rounded-full object-cover object-center border p-1",attrs:{src:r(252),alt:""}}),n._v(" "),c("p",{staticClass:"font-semibold"},[n._v(n._s(null===(t=n.selectedMessage)||void 0===t?void 0:t.title))])]),n._v(" "),c("div",{staticClass:"space-y-6 py-6"},[c("p",{staticClass:"text-center font-medium text-gray-500"},[n._v("\n              15th September 2022, "+n._s(null===(e=n.selectedMessage)||void 0===e?void 0:e.time)+"\n            ")]),n._v(" "),c("div",{staticClass:"border-b border-gray-300"},[c("p",{staticClass:"text-gray-800 rounded-lg font-medium leading-loose text-justify tracking-wider bg-gray-50 p-6 m-6"},[n._v("\n                "+n._s(null===(l=n.selectedMessage)||void 0===l?void 0:l.desc)+"\n              ")])])]),n._v(" "),n._m(2)]):c("div",{staticClass:"flex justify-center items-center flex-col gap-y-4 border-y border-gray-200 px-6 lg:px-0 py-14 mt-16"},[c("img",{staticClass:"h-32 w-60 rounded-full",attrs:{src:r(267),alt:""}}),n._v(" "),c("p",{staticClass:"font-semibold text-gray-900 max-w-sm text-center"},[n._v("\n            There is no content to display. Select a Message card to view\n            details.\n          ")])])])])])],1)}),l,!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardHeader:r(443).default})}}]);