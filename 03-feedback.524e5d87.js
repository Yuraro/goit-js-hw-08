function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={};i=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var o,a={},u={};o="object"==typeof n&&n&&n.Object===Object&&n;var l="object"==typeof self&&self&&self.Object===Object&&self,f=o||l||Function("return this")();a=function(){return u.Date.now()};var c={},v={},s={},d=/\s/;s=function(e){for(var t=e.length;t--&&d.test(e.charAt(t)););return t};var m=/^\s+/;v=function(e){return e?e.slice(0,s(e)+1).replace(m,""):e};var g,p={},y={};g=(u=f).Symbol;var b={},S=Object.prototype,j=S.hasOwnProperty,h=S.toString,O=g?g.toStringTag:void 0;b=function(e){var t=j.call(e,O),n=e[O];try{e[O]=void 0;var r=!0}catch(e){}var i=h.call(e);return r&&(t?e[O]=n:delete e[O]),i};var w={},T=Object.prototype.toString;w=function(e){return T.call(e)};var x=g?g.toStringTag:void 0;y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":x&&x in Object(e)?b(e):w(e)};var N={};N=function(e){return null!=e&&"object"==typeof e};p=function(e){return"symbol"==typeof e||N(e)&&"[object Symbol]"==y(e)};var E=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,I=/^0o[0-7]+$/i,q=parseInt;c=function(e){if("number"==typeof e)return e;if(p(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=v(e);var n=k.test(e);return n||I.test(e)?q(e.slice(2),n?2:8):E.test(e)?NaN:+e};var J=Math.max,L=Math.min;r=function(e,t,n){var r,o,u,l,f,v,s=0,d=!1,m=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,s=t,l=e.apply(i,n)}function y(e){return s=e,f=setTimeout(S,t),d?p(e):l}function b(e){var n=e-v;return void 0===v||n>=t||n<0||m&&e-s>=u}function S(){var e=a();if(b(e))return j(e);f=setTimeout(S,function(e){var n=t-(e-v);return m?L(n,u-(e-s)):n}(e))}function j(e){return f=void 0,g&&r?p(e):(r=o=void 0,l)}function h(){var e=a(),n=b(e);if(r=arguments,o=this,v=e,n){if(void 0===f)return y(v);if(m)return clearTimeout(f),f=setTimeout(S,t),p(v)}return void 0===f&&(f=setTimeout(S,t)),l}return t=c(t)||0,i(n)&&(d=!!n.leading,u=(m="maxWait"in n)?J(c(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==f&&clearTimeout(f),s=0,r=v=o=f=void 0},h.flush=function(){return void 0===f?l:j(a())},h};t=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),r(e,t,{leading:o,maxWait:t,trailing:a})};const M=document.querySelector(".feedback-form"),W=M.querySelector('input[name="email"]'),$=M.querySelector('textarea[name="message"]'),D=e(t)((()=>{const e={email:W.value,message:$.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);M.addEventListener("input",D),window.addEventListener("load",(()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(W.value=e.email,$.value=e.message)})),M.addEventListener("submit",(e=>{if(e.preventDefault(),""===W.value.trim()||""===$.value.trim())return void alert("Please fill in all fields");const t={email:W.value,message:$.value};localStorage.setItem("feedback-form-state",JSON.stringify(t)),W.value="",$.value="",console.log(t)}));
//# sourceMappingURL=03-feedback.524e5d87.js.map
