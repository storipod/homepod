(window.webpackJsonp=window.webpackJsonp||[]).push([[28,4,6],{440:function(t,e,r){var content=r(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("fec8ebc2",content,!0,{sourceMap:!1})},441:function(t,e,r){"use strict";r(440)},442:function(t,e,r){var l=r(49)((function(i){return i[1]}));l.push([t.i,".nuxt-link-exact-active[data-v-0d99538d]{background-color:#000;color:#fff}",""]),l.locals={},t.exports=l},443:function(t,e,r){"use strict";r.r(e);r(27),r(133);var l=[function(){var t=this._self._c;return t("div",{staticClass:"xl:w-2/12"},[t("h6",{staticClass:"font-medium dark:text-white text-sm"},[this._v("\n          Welcome James! 😊\n        ")])])},function(){var t=this._self._c;return t("div",{staticClass:"md:w-2/12"},[t("h6",{staticClass:"font-medium dark:text-white"},[this._v("Welcome James! 😊")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("button",{staticClass:"bg-[#0cb0bd] flex items-center gap-x-3 w-full rounded-md justify-center py-2.5"},[e("img",{staticClass:"h-10 w-10",attrs:{src:r(167),alt:""}}),t._v(" "),e("span",{staticClass:"font-medium text-gray-900 text-sm"},[t._v("James Nelson")])])])}],n=r(0),o=Object(n.ref)(""),c=r(168),d={search:o,setSearch:function(data){o.value=data}},v=d.setSearch,f={name:"DashboardHeader",components:{Breadcrumb:c.default},data:function(){return{isDarkMode:!1,form:{search:""},showSidebar:!1,sidebarItems:[{header:"",children:[{urlPath:"/dashboard",title:"Dashboard",icon:"user"}]},{header:"MANAGE",children:[{urlPath:"/dashboard/users",title:"Users",icon:"user"},{urlPath:"/dashboard/stories",title:"Stories",icon:"stories"},{urlPath:"/dashboard/ad-service",title:"Ad Service",icon:"ad"}]},{header:"SYSTEM",children:[{urlPath:"/dashboard/admin",title:"Admin",icon:"admin"},{urlPath:"/dashboard/config",title:"Configuration",icon:"config"}]}]}},methods:{toggleDarkMode:function(){this.isDarkMode=!this.isDarkMode,this.isDarkMode?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},toggleSidebar:function(){this.showSidebar=!this.showSidebar}},mounted:function(){this.isDarkMode="dark"===localStorage.getItem("theme"),this.isDarkMode&&document.documentElement.classList.add("dark")},watch:{"form.search":function(t){v(t),this.$emit("search",t)}}},m=(r(441),r(23)),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("main",[e("header",{staticClass:"space-y-3 bg-white px-6 py-3"},[e("section",{staticClass:"md:flex space-y-6 md:space-y-0 items-center border-b hidden"},[t._m(0),t._v(" "),e("div",{staticClass:"flex w-full flex-grow justify-end"},[e("div",{staticClass:"flex items-center gap-x-10 pb-3"},[e("div",{staticClass:"relative w-full"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.search,expression:"form.search"}],staticClass:"w-full rounded-md bg-gray-100 px-3 py-2.5 pl-32 text-sm outline-none",attrs:{type:"text",placeholder:"Search keyword"},domProps:{value:t.form.search},on:{input:function(e){e.target.composing||t.$set(t.form,"search",e.target.value)}}}),t._v(" "),e("img",{staticClass:"absolute left-2 top-2",attrs:{src:r(251),alt:""}})]),t._v(" "),e("div",{staticClass:"flex justify-between items-center gap-x-4"},[e("div",[t.isDarkMode?t._e():e("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(249),alt:""},on:{click:t.toggleDarkMode}}),t._v(" "),t.isDarkMode?e("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(248),alt:""},on:{click:t.toggleDarkMode}}):t._e()]),t._v(" "),e("div",[e("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(254),alt:""},on:{click:function(e){return t.$router.push("/dashboard/users/notify")}}})])])])])]),t._v(" "),e("section",{staticClass:"flex items-center justify-between border-b pb-3 md:hidden"},[t._m(1),t._v(" "),e("div",{staticClass:"flex justify-between items-center gap-x-4"},[e("div",[t.isDarkMode?t._e():e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(249),alt:""},on:{click:t.toggleDarkMode}}),t._v(" "),t.isDarkMode?e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(248),alt:""},on:{click:t.toggleDarkMode}}):t._e()]),t._v(" "),e("div",[t.isDarkMode?e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(256),alt:""},on:{click:t.toggleSidebar}}):t._e(),t._v(" "),t.isDarkMode?t._e():e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(255),alt:""},on:{click:t.toggleSidebar}})])])]),t._v(" "),e("div",{staticClass:"text-white flex justify-between items-center"},[e("Breadcrumb"),t._v(" "),t._t("action")],2)]),t._v(" "),e("div",{staticClass:"w-64 bg-white shadow-md",class:["fixed inset-y-0 left-0 z-30 transition duration-300 ease-in-out",t.showSidebar?"translate-x-0":"-translate-x-full"]},[e("nav",[e("main",{staticClass:"w-full p-6 relative flex flex-col h-screen"},[e("div",{staticClass:"flex-grow relative"},[t.isDarkMode?t._e():e("img",{attrs:{src:r(253),alt:""}}),t._v(" "),t.isDarkMode?e("img",{staticClass:"px-3",attrs:{src:r(252),alt:""}}):t._e(),t._v(" "),t._l(t.sidebarItems,(function(l,n){var header=l.header,o=l.children;return e("div",{key:n},[e("h6",{staticClass:"py-3 pb-3 text-[#B3BBCA]",class:[header?"border-b-[0.2px] border-gray-300":""]},[t._v("\n              "+t._s(header)+"\n            ")]),t._v(" "),e("div",{staticClass:"w-full space-y-1 rounded"},t._l(o,(function(l){return e("nuxt-link",{key:l.title,staticClass:"flex w-full no-underline items-center gap-x-3 text-gray-500 rounded-md px-3 py-2.5 leading-loose dark:text-white",attrs:{to:l.urlPath},nativeOn:{click:function(e){return t.toggleSidebar.apply(null,arguments)}}},[e("img",{attrs:{src:r(250)("./".concat(l.icon,".svg")),alt:""}}),t._v("\n                "+t._s(l.title)+"\n              ")])})),1)])}))],2),t._v(" "),t._m(2)])])])])}),l,!1,null,"0d99538d",null);e.default=component.exports},450:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xIDEyczQtOCAxMS04IDExIDggMTEgOC00IDgtMTEgOC0xMS04LTExLTh6Ij48L3BhdGg+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyI+PC9jaXJjbGU+PC9zdmc+"},467:function(t,e,r){var content=r(480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("531bccb9",content,!0,{sourceMap:!1})},479:function(t,e,r){"use strict";r(467)},480:function(t,e,r){var l=r(49)((function(i){return i[1]}));l.push([t.i,'div.chart-wrapper[data-v-e033f774]{align-items:center;display:flex;justify-content:flex-start;width:"90%"}',""]),l.locals={},t.exports=l},492:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{chartOptions:{chart:{id:"vuechart-example",toolbar:{show:!1},type:"bar"},dataLabels:{enabled:!1},plotOptions:{bar:{borderRadius:10,horizontal:!1,borderRadiusApplication:"around"}},xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998]},tooltip:{theme:"light",fillSeriesColor:!1}},series:[{name:"series-1",data:[30,40,35,50,49,60,70,91]}]}}},n=(r(479),r(23)),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("client-only",[e("div",{staticClass:"chart-wrapper md:w-full overflow-x-auto w-full"},[e("apexchart",{staticClass:"md:w-full overflow-x-auto w-full",attrs:{width:"100%",type:"bar",options:t.chartOptions,series:t.series}})],1)])],1)}),[],!1,null,"e033f774",null);e.default=component.exports},507:function(t,e,r){t.exports=r.p+"img/avatar.84756ee.png"},522:function(t,e,r){"use strict";r.r(e);var l=[function(){var t=this._self._c;return t("div",{staticClass:"lg:w-1/12 flex justify-center items-center"},[t("img",{staticClass:"h-16 w-16",attrs:{src:r(507),alt:"avatar"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"space-y-6"},[e("div",{staticClass:"flex items-center gap-x-6"},[e("p",{staticClass:"text-sm font-semibold text-lg"},[t._v("Victor Abang")]),t._v(" "),e("span",{staticClass:"text-[#175CD3] bg-blue-50 rounded-full text-xs px-3 py-2.5"},[t._v("@vick_yy.")])]),t._v(" "),e("p",{staticClass:"text-gray-500 font-semibold text-sm"},[t._v("\n            Account created | 24th August, 2022 | 09:30 PM\n          ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center py-6"},[e("dt",{staticClass:"font-semibold text-gray-900 text-[17px]"},[t._v("\n              Email address\n            ")]),t._v(" "),e("dd",{staticClass:"font-semibold text-gray-900 text-[17px]"},[t._v("\n              olivia@gmail.com\n            ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center py-6"},[e("dt",{staticClass:"font-semibold text-gray-900 text-[17px]"},[t._v("\n              Phone number\n            ")]),t._v(" "),e("dd",{staticClass:"font-semibold text-gray-900 text-[17px]"},[t._v("\n              +234 703 127 480\n            ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center py-6"},[e("dt",{staticClass:"font-semibold text-gray-900 text-[17px]"},[t._v("Password")]),t._v(" "),e("dd",{staticClass:"font-semibold text-gray-900 text-[17px]"},[e("div",{staticClass:"flex items-center gap-x-2"},[e("p",{staticClass:"text-gray-400 font-semibold"},[t._v("********")]),t._v(" "),e("img",{attrs:{src:r(450),alt:""}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center py-6"},[e("dt",{staticClass:"font-semibold text-gray-900 text-[17px]"},[t._v("\n              Date of birth\n            ")]),t._v(" "),e("dd",{staticClass:"font-semibold text-gray-900 text-[17px]"},[t._v("\n              07 March, 2000\n            ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center py-6"},[e("dt",{staticClass:"font-semibold text-gray-900 text-[17px]"},[t._v("Gender")]),t._v(" "),e("dd",{staticClass:"font-semibold text-gray-900 text-[17px]"},[t._v("Female")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center py-6"},[e("dt",{staticClass:"font-semibold text-gray-900 text-[17px]"},[t._v("Status")]),t._v(" "),e("dd",{staticClass:"font-semibold text-gray-900 text-[17px] flex items-center gap-x-3"},[e("img",{attrs:{src:r(273),alt:""}}),t._v("Suspended\n            ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center py-6"},[e("dt",{staticClass:"font-semibold text-gray-900 text-[17px]"},[t._v("\n              Last Session\n            ")]),t._v(" "),e("dd",{staticClass:"font-semibold text-gray-900 text-[17px]"},[t._v("\n              1 h 37 mins\n            ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center"},[e("div",[e("p",{staticClass:"text-gray-400 font-medium"},[t._v("Today, 9 January")]),t._v(" "),e("h1",{staticClass:"text-lg font-extrabold text-gray-950 leading-loose"},[t._v("\n                  3h 50m\n                ")])]),t._v(" "),e("div",[e("select",{staticClass:"text-sm outline-none font-medium bg-white rounded-md px-2.5 py-2 w-full"},[e("option",[t._v("Daily")]),t._v(" "),e("option",[t._v("Weekly")])])])])}],n=r(492),o=r(168),c={components:{UserActivitiesChart:n.default,Breadcrumb:o.default},layout:"dashboard",data:function(){return{activeTable:"insight",breadcrumbTabs:[{text:"Insight"},{text:"Stori"},{text:"Wallet & Payout"}],userStats:[{title:"Followers",count:"300k "},{title:"Following",count:"2.02k"},{title:"Stories",count:"96"},{title:"Premium stories",count:"96"},{title:"Views",count:"12.02k"},{title:"Reactions",count:"40k"},{title:"Estimated Payout",count:"US $0.28"}]}},methods:{setActiveTable:function(t){this.activeTable=t}}},d=r(23),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"space-y-6"},[e("DashboardHeader",{scopedSlots:t._u([{key:"action",fn:function(){return[e("div",{staticClass:"relative"},[e("div",{staticClass:"inline-flex items-center overflow-hidden"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"29",height:"29",viewBox:"0 0 24 24",fill:"none",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("circle",{attrs:{cx:"12",cy:"12",r:"1"}}),t._v(" "),e("circle",{attrs:{cx:"19",cy:"12",r:"1"}}),t._v(" "),e("circle",{attrs:{cx:"5",cy:"12",r:"1"}})])]),t._v(" "),e("div",{staticClass:"absolute end-0 z-10 mt-0 w-56 rounded-md border border-gray-100 bg-white shadow-lg",attrs:{role:"menu"}},[e("div",{staticClass:"p-2"},[e("a",{staticClass:"block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700",attrs:{href:"#",role:"menuitem"}},[t._v("\n              Edit\n            ")]),t._v(" "),e("a",{staticClass:"block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700",attrs:{href:"#",role:"menuitem"}},[t._v("\n              Suspend\n            ")]),t._v(" "),e("a",{staticClass:"block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700",attrs:{href:"#",role:"menuitem"}},[t._v("\n              Remove User\n            ")])])])])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"border-b border-gray-200 mx-6"},[e("div",{},[e("nav",{staticClass:"-mb-px flex gap-6",attrs:{"aria-label":"Tabs"}},[e("button",{staticClass:"shrink-0 border-b-2 px-1 pb-2.5 text-sm text-gray-400",class:["insight"===t.activeTable?"border-sky-500 border-b-2 font-bold text-gray-900 dark:text-white":"border-transparent"],attrs:{"aria-current":"page"},on:{click:function(e){return t.setActiveTable("insight")}}},[t._v("\n          Insight\n        ")]),t._v(" "),e("button",{staticClass:"shrink-0 border-b-2 px-1 pb-2.5 text-sm text-gray-400",class:["stori"===t.activeTable?"border-sky-500 font-bold text-gray-900 dark:text-white":"border-transparent"],on:{click:function(e){return t.setActiveTable("stori")}}},[t._v("\n          Stori\n        ")]),t._v(" "),e("button",{staticClass:"shrink-0 border-b-2 px-1 pb-2.5 text-sm text-gray-400",class:["wallet"===t.activeTable?"border-sky-500 font-bold text-gray-900 dark:text-white":"border-transparent"],on:{click:function(e){return t.setActiveTable("wallet")}}},[t._v("\n          Wallet & Payout\n        ")])])])]),t._v(" "),e("section",{staticClass:"bg-white rounded-md p-6 space-y-4 mx-6"},[e("h1",{staticClass:"font-bold text-gray-950 text-lg pl-3 lg:pl-6"},[t._v("\n      Users Information\n    ")]),t._v(" "),e("div",{staticClass:"flex"},[t._m(0),t._v(" "),e("div",{staticClass:"w-11/12 hidden lg:block"},[e("div",{staticClass:"bg-gray-100 rounded-lg py-3 flex justify-between items-center px-6"},t._l(t.userStats,(function(l,n){return e("div",{key:n,staticClass:"w-full border-r last:border-r-0 border-gray-300"},[e("div",{staticClass:"flex justify-center items-center"},[e("div",{staticClass:"flex justify-center items-center flex-col gap-y-1"},[e("p",{staticClass:"text-xl font-semibold text-gray-900"},[t._v("\n                  "+t._s(l.count)+"\n                ")]),t._v(" "),e("p",{staticClass:"text-sm text-[#667085] font-medium flex items-center gap-x-3"},[t._v("\n                  "+t._s(l.title)+"\n                  "),"Stories"===l.title?e("img",{attrs:{src:r(272),alt:"'"}}):t._e()])]),t._v(" "),e("p",{staticClass:"bg-gray-300 h-12"})])])})),0)])]),t._v(" "),e("div",{staticClass:"lg:flex justify-between max-h-[650px] pt-6"},[e("div",{staticClass:"flow-root lg:w-6/12 p-4 lg:p-6"},[t._m(1),t._v(" "),e("dl",{staticClass:"-my-3 divide-y divide-gray-100 text-sm p-3"},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("div",{staticClass:"flex justify-between items-center py-6"},[e("dt",{staticClass:"font-semibold text-gray-900 text-[17px]"},[t._v("Interests")]),t._v(" "),e("dd",{staticClass:"text-gray-700 sm:col-span-2"},[e("div",{staticClass:"flex items-center gap-x-3"},t._l(["Sports","Politics","Funky gists"],(function(r,l){return e("div",{key:l},[e("span",{staticClass:"text-[#6941C6] font-semibold bg-[#EEF4FF] rounded-full px-3 py-2.5"},[t._v("\n                    "+t._s(r))])])})),0)])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8)])]),t._v(" "),e("div",{staticClass:"lg:w-6/12 space-y-3 overflow-y-auto"},[e("h1",{staticClass:"text-lg font-semibold"},[t._v("Daily StoriTime")]),t._v(" "),e("div",{staticClass:"bg-[#F3F2F2] rounded-lg p-6"},[e("div",[t._m(9),t._v(" "),e("user-activities-chart")],1),t._v(" "),e("div",[e("p",{staticClass:"text-gray-400 font-medium"},[t._v("Today, 9 January")]),t._v(" "),e("h1",{staticClass:"text-lg font-extrabold text-gray-950 leading-loose"},[t._v("\n              3h 50m\n            ")]),t._v(" "),e("user-activities-chart")],1)])])])])],1)}),l,!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardHeader:r(443).default})}}]);