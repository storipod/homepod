(window.webpackJsonp=window.webpackJsonp||[]).push([[29,4,6],{448:function(t,e,r){var content=r(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("f7cf1fb4",content,!0,{sourceMap:!1})},449:function(t,e,r){t.exports=r.p+"img/mobileLogo.e0c7e51.png"},450:function(t,e,r){"use strict";r(448)},451:function(t,e,r){var n=r(35)((function(i){return i[1]}));n.push([t.i,".nuxt-link-exact-active[data-v-c590fa2e]{background-color:#000;color:#fff}",""]),n.locals={},t.exports=n},452:function(t,e,r){"use strict";r.r(e);r(27),r(133);var n=[function(){var t=this._self._c;return t("div",{staticClass:"xl:w-2/12"},[t("h6",{staticClass:"font-medium text-sm md:text-lg"},[this._v("\n          Welcome James! 😊\n        ")])])},function(){var t=this._self._c;return t("div",{staticClass:"flex justify-between items-center gap-x-4"},[t("div",[t("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(251),alt:""}})]),this._v(" "),t("div",[t("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(255),alt:""}})])])},function(){var t=this._self._c;return t("div",{staticClass:"md:w-2/12"},[t("h6",{staticClass:"font-medium dark:text-white"},[this._v("Welcome James! 😊")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("button",{staticClass:"bg-[#0cb0bd] flex items-center gap-x-3 w-full rounded-md justify-center py-2.5"},[e("img",{staticClass:"h-10 w-10",attrs:{src:r(167),alt:""}}),t._v(" "),e("span",{staticClass:"font-medium text-gray-900 text-sm"},[t._v("James Nelson")])])])}],l=r(0),c=Object(l.ref)(""),o=r(168),d={search:c,setSearch:function(data){c.value=data}},v=d.setSearch,m={name:"DashboardHeader",components:{Breadcrumb:o.default},data:function(){return{isDarkMode:!1,form:{search:""},showSidebar:!1,sidebarItems:[{header:"",children:[{urlPath:"/dashboard",title:"Dashboard",icon:"user"}]},{header:"MANAGE",children:[{urlPath:"/dashboard/users",title:"Users",icon:"user"},{urlPath:"/dashboard/stories",title:"Stories",icon:"stories"},{urlPath:"/dashboard/notify",title:"Notify",icon:"bell"},{urlPath:"/dashboard/ad-service",title:"Ad Service",icon:"ad"}]},{header:"SYSTEM",children:[{urlPath:"/dashboard/admin",title:"Admin",icon:"admin"},{urlPath:"/dashboard/config",title:"Configuration",icon:"config"}]}]}},methods:{toggleDarkMode:function(){this.isDarkMode=!this.isDarkMode,this.isDarkMode?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},toggleSidebar:function(){this.showSidebar=!this.showSidebar}},mounted:function(){this.isDarkMode="dark"===localStorage.getItem("theme"),this.isDarkMode&&document.documentElement.classList.add("dark")},watch:{"form.search":function(t){v(t),this.$emit("search",t)}}},f=(r(450),r(16)),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("main",[e("header",{staticClass:"space-y-3 bg-white px-6 py-3"},[e("section",{staticClass:"md:flex space-y-6 md:space-y-0 items-center border-b hidden"},[t._m(0),t._v(" "),e("div",{staticClass:"flex w-full flex-grow justify-end"},[e("div",{staticClass:"flex items-center gap-x-10 pb-3"},[e("div",{staticClass:"relative w-full"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.search,expression:"form.search"}],staticClass:"w-full rounded-md bg-gray-100 px-3 py-2.5 pl-32 text-sm outline-none",attrs:{type:"text",placeholder:"Search keyword"},domProps:{value:t.form.search},on:{input:function(e){e.target.composing||t.$set(t.form,"search",e.target.value)}}}),t._v(" "),e("img",{staticClass:"absolute left-2 top-2",attrs:{src:r(253),alt:""}})]),t._v(" "),t._m(1)])])]),t._v(" "),e("section",{staticClass:"flex items-center justify-between border-b pb-3 md:hidden"},[t._m(2),t._v(" "),e("div",{staticClass:"flex justify-between items-center gap-x-4"},[e("div",[t.isDarkMode?t._e():e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(251),alt:""}}),t._v(" "),t.isDarkMode?e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(257),alt:""}}):t._e()]),t._v(" "),e("div",[t.isDarkMode?e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(258),alt:""},on:{click:t.toggleSidebar}}):t._e(),t._v(" "),t.isDarkMode?t._e():e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(256),alt:""},on:{click:t.toggleSidebar}})])])]),t._v(" "),e("div",{staticClass:"text-white flex justify-between items-center"},[e("Breadcrumb"),t._v(" "),t._t("action")],2)]),t._v(" "),e("div",{staticClass:"w-64 bg-white shadow-md",class:["fixed inset-y-0 left-0 z-30 transition duration-300 ease-in-out",t.showSidebar?"translate-x-0":"-translate-x-full"]},[e("nav",[e("main",{staticClass:"w-full p-6 relative flex flex-col h-screen"},[e("div",{staticClass:"flex-grow relative"},[t.isDarkMode?t._e():e("img",{attrs:{src:r(254),alt:""}}),t._v(" "),t.isDarkMode?e("img",{staticClass:"px-3",attrs:{src:r(449),alt:""}}):t._e(),t._v(" "),t._l(t.sidebarItems,(function(n,l){var header=n.header,c=n.children;return e("div",{key:l},[e("h6",{staticClass:"py-3 pb-3 text-[#B3BBCA]",class:[header?"border-b-[0.2px] border-gray-300":""]},[t._v("\n              "+t._s(header)+"\n            ")]),t._v(" "),e("div",{staticClass:"w-full space-y-1 rounded"},t._l(c,(function(n){return e("nuxt-link",{key:n.title,staticClass:"flex w-full no-underline items-center gap-x-3 text-gray-500 rounded-md px-3 py-2.5 leading-loose dark:text-white",attrs:{to:n.urlPath},nativeOn:{click:function(e){return t.toggleSidebar.apply(null,arguments)}}},[e("img",{attrs:{src:r(252)("./".concat(n.icon,".svg")),alt:""}}),t._v("\n                "+t._s(n.title)+"\n              ")])})),1)])}))],2),t._v(" "),t._m(3)])])])])}),n,!1,null,"c590fa2e",null);e.default=component.exports},456:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xIDEyczQtOCAxMS04IDExIDggMTEgOC00IDgtMTEgOC0xMS04LTExLTh6Ij48L3BhdGg+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyI+PC9jaXJjbGU+PC9zdmc+"},479:function(t,e,r){var content=r(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("ab72bd28",content,!0,{sourceMap:!1})},488:function(t,e,r){"use strict";r(479)},489:function(t,e,r){var n=r(35)((function(i){return i[1]}));n.push([t.i,'div.chart-wrapper[data-v-0e7bf2ee]{align-items:center;display:flex;justify-content:flex-start;width:"90%"}',""]),n.locals={},t.exports=n},497:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{chartOptions:{chart:{id:"vuechart-example",toolbar:{show:!1},type:"bar"},dataLabels:{enabled:!1},plotOptions:{bar:{borderRadius:10,horizontal:!1,borderRadiusApplication:"around",columnWidth:"50%",barHeight:"100%"}},xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998,1996,1997,1998,1991,1992,1993,1994]},colors:[function(t){var e=t.value;t.seriesIndex,t.w;return e>50?"#000000":"#0ba9b9"}],tooltip:{theme:"light",fillSeriesColor:!1}},series:[{name:"series-1",data:[100,40,35,100,49,60,70,60,40,75,50,49,40,35,100]}]}}},l=(r(488),r(16)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("client-only",[e("div",{staticClass:"chart-wrapper md:w-full overflow-x-auto w-full"},[e("apexchart",{staticClass:"md:w-full overflow-x-auto w-full",attrs:{width:"100%",height:"200",type:"bar",options:t.chartOptions,series:t.series}})],1)])],1)}),[],!1,null,"0e7bf2ee",null);e.default=component.exports},512:function(t,e,r){t.exports=r.p+"img/avatar.84756ee.png"},527:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"space-y-6 pb-3"},[e("div",{staticClass:"flex items-center gap-x-6"},[e("p",{staticClass:"text-sm font-semibold text-lg"},[t._v("Victor Abang")]),t._v(" "),e("div",{staticClass:"mb-3"},[e("span",{staticClass:"text-[#175CD3] bg-blue-50 rounded-full text-xs px-3 py-2"},[t._v("@vick_yy.")])])]),t._v(" "),e("p",{staticClass:"text-gray-500 font-semibold text-sm"},[t._v("\n              Account created | 24th August, 2022 | 09:30 PM\n            ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center py-2"},[e("dt",{staticClass:"font-medium text-gray-900 text-[14px]"},[t._v("\n                Email address\n              ")]),t._v(" "),e("dd",{staticClass:"font-medium text-gray-900 text-[14px]"},[t._v("\n                olivia@gmail.com\n              ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center py-3.5"},[e("dt",{staticClass:"font-medium text-gray-900 text-[14px]"},[t._v("\n                Phone number\n              ")]),t._v(" "),e("dd",{staticClass:"font-medium text-gray-900 text-[14px]"},[t._v("\n                +234 703 127 480\n              ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center py-3.5"},[e("dt",{staticClass:"font-medium text-gray-900 text-[14px]"},[t._v("Password")]),t._v(" "),e("dd",{staticClass:"font-medium text-gray-900 text-[14px]"},[e("div",{staticClass:"flex items-center gap-x-2"},[e("p",{staticClass:"text-gray-400 font-semibold pt-3"},[t._v("********")]),t._v(" "),e("img",{attrs:{src:r(456),alt:""}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center py-3.5"},[e("dt",{staticClass:"font-medium text-gray-900 text-[14px]"},[t._v("\n                Date of birth\n              ")]),t._v(" "),e("dd",{staticClass:"font-medium text-gray-900 text-[14px]"},[t._v("\n                07 March, 2000\n              ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center py-3.5"},[e("dt",{staticClass:"font-medium text-gray-900 text-[14px]"},[t._v("Gender")]),t._v(" "),e("dd",{staticClass:"font-medium text-gray-900 text-[14px]"},[t._v("Female")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center py-3.5"},[e("dt",{staticClass:"font-medium text-gray-900 text-[14px]"},[t._v("Status")]),t._v(" "),e("dd",{staticClass:"font-medium text-gray-900 text-[14px] flex items-center gap-x-3"},[e("img",{attrs:{src:r(275),alt:""}}),t._v("Suspended\n              ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center py-3.5"},[e("dt",{staticClass:"font-medium text-gray-900 text-[14px]"},[t._v("\n                Last Session\n              ")]),t._v(" "),e("dd",{staticClass:"font-medium text-gray-900 text-[14px]"},[t._v("\n                1 h 37 mins\n              ")])])},function(){var t=this._self._c;return t("div",{staticClass:"pt-32"},[t("p",{staticClass:"flex justify-center items-center font-medium text-gray-700"},[this._v("\n              Coming soon\n            ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center"},[e("div",[e("p",{staticClass:"text-gray-400 font-medium"},[t._v("Today, 9 January")]),t._v(" "),e("h1",{staticClass:"text-lg font-extrabold text-gray-950 leading-loose"},[t._v("\n                    3h 50m\n                  ")])]),t._v(" "),e("div",[e("select",{staticClass:"text-sm outline-none font-medium bg-white rounded-md px-2.5 py-2 w-full"},[e("option",[t._v("Daily")]),t._v(" "),e("option",[t._v("Weekly")])])])])}],l=r(497),c=r(168),o={components:{UserActivitiesChart:l.default,Breadcrumb:c.default},layout:"dashboard",data:function(){return{activeTable:"insight",activeTab:"default",activeTabKey:"",breadcrumbTabs:[{text:"Insight"},{text:"Stori"},{text:"Wallet & Payout"}],userStats:[{title:"Followers",key:"followers",count:"300k "},{title:"Following",key:"following",count:"2.02k"},{title:"Stories",key:"stories",count:"96"},{title:"Premium stories",key:"premium_stories",count:"96"},{title:"Views",key:"views",count:"12.02k"},{title:"Reactions",key:"reactions",count:"40k"},{title:"Estimated Payout",key:"estimated_payout",count:"US $0.28"}]}},methods:{setActiveTable:function(t){this.activeTable=t},setActiveTab:function(t){this.activeTab=t.key}}},d=r(16),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"space-y-6"},[e("DashboardHeader",{scopedSlots:t._u([{key:"action",fn:function(){return[e("div",{staticClass:"relative"},[e("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",variant:"link",right:"","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"29",height:"29",viewBox:"0 0 24 24",fill:"none",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("circle",{attrs:{cx:"12",cy:"12",r:"1"}}),t._v(" "),e("circle",{attrs:{cx:"19",cy:"12",r:"1"}}),t._v(" "),e("circle",{attrs:{cx:"5",cy:"12",r:"1"}})])]},proxy:!0}])},[t._v(" "),e("b-dropdown-item",[t._v("Edit")]),t._v(" "),e("b-dropdown-item",[t._v("Remove User")]),t._v(" "),e("b-dropdown-item",[t._v("Suspend")])],1)],1)]},proxy:!0}])}),t._v(" "),e("section",[e("div",{staticClass:"border-b border-gray-200 mx-6"},[e("div",{},[e("nav",{staticClass:"-mb-px flex gap-6",attrs:{"aria-label":"Tabs"}},[e("button",{staticClass:"shrink-0 border-b-2 px-1 pb-2.5 text-sm text-gray-400",class:["insight"===t.activeTable?"border-sky-500 border-b-2 font-bold text-gray-900 dark:text-white":"border-transparent"],attrs:{"aria-current":"page"},on:{click:function(e){return t.setActiveTable("insight")}}},[t._v("\n            Insight\n          ")]),t._v(" "),e("button",{staticClass:"shrink-0 border-b-2 px-1 pb-2.5 text-sm text-gray-400",class:["stori"===t.activeTable?"border-sky-500 font-bold text-gray-900 dark:text-white":"border-transparent"],on:{click:function(e){return t.setActiveTable("stori")}}},[t._v("\n            Stori\n          ")]),t._v(" "),e("button",{staticClass:"shrink-0 border-b-2 px-1 pb-2.5 text-sm text-gray-400",class:["wallet"===t.activeTable?"border-sky-500 font-bold text-gray-900 dark:text-white":"border-transparent"],on:{click:function(e){return t.setActiveTable("wallet")}}},[t._v("\n            Wallet & Payout\n          ")])])])]),t._v(" "),e("section",{staticClass:"bg-white rounded-md p-6 space-y-4 mx-6"},[e("h1",{staticClass:"font-bold text-gray-950 text-lg pl-3 lg:pl-6"},[t._v("\n        Users Information\n      ")]),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"lg:w-1/12 flex justify-center items-center"},[e("img",{staticClass:"h-16 w-16 cursor-pointer",attrs:{src:r(512),alt:"avatar"},on:{click:function(e){t.activeTab="default"}}})]),t._v(" "),e("div",{staticClass:"w-11/12 hidden lg:block"},[e("div",{staticClass:"bg-gray-100 rounded-lg flex justify-between items-center"},t._l(t.userStats,(function(n,l){return e("div",{key:l,staticClass:"w-full border-r last:border-r-0 border-gray-300 py-2",class:n.key===t.activeTab?"bg-gray-200":"bg-gray-50"},[e("div",{staticClass:"flex justify-center items-center cursor-pointer",on:{click:function(e){return t.setActiveTab(n)}}},[e("div",{staticClass:"flex justify-center items-center flex-col"},[e("p",{staticClass:"text-xl font-bold py-0 my-0",class:n.key===t.activeTab?"text-gray-900":"text-gray-400"},[t._v("\n                    "+t._s(n.count)+"\n                  ")]),t._v(" "),e("p",{staticClass:"text-sm font-medium py-0 my-0 flex items-center gap-x-3",class:n.key===t.activeTab?"text-[#667085]":"text-gray-400"},[t._v("\n                    "+t._s(n.title)+"\n                    "),"Stories"===n.title?e("img",{attrs:{src:r(274),alt:"'"}}):t._e()])]),t._v(" "),e("p",{staticClass:"bg-gray-300 h-12"})])])})),0)])]),t._v(" "),e("div",{staticClass:"lg:flex justify-between max-h-[650px] pt-6"},["default"===t.activeTab?e("div",{staticClass:"flow-root lg:w-6/12 p-4 lg:p-6"},[t._m(0),t._v(" "),e("dl",{staticClass:"-my-3 divide-y divide-gray-100 text-sm p-3"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"flex justify-between items-center py-3.5"},[e("dt",{staticClass:"font-medium text-gray-900 text-[14px]"},[t._v("Interests")]),t._v(" "),e("dd",{staticClass:"text-gray-700 sm:col-span-2"},[e("div",{staticClass:"flex items-center gap-x-3"},t._l(["Sports","Politics","Funky gists"],(function(r,n){return e("div",{key:n},[e("span",{staticClass:"text-[#6941C6] font-semibold bg-[#EEF4FF] rounded-full px-3 py-2.5"},[t._v("\n                      "+t._s(r))])])})),0)])]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)])]):e("div",{staticClass:"flow-root lg:w-6/12 bg-gray-50 p-4 border-[0.6px] border-white max-h-[650px] rounded-lg lg:p-6 w-full"},[t._m(8)]),t._v(" "),e("div",{staticClass:"lg:w-6/12 space-y-0 overflow-y-auto"},[e("h1",{staticClass:"text-lg font-semibold pl-6"},[t._v("Daily StoriTime")]),t._v(" "),e("div",{staticClass:"rounded-lg p-6 space-y-4"},[e("div",{staticClass:"rounded-lg bg-[#F3F2F2] p-3"},[t._m(9),t._v(" "),e("user-activities-chart")],1),t._v(" "),e("div",{staticClass:"rounded-lg bg-[#F3F2F2] p-3"},[e("p",{staticClass:"text-gray-400 font-medium"},[t._v("Today, 9 January")]),t._v(" "),e("h1",{staticClass:"text-lg font-extrabold text-gray-950 leading-loose"},[t._v("\n                3h 50m\n              ")]),t._v(" "),e("user-activities-chart")],1)])])])])])],1)}),n,!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardHeader:r(452).default})}}]);