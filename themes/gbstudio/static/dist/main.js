parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Uc/B":[function(require,module,exports) {

},{}],"Goi2":[function(require,module,exports) {

},{"./../../static/img/icon.png":[["icon.23f1042f.png","8zIB"],"8zIB"]}],"9TaG":[function(require,module,exports) {

},{"./_body.css":"Uc/B","./_nav.css":"Goi2","./_main.css":"Uc/B","./_footer.css":"Uc/B","./_code.css":"Uc/B","./_home.css":"Uc/B","./_print.css":"Uc/B"}],"epB2":[function(require,module,exports) {
"use strict";var n=e(require("./../css/main.css"));function e(n){return n&&n.__esModule?n:{default:n}}var i="Unknown OS";-1!=navigator.appVersion.indexOf("Win")&&(i="Windows"),-1!=navigator.appVersion.indexOf("Mac")&&-1==navigator.appVersion.indexOf("iPhone")&&-1==navigator.appVersion.indexOf("iPad")&&(i="MacOS"),-1!=navigator.appVersion.indexOf("X11")&&(i="UNIX"),-1!=navigator.appVersion.indexOf("Linux")&&-1==navigator.appVersion.indexOf("Android")&&(i="Linux");var o=document.getElementById("download-btn"),a=document.getElementById("download-link"),r=document.getElementById("app-screenshot"),s={windows:"https://github.com/chrismaltby/gb-studio/releases/download/v1.1.0/GB.Studio-win32-x64-squirrel-1.1.0.zip",windows32:"https://github.com/chrismaltby/gb-studio/releases/download/v1.1.0/GB.Studio-win32-ia32-squirrel-1.1.0.zip",mac:"https://github.com/chrismaltby/gb-studio/releases/download/v1.1.0/GB.Studio-darwin-x64-1.1.0.zip",deb:"https://github.com/chrismaltby/gb-studio/releases/download/v1.1.0/gb-studio_1.1.0_amd64.deb",rpm:"https://github.com/chrismaltby/gb-studio/releases/download/v1.1.0/gb-studio-1.1.0.x86_64.rpm"};if(o)switch(i){case"Windows":o.innerHTML="Download for Windows",r.src="/img/screenshot_win.png",-1!=navigator.userAgent.indexOf("WOW64")||-1!=navigator.userAgent.indexOf("Win64")?(o.innerHTML="Download for Windows 64-bit",o.href=s.windows):(o.innerHTML="Download for Windows 32-bit",o.href=s.windows32);break;case"MacOS":o.innerHTML="Download for macOS",o.href=s.mac,r.src="/img/screenshot.png";break;case"Linux":o.innerHTML="Download for Ubuntu",o.href=s.deb;var t=document.createElement("a");t.className="homepage-landing__button",t.innerHTML="Download for Redhat",t.href=s.rpm,o.parentNode.insertBefore(t,a),r.src="/img/screenshot.png";break;default:o.innerHTML="Download GB Studio",r.src="/img/screenshot.png"}
},{"./../css/main.css":"9TaG"}]},{},["epB2"], null)
//# sourceMappingURL=/dist/main.js.map