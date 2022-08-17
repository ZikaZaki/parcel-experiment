(function () {function b(e){h(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function h(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}var B={};function C(){return B}function x(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function q(e,r){h(2,arguments);var $=b(e),t=b(r),g=$.getTime()-t.getTime();return g<0?-1:g>0?1:g}function E(e,r){h(2,arguments);var t=b(e),$=b(r);return 12*(t.getFullYear()-$.getFullYear())+(t.getMonth()-$.getMonth())}function F(e,$){return h(2,arguments),b(e).getTime()-b($).getTime()}var y={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(o){return o<0?Math.ceil(o):Math.floor(o)}},G="trunc";function H(o){return o?y[o]:y[G]}function I(e,r){h(2,arguments);var $,t=b(e),a=b(r),u=q(t,a),l=Math.abs(E(t,a));if(l<1)$=0;else{1===t.getMonth()&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-u*l);var o=q(t,a)===-u;J(b(e))&&1===l&&1===q(e,a)&&(o=!1),$=u*(l-Number(o))}return 0===$?0:$}function J(e){h(1,arguments);var r=b(e);return K(r).getTime()===L(r).getTime()}function K(e){h(1,arguments);var r=b(e);return r.setHours(23,59,59,999),r}function L(e){h(1,arguments);var r=b(e),t=r.getMonth();return r.setFullYear(r.getFullYear(),t+1,0),r.setHours(23,59,59,999),r}function N(e,r,$){h(2,arguments);var i=F(e,r)/1e3;return H(null==$?void 0:$.roundingMethod)(i)}var O={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},P=function(o,e,t){var n,a=O[o];return n="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=t&&t.addSuffix?t.comparison&&t.comparison>0?"in "+n:n+" ago":n};function v(t){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=r.width?String(r.width):t.defaultWidth;return t.formats[e]||t.formats[t.defaultWidth]}}var Q={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},R={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},S={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},T={date:v({formats:Q,defaultWidth:"full"}),time:v({formats:R,defaultWidth:"full"}),dateTime:v({formats:S,defaultWidth:"full"})};var U={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},W=function(e,t,a,o){return U[e]};function j(t){return function(a,l){var e;if("formatting"===(null!=l&&l.context?String(l.context):"standalone")&&t.formattingValues){var n=t.defaultFormattingWidth||t.defaultWidth,r=null!=l&&l.width?String(l.width):n;e=t.formattingValues[r]||t.formattingValues[n]}else{var u=t.defaultWidth,i=null!=l&&l.width?String(l.width):t.defaultWidth;e=t.values[i]||t.values[u]}return e[t.argumentCallback?t.argumentCallback(a):a]}}var X={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Y={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Z={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},aa={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ba={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ca={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},da=function(n,e){var a=Number(n),r=a%100;if(r>20||r<10)switch(r%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd";}return a+"th"},ea={ordinalNumber:da,era:j({values:X,defaultWidth:"wide"}),quarter:j({values:Y,defaultWidth:"wide",argumentCallback:function(n){return n-1}}),month:j({values:Z,defaultWidth:"wide"}),day:j({values:aa,defaultWidth:"wide"}),dayPeriod:j({values:ba,defaultWidth:"wide",formattingValues:ca,defaultFormattingWidth:"wide"})};function k(t){return function(r){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=a.width,n=e&&t.matchPatterns[e]||t.matchPatterns[t.defaultMatchWidth],u=r.match(n);if(!u)return null;var l,$=u[0],f=e&&t.parsePatterns[e]||t.parsePatterns[t.defaultParseWidth],i=Array.isArray(f)?ga(f,function(t){return t.test($)}):fa(f,function(t){return t.test($)});return l=t.valueCallback?t.valueCallback(i):i,{value:l=a.valueCallback?a.valueCallback(l):l,rest:r.slice($.length)}}}function fa(t,r){for(var a in t)if(t.hasOwnProperty(a)&&r(t[a]))return a}function ga(t,r){for(var a=0;a<t.length;a++)if(r(t[a]))return a}function ha(a){return function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=r.match(a.matchPattern);if(!l)return null;var t=l[0],u=r.match(a.parsePattern);if(!u)return null;var n=a.valueCallback?a.valueCallback(u[0]):u[0];return{value:n=e.valueCallback?e.valueCallback(n):n,rest:r.slice(t.length)}}}var ia=/^(\d+)(th|st|nd|rd)?/i,ja=/\d+/i,ka={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},la={any:[/^b/i,/^(a|c)/i]},ma={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},na={any:[/1/i,/2/i,/3/i,/4/i]},oa={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},pa={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},qa={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ra={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},sa={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ta={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ua={ordinalNumber:ha({matchPattern:ia,parsePattern:ja,valueCallback:function(a){return parseInt(a,10)}}),era:k({matchPatterns:ka,defaultMatchWidth:"wide",parsePatterns:la,defaultParseWidth:"any"}),quarter:k({matchPatterns:ma,defaultMatchWidth:"wide",parsePatterns:na,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:k({matchPatterns:oa,defaultMatchWidth:"wide",parsePatterns:pa,defaultParseWidth:"any"}),day:k({matchPatterns:qa,defaultMatchWidth:"wide",parsePatterns:ra,defaultParseWidth:"any"}),dayPeriod:k({matchPatterns:sa,defaultMatchWidth:"any",parsePatterns:ta,defaultParseWidth:"any"})};var va={code:"en-US",formatDistance:P,formatLong:T,formatRelative:W,localize:ea,match:ua,options:{weekStartsOn:0,firstWeekContainsDate:1}};function wa(t){return z({},t)}function z(r,e){if(null==r)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r}var A=1440,xa=2520,w=43200,ya=86400;function za(e,r,o){var s,a;h(2,arguments);var t=C(),i=null!==(s=null!==(a=null==o?void 0:o.locale)&&void 0!==a?a:t.locale)&&void 0!==s?s:va;if(!i.formatDistance)throw new RangeError("locale must contain formatDistance property");var n=q(e,r);if(isNaN(n))throw new RangeError("Invalid time value");var $,c,l=z(wa(o),{addSuffix:Boolean(null==o?void 0:o.addSuffix),comparison:n});n>0?($=b(r),c=b(e)):($=b(e),c=b(r));var f,u=N(c,$),d=(x(c)-x($))/1e3,m=Math.round((u-d)/60);if(m<2)return null!=o&&o.includeSeconds?u<5?i.formatDistance("lessThanXSeconds",5,l):u<10?i.formatDistance("lessThanXSeconds",10,l):u<20?i.formatDistance("lessThanXSeconds",20,l):u<40?i.formatDistance("halfAMinute",0,l):u<60?i.formatDistance("lessThanXMinutes",1,l):i.formatDistance("xMinutes",1,l):0===m?i.formatDistance("lessThanXMinutes",1,l):i.formatDistance("xMinutes",m,l);if(m<45)return i.formatDistance("xMinutes",m,l);if(m<90)return i.formatDistance("aboutXHours",1,l);if(m<A){var V=Math.round(m/60);return i.formatDistance("aboutXHours",V,l)}if(m<xa)return i.formatDistance("xDays",1,l);if(m<w){var M=Math.round(m/A);return i.formatDistance("xDays",M,l)}if(m<ya)return f=Math.round(m/w),i.formatDistance("aboutXMonths",f,l);if((f=I(c,$))<12){var p=Math.round(m/w);return i.formatDistance("xMonths",p,l)}var _=f%12,D=Math.floor(f/12);return _<3?i.formatDistance("aboutXYears",D,l):_<9?i.formatDistance("overXYears",D,l):i.formatDistance("almostXYears",D+1,l)}function Aa(e,r){return h(1,arguments),za(e,Date.now(),r)}var Ba="1996-09-13 10:00:00";document.body.textContent="".concat(Aa(new Date(Ba))," ago");})();