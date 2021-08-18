(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[184],{"7b20":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"HHh LpR fFf"},on:{scroll:e.onScroll}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",[e._v("\n        QCalendar "),a("span",{staticClass:"text-subtitle2"},[e._v("v"+e._s(e.version))])]),a("q-space"),a("q-btn",{attrs:{flat:"",round:"",icon:e.$q.dark.isActive?"brightness_2":"brightness_5"},on:{click:function(t){return e.$q.dark.toggle()}}}),e.$q.screen.width>500?a("div",[e._v("Quasar v"+e._s(e.$q.version))]):e._e(),a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Table of Contents"},on:{click:function(t){e.rightDrawerOpen=!e.rightDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1)],1)],1),a("q-drawer",{staticClass:"menu",attrs:{"show-if-above":"",bordered:"","aria-label":"Menu"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("div",{staticClass:"col-12"},[a("q-expansion-item",{staticClass:"menu",attrs:{"expand-separator":"","default-opened":"",group:"somegroup",icon:"fas fa-cogs",label:"QCalendar",caption:"QCalendar Examples"}},[a("q-separator"),a("q-list",{attrs:{dense:""}},[a("q-item",{attrs:{to:"/examples/day-view",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fas fa-calendar-day"}})],1),a("q-item-section",[a("q-item-label",[e._v("Day View")])],1)],1),a("q-item",{attrs:{to:"/examples/week-view",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fas fa-calendar-week"}})],1),a("q-item-section",[a("q-item-label",[e._v("Week View")])],1)],1),a("q-item",{attrs:{to:"/examples/month-view",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fas fa-calendar-alt"}})],1),a("q-item-section",[a("q-item-label",[e._v("Month View")])],1)],1),a("q-item",{attrs:{to:"/examples/month-view-mini-mode",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"far fa-calendar"}})],1),a("q-item-section",[a("q-item-label",[e._v("Month View (mini-mode)")])],1)],1),a("q-item",{attrs:{to:"/examples/scheduler-view",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fas fa-calendar"}})],1),a("q-item-section",[a("q-item-label",[e._v("Scheduler View")])],1)],1),a("q-item",{attrs:{to:"/examples/resource-view",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fas fa-grip-horizontal"}})],1),a("q-item-section",[a("q-item-label",[e._v("Resource View")])],1)],1),a("q-item",{attrs:{to:"/examples/agenda-view",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"view_agenda"}})],1),a("q-item-section",[a("q-item-label",[e._v("Agenda View")])],1)],1),a("q-item",{attrs:{to:"/demos/planner",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fas fa-th"}})],1),a("q-item-section",[a("q-item-label",[e._v("Planner")])],1)],1)],1)],1),a("q-expansion-item",{attrs:{"expand-separator":"",group:"somegroup",icon:"fas fa-link",label:"Essential Links"}},[a("q-separator"),a("essential-links")],1),a("q-separator")],1)]),a("q-drawer",{ref:"drawer",staticClass:"toc",attrs:{"show-if-above":"",side:"right",bordered:"","aria-label":"Table of Contents"},model:{value:e.rightDrawerOpen,callback:function(t){e.rightDrawerOpen=t},expression:"rightDrawerOpen"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-list",{attrs:{dense:""}},e._l(e.toc,(function(t){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{clickable:"",dense:"",active:e.activeToc===t.id},on:{click:function(a){return e.scrollTo(t.id)}}},[t.level>1?a("q-item-section",{attrs:{side:""}},[e._v(" • ")]):e._e(),a("q-item-section",{class:"toc-item toc-level-"+t.level},[e._v(e._s(t.label))])],1)})),1)],1)],1),a("q-page-container",[a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1),a("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[a("q-btn",{class:{"text-black bg-grey-4":e.$q.dark.isActive,"text-white bg-primary":!e.$q.dark.isActive},attrs:{fab:"",icon:"keyboard_arrow_up"}})],1)],1)},r=[],n=(a("fb6a"),a("d3b7"),a("e6cf"),a("ded3")),o=a.n(n),s=a("2f62"),l=a("0831"),c=a("384e"),m=l["a"].setScrollPosition,d={name:"ExamplesLayout",components:{"essential-links":function(){return a.e(1).then(a.bind(null,"4bd0"))}},data:function(){return{version:c["e"],leftDrawerOpen:this.$q.platform.is.desktop,rightDrawerOpen:this.$q.platform.is.desktop,activeToc:0}},mounted:function(){var e=this;if(""!==location.hash){var t=location.hash.slice(1);setTimeout((function(){e.scrollTo(t)}),200)}},computed:o()({},Object(s["b"])({toc:"common/toc"})),methods:{scrollTo:function(e){var t=this;this.activeToc=e;var a=document.getElementById(e);a&&setTimeout((function(){t.scrollPage(a)}),200)},scrollPage:function(e){var t=e.offsetTop-50;m(window,t,500)},onScroll:function(e){var t=e.position;!0!==this.scrollingPage&&this.updateActiveToc(t)},updateActiveToc:function(e){var t,a=this.toc;for(var i in a){var r=a[i],n=document.getElementById(r.id);if(null!==n&&n.offsetTop>=e+50){void 0===t&&(t=r.id);break}}void 0!==t&&(this.activeToc=t)}}},f=d,p=a("2877"),q=a("4d5a"),v=a("e359"),u=a("65c6"),b=a("9c40"),w=a("6ac5"),h=a("2c91"),g=a("0016"),k=a("9404"),_=a("3b73"),Q=a("eb85"),x=a("1c1c"),T=a("66e5"),D=a("4074"),O=a("0170"),y=a("4983"),C=a("09e3"),S=a("5096"),$=a("714f"),A=a("eebe"),E=a.n(A),I=Object(p["a"])(f,i,r,!1,null,null,null);t["default"]=I.exports;E()(I,"components",{QLayout:q["a"],QHeader:v["a"],QToolbar:u["a"],QBtn:b["a"],QToolbarTitle:w["a"],QSpace:h["a"],QIcon:g["a"],QDrawer:k["a"],QExpansionItem:_["a"],QSeparator:Q["a"],QList:x["a"],QItem:T["a"],QItemSection:D["a"],QItemLabel:O["a"],QScrollArea:y["a"],QPageContainer:C["a"],QPageScroller:S["a"]}),E()(I,"directives",{Ripple:$["a"]})}}]);