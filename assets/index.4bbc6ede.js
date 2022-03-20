var E=Object.defineProperty,g=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var A=(l,e,a)=>e in l?E(l,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[e]=a,B=(l,e)=>{for(var a in e||(e={}))_.call(e,a)&&A(l,a,e[a]);if(F)for(var a of F(e))D.call(e,a)&&A(l,a,e[a]);return l},x=(l,e)=>g(l,b(e));import{j as w,r,R as N,a as k}from"./vendor.3b7ccedc.js";const P=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}};P();const n=w.exports.jsx,f=w.exports.jsxs,R=({label:l,path:e,onClick:a})=>n("button",{onClick:async()=>a(),children:l});function S({defaultAudioPath:l,onPlayEnd:e}){const[a,d]=r.exports.useState(!1),t=r.exports.useRef(!1),[s,i]=r.exports.useState(!1),p=r.exports.useRef(),o=r.exports.useCallback(async()=>await(e==null?void 0:e()),[e]);r.exports.useEffect(()=>{const c="use-audio-play-element",u=document.createElement("audio");return u.className=c,u.volume=.75,u.muted=!0,u.loop=!1,u.src=l,u.onpause=()=>{console.log("pause")},document.body.appendChild(u),p.current=u,()=>{const h=document.getElementsByClassName(c);h&&h[h.length-1]&&document.body.removeChild(h[h.length-1])}},[l,s]);const m=r.exports.useCallback(async()=>{const c=p.current;!c||a&&(await c.play(),c.muted=!1,d(!1))},[a]),C=r.exports.useCallback(async c=>{const u=p.current;!u||s||(u.oncanplay=async()=>{u.play()},u.onended=async()=>{u.onended=null,u.oncanplay=null,t.current||await o(),t.current=!1,i(!1)},u.src=c,u.muted=!1,i(!0))},[o,s]),y=r.exports.useCallback(async()=>new Promise(c=>{if(!s){c();return}const u=p.current;!u||(u.pause(),u.currentTime=0,t.current=!0)}),[s]),v=r.exports.useCallback(c=>{const u=p.current;!u||(u.volume=c)},[]);return{handlers:{onClick:m},play:C,stop:y,setVolume:v}}function j(){const{handlers:l,play:e}=S({defaultAudioPath:"silent.wav",onPlayEnd:()=>s(o=>o+1)}),[a,d]=r.exports.useState(!1),[t,s]=r.exports.useState(0),[i,p]=r.exports.useState([]);return r.exports.useEffect(()=>{if(a){const o=i[t];if(o==null)d(!1),s(0);else{const[m,C]=o;e(C)}}},[e,a,t,i]),f("div",x(B({className:"App"},l),{children:[f("div",{className:"page-title",children:[f("span",{className:"title",children:["\u30ED\u30D9\u30EB\u30BF",n("br",{}),"\xA0\xA0\xA0\xA0\xA0\u30DC\u30A4\u30B9\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u30FC"]}),f("span",{className:"sub-title mobile-none",children:["Roberta",n("br",{}),"\xA0\xA0\xA0\xA0\xA0voice simulator"]})]}),n("div",{className:"audio-lists",children:q.map((o,m)=>f("div",{className:"audio-list-wrap",children:[n("div",{className:"label-title",children:o[0][0]}),n("ul",{className:"audio-list",children:o.map(([C,y])=>n("li",{children:n(R,{label:C,path:y,onClick:()=>{d(!1),s(0),p(v=>[...v,[C,y]])}})},`${C}`))})]},`gr-${m}`))}),n("div",{className:"links mobile-none"}),f("div",{className:"queue",children:[f("div",{className:"queue-list-wrap",children:[n("div",{className:"queue-title mobile-none",children:n("span",{className:"title",children:"\u518D\u751F\u30EA\u30B9\u30C8"})}),n("div",{className:"queue-list",children:i.map(([o],m)=>n("span",{className:`label ${a&&t===m?"playing":""}`,children:o},`${o}${m}`))})]}),f("div",{className:"controller",children:[n("button",{className:"controll-button",onClick:()=>p([]),children:"Clear"}),n("button",{className:"controll-button",onClick:async()=>{d(!1),s(0)},children:"Stop"}),n("button",{className:"controll-button play",onClick:()=>d(!0),children:"Play"})]})]})]}))}const q=[[["\u4F5C\u6226\u4E2D1","full_01.wav"],["\u8868\u9762\u7B4B","01_hyoumenkin.wav"],["\u96FB\u4F4D\u8FFD\u8DE1","01_deni_tsuiseki.wav"],["\u30AA\u30FC\u30C8\u30D5\u30A3\u30EA\u30F3\u30B0","01_autofilling.wav"],["\u30B3\u30F3\u30B7\u30FC\u30E9\u30FC","01_concealer.wav"]],[["\u4F5C\u6226\u4E2D2","full_02.wav"],["\u30D0\u30AF\u30C0\u30F3\u30E0\u30B7","02_bakudanmushi.wav"],["\u62BD\u51FA\u6DB2","02_chushutsueki.wav"],["\u30B9\u30BF\u30A4\u30EA\u30F3\u30B0","02_styling.wav"],["\u30B9\u30D7\u30EC\u30FC","02_spray.wav"]],[["\u4F5C\u6226\u4E2D3","full_03.wav"],["\u30D5\u30A7\u30A4\u30B7\u30E3\u30EB\u30DC\u30FC\u30F3","03_feisharuborne.wav"],["\u30D5\u30EB\u30D5\u30EB\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30C9","03_fullstructured.wav"],["\u30BB\u30EB\u30D5\u30A4\u30E1\u30FC\u30B8","03_self_image.wav"],["\u30B7\u30A7\u30FC\u30C7\u30A3\u30F3\u30B0","03_shading.wav"],["\u30CF\u30A4\u30E9\u30A4\u30BF\u30FC","03_highlighter.wav"]],[["\u4F5C\u6226\u4E2D4","full_04.wav"],["\u30A6\u30A7\u30C3\u30C8","04_wet.wav"],["\u30C9\u30E9\u30A4","04_dry.wav"],["\u4E21\u7528","04_ryouyou.wav"],["\u30A2\u30F3\u30D3\u30A8\u30F3\u30C8\u30AB\u30E9\u30FC","04_ambient_color.wav"],["\u30A2\u30C0\u30D7\u30C8","04_adapt.wav"],["\u30B0\u30ED\u30B9\u30C1\u30FC\u30AF","04_grosscheak.wav"]]];N.render(n(k.StrictMode,{children:n(j,{})}),document.getElementById("root"));