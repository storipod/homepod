(window.webpackJsonp=window.webpackJsonp||[]).push([[31,6],{440:function(e,t,r){var content=r(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(50).default)("fec8ebc2",content,!0,{sourceMap:!1})},441:function(e,t,r){"use strict";r(440)},442:function(e,t,r){var o=r(49)((function(i){return i[1]}));o.push([e.i,".nuxt-link-exact-active[data-v-0d99538d]{background-color:#000;color:#fff}",""]),o.locals={},e.exports=o},443:function(e,t,r){"use strict";r.r(t);r(27),r(133);var o=[function(){var e=this._self._c;return e("div",{staticClass:"xl:w-2/12"},[e("h6",{staticClass:"font-medium dark:text-white text-sm"},[this._v("\n          Welcome James! 😊\n        ")])])},function(){var e=this._self._c;return e("div",{staticClass:"md:w-2/12"},[e("h6",{staticClass:"font-medium dark:text-white"},[this._v("Welcome James! 😊")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-full"},[t("button",{staticClass:"bg-[#0cb0bd] flex items-center gap-x-3 w-full rounded-md justify-center py-2.5"},[t("img",{staticClass:"h-10 w-10",attrs:{src:r(167),alt:""}}),e._v(" "),t("span",{staticClass:"font-medium text-gray-900 text-sm"},[e._v("James Nelson")])])])}],M=r(0),d=Object(M.ref)(""),l=r(168),c={search:d,setSearch:function(data){d.value=data}},n=c.setSearch,I={name:"DashboardHeader",components:{Breadcrumb:l.default},data:function(){return{isDarkMode:!1,form:{search:""},showSidebar:!1,sidebarItems:[{header:"",children:[{urlPath:"/dashboard",title:"Dashboard",icon:"user"}]},{header:"MANAGE",children:[{urlPath:"/dashboard/users",title:"Users",icon:"user"},{urlPath:"/dashboard/stories",title:"Stories",icon:"stories"},{urlPath:"/dashboard/ad-service",title:"Ad Service",icon:"ad"}]},{header:"SYSTEM",children:[{urlPath:"/dashboard/admin",title:"Admin",icon:"admin"},{urlPath:"/dashboard/config",title:"Configuration",icon:"config"}]}]}},methods:{toggleDarkMode:function(){this.isDarkMode=!this.isDarkMode,this.isDarkMode?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},toggleSidebar:function(){this.showSidebar=!this.showSidebar}},mounted:function(){this.isDarkMode="dark"===localStorage.getItem("theme"),this.isDarkMode&&document.documentElement.classList.add("dark")},watch:{"form.search":function(e){n(e),this.$emit("search",e)}}},m=(r(441),r(23)),component=Object(m.a)(I,(function(){var e=this,t=e._self._c;return t("main",[t("header",{staticClass:"space-y-3 bg-white px-6 py-3"},[t("section",{staticClass:"md:flex space-y-6 md:space-y-0 items-center border-b hidden"},[e._m(0),e._v(" "),t("div",{staticClass:"flex w-full flex-grow justify-end"},[t("div",{staticClass:"flex items-center gap-x-10 pb-3"},[t("div",{staticClass:"relative w-full"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.search,expression:"form.search"}],staticClass:"w-full rounded-md bg-gray-100 px-3 py-2.5 pl-32 text-sm outline-none",attrs:{type:"text",placeholder:"Search keyword"},domProps:{value:e.form.search},on:{input:function(t){t.target.composing||e.$set(e.form,"search",t.target.value)}}}),e._v(" "),t("img",{staticClass:"absolute left-2 top-2",attrs:{src:r(251),alt:""}})]),e._v(" "),t("div",{staticClass:"flex justify-between items-center gap-x-4"},[t("div",[e.isDarkMode?e._e():t("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(249),alt:""},on:{click:e.toggleDarkMode}}),e._v(" "),e.isDarkMode?t("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(248),alt:""},on:{click:e.toggleDarkMode}}):e._e()]),e._v(" "),t("div",[t("img",{staticClass:"cursor-pointer h-8 w-8",attrs:{src:r(254),alt:""},on:{click:function(t){return e.$router.push("/dashboard/users/notify")}}})])])])])]),e._v(" "),t("section",{staticClass:"flex items-center justify-between border-b pb-3 md:hidden"},[e._m(1),e._v(" "),t("div",{staticClass:"flex justify-between items-center gap-x-4"},[t("div",[e.isDarkMode?e._e():t("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(249),alt:""},on:{click:e.toggleDarkMode}}),e._v(" "),e.isDarkMode?t("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(248),alt:""},on:{click:e.toggleDarkMode}}):e._e()]),e._v(" "),t("div",[e.isDarkMode?t("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(256),alt:""},on:{click:e.toggleSidebar}}):e._e(),e._v(" "),e.isDarkMode?e._e():t("img",{staticClass:"cursor-pointer h-6 w-6",attrs:{src:r(255),alt:""},on:{click:e.toggleSidebar}})])])]),e._v(" "),t("div",{staticClass:"text-white flex justify-between items-center"},[t("Breadcrumb"),e._v(" "),e._t("action")],2)]),e._v(" "),t("div",{staticClass:"w-64 bg-white shadow-md",class:["fixed inset-y-0 left-0 z-30 transition duration-300 ease-in-out",e.showSidebar?"translate-x-0":"-translate-x-full"]},[t("nav",[t("main",{staticClass:"w-full p-6 relative flex flex-col h-screen"},[t("div",{staticClass:"flex-grow relative"},[e.isDarkMode?e._e():t("img",{attrs:{src:r(253),alt:""}}),e._v(" "),e.isDarkMode?t("img",{staticClass:"px-3",attrs:{src:r(252),alt:""}}):e._e(),e._v(" "),e._l(e.sidebarItems,(function(o,M){var header=o.header,d=o.children;return t("div",{key:M},[t("h6",{staticClass:"py-3 pb-3 text-[#B3BBCA]",class:[header?"border-b-[0.2px] border-gray-300":""]},[e._v("\n              "+e._s(header)+"\n            ")]),e._v(" "),t("div",{staticClass:"w-full space-y-1 rounded"},e._l(d,(function(o){return t("nuxt-link",{key:o.title,staticClass:"flex w-full no-underline items-center gap-x-3 text-gray-500 rounded-md px-3 py-2.5 leading-loose dark:text-white",attrs:{to:o.urlPath},nativeOn:{click:function(t){return e.toggleSidebar.apply(null,arguments)}}},[t("img",{attrs:{src:r(250)("./".concat(o.icon,".svg")),alt:""}}),e._v("\n                "+e._s(o.title)+"\n              ")])})),1)])}))],2),e._v(" "),e._m(2)])])])])}),o,!1,null,"0d99538d",null);t.default=component.exports},444:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNCIgeT0iNCIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMjQiIGZpbGw9IiNEMUZBREYiLz4KPHJlY3QgeD0iNCIgeT0iNCIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMjQiIHN0cm9rZT0iI0VDRkRGMyIgc3Ryb2tlLXdpZHRoPSI4Ii8+CjxwYXRoIGQ9Ik0zOCAyNy4wNzk5VjI3Ljk5OTlDMzcuOTk4OCAzMC4xNTYzIDM3LjMwMDUgMzIuMjU0NSAzNi4wMDkzIDMzLjk4MTdDMzQuNzE4MiAzNS43MDg4IDMyLjkwMzMgMzYuOTcyMyAzMC44MzU0IDM3LjU4MzhDMjguNzY3NCAzOC4xOTUyIDI2LjU1NzMgMzguMTIxOCAyNC41MzQ1IDM3LjM3NDRDMjIuNTExNyAzNi42MjcxIDIwLjc4NDcgMzUuMjQ2IDE5LjYxMSAzMy40MzY5QzE4LjQzNzMgMzEuNjI3OSAxNy44Nzk4IDI5LjQ4NzkgMTguMDIxNyAyNy4zMzYyQzE4LjE2MzYgMjUuMTg0NCAxOC45OTcyIDIzLjEzNjIgMjAuMzk4MyAyMS40OTY5QzIxLjc5OTQgMTkuODU3NyAyMy42OTI4IDE4LjcxNTIgMjUuNzk2MiAxOC4yNEMyNy44OTk2IDE3Ljc2NDggMzAuMTAwMyAxNy45ODIyIDMyLjA3IDE4Ljg1OTlNMzggMTkuOTk5OUwyOCAzMC4wMDk5TDI1IDI3LjAwOTkiIHN0cm9rZT0iIzAzOTg1NSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="},445:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNCIgeT0iNCIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMjQiIGZpbGw9IiNGRUU0RTIiLz4KPHJlY3QgeD0iNCIgeT0iNCIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMjQiIHN0cm9rZT0iI0ZFRjNGMiIgc3Ryb2tlLXdpZHRoPSI4Ii8+CjxwYXRoIGQ9Ik0yOCAyNFYyOE0yOCAzMkgyOC4wMU0zOCAyOEMzOCAzMy41MjI4IDMzLjUyMjggMzggMjggMzhDMjIuNDc3MiAzOCAxOCAzMy41MjI4IDE4IDI4QzE4IDIyLjQ3NzIgMjIuNDc3MiAxOCAyOCAxOEMzMy41MjI4IDE4IDM4IDIyLjQ3NzIgMzggMjhaIiBzdHJva2U9IiNEOTJEMjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="},446:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyNCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzJfODc4KSI+CjxwYXRoIGQ9Ik0xMC4zIDUuNjE1ODJDOS45MSA1Ljg3NzQgOS45MSA2LjI5MzI2IDEwLjMgNi41NTQ4NEwxMi4yIDcuODI5MjNIM0MyLjQ1IDcuODI5MjMgMiA4LjEzMTA2IDIgOC40OTk5NkMyIDguODY4ODcgMi40NSA5LjE3MDcgMyA5LjE3MDdIMTIuMkwxMC4zIDEwLjQ0NTFDOS45MSAxMC43MDY3IDkuOTEgMTEuMTIyNSAxMC4zIDExLjM4NDFDMTAuNjkgMTEuNjQ1NyAxMS4zMSAxMS42NDU3IDExLjcgMTEuMzg0MUwxNS4yOSA4Ljk3NjE4QzE1LjY4IDguNzE0NiAxNS42OCA4LjI5MjA0IDE1LjI5IDguMDMwNDVMMTEuNyA1LjYxNTgyQzExLjMxIDUuMzU0MjMgMTAuNjkgNS4zNTQyMyAxMC4zIDUuNjE1ODJaTTIwIDEzLjE5NTFIMTNDMTIuNDUgMTMuMTk1MSAxMiAxMy40OTY5IDEyIDEzLjg2NThDMTIgMTQuMjM0NyAxMi40NSAxNC41MzY1IDEzIDE0LjUzNjVIMjBDMjEuMSAxNC41MzY1IDIyIDEzLjkzMjkgMjIgMTMuMTk1MVYzLjgwNDg0QzIyIDMuMDY3MDQgMjEuMSAyLjQ2MzM4IDIwIDIuNDYzMzhIMTNDMTIuNDUgMi40NjMzOCAxMiAyLjc2NTIxIDEyIDMuMTM0MTFDMTIgMy41MDMwMSAxMi40NSAzLjgwNDg0IDEzIDMuODA0ODRIMjBWMTMuMTk1MVoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMl84NzgiPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMTYuMDk3NiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC40NTExNzIpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="},449:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjAzNzcgNi4zNDMyNkwxMy42MjY4IDcuNzYwNzhMMTYuODk3IDExLjAxNTdMMy4yOTE5OSAxMS4wMjk0TDMuMjk0IDEzLjAyOTRMMTYuODYxOCAxMy4wMTU4TDEzLjY0NjYgMTYuMjQ2TDE1LjA2NDEgMTcuNjU2OUwyMC43MDc4IDExLjk4NjlMMTUuMDM3NyA2LjM0MzI2WiIgZmlsbD0iIzQxNDE0MSIvPgo8L3N2Zz4K"},450:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xIDEyczQtOCAxMS04IDExIDggMTEgOC00IDgtMTEgOC0xMS04LTExLTh6Ij48L3BhdGg+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyI+PC9jaXJjbGU+PC9zdmc+"},451:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDE3IDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zLjU1NjQ1IDQuMjU4MzJDNC40NjgwMyAzLjczMjAyIDQuNzgwMzYgMi41NjYzOSA0LjI1NDA2IDEuNjU0ODFDMy43Mjc3NiAwLjc0MzIzOCAyLjU2MjEzIDAuNDMwOTA5IDEuNjUwNTUgMC45NTcyMDhDMC43Mzg5NzggMS40ODM1MSAwLjQyNjY0OSAyLjY0OTEzIDAuOTUyOTQ4IDMuNTYwNzFDMS40NzkyNSA0LjQ3MjI5IDIuNjQ0ODcgNC43ODQ2MiAzLjU1NjQ1IDQuMjU4MzJaIiBmaWxsPSIjMTAxODI4Ii8+CjxwYXRoIGQ9Ik05LjI3NTIgNC4yNTQ0MUMxMC4xODY4IDMuNzI4MTEgMTAuNDk5MSAyLjU2MjQ4IDkuOTcyODEgMS42NTA5MUM5LjQ0NjUxIDAuNzM5MzMyIDguMjgwODggMC40MjcwMDMgNy4zNjkzIDAuOTUzMzAyQzYuNDU3NzMgMS40Nzk2IDYuMTQ1NCAyLjY0NTIzIDYuNjcxNyAzLjU1NjhDNy4xOTggNC40NjgzOCA4LjM2MzYyIDQuNzgwNzEgOS4yNzUyIDQuMjU0NDFaIiBmaWxsPSIjMTAxODI4Ii8+CjxwYXRoIGQ9Ik0xNS4wMDE4IDQuMjU0NDFDMTUuOTEzMyAzLjcyODExIDE2LjIyNTcgMi41NjI0OCAxNS42OTk0IDEuNjUwOTFDMTUuMTczMSAwLjczOTMzMiAxNC4wMDc0IDAuNDI3MDAzIDEzLjA5NTkgMC45NTMzMDJDMTIuMTg0MyAxLjQ3OTYgMTEuODcyIDIuNjQ1MjMgMTIuMzk4MyAzLjU1NjhDMTIuOTI0NiA0LjQ2ODM4IDE0LjA5MDIgNC43ODA3MSAxNS4wMDE4IDQuMjU0NDFaIiBmaWxsPSIjMTAxODI4Ii8+Cjwvc3ZnPgo="},452:function(e,t,r){e.exports=r.p+"img/reactions.9c35250.svg"},453:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDMyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSI0IiBmaWxsPSJibGFjayIvPgo8Y2lyY2xlIGN4PSIxNiIgY3k9IjQiIHI9IjQiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMTMiLz4KPGNpcmNsZSBjeD0iMjgiIGN5PSI0IiByPSI0IiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjEzIi8+Cjwvc3ZnPgo="},454:function(e,t,r){e.exports=r.p+"img/warning.f703668.svg"},459:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik05Ljc2NDA0IDUuMjk1MTlDMTAuNDY2NCA1LjEwNzI0IDExLjIxMjMgNSAxMiA1QzE1Ljc1NzQgNSAxOC41NjQgNy40NDA0IDIwLjIzMjYgOS40MzkzNEMyMS40ODQ4IDEwLjkzOTQgMjEuNDg0NiAxMy4wNjA5IDIwLjIzMjQgMTQuNTYwOUMyMC4wNDA2IDE0Ljc5MDcgMTkuODMzNyAxNS4wMjY0IDE5LjYxMiAxNS4yNjM1TTEyLjUgOS4wNDE0OEMxMy43NTYzIDkuMjUyMjQgMTQuNzQ3OCAxMC4yNDM3IDE0Ljk1ODUgMTEuNU0zIDNMMjEgMjFNMTEuNSAxNC45NTg1QzEwLjQxNTggMTQuNzc2NiA5LjUyODg0IDE0LjAxMzIgOS4xNzA3MiAxM000LjM0OTE0IDguNzc4MjJDNC4xNDIxMyA5LjAwMTI0IDMuOTQ4MjEgOS4yMjI3NCAzLjc2NzYyIDkuNDM5MDdDMi41MTU0MiAxMC45MzkxIDIuNTE1MjMgMTMuMDYwNiAzLjc2NzM5IDE0LjU2MDdDNS40MzYwNCAxNi41NTk2IDguMjQyNjMgMTkgMTIgMTlDMTIuODAyMSAxOSAxMy41NjA4IDE4Ljg4ODggMTQuMjc0NCAxOC42OTQ0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg=="},460:function(e,t,r){e.exports=r.p+"img/email.af7c157.svg"},468:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNiIgY3k9IjYuOTY4NzUiIHI9IjYiIGZpbGw9IiMzMTM1MzMiLz4KPC9zdmc+Cg=="},473:function(e,t,r){e.exports=r.p+"img/animated-login.3c74a9b.svg"},474:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjMyODcgMTEuMDAwMlYxMy4wMDAyTDcuNTAwNDIgMTMuMDAwMkwxMC43NDI5IDE2LjI0MjhMOS4zMjg3MyAxNy42NTdMMy42NzE4OCAxMi4wMDAxTDkuMzI4NzMgNi4zNDMyNkwxMC43NDI5IDcuNzU3NDdMNy41MDAxOSAxMS4wMDAyTDIwLjMyODcgMTEuMDAwMloiIGZpbGw9IiM0MTQxNDEiLz4KPC9zdmc+Cg=="},475:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAyNCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0IDcuMDAwMTlDMjQgMTAuMzEzOSAyMS4zMTM3IDEyLjAwMDIgMTggMTIuMDAwMkMwLjUgMTIuMDAwMiAwLjUgMTAuMzEzOSAwLjUgNy4wMDAxOUMwLjUgMy42ODY0OCAwLjUgMyAxOCAxLjAwMDE5QzIxLjI5MjMgMC42MjM5NjggMjQgMy42ODY0OCAyNCA3LjAwMDE5WiIgZmlsbD0iIzBCQTlCOSIvPgo8L3N2Zz4K"},478:function(e,t,r){e.exports=r.p+"img/sad-search.7edcfc9.svg"},482:function(e,t,r){var map={"./active-eclipse.svg":475,"./animated-login.svg":473,"./arrow-left.svg":474,"./arrow-right-white.svg":446,"./arrow-right.svg":449,"./danger.svg":445,"./dashboard/active-users-spiral.svg":280,"./dashboard/ad.svg":281,"./dashboard/admin.svg":282,"./dashboard/android-badge.svg":263,"./dashboard/appstore.svg":283,"./dashboard/avatar-girl.svg":284,"./dashboard/avatar.svg":167,"./dashboard/bell.svg":254,"./dashboard/black-hamburger.svg":255,"./dashboard/camera.svg":266,"./dashboard/config.svg":285,"./dashboard/decrease.svg":257,"./dashboard/empty-state.svg":267,"./dashboard/engagement-spiral.svg":286,"./dashboard/filter.svg":264,"./dashboard/flash.svg":268,"./dashboard/greater-than.svg":260,"./dashboard/grid.svg":269,"./dashboard/home.svg":287,"./dashboard/increase.svg":258,"./dashboard/ios-badge.svg":265,"./dashboard/less-than.svg":261,"./dashboard/light-moon.svg":248,"./dashboard/list.svg":270,"./dashboard/moon.svg":249,"./dashboard/more.svg":271,"./dashboard/playstore.svg":288,"./dashboard/right-breadcrum.svg":289,"./dashboard/search.svg":251,"./dashboard/signup-spiral.svg":290,"./dashboard/star-group.svg":259,"./dashboard/stori-spiral.svg":291,"./dashboard/stories-link.svg":272,"./dashboard/stories.svg":292,"./dashboard/suspended.svg":273,"./dashboard/user-stats.svg":293,"./dashboard/user.svg":294,"./dashboard/users.svg":274,"./dashboard/white-hamburger.svg":256,"./dashboard/white-plus.svg":275,"./eclipse.svg":468,"./email.svg":460,"./eye-close.svg":459,"./eye-open copy.svg":497,"./eye-open-svgrepo-com (1).svg":498,"./eye-open.svg":450,"./homepod-black.svg":253,"./homepod.svg":499,"./horizontal-more.svg":451,"./login.svg":500,"./reactions.svg":452,"./sad-search.svg":478,"./stori-eclipse.svg":453,"./stori.png":501,"./success.svg":444,"./warning.svg":454};function o(e){var t=M(e);return r(t)}function M(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=M,e.exports=o,o.id=482},483:function(e,t,r){var content=r(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(50).default)("06d5359b",content,!0,{sourceMap:!1})},497:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMiA1QzguMjQyNjEgNSA1LjQzNjAyIDcuNDQwNCAzLjc2NzM3IDkuNDM5MzRDMi41MTUyMSAxMC45Mzk0IDIuNTE1MjEgMTMuMDYwNiAzLjc2NzM3IDE0LjU2MDdDNS40MzYwMiAxNi41NTk2IDguMjQyNjEgMTkgMTIgMTlDMTUuNzU3NCAxOSAxOC41NjQgMTYuNTU5NiAyMC4yMzI2IDE0LjU2MDdDMjEuNDg0OCAxMy4wNjA2IDIxLjQ4NDggMTAuOTM5NCAyMC4yMzI2IDkuNDM5MzRDMTguNTY0IDcuNDQwNCAxNS43NTc0IDUgMTIgNVoiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTEyIDE1QzEzLjY1NjkgMTUgMTUgMTMuNjU2OSAxNSAxMkMxNSAxMC4zNDMxIDEzLjY1NjkgOSAxMiA5QzEwLjM0MzEgOSA5IDEwLjM0MzEgOSAxMkM5IDEzLjY1NjkgMTAuMzQzMSAxNSAxMiAxNVoiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+"},498:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMiA1QzguMjQyNjEgNSA1LjQzNjAyIDcuNDQwNCAzLjc2NzM3IDkuNDM5MzRDMi41MTUyMSAxMC45Mzk0IDIuNTE1MjEgMTMuMDYwNiAzLjc2NzM3IDE0LjU2MDdDNS40MzYwMiAxNi41NTk2IDguMjQyNjEgMTkgMTIgMTlDMTUuNzU3NCAxOSAxOC41NjQgMTYuNTU5NiAyMC4yMzI2IDE0LjU2MDdDMjEuNDg0OCAxMy4wNjA2IDIxLjQ4NDggMTAuOTM5NCAyMC4yMzI2IDkuNDM5MzRDMTguNTY0IDcuNDQwNCAxNS43NTc0IDUgMTIgNVoiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTEyIDE1QzEzLjY1NjkgMTUgMTUgMTMuNjU2OSAxNSAxMkMxNSAxMC4zNDMxIDEzLjY1NjkgOSAxMiA5QzEwLjM0MzEgOSA5IDEwLjM0MzEgOSAxMkM5IDEzLjY1NjkgMTAuMzQzMSAxNSAxMiAxNVoiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+"},499:function(e,t,r){e.exports=r.p+"img/homepod.7d202a2.svg"},500:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyNCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzJfODc4KSI+CjxwYXRoIGQ9Ik0xMC4zIDUuNjE1ODJDOS45MSA1Ljg3NzQgOS45MSA2LjI5MzI2IDEwLjMgNi41NTQ4NEwxMi4yIDcuODI5MjNIM0MyLjQ1IDcuODI5MjMgMiA4LjEzMTA2IDIgOC40OTk5NkMyIDguODY4ODcgMi40NSA5LjE3MDcgMyA5LjE3MDdIMTIuMkwxMC4zIDEwLjQ0NTFDOS45MSAxMC43MDY3IDkuOTEgMTEuMTIyNSAxMC4zIDExLjM4NDFDMTAuNjkgMTEuNjQ1NyAxMS4zMSAxMS42NDU3IDExLjcgMTEuMzg0MUwxNS4yOSA4Ljk3NjE4QzE1LjY4IDguNzE0NiAxNS42OCA4LjI5MjA0IDE1LjI5IDguMDMwNDVMMTEuNyA1LjYxNTgyQzExLjMxIDUuMzU0MjMgMTAuNjkgNS4zNTQyMyAxMC4zIDUuNjE1ODJaTTIwIDEzLjE5NTFIMTNDMTIuNDUgMTMuMTk1MSAxMiAxMy40OTY5IDEyIDEzLjg2NThDMTIgMTQuMjM0NyAxMi40NSAxNC41MzY1IDEzIDE0LjUzNjVIMjBDMjEuMSAxNC41MzY1IDIyIDEzLjkzMjkgMjIgMTMuMTk1MVYzLjgwNDg0QzIyIDMuMDY3MDQgMjEuMSAyLjQ2MzM4IDIwIDIuNDYzMzhIMTNDMTIuNDUgMi40NjMzOCAxMiAyLjc2NTIxIDEyIDMuMTM0MTFDMTIgMy41MDMwMSAxMi40NSAzLjgwNDg0IDEzIDMuODA0ODRIMjBWMTMuMTk1MVoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMl84NzgiPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMTYuMDk3NiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC40NTExNzIpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="},501:function(e,t,r){e.exports=r.p+"img/stori.8ae622c.png"},505:function(e,t,r){"use strict";r(483)},506:function(e,t,r){var o=r(49)((function(i){return i[1]}));o.push([e.i,".has-animation[data-v-c65faf38]{animation:fadeIn-c65faf38 .5s}@keyframes fadeIn-c65faf38{0%{opacity:0}to{opacity:1}}",""]),o.locals={},e.exports=o},519:function(e,t,r){"use strict";r.r(t);r(89),r(51),r(42),r(41),r(17),r(135),r(43),r(44),r(502),r(170),r(70);var o={layout:"dashboard",data:function(){return{showModal:!1,processing:!1,showPassword:!1,form:{fname:"",lname:"",phone:"",email:"",password:"",confirmPassword:"",gender:"",dob:"",imageSrc:null},genderType:[{text:"Male",value:"male"},{text:"Female",value:"female"}]}},computed:{eye:function(){return this.showPassword?"eye-open.svg":"eye-close.svg"},isFormEmpty:function(){return!!(this.form.fname&&this.form.lname&&this.form.phone&&this.form.email&&this.form.password&&this.form.confirmPassword&&this.form.gender&&this.form.dob)}},methods:{onFileChange:function(e){var t=e.target.files[0];t&&t.type.startsWith("image/")?this.form.imageSrc=URL.createObjectURL(t):this.form.imageSrc=null},createUser:function(){var e=this;this.processing=!0,setTimeout((function(){e.processing=!1,e.$bvModal.hide("createUserConfirmationModal"),e.$bvModal.show("createUserSuccessModal")}),2e3)}}},M=(r(505),r(23)),component=Object(M.a)(o,(function(){var e=this,t=e._self._c;return t("main",[t("DashboardHeader"),e._v(" "),t("div",{staticClass:"mx-3 md:mx-6 py-6"},[t("div",{staticClass:"space-y-8 bg-white p-4 lg:px-20 py-10 rounded-2xl"},[t("div",{staticClass:"space-y-3"},[t("p",{staticClass:"text-gray-900 font-semibold"},[e._v("Profile image")]),e._v(" "),t("div",[t("label",{},[e.form.imageSrc?t("image-zoom",{staticClass:"has-animation h-20 w-20 object-cover object-center border-[0.8px] border-gray-400 shadow rounded-full",attrs:{src:e.form.imageSrc,alt:""}}):e._e(),e._v(" "),e.form.imageSrc?e._e():t("img",{staticClass:"h-20 w-20",attrs:{src:r(266),alt:""}}),e._v(" "),t("input",{staticClass:"hidden",attrs:{type:"file"},on:{change:e.onFileChange}})],1)])]),e._v(" "),t("div",{staticClass:"lg:flex space-y-3 lg:space-y-0 justify-between items-center gap-x-10"},[t("div",{staticClass:"w-full space-y-1"},[t("label",{staticClass:"text-sm font-medium"},[e._v("First name")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.fname,expression:"form.fname"}],staticClass:"bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3",attrs:{type:"text"},domProps:{value:e.form.fname},on:{input:function(t){t.target.composing||e.$set(e.form,"fname",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"w-full space-y-1"},[t("label",{staticClass:"text-sm font-medium"},[e._v("Last name")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.lname,expression:"form.lname"}],staticClass:"bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3",attrs:{type:"text"},domProps:{value:e.form.lname},on:{input:function(t){t.target.composing||e.$set(e.form,"lname",t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"lg:flex space-y-3 lg:space-y-0 justify-between items-center gap-x-10"},[t("div",{staticClass:"w-full space-y-1"},[t("label",{staticClass:"text-sm font-medium"},[e._v("Phone no.")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone,expression:"form.phone"}],staticClass:"bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3",attrs:{type:"tel"},domProps:{value:e.form.phone},on:{input:function(t){t.target.composing||e.$set(e.form,"phone",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"w-full space-y-1"},[t("label",{staticClass:"text-sm font-medium"},[e._v("Email")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3",attrs:{type:"email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"lg:flex space-y-3 lg:space-y-0 justify-between items-center gap-x-10"},[t("div",{staticClass:"w-full space-y-1 relative"},[t("label",{staticClass:"text-sm font-medium"},[e._v("Password")]),e._v(" "),"checkbox"==(e.showPassword?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3",attrs:{id:"password",name:"password",placeholder:"",type:"checkbox"},domProps:{checked:Array.isArray(e.form.password)?e._i(e.form.password,null)>-1:e.form.password},on:{change:function(t){var r=e.form.password,o=t.target,M=!!o.checked;if(Array.isArray(r)){var d=e._i(r,null);o.checked?d<0&&e.$set(e.form,"password",r.concat([null])):d>-1&&e.$set(e.form,"password",r.slice(0,d).concat(r.slice(d+1)))}else e.$set(e.form,"password",M)}}}):"radio"==(e.showPassword?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3",attrs:{id:"password",name:"password",placeholder:"",type:"radio"},domProps:{checked:e._q(e.form.password,null)},on:{change:function(t){return e.$set(e.form,"password",null)}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3",attrs:{id:"password",name:"password",placeholder:"",type:e.showPassword?"text":"password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e._v(" "),t("img",{staticClass:"absolute cursor-pointer top-9 right-4 h-6 w-6",attrs:{src:r(482)("./".concat(e.eye)),alt:""},on:{click:function(t){e.showPassword=!e.showPassword}}})]),e._v(" "),t("div",{staticClass:"w-full space-y-1 relative"},[t("label",{staticClass:"text-sm font-medium"},[e._v("Re-enter password")]),e._v(" "),"checkbox"==(e.showPassword?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.confirmPassword,expression:"form.confirmPassword"}],staticClass:"bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3",attrs:{id:"password",name:"password",placeholder:"",type:"checkbox"},domProps:{checked:Array.isArray(e.form.confirmPassword)?e._i(e.form.confirmPassword,null)>-1:e.form.confirmPassword},on:{change:function(t){var r=e.form.confirmPassword,o=t.target,M=!!o.checked;if(Array.isArray(r)){var d=e._i(r,null);o.checked?d<0&&e.$set(e.form,"confirmPassword",r.concat([null])):d>-1&&e.$set(e.form,"confirmPassword",r.slice(0,d).concat(r.slice(d+1)))}else e.$set(e.form,"confirmPassword",M)}}}):"radio"==(e.showPassword?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.confirmPassword,expression:"form.confirmPassword"}],staticClass:"bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3",attrs:{id:"password",name:"password",placeholder:"",type:"radio"},domProps:{checked:e._q(e.form.confirmPassword,null)},on:{change:function(t){return e.$set(e.form,"confirmPassword",null)}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.confirmPassword,expression:"form.confirmPassword"}],staticClass:"bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3",attrs:{id:"password",name:"password",placeholder:"",type:e.showPassword?"text":"password"},domProps:{value:e.form.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.form,"confirmPassword",t.target.value)}}}),e._v(" "),t("img",{staticClass:"absolute cursor-pointer top-9 right-4 h-6 w-6",attrs:{src:r(482)("./".concat(e.eye)),alt:""},on:{click:function(t){e.showPassword=!e.showPassword}}})])]),e._v(" "),t("div",{staticClass:"lg:flex space-y-3 lg:space-y-0 justify-between items-center gap-x-10"},[t("div",{staticClass:"w-full space-y-1"},[t("label",{staticClass:"text-sm font-medium"},[e._v("Gender ")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.form.gender,expression:"form.gender"}],staticClass:"bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"gender",t.target.multiple?r:r[0])}}},[t("option",{attrs:{value:"",disabled:""}},[e._v("Select gender")]),e._v(" "),t("option",{attrs:{value:"male"}},[e._v("Male")]),e._v(" "),t("option",{attrs:{value:"female"}},[e._v("Female")])])]),e._v(" "),t("div",{staticClass:"w-full space-y-1"},[t("label",{staticClass:"text-sm font-medium"},[e._v("Date of Birth")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.dob,expression:"form.dob"}],staticClass:"bg-gray-50 rounded-md w-full outline-none py-3 border-gray-300 border pl-3",attrs:{type:"date"},domProps:{value:e.form.dob},on:{input:function(t){t.target.composing||e.$set(e.form,"dob",t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"flex justify-end items-end gap-x-3"},[t("button",{staticClass:"text-[#0BA9B9] border-[#0BA9B9] border px-3 py-2 rounded-lg",attrs:{type:"reset"}},[e._v("\n          Cancel\n        ")]),e._v(" "),t("button",{staticClass:"bg-[#0BA9B9] disabled:cursor-not-allowed disabled:opacity-25 text-white px-6 py-2 rounded-lg",attrs:{disabled:!e.isFormEmpty,type:"submit"},on:{click:function(t){return e.$bvModal.show("createUserConfirmationModal")}}},[e._v("\n          Create\n        ")])])])]),e._v(" "),t("div",[t("b-modal",{attrs:{id:"createUserConfirmationModal","hide-header":"","hide-footer":"",centered:""}},[t("section",{staticClass:"bg-white p-6 space-y-4 max-w-screen-lg rounded-md"},[t("div",[t("img",{attrs:{src:r(454),alt:"warning"}})]),e._v(" "),t("div",[t("h1",{staticClass:"font-semibold text-xl"},[e._v("Confirm")]),e._v(" "),t("p",{staticClass:"text-gray-500"},[e._v("\n            Are you sure you want to continue?\n          ")])]),e._v(" "),t("div",{staticClass:"flex justify-end items-end gap-x-3 w-full pt-6"},[t("button",{staticClass:"text-black text-sm font-medium w-full border-gray-400 border px-3 py-3 rounded-lg",on:{click:function(t){return e.$bvModal.hide("createUserConfirmationModal")}}},[e._v("\n            Cancel\n          ")]),e._v(" "),t("button",{staticClass:"bg-[#0BA9B9] text-sm disabled:cursor-not-allowed disabled:opacity-25 w-full text-white font-medium px-6 py-3 rounded-lg",attrs:{disabled:e.processing},on:{click:e.createUser}},[e._v("\n            "+e._s(e.processing?"processing":"Continue")+"\n          ")])])])]),e._v(" "),t("b-modal",{attrs:{id:"createUserSuccessModal","hide-header":"",centered:"","hide-footer":""}},[t("section",{staticClass:"bg-white p-6 space-y-4 max-w-screen-lg rounded-md"},[t("div",[t("img",{attrs:{src:r(444),alt:"warning"}})]),e._v(" "),t("div",[t("h1",{staticClass:"font-semibold text-xl"},[e._v("Success")]),e._v(" "),t("p",{staticClass:"text-gray-500"},[e._v("New user added.")])]),e._v(" "),t("div",{staticClass:"flex justify-end items-end gap-x-3 w-full pt-6"},[t("button",{staticClass:"text-black text-sm font-medium w-full border-gray-400 border px-3 py-3 rounded-lg",on:{click:function(t){return e.$bvModal.hide("createUserSuccessModal")}}},[e._v("\n            Create another\n          ")]),e._v(" "),t("button",{staticClass:"bg-[#0BA9B9] text-sm w-full text-white font-medium px-6 py-3 rounded-lg",on:{click:function(t){return e.$router.push("/dashboard/users")}}},[e._v("\n            Continue\n          ")])])])])],1)],1)}),[],!1,null,"c65faf38",null);t.default=component.exports;installComponents(component,{DashboardHeader:r(443).default})}}]);