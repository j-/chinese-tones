(this["webpackJsonpchinese-tones"]=this["webpackJsonpchinese-tones"]||[]).push([[0],{10:function(e,t,l){},12:function(e,t,l){"use strict";l.r(t);var n=l(0),a=l(3),r=l(1),c=Object.freeze(new Set(["a","e","i","o","u"])),u=(l(10),function(e){var t=e.onClickButton,l=e.currentVowel;return n.createElement("div",{className:"ToneButtons btn-group d-flex",role:"group","aria-label":"Tone buttons"},n.createElement("button",{type:"button",className:"btn btn-dark btn-lg",onClick:t,style:{color:"hsl(0, 100%, 80%)"},value:1},n.createElement("big",null,(l||"\u25cc")+"\u0304"),n.createElement("br",null),n.createElement("small",null,"1")),n.createElement("button",{type:"button",className:"btn btn-dark btn-lg",onClick:t,style:{color:"hsl(50, 100%, 80%)"},value:2},n.createElement("big",null,(l||"\u25cc")+"\u0301"),n.createElement("br",null),n.createElement("small",null,"2")),n.createElement("button",{type:"button",className:"btn btn-dark btn-lg",onClick:t,style:{color:"hsl(100, 100%, 80%)"},value:3},n.createElement("big",null,(l||"\u25cc")+"\u030c"),n.createElement("br",null),n.createElement("small",null,"3")),n.createElement("button",{type:"button",className:"btn btn-dark btn-lg",onClick:t,style:{color:"hsl(200, 100%, 80%)"},value:4},n.createElement("big",null,(l||"\u25cc")+"\u0300"),n.createElement("br",null),n.createElement("small",null,"4")))}),o=function(e){var t=e.value;return n.createElement("div",{className:"card card-body"},n.createElement("output",{className:"display-4"},t.replace(/([aeiou])1/gi,"$1\u0304").replace(/([aeiou])2/gi,"$1\u0301").replace(/([aeiou])3/gi,"$1\u030c").replace(/([aeiou])4/gi,"$1\u0300").replace(/v/g,"u\u0308\u030c").replace(/V/g,"U\u0308\u030c")||n.createElement(n.Fragment,null,"\u200d")))},s=window.self===window.top,m=function(){var e=n.useRef(null),t=n.useState("nv ha2i zi"),l=Object(r.a)(t,2),a=l[0],m=l[1],i=n.useState(null),b=Object(r.a)(i,2),E=b[0],p=b[1],v=n.useCallback((function(e){m(e.currentTarget.value)}),[]),d=n.useCallback((function(t){t.preventDefault();var l=e.current;l&&(l.focus(),document.execCommand("insertText",!1,t.currentTarget.value))}),[]),g=n.useCallback((function(t){var l=e.current;l&&p(function(e,t){var l=e.charAt(t);return void 0===l?null:c.has(l)?l:null}(l.value,null===l.selectionStart?l.value.length:l.selectionStart-1))}),[]);return n.createElement("div",{className:"Convert"},n.createElement("div",{className:"form-group my-4"},n.createElement("label",{htmlFor:"Convert-input",className:"sr-only"},"Pinyin"),n.createElement("br",null),n.createElement("input",{ref:e,id:"Convert-input",className:"form-control form-control-lg",type:"text",placeholder:"Enter pinyin",value:a,onChange:v,onSelect:g,autoFocus:s})),n.createElement("div",{className:"my-4"},n.createElement(u,{onClickButton:d,currentVowel:E})),n.createElement("div",{className:"my-4"},n.createElement(o,{value:a})))},i=function(){return n.createElement("div",{className:"App container my-5"},n.createElement("a",{href:"https://skeoh.com/",className:"text-secondary"},"\u2190 skeoh.com"),n.createElement("h1",null,"Chinese Tones"),n.createElement("section",{className:"my-5"},n.createElement(m,null)))},b=(l(11),document.getElementById("root"));Object(a.render)(n.createElement(i,null),b)},4:function(e,t,l){e.exports=l(12)}},[[4,1,2]]]);
//# sourceMappingURL=main.0e55e5ba.chunk.js.map