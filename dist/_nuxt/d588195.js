(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{548:function(t,e,l){"use strict";l.r(e);var r={layout:"dashboard",data:function(){var t,e,l,r,o,n,d,c;return{dashboardStats:[{title:"Total Active Users",count:null!==(t=null===(e=this.stats)||void 0===e||null===(e=e.activeUsers)||void 0===e?void 0:e.total)&&void 0!==t?t:0,desc:"Compared from Last Month",rate:"-7.3%",progress:!1,bg:"bg-[#FDF5F5]",chart:"active-users-spiral"},{title:"Sign ups",count:null!==(l=null===(r=this.stats)||void 0===r||null===(r=r.userSignups)||void 0===r?void 0:r.total)&&void 0!==l?l:0,desc:"Compared from Last Month",rate:"+2.4%",progress:!0,bg:"bg-[#ECFCFE]",subTitle:"",chart:"signup-spiral"},{title:"Stories",count:null!==(o=null===(n=this.stats)||void 0===n||null===(n=n.allStories)||void 0===n?void 0:n.total)&&void 0!==o?o:0,desc:"Compared from Last Month",rate:"-9.7%",progress:!1,bg:"bg-[#FFF8E3]",subTitle:"",chart:"stori-spiral"},{title:"Engagement",count:null!==(d=null===(c=this.stats)||void 0===c||null===(c=c.userEngagement)||void 0===c?void 0:c.count)&&void 0!==d?d:0,desc:"Compared from Last Month",rate:"+12%",progress:!0,bg:"bg-[#f9efff]",subTitle:"",chart:"engagement-spiral"}]}},props:{stats:{type:Object,required:!1},loading:{type:Boolean,required:!0,default:!1}}},o=l(18),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"},t._l(t.dashboardStats,(function(r,o){return e("div",{key:o,staticClass:"flex flex-col items-center justify-center gap-y-3 border border-white rounded-2xl p-4 lg:p-7",class:r.bg},[e("div",{staticClass:"flex items-center gap-x-2"},[e("h1",{staticClass:"font-bold text-lg"},[t._v(t._s(r.title))]),t._v(" "),r.subTitle?e("span",{staticClass:"text-gray-500"},[t._v("("+t._s(r.subTitle)+")")]):t._e()]),t._v(" "),e("div",{staticClass:"flex items-center flex-col gap-x-4 lg:gap-x-6 mt-3"},[e("h1",{staticClass:"text-2xl lg:text-3xl font-bold"},[t._v(t._s(r.count))]),t._v(" "),e("div",{staticClass:"flex items-center gap-x-2"},[r.progress?e("img",{attrs:{src:l(286),alt:""}}):t._e(),t._v(" "),r.progress?t._e():e("img",{attrs:{src:l(285),alt:""}}),t._v(" "),e("p",{staticClass:"pt-3",class:[r.progress?"text-green-600":"text-red-600"]},[t._v("\n          "+t._s(r.rate)+"\n        ")])])]),t._v(" "),e("p",{staticClass:"text-[#6E717C] text-sm"},[t._v(t._s(r.desc))])])})),0)}),[],!1,null,null,null);e.default=component.exports}}]);