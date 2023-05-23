"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[95768],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),p=d(a),u=r,k=p["".concat(o,".").concat(u)]||p[u]||h[u]||l;return a?n.createElement(k,s(s({ref:e},m),{},{components:a})):n.createElement(k,s({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,s=new Array(l);s[0]=p;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var d=2;d<l;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},89221:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"Klock Matchers",slug:"klock-matchers.html",sidebar_label:"Klock"},s=void 0,i={unversionedId:"assertions/klock",id:"version-5.6/assertions/klock",title:"Klock Matchers",description:"Matchers for the Klock library, provided by the kotest-assertions-klock module.",source:"@site/versioned_docs/version-5.6/assertions/klock.md",sourceDirName:"assertions",slug:"/assertions/klock-matchers.html",permalink:"/docs/assertions/klock-matchers.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.6/assertions/klock.md",tags:[],version:"5.6",frontMatter:{title:"Klock Matchers",slug:"klock-matchers.html",sidebar_label:"Klock"},sidebar:"assertions",previous:{title:"Konform",permalink:"/docs/assertions/konform-matchers.html"},next:{title:"Compiler",permalink:"/docs/assertions/compiler-matchers.html"}},o={},d=[],m={toc:d};function h(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Matchers for the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/korlibs/klock"},"Klock")," library, provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"kotest-assertions-klock")," module."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Matcher"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date.shouldHaveSameYear(otherDate)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the date has the same year as the given date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date.shouldHaveSameMonth(otherDate)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the date has the same month as the given date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date.shouldHaveSameDay(otherDate)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the date has the same day of the month as the given date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date.shouldBeBefore(otherDate)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the date is before the given date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date.shouldBeAfter(otherDate)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the date is after the given date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date.shouldBeBetween(firstDate, secondDate)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the date is between firstdate and seconddate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date.shouldHaveYear(year)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct year.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date.shouldHaveMonth(month)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct month.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date.shouldHaveDay(day)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct day of year.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date.shouldHaveHour(hour)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct hour.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date.shouldHaveMinute(Minute)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct minute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date.shouldHaveSecond(second)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct second.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time.shouldHaveSameHoursAs(time)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the same hours as the given time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time.shouldHaveHours(hours)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the given hours.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time.shouldHaveSameMinutesAs(time)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the same minutes as the given time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time.shouldHaveMinutes(minutes)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the given minutes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time.shouldHaveSameSeconds(time)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the same seconds as the given time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time.shouldHaveSeconds(seconds)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the given seconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time.shouldHaveSameMillisecondsAs(time)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the same milliseconds as the given time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time.shouldHaveMilliseconds(millis)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the given millis.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time.shouldBeBefore(time)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the time is before the given time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time.shouldBeAfter(time)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the time is after the given time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time.shouldBeBetween(time, time)")),(0,r.kt)("td",{parentName:"tr",align:null},"Asserts that the time is between the two given times.")))))}h.isMDXComponent=!0}}]);