var b=Object.defineProperty,_=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var B=(a,e,n)=>e in a?b(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,x=(a,e)=>{for(var n in e||(e={}))N.call(e,n)&&B(a,n,e[n]);if(A)for(var n of A(e))v.call(e,n)&&B(a,n,e[n]);return a},E=(a,e)=>_(a,D(e));import{j as g,r,R as k,a as w}from"./vendor.3b7ccedc.js";const P=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}};P();const l=g.exports.jsx,m=g.exports.jsxs,R=({label:a,path:e,onClick:n})=>l("button",{onClick:async()=>n(),children:a});function S({defaultAudioPath:a,onPlayEnd:e}){const[n,d]=r.exports.useState(!1),t=r.exports.useRef(!1),[s,i]=r.exports.useState(!1),p=r.exports.useRef(),o=r.exports.useCallback(async()=>await(e==null?void 0:e()),[e]);r.exports.useEffect(()=>{const c="use-audio-play-element",u=document.createElement("audio");return u.className=c,u.volume=.75,u.muted=!0,u.loop=!1,u.src=a,u.onpause=()=>{console.log("pause")},document.body.appendChild(u),p.current=u,()=>{const h=document.getElementsByClassName(c);h&&h[h.length-1]&&document.body.removeChild(h[h.length-1])}},[a,s]);const f=r.exports.useCallback(async()=>{const c=p.current;!c||n&&(await c.play(),c.muted=!1,d(!1))},[n]),C=r.exports.useCallback(async c=>{const u=p.current;!u||s||(u.oncanplay=async()=>{u.play()},u.onended=async()=>{u.onended=null,u.oncanplay=null,t.current||await o(),t.current=!1,i(!1)},u.src=c,u.muted=!1,i(!0))},[o,s]),y=r.exports.useCallback(async()=>new Promise(c=>{if(!s){c();return}const u=p.current;!u||(u.pause(),u.currentTime=0,t.current=!0)}),[s]),F=r.exports.useCallback(c=>{const u=p.current;!u||(u.volume=c)},[]);return{handlers:{onClick:f},play:C,stop:y,setVolume:F}}function j(){const{handlers:a,play:e}=S({defaultAudioPath:"silent.wav",onPlayEnd:()=>s(o=>o+1)}),[n,d]=r.exports.useState(!1),[t,s]=r.exports.useState(0),[i,p]=r.exports.useState([]);return r.exports.useEffect(()=>{if(n){const o=i[t];if(o==null)d(!1),s(0);else{const[f,C]=o;e(C)}}},[e,n,t,i]),m("div",E(x({className:"App"},a),{children:[m("div",{className:"page-title",children:[m("span",{className:"title",children:["\u30ED\u30D9\u30EB\u30BF",l("br",{}),"\xA0\xA0\xA0\xA0\xA0\u30DC\u30A4\u30B9\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u30FC"]}),m("span",{className:"sub-title mobile-none",children:["Roberta",l("br",{}),"\xA0\xA0\xA0\xA0\xA0voice simulator"]})]}),l("div",{className:"audio-lists",children:q.map((o,f)=>m("div",{className:"audio-list-wrap",children:[l("div",{className:"label-title",children:o[0][0]}),l("ul",{className:"audio-list",children:o.map(([C,y])=>l("li",{children:l(R,{label:C,path:y,onClick:()=>{d(!1),s(0),p(F=>[...F,[C,y]])}})},`${C}`))})]},`gr-${f}`))}),l("div",{className:"links mobile-none"}),m("div",{className:"queue",children:[m("div",{className:"queue-list-wrap",children:[l("div",{className:"queue-title mobile-none",children:l("span",{className:"title",children:"\u518D\u751F\u30EA\u30B9\u30C8"})}),l("div",{className:"queue-list",children:i.map(([o],f)=>l("span",{className:`label ${n&&t===f?"playing":""}`,children:o},`${o}${f}`))})]}),m("div",{className:"controller",children:[l("button",{className:"controll-button",onClick:()=>p([]),children:"Clear"}),l("button",{className:"controll-button",onClick:async()=>{d(!1),s(0)},children:"Stop"}),l("button",{className:"controll-button play",onClick:()=>d(!0),children:"Play"})]})]})]}))}const q=[[["\u4F5C\u6226\u4E2D1","full_01.mp3"],["\u8868\u9762\u7B4B","01_hyoumenkin.mp3"],["\u96FB\u4F4D\u8FFD\u8DE1","01_deni_tsuiseki.mp3"],["\u30AA\u30FC\u30C8\u30D5\u30A3\u30EA\u30F3\u30B0","01_autofilling.mp3"],["\u30B3\u30F3\u30B7\u30FC\u30E9\u30FC","01_concealer.mp3"]],[["\u4F5C\u6226\u4E2D2","full_02.mp3"],["\u30D0\u30AF\u30C0\u30F3\u30E0\u30B7","02_bakudanmushi.mp3"],["\u62BD\u51FA\u6DB2","02_chushutsueki.mp3"],["\u30B9\u30BF\u30A4\u30EA\u30F3\u30B0","02_styling.mp3"],["\u30B9\u30D7\u30EC\u30FC","02_spray.mp3"]],[["\u4F5C\u6226\u4E2D3","full_03.mp3"],["\u30D5\u30A7\u30A4\u30B7\u30E3\u30EB\u30DC\u30FC\u30F3","03_feisharuborne.mp3"],["\u30D5\u30EB\u30D5\u30EB\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30C9","03_fullstructured.mp3"],["\u30BB\u30EB\u30D5\u30A4\u30E1\u30FC\u30B8","03_self_image.mp3"],["\u30B7\u30A7\u30FC\u30C7\u30A3\u30F3\u30B0","03_shading.mp3"],["\u30CF\u30A4\u30E9\u30A4\u30BF\u30FC","03_highlighter.mp3"]],[["\u4F5C\u6226\u4E2D4","full_04.mp3"],["\u30A6\u30A7\u30C3\u30C8","04_wet.mp3"],["\u30C9\u30E9\u30A4","04_dry.mp3"],["\u4E21\u7528","04_ryouyou.mp3"],["\u30A2\u30F3\u30D3\u30A8\u30F3\u30C8\u30AB\u30E9\u30FC","04_ambient_color.mp3"],["\u30A2\u30C0\u30D7\u30C8","04_adapt.mp3"],["\u30B0\u30ED\u30B9\u30C1\u30FC\u30AF","04_grosscheak.mp3"]]];k.render(l(w.StrictMode,{children:l(j,{})}),document.getElementById("root"));
