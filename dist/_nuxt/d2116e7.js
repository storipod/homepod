(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{353:function(t,e,r){var content=r(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("74072521",content,!0,{sourceMap:!1})},355:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjAzNzcgNi4zNDMyNkwxMy42MjY4IDcuNzYwNzhMMTYuODk3IDExLjAxNTdMMy4yOTE5OSAxMS4wMjk0TDMuMjk0IDEzLjAyOTRMMTYuODYxOCAxMy4wMTU4TDEzLjY0NjYgMTYuMjQ2TDE1LjA2NDEgMTcuNjU2OUwyMC43MDc4IDExLjk4NjlMMTUuMDM3NyA2LjM0MzI2WiIgZmlsbD0iIzQxNDE0MSIvPgo8L3N2Zz4K"},359:function(t,e,r){"use strict";r(353)},360:function(t,e,r){var n=r(71)((function(i){return i[1]}));n.push([t.i,'div.chart-wrapper[data-v-07aeed28]{width:"100%";display:flex;align-items:center;justify-content:start}',""]),n.locals={},t.exports=n},362:function(t,e,r){"use strict";r.r(e);r(24),r(39),r(40);var n={components:{VueApexCharts:function(){return Promise.resolve().then(r.t.bind(null,212,7))}},data:function(){return{series:[80,20],chartOptions:{labels:["Google search ","Others"],dataLabels:{enabled:!0},fill:{colors:["#BDBDBD","#000000"]},colors:["#BDBDBD","#000000"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom",show:!1}}}]}}}},o=(r(359),r(23)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"chart-wrapper md:w-full overflow-x-auto"},[e("client-only",[e("VueApexCharts",{staticClass:"md:w-full overflow-x-auto",attrs:{width:"500",type:"pie",options:t.chartOptions,series:t.series}})],1)],1)])}),[],!1,null,"07aeed28",null);e.default=component.exports},376:function(t,e,r){"use strict";r.r(e);r(36);var n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"sm:hidden"},[e("label",{staticClass:"sr-only",attrs:{for:"Tab"}},[t._v("Tab")]),t._v(" "),e("select",{staticClass:"md:w-full rounded-md py-2.5 md:py-0 px-3 outline-none text-sm md:px-0 bg-gray-300 border-gray-200",attrs:{id:"Tab"}},[e("option",{attrs:{select:""}},[t._v("Reserved Username")]),t._v(" "),e("option",[t._v("Reported users")]),t._v(" "),e("option",[t._v("Reported post")]),t._v(" "),e("option",[t._v("Reported comment")])])])},function(){var t=this._self._c;return t("td",{staticClass:"whitespace-nowrap px-4 py-6 text-gray-700 dark:text-white"},[t("img",{attrs:{src:r(355),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"md:flex space-y-6 md:space-y-0 items-center justify-between px-3 md:px-7 py-4"},[e("div",{staticClass:"space-y-1"},[e("h1",{staticClass:"font-medium text-lg text-gray-900 dark:text-white"},[t._v("\n          Website Traffic\n        ")]),t._v(" "),e("p",{staticClass:"text-gray-400 dark:text-white text-sm md:text-base"},[t._v("\n          Comparison of source of website traffic\n        ")])]),t._v(" "),e("select",{staticClass:"text-sm font-medium bg-gray-100 rounded-md px-2.5 py-2 outline-none"},[e("option",[t._v("This year")])])])}],o={layout:"dashboard",data:function(){return{activeTable:"reserved_usernames",tableData:[{name:"Jim Edwards",email:"jimedwards@yahoo.com",avatar:"avatar"},{name:"Abdulateef Jakande",email:"adbuafas@gmail.com",avatar:"avatar"},{name:"Simisola  Abolarinwa",email:"simsim@hotmail.com",avatar:"avatar"}]}},components:{WebsiteTrafficChart:r(362).default},methods:{setActiveTable:function(t){this.activeTable=t}}},l=r(23),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"lg:flex gap-x-10 space-y-10 lg:space-y-0"},[e("div",{staticClass:"lg:w-6/12 rounded-2xl bg-white p-6 shadow-md border space-y-6"},[e("div",{staticClass:"flex w-full justify-between md:justify-start md:items-start items-center md:flex-col flex-row md:space-y-6"},[e("h1",{staticClass:"font-medium text-lg dark:text-white"},[t._v("Most Recent")]),t._v(" "),e("div",[t._m(0),t._v(" "),e("div",{staticClass:"hidden sm:block"},[e("div",{staticClass:"border-b border-gray-200"},[e("nav",{staticClass:"-mb-px flex gap-6",attrs:{"aria-label":"Tabs"}},[e("button",{staticClass:"shrink-0 border-b-2 px-1 pb-4 text-sm text-gray-400",class:["reserved_usernames"===t.activeTable?"border-sky-500 border-b-2 font-bold text-gray-900 dark:text-white":"border-transparent"],attrs:{"aria-current":"page"},on:{click:function(e){return t.setActiveTable("reserved_usernames")}}},[t._v("\n                Reserved Username\n              ")]),t._v(" "),e("button",{staticClass:"shrink-0 border-b-2 px-1 pb-4 text-sm text-gray-400",class:["reported_users"===t.activeTable?"border-sky-500 font-bold text-gray-900 dark:text-white":"border-transparent"],on:{click:function(e){return t.setActiveTable("reported_users")}}},[t._v("\n                Reported users\n              ")]),t._v(" "),e("button",{staticClass:"shrink-0 border-b-2 px-1 pb-4 text-sm text-gray-400",class:["reported_post"===t.activeTable?"border-sky-500 font-bold text-gray-900 dark:text-white":"border-transparent"],on:{click:function(e){return t.setActiveTable("reported_post")}}},[t._v("\n                Reported post\n              ")]),t._v(" "),e("button",{staticClass:"shrink-0 border-b-2 px-1 pb-4 text-sm text-gray-400",class:["reported_comment"===t.activeTable?"border-sky-500 font-bold text-gray-900 dark:text-white":"border-transparent"],on:{click:function(e){return t.setActiveTable("reported_comment")}}},[t._v("\n                Reported comment\n              ")])])])])])]),t._v(" "),e("div",{staticClass:"overflow-x-auto"},[e("table",{staticClass:"min-w-full divide-y-2 divide-gray-200 bg-white text-sm"},[e("tbody",{staticClass:"divide-y divide-gray-200"},t._l(t.tableData,(function(n,o){return e("tr",{key:o},[e("td",{staticClass:"whitespace-nowrap px-4 py-6 font-medium text-gray-900 bg-white"},[e("img",{attrs:{src:r(153)("./".concat(n.avatar,".svg")),alt:""}})]),t._v(" "),e("td",{staticClass:"whitespace-nowrap px-4 py-6 text-gray-700 dark:text-white"},[t._v("\n              "+t._s(n.name)+"\n            ")]),t._v(" "),e("td",{staticClass:"whitespace-nowrap px-4 py-6 text-gray-700 dark:text-white"},[t._v("\n              "+t._s(n.email)+"\n            ")]),t._v(" "),t._m(1,!0)])})),0)])])]),t._v(" "),e("div",{staticClass:"lg:w-6/12 rounded-2xl bg-white p-3 md:p-6 shadow-md border"},[t._m(2),t._v(" "),e("div",[e("WebsiteTrafficChart")],1)])])}),n,!1,null,null,null);e.default=component.exports}}]);