(window.webpackJsonp=window.webpackJsonp||[]).push([[25,3,5,6,8,10,11,12,19,20],{448:function(t,e,r){var content=r(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("71ecd720",content,!0,{sourceMap:!1})},449:function(t,e,r){t.exports=r.p+"img/mobileLogo.e0c7e51.png"},450:function(t,e,r){"use strict";r(448)},451:function(t,e,r){var o=r(35)((function(i){return i[1]}));o.push([t.i,".nuxt-link-exact-active[data-v-57076ed9]{background-color:#000;color:#fff}",""]),o.locals={},t.exports=o},452:function(t,e,r){"use strict";r.r(e);r(27),r(133);var o=[function(){var t=this._self._c;return t("div",{staticClass:"xl:w-2/12"},[t("h6",{staticClass:"font-medium text-sm md:text-lg"},[this._v("\n          Welcome James! 😊\n        ")])])},function(){var t=this._self._c;return t("div",[t("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(255),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"md:w-2/12"},[t("h6",{staticClass:"font-medium dark:text-white"},[this._v("Welcome James! 😊")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("button",{staticClass:"bg-[#0cb0bd] flex items-center gap-x-3 w-full rounded-md justify-center py-2.5"},[e("img",{staticClass:"h-10 w-10",attrs:{src:r(167),alt:""}}),t._v(" "),e("span",{staticClass:"font-medium text-gray-900 text-sm"},[t._v("James Nelson")])])])}],n=r(0),l=Object(n.ref)(""),c=r(168),d={search:l,setSearch:function(data){l.value=data}},m=d.setSearch,v={name:"DashboardHeader",components:{Breadcrumb:c.default},data:function(){return{isDarkMode:!1,form:{search:""},showSidebar:!1,sidebarItems:[{header:"",children:[{urlPath:"/dashboard",title:"Dashboard",icon:"user"}]},{header:"MANAGE",children:[{urlPath:"/dashboard/users",title:"Users",icon:"user"},{urlPath:"/dashboard/stories",title:"Stories",icon:"stories"},{urlPath:"/dashboard/ad-service",title:"Ad Service",icon:"ad"}]},{header:"SYSTEM",children:[{urlPath:"/dashboard/admin",title:"Admin",icon:"admin"},{urlPath:"/dashboard/config",title:"Configuration",icon:"config"}]}]}},methods:{toggleDarkMode:function(){this.isDarkMode=!this.isDarkMode,this.isDarkMode?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},toggleSidebar:function(){this.showSidebar=!this.showSidebar}},mounted:function(){this.isDarkMode="dark"===localStorage.getItem("theme"),this.isDarkMode&&document.documentElement.classList.add("dark")},watch:{"form.search":function(t){m(t),this.$emit("search",t)}}},f=(r(450),r(16)),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("main",[e("header",{staticClass:"space-y-3 bg-white px-6 py-3"},[e("section",{staticClass:"md:flex space-y-6 md:space-y-0 items-center border-b hidden"},[t._m(0),t._v(" "),e("div",{staticClass:"flex w-full flex-grow justify-end"},[e("div",{staticClass:"flex items-center gap-x-10 pb-3"},[e("div",{staticClass:"relative w-full"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.search,expression:"form.search"}],staticClass:"w-full rounded-md bg-gray-100 px-3 py-2.5 pl-32 text-sm outline-none",attrs:{type:"text",placeholder:"Search keyword"},domProps:{value:t.form.search},on:{input:function(e){e.target.composing||t.$set(t.form,"search",e.target.value)}}}),t._v(" "),e("img",{staticClass:"absolute left-2 top-2",attrs:{src:r(253),alt:""}})]),t._v(" "),e("div",{staticClass:"flex justify-between items-center gap-x-4"},[e("div",[e("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(251),alt:""},on:{click:t.toggleDarkMode}})]),t._v(" "),t._m(1)])])])]),t._v(" "),e("section",{staticClass:"flex items-center justify-between border-b pb-3 md:hidden"},[t._m(2),t._v(" "),e("div",{staticClass:"flex justify-between items-center gap-x-4"},[e("div",[t.isDarkMode?t._e():e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(251),alt:""},on:{click:t.toggleDarkMode}}),t._v(" "),t.isDarkMode?e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(257),alt:""},on:{click:t.toggleDarkMode}}):t._e()]),t._v(" "),e("div",[t.isDarkMode?e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(258),alt:""},on:{click:t.toggleSidebar}}):t._e(),t._v(" "),t.isDarkMode?t._e():e("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(256),alt:""},on:{click:t.toggleSidebar}})])])]),t._v(" "),e("div",{staticClass:"text-white flex justify-between items-center"},[e("Breadcrumb"),t._v(" "),t._t("action")],2)]),t._v(" "),e("div",{staticClass:"w-64 bg-white shadow-md",class:["fixed inset-y-0 left-0 z-30 transition duration-300 ease-in-out",t.showSidebar?"translate-x-0":"-translate-x-full"]},[e("nav",[e("main",{staticClass:"w-full p-6 relative flex flex-col h-screen"},[e("div",{staticClass:"flex-grow relative"},[t.isDarkMode?t._e():e("img",{attrs:{src:r(254),alt:""}}),t._v(" "),t.isDarkMode?e("img",{staticClass:"px-3",attrs:{src:r(449),alt:""}}):t._e(),t._v(" "),t._l(t.sidebarItems,(function(o,n){var header=o.header,l=o.children;return e("div",{key:n},[e("h6",{staticClass:"py-3 pb-3 text-[#B3BBCA]",class:[header?"border-b-[0.2px] border-gray-300":""]},[t._v("\n              "+t._s(header)+"\n            ")]),t._v(" "),e("div",{staticClass:"w-full space-y-1 rounded"},t._l(l,(function(o){return e("nuxt-link",{key:o.title,staticClass:"flex w-full no-underline items-center gap-x-3 text-gray-500 rounded-md px-3 py-2.5 leading-loose dark:text-white",attrs:{to:o.urlPath},nativeOn:{click:function(e){return t.toggleSidebar.apply(null,arguments)}}},[e("img",{attrs:{src:r(252)("./".concat(o.icon,".svg")),alt:""}}),t._v("\n                "+t._s(o.title)+"\n              ")])})),1)])}))],2),t._v(" "),t._m(3)])])])])}),o,!1,null,"57076ed9",null);e.default=component.exports},453:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNCIgeT0iNCIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMjQiIGZpbGw9IiNEMUZBREYiLz4KPHJlY3QgeD0iNCIgeT0iNCIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMjQiIHN0cm9rZT0iI0VDRkRGMyIgc3Ryb2tlLXdpZHRoPSI4Ii8+CjxwYXRoIGQ9Ik0zOCAyNy4wNzk5VjI3Ljk5OTlDMzcuOTk4OCAzMC4xNTYzIDM3LjMwMDUgMzIuMjU0NSAzNi4wMDkzIDMzLjk4MTdDMzQuNzE4MiAzNS43MDg4IDMyLjkwMzMgMzYuOTcyMyAzMC44MzU0IDM3LjU4MzhDMjguNzY3NCAzOC4xOTUyIDI2LjU1NzMgMzguMTIxOCAyNC41MzQ1IDM3LjM3NDRDMjIuNTExNyAzNi42MjcxIDIwLjc4NDcgMzUuMjQ2IDE5LjYxMSAzMy40MzY5QzE4LjQzNzMgMzEuNjI3OSAxNy44Nzk4IDI5LjQ4NzkgMTguMDIxNyAyNy4zMzYyQzE4LjE2MzYgMjUuMTg0NCAxOC45OTcyIDIzLjEzNjIgMjAuMzk4MyAyMS40OTY5QzIxLjc5OTQgMTkuODU3NyAyMy42OTI4IDE4LjcxNTIgMjUuNzk2MiAxOC4yNEMyNy44OTk2IDE3Ljc2NDggMzAuMTAwMyAxNy45ODIyIDMyLjA3IDE4Ljg1OTlNMzggMTkuOTk5OUwyOCAzMC4wMDk5TDI1IDI3LjAwOTkiIHN0cm9rZT0iIzAzOTg1NSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="},455:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjAzNzcgNi4zNDMyNkwxMy42MjY4IDcuNzYwNzhMMTYuODk3IDExLjAxNTdMMy4yOTE5OSAxMS4wMjk0TDMuMjk0IDEzLjAyOTRMMTYuODYxOCAxMy4wMTU4TDEzLjY0NjYgMTYuMjQ2TDE1LjA2NDEgMTcuNjU2OUwyMC43MDc4IDExLjk4NjlMMTUuMDM3NyA2LjM0MzI2WiIgZmlsbD0iIzQxNDE0MSIvPgo8L3N2Zz4K"},457:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNCIgeT0iNCIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMjQiIGZpbGw9IiNGRUU0RTIiLz4KPHJlY3QgeD0iNCIgeT0iNCIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMjQiIHN0cm9rZT0iI0ZFRjNGMiIgc3Ryb2tlLXdpZHRoPSI4Ii8+CjxwYXRoIGQ9Ik0yOCAyNFYyOE0yOCAzMkgyOC4wMU0zOCAyOEMzOCAzMy41MjI4IDMzLjUyMjggMzggMjggMzhDMjIuNDc3MiAzOCAxOCAzMy41MjI4IDE4IDI4QzE4IDIyLjQ3NzIgMjIuNDc3MiAxOCAyOCAxOEMzMy41MjI4IDE4IDM4IDIyLjQ3NzIgMzggMjhaIiBzdHJva2U9IiNEOTJEMjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="},458:function(t,e,r){var content=r(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("3542c96c",content,!0,{sourceMap:!1})},459:function(t,e,r){var content=r(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("3f8e4bed",content,!0,{sourceMap:!1})},463:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDE3IDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zLjU1NjQ1IDQuMjU4MzJDNC40NjgwMyAzLjczMjAyIDQuNzgwMzYgMi41NjYzOSA0LjI1NDA2IDEuNjU0ODFDMy43Mjc3NiAwLjc0MzIzOCAyLjU2MjEzIDAuNDMwOTA5IDEuNjUwNTUgMC45NTcyMDhDMC43Mzg5NzggMS40ODM1MSAwLjQyNjY0OSAyLjY0OTEzIDAuOTUyOTQ4IDMuNTYwNzFDMS40NzkyNSA0LjQ3MjI5IDIuNjQ0ODcgNC43ODQ2MiAzLjU1NjQ1IDQuMjU4MzJaIiBmaWxsPSIjMTAxODI4Ii8+CjxwYXRoIGQ9Ik05LjI3NTIgNC4yNTQ0MUMxMC4xODY4IDMuNzI4MTEgMTAuNDk5MSAyLjU2MjQ4IDkuOTcyODEgMS42NTA5MUM5LjQ0NjUxIDAuNzM5MzMyIDguMjgwODggMC40MjcwMDMgNy4zNjkzIDAuOTUzMzAyQzYuNDU3NzMgMS40Nzk2IDYuMTQ1NCAyLjY0NTIzIDYuNjcxNyAzLjU1NjhDNy4xOTggNC40NjgzOCA4LjM2MzYyIDQuNzgwNzEgOS4yNzUyIDQuMjU0NDFaIiBmaWxsPSIjMTAxODI4Ii8+CjxwYXRoIGQ9Ik0xNS4wMDE4IDQuMjU0NDFDMTUuOTEzMyAzLjcyODExIDE2LjIyNTcgMi41NjI0OCAxNS42OTk0IDEuNjUwOTFDMTUuMTczMSAwLjczOTMzMiAxNC4wMDc0IDAuNDI3MDAzIDEzLjA5NTkgMC45NTMzMDJDMTIuMTg0MyAxLjQ3OTYgMTEuODcyIDIuNjQ1MjMgMTIuMzk4MyAzLjU1NjhDMTIuOTI0NiA0LjQ2ODM4IDE0LjA5MDIgNC43ODA3MSAxNS4wMDE4IDQuMjU0NDFaIiBmaWxsPSIjMTAxODI4Ii8+Cjwvc3ZnPgo="},464:function(t,e,r){t.exports=r.p+"img/reactions.9c35250.svg"},465:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDMyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSI0IiBmaWxsPSJibGFjayIvPgo8Y2lyY2xlIGN4PSIxNiIgY3k9IjQiIHI9IjQiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMTMiLz4KPGNpcmNsZSBjeD0iMjgiIGN5PSI0IiByPSI0IiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjEzIi8+Cjwvc3ZnPgo="},467:function(t,e,r){"use strict";r.r(e);var o={props:{src:String},data:function(){return{isFullScreen:!1}},methods:{toggleImage:function(){this.isFullScreen=!this.isFullScreen}}},n=r(16),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("img",{staticClass:"cursor-pointer",attrs:{src:t.src,alt:""},on:{click:t.toggleImage}}),t._v(" "),t.isFullScreen?e("div",{staticClass:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",on:{click:function(e){return e.target!==e.currentTarget?null:t.toggleImage.apply(null,arguments)}}},[e("img",{staticClass:"max-w-full max-h-full transition-transform duration-500",class:{"scale-100":t.isFullScreen,"scale-0":!t.isFullScreen},attrs:{alt:"",src:t.src}})]):t._e()])}),[],!1,null,"e4752a02",null);e.default=component.exports},468:function(t,e,r){"use strict";r.r(e);r(44),r(43),r(18);var o=[function(){var t=this._self._c;return t("div",{staticClass:"px-4"},[t("img",{staticClass:"h-10 w-10 rounded-full",attrs:{src:r(473),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"flex justify-between items-center px-4"},[t("img",{attrs:{src:r(464),alt:""}}),this._v(" "),t("img",{attrs:{src:r(465),alt:""}})])}],n=(r(70),{data:function(){return{value:"",processingNotification:!1,processingDelete:!1,markdownOption:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!0},form:{category:"",desc:""}}},props:{stories:{type:Array,required:!0}},methods:{notifyUser:function(){this.$bvModal.show("notifyUserModal")},handleNotification:function(){var t=this;this.processingNotification=!0,setTimeout((function(){t.$bvModal.hide("notifyUserModal"),t.$bvModal.show("notifyUserSuccessModal"),t.processingNotification=!1}),3e3)},handleRemoveStori:function(){var t=this;this.processingDelete=!0,setTimeout((function(){t.$bvModal.hide("removeStoriConfirmation"),t.$bvModal.show("removeStoriSuccess"),t.processingDelete=!1}),3e3)},removeUser:function(){this.$bvModal.show("removeStoriConfirmation")}},computed:{isNotificationFormEnabled:function(){return this.form.desc&&this.form.category}}}),l=r(16),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("main",[e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"},t._l(t.stories,(function(o,n){return e("div",{key:n,staticClass:"rounded-lg border border-gray-200 space-y-6"},[e("div",{staticClass:"flex justify-end items-end px-4 pt-4 relative"},[e("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",variant:"link",right:"","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("img",{staticClass:"cursor-pointer",attrs:{src:r(463),alt:""}})]},proxy:!0}],null,!0)},[t._v(" "),e("b-dropdown-item-button",{on:{click:function(e){return t.notifyUser(o)}}},[t._v("\n            Notify User")]),t._v(" "),e("b-dropdown-item-button",{on:{click:function(e){return t.removeUser(o)}}},[t._v("\n            Remove")])],1)],1),t._v(" "),t._m(0,!0),t._v(" "),e("h1",{staticClass:"px-4 text-sm text-gray-700"},[t._v(t._s(o.desc))]),t._v(" "),t._m(1,!0),t._v(" "),e("div",{staticClass:"border-t border-gray-300 flex justify-end items-end"},[e("p",{staticClass:"text-gray-400 text-sm font-medium px-4 pt-3"},[t._v("\n          "+t._s(o.date)+"\n        ")])])])})),0),t._v(" "),e("b-modal",{attrs:{id:"notifyUserModal",size:"lg",centered:"","hide-header":"","hide-footer":""}},[e("section",{staticClass:"bg-white p-6 space-y-6 max-w-screen-lg rounded-md"},[e("div",[e("h1",{staticClass:"text-xl text-gray-900 font-semibold"},[t._v("Notify user")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-500"},[t._v("\n          Use this form to send a user update\n        ")])]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("label",{staticClass:"text-sm text-gray-900 font-medium"},[t._v("Message category")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.category,expression:"form.category"}],staticClass:"bg-gray-50 text-sm rounded-md w-full outline-none py-3 border-gray-300 border pl-3",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"category",e.target.multiple?r:r[0])}}},[e("option",[t._v("Violation of story policies")]),t._v(" "),e("option",[t._v("Sharing Nudes")])])]),t._v(" "),e("div",{staticClass:"w-full space-y-2"},[e("label",{staticClass:"text-sm font-medium"},[t._v("Description")]),t._v(" "),e("div",{staticClass:"mavonEditor z-0"},[e("no-ssr",[e("mavon-editor",{attrs:{language:"en",toolbars:t.markdownOption},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1)],1)]),t._v(" "),e("div",{staticClass:"flex justify-end items-end gap-x-3 w-full pt-6"},[e("button",{staticClass:"bg-[#0BA9B9]text-sm disabled:cursor-not-allowed bg-[#0BA9B9] disabled:opacity-25 w-full text-white font-medium px-6 py-3 rounded-lg",attrs:{disabled:t.processingNotification||!t.isNotificationFormEnabled},on:{click:t.handleNotification}},[t._v("\n          "+t._s(t.processingNotification?"processing...":"Notify user")+"\n        ")])])])]),t._v(" "),e("b-modal",{attrs:{id:"notifyUserSuccessModal","hide-header":"",centered:"","hide-footer":""}},[e("section",{staticClass:"bg-white p-6 space-y-6 max-w-screen-lg rounded-md"},[e("div",[e("img",{staticClass:"h-20 w-20",attrs:{src:r(453),alt:"warning"}})]),t._v(" "),e("div",[e("h1",{staticClass:"font-semibold text-xl"},[t._v("Success")]),t._v(" "),e("p",{staticClass:"text-gray-600"},[t._v("Message has been sent.")])]),t._v(" "),e("div",{staticClass:"flex justify-end items-end gap-x-3 w-full pt-6"},[e("button",{staticClass:"text-[#0BA9B9] text-sm font-medium w-full border-gray-400 border px-3 py-3 rounded-lg",on:{click:function(e){return t.$bvModal.hide("notifyUserSuccessModal")}}},[t._v("\n          Create another\n        ")]),t._v(" "),e("button",{staticClass:"bg-[#0BA9B9] text-sm w-full text-white font-medium px-6 py-3 rounded-lg",on:{click:function(e){return t.$bvModal.hide("notifyUserSuccessModal")}}},[t._v("\n          Continue\n        ")])])])]),t._v(" "),e("b-modal",{attrs:{id:"removeStoriConfirmation",centered:"","hide-header":"","hide-footer":""}},[e("section",{staticClass:"bg-white p-6 space-y-6 max-w-screen-lg rounded-md"},[e("div",[e("img",{staticClass:"h-20 w-20",attrs:{src:r(457),alt:"warning"}})]),t._v(" "),e("div",[e("h1",{staticClass:"font-semibold text-xl"},[t._v("Remove story")]),t._v(" "),e("p",{staticClass:"text-gray-500"},[t._v("\n          Are you sure you want to delete this story? This action cannot be\n          undone.\n        ")])]),t._v(" "),e("div",{staticClass:"flex justify-end items-end gap-x-3 w-full pt-6"},[e("button",{staticClass:"text-black text-sm font-medium w-full border-gray-400 border px-3 py-3 rounded-lg",on:{click:function(e){return t.$bvModal.hide("removeStoriConfirmation")}}},[t._v("\n          Cancel\n        ")]),t._v(" "),e("button",{staticClass:"bg-[#D92D20] disabled:cursor-not-allowed disabled:opacity-25 text-sm w-full text-white font-medium px-6 py-3 rounded-lg",attrs:{disabled:t.processingDelete},on:{click:t.handleRemoveStori}},[t._v("\n          "+t._s(t.processingDelete?"processing...":"Remove")+"\n        ")])])])]),t._v(" "),e("b-modal",{attrs:{id:"removeStoriSuccess",centered:"","hide-header":"","hide-footer":""}},[e("section",{staticClass:"bg-white p-6 space-y-6 max-w-screen-lg rounded-md"},[e("div",[e("img",{staticClass:"h-20 w-20",attrs:{src:r(453),alt:"warning"}})]),t._v(" "),e("div",[e("h1",{staticClass:"font-semibold text-xl"},[t._v("Story removed")]),t._v(" "),e("p",{staticClass:"text-gray-500"},[t._v("\n          You have successfully removed the story, kindly note that it cannot\n          be recovered.\n        ")])]),t._v(" "),e("div",{staticClass:"flex justify-end items-end gap-x-3 w-full pt-6"},[e("button",{staticClass:"bg-[#000000] text-sm w-full text-white font-medium px-6 py-3 rounded-lg",on:{click:function(e){return t.$bvModal.hide("removeStoriSuccess")}}},[t._v("\n          Close\n        ")])])])])],1)}),o,!1,null,null,null);e.default=component.exports},469:function(t,e,r){"use strict";r.r(e);var o={components:{ImageZoom:r(467).default},props:{users:{type:Array,required:!0}},methods:{handleSuspendConfirmation:function(){this.isSuspendConfirmationModal=!1,this.isSuspendSuccessModal=!0},handleFormCompletion:function(){this.isSuspendModal=!1,this.isSuspendConfirmationModal=!0},handleTableView:function(t){this.tableView=t},updateCurrentPage:function(t){this.currentPage=t},toggleDropdown:function(t){this.openDropdown===t?this.openDropdown=null:this.openDropdown=t},closeDropdown:function(){this.openDropdown=null},editUser:function(t){this.openDropdown=null},removeUser:function(t){this.isConfirmingRemoveUser=!0,this.openDropdown=null},toggleUserStatus:function(t){t.isActive?this.isSuspendModal=!0:this.isConfirmingActivateUser=!0,this.openDropdown=null},handleProceedRemoval:function(){this.isConfirmingRemoveUser=!1,this.isRemoveUserSuccess=!0},handleProceedActivation:function(){this.isConfirmingActivateUser=!1,this.isActivateUserSuccess=!0},handleSearch:function(t){console.log(t,"search val here from users")}}},n=r(16),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("main",[e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4"},t._l(t.users,(function(o){return e("div",{key:o.email,staticClass:"flex justify-center items-center flex-col gap-y-3 bg-white rounded-lg border border-gray-200 py-10"},[e("image-zoom",{staticClass:"h-20 w-20 cursor-pointer",attrs:{src:r(252)("./".concat(o.avatar,".svg"))}}),t._v(" "),e("p",{staticClass:"font-bold text-lg"},[t._v(t._s(o.fname))]),t._v(" "),e("p",{staticClass:"text-gray-400"},[t._v(t._s(o.username))])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},473:function(t,e,r){t.exports=r.p+"img/stori.8ae622c.png"},474:function(t,e,r){"use strict";r(458)},475:function(t,e,r){var o=r(35)((function(i){return i[1]}));o.push([t.i,'div.chart-wrapper[data-v-aedc9c32]{align-items:center;display:flex;height:"50%";justify-content:flex-start;width:"100%"}.align-baseline[data-v-aedc9c32]{vertical-align:baseline}',""]),o.locals={},t.exports=o},476:function(t,e,r){"use strict";r(459)},477:function(t,e,r){var o=r(35)((function(i){return i[1]}));o.push([t.i,'div.chart-wrapper[data-v-cf33d0ca]{align-items:center;display:flex;height:"100%";justify-content:flex-start;width:"100%"}',""]),o.locals={},t.exports=o},483:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{chartOptions:{chart:{id:"vuechart-example",toolbar:{show:!1},type:"bar"},dataLabels:{enabled:!1},plotOptions:{bar:{borderRadius:10,horizontal:!1,borderRadiusApplication:"around",columnWidth:"50%",barHeight:"100%"}},colors:[function(t){var e=t.value;t.seriesIndex,t.w;return e>50?"#000000":"#0ba9b9"}],xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998,1996,1997,1998,1991,1992,1993,1994]},tooltip:{theme:"light",fillSeriesColor:!1}},series:[{name:"series-1",data:[100,40,35,100,49,60,70,60,40,75,50,49,40,35,100]}]}}},n=(r(474),r(16)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white shadow rounded-md p-6 md:p-10 space-y-3 dark:border dark:border-white"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("client-only",[e("div",{staticClass:"chart-wrapper md:w-full overflow-x-auto"},[e("apexchart",{staticClass:"md:w-full overflow-x-auto",attrs:{width:"1000",height:"330",type:"bar",options:t.chartOptions,series:t.series}})],1)])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"md:flex space-y-4 md:space-y-0 justify-between items-center"},[e("p",{staticClass:"text-[#ACAFAE] text-sm md:text-lg font-light"},[t._v("\n      Live traffic of logged in Active users\n    ")]),t._v(" "),e("div",{staticClass:"flex items-center gap-x-3"},[e("select",{staticClass:"text-sm outline-none font-medium bg-gray-100 rounded-md px-2.5 py-2 w-full"},[e("option",[t._v("online")]),t._v(" "),e("option",[t._v("offline")])]),t._v(" "),e("select",{staticClass:"text-sm outline-none font-medium bg-gray-100 rounded-md px-2.5 py-2 w-full"},[e("option",[t._v("Daily")]),t._v(" "),e("option",[t._v("Monthly")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-5xl font-semibold"},[t._v("\n    2,001"),e("span",{staticClass:"text-xs align-baseline ml-1 text-gray-600"},[t._v("users")])])}],!1,null,"aedc9c32",null);e.default=component.exports},484:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{series:[80,20],chartOptions:{labels:["Google search ","Others"],dataLabels:{enabled:!0},legend:{show:!0,showForSingleSeries:!1,showForNullSeries:!0,showForZeroSeries:!0,position:"bottom",horizontalAlign:"center",fontSize:"16px",fontFamily:"Helvetica, Arial",fontWeight:500,itemMargin:{horizontal:15,vertical:0}},fill:{colors:["#BDBDBD","#000000"]},colors:["#BDBDBD","#000000"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"center",show:!1}}}]}}}},n=(r(476),r(16)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"chart-wrapper w-full overflow-x-auto"},[e("client-only",[e("apexchart",{staticClass:"md:w-full md:hidden overflow-x-auto",attrs:{width:"500",height:"242",type:"pie",options:t.chartOptions,series:t.series}}),t._v(" "),e("apexchart",{staticClass:"md:w-full hidden md:block overflow-x-auto",attrs:{width:"500",type:"pie",options:t.chartOptions,series:t.series}})],1)],1)])}),[],!1,null,"cf33d0ca",null);e.default=component.exports},487:function(t,e,r){t.exports=r.p+"img/sad-search.7edcfc9.svg"},494:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"lg:w-3/12 md:w-6/12 rounded-lg bg-white shadow-md space-y-6"},[e("div",{staticClass:"flex items-center justify-between px-7 py-4"},[e("h6",{staticClass:"font-medium text-gray-500"},[t._v("App Store information")]),t._v(" "),e("select",{staticClass:"text-sm font-medium outline-none bg-gray-100 rounded-md px-2.5 py-2"},[e("option",[t._v("All Time")])])]),t._v(" "),e("div",[e("div",{staticClass:"border-b-[0.2px] border-gray-50"},[e("div",{staticClass:"flex justify-between items-start border-b border-gray-100 pb-10 px-7"},[e("img",{attrs:{src:r(265),alt:""}}),t._v(" "),e("div",{staticClass:"space-y-4"},[e("div",{staticClass:"flex items-center space-x-4"},[e("h2",{staticClass:"font-bold text-3xl"},[t._v("625")]),t._v(" "),e("img",{staticClass:"h-10 w-10",attrs:{src:r(260),alt:""}})]),t._v(" "),e("p",{staticClass:"text-gray-400"},[t._v("Downloads")]),t._v(" "),e("div",{staticClass:"flex items-center gap-x-3"},[e("p",{staticClass:"mt-3"},[t._v("4.5")]),t._v(" "),e("div",[e("img",{attrs:{src:r(261),alt:""}})])])]),t._v(" "),e("div",[e("h2",{staticClass:"text-green-500 font-medium"},[t._v("+2.4%")])])])]),t._v(" "),e("div",{staticClass:"flex justify-between items-start py-10 px-7"},[e("img",{attrs:{src:r(267),alt:""}}),t._v(" "),e("div",{staticClass:"space-y-4"},[e("div",{staticClass:"flex items-center space-x-4"},[e("h2",{staticClass:"font-bold text-3xl"},[t._v("902")]),t._v(" "),e("img",{attrs:{src:r(259),alt:""}})]),t._v(" "),e("p",{staticClass:"text-gray-400"},[t._v("Downloads")]),t._v(" "),e("div",{staticClass:"flex items-center gap-x-3"},[e("p",{staticClass:"mt-3"},[t._v("4.8")]),t._v(" "),e("img",{attrs:{src:r(261),alt:""}})])]),t._v(" "),e("div",[e("h2",{staticClass:"text-green-500 font-medium"},[t._v("+2.4%")])])])])])}],n={layout:"dashboard",components:{ActivitiesChart:r(483).default}},l=r(16),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"md:flex justify-start items-start space-y-10 md:space-y-0 gap-x-10 w-full"},[e("div",{staticClass:"lg:w-9/12 md:w-6/12"},[e("ActivitiesChart")],1),t._v(" "),t._m(0)])}),o,!1,null,null,null);e.default=component.exports},495:function(t,e,r){"use strict";r.r(e);var o={layout:"dashboard",data:function(){return{dashboardStats:[{title:"Total Active Users",count:"1,000,000",desc:"Compared from Last Month",rate:"-7.3%",progress:!1,bg:"bg-[#FDF5F5]",chart:"active-users-spiral"},{title:"Sign ups",count:"2,000,000",desc:"Compared from Last Month",rate:"+2.4%",progress:!0,bg:"bg-[#ECFCFE]",subTitle:"",chart:"signup-spiral"},{title:"Stories",count:"180,000",desc:"Compared from Last Month",rate:"-9.7%",progress:!1,bg:"bg-[#FFF8E3]",subTitle:"",chart:"stori-spiral"},{title:"Engagement",count:"34.9M",desc:"Compared from Last Month",rate:"+12%",progress:!0,bg:"bg-[#f9efff]",subTitle:"",chart:"engagement-spiral"}]}}},n=r(16),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"},t._l(t.dashboardStats,(function(o,n){return e("div",{key:n,staticClass:"flex flex-col items-center justify-center gap-y-3 border border-white rounded-2xl p-4 lg:p-7",class:o.bg},[e("div",{staticClass:"flex items-center gap-x-2"},[e("h1",{staticClass:"font-bold text-lg"},[t._v(t._s(o.title))]),t._v(" "),o.subTitle?e("span",{staticClass:"text-gray-500"},[t._v("("+t._s(o.subTitle)+")")]):t._e()]),t._v(" "),e("div",{staticClass:"flex items-center flex-col gap-x-4 lg:gap-x-6 mt-3"},[e("h1",{staticClass:"text-2xl lg:text-3xl font-bold"},[t._v(t._s(o.count))]),t._v(" "),e("div",{staticClass:"flex items-center gap-x-2"},[o.progress?e("img",{attrs:{src:r(260),alt:""}}):t._e(),t._v(" "),o.progress?t._e():e("img",{attrs:{src:r(259),alt:""}}),t._v(" "),e("p",{staticClass:"pt-3",class:[o.progress?"text-green-600":"text-red-600"]},[t._v("\n          "+t._s(o.rate)+"\n        ")])])]),t._v(" "),e("p",{staticClass:"text-[#6E717C] text-sm"},[t._v(t._s(o.desc))])])})),0)}),[],!1,null,null,null);e.default=component.exports},496:function(t,e,r){"use strict";r.r(e);r(37);var o={layout:"dashboard",data:function(){return{activeTable:"reserved_usernames",tableData:[{id:1,name:"Jim Edwards",email:"jimedwards@yahoo.com",avatar:"avatar"},{id:2,name:"Abdulateef Jakande",email:"adbuafas@gmail.com",avatar:"avatar"},{id:3,name:"Simisola  Abolarinwa",email:"simsim@hotmail.com",avatar:"avatar"},{id:4,name:"Abdulateef Jakande",email:"adbuafas@gmail.com",avatar:"avatar"},{id:5,name:"Simisola  Abolarinwa",email:"simsim@hotmail.com",avatar:"avatar"}]}},components:{WebsiteTrafficChart:r(484).default},methods:{setActiveTable:function(t){this.activeTable=t}}},n=r(16),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"lg:flex gap-x-10 space-y-10 lg:space-y-0"},[e("div",{staticClass:"lg:w-6/12 rounded-2xl bg-white p-6 shadow-md border space-y-6"},[e("div",{staticClass:"space-y-2"},[e("h1",{staticClass:"font-semibold text-sm md:text-lg"},[t._v("\n        Most Recent\n      ")]),t._v(" "),e("div",[t._m(0),t._v(" "),e("div",{staticClass:"hidden sm:block"},[e("div",{staticClass:"border-b border-gray-200"},[e("nav",{staticClass:"-mb-px flex gap-6 overflow-x-auto",attrs:{"aria-label":"Tabs"}},[e("button",{staticClass:"shrink-0 border-b-2 px-1 pb-2 text-sm text-gray-400",class:["reserved_usernames"===t.activeTable?"border-sky-500 border-b-2 font-bold text-gray-900":"border-transparent"],attrs:{"aria-current":"page"},on:{click:function(e){return t.setActiveTable("reserved_usernames")}}},[t._v("\n                Reserved Username\n              ")]),t._v(" "),e("button",{staticClass:"shrink-0 border-b-2 px-1 pb-2 text-sm text-gray-400",class:["reported_users"===t.activeTable?"border-sky-500 font-bold text-gray-900":"border-transparent"],on:{click:function(e){return t.setActiveTable("reported_users")}}},[t._v("\n                Reported users\n              ")]),t._v(" "),e("button",{staticClass:"shrink-0 border-b-2 px-1 pb-2 text-sm text-gray-400",class:["reported_post"===t.activeTable?"border-sky-500 font-bold text-gray-900":"border-transparent"],on:{click:function(e){return t.setActiveTable("reported_post")}}},[t._v("\n                Reported post\n              ")]),t._v(" "),e("button",{staticClass:"shrink-0 border-b-2 px-1 pb-2 text-sm text-gray-400",class:["reported_comment"===t.activeTable?"border-sky-500 font-bold text-gray-900":"border-transparent"],on:{click:function(e){return t.setActiveTable("reported_comment")}}},[t._v("\n                Reported comment\n              ")])])])])])]),t._v(" "),e("div",{staticClass:"overflow-x-auto"},[e("table",{staticClass:"min-w-full divide-y-2 divide-gray-200 bg-white text-sm"},[e("tbody",{staticClass:"divide-y divide-gray-200"},t._l(t.tableData,(function(o,n){return e("tr",{key:n},[e("td",{staticClass:"whitespace-nowrap px-4 py-3 font-medium text-gray-900 bg-white"},[e("nuxt-link",{attrs:{to:"/dashboard/users/".concat(o.id)}},[e("img",{staticClass:"w-30",attrs:{src:r(252)("./".concat(o.avatar,".svg")),alt:""}})])],1),t._v(" "),e("td",{staticClass:"whitespace-nowrap text-xs md:text-sm px-4 py-3 text-gray-700"},[e("nuxt-link",{staticClass:"text-blue-700 no-underline hover:underline",attrs:{to:"/dashboard/users/".concat(o.id)}},[t._v(t._s(o.name))])],1),t._v(" "),e("td",{staticClass:"whitespace-nowrap text-xs md:text-sm px-4 py-3 text-gray-700"},[e("nuxt-link",{staticClass:"text-blue-700 no-underline hover:underline",attrs:{to:"/dashboard/users/".concat(o.id,"}}")}},[t._v(t._s(o.email))])],1),t._v(" "),e("td",{staticClass:"whitespace-nowrap text-xs md:text-sm px-4 py-3 text-gray-700"},[e("nuxt-link",{staticClass:"text-blue-700 no-underline hover:underline",attrs:{to:"/dashboard/users/".concat(o.id,"}}")}},[e("img",{attrs:{src:r(455),alt:""}})])],1)])})),0)])])]),t._v(" "),e("div",{staticClass:"lg:w-6/12 w-full rounded-2xl bg-white p-3 md:p-6 shadow-md border"},[t._m(1),t._v(" "),e("div",{staticClass:"flex justify-center items-center w-full pb-3"},[e("WebsiteTrafficChart")],1)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"sm:hidden"},[e("label",{staticClass:"sr-only",attrs:{for:"Tab"}},[t._v("Tab")]),t._v(" "),e("select",{staticClass:"w-full md:w-full text-xs rounded-md py-2.5 md:py-0 px-3 outline-none md:text-sm md:px-0 bg-gray-100 border-gray-200",attrs:{id:"Tab"}},[e("option",{attrs:{select:""}},[t._v("Reserved Username")]),t._v(" "),e("option",[t._v("Reported users")]),t._v(" "),e("option",[t._v("Reported post")]),t._v(" "),e("option",[t._v("Reported comment")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"md:flex space-y-6 md:space-y-0 items-center justify-between px-3 md:px-7 py-4"},[e("div",{},[e("h1",{staticClass:"font-medium text-lg text-gray-900 py-0 my-0"},[t._v("\n          Website Traffic\n        ")]),t._v(" "),e("p",{staticClass:"text-gray-400 py-0 my-0 text-sm md:text-base"},[t._v("\n          Comparison of source of website traffic\n        ")])]),t._v(" "),e("select",{staticClass:"text-sm font-medium bg-gray-100 rounded-md px-2.5 py-2 outline-none"},[e("option",[t._v("This year")])])])}],!1,null,null,null);e.default=component.exports},517:function(t,e,r){"use strict";r.r(e);r(27),r(133),r(51);var o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center gap-x-3"},[e("p",{staticClass:"text-gray-600"},[t._v("Show results from:")]),t._v(" "),e("select",{staticClass:"outline-none px-6 py-2 bg-gray-100 rounded-lg text-sm"},[e("option",[t._v("All")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"space-y-6"},[e("p",[t._v("More")]),t._v(" "),e("div",{staticClass:"flex items-center gap-x-3"},[e("img",{attrs:{src:r(487),alt:""}}),t._v(" "),e("p",{staticClass:"font-medium text-gray-900"},[t._v("No exact match found")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-center items-center flex-col gap-y-4"},[e("p",{staticClass:"font-bold text-gray-950 h-20 w-20 rounded-full flex justify-center items-center bg-gray-200"},[t._v("\n                +450\n              ")]),t._v(" "),e("p",{staticClass:"font-semibold text-gray-500"},[t._v("See more")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-center items-center flex-col gap-y-4"},[e("p",{staticClass:"font-bold text-gray-950 h-20 w-20 rounded-full flex justify-center items-center bg-gray-200"},[t._v("\n                +930\n              ")]),t._v(" "),e("p",{staticClass:"font-semibold text-gray-500"},[t._v("See more")])])}],n=(r(43),r(18),r(71),r(90),r(468)),l=r(469),c=r(452),d=r(494),m=r(495),v=r(496),f={layout:"dashboard",data:function(){return{search:"",usersList:[{id:1,avatar:"avatar-girl",username:"marquis",fname:"Marquis",lname:"Abah",interest:"Funky gists",interest_count:"+3",phone:"080007120090",email:"marquis@gmail.com",stori:"96",isActive:!0},{id:2,avatar:"avatar-girl",username:"victor",fname:"Chinedu",lname:"Victor",interest:"Funky gists",interest_count:"",phone:"080007120090",email:"victor@gmail.com",stori:"96",isActive:!1},{id:3,avatar:"avatar-girl",username:"alex",fname:"Alex",lname:"Akpan",interest:"Funky gists",interest_count:"",phone:"080007120090",email:"alex@gmail.com",stori:"96",isActive:!0},{id:2,avatar:"avatar-girl",username:"victor",fname:"Chinedu",lname:"Victor",interest:"Funky gists",interest_count:"",phone:"080007120090",email:"victor@gmail.com",stori:"96",isActive:!1},{id:3,avatar:"avatar-girl",username:"alex",fname:"Alex",lname:"Akpan",interest:"Funky gists",interest_count:"",phone:"080007120090",email:"alex@gmail.com",stori:"96",isActive:!0},{id:2,avatar:"avatar-girl",username:"victor",fname:"Chinedu",lname:"Victor",interest:"Funky gists",interest_count:"",phone:"080007120090",email:"victor@gmail.com",stori:"96",isActive:!1},{id:3,avatar:"avatar-girl",username:"alex",fname:"Alex",lname:"Akpan",interest:"Funky gists",interest_count:"",phone:"080007120090",email:"alex@gmail.com",stori:"96",isActive:!0}],storiesList:[{image:"",desc:"Courtney Brown is here to give y’all premium gist. Follow Courtney Brown ",count:"200",date:"24th August, 2022"},{image:"",desc:"Courtney Brown is here to give y’all premium gist. Follow Courtney Brown ",count:"200",date:"24th August, 2022"},{image:"",desc:"Courtney Brown is here to give y’all premium gist. Follow Courtney Brown ",count:"200",date:"24th August, 2022"},{image:"",desc:"Courtney Brown is here to give y’all premium gist. Follow Courtney Brown ",count:"200",date:"24th August, 2022"},{image:"",desc:"Courtney Brown is here to give y’all premium gist. Follow Courtney Brown ",count:"200",date:"24th August, 2022"},{image:"",desc:"Courtney Brown is here to give y’all premium gist. Follow Courtney Brown ",count:"200",date:"24th August, 2022"},{image:"",desc:"Courtney Brown is here to give y’all premium gist. Follow Courtney Brown ",count:"200",date:"24th August, 2022"},{image:"",desc:"Courtney Brown is here to give y’all premium gist. Follow Courtney Brown ",count:"200",date:"24th August, 2022"}]}},components:{SectionTwo:d.default,SectionOne:m.default,SectionThree:v.default,DashboardHeader:c.default,StoriesCardList:n.default,UsersCardList:l.default},methods:{handleDashboardSearch:function(t){this.search=t}},computed:{filteredUsers:function(){if(this.search.length){var t=this.search.toLowerCase(),e=this.usersList.filter((function(e){e.username.toLowerCase().includes(t)||e.fname.toLowerCase().includes(t)||e.email.toLowerCase().includes(t)||e.lname.toLowerCase().includes(t)}));return e.length>0?e:this.usersList}return this.usersList}},watch:{search:function(t){console.log(t,"search was changed")}}},h=r(16),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("main",{},[e("DashboardHeader",{on:{search:t.handleDashboardSearch}}),t._v(" "),t.search.length?e("div",{staticClass:"bg-white rounded-lg m-6 mx-10 p-6 space-y-6"},[e("div",{staticClass:"flex justify-between items-center"},[e("h3",{staticClass:"text-2xl font-semibold"},[t._v("Search Result “"+t._s(t.search)+"”")]),t._v(" "),t._m(0)]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"space-y-6"},[e("div",{staticClass:"border-t border-gray-300 space-y-4 py-6"},[e("h6",{staticClass:"font-semibold text-gray-800"},[t._v("User")]),t._v(" "),e("div",{staticClass:"flex"},[e("UsersCardList",{staticClass:"w-10/12 py-0 my-0",attrs:{users:t.filteredUsers.slice(0,5)}}),t._v(" "),e("div",{staticClass:"w-2/12 cursor-pointer bg-white shadow h-[270px] rounded-lg border-gray-400 border-2 border-dashed mt-4 flex justify-center items-center",on:{click:function(e){return t.$router.push("/dashboard/users")}}},[t._m(2)])],1)]),t._v(" "),e("div",{staticClass:"border-t border-gray-300 space-y-4 py-6"},[e("h6",{staticClass:"font-semibold text-gray-800"},[t._v("Stories")]),t._v(" "),e("div",{staticClass:"flex gap-x-6"},[e("StoriesCardList",{staticClass:"w-full",attrs:{stories:t.storiesList.slice(0,5)}}),t._v(" "),e("div",{staticClass:"w-2/12 cursor-pointer bg-white shadow h-[340px] rounded-lg border-gray-400 border-2 border-dashed mt-1 flex justify-center items-center",on:{click:function(e){return t.$router.push("/dashboard/stories")}}},[t._m(3)])],1)])])]):e("div",{staticClass:"p-4 md:px-10 space-y-10"},[e("section-one"),t._v(" "),e("section-two"),t._v(" "),e("section-three")],1)],1)}),o,!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardHeader:r(452).default,UsersCardList:r(469).default,StoriesCardList:r(468).default})}}]);