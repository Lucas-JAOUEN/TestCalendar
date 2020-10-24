(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"543e":function(e,t,a){"use strict";var n=a("e9ba"),i=a.n(n);i.a},"5acd":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return e=Math.floor(e),e<10?"0"+e:e+""}},a2d6:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"column",staticStyle:{overflow:"hidden"}},[a("q-dialog",{model:{value:e.displayEvent,callback:function(t){e.displayEvent=t},expression:"displayEvent"}},[a("div",[e.event?a("q-card",[a("q-toolbar",{class:e.displayClasses(e.event),staticStyle:{"min-width":"400px"},style:e.displayStyles(e.event)},[a("q-toolbar-title",[e._v("\n            "+e._s(e.event.title)+"\n          ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",color:"white",icon:"delete"},on:{click:function(t){return e.deleteEvent(e.event)}}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",color:"white",icon:"edit"},on:{click:function(t){return e.editEvent(e.event)}}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",color:"white",icon:"close"}})],1),a("q-card-section",{staticClass:"inset-shadow"},[e.event.allDay?a("div",{staticClass:"text-caption"},[e._v(e._s(e.getEventDate(e.event)))]):e._e(),e._v("\n          "+e._s(e.event.details)+"\n          "),e.event.time?a("div",{staticClass:"text-caption"},[a("div",{staticClass:"row full-width justify-start",staticStyle:{"padding-top":"12px"}},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"row full-width justify-start"},[a("div",{staticClass:"col-5",staticStyle:{"padding-left":"20px"}},[a("strong",[e._v("Start Time:")])]),a("div",{staticClass:"col-7"},[e._v("\n                    "+e._s(e.event.time)+"\n                  ")])]),a("div",{staticClass:"row full-width justify-start"},[a("div",{staticClass:"col-5",staticStyle:{"padding-left":"20px"}},[a("strong",[e._v("End Time:")])]),a("div",{staticClass:"col-7"},[e._v("\n                    "+e._s(e.getEndTime(e.event))+"\n                  ")])]),a("div",{staticClass:"row full-width justify-start"},[a("div",{staticClass:"col-5",staticStyle:{"padding-left":"20px"}},[a("strong",[e._v("Duration:")])]),a("div",{staticClass:"col-7"},[e._v("\n                    "+e._s(e.convertDurationTime(e.event.duration))+"\n                  ")])])])])]):e._e()]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1):e._e()],1)]),a("q-dialog",{attrs:{"no-backdrop-dismiss":""},model:{value:e.addEvent,callback:function(t){e.addEvent=t},expression:"addEvent"}},[a("div",[e.contextDay?a("q-form",{ref:"event",on:{submit:e.onSubmit,reset:e.onReset}},[e.addEvent?a("q-card",{staticStyle:{width:"400px"}},[a("q-toolbar",{staticClass:"bg-primary text-white"},[a("q-toolbar-title",[e._v("\n              "+e._s(e.addOrUpdateEvent)+" Event\n            ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",color:"white",icon:"close"}})],1),a("q-card-section",{staticClass:"inset-shadow"},[a("q-input",{attrs:{label:"Title",rules:[function(e){return e&&e.length>0||"Field cannot be empty"}],autofocus:""},model:{value:e.eventForm.title,callback:function(t){e.$set(e.eventForm,"title",t)},expression:"eventForm.title"}}),a("q-input",{attrs:{label:"Details"},model:{value:e.eventForm.details,callback:function(t){e.$set(e.eventForm,"details",t)},expression:"eventForm.details"}}),a("q-field",{staticStyle:{"padding-bottom":"20px"},model:{value:e.eventForm.allDay,callback:function(t){e.$set(e.eventForm,"allDay",t)},expression:"eventForm.allDay"}},[a("q-checkbox",{attrs:{label:"All-Day event?"},model:{value:e.eventForm.allDay,callback:function(t){e.$set(e.eventForm,"allDay",t)},expression:"eventForm.allDay"}})],1),e.eventForm.allDay?a("q-input",{staticStyle:{"padding-bottom":"20px"},attrs:{label:"Enter date",mask:"####-##-##",color:"blue-6",outlined:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{model:{value:e.showDateScrollerAllDay,callback:function(t){e.showDateScrollerAllDay=t},expression:"showDateScrollerAllDay"}},[a("q-scroller",{style:e.scrollerPopupStyle160,attrs:{view:"date",locale:e.locale,"hour24-format":!0,"rounded-borders":!0,"border-color":"#2196f3","bar-color":"#2196f3","text-color":"white",color:"primary","inner-text-color":"primary","inner-color":"white"},on:{close:function(){e.showDateScrollerAllDay=!1}},model:{value:e.eventForm.dateTimeStart,callback:function(t){e.$set(e.eventForm,"dateTimeStart",t)},expression:"eventForm.dateTimeStart"}})],1)],1)]},proxy:!0}],null,!1,3100782098),model:{value:e.eventForm.dateTimeStart,callback:function(t){e.$set(e.eventForm,"dateTimeStart",t)},expression:"eventForm.dateTimeStart"}}):a("div",[a("q-input",{ref:"dateTimeStart",attrs:{label:"Event start date and time",mask:"####-##-## ##:##",rules:[function(t){return e.checkDateTimeStart()||"Start time cannot come after end time"}],outlined:"",color:"blue-6"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{model:{value:e.showDateTimeScrollerStart,callback:function(t){e.showDateTimeScrollerStart=t},expression:"showDateTimeScrollerStart"}},[a("q-scroller",{style:e.scrollerPopupStyle280,attrs:{view:"date-time",locale:e.locale,"hour24-format":!0,"rounded-borders":!0,"border-color":"#2196f3","bar-color":"#2196f3",color:"primary","text-color":"white","inner-color":"white","inner-text-color":"primary "},on:{close:function(){e.showDateTimeScrollerStart=!1}},model:{value:e.eventForm.dateTimeStart,callback:function(t){e.$set(e.eventForm,"dateTimeStart",t)},expression:"eventForm.dateTimeStart"}})],1)],1)]},proxy:!0}],null,!1,3793576423),model:{value:e.eventForm.dateTimeStart,callback:function(t){e.$set(e.eventForm,"dateTimeStart",t)},expression:"eventForm.dateTimeStart"}}),a("q-input",{ref:"dateTimeEnd",attrs:{label:"Event end date and time",mask:"####-##-## ##:##",rules:[function(t){return e.checkDateTimeEnd()||"Start time cannot come after end time"}],color:"blue-6",outlined:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{model:{value:e.showDateTimeScrollerEnd,callback:function(t){e.showDateTimeScrollerEnd=t},expression:"showDateTimeScrollerEnd"}},[a("q-scroller",{style:e.scrollerPopupStyle280,attrs:{view:"date-time",locale:e.locale,"hour24-format":!0,"rounded-borders":!0,"border-color":"#2196f3","bar-color":"#2196f3",color:"primary","text-color":"white","inner-color":"white","inner-text-color":"primary "},on:{close:function(){e.showDateTimeScrollerEnd=!1}},model:{value:e.eventForm.dateTimeEnd,callback:function(t){e.$set(e.eventForm,"dateTimeEnd",t)},expression:"eventForm.dateTimeEnd"}})],1)],1)]},proxy:!0}],null,!1,3480984584),model:{value:e.eventForm.dateTimeEnd,callback:function(t){e.$set(e.eventForm,"dateTimeEnd",t)},expression:"eventForm.dateTimeEnd"}})],1),a("q-input",{staticStyle:{"padding-bottom":"20px"},attrs:{label:"Icon",outlined:"",clearable:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"extension"}},[a("q-popup-proxy",{model:{value:e.showIconPicker,callback:function(t){e.showIconPicker=t},expression:"showIconPicker"}},[a("q-icon-picker",{staticStyle:{height:"300px",width:"300px","background-color":"white"},attrs:{filter:e.eventForm.icon,"icon-set":"fontawesome-v5",tooltips:"",pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},model:{value:e.eventForm.icon,callback:function(t){e.$set(e.eventForm,"icon",t)},expression:"eventForm.icon"}})],1)],1)]},proxy:!0}],null,!1,839296791),model:{value:e.eventForm.icon,callback:function(t){e.$set(e.eventForm,"icon",t)},expression:"eventForm.icon"}}),a("q-input",{attrs:{label:"Color",outlined:"",clearable:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[a("q-popup-proxy",[a("q-color",{model:{value:e.eventForm.bgcolor,callback:function(t){e.$set(e.eventForm,"bgcolor",t)},expression:"eventForm.bgcolor"}})],1)],1)]},proxy:!0}],null,!1,2928914025),model:{value:e.eventForm.bgcolor,callback:function(t){e.$set(e.eventForm,"bgcolor",t)},expression:"eventForm.bgcolor"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{flat:"",label:"OK",type:"submit",color:"primary"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",type:"reset",color:"primary"}})],1)],1):e._e()],1):e._e()],1)]),a("div",{staticClass:"calendar-container",style:e.containerStyle},[a("q-calendar",{directives:[{name:"touch-swipe",rawName:"v-touch-swipe.mouse.left.right",value:e.handleSwipe,expression:"handleSwipe",modifiers:{mouse:!0,left:!0,right:!0}}],key:e.keyValue,ref:"calendar",staticClass:"calendar",attrs:{locale:e.locale,"max-days":e.maxDays,bordered:e.bordered,"interval-style":e.modifiedStyle,"day-style":e.modifiedStyle,"resource-style":e.modifiedStyle,animated:"","transition-prev":"slide-right","transition-next":"slide-left","drag-over-func":e.onDragOver,"drop-func":e.onDrop,theme:e.theme,view:e.calendarView,weekdays:e.weekdays,"interval-minutes":60*e.intervalRangeStep,"interval-start":e.intervalStart,"interval-count":e.intervalCount,"hour24-format":e.hour24Format,"short-month-label":e.shortMonthLabel,"show-day-of-year-label":e.showDayOfYearLabel,"hide-header":e.hideHeader,"no-scroll":e.noScroll,"short-weekday-label":e.shortWeekdayLabel,"short-interval-label":e.shortIntervalLabel,"interval-height":e.intervalHeight,"resource-height":e.resourceHeight,"resource-width":e.resourceWidth,"day-height":e.dayHeight,"show-month-label":e.showMonthLabel,"show-work-weeks":e.showWorkWeeks,"no-default-header-btn":e.noDefaultHeaderBtn,"no-default-header-text":e.noDefaultHeaderText,"enable-theme":!0===e.enableTheme,resources:e.resources,"day-padding":"35px 0 0 0"},on:{change:e.onChanged,moved:e.onMoved,"click:date2":e.onDateChanged,"click:interval2":e.addEventMenu,"click:time2":e.addEventMenu,"click:day2":e.addEventMenu,"click:week2":e.addEventMenu,"click:resource2":e.resourceClicked,"click:resource:day2":e.resourceDayClicked},scopedSlots:e._u([{key:"day",fn:function(t){var n=t.timestamp;return[e.calendarView.indexOf("agenda")<0?[e._l(e.getEvents(n.date),(function(t,n){return[a("q-badge",{key:n,class:e.badgeClasses(t,"day"),staticStyle:{width:"100%",cursor:"pointer",height:"14px","max-height":"14px"},style:e.badgeStyles(t,"day"),attrs:{draggable:!0},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.showEvent(t)}},nativeOn:{dragstart:function(a){return function(a){return e.onDragStart(a,t)}(a)},dragend:function(a){return function(a){return e.onDragEnd(a,t)}(a)},dragenter:function(a){return function(a){return e.onDragEnter(a,t)}(a)},touchmove:function(e){}}},[t.icon?a("q-icon",{staticClass:"q-mr-xs",attrs:{name:t.icon}}):e._e(),a("span",{staticClass:"ellipsis"},[e._v(e._s(t.title))])],1)]}))]:e._e()]}},{key:"day-header",fn:function(t){var n=t.timestamp;return[e.calendarView.indexOf("agenda")<0?a("div",{staticClass:"row justify-center"},[e._l(e.eventsMap[n.date],(function(t,n){return[t.time?a("q-badge",{key:n,staticClass:"q-ma-xs self-end",class:e.badgeClasses(t,"header"),staticStyle:{width:"10px","max-width":"10px",height:"10px","max-height":"10px"},style:e.badgeStyles(t,"header")}):a("q-badge",{key:n,class:e.badgeClasses(t,"header"),staticStyle:{width:"100%",cursor:"pointer",height:"14px","max-height":"14px"},style:e.badgeStyles(t,"header"),attrs:{draggable:!0},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.showEvent(t)}},nativeOn:{dragstart:function(a){return function(a){return e.onDragStart(a,t)}(a)},dragend:function(a){return function(a){return e.onDragEnd(a,t)}(a)},dragenter:function(a){return function(a){return e.onDragEnter(a,t)}(a)},touchmove:function(e){}}},[t.icon?a("q-icon",{staticClass:"q-mr-xs",attrs:{name:t.icon}}):e._e(),a("span",{staticClass:"ellipsis"},[e._v(e._s(t.title))])],1)]}))],2):e._e()]}},{key:"day-body",fn:function(t){var n=t.timestamp,i=t.timeStartPos,r=t.timeDurationHeight;return[e.calendarView.indexOf("agenda")<0?[e._l(e.getEvents(n.date),(function(t,n){return[t.time?a("q-badge",{key:n,staticClass:"my-event justify-center",class:e.badgeClasses(t,"body"),style:e.badgeStyles(t,"body",i,r),attrs:{draggable:!0},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.showEvent(t)}},nativeOn:{dragstart:function(a){return function(a){return e.onDragStart(a,t)}(a)},dragend:function(a){return function(a){return e.onDragEnd(a,t)}(a)},dragenter:function(a){return function(a){return e.onDragEnter(a,t)}(a)},touchmove:function(e){}}},[t.icon?a("q-icon",{staticClass:"q-mr-xs",attrs:{name:t.icon}}):e._e(),a("span",{staticClass:"ellipsis"},[e._v(e._s(t.title))])],1):e._e()]}))]:[e._l(e.getAgenda(n),(function(t){return[a("div",{key:n.date+t.time,staticClass:"justify-start q-ma-sm shadow-5 bg-grey-6",staticStyle:{overflow:"hidden"},attrs:{label:t.time}},[t.avatar?a("div",{staticClass:"row justify-center",staticStyle:{"margin-top":"30px",width:"100%"}},[a("q-avatar",{staticStyle:{"margin-top":"-25px","margin-bottom":"10px","font-size":"60px","max-height":"50px"}},[a("img",{staticStyle:{border:"#9e9e9e solid 5px"},attrs:{src:t.avatar}})])],1):e._e(),a("div",{staticClass:"col-12 q-px-sm"},[a("strong",[e._v(e._s(t.time))])]),t.desc?a("div",{staticClass:"col-12 q-px-sm",staticStyle:{"font-size":"10px"}},[e._v("\n                "+e._s(t.desc)+"\n              ")]):e._e()])]}))]]}},{key:"intervals-header",fn:function(t){return[a("div",{staticClass:"fit flex justify-center items-end"},[a("span",{staticClass:"q-calendar-daily__interval-text"},[e._v(e._s(e.showOffset(t)))])])]}}]),model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)],1)},i=[],r=(a("4160"),a("c975"),a("fb6a"),a("a434"),a("ac1f"),a("8a79"),a("5319"),a("1276"),a("159b"),a("4082")),o=a.n(r),s=a("9523"),l=a.n(s),d=a("ded3"),c=a.n(d),u=a("2f62"),m=(a("466d"),function(e){return!!e&&!!e.match(/^(#|(rgb|hsl)a?\()/)}),v=[{title:"April Fools Day",details:"Everything is funny as long as it is happening to someone else",date:"2019-04-01",bgcolor:"orange"},{title:"Sisters Birthday",details:"Buy a nice present",date:"2019-04-04",bgcolor:"green",icon:"fas fa-birthday-cake"},{title:"Meeting",details:"Time to pitch my idea to the company",date:"2019-04-08",time:"10:00",duration:120,bgcolor:"red",icon:"fas fa-handshake"},{title:"Lunch",details:"Company is paying!",date:"2019-04-08",time:"11:30",duration:90,bgcolor:"teal",icon:"fas fa-hamburger"},{title:"Visit mom",details:"Always a nice chat with mom",date:"2019-04-20",time:"17:00",duration:90,bgcolor:"blue-grey",icon:"fas fa-car"},{title:"Conference",details:"Teaching Javascript 101",date:"2019-04-22",time:"08:00",duration:540,bgcolor:"blue",icon:"fas fa-chalkboard-teacher"},{title:"Girlfriend",details:"Meet GF for dinner at Swanky Restaurant",date:"2019-04-22",time:"19:00",duration:180,bgcolor:"teal",icon:"fas fa-utensils"},{title:"Fishing",details:"Time for some weekend R&R",date:"2019-04-27",bgcolor:"purple",icon:"fas fa-fish",days:2},{title:"Vacation",details:"Trails and hikes, going camping! Don't forget to bring bear spray!",date:"2019-04-29",bgcolor:"purple",icon:"fas fa-plane",days:5}],h=a("5acd"),p=a("bd4c"),g=a("bc78"),f=a("0967"),y=a("d882"),b=a("384e"),w=(a("9b5a"),{title:"",details:"",allDay:!1,dateTimeStart:"",dateTimeEnd:"",icon:"",bgcolor:"#0000FF"}),x={name:"PageIndex",data:function(){return{keyValue:0,direction:"next",weekdays:[0,1,2,3,4,5,6],disabledDays:["2019-04-02","2019-04-03","2019-04-04","2019-04-05"],addEvent:!1,contextDay:null,eventForm:c()({},w),displayEvent:!1,event:null,events:[],gmt:"",dragging:!1,draggedEvent:null,ignoreNextSwipe:!1,showDateScrollerAllDay:!1,showDateTimeScrollerStart:!1,showDateTimeScrollerEnd:!1,resources:[{label:"John"},{label:"Mary"},{label:"Susan"},{label:"Olivia"},{label:"Board Room"},{label:"Room-1"},{label:"Room-2"}],agenda:{1:[{time:"08:00",avatar:"https://cdn.quasar.dev/img/boy-avatar.png",desc:"Meeting with CEO"},{time:"08:30",avatar:"https://cdn.quasar.dev/img/avatar.png",desc:"Meeting with HR"},{time:"10:00",avatar:"https://cdn.quasar.dev/img/avatar1.jpg",desc:"Meeting with Karen"}],2:[{time:"11:30",avatar:"https://cdn.quasar.dev/img/avatar2.jpg",desc:"Meeting with Alisha"},{time:"17:00",avatar:"https://cdn.quasar.dev/img/avatar3.jpg",desc:"Meeting with Sarah"}],3:[{time:"08:00",desc:"Stand-up SCRUM",avatar:"https://cdn.quasar.dev/img/material.png"},{time:"09:00",avatar:"https://cdn.quasar.dev/img/boy-avatar.png"},{time:"10:00",desc:"Sprint planning",avatar:"https://cdn.quasar.dev/img/material.png"},{time:"13:00",avatar:"https://cdn.quasar.dev/img/avatar1.jpg"}],4:[{time:"09:00",avatar:"https://cdn.quasar.dev/img/avatar3.jpg"},{time:"10:00",avatar:"https://cdn.quasar.dev/img/avatar2.jpg"},{time:"13:00",avatar:"https://cdn.quasar.dev/img/material.png"}],5:[{time:"08:00",avatar:"https://cdn.quasar.dev/img/boy-avatar.png"},{time:"09:00",avatar:"https://cdn.quasar.dev/img/avatar2.jpg"},{time:"09:30",avatar:"https://cdn.quasar.dev/img/avatar4.jpg"},{time:"10:00",avatar:"https://cdn.quasar.dev/img/avatar5.jpg"},{time:"11:30",avatar:"https://cdn.quasar.dev/img/material.png"},{time:"13:00",avatar:"https://cdn.quasar.dev/img/avatar6.jpg"},{time:"13:30",avatar:"https://cdn.quasar.dev/img/avatar3.jpg"},{time:"14:00",avatar:"https://cdn.quasar.dev/img/linux-avatar.png"},{time:"14:30",avatar:"https://cdn.quasar.dev/img/avatar.png"},{time:"15:00",avatar:"https://cdn.quasar.dev/img/boy-avatar.png"},{time:"15:30",avatar:"https://cdn.quasar.dev/img/avatar2.jpg"},{time:"16:00",avatar:"https://cdn.quasar.dev/img/avatar6.jpg"}]},showIconPicker:!1,pagination:{itemsPerPage:35,page:0}}},mounted:function(){this.$root.$on("calendar:next",this.calendarNext),this.$root.$on("calendar:prev",this.calendarPrev),this.$root.$on("calendar:today",this.calendarToday),this.events=v,this.updateFormatters()},beforeDestroy:function(){this.$root.$off("calendar:next",this.calendarNext),this.$root.$off("calendar:prev",this.calendarPrev),this.$root.$off("calendar:today",this.calendarToday)},computed:c()(c()({},Object(u["b"])({locale:"calendar/locale",titlebarHeight:"common/titlebarHeight",maxDays:"calendar/maxDays",bordered:"calendar/bordered",fiveDayWorkWeek:"calendar/fiveDayWorkWeek",firstDayMonday:"calendar/firstDayMonday",shortMonthLabel:"calendar/shortMonthLabel",showDayOfYearLabel:"calendar/showDayOfYearLabel",shortWeekdayLabel:"calendar/shortWeekdayLabel",shortIntervalLabel:"calendar/shortIntervalLabel",hour24Format:"calendar/hour24Format",hideHeader:"calendar/hideHeader",noScroll:"calendar/noScroll",showMonthLabel:"calendar/showMonthLabel",showWorkWeeks:"calendar/showWorkWeeks",noDefaultHeaderBtn:"calendar/noDefaultHeaderBtn",noDefaultHeaderText:"calendar/noDefaultHeaderText",intervalRange:"calendar/intervalRange",intervalRangeStep:"calendar/intervalRangeStep",intervalHeight:"calendar/intervalHeight",resourceHeight:"calendar/resourceHeight",resourceWidth:"calendar/resourceWidth",dayHeight:"calendar/dayHeight",enableTheme:"calendar/enableTheme",theme:"calendar/theme"})),{},{intervalStart:function(){return this.intervalRange.min*(1/this.intervalRangeStep)},intervalCount:function(){return(this.intervalRange.max-this.intervalRange.min)*(1/this.intervalRangeStep)},selectedDate:{get:function(){return this.$store.state.calendar.selectedDate},set:function(e){this.$store.commit("calendar/selectedDate",e)}},calendarView:{get:function(){return this.$store.state.calendar.calendarView},set:function(e){this.$store.commit("calendar/calendarView",e)}},containerStyle:function(){var e={};return"month"===this.calendarView||this.calendarView.endsWith("resource")?e.height="auto":e.height="calc(100vh - ".concat(this.titlebarHeight,"px)"),e.width="auto",e},eventsMap:function(){var e={};return this.events.forEach((function(t){return(e[t.date]=e[t.date]||[]).push(t)})),e},addOrUpdateEvent:function(){return this.contextDay&&this.contextDay.bgcolor?"Update":"Add"},scrollerPopupStyle160:function(){return this.$q.screen.lt.sm?{width:"100vw",height:"100vh"}:{maxHeight:"400px",height:"400px",width:"160px"}},scrollerPopupStyle280:function(){return this.$q.screen.lt.sm?{width:"100vw",height:"100vh"}:{maxHeight:"400px",height:"400px",width:"280px"}}}),watch:{fiveDayWorkWeek:function(){this.fiveDayWorkWeek?(this.weekdays=[1,2,3,4,5],this.view="5day"):("5day"===this.view&&(this.view="month"),this.firstDayMonday?this.weekdays=[1,2,3,4,5,6,0]:this.weekdays=[0,1,2,3,4,5,6])},firstDayMonday:function(){this.fiveDayWorkWeek?(this.weekdays=[1,2,3,4,5],this.view="5day"):("5day"===this.view&&(this.view="month"),this.firstDayMonday?this.weekdays=[1,2,3,4,5,6,0]:this.weekdays=[0,1,2,3,4,5,6])},locale:function(){this.updateFormatters()}},methods:{calendarNext:function(){this.$refs.calendar.next()},calendarPrev:function(){this.$refs.calendar.prev()},calendarToday:function(e){this.selectedDate=e},modifiedStyle:function(e){var t=e;return"resource"in e&&(t=e.timestamp),!0===t.disabled?{backgroundColor:"#efefef!important",cursor:"not-allowed"}:{}},onChanged:function(e){},onMoved:function(e){},getEvents:function(e){for(var t=b["a"].parseTimestamp(e),a=[],n=0;n<this.events.length;++n){var i=!1,r=this.events[n];if(r.date===e){if(void 0!==r.time&&a.length>0)for(var o=b["a"].parseTimestamp(r.date+" "+r.time),s=b["a"].addToDate(o,{minute:r.duration}),l=0;l<a.length;++l){var d=a[l];if(void 0!==d.time){var c=b["a"].parseTimestamp(d.date+" "+d.time),u=b["a"].addToDate(c,{minute:d.duration});if(b["a"].isBetweenDates(o,c,u)||b["a"].isBetweenDates(s,c,u)){d.side="left",r.side="right",a.push(r),i=!0;break}}}i||(r.side=void 0,a.push(r))}else if(r.days){var m=b["a"].parseTimestamp(r.date),v=b["a"].addToDate(m,{day:r.days});b["a"].isBetweenDates(t,m,v)&&(a.push(r),i=!0)}}return a},checkDateTimeStart:function(){if(this.$refs.dateTimeEnd.resetValidation(),this.eventForm.dateTimeStart&&this.eventForm.dateTimeEnd){var e=b["a"].parseTimestamp(this.eventForm.dateTimeStart),t=b["a"].parseTimestamp(this.eventForm.dateTimeEnd),a=b["a"].getDayIdentifier(e),n=b["a"].getDayIdentifier(t);if(a<n)return!0;if(a>n)return!1;var i=b["a"].getTimeIdentifier(e),r=b["a"].getTimeIdentifier(t);return i<=r}return!1},checkDateTimeEnd:function(e){if(this.$refs.dateTimeStart.resetValidation(),this.eventForm.dateTimeStart&&this.eventForm.dateTimeEnd){var t=b["a"].parseTimestamp(this.eventForm.dateTimeEnd),a=b["a"].parseTimestamp(this.eventForm.dateTimeStart),n=b["a"].getDayIdentifier(t),i=b["a"].getDayIdentifier(a);if(n>i)return!0;if(n<i)return!1;var r=b["a"].getTimeIdentifier(t),o=b["a"].getTimeIdentifier(a);return r>=o}return!1},resetForm:function(){this.$set(this,"eventForm",c()({},w))},showEvent:function(e){this.calendarView.indexOf("agenda")<0&&(this.event=e,this.displayEvent=!0)},getEndTime:function(e){var t=b["a"].parseTimestamp(e.date+" "+e.time);return t=b["a"].addToDate(t,{minute:e.duration}),t=b["a"].getTime(t),t},getEventDate:function(e){var t=e.date.split("-"),a=new Date(t[0],t[1]-1,t[2]);return this.dateFormatter.format(a)},badgeClasses:function(e,t){var a,n=m(e.bgcolor),i="header"===t;return a={},l()(a,"text-white bg-".concat(e.bgcolor),!n),l()(a,"full-width",!i&&(!e.side||"full"===e.side)),l()(a,"left-side",!i&&"left"===e.side),l()(a,"right-side",!i&&"right"===e.side),a},badgeStyles:function(e,t,a,n){var i={};return m(e.bgcolor)&&(i["background-color"]=e.bgcolor,i.color=g["a"].luminosity(e.bgcolor)>.5?"black":"white"),a&&(i.top=a(e.time)+"px",i.position="absolute",void 0!==e.side?(i.width="50%","right"===e.side&&(i.left="50%")):i.width="100%"),n&&(i.height=n(e.duration)+"px"),i["align-items"]="flex-start",i},displayClasses:function(e){var t;return t={},l()(t,"bg-".concat(e.bgcolor),!m(e.bgcolor)),l()(t,"text-white",!m(e.bgcolor)),t},displayStyles:function(e){var t={};return m(e.bgcolor)&&(t["background-color"]=e.bgcolor,t.color=g["a"].luminosity(e.bgcolor)>.5?"black":"white"),t},onDateChanged:function(e){e.scope,e.event;this.calendarView.indexOf("scheduler")>-1?this.calendarView="day-scheduler":this.calendarView.indexOf("agenda")>-1?this.calendarView="day-agenda":this.calendarView="day"},resourceClicked:function(e){e.scope,e.event},resourceDayClicked:function(e){e.scope,e.event},addEventMenu:function(e){var t=e.scope;e.event;if(!(!0===t.timestamp.disabled||this.calendarView.indexOf("scheduler")>-1||this.calendarView.indexOf("agenda")>-1)){var a;if(this.resetForm(),this.contextDay=c()({},t.timestamp),!0===this.contextDay.hasTime){a=this.adjustTimestamp(this.contextDay);var n=b["a"].addToDate(a,{hour:1});this.eventForm.dateTimeEnd=b["a"].getDateTime(n)}else a=b["a"].parseTimestamp(this.contextDay.date+" 00:00");this.eventForm.dateTimeStart=b["a"].getDateTime(a),this.eventForm.allDay=!1===this.contextDay.hasTime,this.eventForm.bgcolor="#0000FF",this.addEvent=!0}},editEvent:function(e){var t;if(this.resetForm(),this.contextDay=c()({},e),e.time){t=b["a"].parseTimestamp(e.date+" "+e.time);var a=b["a"].addToDate(t,{minute:e.duration});this.eventForm.dateTimeEnd=b["a"].getDateTime(a)}else t=b["a"].parseTimestamp(this.contextDay.date+" 00:00");this.eventForm.dateTimeStart=b["a"].getDateTime(t),this.eventForm.allDay=!e.time,this.eventForm.bgcolor=e.bgcolor,this.eventForm.icon=e.icon,this.eventForm.title=e.title,this.eventForm.details=e.details,this.addEvent=!0},deleteEvent:function(e){var t=this.findEventIndex(e);t>=0&&this.events.splice(t,1)},findEventIndex:function(e){for(var t=0;t<this.events.length;++t)if(e.title===this.events[t].title&&e.details===this.events[t].details&&e.date===this.events[t].date)return t},getDuration:function(e,t,a){var n=b["a"].makeDateTime(b["a"].parseTimestamp(e)),i=b["a"].makeDateTime(b["a"].parseTimestamp(t)),r=p["b"].getDateDiff(i,n,a);return r},convertDurationTime:function(e){var t=e,a=Math.floor(t/60/24),n=t/60,i=Math.floor(n),r=Math.floor(n-24*a),o=60*(n-i),s=Math.round(o);return(a>0?a+" days and ":"")+(r>0?r+" hour(s) and ":"")+s+" minute(s)."},onSubmit:function(){this.saveEvent()},onReset:function(){},saveEvent:function(){var e=this;this.$refs.event.validate().then((function(t){if(t){e.addEvent=!1;var a=c()({},e.eventForm),n=!1;e.contextDay.bgcolor&&(n=!0);var i={title:a.title,details:a.details,icon:a.icon,bgcolor:a.bgcolor,date:String(a.dateTimeStart).slice(0,10).replace(/\//g,"-")};if(!1===a.allDay&&(i.time=String(a.dateTimeStart).slice(11,16),i.duration=e.getDuration(a.dateTimeStart,a.dateTimeEnd,"minutes")),!0===n){var r=e.findEventIndex(e.contextDay);r>=0&&e.events.splice(r,1,c()({},i))}else e.events.push(i);e.contextDay=null}}))},showOffset:function(e){if(0!==e.length){var t=Object(h["a"])(new Date(this.getTimestampString(e[0])).getTimezoneOffset()/60);return isNaN(t)?"":"GMT-"+t}},adjustTimestamp:function(e){return e.minute=e.minute<15||e.minute>=45?0:30,e.time=b["a"].getTime(e),e},getTimestampString:function(e){return b["a"].getDate(e)+" "+b["a"].getTime(e)},updateFormatters:function(){try{this.dateFormatter=new Intl.DateTimeFormat(this.locale||void 0,{weekday:this.shortWeekdayLabel?"short":"long",month:this.shortMonthLabel?"short":"long",day:"numeric",year:"numeric",timeZone:"UTC"})}catch(e){this.dateFormatter=void 0}},handleSwipe:function(e){var t=e.evt,a=o()(e,["evt"]);!1===this.dragging&&(a.duration>=30&&!1===this.ignoreNextSwipe?"right"===a.direction?this.calendarPrev():"left"===a.direction&&this.calendarNext():this.ignoreNextSwipe=!1),Object(y["l"])(t)},onDragEnter:function(e,t){Object(y["i"])(e)},onDragStart:function(e,t){this.dragging=!0,this.draggedEvent=t,Object(y["k"])(e)},onDragEnd:function(e,t){Object(y["l"])(e),this.resetDrag()},onDragOver:function(e,t,a){return"day"===a?(Object(y["l"])(e),this.draggedEvent.date!==t.date):"interval"===a?(Object(y["l"])(e),this.draggedEvent.date!==t.date&&this.draggedEvent.time!==t.time):void 0},onDrop:function(e,t,a){e.preventDefault(),e.stopPropagation(),"day"===a?(this.draggedEvent.date=t.date,this.draggedEvent.side=void 0):"interval"===a&&(this.draggedEvent.date=t.date,this.draggedEvent.time=t.time,this.draggedEvent.side=void 0)},resetDrag:function(){this.draggedEvent=void 0,this.dragging=!1,f["b"].is.desktop&&(this.ignoreNextSwipe=!0)},getAgenda:function(e){return this.agenda[parseInt(e.weekday,10)]}}},D=x,S=(a("543e"),a("2877")),k=a("9989"),T=a("24e8"),E=a("f09f"),F=a("65c6"),q=a("6ac5"),C=a("9c40"),_=a("a370"),$=a("4b7e"),M=a("0378"),O=a("27f9"),j=a("8572"),H=a("8f8e"),P=a("0016"),I=a("7cbe"),W=a("b498"),V=a("58a8"),R=a("cb32"),L=a("7f67"),N=a("12c5"),Q=a("eebe"),A=a.n(Q),B=Object(S["a"])(D,n,i,!1,null,null,null);t["default"]=B.exports;A()(B,"components",{QPage:k["a"],QDialog:T["a"],QCard:E["a"],QToolbar:F["a"],QToolbarTitle:q["a"],QBtn:C["a"],QCardSection:_["a"],QCardActions:$["a"],QForm:M["a"],QInput:O["a"],QField:j["a"],QCheckbox:H["a"],QIcon:P["a"],QPopupProxy:I["a"],QColor:W["a"],QBadge:V["a"],QAvatar:R["a"]}),A()(B,"directives",{ClosePopup:L["a"],TouchSwipe:N["a"]})},e9ba:function(e,t,a){}}]);