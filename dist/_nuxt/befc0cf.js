(window.webpackJsonp=window.webpackJsonp||[]).push([[14,5,11],{501:function(t,e,r){"use strict";r.r(e);var n={props:{src:String},data:function(){return{isFullScreen:!1}},methods:{toggleImage:function(){this.isFullScreen=!this.isFullScreen}}},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("img",{staticClass:"cursor-pointer rounded-full h-10 w-10",attrs:{src:t.src,alt:""},on:{click:t.toggleImage}}),t._v(" "),t.isFullScreen?e("div",{staticClass:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",on:{click:function(e){return e.target!==e.currentTarget?null:t.toggleImage.apply(null,arguments)}}},[e("img",{staticClass:"max-w-full max-h-full transition-transform duration-500",class:{"scale-100":t.isFullScreen,"scale-0":!t.isFullScreen},attrs:{alt:"",src:t.src}})]):t._e()])}),[],!1,null,"28662c52",null);e.default=component.exports},504:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjAzNzcgNi4zNDMyNkwxMy42MjY4IDcuNzYwNzhMMTYuODk3IDExLjAxNTdMMy4yOTE5OSAxMS4wMjk0TDMuMjk0IDEzLjAyOTRMMTYuODYxOCAxMy4wMTU4TDEzLjY0NjYgMTYuMjQ2TDE1LjA2NDEgMTcuNjU2OUwyMC43MDc4IDExLjk4NjlMMTUuMDM3NyA2LjM0MzI2WiIgZmlsbD0iIzQxNDE0MSIvPgo8L3N2Zz4K"},508:function(t,e,r){var content=r(527);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("3f8e4bed",content,!0,{sourceMap:!1})},526:function(t,e,r){"use strict";r(508)},527:function(t,e,r){var n=r(43)((function(i){return i[1]}));n.push([t.i,'div.chart-wrapper[data-v-cf33d0ca]{align-items:center;display:flex;height:"100%";justify-content:flex-start;width:"100%"}',""]),n.locals={},t.exports=n},538:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{series:[80,20],chartOptions:{labels:["Google search ","Others"],dataLabels:{enabled:!0},legend:{show:!0,showForSingleSeries:!1,showForNullSeries:!0,showForZeroSeries:!0,position:"bottom",horizontalAlign:"center",fontSize:"16px",fontFamily:"Helvetica, Arial",fontWeight:500,itemMargin:{horizontal:15,vertical:0}},fill:{colors:["#BDBDBD","#000000"]},colors:["#BDBDBD","#000000"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"center",show:!1}}}]}}}},o=(r(526),r(18)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"chart-wrapper w-full overflow-x-auto"},[e("client-only",[e("apexchart",{staticClass:"md:w-full md:hidden overflow-x-auto",attrs:{width:"500",height:"242",type:"pie",options:t.chartOptions,series:t.series}}),t._v(" "),e("apexchart",{staticClass:"md:w-full hidden md:block overflow-x-auto",attrs:{width:"500",type:"pie",options:t.chartOptions,series:t.series}})],1)],1)])}),[],!1,null,"cf33d0ca",null);e.default=component.exports},543:function(t,e,r){"use strict";var n=r(1),o=r(3),c=r(30),l=r(38),d=r(68),f=r(299),v=r(15),m=r(4),x=r(298),h=r(184),y=r(544),_=r(545),w=r(114),C=r(546),M=[],k=o(M.sort),T=o(M.push),A=m((function(){M.sort(void 0)})),j=m((function(){M.sort(null)})),D=h("sort"),I=!m((function(){if(w)return w<70;if(!(y&&y>3)){if(_)return!0;if(C)return C<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)M.push({k:t+r,v:e})}for(M.sort((function(a,b){return b.v-a.v})),r=0;r<M.length;r++)t=M[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:A||!j||!D||!I},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(I)return void 0===t?k(e):k(e,t);var r,n,o=[],m=d(e);for(n=0;n<m;n++)n in e&&T(o,e[n]);for(x(o,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:v(e)>v(r)?1:-1}}(t)),r=d(o),n=0;n<r;)e[n]=o[n++];for(;n<m;)f(e,n++);return e}})},544:function(t,e,r){"use strict";var n=r(96).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},545:function(t,e,r){"use strict";var n=r(96);t.exports=/MSIE|Trident/.test(n)},546:function(t,e,r){"use strict";var n=r(96).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},559:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(77),r(543),r(54),r(58),r(501)),c={layout:"dashboard",data:function(){return{activeTable:"reserved_usernames",loadingUsers:!1,usersList:[],metadata:{}}},components:{WebsiteTrafficChart:r(538).default,ImageZoom:o.default},methods:{setActiveTable:function(t){this.activeTable=t},loadUsers:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loadingUsers=!0,e.next=4,t.$userApiService.getAllUsers();case 4:r=e.sent,n=r.result.sort((function(a,b){return b.createdAt-a.createdAt})),o=n.slice(0,5),t.usersList=o,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t.$toastr.e(e.t0.response.data.message);case 13:return e.prev=13,t.loadingUsers=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))()},generateInitials:function(t,e){return"".concat(t.charAt(0).toUpperCase()).concat(e.charAt(0).toUpperCase())}},mounted:function(){this.loadUsers()}},l=r(18),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"lg:flex gap-x-10 space-y-10 lg:space-y-0"},[e("div",{staticClass:"lg:w-6/12 rounded-2xl bg-white p-6 shadow-md border space-y-6"},[e("div",{staticClass:"space-y-2"},[e("h1",{staticClass:"font-semibold text-base md:text-lg"},[t._v("\n        Most Recent\n      ")]),t._v(" "),e("div",[t._m(0),t._v(" "),e("div",{staticClass:"hidden sm:block"},[e("div",{staticClass:"border-b border-gray-200"},[e("nav",{staticClass:"-mb-px flex gap-6 overflow-x-auto",attrs:{"aria-label":"Tabs"}},[e("button",{staticClass:"shrink-0 border-b-2 px-1 pb-2 text-sm text-gray-400",class:["reserved_usernames"===t.activeTable?"border-sky-500 border-b-2 font-bold text-gray-900":"border-transparent"],attrs:{"aria-current":"page"},on:{click:function(e){return t.setActiveTable("reserved_usernames")}}},[t._v("\n                Reserved Username\n              ")]),t._v(" "),e("button",{staticClass:"shrink-0 border-b-2 px-1 pb-2 text-sm text-gray-400",class:["reported_users"===t.activeTable?"border-sky-500 font-bold text-gray-900":"border-transparent"],on:{click:function(e){return t.setActiveTable("reported_users")}}},[t._v("\n                Reported users\n              ")]),t._v(" "),e("button",{staticClass:"shrink-0 border-b-2 px-1 pb-2 text-sm text-gray-400",class:["reported_post"===t.activeTable?"border-sky-500 font-bold text-gray-900":"border-transparent"],on:{click:function(e){return t.setActiveTable("reported_post")}}},[t._v("\n                Reported post\n              ")]),t._v(" "),e("button",{staticClass:"shrink-0 border-b-2 px-1 pb-2 text-sm text-gray-400",class:["reported_comment"===t.activeTable?"border-sky-500 font-bold text-gray-900":"border-transparent"],on:{click:function(e){return t.setActiveTable("reported_comment")}}},[t._v("\n                Reported comment\n              ")])])])])])]),t._v(" "),e("div",{staticClass:"overflow-x-auto"},[e("table",{staticClass:"min-w-full divide-y-2 divide-gray-200 bg-white text-sm"},[e("tbody",{staticClass:"divide-y divide-gray-200"},t._l(t.usersList,(function(n,o){return e("tr",{key:o},[e("td",{staticClass:"whitespace-nowrap px-4 py-4 md:py-3 font-medium text-gray-900 bg-white"},[n.profilePicture?e("nuxt-link",{attrs:{to:"/dashboard/users/".concat(n.id)}},[e("image-zoom",{staticClass:"h-20 w-20 cursor-pointer",attrs:{src:n.profilePicture}})],1):e("p",{staticClass:"rounded-full h-10 w-10 font-semibold bg-gray-300 text-gray-800 flex justify-center items-center"},[t._v("\n                "+t._s(t.generateInitials(n.fname,n.lname)))])],1),t._v(" "),e("td",{staticClass:"whitespace-nowrap text-base md:text-sm px-4 py-4 md:py-3 text-gray-700"},[e("nuxt-link",{staticClass:"text-blue-700 no-underline hover:underline",attrs:{to:"/dashboard/users/".concat(n.id)}},[t._v(t._s(n.fname))])],1),t._v(" "),e("td",{staticClass:"whitespace-nowrap text-base md:text-sm px-4 py-4 md:py-3 text-gray-700"},[e("nuxt-link",{staticClass:"text-blue-700 no-underline hover:underline",attrs:{to:"/dashboard/users/".concat(n.id)}},[t._v(t._s(n.email))])],1),t._v(" "),e("td",{staticClass:"whitespace-nowrap text-base md:text-sm px-4 py-4 md:py-3 text-gray-700"},[e("nuxt-link",{staticClass:"text-blue-700 no-underline hover:underline",attrs:{to:"/dashboard/users/".concat(n.id)}},[e("img",{attrs:{src:r(504),alt:""}})])],1)])})),0)])])]),t._v(" "),e("div",{staticClass:"lg:w-6/12 w-full rounded-2xl bg-white p-3 md:p-6 shadow-md border"},[t._m(1),t._v(" "),e("div",{staticClass:"flex justify-center items-center w-full pb-3"},[e("WebsiteTrafficChart")],1)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"sm:hidden"},[e("label",{staticClass:"sr-only",attrs:{for:"Tab"}},[t._v("Tab")]),t._v(" "),e("select",{staticClass:"w-full md:w-full text-xs rounded-md py-2.5 md:py-0 px-3 outline-none md:text-sm md:px-0 bg-gray-100 border-gray-200",attrs:{id:"Tab"}},[e("option",{attrs:{select:""}},[t._v("Reserved Username")]),t._v(" "),e("option",[t._v("Reported users")]),t._v(" "),e("option",[t._v("Reported post")]),t._v(" "),e("option",[t._v("Reported comment")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"md:flex space-y-6 md:space-y-0 items-center justify-between px-3 md:px-7 py-4"},[e("div",{},[e("h1",{staticClass:"font-medium text-lg text-gray-900 py-0 my-0"},[t._v("\n          Website Traffic\n        ")]),t._v(" "),e("p",{staticClass:"text-gray-400 py-0 my-0 text-sm md:text-base"},[t._v("\n          Comparison of source of website traffic\n        ")])]),t._v(" "),e("select",{staticClass:"text-sm font-medium bg-gray-100 rounded-md px-2.5 py-2 outline-none"},[e("option",[t._v("This year")])])])}],!1,null,null,null);e.default=component.exports}}]);