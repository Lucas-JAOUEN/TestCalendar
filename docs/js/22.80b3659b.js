(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"658e":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-markdown"},[a("q-markdown"),a("example-title",{attrs:{title:"Month View"}}),a("example-viewer",{attrs:{title:"Basic",file:"MonthViewBasic","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Dark",file:"MonthViewDark","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Color",file:"MonthViewColor","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"First Day Monday",file:"MonthViewMondayFirstDay","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"5 Day Work Week",file:"MonthViewFiveDayWorkWeek","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Hide Header",file:"MonthViewHideHeader","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Disabled Days",file:"MonthViewDisabledDays","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\nWhen the property `disabled-days` has an array of disabled days, you can hook into the `day-style` property to change the background color of the disabled day.\n      ")])],1),a("example-viewer",{attrs:{title:"Disabled Before/After",file:"MonthViewDisabledBeforeAfter","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\nIn this example, the `disabled-before` is set to the last day of the previous month and the `disabled-after` is set to the first day of the next month. Essentially, this disables all dates but the current month.\n      ")])],1),a("example-viewer",{attrs:{title:"Disabled Weekdays",file:"MonthViewDisabledWeekdays","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\nIn this example, the `disabled-weekdays` is set to disable the weekends.\n      ")])],1),a("example-viewer",{attrs:{title:"Now",file:"MonthViewNow","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Work Weeks",file:"MonthViewWorkWeekNumbers","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\n`show-work-weeks` is available only for month view.\n      ")])],1),a("example-viewer",{attrs:{title:"Short Weekday Label",file:"MonthViewShortWeekdayLabel","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Short Month Label",file:"MonthViewShortMonthLabel","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Show Day of Year Label",file:"MonthViewShowDayOfYearLabel","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\n`show-day-of-year-label` is available only for month view.\n      ")])],1),a("example-viewer",{attrs:{title:"Day Height",file:"MonthViewDayHeight","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\n`day-height` is available only for month view.\nThe example below is setting the `day-height` to `100`, the default is `0`, which tells the calendar component to figure out it's own height.\n      ")])],1),a("example-viewer",{attrs:{title:"Prev/Next",file:"MonthViewPrevNext","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Swipe",file:"MonthViewSwipe","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Selected Dates",file:"MonthViewSelectedDates","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\nClick on dates to toggled selected on/off.\n      ")])],1),a("example-viewer",{attrs:{title:"Multi-Day Selection (contiguous)",file:"MonthViewSelection","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\nThe example below shows how to use the QCalendar to create a multi-day selector. The critical aspect of this is the `selected-start-end-dates` property. This takes an array of two dates (the first should be less or equal to the last). This property really doesn't do much, except to keep the calendar reactive, so that the `day-style` property can be used to style the selected days.\n\nFor the example below, click a day, and while holding the mouse down, move to a different day. Keep in mind, this is just one way of handling multi-day selection. if you needed swipe navigation on a mobile, you could modify the code to have independent click on start and end days.\n\nKeep in mind that the functionality below won't work with swipe actions.\n      ")])],1),a("example-viewer",{attrs:{title:"Slot (day)",file:"MonthViewSlots","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\nThe `#day` slot allows you to write anything into the body of the day. To avoid writing on top of the `day-label` add the css class `.q-event` to your item which adds a top margin (and also works for mini-mode).\n\nFor slots that return `day`, `interval` or `timestamp`, it looks like this:\n```js\n{\n  date: '',       // YYYY-mm-dd\n  time: '',       // 00:00:00 (optional)\n  year: 0,        // YYYY\n  month: 0,       // mm (Jan = 1, etc)\n  day: 0,         // day of the month\n  weekday: 0,     // week day\n  hour: 0,        // 24-hr\n  minute: 0,      // mm\n  doy: 0,         // day of year\n  workweek: 0,    // workweek number\n  hasDay: false,  // if this timestamp is supposed to have a date\n  hasTime: false, // if this timestamp is supposed to have a time\n  past: false,    // if timestamp is in the past (based on `now` property)\n  current: false, // if timestamp is current date (based on `now` property)\n  future: false,  // if timestamp is in the future (based on `now` property)\n  disabled: false // if timestamp is disabled\n}\n```\n      ")])],1),a("example-viewer",{attrs:{title:"Slot (head-day)",file:"MonthViewSlotHeadDay","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Slot (week)",file:"MonthViewWeekSlot","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\nThe example below uses the **#week** slot (v1.3.2). It's a bit more difficult to work with than the **#day-body** slot, but allows you to have your devland events displayed in a contiguous manner. Check out the sources to see how it is accomplished.\n::: warning\nDo not mix #day-body and #week slots or you will have overlapping results.\n:::\n      ")])],1),a("example-viewer",{attrs:{title:"Theme",file:"MonthViewTheme","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Locale",file:"MonthViewLocale","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Toolbar",file:"MonthViewToolbar","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\nQCalendar does not come with a navigation toolbar out-of-the-box. This keeps QCalendar less opinionated of how you want your calendar to look.\n\nThis example is only one of many ways you can style your own QCalendar.\n      ")])],1)],1)},o=[],i=a("fe7d"),l=a("8669"),n=a("384e"),r={name:"MonthView",components:{ExampleTitle:i["a"]},data:function(){return{tempToc:[],locationUrl:"https://github.com/quasarframework/quasar-ui-qcalendar/tree/dev/demo/src/examples/",jsPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qcalendar@".concat(n["m"],"/dist/index.umd.min.js")],cssPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qcalendar@".concat(n["m"],"/dist/index.min.css"),"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.0/css/all.css"]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("Month View"),this.addToToc("Basic",2),this.addToToc("Dark",2),this.addToToc("Color",2),this.addToToc("First Day Monday",2),this.addToToc("5 Day Work Week",2),this.addToToc("Hide Header",2),this.addToToc("Disabled Days",2),this.addToToc("Disabled Before/After",2),this.addToToc("Disabled Weekdays",2),this.addToToc("Now",2),this.addToToc("Work Weeks",2),this.addToToc("Short Weekday Label",2),this.addToToc("Short Month Label",2),this.addToToc("Show Day of Year Label",2),this.addToToc("Day Height",2),this.addToToc("Prev/Next",2),this.addToToc("Swipe",2),this.addToToc("Selected Dates",2),this.addToToc("Multi-Day Selection",2),this.addToToc("Slot (day)",2),this.addToToc("Slot (head-day)",2),this.addToToc("Slot (week)",2),this.addToToc("Theme",2),this.addToToc("Locale",2),this.addToToc("Toolbar",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(t){this.$store.commit("common/toc",t)}}},methods:{addToToc:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=t;e>1&&(a="example-"+a);var s=Object(l["b"])(a);this.tempToc.push({children:[],id:s,label:t,level:e})}}},h=r,d=a("2877"),c=Object(d["a"])(h,s,o,!1,null,null,null);e["default"]=c.exports},8669:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return i}));a("a481");function s(t){var e=document.createElement("textarea");e.className="fixed-top",e.value=t,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}function o(t){var e=window.location.origin+window.location.pathname+"#"+t,a=document.getElementById(t);a&&(a.id=""),window.location.hash="#"+t,a&&setTimeout((function(){a.id=t}),300),s(e),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function i(t){return encodeURIComponent(String(t).trim().replace(/\s+/g,"-"))}},fe7d:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:t.slugifiedTitle},on:{click:function(e){return t.copyHeading(t.slugifiedTitle)}}},[t._v(t._s(t.title))])},o=[],i=a("8669"),l={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return Object(i["b"])(this.title)}},methods:{copyHeading:i["a"]}},n=l,r=a("2877"),h=Object(r["a"])(n,s,o,!1,null,null,null);e["a"]=h.exports}}]);