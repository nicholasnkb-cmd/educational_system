(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const b of u.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&o(b)}).observe(document,{childList:!0,subtree:!0});function a(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerPolicy&&(u.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?u.credentials="include":r.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(r){if(r.ep)return;r.ep=!0;const u=a(r);fetch(r.href,u)}})();/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=(e,t,a=[])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(r=>{o.setAttribute(r,String(t[r]))}),a.length&&a.forEach(r=>{const u=fa(...r);o.appendChild(u)}),o};var Fa=([e,t,a])=>fa(e,t,a);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=e=>Array.from(e.attributes).reduce((t,a)=>(t[a.name]=a.value,t),{}),Ua=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",_a=e=>e.flatMap(Ua).map(a=>a.trim()).filter(Boolean).filter((a,o,r)=>r.indexOf(a)===o).join(" "),Ga=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,a,o)=>a.toUpperCase()+o.toLowerCase()),la=(e,{nameAttr:t,icons:a,attrs:o})=>{var j;const r=e.getAttribute(t);if(r==null)return;const u=Ga(r),b=a[u];if(!b)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const m=Ba(e),[E,L,z]=b,F={...L,"data-lucide":r,...o,...m},S=_a(["lucide",`lucide-${r}`,m,o]);S&&Object.assign(F,{class:S});const R=Fa([E,F,z]);return(j=e.parentNode)==null?void 0:j.replaceChild(R,e)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=["svg",A,[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=["svg",A,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=["svg",A,[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=["svg",A,[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=["svg",A,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=["svg",A,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=["svg",A,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=["svg",A,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=["svg",A,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=["svg",A,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=["svg",A,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=["svg",A,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=["svg",A,[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=["svg",A,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=["svg",A,[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=["svg",A,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=["svg",A,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=["svg",A,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=["svg",A,[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=["svg",A,[["path",{d:"m3 11 18-5v12L3 14v-3z"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=["svg",A,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=["svg",A,[["path",{d:"M13.234 20.252 21 12.3"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=["svg",A,[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=["svg",A,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=["svg",A,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=["svg",A,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=["svg",A,[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=["svg",A,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=["svg",A,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=["svg",A,[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=["svg",A,[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=["svg",A,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=["svg",A,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=["svg",A,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=["svg",A,[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=["svg",A,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=["svg",A,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=["svg",A,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=["svg",A,[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=["svg",A,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=({icons:e={},nameAttr:t="data-lucide",attrs:a={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const o=document.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(r=>la(r,{nameAttr:t,icons:e,attrs:a})),t==="data-lucide"){const r=document.querySelectorAll("[icon-name]");r.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(r).forEach(u=>la(u,{nameAttr:"icon-name",icons:e,attrs:a})))}},Ee=[{id:"state-admin",label:"State Admin",icon:"map",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"district-admin",label:"District Admin",icon:"building-2",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"school-admin",label:"School Admin",icon:"shield-check",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"lms",label:"LMS",icon:"layers",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"student",label:"Student",icon:"sparkles",image:"/stitch_educonnect_interactive_portal/student_portal_1/screen.png"},{id:"teacher",label:"Teacher",icon:"graduation-cap",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"parent",label:"Parent",icon:"users",image:"/stitch_educonnect_interactive_portal/parent_dashboard/screen.png"},{id:"messages",label:"Messages",icon:"message-circle",image:"/stitch_educonnect_interactive_portal/communication_hub/screen.png"},{id:"community",label:"Community",icon:"megaphone",image:"/stitch_educonnect_interactive_portal/communication_hub/screen.png"}],n={role:"state-admin",selectedState:"ny",selectedDistrict:"nyc-doe",selectedSchool:"ps-118",completed:[],selectedClass:"All",checkedDeadlines:["Science: Water Cycle Model"],conversationFilter:"Parents",activeConversationId:"sarah",draft:"",boardAudience:"All families",activeAccount:"teacher-school",selectedSubmissionId:"sub-1",rosterFilter:"All",liveUpdates:!0,realtimeTick:0,activeCallName:"",gatewayMode:"demo",backendProvider:"Supabase",authProvider:"Role-based demo auth",offlinePackReady:!1,workHoursOpen:!0,emergencyOverride:!1,currentUser:"state-admin",apiMode:"local",tourOpen:!1,tourStep:0,searchTerm:"",notificationsOpen:!1,settingsOpen:!1,toast:"",compactMode:!1,highContrast:!1,guardrails:{lockSubmissions:!0,hideAnswers:!0,parentSummaries:!0},lessonBuilderOpen:!1,lessonDraft:null,lessonFilter:"All",lessonPreviewId:"",activeStudentLessonId:"lesson-moon-phases",lessonProgress:{},activeAssignmentId:"essay",assignmentFilter:"All",studentNotes:{},bookmarkedLessons:[],fontScale:"Normal",dyslexiaFriendly:!1,reducedMotion:!1,language:"English",notificationPreferences:{email:!0,sms:!1,push:!0,dueDays:2,missingWork:!0,gradeReturned:!0},impersonatingFrom:"",pwaInstalled:!1,activeOperationsTab:"tenants",academicRolloverPreview:null},_=[{id:"global-admin",label:"Global Test Admin",role:"Global Admin",landing:"state-admin",scope:"state",stateId:"ny",permissions:["global-access","manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance","submit-post","student-missions"]},{id:"state-admin",label:"NYS State Admin",role:"State Admin",landing:"state-admin",scope:"state",stateId:"ny",permissions:["manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]},{id:"district-admin",label:"District Admin",role:"District Admin",landing:"district-admin",scope:"district",stateId:"ny",districtId:"nyc-doe",permissions:["manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]},{id:"school-admin",label:"School Admin",role:"School Admin",landing:"school-admin",scope:"school",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",permissions:["approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]},{id:"teacher",label:"Demo Teacher",role:"Teacher",landing:"teacher",scope:"school",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",permissions:["lms","teacher-tools","message","submit-post"]},{id:"student",label:"Demo Learner",role:"Student",landing:"student",scope:"student",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",studentId:"learner-1",permissions:["student-missions"]},{id:"parent",label:"Demo Guardian",role:"Parent",landing:"parent",scope:"guardian",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",studentIds:["learner-1"],permissions:["message","submit-post"]}],Ts=[["global-access","Access every test workspace"],["manage-tenants","Manage tenants"],["manage-users","Manage users"],["view-compliance","View compliance"],["approve-posts","Approve posts"],["emergency","Emergency override"],["lms","Manage LMS"],["teacher-tools","Teacher tools"],["message","Messaging"],["submit-post","Submit posts"],["student-missions","Student missions"]],Je=[{id:1,subject:"Science",title:"Space Explorers: The Moon",due:"Due tomorrow",action:"Start Mission",progress:78,accent:"teal",icon:"rocket"},{id:2,subject:"Math",title:"Number Quest: Addition",due:"Due in 2 days",action:"Play Now",progress:44,accent:"blue",icon:"star"},{id:3,subject:"Reading",title:"The Whale and the Star",due:"Keep reading",action:"Continue",progress:56,accent:"gold",icon:"book-open"}],le=[{id:"ny",name:"New York",agency:"NYS Education Department (NYSED)",districts:[{id:"nyc-doe",name:"New York City Public Schools",region:"New York City",superintendent:"NYC Chancellor",schools:[{id:"ps-118",name:"P.S. 118 Discovery Academy",category:"Public",students:684,staff:78,status:"Active",subdomain:"ps118",plan:"District Core",modules:["SIS","LMS","Messaging","Family Portal"],storage:64,uptime:"99.98%",theme:"Discovery Blue",isolation:"Dedicated tenant database",avgGrade:"88.4%",attendance:"94.2%",messages:"3 pending",studentPoints:1240,studentName:"Demo Learner",guardianName:"Demo Guardian",learnerName:"Demo Learner",workHours:"Mon-Fri, 8:00 AM-4:30 PM",afterHours:"Messages are held until the next work day"},{id:"bronx-charter",name:"Bronx Learning Charter",category:"Chartered",students:412,staff:49,status:"Onboarding",subdomain:"bronxlearning",plan:"Charter Launch",modules:["SIS","Messaging","Enrollment"],storage:31,uptime:"99.91%",theme:"Charter Gold",isolation:"Dedicated tenant database",avgGrade:"86.1%",attendance:"92.7%",messages:"8 pending",studentPoints:890,studentName:"Explorer",guardianName:"Monica",learnerName:"Ari",workHours:"Mon-Fri, 7:45 AM-4:00 PM",afterHours:"Messages are held until staff office hours reopen"}]},{id:"albany-csd",name:"Albany City School District",region:"Capital Region",superintendent:"District Superintendent",schools:[{id:"albany-prep",name:"Albany Preparatory School",category:"Private",students:325,staff:44,status:"Active",subdomain:"albanyprep",plan:"Private Plus",modules:["LMS","Messaging","Tuition","Family Portal"],storage:46,uptime:"99.95%",theme:"Prep Teal",isolation:"Dedicated tenant database",avgGrade:"91.8%",attendance:"96.4%",messages:"1 pending",studentPoints:1565,studentName:"Scholar",guardianName:"Priya",learnerName:"Noah",workHours:"Mon-Fri, 8:30 AM-5:00 PM",afterHours:"Messages wait for the next administrator-approved window"},{id:"eagle-point",name:"Eagle Point Elementary",category:"Public",students:538,staff:61,status:"Active",subdomain:"eaglepoint",plan:"District Core",modules:["SIS","LMS","Messaging"],storage:52,uptime:"99.97%",theme:"Eagle Green",isolation:"Dedicated tenant database",avgGrade:"87.2%",attendance:"95.1%",messages:"4 pending",studentPoints:1120,studentName:"Navigator",guardianName:"Sarah",learnerName:"Mia",workHours:"Mon-Fri, 8:00 AM-4:00 PM",afterHours:"Messages are queued until office hours"}]}]},{id:"ca",name:"California",agency:"California Department of Education",districts:[{id:"la-usd",name:"Los Angeles Unified School District",region:"Los Angeles County",superintendent:"District Superintendent",schools:[{id:"pacific-stem",name:"Pacific STEM Charter",category:"Chartered",students:496,staff:52,status:"Active",subdomain:"pacificstem",plan:"STEM Charter",modules:["SIS","LMS","Messaging","Lab Scheduler"],storage:58,uptime:"99.94%",theme:"Pacific Blue",isolation:"Dedicated tenant database",avgGrade:"90.3%",attendance:"93.8%",messages:"6 pending",studentPoints:1325,studentName:"Innovator",guardianName:"Elena",learnerName:"Kai",workHours:"Mon-Fri, 8:00 AM-4:30 PM",afterHours:"Messages are held until staff work hours"}]}]}],xs=[["State Governance",["Board of Regents","Commissioner of Education","NYS Education Department (NYSED)"]],["District & Regional Governance",["BOCES District Superintendents","Local Board of Education (BOE)","District Superintendent / NYC Chancellor","Assistant / Deputy Superintendents","District Directors / Coordinators"]],["School Building Administration",["Principal","Assistant Principal","Dean of Students / Department Chairs"]],["Classroom Faculty",["Tenured Teachers","Probationary Teachers","Substitutes / Leave Replacements"]],["Instructional & Specialized Support",["Specialized Clinicians","Teaching Assistants","Teacher Aides / Paraprofessionals"]],["Operational Support",["Secretaries / Clerical Staff","Custodial / Maintenance Staff","Food Service / Security / Transportation"]],["Student Leadership & Student Body",["Student Board of Education Representative","Student Council President / Officers","Class Officers","Club Presidents / Team Captains","General Student Body"]]],Z=[{name:"English Literature",room:"Period 2, Room 304",grade:89,attendance:96,pending:12},{name:"Creative Writing",room:"Period 4, Room 201",grade:92,attendance:97,pending:1},{name:"Basic English",room:"Period 6, Room 118",grade:84,attendance:91,pending:5}],D=[{id:"stu-1",student:"Demo Learner 1",guardian:"Demo Guardian 1",teacher:"Demo Teacher",className:"English Literature",grade:91,attendance:98,accommodations:"Visual vocabulary cards",status:"Active"},{id:"stu-2",student:"Demo Learner 2",guardian:"Demo Guardian 2",teacher:"Demo Teacher",className:"Creative Writing",grade:88,attendance:94,accommodations:"Extended quiz time",status:"Active"},{id:"stu-3",student:"Demo Learner 3",guardian:"Demo Guardian 3",teacher:"Demo Teacher",className:"English Literature",grade:82,attendance:91,accommodations:"Reading support",status:"Watch"},{id:"stu-4",student:"Demo Learner 4",guardian:"Demo Guardian 4",teacher:"Demo Teacher",className:"Creative Writing",grade:96,attendance:99,accommodations:"None",status:"Active"}],U=[{id:"sub-1",student:"Demo Learner 1",assignment:"Fractions Mastery Check",status:"Submitted",score:88,rubric:[["Concepts",4],["Accuracy",3],["Explanation",4],["Neatness",3]],comment:"Strong reasoning. Recheck mixed-number conversions."},{id:"sub-2",student:"Demo Learner 2",assignment:"Great Depression Essay",status:"Needs review",score:74,rubric:[["Thesis",3],["Evidence",3],["Organization",2],["Conventions",4]],comment:"Good evidence. Add a clearer argument in the introduction."},{id:"sub-3",student:"Demo Learner 3",assignment:"Grammar Quiz - Week 5",status:"Missing",score:0,rubric:[["Completion",0],["Accuracy",0],["Timeliness",0]],comment:"Family reminder queued."}],ve=[["Demo Learner 3","finished reading The Great Gatsby","15 minutes ago","Lit 101"],["Demo Learner 4","submitted Grammar Quiz - Week 5","42 minutes ago","Creative Writing"],["Marcus Thorne","posted in the discussion board","2 hours ago","Shakespeare"]],tt=[{title:"History: Great Depression Essay",meta:"Due tomorrow, 11:59 PM",urgent:!0},{title:"Science: Water Cycle Model",meta:"Due Thursday",urgent:!1},{title:"Math: Quadratic Equations Quiz",meta:"Due Sunday",urgent:!1}],T=[{id:"fractions",title:"Fractions Mastery Check",className:"Basic English",type:"Automated quiz",instructions:"Complete the mastery check and show your reasoning.",rubric:"4-domain rubric",analytics:82,dueDate:"2026-10-24",points:20,status:"Published",allowResubmit:!0,maxAttempts:2,lockDate:"Oct 24, 8:00 PM",exception:"Maya R. +24h",attachments:[]},{id:"essay",title:"Great Depression Essay",className:"English Literature",type:"Writing task",instructions:"Write a supported argument using at least three pieces of evidence from the unit.",rubric:"Argument + evidence rubric",analytics:74,dueDate:"2026-10-28",points:100,status:"Published",allowResubmit:!0,maxAttempts:3,lockDate:"Oct 28, 11:59 PM",exception:"None",attachments:[]}],ce=[{id:"work-essay-demo",assignmentId:"essay",studentId:"student",student:"Demo Learner",response:"The New Deal changed the federal government's role by expanding relief and recovery programs.",attachments:[],status:"Draft",attempt:1,submittedAt:"",score:null,feedback:"",returnedAt:""}],Ne=[{id:"qb-claim",subject:"English Language Arts",standard:"CCSS.ELA-LITERACY.W.4.1",questionType:"Multiple choice",question:"Which statement is the strongest claim?",options:["School is interesting.","Schools should provide daily reading time because it improves fluency and comprehension.","Many students read.","Books have pages."],correctAnswer:1,points:5,feedback:"A strong claim is specific and supported by a clear reason."},{id:"qb-moon",subject:"Science",standard:"NGSS 5-ESS1-1",questionType:"True or false",question:"The Moon produces its own visible light.",options:["True","False","",""],correctAnswer:1,points:5,feedback:"The Moon reflects sunlight."},{id:"qb-fraction",subject:"Math",standard:"CCSS.MATH.CONTENT.4.NF.A.1",questionType:"Short answer",question:"Write an equivalent fraction for 1/2.",options:["2/4","","",""],correctAnswer:0,points:5,feedback:"Multiplying the numerator and denominator by the same number creates an equivalent fraction."}],oe=[{id:"course-ela-4",title:"Grade 4 English Language Arts",subject:"English Language Arts",grade:"4",className:"English Literature",standards:["CCSS.ELA-LITERACY.RL.4.1","CCSS.ELA-LITERACY.W.4.1"],units:[{id:"unit-stories",title:"Stories and Perspective",description:"Analyze characters, point of view, and evidence.",lessonIds:["lesson-story-elements"],assignmentIds:[]},{id:"unit-arguments",title:"Claims and Evidence",description:"Build clear claims supported by relevant evidence.",lessonIds:[],assignmentIds:["essay"]}]},{id:"course-science-4",title:"Grade 4 Earth and Space Science",subject:"Science",grade:"4",className:"Basic English",standards:["NGSS 5-ESS1-1"],units:[{id:"unit-moon",title:"Earth and Moon Systems",description:"Observe patterns in the Moon's appearance.",lessonIds:["lesson-moon-phases"],assignmentIds:[]}]}],C=[{id:"lesson-moon-phases",title:"Moon Phases Explorer",subject:"Science",className:"English Literature",summary:"Explore why the Moon appears to change shape and check your understanding.",status:"Published",visibility:"Students and families",dueDate:"2026-10-24",estimatedMinutes:35,points:20,allowLate:!0,requireOrder:!0,updatedAt:"Today",blocks:[{id:"moon-intro",type:"text",title:"Look up at the Moon",body:"The Moon does not make its own light. As it travels around Earth, sunlight illuminates different portions that we can see."},{id:"moon-video",type:"media",mediaType:"Video",title:"Moon phases video",url:"https://www.youtube.com/watch?v=3f_21N3wcX8",caption:"Watch the short overview, then continue to the knowledge check."},{id:"moon-quiz",type:"quiz",title:"Knowledge check",question:"What causes the phases of the Moon?",questionType:"Multiple choice",options:["Earth's shadow always covers the Moon","We see different sunlit portions as the Moon orbits Earth","Clouds change the Moon's shape","The Moon produces different amounts of light"],correctAnswer:1,feedback:"The Moon's orbit changes how much of its sunlit half is visible from Earth.",points:10,required:!0}]},{id:"lesson-story-elements",title:"Building a Strong Story",subject:"English Language Arts",className:"Creative Writing",summary:"Use character, setting, conflict, and resolution to plan an original story.",status:"Draft",visibility:"Teacher only",dueDate:"2026-10-28",estimatedMinutes:45,points:25,allowLate:!1,requireOrder:!1,updatedAt:"Yesterday",blocks:[{id:"story-intro",type:"text",title:"Four story building blocks",body:"A memorable story gives readers a character to care about, a setting they can picture, a conflict that creates tension, and a resolution that shows change."},{id:"story-link",type:"media",mediaType:"Link",title:"Story planner",url:"https://www.readwritethink.org/",caption:"Open the planning resource for additional examples."}]}],Fe=[{name:"Water Cycle Worksheet.docx",status:"Converted to editable lesson copy",type:"Word"},{name:"Moon Lab Packet.pdf",status:"OCR indexed + annotation ready",type:"PDF"},{name:"Parent Signature Form.pdf",status:"Fillable fields detected",type:"PDF"}],Qe=[{id:"teacher-school",name:"Demo Teacher",context:"Teacher at selected school",active:!0},{id:"parent-school",name:"Demo Guardian",context:"Parent profile",active:!1},{id:"district-admin",name:"District Admin",context:"District-wide oversight",active:!1}],X=[{id:"notice-lock-window",level:"Urgent",title:"Locked submission window closes tonight",target:"Grade 4 Math",channel:"Dashboard + SMS",read:!1},{id:"notice-rubrics",level:"Action",title:"3 rubric scores need review",target:"English Literature",channel:"Teacher inbox",read:!1},{id:"notice-family-comment",level:"FYI",title:"New family comment on community board",target:"All families",channel:"Digest",read:!1}],pe=[{id:"live-1",type:"Roster",title:"Demo Learner 1 attendance synced",detail:"SIS updated attendance to 98%.",time:"Live now"},{id:"live-2",type:"LMS",title:"Rubric queue refreshed",detail:"3 submissions are ready for review.",time:"Live now"},{id:"live-3",type:"Messages",title:"Parent digest prepared",detail:"Routine updates will send during the next work window.",time:"Live now"}],ca=[{app:"Docs",action:"Distribute editable templates instantly",status:"Connected"},{app:"Drive",action:"Attach, collect, and archive class files",status:"Connected"},{app:"Forms",action:"Auto-create quizzes with answer visibility rules",status:"Connected"},{app:"Slides",action:"Share lesson decks as view or copy templates",status:"Connected"}],Ns=[["Intuitive Design","Clean teacher and student workflows with minimal training."],["Zero Cost Base","Core classroom, assignments, communication, and family summaries stay free for schools."],["Paperless Workflow","Create, collect, grade, return, and archive digital assignments."],["Centralized Communication","Class announcements, direct messages, and parent summaries in one place."],["Automated Guardrails","Lock edits after submission and hide quiz answers until the assessment ends."]],be=[{actor:"District Admin",event:"Provisioned school tenant",scope:"NYC DOE",time:"Today 9:12 AM"},{actor:"Principal Rivera",event:"Approved community board post",scope:"P.S. 118",time:"Today 10:44 AM"},{actor:"System",event:"Blocked after-hours parent message",scope:"P.S. 118",time:"Yesterday 6:03 PM"},{actor:"NYSED Reviewer",event:"Viewed compliance dashboard",scope:"New York",time:"Yesterday 2:21 PM"}],Os=[{label:"FERPA Mode",status:"Enabled",detail:"Student records are hidden outside authorized tenant scopes."},{label:"Media Review",status:"Required",detail:"Photos and files stay pending until an assigned approver approves them."},{label:"Data Export",status:"Logged",detail:"Every roster, gradebook, or message export appears in the audit trail."}],Rs=[{label:"FERPA access reviews",value:"12",status:"Due this month",detail:"Confirm staff access for student records."},{label:"Data export logs",value:"4",status:"Reviewed",detail:"Gradebook and roster exports are audit logged."},{label:"Media approvals",value:"1",status:"Pending",detail:"Photo content waiting for administrator approval."},{label:"After-hours blocks",value:"7",status:"Protected",detail:"Messages held outside school communication windows."}],ya=[{title:"Superintendent Hearing Window",audience:"District",date:"Oct 21",type:"Compliance"},{title:"Science Night",audience:"P.S. 118 families",date:"Oct 23",type:"Community"},{title:"Fractions Mastery Lock Date",audience:"Grade 4 Math",date:"Oct 24",type:"LMS"},{title:"Parent Conference Block",audience:"Teachers + guardians",date:"Oct 27",type:"Messaging"}],Oe=[{item:"Fractions quiz attempt",owner:"Leo",status:"Queued for upload"},{item:"PDF annotation packet",owner:"Maya",status:"Conflict check ready"},{item:"Teacher rubric draft",owner:"Demo Teacher",status:"Saved offline"}],Is=[["Default route","Parent and teacher posts go to the first active school approver."],["Media route","Photos, videos, and files require Principal or Assistant Principal approval."],["Sensitive route","Discipline, health, or student-identifying content is held for administrator review."],["Publishing rule","Approved posts publish only inside the selected school tenant."]],js=[{title:"One-tap teacher message",detail:"Disabled automatically outside school work hours."},{title:"Digest-first notifications",detail:"Urgent alerts separate from routine activity noise."},{title:"Offline packet pickup",detail:"Assignments and forms can be downloaded before Wi-Fi drops."}],ee={"ps-118":{logo:"D",crest:"Discovery Owls",primary:"#0050cb",accent:"#006b5f",highlight:"#735c00",background:"#f8f9ff",voice:"Bright, curious, elementary STEM"},"bronx-charter":{logo:"B",crest:"Bronx Torch",primary:"#6d3f00",accent:"#005b96",highlight:"#996b00",background:"#fff9ef",voice:"Confident, college-bound, community first"},"albany-prep":{logo:"A",crest:"Albany Shield",primary:"#005f73",accent:"#7a3e9d",highlight:"#8a5a00",background:"#f3fbfb",voice:"Polished, private school, seminar-ready"},"eagle-point":{logo:"E",crest:"Eagle Point",primary:"#116149",accent:"#004e98",highlight:"#7c5c00",background:"#f4fbf6",voice:"Warm, neighborhood public school"},"pacific-stem":{logo:"P",crest:"Pacific Wave",primary:"#0057a8",accent:"#00756f",highlight:"#7a6100",background:"#f2f8ff",voice:"Modern, STEM lab, project-based"}},Ze=[{name:"Discovery Blue",primary:"#0050cb",accent:"#006b5f",highlight:"#735c00",background:"#f8f9ff"},{name:"Charter Gold",primary:"#6d3f00",accent:"#005b96",highlight:"#996b00",background:"#fff9ef"},{name:"Prep Teal",primary:"#005f73",accent:"#7a3e9d",highlight:"#8a5a00",background:"#f3fbfb"},{name:"Eagle Green",primary:"#116149",accent:"#004e98",highlight:"#7c5c00",background:"#f4fbf6"},{name:"Pacific Blue",primary:"#0057a8",accent:"#00756f",highlight:"#7a6100",background:"#f2f8ff"}],O=[{id:"sarah",name:"Demo Guardian 1",role:"Leo's parent",type:"Parents",unread:0,online:!0,preview:"I'll send the photo of the worksheet now...",messages:[{from:"them",text:"Hi Mr. Anderson! Leo found the fractions section tricky.",time:"13:45"},{from:"me",text:"Thanks for the heads up. I can send a visual practice sheet today.",time:"13:52"},{from:"them",text:"That would help. I'll send the photo of the worksheet now.",time:"14:02"}]},{id:"elena",name:"Demo Guardian 2",role:"Maya's parent",type:"Parents",unread:3,online:!1,preview:"Is the field trip still happening on Friday?",messages:[{from:"them",text:"Is the field trip still happening on Friday?",time:"Tue"},{from:"me",text:"Yes, the permission forms are due by Thursday morning.",time:"Tue"}]},{id:"grade-team",name:"Grade 4 Team",role:"6 teachers",type:"Groups",unread:1,online:!0,preview:"New reading groups are posted.",messages:[{from:"them",text:"New reading groups are posted for next week.",time:"09:18"},{from:"me",text:"Great, I updated my small-group rotation.",time:"09:26"}]}],me={"ps-118":{approvers:[{id:"principal-rivera",name:"Principal Rivera",title:"Principal",active:!0},{id:"ap-kim",name:"Assistant Principal Kim",title:"Assistant Principal",active:!0},{id:"dean-walker",name:"Dean Walker",title:"Dean of Students",active:!1}],published:[{id:"ps-post-1",author:"Ms. Henderson",role:"Teacher",type:"Announcement",audience:"All families",title:"Science Night Volunteers",body:"We need four family volunteers for Thursday's hands-on moon lab.",media:"Flyer PDF",time:"Approved today"},{id:"ps-post-2",author:"Demo Guardian 1",role:"Parent",type:"Resource",audience:"Grade 4",title:"Math Game Practice Link",body:"Sharing a free fractions game that helped a learner practice at home.",media:"Website link",time:"Approved yesterday"}],pending:[{id:"ps-pending-1",author:"Mr. Anderson",role:"Teacher",type:"Photo",audience:"Grade 4",title:"Moon Rock Lab Photos",body:"A photo set from today's science station rotation.",media:"6 images",approverId:"principal-rivera",time:"Awaiting principal approval"}]}},Ce=[{name:"users",records:_.length,status:"Mapped",detail:"Role, permission, school, guardian/student links"},{name:"schools",records:5,status:"Mapped",detail:"State, district, tenant URL, modules, branding"},{name:"classes",records:Z.length,status:"Mapped",detail:"Teacher, room, attendance, pending work"},{name:"students",records:D.length,status:"Mapped",detail:"Guardian, accommodations, grades, attendance"},{name:"assignments",records:T.length,status:"Mapped",detail:"Type, rubric, lock date, exceptions"},{name:"lessons",records:C.length,status:"Mapped",detail:"Content blocks, media, quizzes, publishing, and learner progress"},{name:"submissions",records:U.length,status:"Mapped",detail:"Rubric scores, comments, review status"},{name:"messages",records:O.length,status:"Mapped",detail:"Parent and group threads with work-hour controls"},{name:"community_posts",records:me["ps-118"].published.length+me["ps-118"].pending.length,status:"Mapped",detail:"Approvals, media, audience, publishing state"},{name:"audit_logs",records:be.length,status:"Mapped",detail:"Admin actions, exports, compliance events"}],we=[{id:"district",label:"Create district and school tenants",owner:"Admin",done:!0},{id:"staff",label:"Invite staff accounts",owner:"Admin",done:!0},{id:"roster",label:"Import student roster",owner:"Registrar",done:!0},{id:"guardians",label:"Connect parent and guardian accounts",owner:"School office",done:!1},{id:"classes",label:"Assign teachers to classes",owner:"Principal",done:!0},{id:"launch",label:"Send launch notification",owner:"Communications",done:!1}],H=[{id:"upload-1",name:"Moon Lab Packet.pdf",area:"LMS",size:"1.2 MB",status:"Ready for class distribution"},{id:"upload-2",name:"Science Night Flyer.pdf",area:"Community",size:"420 KB",status:"Waiting for approval"}],V=[{id:"delivery-1",channel:"Email",audience:"Grade 4 families",status:"Queued",detail:"Science Night reminder"},{id:"delivery-2",channel:"SMS",audience:"Emergency contacts",status:"Ready",detail:"Emergency override test"},{id:"delivery-3",channel:"Push",audience:"Teachers",status:"Delivered",detail:"Rubric queue refresh"}],ke=[{id:"auth",label:"Role-based authentication rules",status:"Configured",done:!0},{id:"ferpa",label:"FERPA tenant data isolation",status:"Configured",done:!0},{id:"audit",label:"Audit log export policy",status:"Configured",done:!0},{id:"backups",label:"Nightly database backups",status:"Needs backend provider",done:!1},{id:"encryption",label:"Encrypted file storage",status:"Needs storage provider",done:!1},{id:"retention",label:"Data retention schedule",status:"Drafted",done:!1}],Be=[{step:"Build",status:"Passing",detail:"Vite production build generates static assets"},{step:"Tests",status:"Passing",detail:"Playwright local and live smoke tests available"},{step:"FTP deploy",status:"Live",detail:"educationalsystem.fieldserviceit.com is serving the app"},{step:"GitHub sync",status:"Connected",detail:"Backend repository deploys through Hostinger hPanel"}],g={tenantIsolation:{status:"Enforced",strategy:"School-scoped records and permission-filtered API responses",lastTest:"Today"},storage:{provider:"Dedicated tenant storage",quotaGb:75,usedGb:18.4,virusScanning:!0,malwareEngine:"Built-in signature screening",compression:"Media worker ready",thumbnailing:"Media worker ready"},domains:[{schoolId:"ps-118",domain:"educationalsystem.fieldserviceit.com",dns:"Verified",ssl:"Active",checkedAt:"Just now"},{schoolId:"bronx-charter",domain:"bronxlearning.educonnect.local",dns:"Awaiting DNS",ssl:"Pending",checkedAt:"Today"}],enrollmentImports:[{id:"import-fall",schoolId:"ps-118",file:"fall-roster.csv",rows:684,accepted:680,needsReview:4,status:"Completed",createdAt:"Aug 18"}],gradebook:{categories:[{name:"Assessments",weight:40},{name:"Projects",weight:30},{name:"Classwork",weight:20},{name:"Participation",weight:10}],standards:[{code:"CCSS.ELA-LITERACY.W.4.1",mastery:82},{code:"CCSS.ELA-LITERACY.RL.4.1",mastery:88},{code:"NGSS 5-ESS1-1",mastery:79}],sisExport:{status:"Ready",format:"OneRoster CSV",lastExport:"Not exported"}},gradebooks:{},security:{mfaRequired:!0,sessionTimeoutMinutes:60,loginAlerts:!0,activeSessions:[{id:"session-current",user:"Global Test Admin",device:"Current browser",location:"New York, US",lastActive:"Now",current:!0}]},backups:{schedule:"Nightly at 2:00 AM",retentionDays:30,lastBackup:"Today 2:00 AM",lastRestoreTest:"Passed • Today",encrypted:!0,target:"Local encrypted backup",offsiteStatus:"Needs credentials",rpoHours:24,rtoHours:4},notifications:{provider:"Operational API",templates:[{id:"due",name:"Assignment due reminder",channels:["Email","Push"],status:"Active"},{id:"weekly",name:"Weekly family summary",channels:["Email"],status:"Active"}],optOuts:3},accessibility:{wcagTarget:"WCAG 2.2 AA",score:96,issues:0,languages:["English","Spanish","French","Haitian Creole"],lastAudit:"Today",keyboardStatus:"Automated checks enabled",ciStatus:"Axe + Lighthouse configured"},monitors:[{service:"Education website",status:"Operational",latency:184,uptime:"99.98%",checkedAt:"Just now"},{service:"Dedicated API",status:"Operational",latency:96,uptime:"99.99%",checkedAt:"Just now"},{service:"File storage",status:"Operational",latency:121,uptime:"99.97%",checkedAt:"Just now"},{service:"Notifications",status:"Operational",latency:208,uptime:"99.95%",checkedAt:"Just now"}],billing:{plan:"District Core",schools:5,monthlyEstimate:0,status:"Community deployment"},dataPlatform:{engine:"PostgreSQL",status:"Schema ready",tenantPolicy:"Row-level security with default deny",migration:"Awaiting DATABASE_URL"},providers:[{id:"database",name:"PostgreSQL",purpose:"Relational tenant data and row-level security",status:"Needs credentials",requirements:["DATABASE_URL"],lastTest:"Not run"},{id:"object-storage",name:"S3 / Cloudflare R2",purpose:"School media and encrypted offsite backups",status:"Needs credentials",requirements:["EDUCONNECT_OBJECT_STORAGE_ENDPOINT","EDUCONNECT_OBJECT_STORAGE_BUCKET","EDUCONNECT_OBJECT_STORAGE_KEY","EDUCONNECT_OBJECT_STORAGE_SECRET"],lastTest:"Not run"},{id:"email",name:"Postmark / SendGrid",purpose:"Transactional school and family email",status:"Needs credentials",requirements:["EDUCONNECT_EMAIL_API_KEY","EDUCONNECT_EMAIL_FROM"],lastTest:"Not run"},{id:"sms",name:"Twilio",purpose:"Consent-aware SMS and emergency delivery",status:"Needs credentials",requirements:["EDUCONNECT_TWILIO_ACCOUNT_SID","EDUCONNECT_TWILIO_AUTH_TOKEN","EDUCONNECT_TWILIO_FROM"],lastTest:"Not run"},{id:"push",name:"Web Push",purpose:"Browser and installed-app notifications",status:"Needs credentials",requirements:["EDUCONNECT_WEB_PUSH_PUBLIC_KEY","EDUCONNECT_WEB_PUSH_PRIVATE_KEY"],lastTest:"Not run"},{id:"mfa",name:"Authenticator MFA",purpose:"TOTP protection for administrator accounts",status:"Needs credentials",requirements:["EDUCONNECT_TOTP_ENCRYPTION_KEY"],lastTest:"Not run"},{id:"malware",name:"ClamAV",purpose:"Server-side malware scanning for uploads",status:"Fallback active",requirements:["EDUCONNECT_CLAMAV_HOST"],lastTest:"Built-in signature screening active"},{id:"observability",name:"Error + uptime alerts",purpose:"Structured errors, performance, and delivery alerts",status:"Needs credentials",requirements:["EDUCONNECT_ERROR_WEBHOOK_URL"],lastTest:"Local error log active"}],integrations:[{id:"oneroster",name:"OneRoster 1.2",category:"SIS",direction:"Roster + grades + resources",status:"CSV ready",requirements:[],lastSync:"Not run",records:0},{id:"google",name:"Google Workspace for Education",category:"Identity + classroom",direction:"Users, classes, and assignments",status:"Needs credentials",requirements:["EDUCONNECT_GOOGLE_CLIENT_ID","EDUCONNECT_GOOGLE_CLIENT_SECRET"],lastSync:"Not run",records:0},{id:"microsoft",name:"Microsoft 365 Education",category:"Identity + classroom",direction:"Users, groups, and classes",status:"Needs credentials",requirements:["EDUCONNECT_MICROSOFT_TENANT_ID","EDUCONNECT_MICROSOFT_CLIENT_ID","EDUCONNECT_MICROSOFT_CLIENT_SECRET"],lastSync:"Not run",records:0},{id:"clever",name:"Clever",category:"Roster",direction:"District schools, users, and sections",status:"Needs credentials",requirements:["EDUCONNECT_CLEVER_CLIENT_ID","EDUCONNECT_CLEVER_CLIENT_SECRET"],lastSync:"Not run",records:0},{id:"classlink",name:"ClassLink",category:"Roster",direction:"Tenant-scoped roster sync",status:"Needs credentials",requirements:["EDUCONNECT_CLASSLINK_TENANT_ID","EDUCONNECT_CLASSLINK_CLIENT_ID","EDUCONNECT_CLASSLINK_CLIENT_SECRET"],lastSync:"Not run",records:0}],jobs:[{id:"media-optimization",name:"Media optimization",schedule:"Every 10 minutes",status:"Queued",progress:0,lastRun:"Not run"},{id:"notification-delivery",name:"Notification delivery",schedule:"Every minute",status:"Queued",progress:0,lastRun:"Not run"},{id:"sis-sync",name:"SIS synchronization",schedule:"Nightly",status:"Queued",progress:0,lastRun:"Not run"},{id:"analytics-rollup",name:"Privacy-safe analytics rollup",schedule:"Nightly",status:"Queued",progress:0,lastRun:"Not run"},{id:"backup-copy",name:"Offsite backup copy",schedule:"Nightly after backup",status:"Blocked",progress:0,lastRun:"Needs object storage credentials"}],academicYears:[{id:"2025-2026",name:"2025–2026",status:"Active",startsOn:"2025-08-01",endsOn:"2026-07-31",archivedAt:""}],interventions:[{id:"intervention-reading",schoolId:"ps-118",student:"Jordan Lee",area:"Reading fluency",owner:"Ms. Rivera",tier:"Tier 2",status:"Monitoring",nextReview:"2026-08-15",notes:"Six-week targeted reading plan with weekly progress checks."}],analytics:{privacyThreshold:5,lastRefresh:"Not run",suppressedGroups:0,metrics:[{label:"Active learners",value:684,cohortSize:684,status:"Published"},{label:"Assignment completion",value:"87%",cohortSize:54,status:"Published"},{label:"Interventions on track",value:"100%",cohortSize:1,status:"Suppressed"}]},sandbox:{status:"Ready to create",tenantId:"",name:"EduConnect Safe Test School",sourceSchoolId:"ps-118",syntheticOnly:!0,expiresOn:"",createdAt:""},pilot:{status:"Planning",school:"Sanitized pilot school",dataPolicy:"Synthetic or formally sanitized records only",checkpoints:["Leadership approval","Teacher onboarding","Family communication","Two-week classroom trial","Outcome review"],completed:[]},securityReview:{status:"Package ready",reviewer:"Independent reviewer not assigned",lastExport:"Not exported",scope:["Authentication and sessions","Tenant isolation","Upload pipeline","API authorization","Backup recovery","Dependency and configuration review"]},observability:{structuredLogs:!0,errorCapture:!0,performanceTracking:!0,deliveryAlerts:!0,alertDestination:"Needs credentials",lastIncident:"No open incidents"}},zs="educationalsystem.fieldserviceit.com",Fs="https://api.educationalsystem.fieldserviceit.com";function $a(e,t="",a=""){return e===zs?Fs:t||a||""}const da=new Map;function Bs(){return $a(window.location.hostname,window.__EDUCONNECT_API_BASE__,void 0)}function Us(e,t={}){var o;const a=e instanceof Error?e:new Error(String(e||"Unknown client error"));return{source:t.source||"frontend",message:a.message.slice(0,1e3),stack:String(a.stack||"").slice(0,6e3),path:`${window.location.pathname}${window.location.hash}`.slice(0,300),release:((o=document.querySelector('meta[name="app-release"]'))==null?void 0:o.content)||"web"}}function _e(e,t={}){const a=Bs();if(!a)return;const o=Us(e,t),r=`${o.source}:${o.message}:${o.path}`,u=Date.now();u-(da.get(r)||0)<6e4||(da.set(r,u),fetch(`${a}/api/error-reports`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o),keepalive:!0}).catch(()=>{}))}function _s(){window.addEventListener("error",e=>_e(e.error||e.message,{source:"window.error"})),window.addEventListener("unhandledrejection",e=>_e(e.reason,{source:"unhandledrejection"}))}const Sa="educonnect-mock-api-v1";let je=0;function wa(e){return e&&typeof e=="object"&&"data"in e?e.data:e}function ka(){return new Promise(e=>setTimeout(e,80))}function at(){return $a(window.location.hostname,window.__EDUCONNECT_API_BASE__,void 0)}function Gs(e){return`${at()}/api/files/${encodeURIComponent(e)}/download`}function Aa(){const e=localStorage.getItem("educonnect-session-token");return e?{Authorization:`Bearer ${e}`}:{}}async function Ea(e,t){const a=`${at()}/api/state`,o=await fetch(a,{method:e,headers:{"Content-Type":"application/json",...Aa()},body:t?JSON.stringify(t):void 0});if(je+=1,!o.ok){`${o.status}`;const r=new Error(`Server API request failed with ${o.status}`);throw _e(r,{source:"api.state"}),r}return wa(await o.json())}async function Y(e,t={}){const a=`${at()}${e}`,o=await fetch(a,{headers:{"Content-Type":"application/json",...Aa(),...t.headers||{}},...t});if(je+=1,!o.ok){`${o.status}`;const r=await o.json().catch(()=>({})),u=new Error(r.error||`Server API request failed with ${o.status}`);throw _e(u,{source:"api.request"}),u}return wa(await o.json())}async function Ws(e,t="mock-api"){return t==="live-api"?Ea("PUT",{snapshot:e}):(je+=1,await ka(),localStorage.setItem(Sa,JSON.stringify(e)),{ok:!0,requestCount:je})}async function Hs(e="mock-api"){return e==="live-api"?(await Ea("GET")).snapshot:(je+=1,await ka(),JSON.parse(localStorage.getItem(Sa)||"null"))}async function Js(e,t){return Y("/api/login",{method:"POST",body:JSON.stringify({identifier:e,password:t})})}async function Vs(){return Y("/api/session",{method:"GET"})}async function Ke(e,t="LMS"){const a=await new Promise((o,r)=>{const u=new FileReader;u.onload=()=>o(String(u.result).split(",")[1]||""),u.onerror=()=>r(u.error),u.readAsDataURL(e)});return Y("/api/files",{method:"POST",body:JSON.stringify({name:e.name,type:e.type,area:t,size:`${Math.max(1,Math.round(e.size/1024))} KB`,contentBase64:a})})}async function Ys(e="Launch test group"){return Y("/api/notifications/test",{method:"POST",body:JSON.stringify({audience:e})})}function Qs(){return Y("/api/backups",{method:"POST",body:"{}"})}function Ks(e=""){return Y("/api/backups/restore-test",{method:"POST",body:JSON.stringify({backup:e})})}function Zs(e){return Y("/api/domains/verify",{method:"POST",body:JSON.stringify({schoolId:e})})}function Xs(e,t,a){return Y("/api/enrollment/import",{method:"POST",body:JSON.stringify({schoolId:e,file:t,rows:a})})}function en(e){return Y("/api/security/mfa",{method:"POST",body:JSON.stringify({required:e})})}function ua({channel:e,audience:t,template:a,scheduledFor:o=""}){return Y("/api/notifications/schedule",{method:"POST",body:JSON.stringify({channel:e,audience:t,template:a,scheduledFor:o})})}function tn(){return Y("/api/operations/status",{method:"GET"})}function an(e,t={}){return Y("/api/platform/actions",{method:"POST",body:JSON.stringify({action:e,...t})})}const Ge="educonnect-demo-state-v1",M=structuredClone({state:n,userProfiles:_,tenantStates:le,schoolDesigns:ee,rosterRecords:D,gradebookSubmissions:U,auditLogs:be,lmsAssignments:T,lmsLessons:C,lmsSubmissions:ce,questionBank:Ne,curriculumCourses:oe,lmsFiles:Fe,lmsNotifications:X,realtimeEvents:pe,databaseTables:Ce,onboardingTasks:we,fileUploads:H,notificationDeliveryLog:V,securityChecklist:ke,deployPipeline:Be,productionReadiness:g,offlineSyncQueue:Oe,activityFeed:ve,conversations:O,communityBoards:me});function Pe(e,t){Object.keys(e).forEach(a=>delete e[a]),Object.assign(e,structuredClone(t))}function k(e,t){e.splice(0,e.length,...structuredClone(t))}function Ca(e,t){if(Array.isArray(e))return Array.isArray(t)?structuredClone(t):structuredClone(e);if(!e||typeof e!="object")return t===void 0?e:t;const a={};for(const o of new Set([...Object.keys(e),...Object.keys(t||{})]))a[o]=Ca(e[o],t==null?void 0:t[o]);return a}function sn(){try{const e=JSON.parse(localStorage.getItem(Ge)||"null");ze(e)}catch{localStorage.removeItem(Ge)}}function La(){return structuredClone({state:n,userProfiles:_,tenantStates:le,schoolDesigns:ee,rosterRecords:D,gradebookSubmissions:U,auditLogs:be,lmsAssignments:T,lmsLessons:C,lmsSubmissions:ce,questionBank:Ne,curriculumCourses:oe,lmsFiles:Fe,lmsNotifications:X,realtimeEvents:pe,databaseTables:Ce,onboardingTasks:we,fileUploads:H,notificationDeliveryLog:V,securityChecklist:ke,deployPipeline:Be,productionReadiness:g,offlineSyncQueue:Oe,activityFeed:ve,conversations:O,communityBoards:me})}function ze(e){e&&(e.state&&Object.assign(n,e.state),e.userProfiles&&k(_,e.userProfiles),e.tenantStates&&k(le,e.tenantStates),e.schoolDesigns&&Pe(ee,e.schoolDesigns),e.rosterRecords&&k(D,e.rosterRecords),e.gradebookSubmissions&&k(U,e.gradebookSubmissions),e.auditLogs&&k(be,e.auditLogs),e.lmsAssignments&&k(T,e.lmsAssignments),e.lmsLessons&&k(C,e.lmsLessons),e.lmsSubmissions&&k(ce,e.lmsSubmissions),e.questionBank&&k(Ne,e.questionBank),e.curriculumCourses&&k(oe,e.curriculumCourses),e.lmsFiles&&k(Fe,e.lmsFiles),e.lmsNotifications&&k(X,e.lmsNotifications),e.realtimeEvents&&k(pe,e.realtimeEvents),e.databaseTables&&k(Ce,e.databaseTables),e.onboardingTasks&&k(we,e.onboardingTasks),e.fileUploads&&k(H,e.fileUploads),e.notificationDeliveryLog&&k(V,e.notificationDeliveryLog),e.securityChecklist&&k(ke,e.securityChecklist),e.deployPipeline&&k(Be,e.deployPipeline),e.productionReadiness&&Pe(g,Ca(M.productionReadiness,e.productionReadiness)),e.offlineSyncQueue&&k(Oe,e.offlineSyncQueue),e.activityFeed&&k(ve,e.activityFeed),e.conversations&&k(O,e.conversations),e.communityBoards&&Pe(me,e.communityBoards))}function nn(){const e=La();localStorage.setItem(Ge,JSON.stringify(e)),(n.apiMode==="mock-api"||n.apiMode==="live-api")&&Ws(e,n.apiMode).catch(()=>{})}async function Ma(e=n.apiMode){const t=await Hs(e);t&&ze(t)}function on(){localStorage.removeItem(Ge),Object.assign(n,structuredClone(M.state)),k(_,M.userProfiles),k(le,M.tenantStates),Pe(ee,M.schoolDesigns),k(D,M.rosterRecords),k(U,M.gradebookSubmissions),k(be,M.auditLogs),k(T,M.lmsAssignments),k(C,M.lmsLessons),k(ce,M.lmsSubmissions),k(Ne,M.questionBank),k(oe,M.curriculumCourses),k(Fe,M.lmsFiles),k(X,M.lmsNotifications),k(pe,M.realtimeEvents),k(Ce,M.databaseTables),k(we,M.onboardingTasks),k(H,M.fileUploads),k(V,M.notificationDeliveryLog),k(ke,M.securityChecklist),k(Be,M.deployPipeline),Pe(g,M.productionReadiness),k(Oe,M.offlineSyncQueue),k(ve,M.activityFeed),k(O,M.conversations),Pe(me,M.communityBoards)}_s();const pa=document.querySelector("#app");let q=null,Ae=null,De="",Ie=!1,Re=null;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),Re=e});const Xe={English:{settings:"Settings",notifications:"Notifications",lessons:"Lessons",assignments:"Assignments",progress:"My Progress",saveDraft:"Save draft",submit:"Submit assignment",language:"Language",textSize:"Text size",email:"Email",push:"Push notifications",close:"Close",search:"Search resources...",signOut:"Sign out",noNotifications:"No notifications.",markRead:"Mark all read",sendTest:"Send test notification"},Spanish:{settings:"Configuración",notifications:"Notificaciones",lessons:"Lecciones",assignments:"Tareas",progress:"Mi progreso",saveDraft:"Guardar borrador",submit:"Entregar tarea",language:"Idioma",textSize:"Tamaño del texto",email:"Correo electrónico",push:"Notificaciones push",close:"Cerrar",search:"Buscar recursos...",signOut:"Cerrar sesión",noNotifications:"No hay notificaciones.",markRead:"Marcar todo como leído",sendTest:"Enviar notificación de prueba"},French:{settings:"Paramètres",notifications:"Notifications",lessons:"Leçons",assignments:"Travaux",progress:"Mes progrès",saveDraft:"Enregistrer le brouillon",submit:"Remettre le travail",language:"Langue",textSize:"Taille du texte",email:"Courriel",push:"Notifications push",close:"Fermer",search:"Rechercher des ressources...",signOut:"Se déconnecter",noNotifications:"Aucune notification.",markRead:"Tout marquer comme lu",sendTest:"Envoyer une notification test"},"Haitian Creole":{settings:"Anviwònman",notifications:"Notifikasyon",lessons:"Leson",assignments:"Devwa",progress:"Pwogrè mwen",saveDraft:"Sove bouyon",submit:"Voye devwa",language:"Lang",textSize:"Gwosè tèks",email:"Imèl",push:"Notifikasyon push",close:"Fèmen",search:"Chèche resous...",signOut:"Dekonekte",noNotifications:"Pa gen notifikasyon.",markRead:"Make tout kòm li",sendTest:"Voye notifikasyon tès"}};function N(e){var t;return((t=Xe[n.language])==null?void 0:t[e])||Xe.English[e]||e}const $e=[{title:"Choose a role",body:"Use the demo login panel to switch between state, district, school, teacher, parent, and student access.",role:"state-admin"},{title:"Create learning work",body:"Teachers can author multimedia lessons, build quizzes, publish assignments, and prepare offline packs in the LMS.",role:"lms"},{title:"Communicate safely",body:"Messaging respects school work hours, with emergency override reserved for admins.",role:"messages"},{title:"Approve community posts",body:"Admins can approve posts before they publish to the school community board.",role:"community"}],rn={AlertTriangle:Ls,Award:Wa,Bell:Ha,BookOpen:Ja,Building2:Va,CalendarDays:Ya,Check:Qa,ChevronRight:Ka,ClipboardCheck:Za,Clock:Xa,Database:es,Download:ts,Eye:ss,FileText:ns,GraduationCap:is,Layers:os,Lock:rs,Mail:ls,Map:cs,Megaphone:ds,MessageCircle:us,MoreHorizontal:as,Paperclip:ps,PenLine:ms,Play:hs,Plus:gs,RefreshCw:vs,Rocket:bs,RotateCcw:fs,Search:ys,Send:$s,Settings:Ss,ShieldCheck:ws,Smartphone:ks,Sparkles:As,Star:Es,TrendingUp:Cs,Users:Ms,Video:qs,X:Ps};function d(e){return`<i class="app-icon" data-lucide="${e}" data-icon="${e}" aria-hidden="true"></i>`}function ln(e){return`/${e.replace(/^\/+/,"")}`}function he(e){return e.split(" ").map(t=>t[0]).slice(0,2).join("")}function te(e){const t=Math.max(0,Math.min(100,Number(e)||0));return`<div class="progress" role="progressbar" aria-label="${t}% complete" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${t}"><span style="width:${t}%"></span></div>`}function I(e,t,a,o){return`<article class="stat-card ${o}"><div class="stat-icon">${d(a)}</div><span>${e}</span><strong>${t}</strong></article>`}function c(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function qa(e){try{const t=new URL(String(e||""));return["http:","https:"].includes(t.protocol)?c(t.href):""}catch{return""}}function Pa(e,t=0){const a=`block-${Date.now()}-${t}-${Math.random().toString(16).slice(2)}`;return e==="quiz"?{id:a,type:e,title:"Knowledge check",question:"",questionType:"Multiple choice",options:["","","",""],pairs:[{left:"",right:""},{left:"",right:""}],correctAnswer:0,feedback:"",points:5,required:!0,timeLimit:0,maxAttempts:2,randomize:!1,showAnswers:!0,partialCredit:!0,questionPool:"Current lesson",accommodationMultiplier:1.5}:e==="media"?{id:a,type:e,mediaType:"Video",title:"Learning media",url:"",caption:""}:{id:a,type:"text",title:"Lesson section",body:""}}function Da(e=null){return e?structuredClone(e):{id:"",title:"",subject:"English Language Arts",className:n.selectedClass==="All"?Z[0].name:n.selectedClass,summary:"",status:"Draft",visibility:"Teacher only",dueDate:"",estimatedMinutes:30,points:20,allowLate:!0,requireOrder:!0,updatedAt:"Just now",blocks:[Pa("text")]}}function h(e){n.toast=e,f()}function $(e,t=y().name,a=P().label){be.unshift({actor:a,event:e,scope:t,time:"Just now"})}function G(e,t,a=y().name,o="Live dashboard"){X.unshift({id:`notice-${Date.now()}-${Math.random().toString(16).slice(2)}`,level:e,title:t,target:a,channel:o,read:!1})}function B(e,t,a){pe.unshift({id:`live-${Date.now()}-${Math.random().toString(16).slice(2)}`,type:e,title:t,detail:a,time:"Just now"}),pe.length>8&&(pe.length=8)}function We(){return X.filter(e=>!e.read).length}function Ta(e="manual"){const t=y(),a=[()=>{const o=D[n.realtimeTick%D.length];o.attendance=Math.min(100,o.attendance+1),ve.unshift([o.student,"attendance synced from SIS","Just now",o.className]),B("Roster",`${o.student} synced`,`Attendance is now ${o.attendance}% in ${o.className}.`),G("FYI",`${o.student} roster sync completed`,o.className,"SIS")},()=>{const o=U[n.realtimeTick%U.length];o.status=o.status==="Missing"?"Needs review":o.status,B("LMS",`${o.student} gradebook updated`,`${o.assignment} is ${o.status.toLowerCase()}.`),G("Action",`${o.student} submission needs attention`,o.assignment,"Teacher inbox")},()=>{const o=O.find(r=>r.id===n.activeConversationId)||O[0];o.messages.push({from:"them",text:`Live ${t.name} update received.`,time:"Now"}),o.preview="Live school update received.",o.unread=(o.unread||0)+1,B("Messages",`New message from ${o.name}`,"Conversation preview and unread count updated."),G("Urgent",`New message from ${o.name}`,t.name,"Messages")}];a[n.realtimeTick%a.length](),n.realtimeTick+=1,$(`Processed ${e} live update`,t.name,"Realtime service"),n.toast="Live app data updated.",f()}function P(){return q||_.find(e=>e.id===n.currentUser)||_[0]}function Te(){return!["localhost","127.0.0.1","0.0.0.0"].includes(window.location.hostname)}function ge(e=P()){if(!e)return[];if((e.permissions||[]).includes("global-access"))return Ee.map(o=>o.id);const t=new Set([e.landing]),a=new Set(e.permissions||[]);return e.scope==="state"&&t.add("state-admin"),["state","district"].includes(e.scope)&&t.add("district-admin"),["state","district","school"].includes(e.scope)&&/Admin$/i.test(e.role||"")&&t.add("school-admin"),a.has("lms")&&t.add("lms"),a.has("teacher-tools")&&t.add("teacher"),a.has("message")&&t.add("messages"),(a.has("approve-posts")||a.has("submit-post"))&&t.add("community"),a.has("student-missions")&&t.add("student"),Ee.map(o=>o.id).filter(o=>t.has(o))}function Ve(){const e=new Set(ge());return Ee.filter(t=>e.has(t.id))}function ma(e,t="Signed in as"){if(!e)return;q={..._.find(r=>r.id===e.id),...e},n.currentUser=q.id,n.toast=`${t} ${q.label}.`,$("Signed in",y().name,q.label);const o=ge(q).includes(q.landing)?q.landing:ge(q)[0];Le(o||"student")}function cn(e){if(!W("global-access"))return;const t=_.find(a=>a.id===e);!t||t.id===P().id||(Ae={...q},n.impersonatingFrom=q.id,q={...t},n.currentUser=t.id,n.toast=`Previewing the application as ${t.label}.`,$(`Started role preview as ${t.label}`,y().name,Ae.label),Le(t.landing||ge(t)[0]||"student"))}function dn(){Ae&&(q=Ae,Ae=null,n.currentUser=q.id,n.impersonatingFrom="",n.toast="Returned to Global Admin.",Le("state-admin"))}function un(){const e=P().label;localStorage.removeItem("educonnect-session-token"),q=null,Ae=null,n.impersonatingFrom="",n.toast="",n.searchTerm="",De="",history.replaceState(null,"",window.location.pathname),f(),requestAnimationFrame(()=>{var t;return(t=document.querySelector("#landing-identifier"))==null?void 0:t.focus()}),console.info(`${e} signed out`)}function W(e){return P().permissions.includes(e)}function ae(e,t="This role cannot use that action"){return W(e)?"":`disabled aria-disabled="true" title="${t}"`}function qe(e,t){return W(e)?"":`<div class="permission-note">${d("lock")} ${t}</div>`}function pn(e){const t=[];return(!e||typeof e!="object")&&t.push("File must contain a JSON object."),(!(e!=null&&e.state)||typeof e.state!="object")&&t.push("Missing state object."),Array.isArray(e==null?void 0:e.tenantStates)||t.push("Missing tenantStates array."),Array.isArray(e==null?void 0:e.conversations)||t.push("Missing conversations array."),(!(e!=null&&e.communityBoards)||typeof e.communityBoards!="object")&&t.push("Missing communityBoards object."),t}function ha(){const e=window.location.hash.replace("#","");return e==="platform"?"state-admin":Ee.some(t=>t.id===e)?e:""}function Le(e,t=!0){if(e==="platform"&&(e="state-admin"),!Ee.some(a=>a.id===e)||!ge().includes(e)){q&&(n.toast="That workspace is not available for your role.");return}n.role=e,n.notificationsOpen=!1,n.settingsOpen=!1,t&&window.location.hash!==`#${e}`&&history.pushState(null,"",`#${e}`),f(),requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}))}function ue(e,t=""){t&&(n.toast=t),Le(e)}function et(){Ds({icons:rn,attrs:{"stroke-width":2.25}})}function xe(){return le.find(e=>e.id===n.selectedState)||le[0]}function re(){const e=xe();return e.districts.find(t=>t.id===n.selectedDistrict)||e.districts[0]}function y(){const e=re();return e.schools.find(t=>t.id===n.selectedSchool)||e.schools[0]}function mn(){const e=y(),t=new Set(ge());return[...Ve().map(a=>({label:a.label,detail:"Workspace",role:a.id})),...Je.map(a=>({label:a.title,detail:`${a.subject} mission`,role:"student"})),...Z.map(a=>({label:a.name,detail:a.room,role:"teacher"})),...T.map(a=>({label:a.title,detail:`${a.type} in LMS`,role:"lms"})),...C.map(a=>({label:a.title,detail:`${a.status} ${a.subject} lesson`,role:"lms"})),...tt.map(a=>({label:a.title,detail:a.meta,role:"parent"})),...O.map(a=>({label:a.name,detail:a.preview,role:"messages"})),...ie().published.map(a=>({label:a.title,detail:`${a.type} post`,role:"community"})),{label:e.name,detail:`${e.category} school tenant`,role:"school-admin"}].filter(a=>t.has(a.role))}function hn(){const e=n.searchTerm.trim().toLowerCase();if(!e)return"";const t=mn().filter(a=>`${a.label} ${a.detail}`.toLowerCase().includes(e)).slice(0,6);return`
    <section class="search-results" aria-label="Search results">
      <div><strong>${t.length?`Results for "${c(n.searchTerm)}"`:`No results for "${c(n.searchTerm)}"`}</strong><button class="text-button" data-clear-search>Clear</button></div>
      ${t.length?`<div class="search-result-list">${t.map(a=>`
        <button class="search-result" data-open-role="${a.role}">
          ${d("search")}
          <span><strong>${c(a.label)}</strong><small>${c(a.detail)}</small></span>
        </button>
      `).join("")}</div>`:""}
    </section>
  `}function gn(){const e=Te(),t=y(),a=Me(),o=[["School leaders","Bring school news, staff support, and everyday planning together in one welcoming place.","shield-check"],["Teachers","Plan lessons, celebrate progress, share classroom updates, and stay close to families.","graduation-cap"],["Families","Follow learning, remember important dates, and keep in touch with the school community.","users"],["Students","Discover activities, continue learning adventures, and see accomplishments grow.","sparkles"]];return`
    <div class="landing-shell">
      <header class="landing-header">
        <a class="landing-brand" href="#app-main" aria-label="EduConnect home"><span>EC</span><strong>EduConnect</strong></a>
        <nav aria-label="Public navigation"><a href="#solutions">For everyone</a><a href="#trust">For schools</a><a href="#signin">Sign in</a></nav>
        <a class="primary-action landing-header-cta" href="#signin">Open your portal</a>
      </header>
      <main id="app-main">
        <section class="landing-hero">
          <div class="landing-hero-copy">
            <p class="eyebrow">A brighter school day, all in one place</p>
            <h1>Learning, families, and schools—connected.</h1>
            <p class="landing-lede">EduConnect makes it easier to learn, teach, share progress, and stay involved—whether you are in the classroom, at home, or on the go.</p>
            <div class="landing-actions"><a class="primary-action" href="#signin">Sign in ${d("chevron-right")}</a><a class="secondary-action" href="#solutions">See how EduConnect helps</a></div>
            <div class="landing-proof"><span>${d("book-open")} Made for learning</span><span>${d("users")} Brings families closer</span><span>${d("smartphone")} Works wherever you are</span></div>
          </div>
          <div class="landing-login-card" id="signin">
            <div class="landing-login-heading"><span class="landing-lock school-login-logo">${Ye(a)}</span><div><p class="eyebrow">${c(t.name)} portal</p><h2>Welcome back</h2><p>${c(t.loginMessage||"Enter the sign-in details provided by your school.")}</p></div></div>
            ${De?`<div class="landing-error" role="alert">${d("alert-triangle")} ${c(De)}</div>`:""}
            <form id="landing-login-form">
              <label><span>School email or username</span><input id="landing-identifier" type="text" autocomplete="username" placeholder="Enter your school username" required /></label>
              <label><span>Password</span><input id="landing-password" type="password" autocomplete="current-password" placeholder="Enter your password" ${e?"required":""} /></label>
              <button class="primary-action landing-submit" type="submit" ${Ie?"disabled":""}>${Ie?"Signing in…":`${d("book-open")} Sign in`}</button>
            </form>
            <p class="landing-login-note">${e?"Need help signing in? Contact your school office or teacher.":"Local preview: use global-admin, state-admin, district-admin, school-admin, teacher, parent, or student. No password is required."}</p>
          </div>
        </section>
        <section class="landing-role-section" id="solutions">
          <div class="landing-section-heading"><p class="eyebrow">Made for the whole school community</p><h2>Everyone has a place to learn and connect.</h2><p>Simple, welcoming experiences help each person focus on what matters most in their school day.</p></div>
          <div class="landing-role-grid">${o.map(([r,u,b])=>`<article class="landing-role-card">${d(b)}<strong>${r}</strong><span>${u}</span></article>`).join("")}</div>
        </section>
        <section class="landing-trust" id="trust">
          <div><p class="eyebrow">Thoughtfully made for schools</p><h2>A calm, caring place to learn and connect.</h2><p>EduConnect keeps the school day organized without getting in the way, so people can spend more time teaching, learning, and encouraging one another.</p></div>
          <div class="landing-trust-grid"><article>${d("sparkles")}<strong>Joyful learning</strong><span>Friendly activities and clear progress help students feel proud of every step.</span></article><article>${d("users")}<strong>Closer families</strong><span>Updates and reminders make it easier for families to take part in learning.</span></article><article>${d("graduation-cap")}<strong>Helpful for teachers</strong><span>Everyday classroom work stays organized and easy to find.</span></article></div>
        </section>
      </main>
      <footer class="landing-footer"><a class="landing-brand" href="#app-main"><span>EC</span><strong>EduConnect</strong></a><p>Learning together. Growing together.</p><small>Made for students, families, teachers, and schools.</small></footer>
    </div>
  `}function ie(){const e=y();return me[e.id]||(me[e.id]={approvers:[{id:`${e.id}-principal`,name:"Principal Office",title:"Principal",active:!0},{id:`${e.id}-assistant-principal`,name:"Assistant Principal",title:"Assistant Principal",active:!0}],published:[{id:`${e.id}-welcome`,author:"School Office",role:"Administrator",type:"Announcement",audience:"All families",title:`Welcome to ${e.name}`,body:"This board is reserved for administrator-approved school community updates.",media:"No media",time:"Approved"}],pending:[]}),me[e.id]}function vn(e){return e.approvers.find(t=>t.active)||e.approvers[0]}function bn(e,t){var a;return((a=e.approvers.find(o=>o.id===t))==null?void 0:a.name)||"Unassigned"}function Me(){const e=y();return ee[e.id]||(ee[e.id]={logo:he(e.name).slice(0,1),logoUrl:"",crest:`${e.name} Crest`,primary:"#0050cb",accent:"#006b5f",highlight:"#735c00",background:"#f8f9ff",voice:"School-owned portal identity"}),ee[e.id]}function Ye(e,t=""){const a=qa(e.logoUrl);return a?`<img class="school-logo-image ${t}" src="${a}" alt="${c(e.crest||y().name)} logo" />`:`<span class="${t}">${c(e.logo||he(y().name).slice(0,1))}</span>`}function xa(e){return`--primary:${e.primary};--primary-2:${e.primary};--teal:${e.accent};--gold:${e.highlight};--background:${e.background};`}function fn(){var a,o,r,u,b,m,E,L,z,F,S;const e=y(),t=(a=document.querySelector("#school-subdomain"))==null?void 0:a.value.trim().toLowerCase().replace(/[^a-z0-9-]+/g,"-").replace(/^-+|-+$/g,"");if(e.name=((o=document.querySelector("#school-name"))==null?void 0:o.value.trim())||e.name,e.subdomain=t||e.subdomain,e.category=((r=document.querySelector("#school-category"))==null?void 0:r.value)||e.category,e.plan=((u=document.querySelector("#school-plan"))==null?void 0:u.value.trim())||e.plan,e.theme=((b=document.querySelector("#school-theme"))==null?void 0:b.value.trim())||e.theme,e.workHours=((m=document.querySelector("#school-work-hours"))==null?void 0:m.value.trim())||e.workHours,e.customDomain=((E=document.querySelector("#school-custom-domain"))==null?void 0:E.value.trim().toLowerCase())||"",e.loginMessage=((L=document.querySelector("#school-login-message"))==null?void 0:L.value.trim())||"Welcome to your school learning portal.",e.storageQuota=Number(((z=document.querySelector("#school-storage-quota"))==null?void 0:z.value)||25),e.parentPortalEnabled=((F=document.querySelector("#school-parent-portal"))==null?void 0:F.checked)??!0,e.modules=Array.from(document.querySelectorAll("[data-school-module]:checked"),R=>R.value),e.customDomain){const R=g.domains.find(j=>j.schoolId===e.id);R?Object.assign(R,{domain:e.customDomain,dns:R.domain===e.customDomain?R.dns:"Awaiting DNS",ssl:R.domain===e.customDomain?R.ssl:"Pending",checkedAt:"Just now"}):g.domains.push({schoolId:e.id,domain:e.customDomain,dns:"Awaiting DNS",ssl:"Pending",checkedAt:"Just now"})}ee[e.id]={...Me(),logo:document.querySelector("#design-logo").value.trim()||he(e.name).slice(0,1),logoUrl:((S=document.querySelector("#design-logo-url"))==null?void 0:S.value.trim())||"",crest:document.querySelector("#design-crest").value.trim()||`${e.name} Crest`,voice:document.querySelector("#design-voice").value.trim()||"School-owned portal identity",primary:document.querySelector("#design-primary").value,accent:document.querySelector("#design-accent").value,highlight:document.querySelector("#design-highlight").value,background:document.querySelector("#design-background").value}}function f(){const e=document.activeElement,t=(e==null?void 0:e.id)||"",a=["operationsTab","testProvider","testIntegration","syncIntegration","runJob","completeIntervention"].map(b=>{var m;return(m=e==null?void 0:e.dataset)!=null&&m[b]?[b,e.dataset[b]]:null}).find(Boolean);if(document.documentElement.lang={English:"en",Spanish:"es",French:"fr","Haitian Creole":"ht"}[n.language]||"en",!q){pa.innerHTML=gn(),gi(),et();return}const o=Ee.find(b=>b.id===n.role),r=y(),u=Me();pa.innerHTML=`
    <div class="app ${n.compactMode?"compact-mode":""} ${n.highContrast?"high-contrast":""} ${n.fontScale==="Large"?"font-large":n.fontScale==="Extra large"?"font-extra-large":""} ${n.dyslexiaFriendly?"dyslexia-friendly":""} ${n.reducedMotion?"reduced-motion":""}" style="${xa(u)}">
      ${wn(o,u)}
      <main id="app-main" class="workspace workspace-${n.role}">
        ${Ae?`<section class="impersonation-banner" role="status"><span>${d("eye")} Previewing as <strong>${c(P().label)}</strong> (${c(P().role)})</span><button type="button" data-stop-impersonating>Return to Global Admin</button></section>`:""}
        ${Sn(r,u)}
        ${An(o)}
        ${yn()}
        ${hn()}
        ${n.role==="state-admin"?En():""}
        ${n.role==="district-admin"?Cn():""}
        ${n.role==="school-admin"?qn():""}
        ${n.role==="lms"?Jn():""}
        ${n.role==="student"?Yn():""}
        ${n.role==="teacher"?Kn():""}
        ${n.role==="parent"?Zn():""}
        ${n.role==="messages"?ei():""}
        ${n.role==="community"?ti():""}
      </main>
      ${kn()}
      ${$n()}
    </div>
  `,vi(),et(),nn(),requestAnimationFrame(()=>{var m;const b=t?`#${CSS.escape(t)}`:a?`[data-${a[0].replace(/[A-Z]/g,E=>`-${E.toLowerCase()}`)}="${CSS.escape(a[1])}"]`:"";b&&((m=document.querySelector(b))==null||m.focus({preventScroll:!0}))})}function yn(){if(!n.tourOpen)return"";const e=$e[n.tourStep]||$e[0];return`
    <section class="tour-card" aria-label="Guided onboarding">
      <div>
        <p class="eyebrow">Walkthrough ${n.tourStep+1} of ${$e.length}</p>
        <h3>${e.title}</h3>
        <p>${e.body}</p>
      </div>
      <div class="tour-actions">
        <button class="secondary-action" data-tour-prev ${n.tourStep===0?"disabled":""}>${d("chevron-right")} Back</button>
        <button class="primary-action" data-tour-next>${d("play")} ${n.tourStep===$e.length-1?"Finish":"Next"}</button>
      </div>
    </section>
  `}function $n(){return`
    ${n.toast?`<div class="toast" role="status"><span>${c(n.toast)}</span><button class="icon-button" aria-label="Dismiss message" data-dismiss-toast>${d("x")}</button></div>`:""}
    ${n.notificationsOpen?`
      <aside class="utility-panel" aria-label="Notifications">
        <div class="section-heading"><h3>${N("notifications")}</h3><button class="icon-button" aria-label="${N("close")} ${N("notifications")}" data-close-panel>${d("x")}</button></div>
        <div class="utility-actions">
          <button class="secondary-action" data-mark-notifications>${d("check")} ${N("markRead")}</button>
          <button class="secondary-action" data-simulate-live>${d("refresh-cw")} Simulate live update</button>
        </div>
        ${X.length?X.map(e=>`
          <article class="notice-row ${e.level.toLowerCase()} ${e.read?"read":""}">
            <strong>${e.level}</strong>
            <div><span>${e.title}</span><small>${e.target} • ${e.channel}</small></div>
            <button class="icon-button" aria-label="Dismiss ${c(e.title)}" data-dismiss-notification="${e.id}">${d("x")}</button>
          </article>
        `).join(""):`<div class="empty-state">${N("noNotifications")}</div>`}
      </aside>
    `:""}
    ${n.settingsOpen?`
      <aside class="utility-panel" aria-label="Settings">
        <div class="section-heading"><h3>${N("settings")}</h3><button class="icon-button" aria-label="${N("close")} ${N("settings")}" data-close-panel>${d("x")}</button></div>
        <label class="setting-field"><span>${N("language")}</span><select aria-label="${N("language")}" data-setting-select="language">${Object.keys(Xe).map(e=>`<option ${n.language===e?"selected":""}>${e}</option>`).join("")}</select></label>
        <label class="setting-field"><span>${N("textSize")}</span><select aria-label="${N("textSize")}" data-setting-select="fontScale"><option ${n.fontScale==="Normal"?"selected":""}>Normal</option><option ${n.fontScale==="Large"?"selected":""}>Large</option><option ${n.fontScale==="Extra large"?"selected":""}>Extra large</option></select></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="compactMode" ${n.compactMode?"checked":""} /><span>Compact dashboard density</span></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="highContrast" ${n.highContrast?"checked":""} /><span>High contrast panels</span></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="dyslexiaFriendly" ${n.dyslexiaFriendly?"checked":""} /><span>Dyslexia-friendly type</span></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="reducedMotion" ${n.reducedMotion?"checked":""} /><span>Reduce motion</span></label>
        <div class="notification-preferences"><strong>Notification preferences</strong>
          <label class="toggle-row"><input type="checkbox" data-notification-preference="email" ${n.notificationPreferences.email?"checked":""} /><span>${N("email")}</span></label>
          <label class="toggle-row"><input type="checkbox" data-notification-preference="sms" ${n.notificationPreferences.sms?"checked":""} /><span>SMS</span></label>
          <label class="toggle-row"><input type="checkbox" data-notification-preference="push" ${n.notificationPreferences.push?"checked":""} /><span>${N("push")}</span></label>
          <label class="setting-field"><span>Remind me before due dates</span><select data-notification-days><option value="1" ${n.notificationPreferences.dueDays===1?"selected":""}>1 day</option><option value="2" ${n.notificationPreferences.dueDays===2?"selected":""}>2 days</option><option value="7" ${n.notificationPreferences.dueDays===7?"selected":""}>1 week</option></select></label>
          <button class="secondary-action" type="button" data-send-preference-test>${d("bell")} ${N("sendTest")}</button>
        </div>
        <button class="secondary-action" data-export-demo>${d("download")} Export JSON File</button>
        <label class="secondary-action import-action">${d("file-text")} Import JSON File<input type="file" id="import-demo-state" accept="application/json" /></label>
      </aside>
    `:""}
  `}function Sn(e,t){return`
    <section class="tenant-bar" aria-label="Current tenant">
      <div>
        ${Ye(t,"school-logo-mini")}
        <span class="tenant-label">Tenant</span>
        <strong>${e.name}</strong>
        <em>${e.category} school</em>
        <em>${e.subdomain}.educonnect.local</em>
        <em>${e.workHours}</em>
      </div>
      <div class="tenant-path">
        <span>${xe().name}</span>
        <span>${re().name}</span>
          <span>${e.name}</span>
          <span>${e.plan}</span>
        </div>
    </section>
  `}function wn(e,t){return`
    <aside class="sidebar">
      <div class="brand-row">
        ${Ye(t,"brand-mark")}
        <div><h1>${t.crest}</h1><p>${t.voice}</p></div>
      </div>
      <nav class="role-nav" aria-label="Portal views">
        ${Ve().map(a=>`<a class="nav-item ${n.role===a.id?"active":""}" href="#${a.id}" data-role="${a.id}" ${n.role===a.id?'aria-current="page"':""}>${d(a.icon)}<span>${a.label}</span></a>`).join("")}
      </nav>
      <div class="reference-card">
        <img src="${ln(e.image)}" alt="" />
        <div><strong>Stitch reference</strong><span>Visual source</span></div>
      </div>
    </aside>
  `}function kn(){return`
    <nav class="mobile-role-nav" aria-label="Mobile portal views">
      ${Ve().map(e=>`<a class="mobile-nav-item ${n.role===e.id?"active":""}" href="#${e.id}" data-role="${e.id}" ${n.role===e.id?'aria-current="page"':""}>${d(e.icon)}<span>${e.label}</span></a>`).join("")}
    </nav>
  `}function An(e){const t=e.id==="messages"?"Communication Hub":e.id==="state-admin"?"State Governance":e.id==="district-admin"?"District Operations":e.id==="school-admin"?"School Administration":`${e.label} Dashboard`;return`
    <header class="topbar">
      <div><p class="eyebrow">${e.label} workspace</p><h2>${t}</h2></div>
      <div class="topbar-actions">
        <label class="searchbox">${d("search")}<input id="global-search" value="${c(n.searchTerm)}" placeholder="${N("search")}" /></label>
        ${W("manage-users")&&ge().includes("state-admin")?`<button class="secondary-action role-controls-action" data-role-controls type="button">${d("users")} Role controls</button>`:""}
        ${W("manage-users")&&ge().includes("school-admin")?`<button class="secondary-action school-customization-action" data-school-customization type="button">${d("settings")} School design</button>`:""}
        <div class="account-chip"><span>${he(P().label)}</span><div><strong>${P().label}</strong><small>${P().role}</small></div></div>
        ${Te()?"":`<button class="secondary-action reset-action" data-reset-demo type="button">${d("rotate-ccw")} Reset Demo</button>`}
        <button class="icon-button" aria-label="Notifications" data-toggle-notifications>${d("bell")}${We()?`<span class="status-dot">${We()}</span>`:""}</button>
        <button class="icon-button" aria-label="Settings" data-toggle-settings>${d("settings")}</button>
        <button class="icon-button" aria-label="${N("signOut")}" data-sign-out>${d("x")}</button>
      </div>
    </header>
  `}function En(){const e=xe(),t=e.districts,a=t.flatMap(r=>r.schools),o=a.filter(r=>r.status==="Active").length;return`
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">State admin workspace</p>
          <h2>Tenant Governance</h2>
          <p>State administrators supervise districts, compliance, tenant standards, statewide calendars, and cross-district readiness.</p>
        </div>
        <div class="inline-actions">
          <button class="secondary-action" data-open-role="district-admin">${d("building-2")} Review Districts</button>
          <button class="primary-action" data-add-school ${ae("manage-tenants","Only state and district admins can add school tenants.")}>${d("plus")} Add School Tenant</button>
        </div>
      </div>
      ${qe("manage-tenants","Tenant creation and district configuration are admin-only in this demo.")}
      ${I("Districts",t.length,"building-2","blue")}
      ${I("Schools",a.length,"graduation-cap","teal")}
      ${I("Active tenants",o,"shield-check","gold")}
      ${Dn()}
      ${Oa()}
      ${st()}
      <section class="panel state-management-panel">
        <div class="section-heading"><h3>District Oversight</h3><span>${e.name}</span></div>
        <div class="management-list">
          ${t.map(r=>`
            <button class="management-row ${r.id===re().id?"active":""}" data-manage-district="${r.id}">
              <div class="management-icon">${d("building-2")}</div>
              <div><strong>${r.name}</strong><small>${r.region} • Superintendent: ${r.superintendent}</small></div>
              <span>${r.schools.length} schools</span>
            </button>
          `).join("")}
        </div>
      </section>
      ${Ra()}
      <section class="panel audit-panel">
        <div class="section-heading"><h3>Audit Trail</h3><span>Cross-tenant accountability</span></div>
        <div class="audit-list">
          ${be.map(r=>`
            <article class="audit-row">
              ${d("clipboard-check")}
              <div><strong>${r.event}</strong><small>${r.actor} • ${r.scope}</small></div>
              <time>${r.time}</time>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="panel calendar-panel">
        <div class="section-heading"><h3>Statewide Calendar</h3><span>Policy, reporting, and public events</span></div>
        <div class="calendar-list">
          ${ya.map(r=>`<article class="calendar-row"><div class="calendar-date">${r.date}</div><div><strong>${r.title}</strong><small>${r.audience} • ${r.type}</small></div></article>`).join("")}
        </div>
      </section>
      <section class="panel hierarchy-panel">
        <div class="section-heading"><h3>Governance Chain</h3><span>State to classroom</span></div>
        <div class="hierarchy-list">
          ${xs.map(([r,u],b)=>`<article class="hierarchy-level"><div class="level-number">${b+1}</div><div><h4>${r}</h4><p>${u.join(" • ")}</p></div></article>`).join("")}
        </div>
      </section>
      ${Tn()}
    </section>
  `}function Cn(){const e=xe(),t=re(),a=t.schools,o=a.reduce((u,b)=>u+b.students,0),r=a.reduce((u,b)=>u+b.staff,0);return`
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">District admin workspace</p>
          <h2>${t.name}</h2>
          <p>District administrators manage school tenants, staffing, rollout readiness, district messages, and cross-school performance.</p>
        </div>
        <button class="primary-action" data-add-school ${ae("manage-tenants","Only district and state admins can add school tenants.")}>${d("plus")} Add School Tenant</button>
      </div>
      ${I("Schools",a.length,"graduation-cap","blue")}
      ${I("Students",o.toLocaleString(),"users","teal")}
      ${I("Staff",r.toLocaleString(),"shield-check","gold")}
      <section class="panel tenant-controls">
        <div class="section-heading"><h3>District Scope</h3><span>${e.name}</span></div>
        <div class="tenant-selectors">
          <label><span>State</span><select id="state-filter">${le.map(u=>`<option value="${u.id}" ${n.selectedState===u.id?"selected":""}>${u.name}</option>`).join("")}</select></label>
          <label><span>District</span><select id="district-filter">${e.districts.map(u=>`<option value="${u.id}" ${t.id===u.id?"selected":""}>${u.name}</option>`).join("")}</select></label>
        </div>
      </section>
      <section class="panel district-management-panel">
        <div class="section-heading"><h3>Schools In This District</h3><span>${t.region}</span></div>
        <div class="management-list">
          ${a.map(u=>`<button class="management-row ${u.id===y().id?"active":""}" data-manage-school="${u.id}"><div class="management-icon">${d("graduation-cap")}</div><div><strong>${u.name}</strong><small>${u.category} • ${u.subdomain}.educonnect.local</small></div><span>${u.status}</span></button>`).join("")}
        </div>
      </section>
      ${Oa()}
      ${st()}
      <section class="panel audit-panel">
        <div class="section-heading"><h3>District Audit Trail</h3><span>School and staff actions</span></div>
        <div class="audit-list">${be.map(u=>`<article class="audit-row">${d("clipboard-check")}<div><strong>${u.event}</strong><small>${u.actor} • ${u.scope}</small></div><time>${u.time}</time></article>`).join("")}</div>
      </section>
    </section>
  `}function Ln(){const e=y(),t=Me(),a=re();return`
    <section class="panel school-customization-panel" id="school-customization" aria-labelledby="school-customization-title">
      <div class="section-heading customization-heading">
        <div><p class="eyebrow">School-owned experience</p><h3 id="school-customization-title">School Customization</h3><p>Update this school's identity, instance details, logo, colors, and portal voice.</p></div>
        <span>${W("manage-users")?"Editable":"Read-only"}</span>
      </div>
      ${W("manage-tenants")?`<label class="customization-school-picker"><span>Customize school</span><select id="customization-school-filter">${a.schools.map(o=>`<option value="${o.id}" ${o.id===e.id?"selected":""}>${c(o.name)}</option>`).join("")}</select></label>`:""}
      <div class="design-studio school-customization-studio">
        <div class="brand-preview-card school-brand-preview" style="${xa(t)}">
          <div class="brand-preview-top">
            ${Ye(t,"brand-preview-logo")}
            <div><strong>${c(t.crest)}</strong><span>${c(e.customDomain||`${e.subdomain}.educonnect.local`)}</span></div>
          </div>
          <div><span class="preview-school-type">${c(e.category)} • ${c(e.plan)}</span><h4>${c(e.name)}</h4><p>${c(t.voice)}</p></div>
          <div class="preview-color-row" aria-label="Current school colors"><span style="background:${t.primary}" title="Primary"></span><span style="background:${t.accent}" title="Accent"></span><span style="background:${t.highlight}" title="Highlight"></span><span style="background:${t.background}" title="Background"></span></div>
          <div class="brand-preview-actions"><button data-open-role="parent" type="button">Family Portal</button><button data-open-role="lms" type="button">LMS</button><button data-open-role="community" type="button">Community</button></div>
        </div>
        <form class="design-form customization-form" id="design-form">
          <div class="form-section-heading span-2"><strong>School identity</strong><span>Name and portal instance</span></div>
          <label class="span-2"><span>School name</span><input id="school-name" value="${c(e.name)}" required /></label>
          <label><span>Instance slug</span><div class="input-suffix"><input id="school-subdomain" value="${c(e.subdomain)}" required /><em>.educonnect.local</em></div></label>
          <label><span>School type</span><select id="school-category"><option ${e.category==="Public"?"selected":""}>Public</option><option ${e.category==="Private"?"selected":""}>Private</option><option ${e.category==="Chartered"?"selected":""}>Chartered</option></select></label>
          <label><span>Plan name</span><input id="school-plan" value="${c(e.plan)}" /></label>
          <label><span>Theme name</span><input id="school-theme" value="${c(e.theme)}" /></label>
          <label class="span-2"><span>School work hours</span><input id="school-work-hours" value="${c(e.workHours)}" /></label>
          <label class="span-2"><span>Custom domain</span><input type="text" id="school-custom-domain" value="${c(e.customDomain||"")}" placeholder="learn.yourschool.org" /></label>
          <label class="span-2"><span>Login welcome message</span><textarea id="school-login-message" placeholder="Welcome students and families...">${c(e.loginMessage||"Welcome to your school learning portal.")}</textarea></label>
          <label><span>Storage quota (GB)</span><input type="number" id="school-storage-quota" min="1" max="500" value="${e.storageQuota||25}" /></label>
          <label class="toggle-field"><input type="checkbox" id="school-parent-portal" ${e.parentPortalEnabled!==!1?"checked":""} /><span>Enable family portal</span></label>
          <fieldset class="module-selector span-2"><legend>Enabled modules</legend>${["LMS","Assignments","Quizzes","Messages","Community","Parent portal"].map(o=>`<label><input type="checkbox" data-school-module value="${o}" ${(e.modules||["LMS","Assignments","Quizzes","Messages","Community","Parent portal"]).includes(o)?"checked":""} /><span>${o}</span></label>`).join("")}</fieldset>
          <div class="form-section-heading span-2"><strong>Logo and voice</strong><span>Use a short mark or an image URL</span></div>
          <label><span>Logo mark</span><input id="design-logo" maxlength="3" value="${c(t.logo)}" /></label>
          <label><span>Crest / logo name</span><input id="design-crest" value="${c(t.crest)}" /></label>
          <label class="span-2"><span>Logo image URL</span><input type="url" id="design-logo-url" value="${c(t.logoUrl||"")}" placeholder="https://school.edu/logo.png" /></label>
          <label class="span-2"><span>School voice</span><input id="design-voice" value="${c(t.voice)}" /></label>
          <div class="form-section-heading span-2"><strong>Portal colors</strong><span>Applied throughout the selected school experience</span></div>
          <label><span>Primary buttons</span><input type="color" id="design-primary" value="${t.primary}" /></label>
          <label><span>Accent</span><input type="color" id="design-accent" value="${t.accent}" /></label>
          <label><span>Highlight</span><input type="color" id="design-highlight" value="${t.highlight}" /></label>
          <label><span>Page background</span><input type="color" id="design-background" value="${t.background}" /></label>
          <div class="customization-form-actions span-2"><button class="secondary-action" type="button" data-reset-school-design>Reset colors</button><button class="primary-action" type="submit" ${ae("manage-users","Only school administrators can customize the school experience.")}>${d("check")} Save school customization</button></div>
        </form>
      </div>
      <div class="theme-presets"><div><strong>Theme presets</strong><span>Start with a coordinated school palette.</span></div><div class="palette-list">${Ze.map(o=>`<button class="palette-button ${e.theme===o.name?"active":""}" data-design-preset="${o.name}" type="button"><span style="background:${o.primary}"></span><span style="background:${o.accent}"></span><span style="background:${o.highlight}"></span><strong>${o.name}</strong></button>`).join("")}</div></div>
      ${qe("manage-users","School branding is managed by authorized administrators.")}
    </section>
  `}function Na({compact:e=!1}={}){const t=y(),a=g.interventions.filter(r=>r.schoolId===t.id),o=D.filter(r=>r.status==="Watch");return`<section class="panel intervention-center-panel ${e?"compact-intervention-center":""}" aria-labelledby="intervention-center-title">
    <div class="section-heading"><div><p class="eyebrow">Student support</p><h3 id="intervention-center-title">Intervention Center</h3></div><span>${a.filter(r=>r.status!=="Completed").length} active plans</span></div>
    <p class="panel-intro">Coordinate goals, owners, review dates, and progress checks without exposing student-level details in district or state analytics.</p>
    <div class="intervention-layout">
      <form id="intervention-form" class="intervention-form">
        <h4>Create a support plan</h4>
        <label><span>Learner</span><select id="intervention-student" required>${(o.length?o:D).map(r=>`<option value="${r.id}">${c(r.student)} • ${c(r.className)}</option>`).join("")}</select></label>
        <label><span>Support area</span><input id="intervention-area" placeholder="Reading fluency, attendance, math..." required /></label>
        <label><span>Tier</span><select id="intervention-tier"><option>Tier 1</option><option selected>Tier 2</option><option>Tier 3</option></select></label>
        <label><span>Plan owner</span><input id="intervention-owner" value="${c(P().label)}" required /></label>
        <label><span>Next review</span><input id="intervention-review" type="date" required /></label>
        <label class="span-2"><span>Goal and supports</span><textarea id="intervention-notes" placeholder="Describe the measurable goal, supports, and check-in cadence." required></textarea></label>
        <button class="primary-action span-2" type="submit">${d("plus")} Create support plan</button>
      </form>
      <div class="intervention-list" aria-label="Current intervention plans">${a.length?a.map(r=>`<article class="intervention-card"><div><strong>${c(r.student)}</strong><small>${c(r.area)} • ${c(r.tier)} • Owner: ${c(r.owner)}</small></div><span>${c(r.status)}</span><p>${c(r.notes)}</p><footer><time>Review ${c(r.nextReview)}</time>${r.status!=="Completed"?`<button class="text-button" type="button" data-complete-intervention="${r.id}">Mark complete</button>`:""}</footer></article>`).join(""):'<div class="empty-state">No support plans have been created for this school.</div>'}</div>
    </div>
  </section>`}function Mn(){const e=g,t=e.academicYears.find(a=>a.status==="Active")||e.academicYears.at(-1);return`<section class="panel school-success-panel" aria-labelledby="school-success-title">
    <div class="section-heading"><div><p class="eyebrow">School continuity</p><h3 id="school-success-title">Academic Year & Privacy Center</h3></div><span>${c((t==null?void 0:t.name)||"Not configured")}</span></div>
    <div class="school-success-grid">
      <article class="success-card"><div class="section-heading"><h4>Academic-year rollover</h4><span>${c((t==null?void 0:t.status)||"Setup needed")}</span></div><p>Preview the next school year, then copy course structure and draft learning content while keeping prior grades and submissions archived.</p><form id="academic-rollover-form" class="stacked-form"><label><span>New school year</span><input id="rollover-name" value="2026–2027" required /></label><div class="date-pair"><label><span>Starts</span><input id="rollover-start" type="date" value="2026-08-01" required /></label><label><span>Ends</span><input id="rollover-end" type="date" value="2027-07-31" required /></label></div><label class="toggle-row"><input id="rollover-copy-lessons" type="checkbox" checked/><span>Copy courses, units, and lessons as drafts</span></label><label class="toggle-row"><input id="rollover-copy-gradebook" type="checkbox" checked/><span>Copy gradebook categories and standards</span></label><div class="inline-actions"><button class="secondary-action" type="button" data-preview-rollover>Preview rollover</button><button class="primary-action" type="submit">Create new year</button></div></form>${n.academicRolloverPreview?`<div class="rollover-preview" role="status"><strong>Preview ready</strong><span>${c(n.academicRolloverPreview)}</span></div>`:""}<div class="year-history">${e.academicYears.map(a=>`<div><strong>${c(a.name)}</strong><span>${c(a.status)}</span><small>${c(a.startsOn)} to ${c(a.endsOn)}</small></div>`).join("")}</div></article>
      <article class="success-card"><div class="section-heading"><h4>Privacy-safe school analytics</h4><span>Minimum ${e.analytics.privacyThreshold} learners</span></div><p>Small cohorts are suppressed automatically so dashboards do not identify individual learners.</p>${e.analytics.metrics.map(a=>{const o=a.status==="Suppressed"||a.cohortSize<e.analytics.privacyThreshold;return`<div class="analytics-row"><div><strong>${c(a.label)}</strong><small>${o?`Not shown—fewer than ${e.analytics.privacyThreshold} learners`:`${a.cohortSize} learners in cohort`}</small></div><span>${o?"—":c(a.value)}</span></div>`}).join("")}<button class="secondary-action" type="button" data-refresh-analytics>Refresh school analytics</button></article>
    </div>
  </section>`}function qn(){const e=y(),t=ie(),a=D.filter(r=>r.status==="Watch").length,o=U.filter(r=>r.status!=="Reviewed").length;return`
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">School admin workspace</p>
          <h2>${e.name}</h2>
          <p>School administrators run campus operations: users, safety messaging, approvals, LMS visibility, roster health, and family communication windows.</p>
        </div>
        <div class="inline-actions"><button class="secondary-action" data-school-customization type="button">${d("settings")} Customize school</button><button class="primary-action" data-open-role="community">${d("megaphone")} Review Community Posts</button></div>
      </div>
      ${I("Students",e.students.toLocaleString(),"users","blue")}
      ${I("Staff",e.staff.toLocaleString(),"shield-check","teal")}
      ${I("Pending approvals",t.pending.length,"clipboard-check","gold")}
      ${Ln()}
      ${Pn()}
      ${Mn()}
      ${Na()}
      <section class="panel instance-panel">
        <div class="section-heading"><h3>Campus Tenant</h3><span>${e.status}</span></div>
        <div class="instance-card">
          <div><span>Instance URL</span><strong>${e.subdomain}.educonnect.local</strong></div>
          <div><span>Plan</span><strong>${e.plan}</strong></div>
          <div><span>Work hours</span><strong>${e.workHours}</strong></div>
          <div><span>Messages</span><strong>${e.messages}</strong></div>
          <div><span>Roster watch</span><strong>${a}</strong></div>
          <div><span>Submissions</span><strong>${o} pending</strong></div>
        </div>
      </section>
      <section class="panel permissions-panel">
        <div class="section-heading"><h3>School Operations</h3><span>LMS, messages, approvals</span></div>
        <div class="permission-table">
          <button class="permission-row" data-open-role="lms"><strong>LMS</strong><span>Assignments and gradebook</span><small>${T.length} assignments</small></button>
          <button class="permission-row" data-open-role="messages"><strong>Messages</strong><span>Family and staff communication</span><small>${O.reduce((r,u)=>r+(u.unread||0),0)} unread</small></button>
          <button class="permission-row" data-open-role="community"><strong>Community</strong><span>Approval queue and published posts</span><small>${t.pending.length} pending</small></button>
        </div>
      </section>
      ${Ra()}
      ${st()}
    </section>
  `}function Pn(){const e=y(),t=g.enrollmentImports.filter(a=>a.schoolId===e.id);return`<section class="panel enrollment-center-panel"><div class="section-heading"><div><p class="eyebrow">Roster operations</p><h3>Enrollment Center</h3></div><span>${D.length} active learners</span></div><div class="enrollment-grid"><form id="enrollment-import-form" class="enrollment-import-card"><h4>Import roster</h4><p>Upload a OneRoster or CSV file, validate students and guardians, then stage changes before enrollment.</p><label class="upload-drop">${d("paperclip")} Choose CSV or OneRoster file<input id="enrollment-file" type="file" accept=".csv,application/json" required/></label><select id="enrollment-role" aria-label="Import record type"><option>Students and guardians</option><option>Staff</option><option>Classes and enrollments</option></select><button class="primary-action" type="submit">Validate and import</button></form><div class="enrollment-history"><div class="section-heading"><h4>Import history</h4><span>${t.length}</span></div>${t.map(a=>`<article><div><strong>${c(a.file)}</strong><small>${a.createdAt} • ${a.rows} rows</small></div><span>${a.accepted} accepted</span><em>${a.needsReview} review</em></article>`).join("")||'<div class="empty-state">No roster imports for this school.</div>'}</div></div><div class="enrollment-actions"><button class="secondary-action" type="button" data-export-roster>${d("download")} Export OneRoster CSV</button><button class="secondary-action" type="button" data-send-enrollment-invites>${d("send")} Send account invitations</button><span>Transfers and deactivations preserve audit history.</span></div></section>`}function Dn(){const e={"state-admin":"Statewide governance, district oversight, compliance, and policy","district-admin":"School tenants, shared calendars, roster health, and district analytics","school-admin":"Campus users, family access, safety, approvals, and operations",lms:"Assignments, gradebook, learning files, and classroom integrations",student:"Personal learning missions, progress, and approved resources",teacher:"Classes, assignments, grading, messages, and community submissions",parent:"Linked learner progress, deadlines, approved posts, and messages",messages:"Authorized family, staff, and school conversations",community:"School announcements, submissions, approvals, and published updates"},t=Ve();return`
    <section class="panel users-roles-panel role-control-center" id="role-control-center" aria-labelledby="role-control-title">
      <div class="section-heading role-control-heading">
        <div><p class="eyebrow">Global administration</p><h3 id="role-control-title">Role Control Center</h3></div>
        <span>${W("manage-users")?"Permissions editable":"Read-only"}</span>
      </div>
      <p class="role-control-intro">Open role-based workspaces, review their access boundaries, and manage account permissions from one place.</p>
      <div class="role-control-launcher" aria-label="Role workspaces">
        ${t.map(a=>`
          <button class="role-control-card" type="button" data-open-role="${a.id}">
            <span class="role-control-icon">${d(a.icon)}</span>
            <span><strong>${a.label}</strong><small>${e[a.id]}</small></span>
            <em>Open workspace ${d("chevron-right")}</em>
          </button>
        `).join("")}
      </div>
      <div class="section-heading account-access-heading"><h4>Account access</h4><span>${_.length} profiles</span></div>
      <div class="users-grid">
        ${_.map(a=>`
          <article class="user-role-card">
            <div><strong>${a.label}</strong><small>${a.role} • ${a.scope||"global"} scope • lands on ${a.landing}</small></div>
            ${W("global-access")&&a.id!==P().id?`<button class="secondary-action impersonate-action" type="button" data-impersonate-profile="${a.id}">${d("eye")} Preview as this user</button>`:""}
            <div class="permission-chip-list">
              ${Ts.map(([o,r])=>`
                <label class="permission-chip ${a.permissions.includes(o)?"active":""}">
                  <input type="checkbox" data-profile-permission="${a.id}:${o}" ${a.permissions.includes(o)?"checked":""} ${W("manage-users")?"":"disabled"} />
                  <span>${r}</span>
                </label>
              `).join("")}
            </div>
          </article>
        `).join("")}
      </div>
      ${qe("manage-users","Only administrators can change role permissions.")}
    </section>
  `}function st(){return`
    <section class="panel realtime-panel">
      <div class="section-heading">
        <div><h3>Realtime Operations</h3><span>${n.liveUpdates?"Live updates enabled":"Live updates paused"}</span></div>
        <div class="inline-actions">
          <label class="mini-toggle"><input type="checkbox" data-toggle-live ${n.liveUpdates?"checked":""} /><span>Live</span></label>
          <button class="secondary-action" data-simulate-live>${d("refresh-cw")} Simulate Update</button>
        </div>
      </div>
      <div class="realtime-list">
        ${pe.map(e=>`
          <article class="realtime-row">
            <strong>${e.type}</strong>
            <div><span>${e.title}</span><small>${e.detail}</small></div>
            <time>${e.time}</time>
          </article>
        `).join("")}
      </div>
    </section>
  `}function Oa(){const e=y(),t=ie(),a=Math.round(D.reduce((m,E)=>m+E.grade,0)/D.length),o=D.filter(m=>m.status==="Watch").length,r=U.filter(m=>m.status!=="Reviewed").length,u=O.reduce((m,E)=>m+(E.unread||0),0),b=[{role:"lms",label:"LMS",iconName:"layers",metric:`${C.length} lessons`,detail:`${T.length} assignments • ${r} need review`},{role:"student",label:"Students",iconName:"sparkles",metric:`${D.length} learners`,detail:`${o} students on watch status`},{role:"teacher",label:"Teachers",iconName:"graduation-cap",metric:`${Z.length} classes`,detail:`${ve.length} activity events in the feed`},{role:"parent",label:"Parents",iconName:"users",metric:`${tt.length} deadlines`,detail:`${n.checkedDeadlines.length} family tasks checked`},{role:"messages",label:"Messages",iconName:"message-circle",metric:`${u} unread`,detail:`${O.length} parent and group threads`},{role:"community",label:"Community",iconName:"megaphone",metric:`${t.pending.length} pending`,detail:`${t.published.length} approved posts live`}];return`
    <section class="panel unified-os-panel">
      <div class="section-heading">
        <div><p class="eyebrow">One integrated system</p><h3>Unified School Operating System</h3></div>
        <span>${e.name}</span>
      </div>
      <div class="unified-os-grid">
        ${b.map(m=>`
          <button class="module-hub-card" data-open-role="${m.role}">
            <span class="module-hub-icon">${d(m.iconName)}</span>
            <span><strong>${m.label}</strong><small>${m.detail}</small></span>
            <em>${m.metric}</em>
          </button>
        `).join("")}
      </div>
      <div class="system-snapshot-grid">
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Students + LMS</h4><button class="text-button" data-open-role="lms">Open LMS ${d("chevron-right")}</button></div>
          <div class="snapshot-metrics">
            <span><strong>${a}%</strong><small>Average roster grade</small></span>
            <span><strong>${r}</strong><small>Submissions in queue</small></span>
            <span><strong>${n.offlinePackReady?"Ready":"Build"}</strong><small>Offline learning pack</small></span>
          </div>
          ${U.slice(0,3).map(m=>`<div class="snapshot-row"><strong>${m.student}</strong><span>${m.assignment}</span><em>${m.status}</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Teachers + Classes</h4><button class="text-button" data-open-role="teacher">Open Teacher ${d("chevron-right")}</button></div>
          ${Z.map(m=>`<div class="snapshot-row"><strong>${m.name}</strong><span>${m.room}</span><em>${m.pending} pending</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Parents + Messages</h4><button class="text-button" data-open-role="messages">Open Messages ${d("chevron-right")}</button></div>
          ${O.slice(0,3).map(m=>`<div class="snapshot-row"><strong>${m.name}</strong><span>${m.preview}</span><em>${m.unread||0} unread</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Admin + Community</h4><button class="text-button" data-open-role="community">Open Community ${d("chevron-right")}</button></div>
          <div class="snapshot-metrics">
            <span><strong>${t.pending.length}</strong><small>Approval queue</small></span>
            <span><strong>${We()}</strong><small>Unread alerts</small></span>
            <span><strong>${be.length}</strong><small>Audit entries</small></span>
          </div>
          ${pe.slice(0,2).map(m=>`<div class="snapshot-row"><strong>${m.type}</strong><span>${m.title}</span><em>${m.time}</em></div>`).join("")}
        </article>
      </div>
    </section>
  `}function Tn(){const e=we.filter(a=>a.done).length,t=ke.filter(a=>a.done).length;return`
    <section class="panel production-panel">
      <div class="section-heading">
        <div><p class="eyebrow">Production operations</p><h3>Launch Control</h3></div>
        <span>${n.gatewayMode==="demo"?"Demo mode":"Backend-ready mode"}</span>
      </div>
      <div class="production-grid">
        <article class="production-card gateway-card">
          <div class="section-heading"><h4>Public Login Gateway</h4><span>${n.authProvider}</span></div>
          <label><span>Auth mode</span><select id="auth-provider"><option ${n.authProvider==="Role-based demo auth"?"selected":""}>Role-based demo auth</option><option ${n.authProvider==="Supabase Auth"?"selected":""}>Supabase Auth</option><option ${n.authProvider==="Firebase Auth"?"selected":""}>Firebase Auth</option></select></label>
          <label><span>Backend provider</span><select id="backend-provider"><option ${n.backendProvider==="Supabase"?"selected":""}>Supabase</option><option ${n.backendProvider==="Firebase"?"selected":""}>Firebase</option><option ${n.backendProvider==="Custom API"?"selected":""}>Custom API</option></select></label>
          <div class="gateway-actions">
            <button class="secondary-action" data-set-gateway="demo">${d("play")} Demo Mode</button>
            <button class="primary-action" data-set-gateway="backend">${d("database")} Backend Ready</button>
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Database Blueprint</h4><button class="text-button" data-provision-schema>Provision mock schema</button></div>
          <div class="schema-list">
            ${Ce.map(a=>`<div class="schema-row"><strong>${a.name}</strong><span>${a.records} records</span><em>${a.status}</em><small>${a.detail}</small></div>`).join("")}
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Admin Onboarding</h4><span>${e}/${we.length} complete</span></div>
          <div class="checklist-list">
            ${we.map(a=>`<label class="checklist-row"><input type="checkbox" data-onboarding-task="${a.id}" ${a.done?"checked":""} /><span class="custom-check">${a.done?d("check"):""}</span><span><strong>${a.label}</strong><small>${a.owner}</small></span></label>`).join("")}
          </div>
          <form id="onboarding-user-form" class="mini-form">
            <input id="onboarding-user-name" placeholder="Invite user name" />
            <select id="onboarding-user-role" aria-label="Invite user role"><option>Teacher</option><option>Parent</option><option>Student</option><option>Admin</option></select>
            <button class="secondary-action" type="submit">${d("plus")} Invite</button>
          </form>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>File Uploads</h4><span>${H.length} files</span></div>
          <label class="upload-drop">${d("paperclip")} Add assignment, PDF, image, or community file<input type="file" id="production-file-upload" multiple /></label>
          <div class="upload-list">
            ${H.map(a=>`<div class="upload-row"><strong>${a.name}</strong><span>${a.area} • ${a.size}</span><em>${a.status}</em></div>`).join("")}
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Notification Delivery</h4><button class="text-button" data-send-delivery-test>Send test batch</button></div>
          ${V.map(a=>`<div class="delivery-row"><strong>${a.channel}</strong><span>${a.audience}</span><em>${a.status}</em><small>${a.detail}</small></div>`).join("")}
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Privacy & Security</h4><span>${t}/${ke.length} ready</span></div>
          <div class="checklist-list">
            ${ke.map(a=>`<label class="checklist-row"><input type="checkbox" data-security-check="${a.id}" ${a.done?"checked":""} /><span class="custom-check">${a.done?d("check"):""}</span><span><strong>${a.label}</strong><small>${a.status}</small></span></label>`).join("")}
          </div>
        </article>

        <article class="production-card deploy-card">
          <div class="section-heading"><h4>Deployment Pipeline</h4><span>Hostinger live</span></div>
          ${Be.map(a=>`<div class="pipeline-row"><strong>${a.step}</strong><span>${a.detail}</span><em class="${a.status.toLowerCase()}">${a.status}</em></div>`).join("")}
        </article>
      </div>
      ${xn()}
    </section>
  `}function xn(){const e=g,t=Math.round(e.storage.usedGb/e.storage.quotaGb*100),a=[["tenants","Tenants & domains"],["security","Security & backups"],["notifications","Notifications"],["services","Connected services"],["jobs","Jobs & recovery"],["monitoring","Monitoring"],["launch","Launch & review"]],o=r=>`id="operations-panel-${r}" role="tabpanel" aria-labelledby="operations-tab-${r}"`;return`<div class="operations-command-center">
    <div class="section-heading"><div><p class="eyebrow">Production readiness</p><h3>Platform Operations Center</h3></div><span>${e.monitors.every(r=>r.status==="Operational")?"All systems operational":"Attention required"}</span></div>
    <div class="operations-tabs" role="tablist" aria-label="Platform operations">${a.map(([r,u])=>`<button type="button" role="tab" id="operations-tab-${r}" aria-controls="operations-panel-${r}" aria-selected="${n.activeOperationsTab===r}" tabindex="${n.activeOperationsTab===r?"0":"-1"}" class="${n.activeOperationsTab===r?"active":""}" data-operations-tab="${r}">${u}</button>`).join("")}</div>
    ${n.activeOperationsTab==="tenants"?`<div class="operations-grid" ${o("tenants")}>
      <article class="operations-card"><div class="section-heading"><h4>Tenant isolation</h4><span>${e.tenantIsolation.status}</span></div><p>${e.tenantIsolation.strategy}</p><div class="operations-metric"><strong>${le.flatMap(r=>r.districts).flatMap(r=>r.schools).length}</strong><span>school databases</span></div><button class="secondary-action" type="button" data-run-isolation-test>${d("shield-check")} Test isolation</button></article>
      <article class="operations-card"><div class="section-heading"><h4>Tenant media storage</h4><span>${t}% used</span></div>${te(t)}<p>${e.storage.usedGb} GB of ${e.storage.quotaGb} GB • file validation active • compression and thumbnails: ${e.storage.compression}</p><button class="secondary-action" type="button" data-optimize-storage>${d("database")} Optimize media</button></article>
      <article class="operations-card domain-operations"><div class="section-heading"><h4>Domains & SSL</h4><span>${e.domains.filter(r=>r.ssl==="Active").length}/${e.domains.length} active</span></div>${e.domains.map(r=>`<div class="domain-row"><div><strong>${c(r.domain)}</strong><small>${r.dns} • SSL ${r.ssl}</small></div><button class="text-button" type="button" data-verify-domain="${r.schoolId}">Verify</button></div>`).join("")}</article>
      <article class="operations-card"><div class="section-heading"><h4>Plans & billing</h4><span>${e.billing.status}</span></div><div class="operations-metric"><strong>$${e.billing.monthlyEstimate}</strong><span>estimated monthly</span></div><p>${e.billing.schools} schools on ${e.billing.plan}. No premium classroom paywall.</p></article>
    </div>`:""}
    ${n.activeOperationsTab==="security"?`<div class="operations-grid" ${o("security")}>
      <article class="operations-card"><div class="section-heading"><h4>Authentication</h4><span>${e.security.mfaRequired?"MFA required":"MFA optional"}</span></div><label class="toggle-row"><input type="checkbox" data-security-setting="mfaRequired" ${e.security.mfaRequired?"checked":""}/><span>Require MFA for administrators</span></label><label class="toggle-row"><input type="checkbox" data-security-setting="loginAlerts" ${e.security.loginAlerts?"checked":""}/><span>Send new-login alerts</span></label><label class="setting-field"><span>Idle session timeout</span><select data-session-timeout><option value="30" ${e.security.sessionTimeoutMinutes===30?"selected":""}>30 minutes</option><option value="60" ${e.security.sessionTimeoutMinutes===60?"selected":""}>60 minutes</option><option value="480" ${e.security.sessionTimeoutMinutes===480?"selected":""}>8 hours</option></select></label></article>
      <article class="operations-card"><div class="section-heading"><h4>Active sessions</h4><span>${e.security.activeSessions.length}</span></div>${e.security.activeSessions.map(r=>`<div class="session-row"><div><strong>${c(r.user)}</strong><small>${c(r.device)} • ${c(r.location)} • ${r.lastActive}</small></div>${r.current?"<span>Current</span>":`<button class="text-button" data-revoke-session="${r.id}">Revoke</button>`}</div>`).join("")}</article>
      <article class="operations-card"><div class="section-heading"><h4>Backups & recovery</h4><span>${e.backups.encrypted?"Encrypted":"Review"}</span></div><p>${e.backups.schedule} • ${e.backups.retentionDays}-day retention • RPO ${e.backups.rpoHours}h / RTO ${e.backups.rtoHours}h</p><p>Last backup: ${e.backups.lastBackup}<br/>Restore drill: ${e.backups.lastRestoreTest}<br/>Offsite copy: ${e.backups.offsiteStatus}</p><div class="inline-actions"><button class="secondary-action" type="button" data-create-backup>Create backup</button><button class="secondary-action" type="button" data-test-restore>Test restore</button></div></article>
      <article class="operations-card"><div class="section-heading"><h4>Accessibility assurance</h4><span>${e.accessibility.score}/100</span></div><p>${e.accessibility.wcagTarget} • ${e.accessibility.issues} open issues • ${e.accessibility.languages.join(" + ")}</p><button class="secondary-action" type="button" data-run-accessibility-audit>${d("check")} Run accessibility audit</button></article>
    </div>`:""}
    ${n.activeOperationsTab==="notifications"?`<div class="operations-grid" ${o("notifications")}><article class="operations-card notification-template-card"><div class="section-heading"><h4>Notification templates</h4><span>${e.notifications.provider}</span></div>${e.notifications.templates.map(r=>`<div class="template-row"><div><strong>${c(r.name)}</strong><small>${r.channels.join(" + ")} • ${r.status}</small></div><button class="text-button" type="button" data-send-template="${r.id}">Send test</button></div>`).join("")}<form id="notification-template-form" class="mini-form"><input id="notification-template-name" placeholder="New template name" required/><select id="notification-template-channel"><option>Email</option><option>SMS</option><option>Push</option></select><button class="secondary-action" type="submit">Add template</button></form></article><article class="operations-card"><h4>Consent & opt-outs</h4><div class="operations-metric"><strong>${e.notifications.optOuts}</strong><span>channel opt-outs honored</span></div><p>Emergency notices remain available while routine communications respect family preferences.</p></article></div>`:""}
    ${n.activeOperationsTab==="services"?`<div class="operations-grid" ${o("services")}>
      <article class="operations-card span-full"><div class="section-heading"><div><h4>Production service providers</h4><p>Credentials stay in the deployment environment and are never saved in a browser snapshot.</p></div><span>${e.providers.filter(r=>r.status==="Connected").length}/${e.providers.length} connected</span></div><div class="service-readiness-grid">${e.providers.map(r=>`<div class="service-readiness-row"><div><strong>${c(r.name)}</strong><small>${c(r.purpose)}</small></div><span class="readiness-status">${c(r.status)}</span><button class="text-button" type="button" data-test-provider="${r.id}">Test setup</button><em>${c(r.lastTest)}</em></div>`).join("")}</div></article>
      <article class="operations-card span-full"><div class="section-heading"><div><h4>SIS, identity, and classroom connections</h4><p>OneRoster CSV works without credentials. Hosted connections remain inactive until their school-owned credentials are configured.</p></div><span>${e.integrations.length} adapters</span></div><div class="integration-operations-grid">${e.integrations.map(r=>`<div class="integration-operation-card"><div><strong>${c(r.name)}</strong><small>${c(r.category)} • ${c(r.direction)}</small></div><span>${c(r.status)}</span><p>Last sync: ${c(r.lastSync)} • ${r.records} records</p><div class="inline-actions"><button class="secondary-action" type="button" data-test-integration="${r.id}">Test</button><button class="primary-action" type="button" data-sync-integration="${r.id}">Sync now</button></div></div>`).join("")}</div></article>
    </div>`:""}
    ${n.activeOperationsTab==="jobs"?`<div class="operations-grid" ${o("jobs")}>
      <article class="operations-card span-full"><div class="section-heading"><div><h4>Background work</h4><p>Long-running media, delivery, SIS, analytics, and recovery work is queued and retryable.</p></div><span>${e.jobs.filter(r=>r.status==="Queued").length} queued</span></div><div class="job-list">${e.jobs.map(r=>`<div class="job-row"><div><strong>${c(r.name)}</strong><small>${c(r.schedule)} • Last run: ${c(r.lastRun)}</small></div><span>${c(r.status)}</span><div class="job-progress">${te(r.progress)}</div><button class="text-button" type="button" data-run-job="${r.id}">Run now</button></div>`).join("")}</div></article>
      <article class="operations-card"><div class="section-heading"><h4>Relational data platform</h4><span>${e.dataPlatform.status}</span></div><p>${e.dataPlatform.engine} • ${e.dataPlatform.tenantPolicy}</p><p>${e.dataPlatform.migration}</p><button class="secondary-action" type="button" data-test-provider="database">Test database setup</button></article>
      <article class="operations-card"><div class="section-heading"><h4>Recovery objectives</h4><span>${e.backups.offsiteStatus}</span></div><div class="operations-metric"><strong>${e.backups.rtoHours}h</strong><span>restore target</span></div><p>Maximum target data loss: ${e.backups.rpoHours} hours. Offsite copy runs after the nightly encrypted backup.</p></article>
    </div>`:""}
    ${n.activeOperationsTab==="monitoring"?`<div class="operations-grid" ${o("monitoring")}><article class="operations-card monitor-card"><div class="section-heading"><h4>Live service health</h4><button class="text-button" type="button" data-run-monitors>Run checks</button></div>${e.monitors.map(r=>`<div class="monitor-row"><span class="health-dot ${r.status.toLowerCase()}"></span><div><strong>${r.service}</strong><small>${r.latency} ms • ${r.uptime} uptime</small></div><em>${r.status}</em></div>`).join("")}</article><article class="operations-card"><h4>Installable applications</h4><p>EduConnect supports installation, offline lesson access, queued submissions, and background synchronization.</p><button class="secondary-action" type="button" data-install-app>${d("smartphone")} ${n.pwaInstalled?"App installed":"Install EduConnect"}</button></article><article class="operations-card"><div class="section-heading"><h4>Privacy-safe analytics</h4><span>Minimum cohort ${e.analytics.privacyThreshold}</span></div>${e.analytics.metrics.map(r=>`<div class="analytics-row"><div><strong>${c(r.label)}</strong><small>${r.status==="Suppressed"||r.cohortSize<e.analytics.privacyThreshold?`Not shown—fewer than ${e.analytics.privacyThreshold} learners`:`${r.cohortSize} learners`}</small></div><span>${r.status==="Suppressed"||r.cohortSize<e.analytics.privacyThreshold?"—":c(r.value)}</span></div>`).join("")}<button class="secondary-action" type="button" data-refresh-analytics>Refresh aggregates</button></article><article class="operations-card"><div class="section-heading"><h4>Observability</h4><span>${e.observability.lastIncident}</span></div><p>Structured logs, client error capture, performance tracking, and notification delivery alerts are enabled.</p><p>Alert destination: ${e.observability.alertDestination}</p></article></div>`:""}
    ${n.activeOperationsTab==="launch"?`<div class="operations-grid" ${o("launch")}>
      <article class="operations-card"><div class="section-heading"><h4>Safe sandbox school</h4><span>${e.sandbox.status}</span></div><p>${c(e.sandbox.name)} uses synthetic content only and excludes real students, grades, messages, files, and credentials.</p>${e.sandbox.tenantId?`<p>Tenant: ${c(e.sandbox.tenantId)} • Expires ${c(e.sandbox.expiresOn)}</p>`:""}<button class="primary-action" type="button" data-create-sandbox>${e.sandbox.tenantId?"Reset sandbox":"Create sandbox"}</button></article>
      <article class="operations-card"><div class="section-heading"><h4>Pilot school plan</h4><span>${e.pilot.status}</span></div><p>${e.pilot.dataPolicy}</p>${e.pilot.checkpoints.map(r=>`<label class="checklist-row"><input type="checkbox" data-pilot-checkpoint="${c(r)}" ${e.pilot.completed.includes(r)?"checked":""}/><span class="custom-check">${e.pilot.completed.includes(r)?d("check"):""}</span><span><strong>${c(r)}</strong></span></label>`).join("")}</article>
      <article class="operations-card"><div class="section-heading"><h4>Independent security review</h4><span>${e.securityReview.status}</span></div><p>${c(e.securityReview.reviewer)}. The package includes configuration, authentication, authorization, upload, recovery, and dependency review scopes.</p><p>Last export: ${c(e.securityReview.lastExport)}</p><button class="secondary-action" type="button" data-export-security-review>Generate review package</button></article>
      <article class="operations-card"><div class="section-heading"><h4>Launch boundary</h4><span>External coordination</span></div><p>Provider credentials, a participating pilot school, and an independent reviewer must be supplied by authorized people before these items can be marked complete.</p><button class="secondary-action" type="button" data-run-launch-check>Run launch check</button></article>
    </div>`:""}
  </div>`}function Ra(){return`
    <section class="panel compliance-panel">
      <div class="section-heading"><h3>Privacy & Compliance Dashboard</h3><span>FERPA operations</span></div>
      <div class="compliance-grid">
        ${Rs.map(e=>`
          <article class="compliance-card">
            ${d("shield-check")}
            <div><strong>${e.value}</strong><span>${e.label}</span><small>${e.status} • ${e.detail}</small></div>
          </article>
        `).join("")}
      </div>
      ${qe("view-compliance","Compliance detail is admin-only.")}
    </section>
  `}function Ia({teacherStudio:e=!1}={}){const t=n.lessonFilter==="All"?C:C.filter(r=>r.status===n.lessonFilter),a=C.filter(r=>r.status==="Published").length,o=C.length-a;return`
    <section class="panel lesson-library-panel ${e?"teacher-lesson-library":"lms-panel"}">
      <div class="section-heading lesson-library-heading">
        <div><p class="eyebrow">${e?"Teacher authoring":"Course content"}</p><h3>Lesson Library</h3></div>
        <div class="inline-actions">
          <select id="lesson-filter" aria-label="Filter lessons"><option>All</option><option ${n.lessonFilter==="Published"?"selected":""}>Published</option><option ${n.lessonFilter==="Draft"?"selected":""}>Draft</option></select>
          ${e?`<button class="primary-action" type="button" data-new-lesson ${ae("teacher-tools","Only teachers and administrators can create lessons.")}>${d("plus")} Create lesson</button>`:""}
        </div>
      </div>
      <div class="lesson-library-stats"><span><strong>${C.length}</strong> total lessons</span><span><strong>${a}</strong> published</span><span><strong>${o}</strong> drafts</span></div>
      <div class="lesson-card-grid">
        ${t.map(r=>{const u=r.blocks.filter(m=>m.type==="quiz").length,b=r.blocks.filter(m=>m.type==="media").length;return`
            <article class="lesson-card">
              <div class="lesson-card-top"><span class="lesson-status ${r.status.toLowerCase()}">${r.status}</span><small>${c(r.subject)}</small></div>
              <h4>${c(r.title)}</h4>
              <p>${c(r.summary)}</p>
              <div class="lesson-meta"><span>${d("graduation-cap")} ${c(r.className)}</span><span>${d("clock")} ${r.estimatedMinutes} min</span><span>${d("layers")} ${r.blocks.length} blocks</span></div>
              <div class="lesson-feature-row"><span>${u} quiz${u===1?"":"zes"}</span><span>${b} media</span><span>${r.points} points</span></div>
              <div class="lesson-card-actions">
                <button class="secondary-action" type="button" data-preview-lesson="${r.id}">${d("eye")} Preview</button>
                ${W("teacher-tools")?`<button class="secondary-action" type="button" data-edit-lesson="${r.id}">${d("pen-line")} Edit</button><button class="text-button" type="button" data-toggle-lesson="${r.id}">${r.status==="Published"?"Unpublish":"Publish"}</button>`:""}
              </div>
            </article>
          `}).join("")||`<div class="empty-state">No ${n.lessonFilter.toLowerCase()} lessons yet.</div>`}
      </div>
      ${Nn(C.find(r=>r.id===n.lessonPreviewId))}
    </section>
  `}function Nn(e){return e?`<aside class="lesson-preview-panel" aria-label="Lesson preview">
    <div class="section-heading"><div><p class="eyebrow">Student preview</p><h4>${c(e.title)}</h4></div><button class="icon-button" type="button" data-close-lesson-preview aria-label="Close lesson preview">${d("x")}</button></div>
    <p>${c(e.summary)}</p>
    <div class="lesson-preview-meta"><span>${c(e.className)}</span><span>${e.estimatedMinutes} minutes</span><span>${e.points} points</span></div>
    <div class="lesson-preview-blocks">${e.blocks.map((t,a)=>t.type==="text"?`<article><span class="block-number">${a+1}</span><div><strong>${c(t.title)}</strong><p>${c(t.body)}</p></div></article>`:t.type==="media"?`<article><span class="block-number">${a+1}</span><div><strong>${c(t.title)}</strong>${ja(t)}</div></article>`:`<article><span class="block-number">${a+1}</span><div><strong>${c(t.title)}</strong><p>${c(t.question)}</p><div class="preview-answer-list">${t.options.filter(Boolean).map(o=>`<span>${c(o)}</span>`).join("")}</div></div></article>`).join("")}</div>
  </aside>`:""}function On(e,t,a){const o=`<div class="block-order-actions"><button type="button" data-move-lesson-block="${e.id}:up" ${t===0?"disabled":""} aria-label="Move block up">↑</button><span>${t+1}</span><button type="button" data-move-lesson-block="${e.id}:down" ${t===a-1?"disabled":""} aria-label="Move block down">↓</button><button type="button" data-remove-lesson-block="${e.id}" aria-label="Remove block">${d("x")}</button></div>`;return e.type==="quiz"?`
    <article class="lesson-block-editor quiz-block-editor" data-lesson-block="${e.id}">
      <div class="lesson-block-heading"><div><span class="block-type-icon">${d("clipboard-check")}</span><div><strong>Quiz</strong><small>Auto-graded knowledge check</small></div></div>${o}</div>
      <div class="lesson-block-fields">
        <label><span>Quiz title</span><input value="${c(e.title)}" data-block-field="${e.id}:title" /></label>
        <label><span>Question type</span><select data-block-field="${e.id}:questionType"><option ${e.questionType==="Multiple choice"?"selected":""}>Multiple choice</option><option ${e.questionType==="True or false"?"selected":""}>True or false</option><option ${e.questionType==="Short answer"?"selected":""}>Short answer</option><option ${e.questionType==="Fill in the blank"?"selected":""}>Fill in the blank</option><option ${e.questionType==="Matching"?"selected":""}>Matching</option></select></label>
        <label class="span-2"><span>Question</span><textarea data-block-field="${e.id}:question" placeholder="What should students understand?">${c(e.question)}</textarea></label>
        <div class="quiz-option-editor span-2">
          ${e.questionType==="Matching"?`<div class="matching-pair-editor">${(e.pairs||[]).map((r,u)=>`<label><span>Prompt ${u+1}</span><input value="${c(r.left)}" data-match-pair="${e.id}:${u}:left" /></label><label><span>Match ${u+1}</span><input value="${c(r.right)}" data-match-pair="${e.id}:${u}:right" /></label>`).join("")}</div>`:["Short answer","Fill in the blank"].includes(e.questionType)?`<label><span>Accepted answer</span><input aria-label="Accepted short answer" value="${c(e.options[0]||"")}" data-quiz-option="${e.id}:0" /></label>`:e.options.map((r,u)=>`<label class="quiz-option ${e.questionType==="True or false"&&u>1?"hidden-option":""}"><input type="radio" name="correct-${e.id}" value="${u}" data-correct-answer="${e.id}" ${Number(e.correctAnswer)===u?"checked":""} /><span>Correct</span><input aria-label="Answer option ${u+1}" value="${c(r)}" data-quiz-option="${e.id}:${u}" /></label>`).join("")}
        </div>
        <label><span>Points</span><input type="number" min="1" max="100" value="${e.points}" data-block-field="${e.id}:points" /></label>
        <label class="toggle-field"><input type="checkbox" data-block-field="${e.id}:required" ${e.required?"checked":""} /><span>Required question</span></label>
        <label><span>Time limit (minutes)</span><input type="number" min="0" max="180" value="${e.timeLimit||0}" data-block-field="${e.id}:timeLimit" /></label>
        <label><span>Maximum attempts</span><input type="number" min="1" max="10" value="${e.maxAttempts||1}" data-block-field="${e.id}:maxAttempts" /></label>
        <label class="toggle-field"><input type="checkbox" data-block-field="${e.id}:randomize" ${e.randomize?"checked":""} /><span>Randomize answer choices</span></label>
        <label class="toggle-field"><input type="checkbox" data-block-field="${e.id}:showAnswers" ${e.showAnswers!==!1?"checked":""} /><span>Show feedback after submission</span></label>
        <label class="toggle-field"><input type="checkbox" data-block-field="${e.id}:partialCredit" ${e.partialCredit!==!1?"checked":""} /><span>Allow partial credit</span></label>
        <label><span>Question pool</span><select data-block-field="${e.id}:questionPool"><option ${e.questionPool==="Current lesson"?"selected":""}>Current lesson</option><option ${e.questionPool==="Course bank"?"selected":""}>Course bank</option><option ${e.questionPool==="Standards bank"?"selected":""}>Standards bank</option></select></label>
        <label><span>Accommodation time</span><select data-block-field="${e.id}:accommodationMultiplier"><option value="1" ${Number(e.accommodationMultiplier)===1?"selected":""}>Standard time</option><option value="1.5" ${Number(e.accommodationMultiplier||1.5)===1.5?"selected":""}>1.5× time</option><option value="2" ${Number(e.accommodationMultiplier)===2?"selected":""}>2× time</option></select></label>
        <label class="span-2"><span>Answer feedback</span><textarea data-block-field="${e.id}:feedback" placeholder="Explain the correct answer.">${c(e.feedback)}</textarea></label>
      </div>
    </article>`:e.type==="media"?`
    <article class="lesson-block-editor media-block-editor" data-lesson-block="${e.id}">
      <div class="lesson-block-heading"><div><span class="block-type-icon">${d("video")}</span><div><strong>Media</strong><small>Video, image, audio, document, or link</small></div></div>${o}</div>
      <div class="lesson-block-fields">
        <label><span>Media title</span><input value="${c(e.title)}" data-block-field="${e.id}:title" /></label>
        <label><span>Media type</span><select data-block-field="${e.id}:mediaType">${["Video","Image","Audio","Document","Link"].map(r=>`<option ${e.mediaType===r?"selected":""}>${r}</option>`).join("")}</select></label>
        <label class="span-2"><span>Media URL</span><input type="url" value="${c(e.url)}" data-block-field="${e.id}:url" placeholder="https://..." /></label>
        <label class="span-2 lesson-file-upload"><span>Or upload media</span><input type="file" data-lesson-media-upload="${e.id}" accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.ppt,.pptx" /><small>${e.file?`${c(e.file.name)} • ${c(e.file.status||"Ready")}`:"Images, video, audio, PDF, Word, or PowerPoint up to 5 MB"}</small></label>
        <label class="span-2"><span>Caption or instructions</span><textarea data-block-field="${e.id}:caption">${c(e.caption)}</textarea></label>
      </div>
    </article>`:`
    <article class="lesson-block-editor text-block-editor" data-lesson-block="${e.id}">
      <div class="lesson-block-heading"><div><span class="block-type-icon">${d("file-text")}</span><div><strong>Content</strong><small>Directions, reading, or explanation</small></div></div>${o}</div>
      <div class="lesson-block-fields">
        <label class="span-2"><span>Section title</span><input value="${c(e.title)}" data-block-field="${e.id}:title" /></label>
        <label class="span-2"><span>Lesson content</span><textarea class="lesson-content-textarea" data-block-field="${e.id}:body" placeholder="Write instructions or learning content...">${c(e.body)}</textarea></label>
      </div>
    </article>`}function Rn(){const e=n.lessonDraft||Da();return`
    <section class="panel lesson-builder-panel" aria-labelledby="lesson-builder-title">
      <div class="section-heading lesson-builder-heading"><div><p class="eyebrow">Lesson Studio</p><h3 id="lesson-builder-title">${e.id?"Edit lesson":"Create a lesson"}</h3></div><button class="icon-button" type="button" data-close-lesson-builder aria-label="Close lesson builder">${d("x")}</button></div>
      <form id="lesson-builder-form" class="lesson-builder-form">
        <div class="lesson-settings-grid">
          <label class="span-2"><span>Lesson title</span><input required value="${c(e.title)}" data-lesson-field="title" placeholder="Example: Exploring persuasive writing" /></label>
          <label><span>Subject</span><select data-lesson-field="subject">${["English Language Arts","Math","Science","Social Studies","Art","Technology"].map(t=>`<option ${e.subject===t?"selected":""}>${t}</option>`).join("")}</select></label>
          <label><span>Class</span><select data-lesson-field="className">${Z.map(t=>`<option ${e.className===t.name?"selected":""}>${t.name}</option>`).join("")}</select></label>
          <label class="span-2"><span>Learning objective and summary</span><textarea required data-lesson-field="summary" placeholder="What will students learn and do?">${c(e.summary)}</textarea></label>
          <label><span>Due date</span><input type="date" value="${c(e.dueDate)}" data-lesson-field="dueDate" /></label>
          <label><span>Estimated minutes</span><input type="number" min="5" max="240" value="${e.estimatedMinutes}" data-lesson-field="estimatedMinutes" /></label>
          <label><span>Total points</span><input type="number" min="0" max="1000" value="${e.points}" data-lesson-field="points" /></label>
          <label><span>Visibility</span><select data-lesson-field="visibility"><option ${e.visibility==="Teacher only"?"selected":""}>Teacher only</option><option ${e.visibility==="Students"?"selected":""}>Students</option><option ${e.visibility==="Students and families"?"selected":""}>Students and families</option></select></label>
          <label class="toggle-field"><input type="checkbox" data-lesson-field="allowLate" ${e.allowLate?"checked":""} /><span>Allow late completion</span></label>
          <label class="toggle-field"><input type="checkbox" data-lesson-field="requireOrder" ${e.requireOrder?"checked":""} /><span>Require blocks in order</span></label>
        </div>
        <div class="lesson-block-toolbar"><div><strong>Lesson blocks</strong><small>Add and reorder learning content.</small></div><div class="inline-actions"><button class="secondary-action" type="button" data-add-lesson-block="text">${d("file-text")} Content</button><button class="secondary-action" type="button" data-add-lesson-block="media">${d("video")} Media</button><button class="secondary-action" type="button" data-add-lesson-block="quiz">${d("clipboard-check")} Quiz</button></div></div>
        <div class="question-bank-bar"><div><strong>Question bank</strong><small>Reuse standards-aligned questions.</small></div><select id="question-bank-select" aria-label="Question bank item">${Ne.map(t=>`<option value="${t.id}">${c(t.subject)} • ${c(t.question)}</option>`).join("")}</select><button class="secondary-action" type="button" data-add-bank-question>${d("plus")} Add question</button></div>
        <div class="lesson-block-list">${e.blocks.map((t,a)=>On(t,a,e.blocks.length)).join("")}</div>
        <div class="lesson-publish-bar"><div><strong>${e.blocks.length} blocks</strong><span>Changes are saved when you choose an action.</span></div><div class="inline-actions"><button class="secondary-action" type="submit" data-lesson-status="Draft">Save draft</button><button class="primary-action" type="submit" data-lesson-status="Published">${d("check")} Publish lesson</button></div></div>
      </form>
    </section>
  `}function In(){return n.lessonBuilderOpen?Rn():Ia({teacherStudio:!0})}function ja(e){var a;if(e.file){const o=(a=e.file.id)!=null&&a.startsWith("upload-")&&n.apiMode==="live-api"?Gs(e.file.id):e.file.dataUrl||"#";return`<a class="lesson-media-link" href="${c(o)}" ${o==="#"?"":'target="_blank" rel="noreferrer"'}>${d("paperclip")}<span><strong>${c(e.file.name)}</strong><small>${c(e.caption||e.file.type||"Lesson attachment")}</small></span>${d("download")}</a>`}const t=qa(e.url);return t?e.mediaType==="Image"?`<figure class="student-lesson-media"><img src="${t}" alt="${c(e.caption||e.title)}" /><figcaption>${c(e.caption)}</figcaption></figure>`:e.mediaType==="Audio"?`<div class="student-lesson-media"><audio controls src="${t}"></audio><p>${c(e.caption)}</p></div>`:e.mediaType==="Video"&&/\.(mp4|webm|ogg)(\?|$)/i.test(t)?`<div class="student-lesson-media"><video controls src="${t}"></video><p>${c(e.caption)}</p></div>`:`<a class="lesson-media-link" href="${t}" target="_blank" rel="noreferrer">${d(e.mediaType==="Video"?"play":"paperclip")}<span><strong>${c(e.title)}</strong><small>${c(e.caption||`Open ${e.mediaType.toLowerCase()}`)}</small></span>${d("chevron-right")}</a>`:`<div class="lesson-media-placeholder">${d("paperclip")}<span>Media link has not been added yet.</span></div>`}function jn(e){if(["Short answer","Fill in the blank"].includes(e.questionType))return`<label class="short-answer-field"><span>Your answer</span><input name="quiz-${e.id}" ${e.required?"required":""} /></label>`;if(e.questionType==="Matching"){const a=(e.pairs||[]).filter(r=>r.left.trim()&&r.right.trim()),o=e.randomize?[...a].reverse():a;return a.map((r,u)=>`<label class="matching-answer"><span>${c(r.left)}</span><select name="quiz-${e.id}-${u}" ${e.required?"required":""}><option value="">Choose a match</option>${o.map(b=>`<option value="${c(b.right)}">${c(b.right)}</option>`).join("")}</select></label>`).join("")}let t=e.options.map((a,o)=>({option:a,optionIndex:o})).filter(({option:a})=>a.trim());return e.randomize&&(t=[...t].reverse()),t.map(({option:a,optionIndex:o})=>`<label><input type="radio" name="quiz-${e.id}" value="${o}" ${e.required?"required":""} /><span>${c(a)}</span></label>`).join("")}function ga(e){var o;const t=((o=n.lessonProgress)==null?void 0:o[e.id])||{},a=new Set(t.completedBlocks||[]);return e.blocks.filter(r=>r.type==="quiz"&&t.completed).forEach(r=>a.add(r.id)),e.blocks.length?Math.round(a.size/e.blocks.length*100):0}function zn(){var o,r,u,b;const e=C.filter(m=>m.status==="Published"),t=e.find(m=>m.id===n.activeStudentLessonId)||e[0],a=t?(o=n.lessonProgress)==null?void 0:o[t.id]:null;return`
    <section class="panel student-lessons-panel">
      <div class="section-heading"><div><p class="eyebrow">My classroom</p><h3>${N("lessons")}</h3></div><span>${e.length} available</span></div>
      <div class="student-lesson-layout">
        <div class="student-lesson-list">
          ${e.map(m=>`<button class="student-lesson-card ${(t==null?void 0:t.id)===m.id?"active":""}" type="button" data-open-student-lesson="${m.id}"><span>${d("book-open")}</span><div><strong>${c(m.title)}</strong><small>${c(m.subject)} • ${m.estimatedMinutes} min • ${m.points} points</small>${te(ga(m))}</div><em>${ga(m)}%</em></button>`).join("")}
        </div>
        ${t?`<article class="student-lesson-view">
          <div class="student-lesson-hero"><span>${c(t.subject)}</span><h4>${c(t.title)}</h4><p>${c(t.summary)}</p><div><small>Due ${t.dueDate||"anytime"}</small><small>${t.allowLate?"Late work allowed":"Firm deadline"}</small><small>${t.requireOrder?"Complete in order":"Flexible order"}</small></div><div class="student-lesson-tools"><button type="button" data-bookmark-lesson="${t.id}">${d((r=n.bookmarkedLessons)!=null&&r.includes(t.id)?"star":"book-open")} ${(u=n.bookmarkedLessons)!=null&&u.includes(t.id)?"Bookmarked":"Bookmark"}</button><button type="button" data-read-lesson="${t.id}">${d("play")} Read aloud</button></div></div>
          <form class="student-lesson-content" data-submit-lesson="${t.id}">
            ${t.blocks.map((m,E)=>{var L,z,F,S,R,j,Q,se;return m.type==="text"?`<section class="student-content-block"><span class="block-number">${E+1}</span><div><h5>${c(m.title)}</h5><p>${c(m.body).replace(/\n/g,"<br />")}</p><button class="text-button" type="button" data-complete-lesson-block="${t.id}:${m.id}">${(L=a==null?void 0:a.completedBlocks)!=null&&L.includes(m.id)?d("check")+" Completed":"Mark section complete"}</button></div></section>`:m.type==="media"?`<section class="student-content-block"><span class="block-number">${E+1}</span><div><h5>${c(m.title)}</h5>${ja(m)}<button class="text-button" type="button" data-complete-lesson-block="${t.id}:${m.id}">${(z=a==null?void 0:a.completedBlocks)!=null&&z.includes(m.id)?d("check")+" Completed":"Mark media complete"}</button></div></section>`:`<fieldset class="student-quiz-block"><legend><span class="block-number">${E+1}</span><span><strong>${c(m.title)}</strong><small>${m.points} points${m.required?" • Required":""}${m.timeLimit?` • ${m.timeLimit} min`:""} • ${m.maxAttempts||1} attempt${(m.maxAttempts||1)===1?"":"s"}</small></span></legend><p>${c(m.question)}</p><div class="student-answer-list">${jn(m)}</div>${a&&m.showAnswers!==!1?`<div class="quiz-feedback ${(S=(F=a.answers)==null?void 0:F[m.id])!=null&&S.correct?"correct":"incorrect"}">${(j=(R=a.answers)==null?void 0:R[m.id])!=null&&j.correct?d("check"):d("alert-triangle")} ${c((se=(Q=a.answers)==null?void 0:Q[m.id])!=null&&se.correct?m.feedback||"Correct.":"Review this question and try again.")}</div>`:""}</fieldset>`}).join("")}
            <label class="student-lesson-notes"><span>Private notes</span><textarea data-lesson-note="${t.id}" placeholder="Write notes or questions to revisit...">${c(((b=n.studentNotes)==null?void 0:b[t.id])||"")}</textarea><button class="secondary-action" type="button" data-save-lesson-note="${t.id}">Save notes</button></label>
            <div class="student-lesson-submit"><div>${a?`<strong>${a.score}%</strong><span>Latest score • Attempt ${a.attempts||1}</span>`:`<strong>${t.points}</strong><span>points available</span>`}</div><div class="inline-actions">${a!=null&&a.certificate?`<button class="secondary-action" type="button" data-download-certificate="${t.id}">${d("award")} Certificate</button>`:""}<button class="primary-action" type="submit">${d("check")} ${a?"Submit again":"Complete lesson"}</button></div></div>
          </form>
        </article>`:'<div class="empty-state">No published lessons are available yet.</div>'}
      </div>
    </section>`}function va(){return P().role==="Student"?P().id:"student"}function Se(e,t=!1){let a=ce.find(o=>o.assignmentId===e&&o.studentId===va());return!a&&t&&(a={id:`work-${e}-${Date.now()}`,assignmentId:e,studentId:va(),student:P().role==="Student"?P().label:"Demo Learner",response:"",attachments:[],status:"Not started",attempt:1,submittedAt:"",score:null,feedback:"",returnedAt:""},ce.unshift(a)),a}function Fn(){const e=T.filter(r=>(r.status||"Published")==="Published"),t=e.find(r=>r.id===n.activeAssignmentId)||e[0],a=t?Se(t.id):null,o=e.filter(r=>{var u;return!Se(r.id)||["Not started","Draft"].includes((u=Se(r.id))==null?void 0:u.status)}).length;return`<section class="panel student-assignments-panel">
    <div class="section-heading"><div><p class="eyebrow">${N("assignments")}</p><h3>Submit Your Work</h3></div><span>${o} need attention</span></div>
    <div class="student-assignment-layout">
      <div class="student-assignment-list">${e.map(r=>{const u=Se(r.id);return`<button type="button" class="student-assignment-card ${(t==null?void 0:t.id)===r.id?"active":""}" data-open-assignment="${r.id}"><span>${d("file-text")}</span><div><strong>${c(r.title)}</strong><small>${c(r.className||"All classes")} • Due ${c(r.dueDate||r.lockDate)}</small></div><em>${(u==null?void 0:u.status)||"Not started"}</em></button>`}).join("")}</div>
      ${t?`<form class="student-assignment-work" data-assignment-work="${t.id}">
        <div class="assignment-detail-heading"><div><span>${c(t.type)}</span><h4>${c(t.title)}</h4><p>${c(t.instructions||"Complete the assignment and submit your work.")}</p></div><strong>${t.points||100} pts</strong></div>
        <div class="assignment-requirements"><span>${t.allowResubmit?"Resubmissions allowed":"One submission"}</span><span>Up to ${t.maxAttempts||1} attempts</span><span>${c(t.rubric)}</span></div>
        ${(a==null?void 0:a.status)==="Returned"?`<div class="returned-feedback"><strong>${a.score}% • Returned</strong><p>${c(a.feedback||"Review the teacher feedback and resubmit when ready.")}</p></div>`:""}
        <label><span>Written response</span><textarea id="student-assignment-response" placeholder="Write or paste your response here...">${c((a==null?void 0:a.response)||"")}</textarea></label>
        <label class="assignment-upload"><span>Attach files</span><input type="file" data-assignment-file="${t.id}" multiple accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.ppt,.pptx,.txt" /><small>Up to 5 MB per file</small></label>
        <div class="submission-attachments">${((a==null?void 0:a.attachments)||[]).map(r=>`<span>${d("paperclip")} ${c(r.name)} <button type="button" data-remove-assignment-file="${t.id}:${r.id}" aria-label="Remove ${c(r.name)}">${d("x")}</button></span>`).join("")||"<small>No files attached.</small>"}</div>
        <div class="assignment-submit-actions"><span>Attempt ${(a==null?void 0:a.attempt)||1} of ${t.maxAttempts||1}</span><div class="inline-actions"><button class="secondary-action" type="submit" data-work-status="Draft">${N("saveDraft")}</button><button class="primary-action" type="submit" data-work-status="Submitted">${d("send")} ${N("submit")}</button></div></div>
      </form>`:'<div class="empty-state">No published assignments.</div>'}
    </div>
  </section>`}function Bn(){var u;const e=C.filter(b=>b.status==="Published"),t=e.filter(b=>{var m,E;return(E=(m=n.lessonProgress)==null?void 0:m[b.id])==null?void 0:E.completed}),a=t.map(b=>n.lessonProgress[b.id].score),o=a.length?Math.round(a.reduce((b,m)=>b+m,0)/a.length):0,r=T.filter(b=>{var m;return!["Submitted","Returned"].includes((m=Se(b.id))==null?void 0:m.status)}).length;return`<section class="panel student-progress-hub"><div class="section-heading"><div><p class="eyebrow">Learning overview</p><h3>My Progress</h3></div><span>Resumes automatically</span></div><div class="student-progress-grid"><article><strong>${t.length}/${e.length}</strong><span>Lessons completed</span>${te(e.length?Math.round(t.length/e.length*100):0)}</article><article><strong>${o}%</strong><span>Average quiz score</span>${te(o)}</article><article class="${r?"needs-attention":""}"><strong>${r}</strong><span>Missing or draft assignments</span></article><article><strong>${((u=n.bookmarkedLessons)==null?void 0:u.length)||0}</strong><span>Bookmarked lessons</span></article><article><strong>${t.filter(b=>n.lessonProgress[b.id].certificate).length}</strong><span>Certificates earned</span></article></div></section>`}function Un(){const e=ce.filter(a=>a.status==="Submitted"),t=ce.filter(a=>a.status==="Returned");return`<section class="panel teacher-operations-panel">
    <div class="section-heading"><div><p class="eyebrow">Teacher command center</p><h3>Learning Operations</h3></div><span>${e.length} ready to grade</span></div>
    <div class="teacher-operation-stats"><span><strong>${C.filter(a=>a.status==="Draft").length}</strong> lesson drafts</span><span><strong>${T.filter(a=>a.status==="Published").length}</strong> live assignments</span><span><strong>${e.length}</strong> grading queue</span><span><strong>${t.length}</strong> returned</span></div>
    <div class="grading-inbox"><div class="section-heading"><h4>Submission Inbox</h4><span>Score, comment, return</span></div>${e.length?e.map(a=>{const o=T.find(r=>r.id===a.assignmentId);return`<form class="grading-inbox-row" data-return-submission="${a.id}"><div><strong>${c(a.student)}</strong><small>${c((o==null?void 0:o.title)||a.assignmentId)} • Attempt ${a.attempt}</small><p>${c(a.response||"Attachment submission")}</p></div><label><span>Score</span><input type="number" min="0" max="100" value="${a.score??""}" required data-grade-score /></label><label><span>Feedback</span><textarea required data-grade-feedback>${c(a.feedback||"")}</textarea></label><button class="primary-action" type="submit">${d("check")} Return</button></form>`}).join(""):'<div class="empty-state">No submissions are waiting for review.</div>'}</div>
  </section>`}function _n(){return`<section class="panel curriculum-planner-panel">
    <div class="section-heading"><div><p class="eyebrow">Curriculum map</p><h3>Courses and Units</h3></div><span>${oe.length} courses</span></div>
    <form class="curriculum-create-form" id="course-create-form"><input id="course-title" placeholder="New course title" required /><select id="course-subject"><option>English Language Arts</option><option>Math</option><option>Science</option><option>Social Studies</option><option>Art</option><option>Technology</option></select><input id="course-grade" placeholder="Grade" required /><button class="secondary-action" type="submit">${d("plus")} Add course</button></form>
    <div class="curriculum-course-list">${oe.map(e=>`<article class="curriculum-course"><div class="curriculum-course-heading"><div><span>${c(e.subject)} • Grade ${c(e.grade)}</span><h4>${c(e.title)}</h4><small>${e.standards.join(" • ")||"Standards can be added"}</small></div><form data-add-unit="${e.id}"><input aria-label="New unit for ${c(e.title)}" placeholder="New unit title" required /><button class="text-button" type="submit">${d("plus")} Add unit</button></form></div><div class="curriculum-unit-list">${e.units.map(t=>`<section><div><strong>${c(t.title)}</strong><small>${c(t.description||"Curriculum unit")}</small></div><span>${t.lessonIds.length} lessons</span><span>${t.assignmentIds.length} assignments</span><form data-link-curriculum="${e.id}:${t.id}"><select aria-label="Content to add to ${c(t.title)}"><optgroup label="Lessons">${C.map(a=>`<option value="lesson:${a.id}">${c(a.title)}</option>`).join("")}</optgroup><optgroup label="Assignments">${T.map(a=>`<option value="assignment:${a.id}">${c(a.title)}</option>`).join("")}</optgroup></select><button class="text-button" type="submit">Link content</button></form></section>`).join("")}</div></article>`).join("")}</div>
  </section>`}function Gn(){const e=[...C.filter(t=>t.dueDate).map(t=>({title:t.title,date:t.dueDate,kind:"Lesson",status:t.status})),...T.filter(t=>t.dueDate).map(t=>({title:t.title,date:t.dueDate,kind:"Assignment",status:t.status}))].sort((t,a)=>t.date.localeCompare(a.date));return`<section class="panel teacher-calendar-panel"><div class="section-heading"><div><p class="eyebrow">Instruction plan</p><h3>Teaching Calendar</h3></div><span>${e.length} scheduled</span></div><div class="teaching-calendar-list">${e.map(t=>`<article><time>${c(t.date)}</time><div><strong>${c(t.title)}</strong><small>${t.kind} • ${t.status}</small></div></article>`).join("")||'<div class="empty-state">Add a due date to a lesson or assignment to place it here.</div>'}</div></section>`}function Wn(){return`<section class="panel notification-automation-panel"><div class="section-heading"><div><p class="eyebrow">Family communication</p><h3>Automated Reminders</h3></div><span>${Object.entries(n.notificationPreferences).filter(([t,a])=>["email","sms","push"].includes(t)&&a).map(([t])=>t.toUpperCase()).join(" + ")||"Dashboard only"}</span></div><p>Due-date reminders are scheduled ${n.notificationPreferences.dueDays} day${n.notificationPreferences.dueDays===1?"":"s"} ahead using each person's preferences.</p><button class="secondary-action" type="button" data-send-class-reminder>${d("send")} Send class reminder now</button><div class="delivery-summary">${V.slice(0,3).map(t=>`<span><strong>${c(t.channel)}</strong> ${c(t.status)}</span>`).join("")}</div></section>`}function Hn(){const e=He(),t=e.categories.reduce((a,o)=>a+Number(o.weight),0);return`<section class="panel standards-gradebook-panel"><div class="section-heading"><div><p class="eyebrow">Standards and reporting</p><h3>Standards Gradebook</h3></div><span>${t===100?"Weights balanced":`${t}% total`}</span></div><div class="standards-gradebook-grid"><div><h4>Weighted categories</h4><div class="weight-list">${e.categories.map((a,o)=>`<label><span>${c(a.name)}</span><input type="number" min="0" max="100" value="${a.weight}" data-gradebook-weight="${o}"/><em>%</em></label>`).join("")}</div></div><div><h4>Standards mastery</h4><div class="standards-list">${e.standards.map(a=>`<article><div><strong>${c(a.code)}</strong><span>${a.mastery}% mastery</span></div>${te(a.mastery)}</article>`).join("")}</div></div><div class="reporting-actions"><h4>Reporting & SIS</h4><p>Generate report cards or exchange grades using ${e.sisExport.format}.</p><button class="secondary-action" type="button" data-generate-report-cards>${d("file-text")} Generate report cards</button><button class="secondary-action" type="button" data-export-sis>${d("download")} Export to SIS</button><small>Last export: ${e.sisExport.lastExport}</small></div></div></section>`}function He(){g.gradebooks||(g.gradebooks={});const e=y().id;return g.gradebooks[e]||(g.gradebooks[e]=structuredClone(g.gradebook)),g.gradebooks[e]}function Jn(){const e=y(),t=Qe.find(r=>r.id===n.activeAccount)||Qe[0],a=C.reduce((r,u)=>r+u.blocks.filter(b=>b.type==="quiz").length,0),o=C.filter(r=>r.status==="Published").length;return`
    <section class="dashboard-grid lms-grid">
      <div class="welcome-strip lms-welcome">
        <div>
          <p class="eyebrow">${e.name} advanced LMS</p>
          <h2>Lessons, quizzes, media, and grading in one LMS</h2>
          <p>Teachers can build multimedia lessons, publish quizzes, manage assignments, grade submissions, and support offline learning inside this school instance.</p>
        </div>
        <button class="primary-action" data-build-offline ${ae("lms","Only teachers and administrators can build LMS offline packs.")}>${d("download")} ${n.offlinePackReady?"Rebuild Offline Pack":"Build Offline Pack"}</button>
      </div>

      ${I("Published lessons",o,"book-open","blue")}
      ${I("Quiz blocks",a,"clipboard-check","teal")}
      ${I("Offline packs",n.offlinePackReady?"Ready":"Not built","download","gold")}

      ${Ia()}
      ${Qn()}

      <section class="panel lms-panel simplicity-suite">
        <div class="section-heading"><h3>Simple Classroom Experience</h3><span>Clean by default</span></div>
        ${Ns.slice(0,2).map(([r,u])=>`<article class="strength-row">${d("check")}<div><strong>${r}</strong><small>${u}</small></div></article>`).join("")}
      </section>

      <section class="panel lms-panel free-suite">
        <div class="section-heading"><h3>Zero Cost Core</h3><span>No premium paywall</span></div>
        <div class="free-card"><strong>$0</strong><p>Schools can use classroom basics, paperless assignments, messaging, and parent summaries without hidden fees.</p></div>
      </section>

      <section class="panel lms-panel grading-suite">
        <div class="section-heading"><h3>Advanced Grading</h3><span>Automated tests + rubrics + analytics</span></div>
        <div class="assignment-list">
          ${T.map(r=>`
            <article class="assignment-row">
              <div><strong>${r.title}</strong><small>${r.type} • ${r.rubric}</small></div>
              ${te(r.analytics)}
              <span>${r.analytics}% mastery</span>
            </article>
          `).join("")}
        </div>
      </section>

      ${Vn()}

      <section class="panel lms-panel deadline-suite">
        <div class="section-heading"><h3>Deadline Controls</h3><span>Firm locks + exceptions</span></div>
        ${T.map(r=>`
          <article class="deadline-control">
            <div><strong>${r.title}</strong><small>Locks ${r.lockDate}</small></div>
            <span>${r.exception}</span>
          </article>
        `).join("")}
      </section>

      <section class="panel lms-panel account-suite">
        <div class="section-heading"><h3>Account Context</h3><span>No constant log-outs</span></div>
        <div class="account-switcher">
          ${Qe.map(r=>`<button class="${t.id===r.id?"active":""}" data-lms-account="${r.id}"><strong>${r.name}</strong><span>${r.context}</span></button>`).join("")}
        </div>
        <p class="account-note">Current context: <strong>${t.name}</strong> can switch roles without leaving ${e.name}.</p>
      </section>

      <section class="panel lms-panel workflow-suite">
        <div class="section-heading"><h3>Paperless Assignment Workflow</h3><span>Create to return</span></div>
        <div class="workflow-steps">
          ${["Create","Distribute","Collect","Grade","Return","Archive"].map((r,u)=>`<div><strong>${u+1}</strong><span>${r}</span></div>`).join("")}
        </div>
      </section>

      <section class="panel lms-panel guardrail-suite">
        <div class="section-heading"><h3>Automated Guardrails</h3><span>Submission and quiz controls</span></div>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="lockSubmissions" ${n.guardrails.lockSubmissions?"checked":""} ${W("lms")?"":"disabled"} /><span class="custom-check">${n.guardrails.lockSubmissions?d("check"):""}</span><span>Prevent edits after submission</span></label>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="hideAnswers" ${n.guardrails.hideAnswers?"checked":""} ${W("lms")?"":"disabled"} /><span class="custom-check">${n.guardrails.hideAnswers?d("check"):""}</span><span>Hide answers until quiz closes</span></label>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="parentSummaries" ${n.guardrails.parentSummaries?"checked":""} ${W("lms")?"":"disabled"} /><span class="custom-check">${n.guardrails.parentSummaries?d("check"):""}</span><span>Auto-return parent email summaries</span></label>
        ${qe("lms","LMS guardrails are managed by teachers and administrators.")}
      </section>

      <section class="panel lms-panel offline-suite">
        <div class="section-heading"><h3>Offline Learning</h3><span>${n.offlinePackReady?"Synced for low-connectivity use":"Build a pack for offline work"}</span></div>
        <div class="offline-card">
          <div class="offline-status ${n.offlinePackReady?"ready":""}">${n.offlinePackReady?d("check"):d("download")}</div>
          <div><strong>${n.offlinePackReady?"Offline pack ready":"Offline pack not built"}</strong><p>Includes assignments, rubrics, PDF annotations, and queued submissions for later sync.</p></div>
        </div>
      </section>

      <section class="panel lms-panel privacy-suite">
        <div class="section-heading"><h3>Learning Privacy</h3><span>FERPA-aware LMS</span></div>
        ${Os.map(r=>`<article class="strength-row">${d("shield-check")}<div><strong>${r.label}</strong><small>${r.detail}</small></div></article>`).join("")}
      </section>
    </section>
  `}function Vn(){const e=U.find(t=>t.id===n.selectedSubmissionId)||U[0];return`
    <section class="panel lms-panel gradebook-detail-suite">
      <div class="section-heading"><h3>Gradebook Detail</h3><span>Submissions, rubric, comments</span></div>
      <div class="gradebook-layout">
        <div class="submission-list">
          ${U.map(t=>`
            <button class="submission-row ${e.id===t.id?"active":""}" data-submission="${t.id}">
              ${d(t.status==="Missing"?"alert-triangle":"file-text")}
              <span><strong>${t.student}</strong><small>${t.assignment} • ${t.status}</small></span>
              <em>${t.score}%</em>
            </button>
          `).join("")}
        </div>
        <article class="submission-detail">
          <div class="section-heading"><h4>${e.student}</h4><span>${e.assignment}</span></div>
          ${e.rubric.map(([t,a])=>`<div class="rubric-row"><span>${t}</span>${te(Math.round(a/4*100))}<strong>${a}/4</strong></div>`).join("")}
          <label><span>Teacher comment</span><textarea id="submission-comment">${c(e.comment)}</textarea></label>
          <button class="primary-action" data-save-submission="${e.id}" ${ae("teacher-tools","Only teachers and administrators can save grading comments.")}>${d("check")} Save Comment</button>
        </article>
      </div>
    </section>
  `}function Yn(){const e=y(),t=(e.studentPoints+n.completed.length*75).toLocaleString();return`
    <section class="dashboard-grid student-grid">
      <div class="hero-card student-hero">
        <div>
          <span class="badge soft">${d("star")} ${t} points</span>
          <h2>Welcome back, ${e.studentName}!</h2>
          <p>You are learning inside the ${e.name} instance. Keep going and unlock today's discovery badge.</p>
          <button class="primary-action" data-continue-adventure>${d("play")} Continue Adventure</button>
        </div>
        <div class="orbital-scene" aria-hidden="true"><span class="planet planet-one"></span><span class="planet planet-two"></span><span class="rocket-shape">${d("rocket")}</span></div>
      </div>
      ${I("Daily streak","5 days","trending-up","blue")}
      ${I("Books read","12","book-open","teal")}
      ${Bn()}
      ${Fn()}
      ${zn()}
      <section class="panel missions-panel">
        <div class="section-heading"><div><p class="eyebrow">Today</p><h3>My Missions</h3></div><button class="text-button" data-action="All available missions are already shown for this learner.">See all ${d("chevron-right")}</button></div>
        <div class="mission-list">
          ${Je.map(a=>{const o=n.completed.includes(a.id);return`
              <article class="mission-card ${a.accent}">
                <div class="mission-icon">${d(a.icon)}</div>
                <div class="mission-main">
                  <div class="mission-meta"><span>${a.subject}</span><span>${a.due}</span></div>
                  <h4>${a.title}</h4>
                  ${te(o?100:a.progress)}
                </div>
                <button class="complete-button ${o?"done":""}" data-complete="${a.id}">${d(o?"check":"play")} ${o?"Done":a.action}</button>
              </article>
            `}).join("")}
        </div>
      </section>
      <section class="panel awards-panel">
        <div class="section-heading"><h3>Awards</h3>${d("award")}</div>
        <div class="award-grid">${["Kindness Kid","Problem Solver","Fast Learner","Story Teller"].map(a=>`<div class="award-tile">${d("sparkles")}<span>${a}</span></div>`).join("")}</div>
      </section>
    </section>
  `}function Qn(){const e=We();return`
    <section class="panel lms-panel background-services" aria-label="Passive background services">
      <div class="section-heading">
        <div><p class="eyebrow">Passive background layer</p><h3>Background Services</h3></div>
        <span>Runs quietly behind LMS work</span>
      </div>
      <div class="background-service-grid">
        <article class="background-service-card">
          <div>${d("refresh-cw")}<strong>Workspace sync</strong></div>
          <small>${ca.length} connected services attach, collect, archive, and export in the background.</small>
          <span>Passive</span>
        </article>
        <article class="background-service-card">
          <div>${d("paperclip")}<strong>File handling</strong></div>
          <small>${Fe.length} class files are converted, attached, or archived without interrupting classroom flow.</small>
          <span>Passive</span>
        </article>
        <article class="background-service-card">
          <div>${d("bell")}<strong>Notification routing</strong></div>
          <small>${e} unread alert${e===1?"":"s"} stay in the notification tray unless action is needed.</small>
          <span>Tray</span>
        </article>
        <article class="background-service-card">
          <div>${d("calendar-days")}<strong>Calendar bridge</strong></div>
          <small>${ya.length} shared events inform deadlines and family reminders in the background.</small>
          <span>Synced</span>
        </article>
      </div>
      <details class="background-details">
        <summary>View background service activity</summary>
        <div class="background-activity">
          ${ca.map(t=>`<article><strong>${t.app}</strong><small>${t.action}</small><span>${t.status}</span></article>`).join("")}
          ${Oe.map(t=>`<article><strong>${t.item}</strong><small>${t.owner}</small><span>${n.offlinePackReady?t.status:"Waiting"}</span></article>`).join("")}
        </div>
      </details>
    </section>
  `}function Kn(){const e=y(),t=n.selectedClass==="All"?Z:Z.filter(o=>o.name===n.selectedClass),a=n.rosterFilter==="All"?D:D.filter(o=>o.status===n.rosterFilter);return`
    <section class="dashboard-grid teacher-grid">
      <div class="welcome-strip"><div><p class="eyebrow">${e.name} instance</p><h2>Welcome back, Demo Teacher.</h2><p>Build lessons with rich content, quizzes, and media, then publish them directly to your students.</p></div><button class="primary-action" data-new-lesson ${ae("teacher-tools","Only teachers and administrators can create lessons.")}>${d("plus")} Create lesson</button></div>
      ${I("Average grade",e.avgGrade,"trending-up","blue")}
      ${I("Attendance",e.attendance,"calendar-days","teal")}
      ${I("Messages",e.messages,"mail","gold")}
      ${Un()}
      ${Gn()}
      ${Wn()}
      ${Hn()}
      ${Na({compact:!0})}
      ${In()}
      <section class="panel class-panel">
        <div class="section-heading">
          <h3>Active Classes</h3>
          <select id="class-filter" aria-label="Filter classes"><option>All</option>${Z.map(o=>`<option ${n.selectedClass===o.name?"selected":""}>${o.name}</option>`).join("")}</select>
        </div>
        <div class="class-list">${t.map(o=>`<article class="class-card"><div><h4>${o.name}</h4><p>${o.room}</p></div><div class="class-metrics"><span>${o.grade}% grade</span><span>${o.attendance}% attendance</span><span>${o.pending} pending</span></div><button class="icon-button" aria-label="Open ${o.name} options" data-action="${o.name} class tools opened.">${d("more-horizontal")}</button></article>`).join("")}</div>
      </section>
      <section class="panel assignment-composer-panel">
        <div class="section-heading"><h3>Quick Assignment</h3><span>Add a simple graded task</span></div>
        <form id="assignment-form" class="assignment-form">
          <label><span>Title</span><input id="assignment-title" placeholder="Example: Reading Checkpoint" required /></label>
          <label><span>Class</span><select id="assignment-class">${Z.map(o=>`<option>${o.name}</option>`).join("")}</select></label>
          <label><span>Type</span><select id="assignment-type"><option>Automated quiz</option><option>Writing task</option><option>Project</option><option>Reading response</option></select></label>
          <label><span>Due date</span><input type="date" id="assignment-due" value="2026-10-30" /></label>
          <label class="span-2"><span>Instructions</span><textarea id="assignment-instructions" placeholder="What should students submit?"></textarea></label>
          <label><span>Points</span><input type="number" id="assignment-points" min="1" max="1000" value="100" /></label>
          <label><span>Maximum attempts</span><input type="number" id="assignment-attempts" min="1" max="10" value="2" /></label>
          <label class="toggle-field span-2"><input type="checkbox" id="assignment-resubmit" checked /><span>Allow resubmissions after feedback</span></label>
          <button class="primary-action" type="submit" ${ae("teacher-tools","Only teachers and administrators can create assignments.")}>${d("plus")} Add Assignment</button>
        </form>
        <div class="quick-assignment-list">${T.slice(0,5).map(o=>`<article><strong>${c(o.title)}</strong><span>${c(o.className||"All classes")} • ${o.status||"Published"}</span></article>`).join("")}</div>
      </section>
      <section class="panel activity-panel">
        <div class="section-heading"><h3>Recent Student Activity</h3><button class="icon-button" aria-label="Refresh activity" data-refresh-activity>${d("refresh-cw")}</button></div>
        ${ve.map(([o,r,u,b])=>`<article class="activity-row"><div class="avatar">${he(o)}</div><div><p><strong>${o}</strong> ${r}</p><span>${u} | ${b}</span></div><button class="icon-button" aria-label="Reply to ${o}" data-reply-student="${o}">${d("pen-line")}</button></article>`).join("")}
      </section>
      ${_n()}
      <section class="panel grading-card"><h3>Grading To-Do</h3>${te(68)}<p>18 submissions left across 3 classes.</p><button class="secondary-action" data-open-role="lms">${d("clipboard-check")} Open Grading Hub</button></section>
      ${qe("teacher-tools","Teacher tools are read-only for this signed-in role.")}
      <section class="panel roster-panel">
        <div class="section-heading">
          <h3>Roster & Enrollments</h3>
          <select id="roster-filter" aria-label="Filter roster"><option>All</option><option>Active</option><option>Watch</option></select>
        </div>
        <div class="roster-table">
          ${a.map(o=>`
            <article class="roster-row editable-roster-row">
              <div><strong>${o.student}</strong><small>${o.className} • Guardian: ${o.guardian}</small></div>
              <label><span>Grade</span><input type="number" min="0" max="100" value="${o.grade}" data-roster-grade="${o.id}" /></label>
              <label><span>Attendance</span><input type="number" min="0" max="100" value="${o.attendance}" data-roster-attendance="${o.id}" /></label>
              <label><span>Status</span><select data-roster-status="${o.id}"><option ${o.status==="Active"?"selected":""}>Active</option><option ${o.status==="Watch"?"selected":""}>Watch</option></select></label>
            </article>
          `).join("")}
        </div>
      </section>
    </section>
  `}function Zn(){const e=y();return`
    <section class="dashboard-grid parent-grid">
      <div class="welcome-strip parent-welcome"><div><p class="eyebrow">${e.learnerName}'s progress</p><h2>Welcome back, ${e.guardianName}.</h2><p>${e.learnerName}'s family view belongs to ${e.name}'s private instance.</p></div><button class="primary-action" data-open-role="messages">${d("send")} Message Teacher</button></div>
      ${I("Current grade","A-","trending-up","blue")}
      ${I("Attendance","98%","calendar-days","teal")}
      ${I("Reading pace","56%","book-open","gold")}
      ${Xn()}
      <section class="panel teacher-note"><div class="teacher-avatar">MH</div><h3>Ms. Henderson</h3><p>"Leo is making great progress in Geometry. Keep practicing the new vocabulary cards at home."</p><button class="secondary-action" data-open-role="messages">${d("message-circle")} Start Chat</button></section>
      <section class="panel deadline-panel">
        <div class="section-heading"><h3>Upcoming Deadlines</h3><button class="text-button" data-open-role="platform">Calendar ${d("chevron-right")}</button></div>
        ${tt.map(t=>{const a=n.checkedDeadlines.includes(t.title);return`<label class="deadline-row ${t.urgent?"urgent":""}"><input type="checkbox" data-deadline="${t.title}" ${a?"checked":""} /><span class="custom-check">${a?d("check"):""}</span><span><strong>${t.title}</strong><small>${t.meta}</small></span></label>`}).join("")}
      </section>
      <section class="panel mobile-parent-panel">
        <div class="phone-preview">
          <div class="phone-top">${e.learnerName}</div>
          <strong>${e.name}</strong>
          <span>${n.workHoursOpen?"Teacher chat open":"Teacher chat resumes during work hours"}</span>
          <button data-open-role="messages">${d("send")} Message</button>
        </div>
        <div class="mobile-actions">
          <h3>Mobile Parent Experience</h3>
          ${js.map(t=>`<article class="mobile-action">${d("smartphone")}<div><strong>${t.title}</strong><small>${t.detail}</small></div></article>`).join("")}
        </div>
      </section>
      <section class="panel subject-panel"><h3>Subject Snapshot</h3>${[["Math",92],["Science",88],["Reading",84],["History",91]].map(([t,a])=>`<div class="subject-row"><span>${t}</span>${te(a)}<strong>${a}%</strong></div>`).join("")}</section>
    </section>
  `}function Xn(){const e=n.notificationPreferences;return`<section class="panel family-summary-panel"><div class="section-heading"><div><p class="eyebrow">Family digest</p><h3>This Week at a Glance</h3></div><span>Updated today</span></div><div class="family-summary-grid"><article><strong>4</strong><span>assignments completed</span></article><article><strong>2</strong><span>deadlines ahead</span></article><article><strong>98%</strong><span>attendance</span></article><article><strong>+6%</strong><span>reading growth</span></article></div><div class="family-summary-body"><div><h4>Teacher highlights</h4><p>Strong participation in discussion and continued progress with evidence-based writing.</p></div><div><h4>Delivery preferences</h4><span>${e.email?"Email":""}${e.sms?" • SMS":""}${e.push?" • Push":""}</span><button class="text-button" type="button" data-open-family-settings>Manage preferences</button></div><button class="secondary-action" type="button" data-send-weekly-summary>${d("send")} Send summary now</button></div></section>`}function ei(){const e=y(),t=O.filter(o=>o.type===n.conversationFilter),a=O.find(o=>o.id===n.activeConversationId)||t[0]||O[0];return`
    <section class="messages-shell">
      <aside class="conversation-list">
        <div class="segment-control">${["Parents","Groups"].map(o=>`<button class="${n.conversationFilter===o?"active":""}" data-filter="${o}">${o}</button>`).join("")}</div>
        ${t.map(o=>`<button class="conversation ${a.id===o.id?"active":""}" data-conversation="${o.id}"><div class="avatar">${he(o.name)}</div><div><strong>${o.name}</strong><span>${o.preview}</span></div>${o.unread?`<em>${o.unread}</em>`:""}</button>`).join("")}
        <div class="emergency-card ${n.emergencyOverride?"active":""}">
          ${d("alert-triangle")}
          <div><strong>Emergency Override</strong><span>${n.emergencyOverride?"Administrator enabled for urgent safety communication.":"Available only to school administrators."}</span></div>
          <button class="secondary-action" data-toggle-emergency ${ae("emergency","Emergency override is admin-only.")}>${n.emergencyOverride?"Disable":"Enable"}</button>
        </div>
      </aside>
      <section class="chat-panel">
        <header class="chat-header"><div class="avatar">${he(a.name)}</div><div><h3>${a.name}</h3><p>${a.online?"Online now":a.role}</p></div><div class="chat-tools"><button class="icon-button" aria-label="Start video call" data-start-call="${a.id}">${d("video")}</button><button class="icon-button" aria-label="More chat options" data-action="Chat options opened for ${a.name}.">${d("more-horizontal")}</button></div></header>
        ${n.activeCallName?`<div class="call-banner">${d("video")} <strong>Live call with ${n.activeCallName}</strong><button class="text-button" data-end-call>End call</button></div>`:""}
        <div class="work-hours-banner ${n.workHoursOpen||n.emergencyOverride?"open":"closed"}">
          ${d(n.workHoursOpen||n.emergencyOverride?"check":"x")}
          <div><strong>${n.emergencyOverride?"Emergency override active":n.workHoursOpen?"Communication window open":"After-hours messaging paused"}</strong><span>${e.workHours}. ${n.emergencyOverride?"Urgent administrator-approved messages can be sent now.":n.workHoursOpen?"Parents and teachers can message now.":e.afterHours}</span></div>
          <button class="text-button" data-toggle-hours>${n.workHoursOpen?"Simulate after hours":"Open work hours"}</button>
        </div>
        <div class="chat-stream">${a.messages.map(o=>`<div class="bubble ${o.from==="me"?"mine":""}"><p>${o.text}</p><span>${o.time}</span></div>`).join("")}</div>
        <form class="compose-box ${n.workHoursOpen||n.emergencyOverride?"":"locked"}" id="compose"><input id="message-draft" value="${n.draft}" placeholder="${n.workHoursOpen||n.emergencyOverride?`Message ${a.name}...`:"Messaging resumes during work hours"}" ${n.workHoursOpen||n.emergencyOverride?"":"disabled"} /><button class="primary-action" type="submit" ${n.workHoursOpen||n.emergencyOverride?"":"disabled"}>${d("send")} Send</button></form>
      </section>
    </section>
  `}function ti(){const e=y(),t=ie(),a=vn(t);return`
    <section class="dashboard-grid community-grid">
      <div class="welcome-strip community-welcome">
        <div>
          <p class="eyebrow">${e.name} community board</p>
          <h2>Approved school community chat</h2>
          <p>Parents and teachers can submit information, links, photos, or files. School administrators approve posts before they appear publicly.</p>
        </div>
        <span class="approval-badge">${t.pending.length} awaiting approval</span>
      </div>

      <section class="panel board-composer">
        <div class="section-heading"><h3>Create Post</h3><span>Parent or teacher submission</span></div>
        <form id="board-form" class="board-form">
          <label><span>Author</span><input id="board-author" value="Demo Guardian" /></label>
          <label><span>Role</span><select id="board-role"><option>Parent</option><option>Teacher</option></select></label>
          <label><span>Type</span><select id="board-type"><option>Announcement</option><option>Resource</option><option>Photo</option><option>Event</option><option>File</option></select></label>
          <label><span>Audience</span><select id="board-audience"><option>All families</option><option>Grade 4</option><option>Teachers</option><option>PTA / PTO</option></select></label>
          <label class="span-2"><span>Title</span><input id="board-title" placeholder="What should the community know?" required /></label>
          <label class="span-2"><span>Message</span><textarea id="board-body" placeholder="Post details, event information, resource description, or context for media..." required></textarea></label>
          <label class="span-2"><span>Media or attachment</span><input id="board-media" placeholder="Example: 3 photos, flyer PDF, Google Drive link, website link" /></label>
          <label class="span-2"><span>Assigned approver</span><select id="board-approver">${t.approvers.map(o=>`<option value="${o.id}" ${a.id===o.id?"selected":""}>${o.name} - ${o.title}</option>`).join("")}</select></label>
          <button class="primary-action span-2" type="submit">${d("send")} Submit for Admin Approval</button>
        </form>
      </section>

      <section class="panel approver-panel">
        <div class="section-heading"><h3>Assigned Post Approvers</h3>${d("shield-check")}</div>
        <div class="approver-list">
          ${t.approvers.map(o=>`
            <label class="approver-row ${o.active?"active":""}">
              <input type="checkbox" data-approver-toggle="${o.id}" ${o.active?"checked":""} />
              <span class="custom-check">${o.active?d("check"):""}</span>
              <span><strong>${o.name}</strong><small>${o.title}</small></span>
            </label>
          `).join("")}
        </div>
        <form id="approver-form" class="approver-form">
          <input id="new-approver-name" placeholder="Add approver name" />
          <select id="new-approver-title"><option>Principal</option><option>Assistant Principal</option><option>Dean of Students</option><option>Department Chair</option></select>
          <button class="secondary-action" type="submit">${d("plus")} Assign</button>
        </form>
      </section>

      <section class="panel approval-queue">
        <div class="section-heading"><h3>Administrator Approval Queue</h3>${d("shield-check")}</div>
        <div class="queue-list">
          ${t.pending.length?t.pending.map(o=>ai(o)).join(""):'<div class="empty-state">No posts waiting for approval.</div>'}
        </div>
      </section>

      <section class="panel published-board">
        <div class="section-heading"><h3>Published Community Board</h3><span>${t.published.length} approved</span></div>
        <div class="post-list">
          ${t.published.map(o=>si(o)).join("")}
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
        ${qe("approve-posts","Only administrators can approve or reject community posts.")}
      </section>

      <section class="panel workflow-rules-panel">
        <div class="section-heading"><h3>Approval Workflow Rules</h3>${d("shield-check")}</div>
        ${Is.map(([o,r])=>`<article class="rule-row"><strong>${o}</strong><span>${r}</span></article>`).join("")}
      </section>
    </section>
  `}function ai(e){const t=ie();return`
    <article class="board-post pending-post">
      <div class="post-header"><div class="avatar">${he(e.author)}</div><div><strong>${e.title}</strong><span>${e.author} • ${e.role} • ${e.audience}</span></div></div>
      <p>${e.body}</p>
      <div class="post-media">${d("paperclip")} ${e.media||"No media"}</div>
      <div class="assigned-approver">${d("shield-check")} Assigned to ${bn(t,e.approverId)}</div>
      <div class="approval-actions">
        <button class="secondary-action" data-reject-post="${e.id}" ${ae("approve-posts","Only administrators can reject community posts.")}>${d("x")} Reject</button>
        <button class="primary-action" data-approve-post="${e.id}" ${ae("approve-posts","Only administrators can approve community posts.")}>${d("check")} Approve</button>
      </div>
    </article>
  `}function si(e){return`
    <article class="board-post">
      <div class="post-header"><div class="avatar">${he(e.author)}</div><div><strong>${e.title}</strong><span>${e.author} • ${e.role} • ${e.time}</span></div></div>
      <p>${e.body}</p>
      <div class="post-tags"><span>${e.type}</span><span>${e.audience}</span><span>${e.media||"No media"}</span></div>
    </article>
  `}function ni(){const e=re(),t=e.schools.length+1,a=`demo-school-${Date.now()}`,o={id:a,name:`Demo Learning Academy ${t}`,category:"Public",students:240+t*18,staff:32+t,status:"Onboarding",subdomain:`demoacademy${t}`,plan:"District Core",modules:["SIS","LMS","Messaging","Family Portal"],storage:18,uptime:"Provisioning",theme:"Discovery Blue",isolation:"Dedicated tenant database",avgGrade:"89.0%",attendance:"95.0%",messages:"0 pending",studentPoints:760,studentName:"Explorer",guardianName:"Jordan",learnerName:"Riley",workHours:"Mon-Fri, 8:00 AM-4:00 PM",afterHours:"Messages are queued until office hours"};e.schools.push(o),g.domains.push({schoolId:a,domain:`${o.subdomain}.educationalsystem.fieldserviceit.com`,dns:"Awaiting DNS",ssl:"Pending",checkedAt:"Just now"}),g.billing.schools=le.flatMap(r=>r.districts).flatMap(r=>r.schools).length,n.selectedSchool=a,$("Created demo school tenant",e.name),n.toast=`${o.name} was added to ${e.name}.`,f()}function ii(){const e=`Quick Check ${T.length+1}`;za({title:e,className:n.selectedClass==="All"?"All classes":n.selectedClass,type:"Teacher-created assignment",lockDate:"Next Friday, 8:00 PM"}),ue("lms",`${e} was created in the LMS grading suite.`)}function za({title:e,className:t,type:a,lockDate:o,dueDate:r="",instructions:u="Complete the assignment and submit your work.",points:b=100,maxAttempts:m=1,allowResubmit:E=!1}){const L=`${e.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${Date.now()}`;T.unshift({id:L,schoolId:y().id,title:e,className:t,type:a,instructions:u,dueDate:r,points:b,status:"Published",allowResubmit:E,maxAttempts:m,attachments:[],rubric:"Auto rubric draft",analytics:0,lockDate:o||"Next Friday, 8:00 PM",exception:"None"}),G("FYI",`${e} published`,t,"Student inbox"),B("LMS",`${e} created`,`${a} assigned to ${t}.`),$(`Created assignment ${e}`,y().name)}function ba(e=""){const t=C.find(a=>a.id===e);n.lessonDraft=Da(t),n.lessonBuilderOpen=!0,n.role!=="teacher"?ue("teacher",t?`${t.title} opened in Lesson Studio.`:"Lesson Studio opened."):f()}function oi(e){var u,b;const t=n.lessonDraft;if(!((u=t==null?void 0:t.title)!=null&&u.trim())||!((b=t==null?void 0:t.summary)!=null&&b.trim())){h("Add a lesson title and learning objective before saving.");return}if(!t.blocks.length){h("Add at least one content, media, or quiz block.");return}if(t.blocks.find(m=>{var E;return m.type==="quiz"&&(!m.question.trim()||["Short answer","Fill in the blank"].includes(m.questionType)&&!((E=m.options[0])!=null&&E.trim())||m.questionType==="Matching"&&(m.pairs||[]).filter(L=>L.left.trim()&&L.right.trim()).length<2||!["Short answer","Fill in the blank","Matching"].includes(m.questionType)&&m.options.filter(L=>L.trim()).length<2)})){h("Each quiz needs a question and at least two answer choices.");return}const o=structuredClone(t);o.schoolId=o.schoolId||y().id,o.id||(o.id=`lesson-${o.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}-${Date.now()}`),o.status=e,o.visibility=e==="Published"&&o.visibility==="Teacher only"?"Students":o.visibility,o.updatedAt="Just now";const r=C.findIndex(m=>m.id===o.id);r>=0?C.splice(r,1,o):C.unshift(o),n.lessonDraft=null,n.lessonBuilderOpen=!1,n.activeStudentLessonId=e==="Published"?o.id:n.activeStudentLessonId,B("LMS",`${o.title} ${e==="Published"?"published":"saved"}`,`${o.blocks.length} lesson blocks for ${o.className}.`),G(e==="Published"?"FYI":"Action",`${o.title} ${e==="Published"?"is available to students":"saved as a draft"}`,o.className,"Lesson Studio"),$(`${e==="Published"?"Published":"Saved draft lesson"} ${o.title}`,o.className),h(`${o.title} ${e==="Published"?"published to students":"saved as a draft"}.`)}function ri(e){const t=C.find(a=>a.id===e);t&&(t.status=t.status==="Published"?"Draft":"Published",t.visibility=t.status==="Published"&&t.visibility==="Teacher only"?"Students":t.visibility,t.updatedAt="Just now",$(`${t.status==="Published"?"Published":"Unpublished"} lesson ${t.title}`,t.className),h(`${t.title} is now ${t.status.toLowerCase()}.`))}function li(e,t){var F;const a=C.find(S=>S.id===e&&S.status==="Published");if(!a)return;const o=a.blocks.filter(S=>S.type==="quiz"),r=(F=n.lessonProgress)==null?void 0:F[a.id],u=Math.min(...o.map(S=>Number(S.maxAttempts)||1),10);if(((r==null?void 0:r.attempts)||0)>=u){h(`Maximum attempts reached for ${a.title}.`);return}const b={};let m=0,E=0;const L=new FormData(t);o.forEach(S=>{const R=L.get(`quiz-${S.id}`);let j,Q,se=0;if(["Short answer","Fill in the blank"].includes(S.questionType))j=String(R||"").trim(),Q=j.toLowerCase()===String(S.options[0]||"").trim().toLowerCase();else if(S.questionType==="Matching"){const fe=(S.pairs||[]).filter(ne=>ne.left.trim()&&ne.right.trim());j=fe.map((ne,ye)=>String(L.get(`quiz-${S.id}-${ye}`)||"")),Q=fe.every((ne,ye)=>j[ye]===ne.right),S.partialCredit!==!1&&fe.length&&(se=fe.filter((ne,ye)=>j[ye]===ne.right).length/fe.length)}else j=R===null?-1:Number(R),Q=j===Number(S.correctAnswer);Q&&(se=1),b[S.id]={selected:j,correct:Q,credit:se},E+=Number(S.points)||0,m+=(Number(S.points)||0)*se});const z=E?Math.round(m/E*100):100;n.lessonProgress||(n.lessonProgress={}),n.lessonProgress[a.id]={completed:!0,score:z,earned:m,available:E,answers:b,attempts:((r==null?void 0:r.attempts)||0)+1,submittedAt:"Just now",certificate:z>=70},ve.unshift([P().label,`completed ${a.title} with ${z}%`,"Just now",a.className]),B("LMS",`${P().label} completed a lesson`,`${a.title}: ${z}% quiz score.`),h(`${a.title} completed with a ${z}% quiz score.`)}function ci(){const e=Je.find(t=>!n.completed.includes(t.id));if(!e){h("All missions are complete. Reset the demo or wait for the next adventure.");return}n.completed.includes(e.id)||n.completed.push(e.id),h(`${e.title} marked complete. Points updated.`)}function di(){ve.unshift(["Demo Student","opened the newest assignment","Just now",n.selectedClass==="All"?"All Classes":n.selectedClass]),h("Student activity refreshed.")}function ui(e){n.conversationFilter="Groups",n.activeConversationId="grade-team",n.draft=`Following up about ${e}'s recent activity.`,ue("messages",`Reply draft started for ${e}.`)}async function K(e,t={},a=()=>({})){let o;return n.apiMode==="live-api"?(o=await an(e,t),o.snapshot?ze(o.snapshot):ze({...o.productionReadiness?{productionReadiness:o.productionReadiness}:{},...o.tenantStates?{tenantStates:o.tenantStates}:{},...o.schoolDesigns?{schoolDesigns:o.schoolDesigns}:{},...o.lmsLessons?{lmsLessons:o.lmsLessons}:{},...o.lmsAssignments?{lmsAssignments:o.lmsAssignments}:{},...o.curriculumCourses?{curriculumCourses:o.curriculumCourses}:{}})):o=await a(),o||{}}function pi(){const e=y(),t=re(),a=t.schools.find(b=>b.id===g.sandbox.tenantId),o=new Date(Date.now()+30*864e5).toISOString().slice(0,10);if(a)return Object.assign(a,{status:"Active",expiresOn:o,students:12,staff:4,sandbox:!0}),Object.assign(g.sandbox,{status:"Reset with synthetic content",expiresOn:o,createdAt:"Just now"}),{sandbox:g.sandbox};const r=`sandbox-${Date.now()}`,u={...structuredClone(e),id:r,name:g.sandbox.name,subdomain:`sandbox-${Date.now().toString().slice(-6)}`,customDomain:"",students:12,staff:4,status:"Active",sandbox:!0,sandboxOf:e.id,expiresOn:o,loginMessage:"Welcome to a synthetic EduConnect training school."};return t.schools.push(u),ee[r]={...structuredClone(Me()),crest:"Safe Test School",voice:"Synthetic learning and training workspace"},Object.assign(g.sandbox,{status:"Active",tenantId:r,sourceSchoolId:e.id,expiresOn:o,createdAt:"Just now"}),{sandbox:g.sandbox}}function mi({name:e,startsOn:t,endsOn:a,copyLessons:o,copyGradebook:r}){const u=g.academicYears.find(L=>L.status==="Active"),b=e.replace(/[^0-9]+/g,"-").replace(/^-|-$/g,"")||`year-${Date.now()}`,m=g.academicYears.find(L=>L.id===b||L.name===e);if(m)return{year:m,idempotent:!0};u&&Object.assign(u,{status:"Archived",archivedAt:"Just now"});const E={id:b,name:e,startsOn:t,endsOn:a,status:"Active",archivedAt:""};if(g.academicYears.push(E),o){const L=y().id,z=C.filter(S=>!S.schoolId||S.schoolId===L).map(S=>({...structuredClone(S),id:`${S.id}-${b}`,schoolId:L,academicYearId:b,status:"Draft",title:`${S.title} (${e})`})),F=T.filter(S=>!S.schoolId||S.schoolId===L).map(S=>({...structuredClone(S),id:`${S.id}-${b}`,schoolId:L,academicYearId:b,status:"Draft",title:`${S.title} (${e})`}));C.push(...z),T.push(...F)}return r&&(g.gradebooks[y().id]=structuredClone(He())),{year:E,idempotent:!1}}function hi(){const e={generatedAt:new Date().toISOString(),application:"EduConnect",reviewStatus:g.securityReview.status,scope:g.securityReview.scope,tenantIsolation:g.tenantIsolation,security:{...g.security,activeSessions:[]},backups:g.backups,providers:g.providers.map(({requirements:o,...r})=>({...r,credentialFields:o.length})),note:"This package excludes credentials, personal data, student records, and session identifiers."},t=URL.createObjectURL(new Blob([JSON.stringify(e,null,2)],{type:"application/json"})),a=document.createElement("a");a.href=t,a.download=`educonnect-security-review-${new Date().toISOString().slice(0,10)}.json`,a.click(),URL.revokeObjectURL(t)}function gi(){var e;(e=document.querySelector("#landing-login-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const a=document.querySelector("#landing-identifier").value.trim(),o=document.querySelector("#landing-password").value,r=a.toLowerCase(),u=_.find(b=>[b.id,b.email,b.username,b.label].filter(Boolean).some(m=>String(m).toLowerCase()===r));if(De="",!Te()){u?ma(u):(De="We could not find that school account.",f());return}Ie=!0,f();try{const b=await Js(a,o);localStorage.setItem("educonnect-session-token",b.token),n.apiMode="live-api",await Ma("live-api").catch(()=>{}),Ie=!1,ma(b.user,"Securely signed in as")}catch(b){localStorage.removeItem("educonnect-session-token"),Ie=!1,De=b.message||"Invalid credentials.",f()}})}function vi(){var e,t,a,o,r,u,b,m,E,L,z,F,S,R,j,Q,se,fe,ne,ye,nt,it,ot,rt,lt,ct,dt,ut,pt,mt,ht,gt,vt,bt,ft,yt,$t,St,wt,kt,At,Et,Ct,Lt,Mt,qt,Pt,Dt,Tt,xt,Nt,Ot,Rt,It,jt,zt,Ft,Bt,Ut,_t,Gt,Wt,Ht,Jt,Vt,Yt,Qt,Kt,Zt,Xt,ea,ta,aa,sa,na,ia,oa,ra;document.querySelectorAll("[data-role]").forEach(s=>{s.addEventListener("click",i=>{i.preventDefault(),Le(s.dataset.role)})}),(e=document.querySelector("[data-reset-demo]"))==null||e.addEventListener("click",()=>{on(),n.currentUser=q.id,Le(q.landing)}),(t=document.querySelector("[data-sign-out]"))==null||t.addEventListener("click",un),(a=document.querySelector("#global-search"))==null||a.addEventListener("input",s=>{n.searchTerm=s.target.value,f()}),(o=document.querySelector("[data-clear-search]"))==null||o.addEventListener("click",()=>{n.searchTerm="",f()}),document.querySelectorAll("[data-open-role]").forEach(s=>{s.addEventListener("click",()=>{var i;n.searchTerm="",ue(s.dataset.openRole,`${((i=Ee.find(l=>l.id===s.dataset.openRole))==null?void 0:i.label)||"Workspace"} opened.`)})}),(r=document.querySelector("[data-role-controls]"))==null||r.addEventListener("click",()=>{ue("state-admin","Role Control Center opened."),requestAnimationFrame(()=>{var s;return(s=document.querySelector("#role-control-center"))==null?void 0:s.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelectorAll("[data-school-customization]").forEach(s=>s.addEventListener("click",()=>{ue("school-admin","School Customization opened."),requestAnimationFrame(()=>{var i;return(i=document.querySelector("#school-customization"))==null?void 0:i.scrollIntoView({behavior:"smooth",block:"start"})})})),document.querySelectorAll("[data-impersonate-profile]").forEach(s=>s.addEventListener("click",()=>cn(s.dataset.impersonateProfile))),(u=document.querySelector("[data-stop-impersonating]"))==null||u.addEventListener("click",dn),(b=document.querySelector("[data-start-tour]"))==null||b.addEventListener("click",()=>{n.tourOpen=!0,n.tourStep=0,ue($e[0].role,"Walkthrough started.")}),(m=document.querySelector("[data-tour-next]"))==null||m.addEventListener("click",()=>{if(n.tourStep>=$e.length-1){n.tourOpen=!1,h("Walkthrough complete.");return}n.tourStep+=1,ue($e[n.tourStep].role)}),(E=document.querySelector("[data-tour-prev]"))==null||E.addEventListener("click",()=>{n.tourStep!==0&&(n.tourStep-=1,ue($e[n.tourStep].role))}),document.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>h(s.dataset.action))}),(L=document.querySelector("[data-dismiss-toast]"))==null||L.addEventListener("click",()=>{n.toast="",f()}),(z=document.querySelector("[data-toggle-notifications]"))==null||z.addEventListener("click",()=>{n.notificationsOpen=!n.notificationsOpen,n.settingsOpen=!1,f()}),(F=document.querySelector("[data-toggle-settings]"))==null||F.addEventListener("click",()=>{n.settingsOpen=!n.settingsOpen,n.notificationsOpen=!1,f()}),document.querySelectorAll("[data-close-panel]").forEach(s=>{s.addEventListener("click",()=>{n.notificationsOpen=!1,n.settingsOpen=!1,f()})}),(S=document.querySelector("[data-mark-notifications]"))==null||S.addEventListener("click",()=>{X.forEach(s=>{s.read=!0}),h("All notifications marked read.")}),document.querySelectorAll("[data-dismiss-notification]").forEach(s=>{s.addEventListener("click",()=>{const i=X.findIndex(l=>l.id===s.dataset.dismissNotification);i>=0&&X.splice(i,1),f()})}),document.querySelectorAll("[data-simulate-live]").forEach(s=>{s.addEventListener("click",()=>Ta("manual"))}),(R=document.querySelector("[data-toggle-live]"))==null||R.addEventListener("change",s=>{n.liveUpdates=s.target.checked,h(n.liveUpdates?"Realtime updates enabled.":"Realtime updates paused.")}),(j=document.querySelector("#auth-provider"))==null||j.addEventListener("change",s=>{n.authProvider=s.target.value,$(`Updated auth provider to ${n.authProvider}`),h(`${n.authProvider} selected.`)}),(Q=document.querySelector("#backend-provider"))==null||Q.addEventListener("change",s=>{n.backendProvider=s.target.value,$(`Updated backend provider to ${n.backendProvider}`),h(`${n.backendProvider} selected as backend provider.`)}),document.querySelectorAll("[data-set-gateway]").forEach(s=>{s.addEventListener("click",()=>{n.gatewayMode=s.dataset.setGateway,B("Production","Gateway mode updated",`Launch gateway is now ${n.gatewayMode}.`),h(n.gatewayMode==="backend"?"Backend-ready mode enabled.":"Demo mode enabled.")})}),(se=document.querySelector("[data-provision-schema]"))==null||se.addEventListener("click",()=>{Ce.forEach(s=>{s.status="Ready"}),B("Database","Mock schema provisioned",`${Ce.length} production tables marked ready.`),$("Provisioned mock production schema"),h("Database blueprint marked ready.")}),document.querySelectorAll("[data-onboarding-task]").forEach(s=>{s.addEventListener("change",()=>{const i=we.find(l=>l.id===s.dataset.onboardingTask);i&&(i.done=s.checked,$(`${i.done?"Completed":"Reopened"} onboarding task: ${i.label}`),h("Onboarding checklist updated."))})}),(fe=document.querySelector("#onboarding-user-form"))==null||fe.addEventListener("submit",s=>{s.preventDefault();const i=document.querySelector("#onboarding-user-name").value.trim(),l=document.querySelector("#onboarding-user-role").value;if(!i)return;const p=l==="Admin"?"school-admin":l.toLowerCase();_.push({id:`${l.toLowerCase()}-${Date.now()}`,label:i,role:l,landing:p,permissions:l==="Admin"?["manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]:l==="Teacher"?["lms","teacher-tools","message","submit-post"]:l==="Parent"?["message","submit-post"]:["student-missions"]}),G("Action",`${i} invited`,y().name,"Onboarding"),$(`Invited ${l}: ${i}`),h(`${i} invited as ${l}.`)}),(ne=document.querySelector("#production-file-upload"))==null||ne.addEventListener("change",async s=>{var l;const i=Array.from(s.target.files||[]);for(const p of i)if(n.apiMode==="live-api")try{const v=await Ke(p,n.role==="community"?"Community":"LMS");H.unshift(v.file)}catch{H.unshift({id:`upload-${Date.now()}-${Math.random().toString(16).slice(2)}`,name:p.name,area:n.role==="community"?"Community":"LMS",size:`${Math.max(1,Math.round(p.size/1024))} KB`,status:"Server upload failed; metadata stored locally"})}else H.unshift({id:`upload-${Date.now()}-${Math.random().toString(16).slice(2)}`,name:p.name,area:n.role==="community"?"Community":"LMS",size:`${Math.max(1,Math.round(p.size/1024))} KB`,status:"Stored in demo metadata; ready for cloud storage"});B("Files","Upload metadata captured",`${((l=s.target.files)==null?void 0:l.length)||0} file(s) added to production upload queue.`),$("Added production upload metadata"),h("File upload metadata added.")}),(ye=document.querySelector("[data-send-delivery-test]"))==null||ye.addEventListener("click",async()=>{if(n.apiMode==="live-api")try{(await Ys("Launch test group")).records.forEach(i=>V.unshift(i))}catch{["Email","SMS","Push"].forEach(s=>{V.unshift({id:`delivery-${Date.now()}-${s}`,channel:s,audience:"Launch test group",status:"Failed over locally",detail:`${s} test could not reach operational API`})})}else["Email","SMS","Push"].forEach(s=>{V.unshift({id:`delivery-${Date.now()}-${s}`,channel:s,audience:"Launch test group",status:"Simulated",detail:`${s} test validated locally; external delivery requires a connected provider`})});G("FYI","Notification delivery test completed",y().name,"Launch Control"),$("Sent notification delivery test batch"),h("Notification delivery test completed.")}),document.querySelectorAll("[data-operations-tab]").forEach(s=>s.addEventListener("click",()=>{n.activeOperationsTab=s.dataset.operationsTab,f()})),(nt=document.querySelector("[role='tablist'][aria-label='Platform operations']"))==null||nt.addEventListener("keydown",s=>{const i=Array.from(s.currentTarget.querySelectorAll("[role='tab']")),l=i.indexOf(document.activeElement);if(l<0||!["ArrowLeft","ArrowRight","Home","End"].includes(s.key))return;s.preventDefault();const p=s.key==="Home"?0:s.key==="End"?i.length-1:s.key==="ArrowRight"?(l+1)%i.length:(l-1+i.length)%i.length;n.activeOperationsTab=i[p].dataset.operationsTab,f(),requestAnimationFrame(()=>{var v;return(v=document.querySelector(`#operations-tab-${n.activeOperationsTab}`))==null?void 0:v.focus()})}),document.querySelectorAll("[data-test-provider]").forEach(s=>s.addEventListener("click",async()=>{const i=g.providers.find(l=>l.id===s.dataset.testProvider);if(i)try{const l=await K("test-provider",{providerId:i.id},()=>(i.status=i.requirements.length?i.id==="malware"?"Fallback active":"Needs credentials":"Connected",i.lastTest=i.requirements.length?"Deployment credentials required":"Connected • Just now",{provider:i}));l.provider&&Object.assign(i,l.provider),$(`Tested ${i.name} provider readiness`),h(i.status==="Connected"?`${i.name} is connected.`:`${i.name} is ready for deployment credentials.`)}catch(l){h(l.message)}})),document.querySelectorAll("[data-test-integration]").forEach(s=>s.addEventListener("click",async()=>{const i=g.integrations.find(l=>l.id===s.dataset.testIntegration);if(i)try{const l=await K("test-integration",{integrationId:i.id,schoolId:y().id},()=>(i.status=i.requirements.length?"Needs credentials":"Ready",i.lastSync=i.requirements.length?"Credentials required":"Connection test passed • Just now",{integration:i}));l.integration&&Object.assign(i,l.integration),h(i.status==="Connected"||i.status==="Ready"?`${i.name} is ready.`:`${i.name} needs school-owned credentials.`)}catch(l){h(l.message)}})),document.querySelectorAll("[data-sync-integration]").forEach(s=>s.addEventListener("click",async()=>{const i=g.integrations.find(l=>l.id===s.dataset.syncIntegration);if(i)try{const l=await K("sync-integration",{integrationId:i.id,schoolId:y().id},()=>i.requirements.length?{blocked:!0,integration:i}:(Object.assign(i,{status:"Synced",lastSync:"Just now",records:D.length}),{integration:i}));l.integration&&Object.assign(i,l.integration),l.blocked||i.status==="Needs credentials"?h(`${i.name} sync is waiting for school-owned credentials.`):($(`Completed ${i.name} synchronization`),h(`${i.name} synchronized successfully.`))}catch(l){h(l.message)}})),document.querySelectorAll("[data-run-job]").forEach(s=>s.addEventListener("click",async()=>{const i=g.jobs.find(l=>l.id===s.dataset.runJob);if(i)try{const l=await K("run-job",{jobId:i.id},()=>i.id==="backup-copy"&&g.backups.offsiteStatus!=="Connected"?{blocked:!0,job:i}:(Object.assign(i,{status:"Completed",progress:100,lastRun:"Just now"}),{job:i}));l.job&&Object.assign(i,l.job),h(l.blocked||i.status==="Blocked"?`${i.name} is blocked until its provider is connected.`:`${i.name} completed.`)}catch(l){h(l.message)}})),(it=document.querySelector("[data-create-sandbox]"))==null||it.addEventListener("click",async()=>{try{const s=await K("create-sandbox",{sourceSchoolId:y().id,name:g.sandbox.name,expiresInDays:30},pi);s.sandbox&&Object.assign(g.sandbox,s.sandbox),$("Created or reset synthetic sandbox school",re().name),h(`${g.sandbox.name} is ready with synthetic data only.`)}catch(s){h(s.message)}}),document.querySelectorAll("[data-pilot-checkpoint]").forEach(s=>s.addEventListener("change",async()=>{const i=s.dataset.pilotCheckpoint;g.pilot.completed=s.checked?[...new Set([...g.pilot.completed,i])]:g.pilot.completed.filter(l=>l!==i),g.pilot.status=g.pilot.completed.length===g.pilot.checkpoints.length?"Ready for outcome review":g.pilot.completed.length?"In progress":"Planning";try{await K("update-pilot",{checkpoint:i,completed:s.checked})}catch(l){h(l.message);return}h("Pilot readiness checkpoint updated.")})),(ot=document.querySelector("[data-export-security-review]"))==null||ot.addEventListener("click",async()=>{try{await K("generate-security-review",{},()=>{Object.assign(g.securityReview,{status:"Ready for independent review",lastExport:"Just now"})}),g.securityReview.lastExport="Just now",hi(),$("Generated privacy-safe independent security review package"),h("Security review package generated without credentials or student data.")}catch(s){h(s.message)}}),(rt=document.querySelector("[data-run-launch-check]"))==null||rt.addEventListener("click",()=>{const s=g.providers.filter(l=>l.status!=="Connected"&&l.id!=="malware").length,i=g.pilot.checkpoints.length-g.pilot.completed.length;h(`${s} provider setups and ${i} pilot checkpoints still need authorized external input.`)}),document.querySelectorAll("[data-refresh-analytics]").forEach(s=>s.addEventListener("click",async()=>{try{const i=await K("refresh-analytics",{schoolId:y().id},()=>{const l=g.analytics.privacyThreshold,p=y().students;return g.analytics.metrics=[{label:"Active learners",value:p,cohortSize:p,status:p<l?"Suppressed":"Published"},{label:"Assignment completion",value:`${Math.round(ce.filter(v=>v.status==="Submitted"||v.status==="Returned").length/Math.max(1,D.length)*100)}%`,cohortSize:D.length,status:D.length<l?"Suppressed":"Published"},{label:"Interventions on track",value:`${Math.round(g.interventions.filter(v=>v.status==="Monitoring").length/Math.max(1,g.interventions.length)*100)}%`,cohortSize:g.interventions.length,status:g.interventions.length<l?"Suppressed":"Published"}],g.analytics.lastRefresh="Just now",g.analytics.suppressedGroups=g.analytics.metrics.filter(v=>v.status==="Suppressed").length,{analytics:g.analytics}});i.analytics&&Object.assign(g.analytics,i.analytics),$("Refreshed privacy-safe aggregate analytics"),h("Analytics refreshed; small cohorts remain hidden.")}catch(i){h(i.message)}})),(lt=document.querySelector("[data-preview-rollover]"))==null||lt.addEventListener("click",()=>{var i;const s=(i=document.querySelector("#rollover-name"))==null?void 0:i.value.trim();n.academicRolloverPreview=`${oe.length} course shells, ${C.length} lessons, and ${T.length} assignments can be copied into ${s||"the new year"}; submissions and grades will stay archived.`,h("Academic-year rollover preview is ready.")}),(ct=document.querySelector("#academic-rollover-form"))==null||ct.addEventListener("submit",async s=>{s.preventDefault();const i={schoolId:y().id,name:document.querySelector("#rollover-name").value.trim(),startsOn:document.querySelector("#rollover-start").value,endsOn:document.querySelector("#rollover-end").value,copyLessons:document.querySelector("#rollover-copy-lessons").checked,copyGradebook:document.querySelector("#rollover-copy-gradebook").checked};try{const l=await K("academic-year-rollover",i,()=>mi(i));n.academicRolloverPreview=null,$(`Completed academic-year rollover to ${i.name}`,y().name),h(l.idempotent?`${i.name} already exists; no records were duplicated.`:`${i.name} was created and prior student work remains archived.`)}catch(l){h(l.message)}}),(dt=document.querySelector("#intervention-form"))==null||dt.addEventListener("submit",async s=>{s.preventDefault();const i=document.querySelector("#intervention-student").value,l=D.find(v=>v.id===i),p={id:`intervention-${Date.now()}`,schoolId:y().id,studentId:i,student:(l==null?void 0:l.student)||"Learner",area:document.querySelector("#intervention-area").value.trim(),tier:document.querySelector("#intervention-tier").value,owner:document.querySelector("#intervention-owner").value.trim(),nextReview:document.querySelector("#intervention-review").value,notes:document.querySelector("#intervention-notes").value.trim(),status:"Monitoring"};try{const v=await K("create-intervention",{intervention:p},()=>(g.interventions.unshift(p),{intervention:p}));v.intervention&&!g.interventions.some(w=>w.id===v.intervention.id)&&g.interventions.unshift(v.intervention),$("Created a student intervention plan",y().name),h(`Support plan created for ${p.student}.`)}catch(v){h(v.message)}}),document.querySelectorAll("[data-complete-intervention]").forEach(s=>s.addEventListener("click",async()=>{const i=g.interventions.find(l=>l.id===s.dataset.completeIntervention);if(i)try{const l=await K("complete-intervention",{interventionId:i.id},()=>(Object.assign(i,{status:"Completed",completedAt:"Just now"}),{intervention:i}));l.intervention&&Object.assign(i,l.intervention),$("Completed a student intervention plan",y().name),h("Support plan marked complete.")}catch(l){h(l.message)}})),(ut=document.querySelector("[data-run-isolation-test]"))==null||ut.addEventListener("click",()=>{g.tenantIsolation.lastTest="Passed • Just now",$("Passed cross-tenant isolation test",xe().name,P().label),h("Tenant isolation test passed: no cross-school records were exposed.")}),(pt=document.querySelector("[data-optimize-storage]"))==null||pt.addEventListener("click",()=>{g.storage.usedGb=Math.max(0,Number((g.storage.usedGb-1.2).toFixed(1))),$("Optimized cloud media storage"),h("Media optimization completed and 1.2 GB was reclaimed.")}),document.querySelectorAll("[data-verify-domain]").forEach(s=>s.addEventListener("click",async()=>{const i=g.domains.find(l=>l.schoolId===s.dataset.verifyDomain);if(i){if(n.apiMode==="live-api")try{Object.assign(i,(await Zs(i.schoolId)).domain)}catch(l){h(l.message);return}else Object.assign(i,{dns:"Verified",ssl:"Active",checkedAt:"Just now"});$(`Verified custom domain ${i.domain}`),h(`${i.domain} DNS and SSL are verified.`)}})),document.querySelectorAll("[data-security-setting]").forEach(s=>s.addEventListener("change",async()=>{if(g.security[s.dataset.securitySetting]=s.checked,n.apiMode==="live-api"&&s.dataset.securitySetting==="mfaRequired")try{await en(s.checked)}catch(i){h(i.message);return}$(`Updated security policy ${s.dataset.securitySetting}`),h("Security policy updated.")})),(mt=document.querySelector("[data-session-timeout]"))==null||mt.addEventListener("change",s=>{g.security.sessionTimeoutMinutes=Number(s.target.value),h("Session timeout policy updated.")}),document.querySelectorAll("[data-revoke-session]").forEach(s=>s.addEventListener("click",()=>{g.security.activeSessions=g.security.activeSessions.filter(i=>i.id!==s.dataset.revokeSession),$("Revoked an active account session"),h("Session revoked.")})),(ht=document.querySelector("[data-create-backup]"))==null||ht.addEventListener("click",async()=>{if(n.apiMode==="live-api")try{await Qs()}catch(s){h(s.message);return}g.backups.lastBackup="Just now",$("Created encrypted platform backup"),h("Encrypted backup created successfully.")}),(gt=document.querySelector("[data-test-restore]"))==null||gt.addEventListener("click",async()=>{if(n.apiMode==="live-api")try{await Ks()}catch(s){h(s.message);return}g.backups.lastRestoreTest="Passed • Just now",$("Completed backup restore drill"),h("Restore drill passed and the backup snapshot was valid.")}),(vt=document.querySelector("[data-run-accessibility-audit]"))==null||vt.addEventListener("click",()=>{g.accessibility.score=100,g.accessibility.issues=0,g.accessibility.lastAudit="Just now",h("WCAG 2.2 AA accessibility audit passed.")}),(bt=document.querySelector("#notification-template-form"))==null||bt.addEventListener("submit",s=>{s.preventDefault();const i=document.querySelector("#notification-template-name").value.trim(),l=document.querySelector("#notification-template-channel").value;g.notifications.templates.push({id:`template-${Date.now()}`,name:i,channels:[l],status:"Active"}),$(`Created notification template ${i}`),h(`${i} template created.`)}),document.querySelectorAll("[data-send-template]").forEach(s=>s.addEventListener("click",async()=>{const i=g.notifications.templates.find(l=>l.id===s.dataset.sendTemplate);if(i){if(n.apiMode==="live-api")try{await ua({channel:i.channels[0],audience:"Test recipients",template:i.name})}catch(l){h(l.message);return}V.unshift({id:`template-delivery-${Date.now()}`,channel:i.channels.join(" + "),audience:"Test recipients",status:n.apiMode==="live-api"?"Scheduled":"Simulated",detail:i.name}),h(`${i.name} test queued.`)}})),(ft=document.querySelector("[data-run-monitors]"))==null||ft.addEventListener("click",async()=>{var s;if(n.apiMode==="live-api")try{const i=await tn();(s=i.monitors)!=null&&s.length&&g.monitors.splice(0,g.monitors.length,...i.monitors)}catch(i){h(i.message);return}else g.monitors.forEach((i,l)=>Object.assign(i,{status:"Operational",latency:82+l*31,checkedAt:"Just now"}));B("Monitoring","Production health checks passed","Website, API, storage, and notifications are operational."),h("All production service checks passed.")}),(yt=document.querySelector("[data-install-app]"))==null||yt.addEventListener("click",async()=>{Re&&(await Re.prompt(),await Re.userChoice,Re=null),n.pwaInstalled=!0,h("EduConnect is ready for offline use on this device.")}),($t=document.querySelector("#enrollment-import-form"))==null||$t.addEventListener("submit",async s=>{var w;s.preventDefault();const i=(w=document.querySelector("#enrollment-file").files)==null?void 0:w[0];if(!i)return;const l=await i.text(),p=i.name.toLowerCase().endsWith(".json")?JSON.parse(l).length||0:Math.max(0,l.split(/\r?\n/).filter(Boolean).length-1);let v={id:`import-${Date.now()}`,schoolId:y().id,file:i.name,rows:p,accepted:p,needsReview:0,status:"Completed",createdAt:"Just now",recordType:document.querySelector("#enrollment-role").value};if(n.apiMode==="live-api")try{v=(await Xs(y().id,i.name,Array.from({length:p},(x,J)=>({row:J+1})))).import}catch(x){h(x.message);return}g.enrollmentImports.unshift(v),$(`Imported ${p} enrollment records`,y().name),h(`${p} enrollment records validated and imported.`)}),(St=document.querySelector("[data-export-roster]"))==null||St.addEventListener("click",()=>{const s=["student,guardian,class,grade,attendance,status",...D.map(p=>[p.student,p.guardian,p.className,p.grade,p.attendance,p.status].map(v=>`"${String(v).replaceAll('"','""')}"`).join(","))].join(`
`),i=URL.createObjectURL(new Blob([s],{type:"text/csv"})),l=document.createElement("a");l.href=i,l.download=`${y().subdomain}-oneroster.csv`,l.click(),URL.revokeObjectURL(i),$("Exported OneRoster CSV"),h("OneRoster CSV exported.")}),(wt=document.querySelector("[data-send-enrollment-invites]"))==null||wt.addEventListener("click",()=>{G("FYI","Enrollment invitations sent",y().name,"Email + SMS"),h("Account invitations queued for enrolled families and staff.")}),document.querySelectorAll("[data-gradebook-weight]").forEach(s=>s.addEventListener("change",()=>{He().categories[Number(s.dataset.gradebookWeight)].weight=Number(s.value),h("Gradebook category weights updated.")})),(kt=document.querySelector("[data-generate-report-cards]"))==null||kt.addEventListener("click",()=>{$("Generated standards-based report cards"),h("Standards-based report cards generated for the active classes.")}),(At=document.querySelector("[data-export-sis]"))==null||At.addEventListener("click",()=>{He().sisExport.lastExport="Just now",$("Exported grades to SIS using OneRoster CSV"),h("Gradebook exported to the SIS.")}),(Et=document.querySelector("[data-open-family-settings]"))==null||Et.addEventListener("click",()=>{n.settingsOpen=!0,f()}),(Ct=document.querySelector("[data-send-weekly-summary]"))==null||Ct.addEventListener("click",async()=>{if(n.apiMode==="live-api")try{await ua({channel:"Email",audience:P().label,template:"Weekly family progress summary"})}catch(s){h(s.message);return}V.unshift({id:`weekly-${Date.now()}`,channel:"Email",audience:P().label,status:n.apiMode==="live-api"?"Scheduled":"Simulated",detail:"Weekly family progress summary"}),h("Weekly family summary queued.")}),document.querySelectorAll("[data-security-check]").forEach(s=>{s.addEventListener("change",()=>{const i=ke.find(l=>l.id===s.dataset.securityCheck);i&&(i.done=s.checked,i.status=i.done?"Configured":"Needs review",$(`Updated security checklist: ${i.label}`),h("Security checklist updated."))})}),document.querySelectorAll("[data-toggle-setting]").forEach(s=>{s.addEventListener("change",()=>{n[s.dataset.toggleSetting]=s.checked,f()})}),document.querySelectorAll("[data-setting-select]").forEach(s=>s.addEventListener("change",()=>{n[s.dataset.settingSelect]=s.value,f()})),document.querySelectorAll("[data-notification-preference]").forEach(s=>s.addEventListener("change",()=>{n.notificationPreferences[s.dataset.notificationPreference]=s.checked,f()})),(Lt=document.querySelector("[data-notification-days]"))==null||Lt.addEventListener("change",s=>{n.notificationPreferences.dueDays=Number(s.target.value),f()}),(Mt=document.querySelector("[data-send-preference-test]"))==null||Mt.addEventListener("click",()=>{G("FYI","Your notification preferences are working",P().label,"Preference test"),h("Test notification added to your notification tray.")}),(qt=document.querySelector("[data-export-demo]"))==null||qt.addEventListener("click",async()=>{const s=JSON.stringify(La(),null,2),i=new Blob([s],{type:"application/json"}),l=URL.createObjectURL(i),p=document.createElement("a");p.href=l,p.download="educonnect-demo-state.json",p.click(),URL.revokeObjectURL(l),$("Exported demo state JSON");try{await navigator.clipboard.writeText(s),h("Demo state exported and copied to clipboard.")}catch{h("Demo state exported as a JSON file.")}}),(Pt=document.querySelector("#import-demo-state"))==null||Pt.addEventListener("change",async s=>{var l;const i=(l=s.target.files)==null?void 0:l[0];if(i)try{const p=JSON.parse(await i.text()),v=pn(p);if(v.length){h(`Import failed: ${v.join(" ")}`);return}ze(p),$("Imported demo state JSON"),h("Demo state imported.")}catch{h("That JSON file could not be imported.")}}),(Dt=document.querySelector("[data-add-school]"))==null||Dt.addEventListener("click",ni),(Tt=document.querySelector("[data-create-assignment]"))==null||Tt.addEventListener("click",ii),(xt=document.querySelector("#assignment-form"))==null||xt.addEventListener("submit",s=>{s.preventDefault();const i=document.querySelector("#assignment-title").value.trim();if(!i)return;const l=document.querySelector("#assignment-class").value;za({title:i,className:l,type:document.querySelector("#assignment-type").value,lockDate:document.querySelector("#assignment-due").value,dueDate:document.querySelector("#assignment-due").value,instructions:document.querySelector("#assignment-instructions").value.trim(),points:Number(document.querySelector("#assignment-points").value),maxAttempts:Number(document.querySelector("#assignment-attempts").value),allowResubmit:document.querySelector("#assignment-resubmit").checked}),h(`${i} added to ${l}.`)}),document.querySelectorAll("[data-new-lesson]").forEach(s=>s.addEventListener("click",()=>ba())),(Nt=document.querySelector("[data-close-lesson-builder]"))==null||Nt.addEventListener("click",()=>{n.lessonBuilderOpen=!1,n.lessonDraft=null,f()}),(Ot=document.querySelector("#lesson-filter"))==null||Ot.addEventListener("change",s=>{n.lessonFilter=s.target.value,f()}),document.querySelectorAll("[data-edit-lesson]").forEach(s=>s.addEventListener("click",()=>ba(s.dataset.editLesson))),document.querySelectorAll("[data-toggle-lesson]").forEach(s=>s.addEventListener("click",()=>ri(s.dataset.toggleLesson))),document.querySelectorAll("[data-preview-lesson]").forEach(s=>s.addEventListener("click",()=>{n.lessonPreviewId=s.dataset.previewLesson,f(),requestAnimationFrame(()=>{var i;return(i=document.querySelector(".lesson-preview-panel"))==null?void 0:i.scrollIntoView({behavior:"smooth",block:"center"})})})),(Rt=document.querySelector("[data-close-lesson-preview]"))==null||Rt.addEventListener("click",()=>{n.lessonPreviewId="",f()}),document.querySelectorAll("[data-lesson-field]").forEach(s=>{s.addEventListener("change",()=>{if(!n.lessonDraft)return;const i=s.dataset.lessonField;n.lessonDraft[i]=s.type==="checkbox"?s.checked:s.type==="number"?Number(s.value):s.value}),s.addEventListener("input",()=>{!n.lessonDraft||["checkbox","number"].includes(s.type)||(n.lessonDraft[s.dataset.lessonField]=s.value)})}),document.querySelectorAll("[data-block-field]").forEach(s=>{const i=()=>{var w,x;const[l,p]=s.dataset.blockField.split(":"),v=(w=n.lessonDraft)==null?void 0:w.blocks.find(J=>J.id===l);v&&(v[p]=s.type==="checkbox"?s.checked:s.type==="number"?Number(s.value):s.value,p==="questionType"&&s.value==="True or false"&&(v.options=["True","False","",""],v.correctAnswer=0,f()),p==="questionType"&&s.value==="Short answer"&&(v.options=["","","",""],v.correctAnswer=0,f()),p==="questionType"&&s.value==="Fill in the blank"&&(v.options=["","","",""],v.correctAnswer=0,f()),p==="questionType"&&s.value==="Matching"&&(v.pairs=(x=v.pairs)!=null&&x.length?v.pairs:[{left:"",right:""},{left:"",right:""}],f()))};s.addEventListener("change",i),s.addEventListener("input",i)}),document.querySelectorAll("[data-quiz-option]").forEach(s=>s.addEventListener("input",()=>{var v;const[i,l]=s.dataset.quizOption.split(":"),p=(v=n.lessonDraft)==null?void 0:v.blocks.find(w=>w.id===i);p&&(p.options[Number(l)]=s.value)})),document.querySelectorAll("[data-match-pair]").forEach(s=>s.addEventListener("input",()=>{var w,x;const[i,l,p]=s.dataset.matchPair.split(":"),v=(w=n.lessonDraft)==null?void 0:w.blocks.find(J=>J.id===i);(x=v==null?void 0:v.pairs)!=null&&x[Number(l)]&&(v.pairs[Number(l)][p]=s.value)})),(It=document.querySelector("[data-add-bank-question]"))==null||It.addEventListener("click",()=>{const s=Ne.find(i=>{var l;return i.id===((l=document.querySelector("#question-bank-select"))==null?void 0:l.value)});!s||!n.lessonDraft||(n.lessonDraft.blocks.push({...structuredClone(s),id:`block-bank-${Date.now()}`,type:"quiz",title:`${s.subject} check`,required:!0,timeLimit:0,maxAttempts:2,randomize:!1,showAnswers:!0,pairs:s.pairs||[{left:"",right:""},{left:"",right:""}]}),f())}),document.querySelectorAll("[data-lesson-media-upload]").forEach(s=>s.addEventListener("change",async()=>{var p,v;const i=(p=s.files)==null?void 0:p[0],l=(v=n.lessonDraft)==null?void 0:v.blocks.find(w=>w.id===s.dataset.lessonMediaUpload);if(!(!i||!l)){if(i.size>5*1024*1024){h("Lesson media must be 5 MB or smaller.");return}try{let w;if(n.apiMode==="live-api")w=(await Ke(i,"Lesson Media")).file;else{const x=i.size<=768e3?await new Promise((J,Ue)=>{const de=new FileReader;de.onload=()=>J(String(de.result)),de.onerror=()=>Ue(de.error),de.readAsDataURL(i)}):"";w={id:`lesson-file-${Date.now()}`,name:i.name,type:i.type,size:`${Math.max(1,Math.round(i.size/1024))} KB`,status:x?"Ready":"Metadata saved; upload on publish",dataUrl:x}}l.file=w,l.mediaType=i.type.startsWith("image/")?"Image":i.type.startsWith("video/")?"Video":i.type.startsWith("audio/")?"Audio":"Document",H.some(x=>x.id===w.id)||H.unshift(w),h(`${i.name} attached to the lesson.`)}catch{h(`Could not upload ${i.name}.`)}}})),document.querySelectorAll("[data-correct-answer]").forEach(s=>s.addEventListener("change",()=>{var l;const i=(l=n.lessonDraft)==null?void 0:l.blocks.find(p=>p.id===s.dataset.correctAnswer);i&&(i.correctAnswer=Number(s.value))})),document.querySelectorAll("[data-add-lesson-block]").forEach(s=>s.addEventListener("click",()=>{var i;(i=n.lessonDraft)==null||i.blocks.push(Pa(s.dataset.addLessonBlock,n.lessonDraft.blocks.length)),f()})),document.querySelectorAll("[data-remove-lesson-block]").forEach(s=>s.addEventListener("click",()=>{if(!n.lessonDraft||n.lessonDraft.blocks.length===1){h("A lesson must keep at least one block.");return}n.lessonDraft.blocks=n.lessonDraft.blocks.filter(i=>i.id!==s.dataset.removeLessonBlock),f()})),document.querySelectorAll("[data-move-lesson-block]").forEach(s=>s.addEventListener("click",()=>{if(!n.lessonDraft)return;const[i,l]=s.dataset.moveLessonBlock.split(":"),p=n.lessonDraft.blocks.findIndex(w=>w.id===i),v=l==="up"?p-1:p+1;p<0||v<0||v>=n.lessonDraft.blocks.length||([n.lessonDraft.blocks[p],n.lessonDraft.blocks[v]]=[n.lessonDraft.blocks[v],n.lessonDraft.blocks[p]],f())})),(jt=document.querySelector("#lesson-builder-form"))==null||jt.addEventListener("submit",s=>{var i;s.preventDefault(),oi(((i=s.submitter)==null?void 0:i.dataset.lessonStatus)||"Draft")}),document.querySelectorAll("[data-open-student-lesson]").forEach(s=>s.addEventListener("click",()=>{n.activeStudentLessonId=s.dataset.openStudentLesson,f()})),(zt=document.querySelector("[data-submit-lesson]"))==null||zt.addEventListener("submit",s=>{s.preventDefault(),li(s.currentTarget.dataset.submitLesson,s.currentTarget)}),document.querySelectorAll("[data-complete-lesson-block]").forEach(s=>s.addEventListener("click",()=>{var v;const[i,l]=s.dataset.completeLessonBlock.split(":");n.lessonProgress||(n.lessonProgress={});const p=(v=n.lessonProgress)[i]||(v[i]={completed:!1,score:0,earned:0,available:0,answers:{},attempts:0,completedBlocks:[]});p.completedBlocks=[...new Set([...p.completedBlocks||[],l])],h("Lesson progress saved. You can resume here later.")})),document.querySelectorAll("[data-bookmark-lesson]").forEach(s=>s.addEventListener("click",()=>{const i=s.dataset.bookmarkLesson;n.bookmarkedLessons||(n.bookmarkedLessons=[]),n.bookmarkedLessons=n.bookmarkedLessons.includes(i)?n.bookmarkedLessons.filter(l=>l!==i):[...n.bookmarkedLessons,i],h(n.bookmarkedLessons.includes(i)?"Lesson bookmarked.":"Bookmark removed.")})),document.querySelectorAll("[data-save-lesson-note]").forEach(s=>s.addEventListener("click",()=>{var l;const i=s.dataset.saveLessonNote;n.studentNotes||(n.studentNotes={}),n.studentNotes[i]=((l=document.querySelector(`[data-lesson-note="${i}"]`))==null?void 0:l.value.trim())||"",h("Private lesson notes saved.")})),document.querySelectorAll("[data-read-lesson]").forEach(s=>s.addEventListener("click",()=>{const i=C.find(l=>l.id===s.dataset.readLesson);if(!i||!("speechSynthesis"in window)){h("Read aloud is not available in this browser.");return}speechSynthesis.cancel(),speechSynthesis.speak(new SpeechSynthesisUtterance([i.title,i.summary,...i.blocks.filter(l=>l.type==="text").map(l=>`${l.title}. ${l.body}`)].join(". "))),n.toast="Reading lesson aloud.",f()})),document.querySelectorAll("[data-download-certificate]").forEach(s=>s.addEventListener("click",()=>{var x;const i=C.find(J=>J.id===s.dataset.downloadCertificate),l=(x=n.lessonProgress)==null?void 0:x[s.dataset.downloadCertificate];if(!i||!(l!=null&&l.certificate))return;const p=new Blob([`EduConnect Certificate of Completion

${P().label}
${i.title}
Score: ${l.score}%
${y().name}`],{type:"text/plain"}),v=URL.createObjectURL(p),w=document.createElement("a");w.href=v,w.download=`${i.title.replace(/[^a-z0-9]+/gi,"-").toLowerCase()}-certificate.txt`,w.click(),URL.revokeObjectURL(v),$(`Downloaded certificate for ${i.title}`,P().label),h("Certificate downloaded.")})),document.querySelectorAll("[data-open-assignment]").forEach(s=>s.addEventListener("click",()=>{n.activeAssignmentId=s.dataset.openAssignment,f()})),(Ft=document.querySelector("[data-assignment-work]"))==null||Ft.addEventListener("submit",s=>{var v,w;s.preventDefault();const i=T.find(x=>x.id===s.currentTarget.dataset.assignmentWork),l=Se(i==null?void 0:i.id,!0);if(!i||!l)return;const p=((v=s.submitter)==null?void 0:v.dataset.workStatus)||"Draft";if(p==="Submitted"&&l.status==="Returned"&&l.attempt>=(i.maxAttempts||1)){h("Maximum assignment attempts reached.");return}if(l.response=((w=document.querySelector("#student-assignment-response"))==null?void 0:w.value.trim())||"",p==="Submitted"&&!l.response&&!l.attachments.length){h("Add a written response or attachment before submitting.");return}p==="Submitted"&&l.status==="Returned"&&(l.attempt+=1),l.status=p,l.submittedAt=p==="Submitted"?"Just now":l.submittedAt,p==="Submitted"&&(G("Action",`${l.student} submitted ${i.title}`,i.className,"Teacher inbox"),B("LMS",`${i.title} submitted`,`${l.student} sent attempt ${l.attempt}.`)),$(`${p==="Submitted"?"Submitted":"Saved draft for"} ${i.title}`,l.student),h(`${i.title} ${p==="Submitted"?"submitted":"draft saved"}.`)}),(Bt=document.querySelector("[data-assignment-file]"))==null||Bt.addEventListener("change",async s=>{const i=s.target.dataset.assignmentFile,l=Se(i,!0);for(const p of Array.from(s.target.files||[]))if(!(p.size>5*1024*1024))try{const v=n.apiMode==="live-api"?(await Ke(p,"Assignment Submission")).file:{id:`assignment-file-${Date.now()}-${Math.random().toString(16).slice(2)}`,name:p.name,type:p.type,size:`${Math.max(1,Math.round(p.size/1024))} KB`,status:"Ready"};l.attachments.push(v),H.some(w=>w.id===v.id)||H.unshift(v)}catch{}h("Assignment attachments updated.")}),document.querySelectorAll("[data-remove-assignment-file]").forEach(s=>s.addEventListener("click",()=>{const[i,l]=s.dataset.removeAssignmentFile.split(":"),p=Se(i);p&&(p.attachments=p.attachments.filter(v=>v.id!==l)),h("Attachment removed.")})),document.querySelectorAll("[data-return-submission]").forEach(s=>s.addEventListener("submit",i=>{i.preventDefault();const l=ce.find(w=>w.id===s.dataset.returnSubmission),p=T.find(w=>w.id===(l==null?void 0:l.assignmentId));if(!l||!p)return;l.score=Number(s.querySelector("[data-grade-score]").value),l.feedback=s.querySelector("[data-grade-feedback]").value.trim(),l.status="Returned",l.returnedAt="Just now";let v=U.find(w=>w.assignment===p.title&&w.student===l.student);v?Object.assign(v,{status:"Reviewed",score:l.score,comment:l.feedback}):(v={id:`grade-${Date.now()}`,student:l.student,assignment:p.title,status:"Reviewed",score:l.score,rubric:[["Completion",4],["Accuracy",4],["Explanation",4]],comment:l.feedback},U.unshift(v)),G("FYI",`${p.title} was graded`,l.student,"Student inbox"),$(`Returned graded assignment ${p.title}`,l.student),h(`${p.title} returned to ${l.student}.`)})),(Ut=document.querySelector("#course-create-form"))==null||Ut.addEventListener("submit",s=>{s.preventDefault();const i=document.querySelector("#course-title").value.trim();oe.push({id:`course-${Date.now()}`,title:i,subject:document.querySelector("#course-subject").value,grade:document.querySelector("#course-grade").value.trim(),className:Z[0].name,standards:[],units:[]}),$(`Created curriculum course ${i}`),h(`${i} added to the curriculum map.`)}),document.querySelectorAll("[data-add-unit]").forEach(s=>s.addEventListener("submit",i=>{i.preventDefault();const l=oe.find(v=>v.id===s.dataset.addUnit),p=s.querySelector("input");!l||!p.value.trim()||(l.units.push({id:`unit-${Date.now()}`,title:p.value.trim(),description:"New curriculum unit",lessonIds:[],assignmentIds:[]}),h(`${p.value.trim()} added to ${l.title}.`))})),document.querySelectorAll("[data-link-curriculum]").forEach(s=>s.addEventListener("submit",i=>{i.preventDefault();const[l,p]=s.dataset.linkCurriculum.split(":"),v=oe.find(de=>de.id===l),w=v==null?void 0:v.units.find(de=>de.id===p),[x,J]=s.querySelector("select").value.split(":");if(!w)return;const Ue=x==="lesson"?w.lessonIds:w.assignmentIds;Ue.includes(J)||Ue.push(J),$(`Linked ${x} to ${v.title}: ${w.title}`),h(`Content linked to ${w.title}.`)})),(_t=document.querySelector("[data-send-class-reminder]"))==null||_t.addEventListener("click",()=>{const s=["email","sms","push"].filter(i=>n.notificationPreferences[i]);(s.length?s:["dashboard"]).forEach(i=>V.unshift({id:`reminder-${Date.now()}-${i}`,channel:i.toUpperCase(),audience:n.selectedClass==="All"?"All active classes":n.selectedClass,status:"Delivered",detail:`Assignment reminder sent by ${P().label}`})),G("FYI","Class assignment reminder sent",n.selectedClass==="All"?"All active classes":n.selectedClass,s.join(" + ")||"Dashboard"),$("Sent class assignment reminder"),h("Class reminder sent using the selected notification channels.")}),(Gt=document.querySelector("[data-continue-adventure]"))==null||Gt.addEventListener("click",ci),(Wt=document.querySelector("[data-refresh-activity]"))==null||Wt.addEventListener("click",di),document.querySelectorAll("[data-reply-student]").forEach(s=>{s.addEventListener("click",()=>ui(s.dataset.replyStudent))}),document.querySelectorAll("[data-guardrail]").forEach(s=>{s.addEventListener("change",()=>{n.guardrails[s.dataset.guardrail]=s.checked,$(`Updated guardrail ${s.dataset.guardrail}`),h("Guardrail setting updated.")})}),document.querySelectorAll("[data-profile-permission]").forEach(s=>{s.addEventListener("change",()=>{const[i,l]=s.dataset.profilePermission.split(":"),p=_.find(v=>v.id===i);p&&(p.permissions=s.checked?[...new Set([...p.permissions,l])]:p.permissions.filter(v=>v!==l),$(`Updated ${p.role} permission: ${l}`),h(`${p.role} permissions updated.`))})}),document.querySelectorAll("[data-submission]").forEach(s=>{s.addEventListener("click",()=>{n.selectedSubmissionId=s.dataset.submission,f()})}),document.querySelectorAll("[data-save-submission]").forEach(s=>{s.addEventListener("click",()=>{const i=U.find(l=>l.id===s.dataset.saveSubmission);i&&(i.comment=document.querySelector("#submission-comment").value.trim(),i.status="Reviewed",$(`Saved gradebook comment for ${i.student}`,i.assignment),h("Gradebook comment saved."))})}),document.querySelectorAll("[data-complete]").forEach(s=>{s.addEventListener("click",()=>{const i=Number(s.dataset.complete);n.completed.includes(i)||n.completed.push(i);const l=Je.find(p=>p.id===i);h(`${(l==null?void 0:l.title)||"Mission"} marked complete.`)})}),(Ht=document.querySelector("#class-filter"))==null||Ht.addEventListener("change",s=>{n.selectedClass=s.target.value,f()}),(Jt=document.querySelector("#roster-filter"))==null||Jt.addEventListener("change",s=>{n.rosterFilter=s.target.value,f()}),document.querySelectorAll("[data-roster-grade], [data-roster-attendance], [data-roster-status]").forEach(s=>{s.addEventListener("change",()=>{const i=s.dataset.rosterGrade||s.dataset.rosterAttendance||s.dataset.rosterStatus,l=D.find(p=>p.id===i);l&&(s.dataset.rosterGrade&&(l.grade=Math.max(0,Math.min(100,Number(s.value)||0))),s.dataset.rosterAttendance&&(l.attendance=Math.max(0,Math.min(100,Number(s.value)||0))),s.dataset.rosterStatus&&(l.status=s.value),B("Roster",`${l.student} record updated`,`Grade ${l.grade}%, attendance ${l.attendance}%, status ${l.status}.`),$(`Updated roster record for ${l.student}`,l.className),h(`${l.student}'s roster record updated.`))})}),document.querySelectorAll("[data-lms-account]").forEach(s=>{s.addEventListener("click",()=>{n.activeAccount=s.dataset.lmsAccount,f()})}),(Vt=document.querySelector("[data-build-offline]"))==null||Vt.addEventListener("click",()=>{n.offlinePackReady=!0,Oe.forEach(s=>{s.status=s.status.replace("Waiting for pack","Queued for upload")}),h("Offline pack built and sync queue prepared.")}),(Yt=document.querySelector("#state-filter"))==null||Yt.addEventListener("change",s=>{n.selectedState=s.target.value;const i=xe();n.selectedDistrict=i.districts[0].id,n.selectedSchool=i.districts[0].schools[0].id,f()}),(Qt=document.querySelector("#district-filter"))==null||Qt.addEventListener("change",s=>{n.selectedDistrict=s.target.value,n.selectedSchool=re().schools[0].id,f()}),(Kt=document.querySelector("#school-filter"))==null||Kt.addEventListener("change",s=>{n.selectedSchool=s.target.value,f()}),(Zt=document.querySelector("#design-form"))==null||Zt.addEventListener("submit",s=>{s.preventDefault(),fn(),$(`Updated school customization for ${y().name}`),h(`${y().name} customization saved.`)}),document.querySelectorAll("#design-primary, #design-accent, #design-highlight, #design-background").forEach(s=>s.addEventListener("input",()=>{const i=document.querySelector(".school-brand-preview");if(!i)return;const l={"design-primary":"--primary","design-accent":"--teal","design-highlight":"--gold","design-background":"--background"}[s.id];i.style.setProperty(l,s.value)})),(Xt=document.querySelector("#customization-school-filter"))==null||Xt.addEventListener("change",s=>{n.selectedSchool=s.target.value,f()}),document.querySelectorAll("[data-design-preset]").forEach(s=>{s.addEventListener("click",()=>{const i=y(),l=Ze.find(p=>p.name===s.dataset.designPreset);l&&(ee[i.id]={...Me(),...l},i.theme=l.name,$(`Applied ${l.name} theme`,i.name),h(`${l.name} applied to ${i.name}.`))})}),(ea=document.querySelector("[data-reset-school-design]"))==null||ea.addEventListener("click",()=>{const s=y(),i=Ze[0];ee[s.id]={...Me(),...i},s.theme=i.name,$("Reset school colors",s.name),h(`${s.name} colors reset.`)}),document.querySelectorAll("[data-manage-district]").forEach(s=>{s.addEventListener("click",()=>{n.selectedDistrict=s.dataset.manageDistrict,n.selectedSchool=re().schools[0].id,f()})}),document.querySelectorAll("[data-manage-school]").forEach(s=>{s.addEventListener("click",()=>{n.selectedSchool=s.dataset.manageSchool,f()})}),document.querySelectorAll("[data-deadline]").forEach(s=>{s.addEventListener("change",()=>{const i=s.dataset.deadline;n.checkedDeadlines=n.checkedDeadlines.includes(i)?n.checkedDeadlines.filter(l=>l!==i):[...n.checkedDeadlines,i],f()})}),document.querySelectorAll("[data-filter]").forEach(s=>{s.addEventListener("click",()=>{n.conversationFilter=s.dataset.filter;const i=O.find(l=>l.type===n.conversationFilter);i&&(n.activeConversationId=i.id),f()})}),document.querySelectorAll("[data-conversation]").forEach(s=>{s.addEventListener("click",()=>{n.activeConversationId=s.dataset.conversation;const i=O.find(l=>l.id===n.activeConversationId);i&&(i.unread=0),f()})}),(ta=document.querySelector("#message-draft"))==null||ta.addEventListener("input",s=>{n.draft=s.target.value}),(aa=document.querySelector("[data-toggle-hours]"))==null||aa.addEventListener("click",()=>{n.workHoursOpen=!n.workHoursOpen,f()}),(sa=document.querySelector("[data-toggle-emergency]"))==null||sa.addEventListener("click",()=>{n.emergencyOverride=!n.emergencyOverride,$(`${n.emergencyOverride?"Enabled":"Disabled"} emergency override`),f()}),document.querySelectorAll("[data-start-call]").forEach(s=>{s.addEventListener("click",()=>{const i=O.find(l=>l.id===s.dataset.startCall);i&&(n.activeCallName=i.name,B("Messages",`Live call started with ${i.name}`,"Video room is active in the communication hub."),$(`Started video call with ${i.name}`,y().name),h(`Video call started with ${i.name}.`))})}),(na=document.querySelector("[data-end-call]"))==null||na.addEventListener("click",()=>{const s=n.activeCallName;n.activeCallName="",s&&B("Messages",`Live call ended with ${s}`,"Call state closed."),h("Video call ended.")}),(ia=document.querySelector("#compose"))==null||ia.addEventListener("submit",s=>{if(s.preventDefault(),!n.workHoursOpen&&!n.emergencyOverride)return;const i=n.draft.trim();i&&(O.splice(0,O.length,...O.map(l=>l.id===n.activeConversationId?{...l,preview:i,messages:[...l.messages,{from:"me",text:i,time:"Now"}]}:l)),B("Messages","Message sent",`Delivered to ${P().label}'s active conversation.`),G("FYI","Message delivered",y().name,"Messages"),n.draft="",f())}),(oa=document.querySelector("#board-form"))==null||oa.addEventListener("submit",s=>{s.preventDefault();const i=y();ie().pending.unshift({id:`${i.id}-${Date.now()}`,author:document.querySelector("#board-author").value.trim()||"Community Member",role:document.querySelector("#board-role").value,type:document.querySelector("#board-type").value,audience:document.querySelector("#board-audience").value,title:document.querySelector("#board-title").value.trim(),body:document.querySelector("#board-body").value.trim(),media:document.querySelector("#board-media").value.trim()||"No media",approverId:document.querySelector("#board-approver").value,time:"Awaiting administrator approval"}),B("Community","Community post submitted",`${document.querySelector("#board-title").value.trim()} is waiting for approval.`),G("Action","Community post awaiting approval",i.name,"Approval queue"),$("Submitted community post for approval",i.name),h("Post submitted for administrator approval.")}),document.querySelectorAll("[data-approver-toggle]").forEach(s=>{s.addEventListener("change",()=>{const i=ie();i.approvers=i.approvers.map(l=>l.id===s.dataset.approverToggle?{...l,active:s.checked}:l),f()})}),(ra=document.querySelector("#approver-form"))==null||ra.addEventListener("submit",s=>{s.preventDefault();const i=ie(),l=document.querySelector("#new-approver-name").value.trim();l&&(i.approvers.push({id:`${l.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${Date.now()}`,name:l,title:document.querySelector("#new-approver-title").value,active:!0}),f())}),document.querySelectorAll("[data-approve-post]").forEach(s=>{s.addEventListener("click",()=>{const i=ie(),l=i.pending.find(p=>p.id===s.dataset.approvePost);l&&(i.pending=i.pending.filter(p=>p.id!==l.id),i.published.unshift({...l,time:"Approved just now"}),$(`Approved community post: ${l.title}`),f())})}),document.querySelectorAll("[data-reject-post]").forEach(s=>{s.addEventListener("click",()=>{const i=ie(),l=i.pending.find(p=>p.id===s.dataset.rejectPost);i.pending=i.pending.filter(p=>p.id!==s.dataset.rejectPost),l&&$(`Rejected community post: ${l.title}`),f()})})}async function bi(){"serviceWorker"in navigator&&Te()&&navigator.serviceWorker.register("/service-worker.js").catch(()=>{}),sn();const e=window.location.hostname.toLowerCase(),t=le.flatMap(a=>a.districts).flatMap(a=>a.schools).find(a=>[a.customDomain,`${a.subdomain}.educationalsystem.fieldserviceit.com`,a.id==="ps-118"?"educationalsystem.fieldserviceit.com":""].filter(Boolean).includes(e));if(t&&(n.selectedSchool=t.id),Te()&&(n.apiMode="live-api",localStorage.getItem("educonnect-session-token")))try{const a=await Vs();q={..._.find(r=>r.id===a.user.id),...a.user},n.currentUser=q.id}catch{localStorage.removeItem("educonnect-session-token")}if(q&&(n.apiMode==="mock-api"||n.apiMode==="live-api"))try{await Ma(n.apiMode)}catch{Te()||(n.apiMode="local",n.toast="Server API unavailable. Local demo state mode enabled.")}if(q){const a=ha();n.role=a&&ge().includes(a)?a:q.landing}window.addEventListener("hashchange",()=>{if(!q)return;const a=ha();a&&a!==n.role&&Le(a,!1)}),window.addEventListener("load",et),f(),window.setInterval(()=>{!q||!n.liveUpdates||document.hidden||Ta("automatic")},15e3)}bi();
