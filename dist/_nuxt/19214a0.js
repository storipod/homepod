(window.webpackJsonp=window.webpackJsonp||[]).push([[27,6],{448:function(t,e,o){var content=o(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("62efd89c",content,!0,{sourceMap:!1})},449:function(t,e,o){t.exports=o.p+"img/mobileLogo.e0c7e51.png"},450:function(t,e,o){"use strict";o(448)},451:function(t,e,o){var n=o(35)((function(i){return i[1]}));n.push([t.i,".nuxt-link-exact-active[data-v-1acae932]{background-color:#000;color:#fff}",""]),n.locals={},t.exports=n},452:function(t,e,o){"use strict";o.r(e);o(27),o(133);var n=[function(){var t=this._self._c;return t("div",{staticClass:"xl:w-2/12"},[t("h6",{staticClass:"font-medium text-sm md:text-lg"},[this._v("\n          Welcome James! 😊\n        ")])])},function(){var t=this._self._c;return t("div",{staticClass:"flex justify-between items-center gap-x-4"},[t("div",[t("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:o(251),alt:""}})]),this._v(" "),t("div",[t("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:o(255),alt:""}})])])},function(){var t=this._self._c;return t("div",{staticClass:"md:w-2/12"},[t("h6",{staticClass:"font-medium"},[this._v("Welcome James! 😊")])])},function(){var t=this._self._c;return t("div",[t("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:o(251),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("button",{staticClass:"bg-[#0cb0bd] flex items-center gap-x-3 w-full rounded-md justify-center py-2.5"},[e("img",{staticClass:"h-10 w-10",attrs:{src:o(167),alt:""}}),t._v(" "),e("span",{staticClass:"font-medium text-gray-900 text-sm"},[t._v("James Nelson")])])])}],r=o(0),l=Object(r.ref)(""),c=o(168),d={search:l,setSearch:function(data){l.value=data}},m=d.setSearch,f={name:"DashboardHeader",components:{Breadcrumb:c.default},data:function(){return{isDarkMode:!1,form:{search:""},showSidebar:!1,sidebarItems:[{header:"",children:[{urlPath:"/dashboard",title:"Dashboard",icon:"user"}]},{header:"MANAGE",children:[{urlPath:"/dashboard/users",title:"Users",icon:"user"},{urlPath:"/dashboard/stories",title:"Stories",icon:"stories"},{urlPath:"/dashboard/notify",title:"Notify",icon:"bell"},{urlPath:"/dashboard/ad-service",title:"Ad Service",icon:"ad"}]},{header:"SYSTEM",children:[{urlPath:"/dashboard/admin",title:"Admin",icon:"admin"},{urlPath:"/dashboard/config",title:"Configuration",icon:"config"}]}]}},methods:{toggleDarkMode:function(){this.isDarkMode=!this.isDarkMode,this.isDarkMode?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},toggleSidebar:function(){this.showSidebar=!this.showSidebar}},mounted:function(){this.isDarkMode="dark"===localStorage.getItem("theme"),this.isDarkMode&&document.documentElement.classList.add("dark")},watch:{"form.search":function(t){m(t),this.$emit("search",t)}}},v=(o(450),o(16)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("main",[e("header",{staticClass:"space-y-3 bg-white px-6 py-3"},[e("section",{staticClass:"md:flex space-y-6 md:space-y-0 items-center border-b hidden"},[t._m(0),t._v(" "),e("div",{staticClass:"flex w-full flex-grow justify-end"},[e("div",{staticClass:"flex items-center gap-x-10 pb-3"},[e("div",{staticClass:"relative w-full"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.search,expression:"form.search"}],staticClass:"w-full rounded-md bg-gray-100 px-3 py-2.5 pl-32 text-sm outline-none",attrs:{type:"text",placeholder:"Search keyword"},domProps:{value:t.form.search},on:{input:function(e){e.target.composing||t.$set(t.form,"search",e.target.value)}}}),t._v(" "),e("img",{staticClass:"absolute left-2 top-2",attrs:{src:o(253),alt:""}})]),t._v(" "),t._m(1)])])]),t._v(" "),e("section",{staticClass:"flex items-center justify-between border-b pb-3 md:hidden"},[t._m(2),t._v(" "),e("div",{staticClass:"flex justify-between items-center gap-x-4"},[t._m(3),t._v(" "),e("div",[e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:o(256),alt:""},on:{click:t.toggleSidebar}})])])]),t._v(" "),e("div",{staticClass:"text-white flex justify-between items-center"},[e("Breadcrumb"),t._v(" "),t._t("action")],2)]),t._v(" "),e("div",{staticClass:"w-64 bg-white shadow-md",class:["fixed inset-y-0 left-0 z-30 transition duration-300 ease-in-out",t.showSidebar?"translate-x-0":"-translate-x-full"]},[e("nav",[e("main",{staticClass:"w-full p-6 relative flex flex-col h-screen"},[e("div",{staticClass:"flex-grow relative"},[t.isDarkMode?t._e():e("img",{attrs:{src:o(254),alt:""}}),t._v(" "),t.isDarkMode?e("img",{staticClass:"px-3",attrs:{src:o(449),alt:""}}):t._e(),t._v(" "),t._l(t.sidebarItems,(function(n,r){var header=n.header,l=n.children;return e("div",{key:r},[e("h6",{staticClass:"py-3 pb-3 text-[#B3BBCA]",class:[header?"border-b-[0.2px] border-gray-300":""]},[t._v("\n              "+t._s(header)+"\n            ")]),t._v(" "),e("div",{staticClass:"w-full space-y-1 rounded"},t._l(l,(function(n){return e("nuxt-link",{key:n.title,staticClass:"flex w-full no-underline items-center gap-x-3 text-gray-500 rounded-md px-3 py-2.5 leading-loose",attrs:{to:n.urlPath},nativeOn:{click:function(e){return t.toggleSidebar.apply(null,arguments)}}},[e("img",{attrs:{src:o(252)("./".concat(n.icon,".svg")),alt:""}}),t._v("\n                "+t._s(n.title)+"\n              ")])})),1)])}))],2),t._v(" "),t._m(4)])])])])}),n,!1,null,"1acae932",null);e.default=component.exports},453:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNCIgeT0iNCIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMjQiIGZpbGw9IiNEMUZBREYiLz4KPHJlY3QgeD0iNCIgeT0iNCIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMjQiIHN0cm9rZT0iI0VDRkRGMyIgc3Ryb2tlLXdpZHRoPSI4Ii8+CjxwYXRoIGQ9Ik0zOCAyNy4wNzk5VjI3Ljk5OTlDMzcuOTk4OCAzMC4xNTYzIDM3LjMwMDUgMzIuMjU0NSAzNi4wMDkzIDMzLjk4MTdDMzQuNzE4MiAzNS43MDg4IDMyLjkwMzMgMzYuOTcyMyAzMC44MzU0IDM3LjU4MzhDMjguNzY3NCAzOC4xOTUyIDI2LjU1NzMgMzguMTIxOCAyNC41MzQ1IDM3LjM3NDRDMjIuNTExNyAzNi42MjcxIDIwLjc4NDcgMzUuMjQ2IDE5LjYxMSAzMy40MzY5QzE4LjQzNzMgMzEuNjI3OSAxNy44Nzk4IDI5LjQ4NzkgMTguMDIxNyAyNy4zMzYyQzE4LjE2MzYgMjUuMTg0NCAxOC45OTcyIDIzLjEzNjIgMjAuMzk4MyAyMS40OTY5QzIxLjc5OTQgMTkuODU3NyAyMy42OTI4IDE4LjcxNTIgMjUuNzk2MiAxOC4yNEMyNy44OTk2IDE3Ljc2NDggMzAuMTAwMyAxNy45ODIyIDMyLjA3IDE4Ljg1OTlNMzggMTkuOTk5OUwyOCAzMC4wMDk5TDI1IDI3LjAwOTkiIHN0cm9rZT0iIzAzOTg1NSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="},466:function(t,e,o){t.exports=o.p+"img/warning.f703668.svg"},490:function(t,e,o){var content=o(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("be9e441c",content,!0,{sourceMap:!1})},500:function(t,e,o){"use strict";o(490)},501:function(t,e,o){var n=o(35)((function(i){return i[1]}));n.push([t.i,".mavonEditor[data-v-63caa83e]{height:100%;width:100%;z-index:0}",""]),n.locals={},t.exports=n},524:function(t,e,o){"use strict";o.r(e);var n=o(42),r=(o(44),o(43),o(18),o(89),o(51),o(70),{layout:"dashboard",data:function(){return{value:"",isAgreed:!1,processing:!1,info:"My Default Content",content:"<p>A Vue.js wrapper component for tiptap to use <code>v-model</code>.</p>",showConfirmationModal:!1,showSuccessModal:!1,markdownOption:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0},form:{title:"",content:"hello",recieverGroup:"",isFlashMessage:!1}}},methods:{onBlur:function(){console.log("text blur:")},onClose:function(){console.log("text close:")},onChange:function(){console.log("text change:")},onOpen:function(){console.log("text open:")},onUpdate:function(){console.log("text update:")},resetForm:function(){this.form.title="",this.form.content="",this.form.recieverGroup="",this.form.isFlashMessage=!1},handleUserNotification:function(){this.$bvModal.show("notificationConfirmationModal")},handleProceedNotifications:function(){this.showConfirmationModal=!1,this.showSuccessModal=!0},sendNotification:function(){var t=this;this.processing=!0,setTimeout((function(){t.processing=!1,t.$bvModal.hide("notificationConfirmationModal"),t.$bvModal.show("notificationSuccessModal")}),2e3)}},computed:{isFormEmpty:function(){return!!(this.form.title&&this.form.content&&this.form.recieverGroup)},userType:function(){return"all"===this.form.recieverGroup?"ALL USERS":"SELECTED USERS"}}}),l=(o(500),o(16)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("main",[e("DashboardHeader"),t._v(" "),e("div",{staticClass:"mx-6 mt-6"},[e("section",{staticClass:"bg-white p-6 lg:p-10 space-y-6"},[t._m(0),t._v(" "),e("form",{staticClass:"space-y-10",on:{submit:function(e){return e.preventDefault(),t.handleUserNotification.apply(null,arguments)}}},[e("div",{staticClass:"w-full space-y-1"},[e("label",{staticClass:"text-sm font-medium"},[t._v("Title")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3",attrs:{placeholder:"Enter notification title",type:"text"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"w-full space-y-1"},[e("label",{staticClass:"text-sm font-medium"},[t._v("Send to")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.recieverGroup,expression:"form.recieverGroup"}],staticClass:"bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"recieverGroup",e.target.multiple?o:o[0])}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("select an option")]),t._v(" "),e("option",{attrs:{value:"all"}},[t._v("All users")]),t._v(" "),e("option",{attrs:{value:"selected"}},[t._v("Selected users")])])]),t._v(" "),e("div",{staticClass:"w-full space-y-1"},[e("label",{staticClass:"text-sm font-medium"},[t._v("Content")]),t._v(" "),e("div",{staticClass:"mavonEditor z-0"},[e("no-ssr",[e("mavon-editor",{attrs:{language:"en",toolbars:t.markdownOption},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)],1)]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"flex justify-end items-end gap-x-3"},[e("button",{staticClass:"text-[#0BA9B9] border-[#0BA9B9] border px-10 py-2 rounded-lg",on:{click:t.resetForm}},[t._v("\n            Cancel\n          ")]),t._v(" "),e("button",{staticClass:"bg-[#0BA9B9] disabled:cursor-not-allowed disabled:opacity-25 text-white px-10 py-2 rounded-lg",attrs:{disabled:!t.isFormEmpty,type:"submit"}},[t._v("\n            Send\n          ")])])])]),t._v(" "),e("div",[e("b-modal",{staticClass:"z-50",attrs:{id:"notificationConfirmationModal",title:"BootstrapVue","hide-header":"","hide-footer":""}},[e("section",{staticClass:"bg-white p-6 space-y-6 max-w-screen-lg rounded-md"},[e("div",[e("img",{attrs:{src:o(466),alt:"warning"}})]),t._v(" "),e("div",{staticClass:"space-y-1"},[e("h1",{staticClass:"font-semibold text-gray-950 text-xl"},[t._v("Confirmation")]),t._v(" "),e("p",{staticClass:"font-medium text-gray-500"},[t._v("\n              You are about to send a message to\n              "),e("span",{staticClass:"font-bold text-gray-900"},[t._v(t._s(t.userType))])])]),t._v(" "),e("div",[e("label",{staticClass:"font-medium text-gray-500 flex items-center gap-x-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.isAgreed,expression:"isAgreed"}],attrs:{type:"checkbox"},domProps:Object(n.a)({checked:t.isAgreed},"checked",Array.isArray(t.isAgreed)?t._i(t.isAgreed,null)>-1:t.isAgreed),on:{change:function(e){var o=t.isAgreed,n=e.target,r=!!n.checked;if(Array.isArray(o)){var l=t._i(o,null);n.checked?l<0&&(t.isAgreed=o.concat([null])):l>-1&&(t.isAgreed=o.slice(0,l).concat(o.slice(l+1)))}else t.isAgreed=r}}}),t._v("\n              This message adheres to Shuttler’s content policy")])]),t._v(" "),e("div",{staticClass:"flex justify-end items-end gap-x-3 w-full pt-6"},[e("button",{staticClass:"text-black font-medium text-sm w-full border-gray-400 border px-3 py-3 rounded-lg",on:{click:function(e){return t.$bvModal.hide("notificationConfirmationModal")}}},[t._v("\n              Cancel\n            ")]),t._v(" "),e("button",{staticClass:"bg-[#0BA9B9] w-full text-sm disabled:cursor-not-allowed disabled:opacity-25 text-white font-medium px-6 py-3 rounded-lg",attrs:{disabled:!t.isAgreed||t.processing},on:{click:t.sendNotification}},[t._v("\n              Continue\n            ")])])])]),t._v(" "),e("b-modal",{staticClass:"z-50",attrs:{id:"notificationSuccessModal","hide-header":"","hide-footer":""}},[e("section",{staticClass:"bg-white p-6 space-y-4 max-w-screen-lg rounded-md"},[e("div",[e("img",{attrs:{src:o(453),alt:"warning"}})]),t._v(" "),e("div",[e("h1",{staticClass:"font-semibold text-xl"},[t._v("Success")])]),t._v(" "),e("div",[e("p",{staticClass:"font-medium text-gray-500"},[t._v("Message has been sent.")])]),t._v(" "),e("div",{staticClass:"flex justify-end items-end gap-x-3 w-full pt-6"},[e("button",{staticClass:"text-black font-medium text-sm w-full border-gray-400 border px-3 py-3 rounded-lg",on:{click:function(e){return t.$bvModal.hide("notificationSuccessModal")}}},[t._v("\n              Create another\n            ")]),t._v(" "),e("button",{staticClass:"bg-[#0BA9B9] w-full text-sm text-white font-medium px-6 py-3 rounded-lg",on:{click:function(e){return t.$router.push("/dashboard/users/notify")}}},[t._v("\n              "+t._s(t.processing?"Loading..":"Continue")+"\n            ")])])])])],1)])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"lg:flex space-y-3 lg:space-y-0 justify-between items-center"},[e("h1",{staticClass:"font-semibold text-gray-800 text-lg"},[t._v("New message")]),t._v(" "),e("p",{staticClass:"font-medium text-gray-500 text-sm lg:text-base"},[t._v("\n          15th September 2022, 10:14 AM\n        ")])])},function(){var t=this._self._c;return t("div",[t("label",{staticClass:"flex items-center gap-x-4 font-medium text-gray-500 cursor-pointer"},[t("input",{attrs:{type:"checkbox"}}),this._v("\n            Send as flash message")])])}],!1,null,"63caa83e",null);e.default=component.exports;installComponents(component,{DashboardHeader:o(452).default})}}]);