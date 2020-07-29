!function(r,t){for(var n in t)r[n]=t[n]}(exports,function(r){var t={};function n(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=r,n.c=t,n.d=function(r,t,e){n.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:e})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,t){if(1&t&&(r=n(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var o in r)n.d(e,o,function(t){return r[t]}.bind(null,o));return e},n.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(t,"a",t),t},n.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},n.p="",n(n.s=1)}([function(r,t,n){"use strict";var e=n(2);function o(r,t){return function(r,t){var n;n="passthrough"!==t.algorithm?e.createHash(t.algorithm):new f;void 0===n.write&&(n.write=n.update,n.end=n.update);s(t,n).dispatch(r),n.update||n.end("");if(n.digest)return n.digest("buffer"===t.encoding?void 0:t.encoding);var o=n.read();if("buffer"===t.encoding)return o;return o.toString(t.encoding)}(r,t=c(r,t))}(t=r.exports=o).sha1=function(r){return o(r)},t.keys=function(r){return o(r,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},t.MD5=function(r){return o(r,{algorithm:"md5",encoding:"hex"})},t.keysMD5=function(r){return o(r,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var i=e.getHashes?e.getHashes().slice():["sha1","md5"];i.push("passthrough");var u=["buffer","hex","binary","base64"];function c(r,t){t=t||{};var n={};if(n.algorithm=t.algorithm||"sha1",n.encoding=t.encoding||"hex",n.excludeValues=!!t.excludeValues,n.algorithm=n.algorithm.toLowerCase(),n.encoding=n.encoding.toLowerCase(),n.ignoreUnknown=!0===t.ignoreUnknown,n.respectType=!1!==t.respectType,n.respectFunctionNames=!1!==t.respectFunctionNames,n.respectFunctionProperties=!1!==t.respectFunctionProperties,n.unorderedArrays=!0===t.unorderedArrays,n.unorderedSets=!1!==t.unorderedSets,n.unorderedObjects=!1!==t.unorderedObjects,n.replacer=t.replacer||void 0,n.excludeKeys=t.excludeKeys||void 0,void 0===r)throw new Error("Object argument required.");for(var e=0;e<i.length;++e)i[e].toLowerCase()===n.algorithm.toLowerCase()&&(n.algorithm=i[e]);if(-1===i.indexOf(n.algorithm))throw new Error('Algorithm "'+n.algorithm+'"  not supported. supported values: '+i.join(", "));if(-1===u.indexOf(n.encoding)&&"passthrough"!==n.algorithm)throw new Error('Encoding "'+n.encoding+'"  not supported. supported values: '+u.join(", "));return n}function a(r){if("function"!=typeof r)return!1;return null!=/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(r))}function s(r,t,n){n=n||[];var e=function(r){return t.update?t.update(r,"utf8"):t.write(r,"utf8")};return{dispatch:function(t){r.replacer&&(t=r.replacer(t));var n=typeof t;return null===t&&(n="null"),this["_"+n](t)},_object:function(t){var o=Object.prototype.toString.call(t),i=/\[object (.*)\]/i.exec(o);i=(i=i?i[1]:"unknown:["+o+"]").toLowerCase();var u;if((u=n.indexOf(t))>=0)return this.dispatch("[CIRCULAR:"+u+"]");if(n.push(t),"undefined"!=typeof Buffer&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t);if("object"===i||"function"===i||"asyncfunction"===i){var c=Object.keys(t);r.unorderedObjects&&(c=c.sort()),!1===r.respectType||a(t)||c.splice(0,0,"prototype","__proto__","constructor"),r.excludeKeys&&(c=c.filter((function(t){return!r.excludeKeys(t)}))),e("object:"+c.length+":");var s=this;return c.forEach((function(n){s.dispatch(n),e(":"),r.excludeValues||s.dispatch(t[n]),e(",")}))}if(!this["_"+i]){if(r.ignoreUnknown)return e("["+i+"]");throw new Error('Unknown object type "'+i+'"')}this["_"+i](t)},_array:function(t,o){o=void 0!==o?o:!1!==r.unorderedArrays;var i=this;if(e("array:"+t.length+":"),!o||t.length<=1)return t.forEach((function(r){return i.dispatch(r)}));var u=[],c=t.map((function(t){var e=new f,o=n.slice();return s(r,e,o).dispatch(t),u=u.concat(o.slice(n.length)),e.read().toString()}));return n=n.concat(u),c.sort(),this._array(c,!1)},_date:function(r){return e("date:"+r.toJSON())},_symbol:function(r){return e("symbol:"+r.toString())},_error:function(r){return e("error:"+r.toString())},_boolean:function(r){return e("bool:"+r.toString())},_string:function(r){e("string:"+r.length+":"),e(r.toString())},_function:function(t){e("fn:"),a(t)?this.dispatch("[native]"):this.dispatch(t.toString()),!1!==r.respectFunctionNames&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this._object(t)},_number:function(r){return e("number:"+r.toString())},_xml:function(r){return e("xml:"+r.toString())},_null:function(){return e("Null")},_undefined:function(){return e("Undefined")},_regexp:function(r){return e("regex:"+r.toString())},_uint8array:function(r){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(r))},_uint8clampedarray:function(r){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(r))},_int8array:function(r){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(r))},_uint16array:function(r){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(r))},_int16array:function(r){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(r))},_uint32array:function(r){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(r))},_int32array:function(r){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(r))},_float32array:function(r){return e("float32array:"),this.dispatch(Array.prototype.slice.call(r))},_float64array:function(r){return e("float64array:"),this.dispatch(Array.prototype.slice.call(r))},_arraybuffer:function(r){return e("arraybuffer:"),this.dispatch(new Uint8Array(r))},_url:function(r){return e("url:"+r.toString())},_map:function(t){e("map:");var n=Array.from(t);return this._array(n,!1!==r.unorderedSets)},_set:function(t){e("set:");var n=Array.from(t);return this._array(n,!1!==r.unorderedSets)},_blob:function(){if(r.ignoreUnknown)return e("[blob]");throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')},_domwindow:function(){return e("domwindow")},_process:function(){return e("process")},_timer:function(){return e("timer")},_pipe:function(){return e("pipe")},_tcp:function(){return e("tcp")},_udp:function(){return e("udp")},_tty:function(){return e("tty")},_statwatcher:function(){return e("statwatcher")},_securecontext:function(){return e("securecontext")},_connection:function(){return e("connection")},_zlib:function(){return e("zlib")},_context:function(){return e("context")},_nodescript:function(){return e("nodescript")},_httpparser:function(){return e("httpparser")},_dataview:function(){return e("dataview")},_signal:function(){return e("signal")},_fsevent:function(){return e("fsevent")},_tlswrap:function(){return e("tlswrap")}}}function f(){return{buf:"",write:function(r){this.buf+=r},end:function(r){this.buf+=r},read:function(){return this.buf}}}t.writeToStream=function(r,t,n){return void 0===n&&(n=t,t={}),s(t=c(r,t),n).dispatch(r)}},function(r,t,n){"use strict";n.r(t);var e=n(0),o=n.n(e);n(3);t.default=(r,t)=>o()(t)},function(r,t){r.exports=require("crypto")},function(r,t){r.exports=require("fs")}]));