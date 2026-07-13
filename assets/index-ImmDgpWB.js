(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const y of d.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&i(y)}).observe(document,{childList:!0,subtree:!0});function s(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(c){if(c.ep)return;c.ep=!0;const d=s(c);fetch(c.href,d)}})();/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=(e,a,s=[])=>{const i=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(a).forEach(c=>{i.setAttribute(c,String(a[c]))}),s.length&&s.forEach(c=>{const d=rt(...c);i.appendChild(d)}),i};var kt=([e,a,s])=>rt(e,a,s);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=e=>Array.from(e.attributes).reduce((a,s)=>(a[s.name]=s.value,a),{}),At=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",Pt=e=>e.flatMap(At).map(s=>s.trim()).filter(Boolean).filter((s,i,c)=>c.indexOf(s)===i).join(" "),Ct=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(a,s,i)=>s.toUpperCase()+i.toLowerCase()),st=(e,{nameAttr:a,icons:s,attrs:i})=>{var ie;const c=e.getAttribute(a);if(c==null)return;const d=Ct(c),y=s[d];if(!y)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const g=Mt(e),[j,ue,pe]=y,se={...ue,"data-lucide":c,...i,...g},ne=Pt(["lucide",`lucide-${c}`,g,i]);ne&&Object.assign(se,{class:ne});const me=kt([j,se,pe]);return(ie=e.parentNode)==null?void 0:ie.replaceChild(me,e)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=["svg",p,[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=["svg",p,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=["svg",p,[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=["svg",p,[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=["svg",p,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=["svg",p,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=["svg",p,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=["svg",p,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=["svg",p,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=["svg",p,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=["svg",p,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=["svg",p,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=["svg",p,[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=["svg",p,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=["svg",p,[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=["svg",p,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=["svg",p,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=["svg",p,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=["svg",p,[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=["svg",p,[["path",{d:"m3 11 18-5v12L3 14v-3z"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=["svg",p,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=["svg",p,[["path",{d:"M13.234 20.252 21 12.3"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=["svg",p,[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=["svg",p,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=["svg",p,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=["svg",p,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=["svg",p,[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=["svg",p,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=["svg",p,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=["svg",p,[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=["svg",p,[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=["svg",p,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=["svg",p,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=["svg",p,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=["svg",p,[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=["svg",p,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=["svg",p,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=["svg",p,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=["svg",p,[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=["svg",p,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=({icons:e={},nameAttr:a="data-lucide",attrs:s={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const i=document.querySelectorAll(`[${a}]`);if(Array.from(i).forEach(c=>st(c,{nameAttr:a,icons:e,attrs:s})),a==="data-lucide"){const c=document.querySelectorAll("[icon-name]");c.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(c).forEach(d=>st(d,{nameAttr:"icon-name",icons:e,attrs:s})))}},q=[{id:"state-admin",label:"State Admin",icon:"map",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"district-admin",label:"District Admin",icon:"building-2",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"school-admin",label:"School Admin",icon:"shield-check",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"lms",label:"LMS",icon:"layers",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"student",label:"Student",icon:"sparkles",image:"/stitch_educonnect_interactive_portal/student_portal_1/screen.png"},{id:"teacher",label:"Teacher",icon:"graduation-cap",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"parent",label:"Parent",icon:"users",image:"/stitch_educonnect_interactive_portal/parent_dashboard/screen.png"},{id:"messages",label:"Messages",icon:"message-circle",image:"/stitch_educonnect_interactive_portal/communication_hub/screen.png"},{id:"community",label:"Community",icon:"megaphone",image:"/stitch_educonnect_interactive_portal/communication_hub/screen.png"}],t={role:"state-admin",selectedState:"ny",selectedDistrict:"nyc-doe",selectedSchool:"ps-118",completed:[],selectedClass:"All",checkedDeadlines:["Science: Water Cycle Model"],conversationFilter:"Parents",activeConversationId:"sarah",draft:"",boardAudience:"All families",activeAccount:"teacher-school",selectedSubmissionId:"sub-1",rosterFilter:"All",liveUpdates:!0,realtimeTick:0,activeCallName:"",gatewayMode:"demo",backendProvider:"Supabase",authProvider:"Role-based demo auth",offlinePackReady:!1,workHoursOpen:!0,emergencyOverride:!1,currentUser:"state-admin",apiMode:"local",tourOpen:!1,tourStep:0,searchTerm:"",notificationsOpen:!1,settingsOpen:!1,toast:"",compactMode:!1,highContrast:!1,guardrails:{lockSubmissions:!0,hideAnswers:!0,parentSummaries:!0}},A=[{id:"state-admin",label:"NYS State Admin",role:"State Admin",landing:"state-admin",scope:"state",stateId:"ny",permissions:["manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]},{id:"district-admin",label:"District Admin",role:"District Admin",landing:"district-admin",scope:"district",stateId:"ny",districtId:"nyc-doe",permissions:["manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]},{id:"school-admin",label:"School Admin",role:"School Admin",landing:"school-admin",scope:"school",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",permissions:["approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]},{id:"teacher",label:"Prof. Miller",role:"Teacher",landing:"teacher",scope:"school",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",permissions:["lms","teacher-tools","message","submit-post"]},{id:"student",label:"Hero",role:"Student",landing:"student",scope:"student",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",studentId:"leo",permissions:["student-missions"]},{id:"parent",label:"Sarah Jenkins",role:"Parent",landing:"parent",scope:"guardian",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",studentIds:["leo"],permissions:["message","submit-post"]}],ga=[["manage-tenants","Manage tenants"],["manage-users","Manage users"],["view-compliance","View compliance"],["approve-posts","Approve posts"],["emergency","Emergency override"],["lms","Manage LMS"],["teacher-tools","Teacher tools"],["message","Messaging"],["submit-post","Submit posts"],["student-missions","Student missions"]],ye=[{id:1,subject:"Science",title:"Space Explorers: The Moon",due:"Due tomorrow",action:"Start Mission",progress:78,accent:"teal",icon:"rocket"},{id:2,subject:"Math",title:"Number Quest: Addition",due:"Due in 2 days",action:"Play Now",progress:44,accent:"blue",icon:"star"},{id:3,subject:"Reading",title:"The Whale and the Star",due:"Keep reading",action:"Continue",progress:56,accent:"gold",icon:"book-open"}],V=[{id:"ny",name:"New York",agency:"NYS Education Department (NYSED)",districts:[{id:"nyc-doe",name:"New York City Public Schools",region:"New York City",superintendent:"NYC Chancellor",schools:[{id:"ps-118",name:"P.S. 118 Discovery Academy",category:"Public",students:684,staff:78,status:"Active",subdomain:"ps118",plan:"District Core",modules:["SIS","LMS","Messaging","Family Portal"],storage:64,uptime:"99.98%",theme:"Discovery Blue",isolation:"Dedicated tenant database",avgGrade:"88.4%",attendance:"94.2%",messages:"3 pending",studentPoints:1240,studentName:"Hero",guardianName:"Sarah",learnerName:"Leo",workHours:"Mon-Fri, 8:00 AM-4:30 PM",afterHours:"Messages are held until the next work day"},{id:"bronx-charter",name:"Bronx Learning Charter",category:"Chartered",students:412,staff:49,status:"Onboarding",subdomain:"bronxlearning",plan:"Charter Launch",modules:["SIS","Messaging","Enrollment"],storage:31,uptime:"99.91%",theme:"Charter Gold",isolation:"Dedicated tenant database",avgGrade:"86.1%",attendance:"92.7%",messages:"8 pending",studentPoints:890,studentName:"Explorer",guardianName:"Monica",learnerName:"Ari",workHours:"Mon-Fri, 7:45 AM-4:00 PM",afterHours:"Messages are held until staff office hours reopen"}]},{id:"albany-csd",name:"Albany City School District",region:"Capital Region",superintendent:"District Superintendent",schools:[{id:"albany-prep",name:"Albany Preparatory School",category:"Private",students:325,staff:44,status:"Active",subdomain:"albanyprep",plan:"Private Plus",modules:["LMS","Messaging","Tuition","Family Portal"],storage:46,uptime:"99.95%",theme:"Prep Teal",isolation:"Dedicated tenant database",avgGrade:"91.8%",attendance:"96.4%",messages:"1 pending",studentPoints:1565,studentName:"Scholar",guardianName:"Priya",learnerName:"Noah",workHours:"Mon-Fri, 8:30 AM-5:00 PM",afterHours:"Messages wait for the next administrator-approved window"},{id:"eagle-point",name:"Eagle Point Elementary",category:"Public",students:538,staff:61,status:"Active",subdomain:"eaglepoint",plan:"District Core",modules:["SIS","LMS","Messaging"],storage:52,uptime:"99.97%",theme:"Eagle Green",isolation:"Dedicated tenant database",avgGrade:"87.2%",attendance:"95.1%",messages:"4 pending",studentPoints:1120,studentName:"Navigator",guardianName:"Sarah",learnerName:"Mia",workHours:"Mon-Fri, 8:00 AM-4:00 PM",afterHours:"Messages are queued until office hours"}]}]},{id:"ca",name:"California",agency:"California Department of Education",districts:[{id:"la-usd",name:"Los Angeles Unified School District",region:"Los Angeles County",superintendent:"District Superintendent",schools:[{id:"pacific-stem",name:"Pacific STEM Charter",category:"Chartered",students:496,staff:52,status:"Active",subdomain:"pacificstem",plan:"STEM Charter",modules:["SIS","LMS","Messaging","Lab Scheduler"],storage:58,uptime:"99.94%",theme:"Pacific Blue",isolation:"Dedicated tenant database",avgGrade:"90.3%",attendance:"93.8%",messages:"6 pending",studentPoints:1325,studentName:"Innovator",guardianName:"Elena",learnerName:"Kai",workHours:"Mon-Fri, 8:00 AM-4:30 PM",afterHours:"Messages are held until staff work hours"}]}]}],va=[["State Governance",["Board of Regents","Commissioner of Education","NYS Education Department (NYSED)"]],["District & Regional Governance",["BOCES District Superintendents","Local Board of Education (BOE)","District Superintendent / NYC Chancellor","Assistant / Deputy Superintendents","District Directors / Coordinators"]],["School Building Administration",["Principal","Assistant Principal","Dean of Students / Department Chairs"]],["Classroom Faculty",["Tenured Teachers","Probationary Teachers","Substitutes / Leave Replacements"]],["Instructional & Specialized Support",["Specialized Clinicians","Teaching Assistants","Teacher Aides / Paraprofessionals"]],["Operational Support",["Secretaries / Clerical Staff","Custodial / Maintenance Staff","Food Service / Security / Transportation"]],["Student Leadership & Student Body",["Student Board of Education Representative","Student Council President / Officers","Class Officers","Club Presidents / Team Captains","General Student Body"]]],F=[{name:"English Literature",room:"Period 2, Room 304",grade:89,attendance:96,pending:12},{name:"Creative Writing",room:"Period 4, Room 201",grade:92,attendance:97,pending:1},{name:"Basic English",room:"Period 6, Room 118",grade:84,attendance:91,pending:5}],k=[{id:"stu-1",student:"Leo Jenkins",guardian:"Sarah Jenkins",teacher:"Prof. Miller",className:"English Literature",grade:91,attendance:98,accommodations:"Visual vocabulary cards",status:"Active"},{id:"stu-2",student:"Maya Rodriguez",guardian:"Elena Rodriguez",teacher:"Prof. Miller",className:"Creative Writing",grade:88,attendance:94,accommodations:"Extended quiz time",status:"Active"},{id:"stu-3",student:"Liam Wilson",guardian:"Marcus Wilson",teacher:"Prof. Miller",className:"English Literature",grade:82,attendance:91,accommodations:"Reading support",status:"Watch"},{id:"stu-4",student:"Sarah Chen",guardian:"Priya Chen",teacher:"Prof. Miller",className:"Creative Writing",grade:96,attendance:99,accommodations:"None",status:"Active"}],M=[{id:"sub-1",student:"Leo Jenkins",assignment:"Fractions Mastery Check",status:"Submitted",score:88,rubric:[["Concepts",4],["Accuracy",3],["Explanation",4],["Neatness",3]],comment:"Strong reasoning. Recheck mixed-number conversions."},{id:"sub-2",student:"Maya Rodriguez",assignment:"Great Depression Essay",status:"Needs review",score:74,rubric:[["Thesis",3],["Evidence",3],["Organization",2],["Conventions",4]],comment:"Good evidence. Add a clearer argument in the introduction."},{id:"sub-3",student:"Liam Wilson",assignment:"Grammar Quiz - Week 5",status:"Missing",score:0,rubric:[["Completion",0],["Accuracy",0],["Timeliness",0]],comment:"Family reminder queued."}],W=[["Liam Wilson","finished reading The Great Gatsby","15 minutes ago","Lit 101"],["Sarah Chen","submitted Grammar Quiz - Week 5","42 minutes ago","Creative Writing"],["Marcus Thorne","posted in the discussion board","2 hours ago","Shakespeare"]],ke=[{title:"History: Great Depression Essay",meta:"Due tomorrow, 11:59 PM",urgent:!0},{title:"Science: Water Cycle Model",meta:"Due Thursday",urgent:!1},{title:"Math: Quadratic Equations Quiz",meta:"Due Sunday",urgent:!1}],C=[{id:"fractions",title:"Fractions Mastery Check",type:"Automated quiz",rubric:"4-domain rubric",analytics:82,lockDate:"Oct 24, 8:00 PM",exception:"Maya R. +24h"},{id:"essay",title:"Great Depression Essay",type:"Writing task",rubric:"Argument + evidence rubric",analytics:74,lockDate:"Oct 28, 11:59 PM",exception:"None"}],oe=[{name:"Water Cycle Worksheet.docx",status:"Converted to editable lesson copy",type:"Word"},{name:"Moon Lab Packet.pdf",status:"OCR indexed + annotation ready",type:"PDF"},{name:"Parent Signature Form.pdf",status:"Fillable fields detected",type:"PDF"}],Se=[{id:"teacher-school",name:"Prof. Miller",context:"Teacher at selected school",active:!0},{id:"parent-school",name:"Sarah Jenkins",context:"Parent profile",active:!1},{id:"district-admin",name:"District Admin",context:"District-wide oversight",active:!1}],L=[{id:"notice-lock-window",level:"Urgent",title:"Locked submission window closes tonight",target:"Grade 4 Math",channel:"Dashboard + SMS",read:!1},{id:"notice-rubrics",level:"Action",title:"3 rubric scores need review",target:"English Literature",channel:"Teacher inbox",read:!1},{id:"notice-family-comment",level:"FYI",title:"New family comment on community board",target:"All families",channel:"Digest",read:!1}],D=[{id:"live-1",type:"Roster",title:"Leo Jenkins attendance synced",detail:"SIS updated attendance to 98%.",time:"Live now"},{id:"live-2",type:"LMS",title:"Rubric queue refreshed",detail:"3 submissions are ready for review.",time:"Live now"},{id:"live-3",type:"Messages",title:"Parent digest prepared",detail:"Routine updates will send during the next work window.",time:"Live now"}],nt=[{app:"Docs",action:"Distribute editable templates instantly",status:"Connected"},{app:"Drive",action:"Attach, collect, and archive class files",status:"Connected"},{app:"Forms",action:"Auto-create quizzes with answer visibility rules",status:"Connected"},{app:"Slides",action:"Share lesson decks as view or copy templates",status:"Connected"}],ba=[["Intuitive Design","Clean teacher and student workflows with minimal training."],["Zero Cost Base","Core classroom, assignments, communication, and family summaries stay free for schools."],["Paperless Workflow","Create, collect, grade, return, and archive digital assignments."],["Centralized Communication","Class announcements, direct messages, and parent summaries in one place."],["Automated Guardrails","Lock edits after submission and hide quiz answers until the assessment ends."]],R=[{actor:"District Admin",event:"Provisioned school tenant",scope:"NYC DOE",time:"Today 9:12 AM"},{actor:"Principal Rivera",event:"Approved community board post",scope:"P.S. 118",time:"Today 10:44 AM"},{actor:"System",event:"Blocked after-hours parent message",scope:"P.S. 118",time:"Yesterday 6:03 PM"},{actor:"NYSED Reviewer",event:"Viewed compliance dashboard",scope:"New York",time:"Yesterday 2:21 PM"}],fa=[{label:"FERPA Mode",status:"Enabled",detail:"Student records are hidden outside authorized tenant scopes."},{label:"Media Review",status:"Required",detail:"Photos and files stay pending until an assigned approver approves them."},{label:"Data Export",status:"Logged",detail:"Every roster, gradebook, or message export appears in the audit trail."}],ya=[{label:"FERPA access reviews",value:"12",status:"Due this month",detail:"Confirm staff access for student records."},{label:"Data export logs",value:"4",status:"Reviewed",detail:"Gradebook and roster exports are audit logged."},{label:"Media approvals",value:"1",status:"Pending",detail:"Photo content waiting for administrator approval."},{label:"After-hours blocks",value:"7",status:"Protected",detail:"Messages held outside school communication windows."}],ct=[{title:"Superintendent Hearing Window",audience:"District",date:"Oct 21",type:"Compliance"},{title:"Science Night",audience:"P.S. 118 families",date:"Oct 23",type:"Community"},{title:"Fractions Mastery Lock Date",audience:"Grade 4 Math",date:"Oct 24",type:"LMS"},{title:"Parent Conference Block",audience:"Teachers + guardians",date:"Oct 27",type:"Messaging"}],te=[{item:"Fractions quiz attempt",owner:"Leo",status:"Queued for upload"},{item:"PDF annotation packet",owner:"Maya",status:"Conflict check ready"},{item:"Teacher rubric draft",owner:"Prof. Miller",status:"Saved offline"}],$a=[["Default route","Parent and teacher posts go to the first active school approver."],["Media route","Photos, videos, and files require Principal or Assistant Principal approval."],["Sensitive route","Discipline, health, or student-identifying content is held for administrator review."],["Publishing rule","Approved posts publish only inside the selected school tenant."]],Sa=[{title:"One-tap teacher message",detail:"Disabled automatically outside school work hours."},{title:"Digest-first notifications",detail:"Urgent alerts separate from routine activity noise."},{title:"Offline packet pickup",detail:"Assignments and forms can be downloaded before Wi-Fi drops."}],N={"ps-118":{logo:"D",crest:"Discovery Owls",primary:"#0050cb",accent:"#006b5f",highlight:"#735c00",background:"#f8f9ff",voice:"Bright, curious, elementary STEM"},"bronx-charter":{logo:"B",crest:"Bronx Torch",primary:"#6d3f00",accent:"#005b96",highlight:"#996b00",background:"#fff9ef",voice:"Confident, college-bound, community first"},"albany-prep":{logo:"A",crest:"Albany Shield",primary:"#005f73",accent:"#7a3e9d",highlight:"#8a5a00",background:"#f3fbfb",voice:"Polished, private school, seminar-ready"},"eagle-point":{logo:"E",crest:"Eagle Point",primary:"#116149",accent:"#004e98",highlight:"#7c5c00",background:"#f4fbf6",voice:"Warm, neighborhood public school"},"pacific-stem":{logo:"P",crest:"Pacific Wave",primary:"#0057a8",accent:"#00756f",highlight:"#7a6100",background:"#f2f8ff",voice:"Modern, STEM lab, project-based"}},wa=[{name:"Discovery Blue",primary:"#0050cb",accent:"#006b5f",highlight:"#735c00",background:"#f8f9ff"},{name:"Charter Gold",primary:"#6d3f00",accent:"#005b96",highlight:"#996b00",background:"#fff9ef"},{name:"Prep Teal",primary:"#005f73",accent:"#7a3e9d",highlight:"#8a5a00",background:"#f3fbfb"},{name:"Eagle Green",primary:"#116149",accent:"#004e98",highlight:"#7c5c00",background:"#f4fbf6"},{name:"Pacific Blue",primary:"#0057a8",accent:"#00756f",highlight:"#7a6100",background:"#f2f8ff"}],S=[{id:"sarah",name:"Sarah Jenkins",role:"Leo's parent",type:"Parents",unread:0,online:!0,preview:"I'll send the photo of the worksheet now...",messages:[{from:"them",text:"Hi Mr. Anderson! Leo found the fractions section tricky.",time:"13:45"},{from:"me",text:"Thanks for the heads up. I can send a visual practice sheet today.",time:"13:52"},{from:"them",text:"That would help. I'll send the photo of the worksheet now.",time:"14:02"}]},{id:"elena",name:"Elena Rodriguez",role:"Maya's parent",type:"Parents",unread:3,online:!1,preview:"Is the field trip still happening on Friday?",messages:[{from:"them",text:"Is the field trip still happening on Friday?",time:"Tue"},{from:"me",text:"Yes, the permission forms are due by Thursday morning.",time:"Tue"}]},{id:"grade-team",name:"Grade 4 Team",role:"6 teachers",type:"Groups",unread:1,online:!0,preview:"New reading groups are posted.",messages:[{from:"them",text:"New reading groups are posted for next week.",time:"09:18"},{from:"me",text:"Great, I updated my small-group rotation.",time:"09:26"}]}],O={"ps-118":{approvers:[{id:"principal-rivera",name:"Principal Rivera",title:"Principal",active:!0},{id:"ap-kim",name:"Assistant Principal Kim",title:"Assistant Principal",active:!0},{id:"dean-walker",name:"Dean Walker",title:"Dean of Students",active:!1}],published:[{id:"ps-post-1",author:"Ms. Henderson",role:"Teacher",type:"Announcement",audience:"All families",title:"Science Night Volunteers",body:"We need four family volunteers for Thursday's hands-on moon lab.",media:"Flyer PDF",time:"Approved today"},{id:"ps-post-2",author:"Sarah Jenkins",role:"Parent",type:"Resource",audience:"Grade 4",title:"Math Game Practice Link",body:"Sharing a free fractions game that helped Leo practice at home.",media:"Website link",time:"Approved yesterday"}],pending:[{id:"ps-pending-1",author:"Mr. Anderson",role:"Teacher",type:"Photo",audience:"Grade 4",title:"Moon Rock Lab Photos",body:"A photo set from today's science station rotation.",media:"6 images",approverId:"principal-rivera",time:"Awaiting principal approval"}]}},Y=[{name:"users",records:A.length,status:"Mapped",detail:"Role, permission, school, guardian/student links"},{name:"schools",records:5,status:"Mapped",detail:"State, district, tenant URL, modules, branding"},{name:"classes",records:F.length,status:"Mapped",detail:"Teacher, room, attendance, pending work"},{name:"students",records:k.length,status:"Mapped",detail:"Guardian, accommodations, grades, attendance"},{name:"assignments",records:C.length,status:"Mapped",detail:"Type, rubric, lock date, exceptions"},{name:"submissions",records:M.length,status:"Mapped",detail:"Rubric scores, comments, review status"},{name:"messages",records:S.length,status:"Mapped",detail:"Parent and group threads with work-hour controls"},{name:"community_posts",records:O["ps-118"].published.length+O["ps-118"].pending.length,status:"Mapped",detail:"Approvals, media, audience, publishing state"},{name:"audit_logs",records:R.length,status:"Mapped",detail:"Admin actions, exports, compliance events"}],_=[{id:"district",label:"Create district and school tenants",owner:"Admin",done:!0},{id:"staff",label:"Invite staff accounts",owner:"Admin",done:!0},{id:"roster",label:"Import student roster",owner:"Registrar",done:!0},{id:"guardians",label:"Connect parent and guardian accounts",owner:"School office",done:!1},{id:"classes",label:"Assign teachers to classes",owner:"Principal",done:!0},{id:"launch",label:"Send launch notification",owner:"Communications",done:!1}],x=[{id:"upload-1",name:"Moon Lab Packet.pdf",area:"LMS",size:"1.2 MB",status:"Ready for class distribution"},{id:"upload-2",name:"Science Night Flyer.pdf",area:"Community",size:"420 KB",status:"Waiting for approval"}],U=[{id:"delivery-1",channel:"Email",audience:"Grade 4 families",status:"Queued",detail:"Science Night reminder"},{id:"delivery-2",channel:"SMS",audience:"Emergency contacts",status:"Ready",detail:"Emergency override test"},{id:"delivery-3",channel:"Push",audience:"Teachers",status:"Delivered",detail:"Rubric queue refresh"}],z=[{id:"auth",label:"Role-based authentication rules",status:"Configured",done:!0},{id:"ferpa",label:"FERPA tenant data isolation",status:"Configured",done:!0},{id:"audit",label:"Audit log export policy",status:"Configured",done:!0},{id:"backups",label:"Nightly database backups",status:"Needs backend provider",done:!1},{id:"encryption",label:"Encrypted file storage",status:"Needs storage provider",done:!1},{id:"retention",label:"Data retention schedule",status:"Drafted",done:!1}],re=[{step:"Build",status:"Passing",detail:"Vite production build generates static assets"},{step:"Tests",status:"Passing",detail:"Playwright local and live smoke tests available"},{step:"FTP deploy",status:"Live",detail:"educationalsystem.fieldserviceit.com is serving the app"},{step:"GitHub sync",status:"Connected",detail:"Backend repository deploys through Hostinger hPanel"}],ka="educationalsystem.fieldserviceit.com",Ma="https://api.educationalsystem.fieldserviceit.com";function lt(e,a="",s=""){return e===ka?Ma:a||s||""}const it=new Map;function Aa(){return lt(window.location.hostname,window.__EDUCONNECT_API_BASE__,void 0)}function Pa(e,a={}){var i;const s=e instanceof Error?e:new Error(String(e||"Unknown client error"));return{source:a.source||"frontend",message:s.message.slice(0,1e3),stack:String(s.stack||"").slice(0,6e3),path:`${window.location.pathname}${window.location.hash}`.slice(0,300),release:((i=document.querySelector('meta[name="app-release"]'))==null?void 0:i.content)||"web"}}function he(e,a={}){const s=Aa();if(!s)return;const i=Pa(e,a),c=`${i.source}:${i.message}:${i.path}`,d=Date.now();d-(it.get(c)||0)<6e4||(it.set(c,d),fetch(`${s}/api/error-reports`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),keepalive:!0}).catch(()=>{}))}function Ca(){window.addEventListener("error",e=>he(e.error||e.message,{source:"window.error"})),window.addEventListener("unhandledrejection",e=>he(e.reason,{source:"unhandledrejection"}))}const dt="educonnect-mock-api-v1";let ee=0,ce="localStorage://educonnect-mock-api-v1",K="Ready";function ut(e){return e&&typeof e=="object"&&"data"in e?e.data:e}function pt(){return new Promise(e=>setTimeout(e,80))}function mt(){return lt(window.location.hostname,window.__EDUCONNECT_API_BASE__,void 0)}function ht(){const e=localStorage.getItem("educonnect-session-token");return e?{Authorization:`Bearer ${e}`}:{}}async function gt(e,a){const s=`${mt()}/api/state`;ce=s;const i=await fetch(s,{method:e,headers:{"Content-Type":"application/json",...ht()},body:a?JSON.stringify(a):void 0});if(ee+=1,!i.ok){K=`HTTP ${i.status}`;const c=new Error(`Server API request failed with ${i.status}`);throw he(c,{source:"api.state"}),c}return K="Connected",ut(await i.json())}async function Me(e,a={}){const s=`${mt()}${e}`;ce=s;const i=await fetch(s,{headers:{"Content-Type":"application/json",...ht(),...a.headers||{}},...a});if(ee+=1,!i.ok){K=`HTTP ${i.status}`;const c=await i.json().catch(()=>({})),d=new Error(c.error||`Server API request failed with ${i.status}`);throw he(d,{source:"api.request"}),d}return K="Connected",ut(await i.json())}async function La(e,a="mock-api"){return a==="live-api"?gt("PUT",{snapshot:e}):(ee+=1,await pt(),localStorage.setItem(dt,JSON.stringify(e)),ce="localStorage://educonnect-mock-api-v1",K="Ready",{ok:!0,requestCount:ee})}async function Ea(e="mock-api"){return e==="live-api"?(await gt("GET")).snapshot:(ee+=1,await pt(),ce="localStorage://educonnect-mock-api-v1",K="Ready",JSON.parse(localStorage.getItem(dt)||"null"))}function Da(){return{requestCount:ee,endpoint:ce,status:K}}async function Na(e,a){return Me("/api/login",{method:"POST",body:JSON.stringify({profileId:e,password:a})})}async function Oa(e,a="LMS"){const s=await new Promise((i,c)=>{const d=new FileReader;d.onload=()=>i(String(d.result).split(",")[1]||""),d.onerror=()=>c(d.error),d.readAsDataURL(e)});return Me("/api/files",{method:"POST",body:JSON.stringify({name:e.name,type:e.type,area:a,size:`${Math.max(1,Math.round(e.size/1024))} KB`,contentBase64:s})})}async function xa(e="Launch test group"){return Me("/api/notifications/test",{method:"POST",body:JSON.stringify({audience:e})})}const ge="educonnect-demo-state-v1",$=structuredClone({state:t,userProfiles:A,tenantStates:V,schoolDesigns:N,rosterRecords:k,gradebookSubmissions:M,auditLogs:R,lmsAssignments:C,lmsFiles:oe,lmsNotifications:L,realtimeEvents:D,databaseTables:Y,onboardingTasks:_,fileUploads:x,notificationDeliveryLog:U,securityChecklist:z,deployPipeline:re,offlineSyncQueue:te,activityFeed:W,conversations:S,communityBoards:O});function ve(e,a){Object.keys(e).forEach(s=>delete e[s]),Object.assign(e,structuredClone(a))}function h(e,a){e.splice(0,e.length,...structuredClone(a))}function qa(){try{const e=JSON.parse(localStorage.getItem(ge)||"null");Ae(e)}catch{localStorage.removeItem(ge)}}function vt(){return structuredClone({state:t,userProfiles:A,tenantStates:V,schoolDesigns:N,rosterRecords:k,gradebookSubmissions:M,auditLogs:R,lmsAssignments:C,lmsFiles:oe,lmsNotifications:L,realtimeEvents:D,databaseTables:Y,onboardingTasks:_,fileUploads:x,notificationDeliveryLog:U,securityChecklist:z,deployPipeline:re,offlineSyncQueue:te,activityFeed:W,conversations:S,communityBoards:O})}function Ae(e){e&&(e.state&&Object.assign(t,e.state),e.userProfiles&&h(A,e.userProfiles),e.tenantStates&&h(V,e.tenantStates),e.schoolDesigns&&ve(N,e.schoolDesigns),e.rosterRecords&&h(k,e.rosterRecords),e.gradebookSubmissions&&h(M,e.gradebookSubmissions),e.auditLogs&&h(R,e.auditLogs),e.lmsAssignments&&h(C,e.lmsAssignments),e.lmsFiles&&h(oe,e.lmsFiles),e.lmsNotifications&&h(L,e.lmsNotifications),e.realtimeEvents&&h(D,e.realtimeEvents),e.databaseTables&&h(Y,e.databaseTables),e.onboardingTasks&&h(_,e.onboardingTasks),e.fileUploads&&h(x,e.fileUploads),e.notificationDeliveryLog&&h(U,e.notificationDeliveryLog),e.securityChecklist&&h(z,e.securityChecklist),e.deployPipeline&&h(re,e.deployPipeline),e.offlineSyncQueue&&h(te,e.offlineSyncQueue),e.activityFeed&&h(W,e.activityFeed),e.conversations&&h(S,e.conversations),e.communityBoards&&ve(O,e.communityBoards))}function Ta(){const e=vt();localStorage.setItem(ge,JSON.stringify(e)),(t.apiMode==="mock-api"||t.apiMode==="live-api")&&La(e,t.apiMode).catch(()=>{})}async function bt(e=t.apiMode){const a=await Ea(e);a&&Ae(a)}function Ra(){localStorage.removeItem(ge),Object.assign(t,structuredClone($.state)),h(A,$.userProfiles),h(V,$.tenantStates),ve(N,$.schoolDesigns),h(k,$.rosterRecords),h(M,$.gradebookSubmissions),h(R,$.auditLogs),h(C,$.lmsAssignments),h(oe,$.lmsFiles),h(L,$.lmsNotifications),h(D,$.realtimeEvents),h(Y,$.databaseTables),h(_,$.onboardingTasks),h(x,$.fileUploads),h(U,$.notificationDeliveryLog),h(z,$.securityChecklist),h(re,$.deployPipeline),h(te,$.offlineSyncQueue),h(W,$.activityFeed),h(S,$.conversations),ve(O,$.communityBoards)}Ca();const ja=document.querySelector("#app"),G=[{title:"Choose a role",body:"Use the demo login panel to switch between state, district, school, teacher, parent, and student access.",role:"state-admin"},{title:"Create learning work",body:"Teachers and admins can create assignments and build offline packs in the LMS.",role:"lms"},{title:"Communicate safely",body:"Messaging respects school work hours, with emergency override reserved for admins.",role:"messages"},{title:"Approve community posts",body:"Admins can approve posts before they publish to the school community board.",role:"community"}],Ia={AlertTriangle:da,Award:Lt,Bell:Et,BookOpen:Dt,Building2:Nt,CalendarDays:Ot,Check:xt,ChevronRight:qt,ClipboardCheck:Tt,Clock:Rt,Database:jt,Download:It,Eye:Gt,FileText:Ht,GraduationCap:Bt,Layers:_t,Lock:Ut,Mail:zt,Map:Wt,Megaphone:Jt,MessageCircle:Vt,MoreHorizontal:Ft,Paperclip:Yt,PenLine:Kt,Play:Qt,Plus:Zt,RefreshCw:Xt,Rocket:ea,RotateCcw:ta,Search:aa,Send:sa,Settings:na,ShieldCheck:ia,Smartphone:oa,Sparkles:ra,Star:ca,TrendingUp:la,Users:ua,Video:pa,X:ma};function r(e){return`<i class="app-icon" data-lucide="${e}" data-icon="${e}" aria-hidden="true"></i>`}function Fa(e){return`/${e.replace(/^\/+/,"")}`}function Q(e){return e.split(" ").map(a=>a[0]).slice(0,2).join("")}function le(e){return`<div class="progress" aria-label="${e}% complete"><span style="width:${e}%"></span></div>`}function w(e,a,s,i){return`<article class="stat-card ${i}"><div class="stat-icon">${r(s)}</div><span>${e}</span><strong>${a}</strong></article>`}function H(e){return String(e).replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}function v(e){t.toast=e,m()}function f(e,a=b().name,s=$e().label){R.unshift({actor:s,event:e,scope:a,time:"Just now"})}function B(e,a,s=b().name,i="Live dashboard"){L.unshift({id:`notice-${Date.now()}-${Math.random().toString(16).slice(2)}`,level:e,title:a,target:s,channel:i,read:!1})}function P(e,a,s){D.unshift({id:`live-${Date.now()}-${Math.random().toString(16).slice(2)}`,type:e,title:a,detail:s,time:"Just now"}),D.length>8&&(D.length=8)}function be(){return L.filter(e=>!e.read).length}function ft(e="manual"){const a=b(),s=[()=>{const i=k[t.realtimeTick%k.length];i.attendance=Math.min(100,i.attendance+1),W.unshift([i.student,"attendance synced from SIS","Just now",i.className]),P("Roster",`${i.student} synced`,`Attendance is now ${i.attendance}% in ${i.className}.`),B("FYI",`${i.student} roster sync completed`,i.className,"SIS")},()=>{const i=M[t.realtimeTick%M.length];i.status=i.status==="Missing"?"Needs review":i.status,P("LMS",`${i.student} gradebook updated`,`${i.assignment} is ${i.status.toLowerCase()}.`),B("Action",`${i.student} submission needs attention`,i.assignment,"Teacher inbox")},()=>{const i=S.find(c=>c.id===t.activeConversationId)||S[0];i.messages.push({from:"them",text:`Live ${a.name} update received.`,time:"Now"}),i.preview="Live school update received.",i.unread=(i.unread||0)+1,P("Messages",`New message from ${i.name}`,"Conversation preview and unread count updated."),B("Urgent",`New message from ${i.name}`,a.name,"Messages")}];s[t.realtimeTick%s.length](),t.realtimeTick+=1,f(`Processed ${e} live update`,a.name,"Realtime service"),t.toast="Live app data updated.",m()}function $e(){return A.find(e=>e.id===t.currentUser)||A[0]}function J(e){return $e().permissions.includes(e)}function T(e,a="This role cannot use that action"){return J(e)?"":`disabled aria-disabled="true" title="${a}"`}function ae(e,a){return J(e)?"":`<div class="permission-note">${r("lock")} ${a}</div>`}function Ga(e){const a=[];return(!e||typeof e!="object")&&a.push("File must contain a JSON object."),(!(e!=null&&e.state)||typeof e.state!="object")&&a.push("Missing state object."),Array.isArray(e==null?void 0:e.tenantStates)||a.push("Missing tenantStates array."),Array.isArray(e==null?void 0:e.conversations)||a.push("Missing conversations array."),(!(e!=null&&e.communityBoards)||typeof e.communityBoards!="object")&&a.push("Missing communityBoards object."),a}function we(){const e=window.location.hash.replace("#","");return e==="platform"?"state-admin":q.some(a=>a.id===e)?e:""}function fe(e,a=!0){e==="platform"&&(e="state-admin"),q.some(s=>s.id===e)&&(t.role=e,t.notificationsOpen=!1,t.settingsOpen=!1,a&&window.location.hash!==`#${e}`&&history.pushState(null,"",`#${e}`),m())}function X(e,a=""){a&&(t.toast=a),fe(e)}function yt(){ha({icons:Ia,attrs:{"stroke-width":2.25}})}function de(){return V.find(e=>e.id===t.selectedState)||V[0]}function Z(){const e=de();return e.districts.find(a=>a.id===t.selectedDistrict)||e.districts[0]}function b(){const e=Z();return e.schools.find(a=>a.id===t.selectedSchool)||e.schools[0]}function Ha(){const e=b();return[...q.map(a=>({label:a.label,detail:"Workspace",role:a.id})),...ye.map(a=>({label:a.title,detail:`${a.subject} mission`,role:"student"})),...F.map(a=>({label:a.name,detail:a.room,role:"teacher"})),...C.map(a=>({label:a.title,detail:`${a.type} in LMS`,role:"lms"})),...ke.map(a=>({label:a.title,detail:a.meta,role:"parent"})),...S.map(a=>({label:a.name,detail:a.preview,role:"messages"})),...E().published.map(a=>({label:a.title,detail:`${a.type} post`,role:"community"})),{label:e.name,detail:`${e.category} school tenant`,role:"school-admin"}]}function Ba(){const e=t.searchTerm.trim().toLowerCase();if(!e)return"";const a=Ha().filter(s=>`${s.label} ${s.detail}`.toLowerCase().includes(e)).slice(0,6);return`
    <section class="search-results" aria-label="Search results">
      <div><strong>${a.length?`Results for "${H(t.searchTerm)}"`:`No results for "${H(t.searchTerm)}"`}</strong><button class="text-button" data-clear-search>Clear</button></div>
      ${a.length?`<div class="search-result-list">${a.map(s=>`
        <button class="search-result" data-open-role="${s.role}">
          ${r("search")}
          <span><strong>${H(s.label)}</strong><small>${H(s.detail)}</small></span>
        </button>
      `).join("")}</div>`:""}
    </section>
  `}function _a(){const e=$e(),a=Da();return`
    <section class="auth-panel" aria-label="Demo login and API mode">
      <div>
        <p class="eyebrow">Signed in as</p>
        <h3>${e.label}</h3>
        <span>${e.role} permissions</span>
      </div>
      <form id="login-form" class="login-form">
        <label class="login-select">
          <span>Login role</span>
          <select id="login-profile">
            ${A.map(s=>`<option value="${s.id}" ${s.id===e.id?"selected":""}>${s.role} - ${s.label}</option>`).join("")}
          </select>
        </label>
        <label class="login-password">
          <span>Password</span>
          <input id="login-password" type="password" placeholder="Password" autocomplete="current-password" />
        </label>
        <button class="secondary-action" type="submit">${r("lock")} Sign in</button>
      </form>
      <label class="api-mode-toggle">
        <span>Data mode</span>
        <select id="api-mode">
          <option value="local" ${t.apiMode==="local"?"selected":""}>Local demo state</option>
          <option value="mock-api" ${t.apiMode==="mock-api"?"selected":""}>Mock API service</option>
          <option value="live-api" ${t.apiMode==="live-api"?"selected":""}>Server database</option>
        </select>
        <small>${t.apiMode==="live-api"?`${a.status} • ${a.endpoint} • ${a.requestCount} requests`:t.apiMode==="mock-api"?`${a.endpoint} • ${a.requestCount} requests`:"localStorage persistence"}</small>
      </label>
    </section>
  `}function E(){const e=b();return O[e.id]||(O[e.id]={approvers:[{id:`${e.id}-principal`,name:"Principal Office",title:"Principal",active:!0},{id:`${e.id}-assistant-principal`,name:"Assistant Principal",title:"Assistant Principal",active:!0}],published:[{id:`${e.id}-welcome`,author:"School Office",role:"Administrator",type:"Announcement",audience:"All families",title:`Welcome to ${e.name}`,body:"This board is reserved for administrator-approved school community updates.",media:"No media",time:"Approved"}],pending:[]}),O[e.id]}function Ua(e){return e.approvers.find(a=>a.active)||e.approvers[0]}function za(e,a){var s;return((s=e.approvers.find(i=>i.id===a))==null?void 0:s.name)||"Unassigned"}function Pe(){const e=b();return N[e.id]||(N[e.id]={logo:Q(e.name).slice(0,1),crest:`${e.name} Crest`,primary:"#0050cb",accent:"#006b5f",highlight:"#735c00",background:"#f8f9ff",voice:"School-owned portal identity"}),N[e.id]}function Wa(e){return`--primary:${e.primary};--primary-2:${e.primary};--teal:${e.accent};--gold:${e.highlight};--background:${e.background};`}function ot(){const e=b();N[e.id]={...Pe(),logo:document.querySelector("#design-logo").value.trim()||Q(e.name).slice(0,1),crest:document.querySelector("#design-crest").value.trim()||`${e.name} Crest`,voice:document.querySelector("#design-voice").value.trim()||"School-owned portal identity",primary:document.querySelector("#design-primary").value,accent:document.querySelector("#design-accent").value,highlight:document.querySelector("#design-highlight").value,background:document.querySelector("#design-background").value}}function m(){const e=q.find(i=>i.id===t.role),a=b(),s=Pe();ja.innerHTML=`
    <div class="app ${t.compactMode?"compact-mode":""} ${t.highContrast?"high-contrast":""}" style="${Wa(s)}">
      ${Qa(e,s)}
      <main class="workspace workspace-${t.role}">
        ${Ka(a,s)}
        ${Xa(e)}
        ${_a()}
        ${Va()}
        ${Ja()}
        ${Ba()}
        ${t.role==="state-admin"?es():""}
        ${t.role==="district-admin"?ts():""}
        ${t.role==="school-admin"?as():""}
        ${t.role==="lms"?ns():""}
        ${t.role==="student"?os():""}
        ${t.role==="teacher"?cs():""}
        ${t.role==="parent"?ls():""}
        ${t.role==="messages"?ds():""}
        ${t.role==="community"?us():""}
      </main>
      ${Za()}
      ${Ya()}
    </div>
  `,ys(),yt(),Ta()}function Ja(){if(!t.tourOpen)return"";const e=G[t.tourStep]||G[0];return`
    <section class="tour-card" aria-label="Guided onboarding">
      <div>
        <p class="eyebrow">Walkthrough ${t.tourStep+1} of ${G.length}</p>
        <h3>${e.title}</h3>
        <p>${e.body}</p>
      </div>
      <div class="tour-actions">
        <button class="secondary-action" data-tour-prev ${t.tourStep===0?"disabled":""}>${r("chevron-right")} Back</button>
        <button class="primary-action" data-tour-next>${r("play")} ${t.tourStep===G.length-1?"Finish":"Next"}</button>
      </div>
    </section>
  `}function Va(){const e=b();return`
    <section class="demo-launcher" aria-label="Demo role launcher">
      <div>
        <p class="eyebrow">Demo login</p>
        <h3>${q.find(s=>s.id===t.role).label} view at ${e.name}</h3>
      </div>
      <div class="demo-role-grid">
        ${q.map(s=>`
          <button class="demo-role ${t.role===s.id?"active":""}" data-open-role="${s.id}">
            ${r(s.icon)}
            <span>${s.label}</span>
          </button>
        `).join("")}
      </div>
      <button class="secondary-action" data-start-tour>${r("play")} Start Walkthrough</button>
    </section>
  `}function Ya(){return`
    ${t.toast?`<div class="toast" role="status"><span>${H(t.toast)}</span><button class="icon-button" aria-label="Dismiss message" data-dismiss-toast>${r("x")}</button></div>`:""}
    ${t.notificationsOpen?`
      <aside class="utility-panel" aria-label="Notifications">
        <div class="section-heading"><h3>Notifications</h3><button class="icon-button" aria-label="Close notifications" data-close-panel>${r("x")}</button></div>
        <div class="utility-actions">
          <button class="secondary-action" data-mark-notifications>${r("check")} Mark all read</button>
          <button class="secondary-action" data-simulate-live>${r("refresh-cw")} Simulate live update</button>
        </div>
        ${L.length?L.map(e=>`
          <article class="notice-row ${e.level.toLowerCase()} ${e.read?"read":""}">
            <strong>${e.level}</strong>
            <div><span>${e.title}</span><small>${e.target} • ${e.channel}</small></div>
            <button class="icon-button" aria-label="Dismiss ${H(e.title)}" data-dismiss-notification="${e.id}">${r("x")}</button>
          </article>
        `).join(""):'<div class="empty-state">No notifications.</div>'}
      </aside>
    `:""}
    ${t.settingsOpen?`
      <aside class="utility-panel" aria-label="Settings">
        <div class="section-heading"><h3>Settings</h3><button class="icon-button" aria-label="Close settings" data-close-panel>${r("x")}</button></div>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="compactMode" ${t.compactMode?"checked":""} /><span>Compact dashboard density</span></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="highContrast" ${t.highContrast?"checked":""} /><span>High contrast panels</span></label>
        <button class="secondary-action" data-export-demo>${r("download")} Export JSON File</button>
        <label class="secondary-action import-action">${r("file-text")} Import JSON File<input type="file" id="import-demo-state" accept="application/json" /></label>
      </aside>
    `:""}
  `}function Ka(e,a){return`
    <section class="tenant-bar" aria-label="Current tenant">
      <div>
        <span class="school-logo-mini">${a.logo}</span>
        <span class="tenant-label">Tenant</span>
        <strong>${e.name}</strong>
        <em>${e.category} school</em>
        <em>${e.subdomain}.educonnect.local</em>
        <em>${e.workHours}</em>
      </div>
      <div class="tenant-path">
        <span>${de().name}</span>
        <span>${Z().name}</span>
          <span>${e.name}</span>
          <span>${e.plan}</span>
        </div>
    </section>
  `}function Qa(e,a){return`
    <aside class="sidebar">
      <div class="brand-row">
        <div class="brand-mark">${a.logo}</div>
        <div><h1>${a.crest}</h1><p>${a.voice}</p></div>
      </div>
      <nav class="role-nav" aria-label="Portal views">
        ${q.map(s=>`<a class="nav-item ${t.role===s.id?"active":""}" href="#${s.id}" data-role="${s.id}" ${t.role===s.id?'aria-current="page"':""}>${r(s.icon)}<span>${s.label}</span></a>`).join("")}
      </nav>
      <div class="reference-card">
        <img src="${Fa(e.image)}" alt="" />
        <div><strong>Stitch reference</strong><span>Visual source</span></div>
      </div>
    </aside>
  `}function Za(){return`
    <nav class="mobile-role-nav" aria-label="Mobile portal views">
      ${q.map(e=>`<a class="mobile-nav-item ${t.role===e.id?"active":""}" href="#${e.id}" data-role="${e.id}" ${t.role===e.id?'aria-current="page"':""}>${r(e.icon)}<span>${e.label}</span></a>`).join("")}
    </nav>
  `}function Xa(e){const a=e.id==="messages"?"Communication Hub":e.id==="state-admin"?"State Governance":e.id==="district-admin"?"District Operations":e.id==="school-admin"?"School Administration":`${e.label} Dashboard`;return`
    <header class="topbar">
      <div><p class="eyebrow">${e.label} workspace</p><h2>${a}</h2></div>
      <div class="topbar-actions">
        <label class="searchbox">${r("search")}<input id="global-search" value="${H(t.searchTerm)}" placeholder="Search resources..." /></label>
        <button class="secondary-action reset-action" data-reset-demo type="button">${r("rotate-ccw")} Reset Demo</button>
        <button class="icon-button" aria-label="Notifications" data-toggle-notifications>${r("bell")}${be()?`<span class="status-dot">${be()}</span>`:""}</button>
        <button class="icon-button" aria-label="Settings" data-toggle-settings>${r("settings")}</button>
      </div>
    </header>
  `}function es(){const e=de(),a=e.districts,s=a.flatMap(c=>c.schools),i=s.filter(c=>c.status==="Active").length;return`
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">State admin workspace</p>
          <h2>Tenant Governance</h2>
          <p>State administrators supervise districts, compliance, tenant standards, statewide calendars, and cross-district readiness.</p>
        </div>
        <div class="inline-actions">
          <button class="secondary-action" data-open-role="district-admin">${r("building-2")} Review Districts</button>
          <button class="primary-action" data-add-school ${T("manage-tenants","Only state and district admins can add school tenants.")}>${r("plus")} Add School Tenant</button>
        </div>
      </div>
      ${ae("manage-tenants","Tenant creation and district configuration are admin-only in this demo.")}
      ${w("Districts",a.length,"building-2","blue")}
      ${w("Schools",s.length,"graduation-cap","teal")}
      ${w("Active tenants",i,"shield-check","gold")}
      ${$t()}
      ${Ce()}
      ${Le()}
      <section class="panel state-management-panel">
        <div class="section-heading"><h3>District Oversight</h3><span>${e.name}</span></div>
        <div class="management-list">
          ${a.map(c=>`
            <button class="management-row ${c.id===Z().id?"active":""}" data-manage-district="${c.id}">
              <div class="management-icon">${r("building-2")}</div>
              <div><strong>${c.name}</strong><small>${c.region} • Superintendent: ${c.superintendent}</small></div>
              <span>${c.schools.length} schools</span>
            </button>
          `).join("")}
        </div>
      </section>
      ${St()}
      <section class="panel audit-panel">
        <div class="section-heading"><h3>Audit Trail</h3><span>Cross-tenant accountability</span></div>
        <div class="audit-list">
          ${R.map(c=>`
            <article class="audit-row">
              ${r("clipboard-check")}
              <div><strong>${c.event}</strong><small>${c.actor} • ${c.scope}</small></div>
              <time>${c.time}</time>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="panel calendar-panel">
        <div class="section-heading"><h3>Statewide Calendar</h3><span>Policy, reporting, and public events</span></div>
        <div class="calendar-list">
          ${ct.map(c=>`<article class="calendar-row"><div class="calendar-date">${c.date}</div><div><strong>${c.title}</strong><small>${c.audience} • ${c.type}</small></div></article>`).join("")}
        </div>
      </section>
      <section class="panel hierarchy-panel">
        <div class="section-heading"><h3>Governance Chain</h3><span>State to classroom</span></div>
        <div class="hierarchy-list">
          ${va.map(([c,d],y)=>`<article class="hierarchy-level"><div class="level-number">${y+1}</div><div><h4>${c}</h4><p>${d.join(" • ")}</p></div></article>`).join("")}
        </div>
      </section>
      ${ss()}
    </section>
  `}function ts(){const e=de(),a=Z(),s=a.schools,i=s.reduce((d,y)=>d+y.students,0),c=s.reduce((d,y)=>d+y.staff,0);return`
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">District admin workspace</p>
          <h2>${a.name}</h2>
          <p>District administrators manage school tenants, staffing, rollout readiness, district messages, and cross-school performance.</p>
        </div>
        <button class="primary-action" data-add-school ${T("manage-tenants","Only district and state admins can add school tenants.")}>${r("plus")} Add School Tenant</button>
      </div>
      ${w("Schools",s.length,"graduation-cap","blue")}
      ${w("Students",i.toLocaleString(),"users","teal")}
      ${w("Staff",c.toLocaleString(),"shield-check","gold")}
      <section class="panel tenant-controls">
        <div class="section-heading"><h3>District Scope</h3><span>${e.name}</span></div>
        <div class="tenant-selectors">
          <label><span>State</span><select id="state-filter">${V.map(d=>`<option value="${d.id}" ${t.selectedState===d.id?"selected":""}>${d.name}</option>`).join("")}</select></label>
          <label><span>District</span><select id="district-filter">${e.districts.map(d=>`<option value="${d.id}" ${a.id===d.id?"selected":""}>${d.name}</option>`).join("")}</select></label>
        </div>
      </section>
      <section class="panel district-management-panel">
        <div class="section-heading"><h3>Schools In This District</h3><span>${a.region}</span></div>
        <div class="management-list">
          ${s.map(d=>`<button class="management-row ${d.id===b().id?"active":""}" data-manage-school="${d.id}"><div class="management-icon">${r("graduation-cap")}</div><div><strong>${d.name}</strong><small>${d.category} • ${d.subdomain}.educonnect.local</small></div><span>${d.status}</span></button>`).join("")}
        </div>
      </section>
      ${$t()}
      ${Ce()}
      ${Le()}
      <section class="panel audit-panel">
        <div class="section-heading"><h3>District Audit Trail</h3><span>School and staff actions</span></div>
        <div class="audit-list">${R.map(d=>`<article class="audit-row">${r("clipboard-check")}<div><strong>${d.event}</strong><small>${d.actor} • ${d.scope}</small></div><time>${d.time}</time></article>`).join("")}</div>
      </section>
    </section>
  `}function as(){const e=b(),a=E(),s=k.filter(c=>c.status==="Watch").length,i=M.filter(c=>c.status!=="Reviewed").length;return`
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">School admin workspace</p>
          <h2>${e.name}</h2>
          <p>School administrators run campus operations: users, safety messaging, approvals, LMS visibility, roster health, and family communication windows.</p>
        </div>
        <button class="primary-action" data-open-role="community">${r("megaphone")} Review Community Posts</button>
      </div>
      ${w("Students",e.students.toLocaleString(),"users","blue")}
      ${w("Staff",e.staff.toLocaleString(),"shield-check","teal")}
      ${w("Pending approvals",a.pending.length,"clipboard-check","gold")}
      <section class="panel instance-panel">
        <div class="section-heading"><h3>Campus Tenant</h3><span>${e.status}</span></div>
        <div class="instance-card">
          <div><span>Instance URL</span><strong>${e.subdomain}.educonnect.local</strong></div>
          <div><span>Plan</span><strong>${e.plan}</strong></div>
          <div><span>Work hours</span><strong>${e.workHours}</strong></div>
          <div><span>Messages</span><strong>${e.messages}</strong></div>
          <div><span>Roster watch</span><strong>${s}</strong></div>
          <div><span>Submissions</span><strong>${i} pending</strong></div>
        </div>
      </section>
      ${Ce()}
      <section class="panel permissions-panel">
        <div class="section-heading"><h3>School Operations</h3><span>LMS, messages, approvals</span></div>
        <div class="permission-table">
          <button class="permission-row" data-open-role="lms"><strong>LMS</strong><span>Assignments and gradebook</span><small>${C.length} assignments</small></button>
          <button class="permission-row" data-open-role="messages"><strong>Messages</strong><span>Family and staff communication</span><small>${S.reduce((c,d)=>c+(d.unread||0),0)} unread</small></button>
          <button class="permission-row" data-open-role="community"><strong>Community</strong><span>Approval queue and published posts</span><small>${a.pending.length} pending</small></button>
        </div>
      </section>
      ${St()}
      ${Le()}
    </section>
  `}function Ce(){return`
    <section class="panel users-roles-panel">
      <div class="section-heading"><h3>Users & Roles</h3><span>${J("manage-users")?"Editable":"Read-only"}</span></div>
      <div class="users-grid">
        ${A.map(e=>`
          <article class="user-role-card">
            <div><strong>${e.label}</strong><small>${e.role} • ${e.scope||"global"} scope • lands on ${e.landing}</small></div>
            <div class="permission-chip-list">
              ${ga.map(([a,s])=>`
                <label class="permission-chip ${e.permissions.includes(a)?"active":""}">
                  <input type="checkbox" data-profile-permission="${e.id}:${a}" ${e.permissions.includes(a)?"checked":""} ${J("manage-users")?"":"disabled"} />
                  <span>${s}</span>
                </label>
              `).join("")}
            </div>
          </article>
        `).join("")}
      </div>
      ${ae("manage-users","Only administrators can change demo role permissions.")}
    </section>
  `}function Le(){return`
    <section class="panel realtime-panel">
      <div class="section-heading">
        <div><h3>Realtime Operations</h3><span>${t.liveUpdates?"Live updates enabled":"Live updates paused"}</span></div>
        <div class="inline-actions">
          <label class="mini-toggle"><input type="checkbox" data-toggle-live ${t.liveUpdates?"checked":""} /><span>Live</span></label>
          <button class="secondary-action" data-simulate-live>${r("refresh-cw")} Simulate Update</button>
        </div>
      </div>
      <div class="realtime-list">
        ${D.map(e=>`
          <article class="realtime-row">
            <strong>${e.type}</strong>
            <div><span>${e.title}</span><small>${e.detail}</small></div>
            <time>${e.time}</time>
          </article>
        `).join("")}
      </div>
    </section>
  `}function $t(){const e=b(),a=E(),s=Math.round(k.reduce((g,j)=>g+j.grade,0)/k.length),i=k.filter(g=>g.status==="Watch").length,c=M.filter(g=>g.status!=="Reviewed").length,d=S.reduce((g,j)=>g+(j.unread||0),0),y=[{role:"lms",label:"LMS",iconName:"layers",metric:`${C.length} assignments`,detail:`${c} gradebook items need review`},{role:"student",label:"Students",iconName:"sparkles",metric:`${k.length} learners`,detail:`${i} students on watch status`},{role:"teacher",label:"Teachers",iconName:"graduation-cap",metric:`${F.length} classes`,detail:`${W.length} activity events in the feed`},{role:"parent",label:"Parents",iconName:"users",metric:`${ke.length} deadlines`,detail:`${t.checkedDeadlines.length} family tasks checked`},{role:"messages",label:"Messages",iconName:"message-circle",metric:`${d} unread`,detail:`${S.length} parent and group threads`},{role:"community",label:"Community",iconName:"megaphone",metric:`${a.pending.length} pending`,detail:`${a.published.length} approved posts live`}];return`
    <section class="panel unified-os-panel">
      <div class="section-heading">
        <div><p class="eyebrow">One integrated system</p><h3>Unified School Operating System</h3></div>
        <span>${e.name}</span>
      </div>
      <div class="unified-os-grid">
        ${y.map(g=>`
          <button class="module-hub-card" data-open-role="${g.role}">
            <span class="module-hub-icon">${r(g.iconName)}</span>
            <span><strong>${g.label}</strong><small>${g.detail}</small></span>
            <em>${g.metric}</em>
          </button>
        `).join("")}
      </div>
      <div class="system-snapshot-grid">
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Students + LMS</h4><button class="text-button" data-open-role="lms">Open LMS ${r("chevron-right")}</button></div>
          <div class="snapshot-metrics">
            <span><strong>${s}%</strong><small>Average roster grade</small></span>
            <span><strong>${c}</strong><small>Submissions in queue</small></span>
            <span><strong>${t.offlinePackReady?"Ready":"Build"}</strong><small>Offline learning pack</small></span>
          </div>
          ${M.slice(0,3).map(g=>`<div class="snapshot-row"><strong>${g.student}</strong><span>${g.assignment}</span><em>${g.status}</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Teachers + Classes</h4><button class="text-button" data-open-role="teacher">Open Teacher ${r("chevron-right")}</button></div>
          ${F.map(g=>`<div class="snapshot-row"><strong>${g.name}</strong><span>${g.room}</span><em>${g.pending} pending</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Parents + Messages</h4><button class="text-button" data-open-role="messages">Open Messages ${r("chevron-right")}</button></div>
          ${S.slice(0,3).map(g=>`<div class="snapshot-row"><strong>${g.name}</strong><span>${g.preview}</span><em>${g.unread||0} unread</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Admin + Community</h4><button class="text-button" data-open-role="community">Open Community ${r("chevron-right")}</button></div>
          <div class="snapshot-metrics">
            <span><strong>${a.pending.length}</strong><small>Approval queue</small></span>
            <span><strong>${be()}</strong><small>Unread alerts</small></span>
            <span><strong>${R.length}</strong><small>Audit entries</small></span>
          </div>
          ${D.slice(0,2).map(g=>`<div class="snapshot-row"><strong>${g.type}</strong><span>${g.title}</span><em>${g.time}</em></div>`).join("")}
        </article>
      </div>
    </section>
  `}function ss(){const e=_.filter(s=>s.done).length,a=z.filter(s=>s.done).length;return`
    <section class="panel production-panel">
      <div class="section-heading">
        <div><p class="eyebrow">Production operations</p><h3>Launch Control</h3></div>
        <span>${t.gatewayMode==="demo"?"Demo mode":"Backend-ready mode"}</span>
      </div>
      <div class="production-grid">
        <article class="production-card gateway-card">
          <div class="section-heading"><h4>Public Login Gateway</h4><span>${t.authProvider}</span></div>
          <label><span>Auth mode</span><select id="auth-provider"><option ${t.authProvider==="Role-based demo auth"?"selected":""}>Role-based demo auth</option><option ${t.authProvider==="Supabase Auth"?"selected":""}>Supabase Auth</option><option ${t.authProvider==="Firebase Auth"?"selected":""}>Firebase Auth</option></select></label>
          <label><span>Backend provider</span><select id="backend-provider"><option ${t.backendProvider==="Supabase"?"selected":""}>Supabase</option><option ${t.backendProvider==="Firebase"?"selected":""}>Firebase</option><option ${t.backendProvider==="Custom API"?"selected":""}>Custom API</option></select></label>
          <div class="gateway-actions">
            <button class="secondary-action" data-set-gateway="demo">${r("play")} Demo Mode</button>
            <button class="primary-action" data-set-gateway="backend">${r("database")} Backend Ready</button>
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Database Blueprint</h4><button class="text-button" data-provision-schema>Provision mock schema</button></div>
          <div class="schema-list">
            ${Y.map(s=>`<div class="schema-row"><strong>${s.name}</strong><span>${s.records} records</span><em>${s.status}</em><small>${s.detail}</small></div>`).join("")}
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Admin Onboarding</h4><span>${e}/${_.length} complete</span></div>
          <div class="checklist-list">
            ${_.map(s=>`<label class="checklist-row"><input type="checkbox" data-onboarding-task="${s.id}" ${s.done?"checked":""} /><span class="custom-check">${s.done?r("check"):""}</span><span><strong>${s.label}</strong><small>${s.owner}</small></span></label>`).join("")}
          </div>
          <form id="onboarding-user-form" class="mini-form">
            <input id="onboarding-user-name" placeholder="Invite user name" />
            <select id="onboarding-user-role"><option>Teacher</option><option>Parent</option><option>Student</option><option>Admin</option></select>
            <button class="secondary-action" type="submit">${r("plus")} Invite</button>
          </form>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>File Uploads</h4><span>${x.length} files</span></div>
          <label class="upload-drop">${r("paperclip")} Add assignment, PDF, image, or community file<input type="file" id="production-file-upload" multiple /></label>
          <div class="upload-list">
            ${x.map(s=>`<div class="upload-row"><strong>${s.name}</strong><span>${s.area} • ${s.size}</span><em>${s.status}</em></div>`).join("")}
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Notification Delivery</h4><button class="text-button" data-send-delivery-test>Send test batch</button></div>
          ${U.map(s=>`<div class="delivery-row"><strong>${s.channel}</strong><span>${s.audience}</span><em>${s.status}</em><small>${s.detail}</small></div>`).join("")}
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Privacy & Security</h4><span>${a}/${z.length} ready</span></div>
          <div class="checklist-list">
            ${z.map(s=>`<label class="checklist-row"><input type="checkbox" data-security-check="${s.id}" ${s.done?"checked":""} /><span class="custom-check">${s.done?r("check"):""}</span><span><strong>${s.label}</strong><small>${s.status}</small></span></label>`).join("")}
          </div>
        </article>

        <article class="production-card deploy-card">
          <div class="section-heading"><h4>Deployment Pipeline</h4><span>Hostinger live</span></div>
          ${re.map(s=>`<div class="pipeline-row"><strong>${s.step}</strong><span>${s.detail}</span><em class="${s.status.toLowerCase()}">${s.status}</em></div>`).join("")}
        </article>
      </div>
    </section>
  `}function St(){return`
    <section class="panel compliance-panel">
      <div class="section-heading"><h3>Privacy & Compliance Dashboard</h3><span>FERPA operations</span></div>
      <div class="compliance-grid">
        ${ya.map(e=>`
          <article class="compliance-card">
            ${r("shield-check")}
            <div><strong>${e.value}</strong><span>${e.label}</span><small>${e.status} • ${e.detail}</small></div>
          </article>
        `).join("")}
      </div>
      ${ae("view-compliance","Compliance detail is admin-only.")}
    </section>
  `}function ns(){const e=b(),a=Se.find(s=>s.id===t.activeAccount)||Se[0];return`
    <section class="dashboard-grid lms-grid">
      <div class="welcome-strip lms-welcome">
        <div>
          <p class="eyebrow">${e.name} advanced LMS</p>
          <h2>Learning tools beyond basic classroom workflows</h2>
          <p>Advanced grading, firm deadlines, file conversion, account context, organized alerts, and offline access are all managed inside this school instance.</p>
        </div>
        <button class="primary-action" data-build-offline ${T("lms","Only teachers and administrators can build LMS offline packs.")}>${r("download")} ${t.offlinePackReady?"Rebuild Offline Pack":"Build Offline Pack"}</button>
      </div>

      ${w("Auto-graded checks","18","clipboard-check","blue")}
      ${w("Rubrics active","7","layers","teal")}
      ${w("Offline packs",t.offlinePackReady?"Ready":"Not built","download","gold")}

      ${rs()}

      <section class="panel lms-panel simplicity-suite">
        <div class="section-heading"><h3>Simple Classroom Experience</h3><span>Clean by default</span></div>
        ${ba.slice(0,2).map(([s,i])=>`<article class="strength-row">${r("check")}<div><strong>${s}</strong><small>${i}</small></div></article>`).join("")}
      </section>

      <section class="panel lms-panel free-suite">
        <div class="section-heading"><h3>Zero Cost Core</h3><span>No premium paywall</span></div>
        <div class="free-card"><strong>$0</strong><p>Schools can use classroom basics, paperless assignments, messaging, and parent summaries without hidden fees.</p></div>
      </section>

      <section class="panel lms-panel grading-suite">
        <div class="section-heading"><h3>Advanced Grading</h3><span>Automated tests + rubrics + analytics</span></div>
        <div class="assignment-list">
          ${C.map(s=>`
            <article class="assignment-row">
              <div><strong>${s.title}</strong><small>${s.type} • ${s.rubric}</small></div>
              ${le(s.analytics)}
              <span>${s.analytics}% mastery</span>
            </article>
          `).join("")}
        </div>
      </section>

      ${is()}

      <section class="panel lms-panel deadline-suite">
        <div class="section-heading"><h3>Deadline Controls</h3><span>Firm locks + exceptions</span></div>
        ${C.map(s=>`
          <article class="deadline-control">
            <div><strong>${s.title}</strong><small>Locks ${s.lockDate}</small></div>
            <span>${s.exception}</span>
          </article>
        `).join("")}
      </section>

      <section class="panel lms-panel account-suite">
        <div class="section-heading"><h3>Account Context</h3><span>No constant log-outs</span></div>
        <div class="account-switcher">
          ${Se.map(s=>`<button class="${a.id===s.id?"active":""}" data-lms-account="${s.id}"><strong>${s.name}</strong><span>${s.context}</span></button>`).join("")}
        </div>
        <p class="account-note">Current context: <strong>${a.name}</strong> can switch roles without leaving ${e.name}.</p>
      </section>

      <section class="panel lms-panel workflow-suite">
        <div class="section-heading"><h3>Paperless Assignment Workflow</h3><span>Create to return</span></div>
        <div class="workflow-steps">
          ${["Create","Distribute","Collect","Grade","Return","Archive"].map((s,i)=>`<div><strong>${i+1}</strong><span>${s}</span></div>`).join("")}
        </div>
      </section>

      <section class="panel lms-panel guardrail-suite">
        <div class="section-heading"><h3>Automated Guardrails</h3><span>Submission and quiz controls</span></div>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="lockSubmissions" ${t.guardrails.lockSubmissions?"checked":""} ${J("lms")?"":"disabled"} /><span class="custom-check">${t.guardrails.lockSubmissions?r("check"):""}</span><span>Prevent edits after submission</span></label>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="hideAnswers" ${t.guardrails.hideAnswers?"checked":""} ${J("lms")?"":"disabled"} /><span class="custom-check">${t.guardrails.hideAnswers?r("check"):""}</span><span>Hide answers until quiz closes</span></label>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="parentSummaries" ${t.guardrails.parentSummaries?"checked":""} ${J("lms")?"":"disabled"} /><span class="custom-check">${t.guardrails.parentSummaries?r("check"):""}</span><span>Auto-return parent email summaries</span></label>
        ${ae("lms","LMS guardrails are managed by teachers and administrators.")}
      </section>

      <section class="panel lms-panel offline-suite">
        <div class="section-heading"><h3>Offline Learning</h3><span>${t.offlinePackReady?"Synced for low-connectivity use":"Build a pack for offline work"}</span></div>
        <div class="offline-card">
          <div class="offline-status ${t.offlinePackReady?"ready":""}">${t.offlinePackReady?r("check"):r("download")}</div>
          <div><strong>${t.offlinePackReady?"Offline pack ready":"Offline pack not built"}</strong><p>Includes assignments, rubrics, PDF annotations, and queued submissions for later sync.</p></div>
        </div>
      </section>

      <section class="panel lms-panel privacy-suite">
        <div class="section-heading"><h3>Learning Privacy</h3><span>FERPA-aware LMS</span></div>
        ${fa.map(s=>`<article class="strength-row">${r("shield-check")}<div><strong>${s.label}</strong><small>${s.detail}</small></div></article>`).join("")}
      </section>
    </section>
  `}function is(){const e=M.find(a=>a.id===t.selectedSubmissionId)||M[0];return`
    <section class="panel lms-panel gradebook-detail-suite">
      <div class="section-heading"><h3>Gradebook Detail</h3><span>Submissions, rubric, comments</span></div>
      <div class="gradebook-layout">
        <div class="submission-list">
          ${M.map(a=>`
            <button class="submission-row ${e.id===a.id?"active":""}" data-submission="${a.id}">
              ${r(a.status==="Missing"?"alert-triangle":"file-text")}
              <span><strong>${a.student}</strong><small>${a.assignment} • ${a.status}</small></span>
              <em>${a.score}%</em>
            </button>
          `).join("")}
        </div>
        <article class="submission-detail">
          <div class="section-heading"><h4>${e.student}</h4><span>${e.assignment}</span></div>
          ${e.rubric.map(([a,s])=>`<div class="rubric-row"><span>${a}</span>${le(Math.round(s/4*100))}<strong>${s}/4</strong></div>`).join("")}
          <label><span>Teacher comment</span><textarea id="submission-comment">${H(e.comment)}</textarea></label>
          <button class="primary-action" data-save-submission="${e.id}" ${T("teacher-tools","Only teachers and administrators can save grading comments.")}>${r("check")} Save Comment</button>
        </article>
      </div>
    </section>
  `}function os(){const e=b(),a=(e.studentPoints+t.completed.length*75).toLocaleString();return`
    <section class="dashboard-grid student-grid">
      <div class="hero-card student-hero">
        <div>
          <span class="badge soft">${r("star")} ${a} points</span>
          <h2>Welcome back, ${e.studentName}!</h2>
          <p>You are learning inside the ${e.name} instance. Keep going and unlock today's discovery badge.</p>
          <button class="primary-action" data-continue-adventure>${r("play")} Continue Adventure</button>
        </div>
        <div class="orbital-scene" aria-hidden="true"><span class="planet planet-one"></span><span class="planet planet-two"></span><span class="rocket-shape">${r("rocket")}</span></div>
      </div>
      ${w("Daily streak","5 days","trending-up","blue")}
      ${w("Books read","12","book-open","teal")}
      <section class="panel missions-panel">
        <div class="section-heading"><div><p class="eyebrow">Today</p><h3>My Missions</h3></div><button class="text-button" data-action="All available missions are already shown for this learner.">See all ${r("chevron-right")}</button></div>
        <div class="mission-list">
          ${ye.map(s=>{const i=t.completed.includes(s.id);return`
              <article class="mission-card ${s.accent}">
                <div class="mission-icon">${r(s.icon)}</div>
                <div class="mission-main">
                  <div class="mission-meta"><span>${s.subject}</span><span>${s.due}</span></div>
                  <h4>${s.title}</h4>
                  ${le(i?100:s.progress)}
                </div>
                <button class="complete-button ${i?"done":""}" data-complete="${s.id}">${r(i?"check":"play")} ${i?"Done":s.action}</button>
              </article>
            `}).join("")}
        </div>
      </section>
      <section class="panel awards-panel">
        <div class="section-heading"><h3>Awards</h3>${r("award")}</div>
        <div class="award-grid">${["Kindness Kid","Problem Solver","Fast Learner","Story Teller"].map(s=>`<div class="award-tile">${r("sparkles")}<span>${s}</span></div>`).join("")}</div>
      </section>
    </section>
  `}function rs(){const e=be();return`
    <section class="panel lms-panel background-services" aria-label="Passive background services">
      <div class="section-heading">
        <div><p class="eyebrow">Passive background layer</p><h3>Background Services</h3></div>
        <span>Runs quietly behind LMS work</span>
      </div>
      <div class="background-service-grid">
        <article class="background-service-card">
          <div>${r("refresh-cw")}<strong>Workspace sync</strong></div>
          <small>${nt.length} connected services attach, collect, archive, and export in the background.</small>
          <span>Passive</span>
        </article>
        <article class="background-service-card">
          <div>${r("paperclip")}<strong>File handling</strong></div>
          <small>${oe.length} class files are converted, attached, or archived without interrupting classroom flow.</small>
          <span>Passive</span>
        </article>
        <article class="background-service-card">
          <div>${r("bell")}<strong>Notification routing</strong></div>
          <small>${e} unread alert${e===1?"":"s"} stay in the notification tray unless action is needed.</small>
          <span>Tray</span>
        </article>
        <article class="background-service-card">
          <div>${r("calendar-days")}<strong>Calendar bridge</strong></div>
          <small>${ct.length} shared events inform deadlines and family reminders in the background.</small>
          <span>Synced</span>
        </article>
      </div>
      <details class="background-details">
        <summary>View background service activity</summary>
        <div class="background-activity">
          ${nt.map(a=>`<article><strong>${a.app}</strong><small>${a.action}</small><span>${a.status}</span></article>`).join("")}
          ${te.map(a=>`<article><strong>${a.item}</strong><small>${a.owner}</small><span>${t.offlinePackReady?a.status:"Waiting"}</span></article>`).join("")}
        </div>
      </details>
    </section>
  `}function cs(){const e=b(),a=t.selectedClass==="All"?F:F.filter(i=>i.name===t.selectedClass),s=t.rosterFilter==="All"?k:k.filter(i=>i.status===t.rosterFilter);return`
    <section class="dashboard-grid teacher-grid">
      <div class="welcome-strip"><div><p class="eyebrow">${e.name} instance</p><h2>Welcome back, Prof. Miller.</h2><p>${e.messages} need attention in this school tenant, with class data isolated from every other school.</p></div><button class="primary-action" data-create-assignment ${T("teacher-tools","Only teachers and administrators can create assignments.")}>${r("plus")} Create Assignment</button></div>
      ${w("Average grade",e.avgGrade,"trending-up","blue")}
      ${w("Attendance",e.attendance,"calendar-days","teal")}
      ${w("Messages",e.messages,"mail","gold")}
      <section class="panel class-panel">
        <div class="section-heading">
          <h3>Active Classes</h3>
          <select id="class-filter" aria-label="Filter classes"><option>All</option>${F.map(i=>`<option ${t.selectedClass===i.name?"selected":""}>${i.name}</option>`).join("")}</select>
        </div>
        <div class="class-list">${a.map(i=>`<article class="class-card"><div><h4>${i.name}</h4><p>${i.room}</p></div><div class="class-metrics"><span>${i.grade}% grade</span><span>${i.attendance}% attendance</span><span>${i.pending} pending</span></div><button class="icon-button" aria-label="Open ${i.name} options" data-action="${i.name} class tools opened.">${r("more-horizontal")}</button></article>`).join("")}</div>
      </section>
      <section class="panel assignment-composer-panel">
        <div class="section-heading"><h3>Create Assignment</h3><span>Realtime LMS filler data</span></div>
        <form id="assignment-form" class="assignment-form">
          <label><span>Title</span><input id="assignment-title" placeholder="Example: Reading Checkpoint" required /></label>
          <label><span>Class</span><select id="assignment-class">${F.map(i=>`<option>${i.name}</option>`).join("")}</select></label>
          <label><span>Type</span><select id="assignment-type"><option>Automated quiz</option><option>Writing task</option><option>Project</option><option>Reading response</option></select></label>
          <label><span>Lock date</span><input id="assignment-lock" value="Next Friday, 8:00 PM" /></label>
          <button class="primary-action" type="submit" ${T("teacher-tools","Only teachers and administrators can create assignments.")}>${r("plus")} Add Assignment</button>
        </form>
      </section>
      <section class="panel activity-panel">
        <div class="section-heading"><h3>Recent Student Activity</h3><button class="icon-button" aria-label="Refresh activity" data-refresh-activity>${r("refresh-cw")}</button></div>
        ${W.map(([i,c,d,y])=>`<article class="activity-row"><div class="avatar">${Q(i)}</div><div><p><strong>${i}</strong> ${c}</p><span>${d} | ${y}</span></div><button class="icon-button" aria-label="Reply to ${i}" data-reply-student="${i}">${r("pen-line")}</button></article>`).join("")}
      </section>
      <section class="panel grading-card"><h3>Grading To-Do</h3>${le(68)}<p>18 submissions left across 3 classes.</p><button class="secondary-action" data-open-role="lms">${r("clipboard-check")} Open Grading Hub</button></section>
      ${ae("teacher-tools","Teacher tools are read-only for this signed-in role.")}
      <section class="panel roster-panel">
        <div class="section-heading">
          <h3>Roster & Enrollments</h3>
          <select id="roster-filter" aria-label="Filter roster"><option>All</option><option>Active</option><option>Watch</option></select>
        </div>
        <div class="roster-table">
          ${s.map(i=>`
            <article class="roster-row editable-roster-row">
              <div><strong>${i.student}</strong><small>${i.className} • Guardian: ${i.guardian}</small></div>
              <label><span>Grade</span><input type="number" min="0" max="100" value="${i.grade}" data-roster-grade="${i.id}" /></label>
              <label><span>Attendance</span><input type="number" min="0" max="100" value="${i.attendance}" data-roster-attendance="${i.id}" /></label>
              <label><span>Status</span><select data-roster-status="${i.id}"><option ${i.status==="Active"?"selected":""}>Active</option><option ${i.status==="Watch"?"selected":""}>Watch</option></select></label>
            </article>
          `).join("")}
        </div>
      </section>
    </section>
  `}function ls(){const e=b();return`
    <section class="dashboard-grid parent-grid">
      <div class="welcome-strip parent-welcome"><div><p class="eyebrow">${e.learnerName}'s progress</p><h2>Welcome back, ${e.guardianName}.</h2><p>${e.learnerName}'s family view belongs to ${e.name}'s private instance.</p></div><button class="primary-action" data-open-role="messages">${r("send")} Message Teacher</button></div>
      ${w("Current grade","A-","trending-up","blue")}
      ${w("Attendance","98%","calendar-days","teal")}
      ${w("Reading pace","56%","book-open","gold")}
      <section class="panel teacher-note"><div class="teacher-avatar">MH</div><h3>Ms. Henderson</h3><p>"Leo is making great progress in Geometry. Keep practicing the new vocabulary cards at home."</p><button class="secondary-action" data-open-role="messages">${r("message-circle")} Start Chat</button></section>
      <section class="panel deadline-panel">
        <div class="section-heading"><h3>Upcoming Deadlines</h3><button class="text-button" data-open-role="platform">Calendar ${r("chevron-right")}</button></div>
        ${ke.map(a=>{const s=t.checkedDeadlines.includes(a.title);return`<label class="deadline-row ${a.urgent?"urgent":""}"><input type="checkbox" data-deadline="${a.title}" ${s?"checked":""} /><span class="custom-check">${s?r("check"):""}</span><span><strong>${a.title}</strong><small>${a.meta}</small></span></label>`}).join("")}
      </section>
      <section class="panel mobile-parent-panel">
        <div class="phone-preview">
          <div class="phone-top">${e.learnerName}</div>
          <strong>${e.name}</strong>
          <span>${t.workHoursOpen?"Teacher chat open":"Teacher chat resumes during work hours"}</span>
          <button data-open-role="messages">${r("send")} Message</button>
        </div>
        <div class="mobile-actions">
          <h3>Mobile Parent Experience</h3>
          ${Sa.map(a=>`<article class="mobile-action">${r("smartphone")}<div><strong>${a.title}</strong><small>${a.detail}</small></div></article>`).join("")}
        </div>
      </section>
      <section class="panel subject-panel"><h3>Subject Snapshot</h3>${[["Math",92],["Science",88],["Reading",84],["History",91]].map(([a,s])=>`<div class="subject-row"><span>${a}</span>${le(s)}<strong>${s}%</strong></div>`).join("")}</section>
    </section>
  `}function ds(){const e=b(),a=S.filter(i=>i.type===t.conversationFilter),s=S.find(i=>i.id===t.activeConversationId)||a[0]||S[0];return`
    <section class="messages-shell">
      <aside class="conversation-list">
        <div class="segment-control">${["Parents","Groups"].map(i=>`<button class="${t.conversationFilter===i?"active":""}" data-filter="${i}">${i}</button>`).join("")}</div>
        ${a.map(i=>`<button class="conversation ${s.id===i.id?"active":""}" data-conversation="${i.id}"><div class="avatar">${Q(i.name)}</div><div><strong>${i.name}</strong><span>${i.preview}</span></div>${i.unread?`<em>${i.unread}</em>`:""}</button>`).join("")}
        <div class="emergency-card ${t.emergencyOverride?"active":""}">
          ${r("alert-triangle")}
          <div><strong>Emergency Override</strong><span>${t.emergencyOverride?"Administrator enabled for urgent safety communication.":"Available only to school administrators."}</span></div>
          <button class="secondary-action" data-toggle-emergency ${T("emergency","Emergency override is admin-only.")}>${t.emergencyOverride?"Disable":"Enable"}</button>
        </div>
      </aside>
      <section class="chat-panel">
        <header class="chat-header"><div class="avatar">${Q(s.name)}</div><div><h3>${s.name}</h3><p>${s.online?"Online now":s.role}</p></div><div class="chat-tools"><button class="icon-button" aria-label="Start video call" data-start-call="${s.id}">${r("video")}</button><button class="icon-button" aria-label="More chat options" data-action="Chat options opened for ${s.name}.">${r("more-horizontal")}</button></div></header>
        ${t.activeCallName?`<div class="call-banner">${r("video")} <strong>Live call with ${t.activeCallName}</strong><button class="text-button" data-end-call>End call</button></div>`:""}
        <div class="work-hours-banner ${t.workHoursOpen||t.emergencyOverride?"open":"closed"}">
          ${r(t.workHoursOpen||t.emergencyOverride?"check":"x")}
          <div><strong>${t.emergencyOverride?"Emergency override active":t.workHoursOpen?"Communication window open":"After-hours messaging paused"}</strong><span>${e.workHours}. ${t.emergencyOverride?"Urgent administrator-approved messages can be sent now.":t.workHoursOpen?"Parents and teachers can message now.":e.afterHours}</span></div>
          <button class="text-button" data-toggle-hours>${t.workHoursOpen?"Simulate after hours":"Open work hours"}</button>
        </div>
        <div class="chat-stream">${s.messages.map(i=>`<div class="bubble ${i.from==="me"?"mine":""}"><p>${i.text}</p><span>${i.time}</span></div>`).join("")}</div>
        <form class="compose-box ${t.workHoursOpen||t.emergencyOverride?"":"locked"}" id="compose"><input id="message-draft" value="${t.draft}" placeholder="${t.workHoursOpen||t.emergencyOverride?`Message ${s.name}...`:"Messaging resumes during work hours"}" ${t.workHoursOpen||t.emergencyOverride?"":"disabled"} /><button class="primary-action" type="submit" ${t.workHoursOpen||t.emergencyOverride?"":"disabled"}>${r("send")} Send</button></form>
      </section>
    </section>
  `}function us(){const e=b(),a=E(),s=Ua(a);return`
    <section class="dashboard-grid community-grid">
      <div class="welcome-strip community-welcome">
        <div>
          <p class="eyebrow">${e.name} community board</p>
          <h2>Approved school community chat</h2>
          <p>Parents and teachers can submit information, links, photos, or files. School administrators approve posts before they appear publicly.</p>
        </div>
        <span class="approval-badge">${a.pending.length} awaiting approval</span>
      </div>

      <section class="panel board-composer">
        <div class="section-heading"><h3>Create Post</h3><span>Parent or teacher submission</span></div>
        <form id="board-form" class="board-form">
          <label><span>Author</span><input id="board-author" value="Sarah Jenkins" /></label>
          <label><span>Role</span><select id="board-role"><option>Parent</option><option>Teacher</option></select></label>
          <label><span>Type</span><select id="board-type"><option>Announcement</option><option>Resource</option><option>Photo</option><option>Event</option><option>File</option></select></label>
          <label><span>Audience</span><select id="board-audience"><option>All families</option><option>Grade 4</option><option>Teachers</option><option>PTA / PTO</option></select></label>
          <label class="span-2"><span>Title</span><input id="board-title" placeholder="What should the community know?" required /></label>
          <label class="span-2"><span>Message</span><textarea id="board-body" placeholder="Post details, event information, resource description, or context for media..." required></textarea></label>
          <label class="span-2"><span>Media or attachment</span><input id="board-media" placeholder="Example: 3 photos, flyer PDF, Google Drive link, website link" /></label>
          <label class="span-2"><span>Assigned approver</span><select id="board-approver">${a.approvers.map(i=>`<option value="${i.id}" ${s.id===i.id?"selected":""}>${i.name} - ${i.title}</option>`).join("")}</select></label>
          <button class="primary-action span-2" type="submit">${r("send")} Submit for Admin Approval</button>
        </form>
      </section>

      <section class="panel approver-panel">
        <div class="section-heading"><h3>Assigned Post Approvers</h3>${r("shield-check")}</div>
        <div class="approver-list">
          ${a.approvers.map(i=>`
            <label class="approver-row ${i.active?"active":""}">
              <input type="checkbox" data-approver-toggle="${i.id}" ${i.active?"checked":""} />
              <span class="custom-check">${i.active?r("check"):""}</span>
              <span><strong>${i.name}</strong><small>${i.title}</small></span>
            </label>
          `).join("")}
        </div>
        <form id="approver-form" class="approver-form">
          <input id="new-approver-name" placeholder="Add approver name" />
          <select id="new-approver-title"><option>Principal</option><option>Assistant Principal</option><option>Dean of Students</option><option>Department Chair</option></select>
          <button class="secondary-action" type="submit">${r("plus")} Assign</button>
        </form>
      </section>

      <section class="panel approval-queue">
        <div class="section-heading"><h3>Administrator Approval Queue</h3>${r("shield-check")}</div>
        <div class="queue-list">
          ${a.pending.length?a.pending.map(i=>ps(i)).join(""):'<div class="empty-state">No posts waiting for approval.</div>'}
        </div>
      </section>

      <section class="panel published-board">
        <div class="section-heading"><h3>Published Community Board</h3><span>${a.published.length} approved</span></div>
        <div class="post-list">
          ${a.published.map(i=>ms(i)).join("")}
        </div>
      </section>

      <section class="panel board-policy">
        <h3>Posting Rules</h3>
        <ul>
          <li>Parents and teachers can submit posts and media.</li>
          <li>School administrators approve before publication.</li>
          <li>Direct parent-teacher communication is limited to school work hours.</li>
          <li>Each school instance has a separate board and approval queue.</li>
          <li>Published posts are visible only inside the selected school tenant.</li>
        </ul>
        ${ae("approve-posts","Only administrators can approve or reject community posts.")}
      </section>

      <section class="panel workflow-rules-panel">
        <div class="section-heading"><h3>Approval Workflow Rules</h3>${r("shield-check")}</div>
        ${$a.map(([i,c])=>`<article class="rule-row"><strong>${i}</strong><span>${c}</span></article>`).join("")}
      </section>
    </section>
  `}function ps(e){const a=E();return`
    <article class="board-post pending-post">
      <div class="post-header"><div class="avatar">${Q(e.author)}</div><div><strong>${e.title}</strong><span>${e.author} • ${e.role} • ${e.audience}</span></div></div>
      <p>${e.body}</p>
      <div class="post-media">${r("paperclip")} ${e.media||"No media"}</div>
      <div class="assigned-approver">${r("shield-check")} Assigned to ${za(a,e.approverId)}</div>
      <div class="approval-actions">
        <button class="secondary-action" data-reject-post="${e.id}" ${T("approve-posts","Only administrators can reject community posts.")}>${r("x")} Reject</button>
        <button class="primary-action" data-approve-post="${e.id}" ${T("approve-posts","Only administrators can approve community posts.")}>${r("check")} Approve</button>
      </div>
    </article>
  `}function ms(e){return`
    <article class="board-post">
      <div class="post-header"><div class="avatar">${Q(e.author)}</div><div><strong>${e.title}</strong><span>${e.author} • ${e.role} • ${e.time}</span></div></div>
      <p>${e.body}</p>
      <div class="post-tags"><span>${e.type}</span><span>${e.audience}</span><span>${e.media||"No media"}</span></div>
    </article>
  `}function hs(){const e=Z(),a=e.schools.length+1,s=`demo-school-${Date.now()}`,i={id:s,name:`Demo Learning Academy ${a}`,category:"Public",students:240+a*18,staff:32+a,status:"Onboarding",subdomain:`demoacademy${a}`,plan:"District Core",modules:["SIS","LMS","Messaging","Family Portal"],storage:18,uptime:"Provisioning",theme:"Discovery Blue",isolation:"Dedicated tenant database",avgGrade:"89.0%",attendance:"95.0%",messages:"0 pending",studentPoints:760,studentName:"Explorer",guardianName:"Jordan",learnerName:"Riley",workHours:"Mon-Fri, 8:00 AM-4:00 PM",afterHours:"Messages are queued until office hours"};e.schools.push(i),t.selectedSchool=s,f("Created demo school tenant",e.name),t.toast=`${i.name} was added to ${e.name}.`,m()}function gs(){const e=`Quick Check ${C.length+1}`;wt({title:e,className:t.selectedClass==="All"?"All classes":t.selectedClass,type:"Teacher-created assignment",lockDate:"Next Friday, 8:00 PM"}),X("lms",`${e} was created in the LMS grading suite.`)}function wt({title:e,className:a,type:s,lockDate:i}){const c=`${e.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${Date.now()}`;C.unshift({id:c,title:e,type:s,rubric:"Auto rubric draft",analytics:0,lockDate:i||"Next Friday, 8:00 PM",exception:"None"});const d=k.find(y=>a==="All classes"||y.className===a)||k[0];d&&(M.unshift({id:`sub-${Date.now()}`,student:d.student,assignment:e,status:"Needs review",score:0,rubric:[["Completion",0],["Accuracy",0],["Explanation",0]],comment:"New assignment created. Awaiting student work."}),t.selectedSubmissionId=M[0].id),B("Action",`${e} is ready to publish`,a,"Teacher inbox"),P("LMS",`${e} created`,`${s} assigned to ${a}.`),f(`Created assignment ${e}`,b().name)}function vs(){const e=ye.find(a=>!t.completed.includes(a.id));if(!e){v("All missions are complete. Reset the demo or wait for the next adventure.");return}t.completed.includes(e.id)||t.completed.push(e.id),v(`${e.title} marked complete. Points updated.`)}function bs(){W.unshift(["Demo Student","opened the newest assignment","Just now",t.selectedClass==="All"?"All Classes":t.selectedClass]),v("Student activity refreshed.")}function fs(e){t.conversationFilter="Groups",t.activeConversationId="grade-team",t.draft=`Following up about ${e}'s recent activity.`,X("messages",`Reply draft started for ${e}.`)}function ys(){var a,s,i,c,d,y,g,j,ue,pe,se,ne,me,ie,Ee,De,Ne,Oe,xe,qe,Te,Re,je,Ie,Fe,Ge,He,Be,_e,Ue,ze,We,Je,Ve,Ye,Ke,Qe,Ze,Xe,et,tt,at;document.querySelectorAll("[data-role]").forEach(n=>{n.addEventListener("click",o=>{o.preventDefault(),fe(n.dataset.role)})}),(a=document.querySelector("[data-reset-demo]"))==null||a.addEventListener("click",()=>{Ra(),window.location.hash!=="#state-admin"&&history.pushState(null,"","#state-admin"),m()}),(s=document.querySelector("#global-search"))==null||s.addEventListener("input",n=>{t.searchTerm=n.target.value,m()}),(i=document.querySelector("[data-clear-search]"))==null||i.addEventListener("click",()=>{t.searchTerm="",m()}),document.querySelectorAll("[data-open-role]").forEach(n=>{n.addEventListener("click",()=>{var o;t.searchTerm="",X(n.dataset.openRole,`${((o=q.find(l=>l.id===n.dataset.openRole))==null?void 0:o.label)||"Workspace"} opened.`)})});function e(n,o="Signed in as"){n&&(t.currentUser=n.id,f(`Switched demo login to ${n.role}`,b().name,n.label),t.toast=`${o} ${n.label}.`,fe(n.landing))}(c=document.querySelector("#login-profile"))==null||c.addEventListener("change",n=>{t.apiMode!=="live-api"&&e(A.find(o=>o.id===n.target.value))}),(d=document.querySelector("#login-form"))==null||d.addEventListener("submit",async n=>{n.preventDefault();const o=document.querySelector("#login-profile").value,l=A.find(u=>u.id===o);if(t.apiMode!=="live-api"){e(l);return}try{const u=await Na(o,document.querySelector("#login-password").value);localStorage.setItem("educonnect-session-token",u.token),e(u.user,"Securely signed in as")}catch(u){v(u.message||"Invalid credentials.")}}),(y=document.querySelector("#api-mode"))==null||y.addEventListener("change",async n=>{if(t.apiMode=n.target.value,t.apiMode==="mock-api"||t.apiMode==="live-api"){try{await bt(t.apiMode),v(t.apiMode==="live-api"?"Server database mode enabled.":"Mock API mode enabled.")}catch{t.apiMode="local",v("Server API unavailable. Local demo state mode enabled.")}return}v("Local demo state mode enabled.")}),(g=document.querySelector("[data-start-tour]"))==null||g.addEventListener("click",()=>{t.tourOpen=!0,t.tourStep=0,X(G[0].role,"Walkthrough started.")}),(j=document.querySelector("[data-tour-next]"))==null||j.addEventListener("click",()=>{if(t.tourStep>=G.length-1){t.tourOpen=!1,v("Walkthrough complete.");return}t.tourStep+=1,X(G[t.tourStep].role)}),(ue=document.querySelector("[data-tour-prev]"))==null||ue.addEventListener("click",()=>{t.tourStep!==0&&(t.tourStep-=1,X(G[t.tourStep].role))}),document.querySelectorAll("[data-action]").forEach(n=>{n.addEventListener("click",()=>v(n.dataset.action))}),(pe=document.querySelector("[data-dismiss-toast]"))==null||pe.addEventListener("click",()=>{t.toast="",m()}),(se=document.querySelector("[data-toggle-notifications]"))==null||se.addEventListener("click",()=>{t.notificationsOpen=!t.notificationsOpen,t.settingsOpen=!1,m()}),(ne=document.querySelector("[data-toggle-settings]"))==null||ne.addEventListener("click",()=>{t.settingsOpen=!t.settingsOpen,t.notificationsOpen=!1,m()}),document.querySelectorAll("[data-close-panel]").forEach(n=>{n.addEventListener("click",()=>{t.notificationsOpen=!1,t.settingsOpen=!1,m()})}),(me=document.querySelector("[data-mark-notifications]"))==null||me.addEventListener("click",()=>{L.forEach(n=>{n.read=!0}),v("All notifications marked read.")}),document.querySelectorAll("[data-dismiss-notification]").forEach(n=>{n.addEventListener("click",()=>{const o=L.findIndex(l=>l.id===n.dataset.dismissNotification);o>=0&&L.splice(o,1),m()})}),document.querySelectorAll("[data-simulate-live]").forEach(n=>{n.addEventListener("click",()=>ft("manual"))}),(ie=document.querySelector("[data-toggle-live]"))==null||ie.addEventListener("change",n=>{t.liveUpdates=n.target.checked,v(t.liveUpdates?"Realtime updates enabled.":"Realtime updates paused.")}),(Ee=document.querySelector("#auth-provider"))==null||Ee.addEventListener("change",n=>{t.authProvider=n.target.value,f(`Updated auth provider to ${t.authProvider}`),v(`${t.authProvider} selected.`)}),(De=document.querySelector("#backend-provider"))==null||De.addEventListener("change",n=>{t.backendProvider=n.target.value,f(`Updated backend provider to ${t.backendProvider}`),v(`${t.backendProvider} selected as backend provider.`)}),document.querySelectorAll("[data-set-gateway]").forEach(n=>{n.addEventListener("click",()=>{t.gatewayMode=n.dataset.setGateway,P("Production","Gateway mode updated",`Launch gateway is now ${t.gatewayMode}.`),v(t.gatewayMode==="backend"?"Backend-ready mode enabled.":"Demo mode enabled.")})}),(Ne=document.querySelector("[data-provision-schema]"))==null||Ne.addEventListener("click",()=>{Y.forEach(n=>{n.status="Ready"}),P("Database","Mock schema provisioned",`${Y.length} production tables marked ready.`),f("Provisioned mock production schema"),v("Database blueprint marked ready.")}),document.querySelectorAll("[data-onboarding-task]").forEach(n=>{n.addEventListener("change",()=>{const o=_.find(l=>l.id===n.dataset.onboardingTask);o&&(o.done=n.checked,f(`${o.done?"Completed":"Reopened"} onboarding task: ${o.label}`),v("Onboarding checklist updated."))})}),(Oe=document.querySelector("#onboarding-user-form"))==null||Oe.addEventListener("submit",n=>{n.preventDefault();const o=document.querySelector("#onboarding-user-name").value.trim(),l=document.querySelector("#onboarding-user-role").value;if(!o)return;const u=l==="Admin"?"school-admin":l.toLowerCase();A.push({id:`${l.toLowerCase()}-${Date.now()}`,label:o,role:l,landing:u,permissions:l==="Admin"?["manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]:l==="Teacher"?["lms","teacher-tools","message","submit-post"]:l==="Parent"?["message","submit-post"]:["student-missions"]}),B("Action",`${o} invited`,b().name,"Onboarding"),f(`Invited ${l}: ${o}`),v(`${o} invited as ${l}.`)}),(xe=document.querySelector("#production-file-upload"))==null||xe.addEventListener("change",async n=>{var l;const o=Array.from(n.target.files||[]);for(const u of o)if(t.apiMode==="live-api")try{const I=await Oa(u,t.role==="community"?"Community":"LMS");x.unshift(I.file)}catch{x.unshift({id:`upload-${Date.now()}-${Math.random().toString(16).slice(2)}`,name:u.name,area:t.role==="community"?"Community":"LMS",size:`${Math.max(1,Math.round(u.size/1024))} KB`,status:"Server upload failed; metadata stored locally"})}else x.unshift({id:`upload-${Date.now()}-${Math.random().toString(16).slice(2)}`,name:u.name,area:t.role==="community"?"Community":"LMS",size:`${Math.max(1,Math.round(u.size/1024))} KB`,status:"Stored in demo metadata; ready for cloud storage"});P("Files","Upload metadata captured",`${((l=n.target.files)==null?void 0:l.length)||0} file(s) added to production upload queue.`),f("Added production upload metadata"),v("File upload metadata added.")}),(qe=document.querySelector("[data-send-delivery-test]"))==null||qe.addEventListener("click",async()=>{if(t.apiMode==="live-api")try{(await xa("Launch test group")).records.forEach(o=>U.unshift(o))}catch{["Email","SMS","Push"].forEach(n=>{U.unshift({id:`delivery-${Date.now()}-${n}`,channel:n,audience:"Launch test group",status:"Failed over locally",detail:`${n} test could not reach operational API`})})}else["Email","SMS","Push"].forEach(n=>{U.unshift({id:`delivery-${Date.now()}-${n}`,channel:n,audience:"Launch test group",status:"Delivered",detail:`${n} test generated from Launch Control`})});B("FYI","Notification delivery test completed",b().name,"Launch Control"),f("Sent notification delivery test batch"),v("Notification delivery test completed.")}),document.querySelectorAll("[data-security-check]").forEach(n=>{n.addEventListener("change",()=>{const o=z.find(l=>l.id===n.dataset.securityCheck);o&&(o.done=n.checked,o.status=o.done?"Configured":"Needs review",f(`Updated security checklist: ${o.label}`),v("Security checklist updated."))})}),document.querySelectorAll("[data-toggle-setting]").forEach(n=>{n.addEventListener("change",()=>{t[n.dataset.toggleSetting]=n.checked,m()})}),(Te=document.querySelector("[data-export-demo]"))==null||Te.addEventListener("click",async()=>{const n=JSON.stringify(vt(),null,2),o=new Blob([n],{type:"application/json"}),l=URL.createObjectURL(o),u=document.createElement("a");u.href=l,u.download="educonnect-demo-state.json",u.click(),URL.revokeObjectURL(l),f("Exported demo state JSON");try{await navigator.clipboard.writeText(n),v("Demo state exported and copied to clipboard.")}catch{v("Demo state exported as a JSON file.")}}),(Re=document.querySelector("#import-demo-state"))==null||Re.addEventListener("change",async n=>{var l;const o=(l=n.target.files)==null?void 0:l[0];if(o)try{const u=JSON.parse(await o.text()),I=Ga(u);if(I.length){v(`Import failed: ${I.join(" ")}`);return}Ae(u),f("Imported demo state JSON"),v("Demo state imported.")}catch{v("That JSON file could not be imported.")}}),(je=document.querySelector("[data-add-school]"))==null||je.addEventListener("click",hs),(Ie=document.querySelector("[data-create-assignment]"))==null||Ie.addEventListener("click",gs),(Fe=document.querySelector("#assignment-form"))==null||Fe.addEventListener("submit",n=>{n.preventDefault();const o=document.querySelector("#assignment-title").value.trim();if(!o)return;const l=document.querySelector("#assignment-class").value;wt({title:o,className:l,type:document.querySelector("#assignment-type").value,lockDate:document.querySelector("#assignment-lock").value.trim()}),v(`${o} added to ${l}.`)}),(Ge=document.querySelector("[data-continue-adventure]"))==null||Ge.addEventListener("click",vs),(He=document.querySelector("[data-refresh-activity]"))==null||He.addEventListener("click",bs),document.querySelectorAll("[data-reply-student]").forEach(n=>{n.addEventListener("click",()=>fs(n.dataset.replyStudent))}),document.querySelectorAll("[data-guardrail]").forEach(n=>{n.addEventListener("change",()=>{t.guardrails[n.dataset.guardrail]=n.checked,f(`Updated guardrail ${n.dataset.guardrail}`),v("Guardrail setting updated.")})}),document.querySelectorAll("[data-profile-permission]").forEach(n=>{n.addEventListener("change",()=>{const[o,l]=n.dataset.profilePermission.split(":"),u=A.find(I=>I.id===o);u&&(u.permissions=n.checked?[...new Set([...u.permissions,l])]:u.permissions.filter(I=>I!==l),f(`Updated ${u.role} permission: ${l}`),v(`${u.role} permissions updated.`))})}),document.querySelectorAll("[data-submission]").forEach(n=>{n.addEventListener("click",()=>{t.selectedSubmissionId=n.dataset.submission,m()})}),document.querySelectorAll("[data-save-submission]").forEach(n=>{n.addEventListener("click",()=>{const o=M.find(l=>l.id===n.dataset.saveSubmission);o&&(o.comment=document.querySelector("#submission-comment").value.trim(),o.status="Reviewed",f(`Saved gradebook comment for ${o.student}`,o.assignment),v("Gradebook comment saved."))})}),document.querySelectorAll("[data-complete]").forEach(n=>{n.addEventListener("click",()=>{const o=Number(n.dataset.complete);t.completed.includes(o)||t.completed.push(o);const l=ye.find(u=>u.id===o);v(`${(l==null?void 0:l.title)||"Mission"} marked complete.`)})}),(Be=document.querySelector("#class-filter"))==null||Be.addEventListener("change",n=>{t.selectedClass=n.target.value,m()}),(_e=document.querySelector("#roster-filter"))==null||_e.addEventListener("change",n=>{t.rosterFilter=n.target.value,m()}),document.querySelectorAll("[data-roster-grade], [data-roster-attendance], [data-roster-status]").forEach(n=>{n.addEventListener("change",()=>{const o=n.dataset.rosterGrade||n.dataset.rosterAttendance||n.dataset.rosterStatus,l=k.find(u=>u.id===o);l&&(n.dataset.rosterGrade&&(l.grade=Math.max(0,Math.min(100,Number(n.value)||0))),n.dataset.rosterAttendance&&(l.attendance=Math.max(0,Math.min(100,Number(n.value)||0))),n.dataset.rosterStatus&&(l.status=n.value),P("Roster",`${l.student} record updated`,`Grade ${l.grade}%, attendance ${l.attendance}%, status ${l.status}.`),f(`Updated roster record for ${l.student}`,l.className),v(`${l.student}'s roster record updated.`))})}),document.querySelectorAll("[data-lms-account]").forEach(n=>{n.addEventListener("click",()=>{t.activeAccount=n.dataset.lmsAccount,m()})}),(Ue=document.querySelector("[data-build-offline]"))==null||Ue.addEventListener("click",()=>{t.offlinePackReady=!0,te.forEach(n=>{n.status=n.status.replace("Waiting for pack","Queued for upload")}),v("Offline pack built and sync queue prepared.")}),(ze=document.querySelector("#state-filter"))==null||ze.addEventListener("change",n=>{t.selectedState=n.target.value;const o=de();t.selectedDistrict=o.districts[0].id,t.selectedSchool=o.districts[0].schools[0].id,m()}),(We=document.querySelector("#district-filter"))==null||We.addEventListener("change",n=>{t.selectedDistrict=n.target.value,t.selectedSchool=Z().schools[0].id,m()}),(Je=document.querySelector("#school-filter"))==null||Je.addEventListener("change",n=>{t.selectedSchool=n.target.value,m()}),(Ve=document.querySelector("#design-form"))==null||Ve.addEventListener("change",()=>{ot(),m()}),(Ye=document.querySelector("#design-form"))==null||Ye.addEventListener("submit",n=>{n.preventDefault(),ot(),m()}),document.querySelectorAll("[data-design-preset]").forEach(n=>{n.addEventListener("click",()=>{const o=b(),l=wa.find(u=>u.name===n.dataset.designPreset);l&&(N[o.id]={...Pe(),...l},m())})}),document.querySelectorAll("[data-manage-district]").forEach(n=>{n.addEventListener("click",()=>{t.selectedDistrict=n.dataset.manageDistrict,t.selectedSchool=Z().schools[0].id,m()})}),document.querySelectorAll("[data-manage-school]").forEach(n=>{n.addEventListener("click",()=>{t.selectedSchool=n.dataset.manageSchool,m()})}),document.querySelectorAll("[data-deadline]").forEach(n=>{n.addEventListener("change",()=>{const o=n.dataset.deadline;t.checkedDeadlines=t.checkedDeadlines.includes(o)?t.checkedDeadlines.filter(l=>l!==o):[...t.checkedDeadlines,o],m()})}),document.querySelectorAll("[data-filter]").forEach(n=>{n.addEventListener("click",()=>{t.conversationFilter=n.dataset.filter;const o=S.find(l=>l.type===t.conversationFilter);o&&(t.activeConversationId=o.id),m()})}),document.querySelectorAll("[data-conversation]").forEach(n=>{n.addEventListener("click",()=>{t.activeConversationId=n.dataset.conversation;const o=S.find(l=>l.id===t.activeConversationId);o&&(o.unread=0),m()})}),(Ke=document.querySelector("#message-draft"))==null||Ke.addEventListener("input",n=>{t.draft=n.target.value}),(Qe=document.querySelector("[data-toggle-hours]"))==null||Qe.addEventListener("click",()=>{t.workHoursOpen=!t.workHoursOpen,m()}),(Ze=document.querySelector("[data-toggle-emergency]"))==null||Ze.addEventListener("click",()=>{t.emergencyOverride=!t.emergencyOverride,f(`${t.emergencyOverride?"Enabled":"Disabled"} emergency override`),m()}),document.querySelectorAll("[data-start-call]").forEach(n=>{n.addEventListener("click",()=>{const o=S.find(l=>l.id===n.dataset.startCall);o&&(t.activeCallName=o.name,P("Messages",`Live call started with ${o.name}`,"Video room is active in the communication hub."),f(`Started video call with ${o.name}`,b().name),v(`Video call started with ${o.name}.`))})}),(Xe=document.querySelector("[data-end-call]"))==null||Xe.addEventListener("click",()=>{const n=t.activeCallName;t.activeCallName="",n&&P("Messages",`Live call ended with ${n}`,"Call state closed."),v("Video call ended.")}),(et=document.querySelector("#compose"))==null||et.addEventListener("submit",n=>{if(n.preventDefault(),!t.workHoursOpen&&!t.emergencyOverride)return;const o=t.draft.trim();o&&(S.splice(0,S.length,...S.map(l=>l.id===t.activeConversationId?{...l,preview:o,messages:[...l.messages,{from:"me",text:o,time:"Now"}]}:l)),P("Messages","Message sent",`Delivered to ${$e().label}'s active conversation.`),B("FYI","Message delivered",b().name,"Messages"),t.draft="",m())}),(tt=document.querySelector("#board-form"))==null||tt.addEventListener("submit",n=>{n.preventDefault();const o=b();E().pending.unshift({id:`${o.id}-${Date.now()}`,author:document.querySelector("#board-author").value.trim()||"Community Member",role:document.querySelector("#board-role").value,type:document.querySelector("#board-type").value,audience:document.querySelector("#board-audience").value,title:document.querySelector("#board-title").value.trim(),body:document.querySelector("#board-body").value.trim(),media:document.querySelector("#board-media").value.trim()||"No media",approverId:document.querySelector("#board-approver").value,time:"Awaiting administrator approval"}),P("Community","Community post submitted",`${document.querySelector("#board-title").value.trim()} is waiting for approval.`),B("Action","Community post awaiting approval",o.name,"Approval queue"),f("Submitted community post for approval",o.name),v("Post submitted for administrator approval.")}),document.querySelectorAll("[data-approver-toggle]").forEach(n=>{n.addEventListener("change",()=>{const o=E();o.approvers=o.approvers.map(l=>l.id===n.dataset.approverToggle?{...l,active:n.checked}:l),m()})}),(at=document.querySelector("#approver-form"))==null||at.addEventListener("submit",n=>{n.preventDefault();const o=E(),l=document.querySelector("#new-approver-name").value.trim();l&&(o.approvers.push({id:`${l.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${Date.now()}`,name:l,title:document.querySelector("#new-approver-title").value,active:!0}),m())}),document.querySelectorAll("[data-approve-post]").forEach(n=>{n.addEventListener("click",()=>{const o=E(),l=o.pending.find(u=>u.id===n.dataset.approvePost);l&&(o.pending=o.pending.filter(u=>u.id!==l.id),o.published.unshift({...l,time:"Approved just now"}),f(`Approved community post: ${l.title}`),m())})}),document.querySelectorAll("[data-reject-post]").forEach(n=>{n.addEventListener("click",()=>{const o=E(),l=o.pending.find(u=>u.id===n.dataset.rejectPost);o.pending=o.pending.filter(u=>u.id!==n.dataset.rejectPost),l&&f(`Rejected community post: ${l.title}`),m()})})}async function $s(){if(qa(),t.apiMode==="mock-api"||t.apiMode==="live-api")try{await bt(t.apiMode)}catch{t.apiMode="local",t.toast="Server API unavailable. Local demo state mode enabled."}we()&&(t.role=we()),window.addEventListener("hashchange",()=>{const e=we();e&&e!==t.role&&fe(e,!1)}),window.addEventListener("load",yt),m(),window.setInterval(()=>{!t.liveUpdates||document.hidden||ft("automatic")},15e3)}$s();
