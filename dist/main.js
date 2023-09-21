(()=>{"use strict";var e={239:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([e.id,"header {\n    max-width: 1100px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    padding: 20px 80px;\n}\n\nheader .logo {\n    font-size: 1.2rem;\n    font-weight: bold;\n}\n\nnav ul {\n    display: flex;\n}\n\nnav ul li {\n    margin: 0 5px;\n}\n\nnav ul li a {\n    cursor: pointer;\n    padding: 0 20px;\n}",""]);const s=i},424:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([e.id,"h1 {\n    font-size: 2.2rem;\n    font-weight: bold;\n}\n\nh2 {\n    font-size: 1.6rem;\n    font-weight: bold;\n}\n\nh3 {\n    font-size: 1.5rem;\n}\n\nh4 {\n    font-size: 1.3rem;\n}\n\nh5 {\n    font-size: 1.2rem;\n}\n\nh6 {\n    font-size: 1.1rem;\n}",""]);const s=i},917:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},i=[],s=0;s<e.length;s++){var l=e[s],c=o.base?l[0]+o.base:l[0],d=r[c]||0,u="".concat(c," ").concat(d);r[c]=d+1;var p=t(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=a(f,o);o.byIndex=s,n.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=t(r[i]);n[s].references--}for(var l=o(e,a),c=0;c<r.length;c++){var d=t(r[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}r=l}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),a=t.n(o),r=t(569),i=t.n(r),s=t(565),l=t.n(s),c=t(216),d=t.n(c),u=t(589),p=t.n(u),f=t(917),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var m=t(424),g={};g.styleTagTransform=p(),g.setAttributes=l(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=d(),n()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const b=function(e){!function(e){document.querySelector("main .content").innerHTML=`\n    <h1>${e.name}</h1>\n    <img src="${e.imgSrc}" alt="${e.imgAlt}" width="300px">\n    \x3c!-- Credit: ${e.imgSrc} --\x3e\n  \n    <h2>Description</h2>\n    <p>${e.description}</p>\n  \n    <h2>Ingredients</h2>\n    <ul class="recipe-ingredients">\n    </ul>\n  \n    <h2>Steps</h2>\n    <ol class="recipe-steps">\n    </ol>`,function(e){const n=document.querySelector(".content .recipe-steps");e.forEach((e=>{const t=document.createElement("li");t.textContent=e,n.appendChild(t)}))}(e.ingredients),function(e){const n=document.querySelector(".content .recipe-ingredients");e.forEach((e=>{const t=document.createElement("li");t.textContent=e,n.appendChild(t)}))}(e.steps)}(e)},y=[{id:0,name:"Burger",imgSrc:"https://images.unsplash.com/photo-1605789538467-f715d58e03f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",imgAlt:"Burger Image",description:"This is a very tasty burger. The perfect burger. A flat round mass of minced meat or vegetables, which is fried and often eaten in a bread roll.",ingredients:["Patty of Ground Beef","Two Buns","Tomato","Lettuce","Onion","Cheese","Your Favorite Sauce"],steps:["Cut the bun into two halves","Heat up the pan with a bit of oil inside.","Cook the patty in the pan.","When the patty is nearly done, add a strip of cheese on top of it to get it to melt a bit","Add the patty onto the bun","Cook the tomato and onion stripes very briefly and add them on top of the patty","Wash and add the lettuce","Add the sauce"],votes:4},{id:1,name:"Lasagna",imgSrc:"https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",imgAlt:"Lasagna Image",description:"The epitome of Italian food. It is usually rectangular or ribbon shaped, thicker than tagliatelle, made from a dough based on flour and eggs, with numerous local variants. After being boiled, the rectangular lasagna noodles are drained and placed in layers with a filling that varies based on different local traditions.",ingredients:["Parmesan Cheese","Garlic","Olive Oil","Ricotta Cheese","Mozzarella Cheese","Eggs","Onion","Tomatoes","Butter and Flour"],steps:["Spread a thin layer of pasta sauce in the bottom of a baking dish.","Make a layer of cooked lasagna noodles.","Spread an even layer of the ricotta cheese mixture.","Spread an even layer of meat sauce.","Repeat those layers two times.","Top it with a final layer of noodles, sauce, mozzarella, and parmesan cheese."],votes:9},{id:2,name:"Sandwich",imgSrc:"https://images.unsplash.com/photo-1619096252214-ef06c45683e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80",imgAlt:"Sandwich Image",description:"The ultimate snack. Easy to prepare and make. A food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.",ingredients:["Two Bread Slices","Any Protein","Your Favorite Fruits and/or Veggies","Cheese (Optional)"],steps:["Choose a base for your sandwich. Place one slice of bread on a plate.","Pick a spread. Using a butter knife, apply to one slice of your bread. You also can leave your bread dry and move on to the next step.","Choose one or two protein foods to place on top of your spread or base of your sandwich.","Add your favorite low-fat cheese (optional).","Pile on fruits and veggies! Choose one or more.","Place the remaining slice of bread on top and enjoy!"],votes:2}];var v=t(239),x={};x.styleTagTransform=p(),x.setAttributes=l(),x.insert=i().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=d(),n()(v.Z,x),v.Z&&v.Z.locals&&v.Z.locals,async function(e){return new Promise((n=>{setTimeout((()=>n(y[e])),1e3)}))}(0).then((e=>b(e)))})()})();