/* ls-countdown.min.js */
!function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=n(s(1)),o=n(s(2));class r{constructor(t){this.validateTargetDate(t.targetDate),this.targetDate=t.targetDate,this.onStart=t.onStart,this.onStop=t.onStop,this.onTick=t.onTick,this.sufixes=t.sufixes,this.CURRENT_TIME=new i.default({})}validateTargetDate(t){if(!(t instanceof Date))throw new Error("The target date must be a valid Date object");if(t<=new Date)throw new Error("The target date must be a foward date")}stop(){this.COUNTDOWN_INTERVAL&&(clearInterval(this.COUNTDOWN_INTERVAL),"function"==typeof this.onStop&&this.onStop(Object.assign({},this.CURRENT_TIME)))}start(){this.COUNTDOWN_INTERVAL=setInterval(()=>{let t,e,s,n,o=(new Date).getTime(),r=(this.targetDate.getTime()-o)/1e3;t=r/86400,e=(r%=86400)/3600,s=(r%=3600)/60,n=r%60,t=parseInt(t>0?t>9?t:`0${t}`:"00").toString()+this.sufixes.days,e=parseInt(e>0?e>9?e:`0${e}`:"00").toString()+this.sufixes.hours,s=parseInt(s>0?s>9?s:`0${s}`:"00").toString()+this.sufixes.minutes,n=parseInt(n>0?n>9?n:`0${n}`:"00").toString()+this.sufixes.seconds,this.CURRENT_TIME=new i.default({days:t,hours:e,minutes:s,seconds:n}),"function"==typeof this.onTick&&this.onTick(Object.assign({},this.CURRENT_TIME))},1e3),"function"==typeof this.onStart&&this.onStart(Object.assign({},this.CURRENT_TIME))}changeTargetDate(t=new Date){this.validateTargetDate(t),this.stop.bind(this).call(),this.targetDate=t,this.start.bind(this).call()}}e.default=r,(t=>{t.LsCountdown=r,t.LsCountdownOptions=o.default})(window)},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor({days:t="0",hours:e="0",minutes:s="0",seconds:n="0"}){this.days=t,this.hours=e,this.minutes=s,this.seconds=n}}},function(t,e,s){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=n(s(3));e.default=class{constructor({targetDate:t=new Date,onStart:e=(()=>{}),onStop:s=(()=>{}),onTick:n=(()=>{}),sufixes:o=new i.default({})}={}){this.targetDate=t,this.onStart=e,this.onStop=s,this.onTick=n,this.sufixes=o}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor({days:t=" Días",hours:e=" Horas",minutes:s=" Mins",seconds:n=" Seg"}){this.days=t,this.hours=e,this.minutes=s,this.seconds=n}}}]);

(() => {
    document.addEventListener("DOMContentLoaded", function () {
        let currentYear = new Date().getFullYear();
        let targetDate = new Date(currentYear + 1, 0, 1);
        let onStart = () => {
            document.querySelectorAll('.countdown-item').forEach(item => item.classList.add('show'))
        }
        let onTick = ({ days, hours, minutes, seconds }) => {
            document.querySelector('.countdown-item.days').innerHTML = days;
            document.querySelector('.countdown-item.hours').innerHTML = hours;
            document.querySelector('.countdown-item.minutes').innerHTML = minutes;
            document.querySelector('.countdown-item.seconds').innerHTML = seconds;
        };
        let options = new LsCountdownOptions({ targetDate, onStart, onTick });
        let countdown = new LsCountdown(options);

        countdown.start();
        window.mycountdown = countdown;
    });
})();
