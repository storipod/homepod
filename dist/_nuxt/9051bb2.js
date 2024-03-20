(window.webpackJsonp=window.webpackJsonp||[]).push([[24,10],{505:function(t,e,n){"use strict";n.r(e);var l={props:{src:String},data:function(){return{isFullScreen:!1}},methods:{toggleImage:function(){this.isFullScreen=!this.isFullScreen}}},r=n(18),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("img",{staticClass:"cursor-pointer rounded-full h-10 w-10",attrs:{src:t.src,alt:""},on:{click:t.toggleImage}}),t._v(" "),t.isFullScreen?e("div",{staticClass:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",on:{click:function(e){return e.target!==e.currentTarget?null:t.toggleImage.apply(null,arguments)}}},[e("img",{staticClass:"max-w-full max-h-full transition-transform duration-500",class:{"scale-100":t.isFullScreen,"scale-0":!t.isFullScreen},attrs:{alt:"",src:t.src}})]):t._e()])}),[],!1,null,"28662c52",null);e.default=component.exports},554:function(t,e,n){"use strict";n.r(e);n(55),n(77),n(96),n(64),n(54);var l={components:{ImageZoom:n(505).default},data:function(){return{selectedPeople:[]}},props:{usersList:{type:Array,default:function(){return[]}},loadingUsers:{type:Boolean,default:!1}},computed:{indeterminate:function(){return this.selectedPeople.length>0&&this.selectedPeople.length<this.usersList.length}},methods:{removeUser:function(t){this.$bvModal.show("removeUserConfirmation")},toggleUserStatus:function(t){t.isActive?this.$bvModal.show("userSuspendModal"):this.$bvModal.show("activateUserConfirmation"),this.openDropdown=null},generateInitials:function(t,e){return"".concat(t.charAt(0).toUpperCase()).concat(e.charAt(0).toUpperCase())}}},r=n(18),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return t.usersList.length&&!t.loadingUsers?e("div",{staticClass:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"},[e("div",{staticClass:"relative"},[t.selectedPeople.length>0?e("div",{staticClass:"absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12"},[e("button",{staticClass:"inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white",attrs:{type:"button"}},[t._v("\n        Bulk edit\n      ")]),t._v(" "),e("button",{staticClass:"inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white",attrs:{type:"button"}},[t._v("\n        Delete all\n      ")])]):t._e(),t._v(" "),e("table",{staticClass:"min-w-full table-fixed divide-y divide-gray-300"},[e("thead",{},[e("tr",[e("th",{staticClass:"relative px-7 sm:w-12 sm:px-6",attrs:{scope:"col"}},[e("input",{staticClass:"absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",attrs:{type:"checkbox",indeterminate:t.indeterminate},domProps:{checked:t.indeterminate||t.selectedPeople.length===t.usersList.length},on:{change:function(e){t.selectedPeople=e.target.checked?t.usersList.map((function(p){return p.email})):[]}}})]),t._v(" "),e("th",{staticClass:"py-3.5 pr-3 text-left text-sm font-semibold text-gray-900",attrs:{scope:"col"}},[t._v("\n            Avatar\n          ")]),t._v(" "),e("th",{staticClass:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",attrs:{scope:"col"}},[t._v("\n            Username\n          ")]),t._v(" "),e("th",{staticClass:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",attrs:{scope:"col"}},[t._v("\n            First name\n          ")]),t._v(" "),e("th",{staticClass:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",attrs:{scope:"col"}},[t._v("\n            Last name\n          ")]),t._v(" "),e("th",{staticClass:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",attrs:{scope:"col"}},[t._v("\n            Interest(s)\n          ")]),t._v(" "),e("th",{staticClass:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",attrs:{scope:"col"}},[t._v("\n            Phone no.\n          ")]),t._v(" "),e("th",{staticClass:"px-3 py-3.5 text-center text-sm font-semibold text-gray-900",attrs:{scope:"col"}},[t._v("\n            Email\n          ")]),t._v(" "),e("th",{staticClass:"px-3 py-3.5 text-center text-sm font-semibold text-gray-900",attrs:{scope:"col"}},[t._v("\n            No. of Stori(s)\n          ")]),t._v(" "),e("th",{staticClass:"px-3 py-3.5 text-center text-sm font-semibold text-gray-900",attrs:{scope:"col"}},[t._v("\n            Actions\n          ")])])]),t._v(" "),e("tbody",{staticClass:"divide-y divide-gray-200 bg-white"},t._l(t.usersList,(function(l,r){var o,c,d,m,x,v,h,f;return e("tr",{key:r,staticClass:"odd:bg-gray-50",class:[t.selectedPeople.includes(l.email)&&"bg-gray-50"]},[e("td",{staticClass:"relative px-7 sm:w-12 sm:px-6"},[t.selectedPeople.includes(l.email)?e("div",{staticClass:"absolute inset-y-0 left-0 w-0.5 bg-indigo-600"}):t._e(),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedPeople,expression:"selectedPeople"}],staticClass:"absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",attrs:{type:"checkbox"},domProps:{value:l.email,checked:Array.isArray(t.selectedPeople)?t._i(t.selectedPeople,l.email)>-1:t.selectedPeople},on:{change:function(e){var n=t.selectedPeople,r=e.target,o=!!r.checked;if(Array.isArray(n)){var c=l.email,d=t._i(n,c);r.checked?d<0&&(t.selectedPeople=n.concat([c])):d>-1&&(t.selectedPeople=n.slice(0,d).concat(n.slice(d+1)))}else t.selectedPeople=o}}})]),t._v(" "),e("td",{class:["whitespace-nowrap py-4 pr-3 text-sm font-medium",t.selectedPeople.includes(l.email)?"text-indigo-600":"text-gray-900"]},[l.profilePicture?e("image-zoom",{staticClass:"h-10 w-10",attrs:{src:l.profilePicture}}):e("div",{staticClass:"h-10 w-10 rounded-full p-2 bg-gray-500 text-white flex justify-center items-center"},[t._v(t._s(t.generateInitials(l.fname,l.lname)))])],1),t._v(" "),e("td",{staticClass:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},[e("nuxt-link",{staticClass:"font-medium text-gray-800 no-underline",attrs:{to:"/dashboard/users/".concat(l.id)}},[t._v(t._s(null!==(o=l.handle)&&void 0!==o?o:"N/A"))])],1),t._v(" "),e("td",{staticClass:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},[e("nuxt-link",{staticClass:"no-underline text-gray-800",attrs:{to:"/dashboard/users/".concat(l.id)}},[t._v(t._s(null!==(c=l.fname)&&void 0!==c?c:"N/A"))])],1),t._v(" "),e("td",{staticClass:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},[e("nuxt-link",{staticClass:"no-underline text-gray-800",attrs:{to:"/dashboard/users/".concat(l.id)}},[t._v(t._s(null!==(d=l.lname)&&void 0!==d?d:"N/A"))])],1),t._v(" "),e("td",{staticClass:"whitespace-nowrap px-3 py-4 text-sm text-[#6941C6] font-semibold"},[e("span",{staticClass:"bg-[#F9F5FF] rounded-full px-3 py-2"},[t._v(t._s(null!==(m=l.interest)&&void 0!==m?m:"N/A"))]),t._v(" "),l.interest_count?e("span",{staticClass:"bg-[#EEF4FF] text-[#6941C6] rounded-full px-3 py-2"},[t._v(t._s(null!==(x=l.interest_count)&&void 0!==x?x:"N/A"))]):t._e()]),t._v(" "),e("td",{staticClass:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},[e("nuxt-link",{staticClass:"no-underline text-gray-800",attrs:{to:"/dashboard/users/".concat(l.id)}},[t._v(t._s(null!==(v=l.phone)&&void 0!==v?v:"N/A"))])],1),t._v(" "),e("td",{staticClass:"whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500"},[e("nuxt-link",{staticClass:"no-underline text-gray-800",attrs:{to:"/dashboard/users/".concat(l.id)}},[t._v(t._s(null!==(h=l.email)&&void 0!==h?h:"N/A"))])],1),t._v(" "),e("td",{staticClass:"whitespace-nowrap px-3 text-center py-4 text-sm text-gray-500"},[e("nuxt-link",{staticClass:"no-underline text-gray-800",attrs:{to:"/dashboard/users/".concat(l.id)}},[t._v(t._s(null!==(f=l.stori)&&void 0!==f?f:"N/A"))])],1),t._v(" "),e("td",{staticClass:"whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3 relative"},[e("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",variant:"link",right:"","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("img",{staticClass:"cursor-pointer",attrs:{src:n(294),alt:""}})]},proxy:!0}],null,!0)},[t._v(" "),e("b-dropdown-item",[t._v("Edit")]),t._v(" "),e("b-dropdown-item",{on:{click:function(e){return t.removeUser(l)}}},[t._v("Remove User")]),t._v(" "),e("b-dropdown-item",{on:{click:function(e){return t.toggleUserStatus(l)}}},[t._v(t._s(l.isActive?"Suspend":"Unsuspend"))])],1)],1)])})),0)])])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);