(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const v of u.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&i(v)}).observe(document,{childList:!0,subtree:!0});function a(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerPolicy&&(u.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?u.credentials="include":r.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(r){if(r.ep)return;r.ep=!0;const u=a(r);fetch(r.href,u)}})();/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=(e,t,a=[])=>{const i=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(r=>{i.setAttribute(r,String(t[r]))}),a.length&&a.forEach(r=>{const u=ca(...r);i.appendChild(u)}),i};var qa=([e,t,a])=>ca(e,t,a);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=e=>Array.from(e.attributes).reduce((t,a)=>(t[a.name]=a.value,t),{}),Da=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",xa=e=>e.flatMap(Da).map(a=>a.trim()).filter(Boolean).filter((a,i,r)=>r.indexOf(a)===i).join(" "),Ta=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,a,i)=>a.toUpperCase()+i.toLowerCase()),Xt=(e,{nameAttr:t,icons:a,attrs:i})=>{var R;const r=e.getAttribute(t);if(r==null)return;const u=Ta(r),v=a[u];if(!v)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const p=Pa(e),[L,T,j]=v,G={...T,"data-lucide":r,...i,...p},A=xa(["lucide",`lucide-${r}`,p,i]);A&&Object.assign(G,{class:A});const N=qa([L,G,j]);return(R=e.parentNode)==null?void 0:R.replaceChild(N,e)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=["svg",w,[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=["svg",w,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=["svg",w,[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=["svg",w,[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=["svg",w,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=["svg",w,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=["svg",w,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=["svg",w,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=["svg",w,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=["svg",w,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=["svg",w,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=["svg",w,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=["svg",w,[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=["svg",w,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=["svg",w,[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=["svg",w,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=["svg",w,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=["svg",w,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=["svg",w,[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=["svg",w,[["path",{d:"m3 11 18-5v12L3 14v-3z"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=["svg",w,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=["svg",w,[["path",{d:"M13.234 20.252 21 12.3"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=["svg",w,[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=["svg",w,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=["svg",w,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=["svg",w,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=["svg",w,[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=["svg",w,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=["svg",w,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=["svg",w,[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=["svg",w,[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=["svg",w,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=["svg",w,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=["svg",w,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=["svg",w,[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=["svg",w,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=["svg",w,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=["svg",w,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=["svg",w,[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=["svg",w,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=({icons:e={},nameAttr:t="data-lucide",attrs:a={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const i=document.querySelectorAll(`[${t}]`);if(Array.from(i).forEach(r=>Xt(r,{nameAttr:t,icons:e,attrs:a})),t==="data-lucide"){const r=document.querySelectorAll("[icon-name]");r.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(r).forEach(u=>Xt(u,{nameAttr:"icon-name",icons:e,attrs:a})))}},ke=[{id:"state-admin",label:"State Admin",icon:"map",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"district-admin",label:"District Admin",icon:"building-2",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"school-admin",label:"School Admin",icon:"shield-check",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"lms",label:"LMS",icon:"layers",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"student",label:"Student",icon:"sparkles",image:"/stitch_educonnect_interactive_portal/student_portal_1/screen.png"},{id:"teacher",label:"Teacher",icon:"graduation-cap",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"parent",label:"Parent",icon:"users",image:"/stitch_educonnect_interactive_portal/parent_dashboard/screen.png"},{id:"messages",label:"Messages",icon:"message-circle",image:"/stitch_educonnect_interactive_portal/communication_hub/screen.png"},{id:"community",label:"Community",icon:"megaphone",image:"/stitch_educonnect_interactive_portal/communication_hub/screen.png"}],s={role:"state-admin",selectedState:"ny",selectedDistrict:"nyc-doe",selectedSchool:"ps-118",completed:[],selectedClass:"All",checkedDeadlines:["Science: Water Cycle Model"],conversationFilter:"Parents",activeConversationId:"sarah",draft:"",boardAudience:"All families",activeAccount:"teacher-school",selectedSubmissionId:"sub-1",rosterFilter:"All",liveUpdates:!0,realtimeTick:0,activeCallName:"",gatewayMode:"demo",backendProvider:"Supabase",authProvider:"Role-based demo auth",offlinePackReady:!1,workHoursOpen:!0,emergencyOverride:!1,currentUser:"state-admin",apiMode:"local",tourOpen:!1,tourStep:0,searchTerm:"",notificationsOpen:!1,settingsOpen:!1,toast:"",compactMode:!1,highContrast:!1,guardrails:{lockSubmissions:!0,hideAnswers:!0,parentSummaries:!0},lessonBuilderOpen:!1,lessonDraft:null,lessonFilter:"All",lessonPreviewId:"",activeStudentLessonId:"lesson-moon-phases",lessonProgress:{},activeAssignmentId:"essay",assignmentFilter:"All",studentNotes:{},bookmarkedLessons:[],fontScale:"Normal",dyslexiaFriendly:!1,reducedMotion:!1,language:"English",notificationPreferences:{email:!0,sms:!1,push:!0,dueDays:2,missingWork:!0,gradeReturned:!0},impersonatingFrom:"",pwaInstalled:!1,activeOperationsTab:"tenants"},B=[{id:"global-admin",label:"Global Test Admin",role:"Global Admin",landing:"state-admin",scope:"state",stateId:"ny",permissions:["global-access","manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance","submit-post","student-missions"]},{id:"state-admin",label:"NYS State Admin",role:"State Admin",landing:"state-admin",scope:"state",stateId:"ny",permissions:["manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]},{id:"district-admin",label:"District Admin",role:"District Admin",landing:"district-admin",scope:"district",stateId:"ny",districtId:"nyc-doe",permissions:["manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]},{id:"school-admin",label:"School Admin",role:"School Admin",landing:"school-admin",scope:"school",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",permissions:["approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]},{id:"teacher",label:"Demo Teacher",role:"Teacher",landing:"teacher",scope:"school",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",permissions:["lms","teacher-tools","message","submit-post"]},{id:"student",label:"Demo Learner",role:"Student",landing:"student",scope:"student",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",studentId:"learner-1",permissions:["student-missions"]},{id:"parent",label:"Demo Guardian",role:"Parent",landing:"parent",scope:"guardian",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",studentIds:["learner-1"],permissions:["message","submit-post"]}],Ss=[["global-access","Access every test workspace"],["manage-tenants","Manage tenants"],["manage-users","Manage users"],["view-compliance","View compliance"],["approve-posts","Approve posts"],["emergency","Emergency override"],["lms","Manage LMS"],["teacher-tools","Teacher tools"],["message","Messaging"],["submit-post","Submit posts"],["student-missions","Student missions"]],We=[{id:1,subject:"Science",title:"Space Explorers: The Moon",due:"Due tomorrow",action:"Start Mission",progress:78,accent:"teal",icon:"rocket"},{id:2,subject:"Math",title:"Number Quest: Addition",due:"Due in 2 days",action:"Play Now",progress:44,accent:"blue",icon:"star"},{id:3,subject:"Reading",title:"The Whale and the Star",due:"Keep reading",action:"Continue",progress:56,accent:"gold",icon:"book-open"}],se=[{id:"ny",name:"New York",agency:"NYS Education Department (NYSED)",districts:[{id:"nyc-doe",name:"New York City Public Schools",region:"New York City",superintendent:"NYC Chancellor",schools:[{id:"ps-118",name:"P.S. 118 Discovery Academy",category:"Public",students:684,staff:78,status:"Active",subdomain:"ps118",plan:"District Core",modules:["SIS","LMS","Messaging","Family Portal"],storage:64,uptime:"99.98%",theme:"Discovery Blue",isolation:"Dedicated tenant database",avgGrade:"88.4%",attendance:"94.2%",messages:"3 pending",studentPoints:1240,studentName:"Demo Learner",guardianName:"Demo Guardian",learnerName:"Demo Learner",workHours:"Mon-Fri, 8:00 AM-4:30 PM",afterHours:"Messages are held until the next work day"},{id:"bronx-charter",name:"Bronx Learning Charter",category:"Chartered",students:412,staff:49,status:"Onboarding",subdomain:"bronxlearning",plan:"Charter Launch",modules:["SIS","Messaging","Enrollment"],storage:31,uptime:"99.91%",theme:"Charter Gold",isolation:"Dedicated tenant database",avgGrade:"86.1%",attendance:"92.7%",messages:"8 pending",studentPoints:890,studentName:"Explorer",guardianName:"Monica",learnerName:"Ari",workHours:"Mon-Fri, 7:45 AM-4:00 PM",afterHours:"Messages are held until staff office hours reopen"}]},{id:"albany-csd",name:"Albany City School District",region:"Capital Region",superintendent:"District Superintendent",schools:[{id:"albany-prep",name:"Albany Preparatory School",category:"Private",students:325,staff:44,status:"Active",subdomain:"albanyprep",plan:"Private Plus",modules:["LMS","Messaging","Tuition","Family Portal"],storage:46,uptime:"99.95%",theme:"Prep Teal",isolation:"Dedicated tenant database",avgGrade:"91.8%",attendance:"96.4%",messages:"1 pending",studentPoints:1565,studentName:"Scholar",guardianName:"Priya",learnerName:"Noah",workHours:"Mon-Fri, 8:30 AM-5:00 PM",afterHours:"Messages wait for the next administrator-approved window"},{id:"eagle-point",name:"Eagle Point Elementary",category:"Public",students:538,staff:61,status:"Active",subdomain:"eaglepoint",plan:"District Core",modules:["SIS","LMS","Messaging"],storage:52,uptime:"99.97%",theme:"Eagle Green",isolation:"Dedicated tenant database",avgGrade:"87.2%",attendance:"95.1%",messages:"4 pending",studentPoints:1120,studentName:"Navigator",guardianName:"Sarah",learnerName:"Mia",workHours:"Mon-Fri, 8:00 AM-4:00 PM",afterHours:"Messages are queued until office hours"}]}]},{id:"ca",name:"California",agency:"California Department of Education",districts:[{id:"la-usd",name:"Los Angeles Unified School District",region:"Los Angeles County",superintendent:"District Superintendent",schools:[{id:"pacific-stem",name:"Pacific STEM Charter",category:"Chartered",students:496,staff:52,status:"Active",subdomain:"pacificstem",plan:"STEM Charter",modules:["SIS","LMS","Messaging","Lab Scheduler"],storage:58,uptime:"99.94%",theme:"Pacific Blue",isolation:"Dedicated tenant database",avgGrade:"90.3%",attendance:"93.8%",messages:"6 pending",studentPoints:1325,studentName:"Innovator",guardianName:"Elena",learnerName:"Kai",workHours:"Mon-Fri, 8:00 AM-4:30 PM",afterHours:"Messages are held until staff work hours"}]}]}],ws=[["State Governance",["Board of Regents","Commissioner of Education","NYS Education Department (NYSED)"]],["District & Regional Governance",["BOCES District Superintendents","Local Board of Education (BOE)","District Superintendent / NYC Chancellor","Assistant / Deputy Superintendents","District Directors / Coordinators"]],["School Building Administration",["Principal","Assistant Principal","Dean of Students / Department Chairs"]],["Classroom Faculty",["Tenured Teachers","Probationary Teachers","Substitutes / Leave Replacements"]],["Instructional & Specialized Support",["Specialized Clinicians","Teaching Assistants","Teacher Aides / Paraprofessionals"]],["Operational Support",["Secretaries / Clerical Staff","Custodial / Maintenance Staff","Food Service / Security / Transportation"]],["Student Leadership & Student Body",["Student Board of Education Representative","Student Council President / Officers","Class Officers","Club Presidents / Team Captains","General Student Body"]]],Y=[{name:"English Literature",room:"Period 2, Room 304",grade:89,attendance:96,pending:12},{name:"Creative Writing",room:"Period 4, Room 201",grade:92,attendance:97,pending:1},{name:"Basic English",room:"Period 6, Room 118",grade:84,attendance:91,pending:5}],I=[{id:"stu-1",student:"Demo Learner 1",guardian:"Demo Guardian 1",teacher:"Demo Teacher",className:"English Literature",grade:91,attendance:98,accommodations:"Visual vocabulary cards",status:"Active"},{id:"stu-2",student:"Demo Learner 2",guardian:"Demo Guardian 2",teacher:"Demo Teacher",className:"Creative Writing",grade:88,attendance:94,accommodations:"Extended quiz time",status:"Active"},{id:"stu-3",student:"Demo Learner 3",guardian:"Demo Guardian 3",teacher:"Demo Teacher",className:"English Literature",grade:82,attendance:91,accommodations:"Reading support",status:"Watch"},{id:"stu-4",student:"Demo Learner 4",guardian:"Demo Guardian 4",teacher:"Demo Teacher",className:"Creative Writing",grade:96,attendance:99,accommodations:"None",status:"Active"}],F=[{id:"sub-1",student:"Demo Learner 1",assignment:"Fractions Mastery Check",status:"Submitted",score:88,rubric:[["Concepts",4],["Accuracy",3],["Explanation",4],["Neatness",3]],comment:"Strong reasoning. Recheck mixed-number conversions."},{id:"sub-2",student:"Demo Learner 2",assignment:"Great Depression Essay",status:"Needs review",score:74,rubric:[["Thesis",3],["Evidence",3],["Organization",2],["Conventions",4]],comment:"Good evidence. Add a clearer argument in the introduction."},{id:"sub-3",student:"Demo Learner 3",assignment:"Grammar Quiz - Week 5",status:"Missing",score:0,rubric:[["Completion",0],["Accuracy",0],["Timeliness",0]],comment:"Family reminder queued."}],me=[["Demo Learner 3","finished reading The Great Gatsby","15 minutes ago","Lit 101"],["Demo Learner 4","submitted Grammar Quiz - Week 5","42 minutes ago","Creative Writing"],["Marcus Thorne","posted in the discussion board","2 hours ago","Shakespeare"]],Ze=[{title:"History: Great Depression Essay",meta:"Due tomorrow, 11:59 PM",urgent:!0},{title:"Science: Water Cycle Model",meta:"Due Thursday",urgent:!1},{title:"Math: Quadratic Equations Quiz",meta:"Due Sunday",urgent:!1}],x=[{id:"fractions",title:"Fractions Mastery Check",className:"Basic English",type:"Automated quiz",instructions:"Complete the mastery check and show your reasoning.",rubric:"4-domain rubric",analytics:82,dueDate:"2026-10-24",points:20,status:"Published",allowResubmit:!0,maxAttempts:2,lockDate:"Oct 24, 8:00 PM",exception:"Maya R. +24h",attachments:[]},{id:"essay",title:"Great Depression Essay",className:"English Literature",type:"Writing task",instructions:"Write a supported argument using at least three pieces of evidence from the unit.",rubric:"Argument + evidence rubric",analytics:74,dueDate:"2026-10-28",points:100,status:"Published",allowResubmit:!0,maxAttempts:3,lockDate:"Oct 28, 11:59 PM",exception:"None",attachments:[]}],de=[{id:"work-essay-demo",assignmentId:"essay",studentId:"student",student:"Demo Learner",response:"The New Deal changed the federal government's role by expanding relief and recovery programs.",attachments:[],status:"Draft",attempt:1,submittedAt:"",score:null,feedback:"",returnedAt:""}],Te=[{id:"qb-claim",subject:"English Language Arts",standard:"CCSS.ELA-LITERACY.W.4.1",questionType:"Multiple choice",question:"Which statement is the strongest claim?",options:["School is interesting.","Schools should provide daily reading time because it improves fluency and comprehension.","Many students read.","Books have pages."],correctAnswer:1,points:5,feedback:"A strong claim is specific and supported by a clear reason."},{id:"qb-moon",subject:"Science",standard:"NGSS 5-ESS1-1",questionType:"True or false",question:"The Moon produces its own visible light.",options:["True","False","",""],correctAnswer:1,points:5,feedback:"The Moon reflects sunlight."},{id:"qb-fraction",subject:"Math",standard:"CCSS.MATH.CONTENT.4.NF.A.1",questionType:"Short answer",question:"Write an equivalent fraction for 1/2.",options:["2/4","","",""],correctAnswer:0,points:5,feedback:"Multiplying the numerator and denominator by the same number creates an equivalent fraction."}],re=[{id:"course-ela-4",title:"Grade 4 English Language Arts",subject:"English Language Arts",grade:"4",className:"English Literature",standards:["CCSS.ELA-LITERACY.RL.4.1","CCSS.ELA-LITERACY.W.4.1"],units:[{id:"unit-stories",title:"Stories and Perspective",description:"Analyze characters, point of view, and evidence.",lessonIds:["lesson-story-elements"],assignmentIds:[]},{id:"unit-arguments",title:"Claims and Evidence",description:"Build clear claims supported by relevant evidence.",lessonIds:[],assignmentIds:["essay"]}]},{id:"course-science-4",title:"Grade 4 Earth and Space Science",subject:"Science",grade:"4",className:"Basic English",standards:["NGSS 5-ESS1-1"],units:[{id:"unit-moon",title:"Earth and Moon Systems",description:"Observe patterns in the Moon's appearance.",lessonIds:["lesson-moon-phases"],assignmentIds:[]}]}],M=[{id:"lesson-moon-phases",title:"Moon Phases Explorer",subject:"Science",className:"English Literature",summary:"Explore why the Moon appears to change shape and check your understanding.",status:"Published",visibility:"Students and families",dueDate:"2026-10-24",estimatedMinutes:35,points:20,allowLate:!0,requireOrder:!0,updatedAt:"Today",blocks:[{id:"moon-intro",type:"text",title:"Look up at the Moon",body:"The Moon does not make its own light. As it travels around Earth, sunlight illuminates different portions that we can see."},{id:"moon-video",type:"media",mediaType:"Video",title:"Moon phases video",url:"https://www.youtube.com/watch?v=3f_21N3wcX8",caption:"Watch the short overview, then continue to the knowledge check."},{id:"moon-quiz",type:"quiz",title:"Knowledge check",question:"What causes the phases of the Moon?",questionType:"Multiple choice",options:["Earth's shadow always covers the Moon","We see different sunlit portions as the Moon orbits Earth","Clouds change the Moon's shape","The Moon produces different amounts of light"],correctAnswer:1,feedback:"The Moon's orbit changes how much of its sunlit half is visible from Earth.",points:10,required:!0}]},{id:"lesson-story-elements",title:"Building a Strong Story",subject:"English Language Arts",className:"Creative Writing",summary:"Use character, setting, conflict, and resolution to plan an original story.",status:"Draft",visibility:"Teacher only",dueDate:"2026-10-28",estimatedMinutes:45,points:25,allowLate:!1,requireOrder:!1,updatedAt:"Yesterday",blocks:[{id:"story-intro",type:"text",title:"Four story building blocks",body:"A memorable story gives readers a character to care about, a setting they can picture, a conflict that creates tension, and a resolution that shows change."},{id:"story-link",type:"media",mediaType:"Link",title:"Story planner",url:"https://www.readwritethink.org/",caption:"Open the planning resource for additional examples."}]}],je=[{name:"Water Cycle Worksheet.docx",status:"Converted to editable lesson copy",type:"Word"},{name:"Moon Lab Packet.pdf",status:"OCR indexed + annotation ready",type:"PDF"},{name:"Parent Signature Form.pdf",status:"Fillable fields detected",type:"PDF"}],Je=[{id:"teacher-school",name:"Demo Teacher",context:"Teacher at selected school",active:!0},{id:"parent-school",name:"Demo Guardian",context:"Parent profile",active:!1},{id:"district-admin",name:"District Admin",context:"District-wide oversight",active:!1}],Q=[{id:"notice-lock-window",level:"Urgent",title:"Locked submission window closes tonight",target:"Grade 4 Math",channel:"Dashboard + SMS",read:!1},{id:"notice-rubrics",level:"Action",title:"3 rubric scores need review",target:"English Literature",channel:"Teacher inbox",read:!1},{id:"notice-family-comment",level:"FYI",title:"New family comment on community board",target:"All families",channel:"Digest",read:!1}],le=[{id:"live-1",type:"Roster",title:"Demo Learner 1 attendance synced",detail:"SIS updated attendance to 98%.",time:"Live now"},{id:"live-2",type:"LMS",title:"Rubric queue refreshed",detail:"3 submissions are ready for review.",time:"Live now"},{id:"live-3",type:"Messages",title:"Parent digest prepared",detail:"Routine updates will send during the next work window.",time:"Live now"}],ea=[{app:"Docs",action:"Distribute editable templates instantly",status:"Connected"},{app:"Drive",action:"Attach, collect, and archive class files",status:"Connected"},{app:"Forms",action:"Auto-create quizzes with answer visibility rules",status:"Connected"},{app:"Slides",action:"Share lesson decks as view or copy templates",status:"Connected"}],ks=[["Intuitive Design","Clean teacher and student workflows with minimal training."],["Zero Cost Base","Core classroom, assignments, communication, and family summaries stay free for schools."],["Paperless Workflow","Create, collect, grade, return, and archive digital assignments."],["Centralized Communication","Class announcements, direct messages, and parent summaries in one place."],["Automated Guardrails","Lock edits after submission and hide quiz answers until the assessment ends."]],he=[{actor:"District Admin",event:"Provisioned school tenant",scope:"NYC DOE",time:"Today 9:12 AM"},{actor:"Principal Rivera",event:"Approved community board post",scope:"P.S. 118",time:"Today 10:44 AM"},{actor:"System",event:"Blocked after-hours parent message",scope:"P.S. 118",time:"Yesterday 6:03 PM"},{actor:"NYSED Reviewer",event:"Viewed compliance dashboard",scope:"New York",time:"Yesterday 2:21 PM"}],As=[{label:"FERPA Mode",status:"Enabled",detail:"Student records are hidden outside authorized tenant scopes."},{label:"Media Review",status:"Required",detail:"Photos and files stay pending until an assigned approver approves them."},{label:"Data Export",status:"Logged",detail:"Every roster, gradebook, or message export appears in the audit trail."}],Ls=[{label:"FERPA access reviews",value:"12",status:"Due this month",detail:"Confirm staff access for student records."},{label:"Data export logs",value:"4",status:"Reviewed",detail:"Gradebook and roster exports are audit logged."},{label:"Media approvals",value:"1",status:"Pending",detail:"Photo content waiting for administrator approval."},{label:"After-hours blocks",value:"7",status:"Protected",detail:"Messages held outside school communication windows."}],da=[{title:"Superintendent Hearing Window",audience:"District",date:"Oct 21",type:"Compliance"},{title:"Science Night",audience:"P.S. 118 families",date:"Oct 23",type:"Community"},{title:"Fractions Mastery Lock Date",audience:"Grade 4 Math",date:"Oct 24",type:"LMS"},{title:"Parent Conference Block",audience:"Teachers + guardians",date:"Oct 27",type:"Messaging"}],Ne=[{item:"Fractions quiz attempt",owner:"Leo",status:"Queued for upload"},{item:"PDF annotation packet",owner:"Maya",status:"Conflict check ready"},{item:"Teacher rubric draft",owner:"Demo Teacher",status:"Saved offline"}],Ms=[["Default route","Parent and teacher posts go to the first active school approver."],["Media route","Photos, videos, and files require Principal or Assistant Principal approval."],["Sensitive route","Discipline, health, or student-identifying content is held for administrator review."],["Publishing rule","Approved posts publish only inside the selected school tenant."]],Es=[{title:"One-tap teacher message",detail:"Disabled automatically outside school work hours."},{title:"Digest-first notifications",detail:"Urgent alerts separate from routine activity noise."},{title:"Offline packet pickup",detail:"Assignments and forms can be downloaded before Wi-Fi drops."}],ae={"ps-118":{logo:"D",crest:"Discovery Owls",primary:"#0050cb",accent:"#006b5f",highlight:"#735c00",background:"#f8f9ff",voice:"Bright, curious, elementary STEM"},"bronx-charter":{logo:"B",crest:"Bronx Torch",primary:"#6d3f00",accent:"#005b96",highlight:"#996b00",background:"#fff9ef",voice:"Confident, college-bound, community first"},"albany-prep":{logo:"A",crest:"Albany Shield",primary:"#005f73",accent:"#7a3e9d",highlight:"#8a5a00",background:"#f3fbfb",voice:"Polished, private school, seminar-ready"},"eagle-point":{logo:"E",crest:"Eagle Point",primary:"#116149",accent:"#004e98",highlight:"#7c5c00",background:"#f4fbf6",voice:"Warm, neighborhood public school"},"pacific-stem":{logo:"P",crest:"Pacific Wave",primary:"#0057a8",accent:"#00756f",highlight:"#7a6100",background:"#f2f8ff",voice:"Modern, STEM lab, project-based"}},Ye=[{name:"Discovery Blue",primary:"#0050cb",accent:"#006b5f",highlight:"#735c00",background:"#f8f9ff"},{name:"Charter Gold",primary:"#6d3f00",accent:"#005b96",highlight:"#996b00",background:"#fff9ef"},{name:"Prep Teal",primary:"#005f73",accent:"#7a3e9d",highlight:"#8a5a00",background:"#f3fbfb"},{name:"Eagle Green",primary:"#116149",accent:"#004e98",highlight:"#7c5c00",background:"#f4fbf6"},{name:"Pacific Blue",primary:"#0057a8",accent:"#00756f",highlight:"#7a6100",background:"#f2f8ff"}],D=[{id:"sarah",name:"Demo Guardian 1",role:"Leo's parent",type:"Parents",unread:0,online:!0,preview:"I'll send the photo of the worksheet now...",messages:[{from:"them",text:"Hi Mr. Anderson! Leo found the fractions section tricky.",time:"13:45"},{from:"me",text:"Thanks for the heads up. I can send a visual practice sheet today.",time:"13:52"},{from:"them",text:"That would help. I'll send the photo of the worksheet now.",time:"14:02"}]},{id:"elena",name:"Demo Guardian 2",role:"Maya's parent",type:"Parents",unread:3,online:!1,preview:"Is the field trip still happening on Friday?",messages:[{from:"them",text:"Is the field trip still happening on Friday?",time:"Tue"},{from:"me",text:"Yes, the permission forms are due by Thursday morning.",time:"Tue"}]},{id:"grade-team",name:"Grade 4 Team",role:"6 teachers",type:"Groups",unread:1,online:!0,preview:"New reading groups are posted.",messages:[{from:"them",text:"New reading groups are posted for next week.",time:"09:18"},{from:"me",text:"Great, I updated my small-group rotation.",time:"09:26"}]}],ce={"ps-118":{approvers:[{id:"principal-rivera",name:"Principal Rivera",title:"Principal",active:!0},{id:"ap-kim",name:"Assistant Principal Kim",title:"Assistant Principal",active:!0},{id:"dean-walker",name:"Dean Walker",title:"Dean of Students",active:!1}],published:[{id:"ps-post-1",author:"Ms. Henderson",role:"Teacher",type:"Announcement",audience:"All families",title:"Science Night Volunteers",body:"We need four family volunteers for Thursday's hands-on moon lab.",media:"Flyer PDF",time:"Approved today"},{id:"ps-post-2",author:"Demo Guardian 1",role:"Parent",type:"Resource",audience:"Grade 4",title:"Math Game Practice Link",body:"Sharing a free fractions game that helped a learner practice at home.",media:"Website link",time:"Approved yesterday"}],pending:[{id:"ps-pending-1",author:"Mr. Anderson",role:"Teacher",type:"Photo",audience:"Grade 4",title:"Moon Rock Lab Photos",body:"A photo set from today's science station rotation.",media:"6 images",approverId:"principal-rivera",time:"Awaiting principal approval"}]}},Ae=[{name:"users",records:B.length,status:"Mapped",detail:"Role, permission, school, guardian/student links"},{name:"schools",records:5,status:"Mapped",detail:"State, district, tenant URL, modules, branding"},{name:"classes",records:Y.length,status:"Mapped",detail:"Teacher, room, attendance, pending work"},{name:"students",records:I.length,status:"Mapped",detail:"Guardian, accommodations, grades, attendance"},{name:"assignments",records:x.length,status:"Mapped",detail:"Type, rubric, lock date, exceptions"},{name:"lessons",records:M.length,status:"Mapped",detail:"Content blocks, media, quizzes, publishing, and learner progress"},{name:"submissions",records:F.length,status:"Mapped",detail:"Rubric scores, comments, review status"},{name:"messages",records:D.length,status:"Mapped",detail:"Parent and group threads with work-hour controls"},{name:"community_posts",records:ce["ps-118"].published.length+ce["ps-118"].pending.length,status:"Mapped",detail:"Approvals, media, audience, publishing state"},{name:"audit_logs",records:he.length,status:"Mapped",detail:"Admin actions, exports, compliance events"}],ye=[{id:"district",label:"Create district and school tenants",owner:"Admin",done:!0},{id:"staff",label:"Invite staff accounts",owner:"Admin",done:!0},{id:"roster",label:"Import student roster",owner:"Registrar",done:!0},{id:"guardians",label:"Connect parent and guardian accounts",owner:"School office",done:!1},{id:"classes",label:"Assign teachers to classes",owner:"Principal",done:!0},{id:"launch",label:"Send launch notification",owner:"Communications",done:!1}],H=[{id:"upload-1",name:"Moon Lab Packet.pdf",area:"LMS",size:"1.2 MB",status:"Ready for class distribution"},{id:"upload-2",name:"Science Night Flyer.pdf",area:"Community",size:"420 KB",status:"Waiting for approval"}],J=[{id:"delivery-1",channel:"Email",audience:"Grade 4 families",status:"Queued",detail:"Science Night reminder"},{id:"delivery-2",channel:"SMS",audience:"Emergency contacts",status:"Ready",detail:"Emergency override test"},{id:"delivery-3",channel:"Push",audience:"Teachers",status:"Delivered",detail:"Rubric queue refresh"}],$e=[{id:"auth",label:"Role-based authentication rules",status:"Configured",done:!0},{id:"ferpa",label:"FERPA tenant data isolation",status:"Configured",done:!0},{id:"audit",label:"Audit log export policy",status:"Configured",done:!0},{id:"backups",label:"Nightly database backups",status:"Needs backend provider",done:!1},{id:"encryption",label:"Encrypted file storage",status:"Needs storage provider",done:!1},{id:"retention",label:"Data retention schedule",status:"Drafted",done:!1}],ze=[{step:"Build",status:"Passing",detail:"Vite production build generates static assets"},{step:"Tests",status:"Passing",detail:"Playwright local and live smoke tests available"},{step:"FTP deploy",status:"Live",detail:"educationalsystem.fieldserviceit.com is serving the app"},{step:"GitHub sync",status:"Connected",detail:"Backend repository deploys through Hostinger hPanel"}],k={tenantIsolation:{status:"Enforced",strategy:"School-scoped records and permission-filtered API responses",lastTest:"Today"},storage:{provider:"Dedicated tenant storage",quotaGb:75,usedGb:18.4,virusScanning:!0,compression:"Media worker ready",thumbnailing:"Media worker ready"},domains:[{schoolId:"ps-118",domain:"educationalsystem.fieldserviceit.com",dns:"Verified",ssl:"Active",checkedAt:"Just now"},{schoolId:"bronx-charter",domain:"bronxlearning.educonnect.local",dns:"Awaiting DNS",ssl:"Pending",checkedAt:"Today"}],enrollmentImports:[{id:"import-fall",schoolId:"ps-118",file:"fall-roster.csv",rows:684,accepted:680,needsReview:4,status:"Completed",createdAt:"Aug 18"}],gradebook:{categories:[{name:"Assessments",weight:40},{name:"Projects",weight:30},{name:"Classwork",weight:20},{name:"Participation",weight:10}],standards:[{code:"CCSS.ELA-LITERACY.W.4.1",mastery:82},{code:"CCSS.ELA-LITERACY.RL.4.1",mastery:88},{code:"NGSS 5-ESS1-1",mastery:79}],sisExport:{status:"Ready",format:"OneRoster CSV",lastExport:"Not exported"}},gradebooks:{},security:{mfaRequired:!0,sessionTimeoutMinutes:60,loginAlerts:!0,activeSessions:[{id:"session-current",user:"Global Test Admin",device:"Current browser",location:"New York, US",lastActive:"Now",current:!0}]},backups:{schedule:"Nightly at 2:00 AM",retentionDays:30,lastBackup:"Today 2:00 AM",lastRestoreTest:"Passed • Today",encrypted:!1},notifications:{provider:"Operational API",templates:[{id:"due",name:"Assignment due reminder",channels:["Email","Push"],status:"Active"},{id:"weekly",name:"Weekly family summary",channels:["Email"],status:"Active"}],optOuts:3},accessibility:{wcagTarget:"WCAG 2.2 AA",score:96,issues:0,languages:["English","Spanish"],lastAudit:"Today"},monitors:[{service:"Education website",status:"Operational",latency:184,uptime:"99.98%",checkedAt:"Just now"},{service:"Dedicated API",status:"Operational",latency:96,uptime:"99.99%",checkedAt:"Just now"},{service:"File storage",status:"Operational",latency:121,uptime:"99.97%",checkedAt:"Just now"},{service:"Notifications",status:"Operational",latency:208,uptime:"99.95%",checkedAt:"Just now"}],billing:{plan:"District Core",schools:5,monthlyEstimate:0,status:"Community deployment"}},Cs="educationalsystem.fieldserviceit.com",qs="https://api.educationalsystem.fieldserviceit.com";function ua(e,t="",a=""){return e===Cs?qs:t||a||""}const ta=new Map;function Ps(){return ua(window.location.hostname,window.__EDUCONNECT_API_BASE__,void 0)}function Ds(e,t={}){var i;const a=e instanceof Error?e:new Error(String(e||"Unknown client error"));return{source:t.source||"frontend",message:a.message.slice(0,1e3),stack:String(a.stack||"").slice(0,6e3),path:`${window.location.pathname}${window.location.hash}`.slice(0,300),release:((i=document.querySelector('meta[name="app-release"]'))==null?void 0:i.content)||"web"}}function Be(e,t={}){const a=Ps();if(!a)return;const i=Ds(e,t),r=`${i.source}:${i.message}:${i.path}`,u=Date.now();u-(ta.get(r)||0)<6e4||(ta.set(r,u),fetch(`${a}/api/error-reports`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),keepalive:!0}).catch(()=>{}))}function xs(){window.addEventListener("error",e=>Be(e.error||e.message,{source:"window.error"})),window.addEventListener("unhandledrejection",e=>Be(e.reason,{source:"unhandledrejection"}))}const pa="educonnect-mock-api-v1";let Ie=0;function ma(e){return e&&typeof e=="object"&&"data"in e?e.data:e}function ha(){return new Promise(e=>setTimeout(e,80))}function Xe(){return ua(window.location.hostname,window.__EDUCONNECT_API_BASE__,void 0)}function Ts(e){return`${Xe()}/api/files/${encodeURIComponent(e)}/download`}function ga(){const e=localStorage.getItem("educonnect-session-token");return e?{Authorization:`Bearer ${e}`}:{}}async function va(e,t){const a=`${Xe()}/api/state`,i=await fetch(a,{method:e,headers:{"Content-Type":"application/json",...ga()},body:t?JSON.stringify(t):void 0});if(Ie+=1,!i.ok){`${i.status}`;const r=new Error(`Server API request failed with ${i.status}`);throw Be(r,{source:"api.state"}),r}return ma(await i.json())}async function Z(e,t={}){const a=`${Xe()}${e}`,i=await fetch(a,{headers:{"Content-Type":"application/json",...ga(),...t.headers||{}},...t});if(Ie+=1,!i.ok){`${i.status}`;const r=await i.json().catch(()=>({})),u=new Error(r.error||`Server API request failed with ${i.status}`);throw Be(u,{source:"api.request"}),u}return ma(await i.json())}async function Ns(e,t="mock-api"){return t==="live-api"?va("PUT",{snapshot:e}):(Ie+=1,await ha(),localStorage.setItem(pa,JSON.stringify(e)),{ok:!0,requestCount:Ie})}async function Os(e="mock-api"){return e==="live-api"?(await va("GET")).snapshot:(Ie+=1,await ha(),JSON.parse(localStorage.getItem(pa)||"null"))}async function Rs(e,t){return Z("/api/login",{method:"POST",body:JSON.stringify({identifier:e,password:t})})}async function Is(){return Z("/api/session",{method:"GET"})}async function Ve(e,t="LMS"){const a=await new Promise((i,r)=>{const u=new FileReader;u.onload=()=>i(String(u.result).split(",")[1]||""),u.onerror=()=>r(u.error),u.readAsDataURL(e)});return Z("/api/files",{method:"POST",body:JSON.stringify({name:e.name,type:e.type,area:t,size:`${Math.max(1,Math.round(e.size/1024))} KB`,contentBase64:a})})}async function js(e="Launch test group"){return Z("/api/notifications/test",{method:"POST",body:JSON.stringify({audience:e})})}function zs(){return Z("/api/backups",{method:"POST",body:"{}"})}function Fs(e=""){return Z("/api/backups/restore-test",{method:"POST",body:JSON.stringify({backup:e})})}function Bs(e){return Z("/api/domains/verify",{method:"POST",body:JSON.stringify({schoolId:e})})}function Gs(e,t,a){return Z("/api/enrollment/import",{method:"POST",body:JSON.stringify({schoolId:e,file:t,rows:a})})}function Us(e){return Z("/api/security/mfa",{method:"POST",body:JSON.stringify({required:e})})}function Ws({channel:e,audience:t,template:a,scheduledFor:i=""}){return Z("/api/notifications/schedule",{method:"POST",body:JSON.stringify({channel:e,audience:t,template:a,scheduledFor:i})})}function Hs(){return Z("/api/operations/status",{method:"GET"})}const Ge="educonnect-demo-state-v1",E=structuredClone({state:s,userProfiles:B,tenantStates:se,schoolDesigns:ae,rosterRecords:I,gradebookSubmissions:F,auditLogs:he,lmsAssignments:x,lmsLessons:M,lmsSubmissions:de,questionBank:Te,curriculumCourses:re,lmsFiles:je,lmsNotifications:Q,realtimeEvents:le,databaseTables:Ae,onboardingTasks:ye,fileUploads:H,notificationDeliveryLog:J,securityChecklist:$e,deployPipeline:ze,productionReadiness:k,offlineSyncQueue:Ne,activityFeed:me,conversations:D,communityBoards:ce});function Ee(e,t){Object.keys(e).forEach(a=>delete e[a]),Object.assign(e,structuredClone(t))}function y(e,t){e.splice(0,e.length,...structuredClone(t))}function _s(){try{const e=JSON.parse(localStorage.getItem(Ge)||"null");et(e)}catch{localStorage.removeItem(Ge)}}function ba(){return structuredClone({state:s,userProfiles:B,tenantStates:se,schoolDesigns:ae,rosterRecords:I,gradebookSubmissions:F,auditLogs:he,lmsAssignments:x,lmsLessons:M,lmsSubmissions:de,questionBank:Te,curriculumCourses:re,lmsFiles:je,lmsNotifications:Q,realtimeEvents:le,databaseTables:Ae,onboardingTasks:ye,fileUploads:H,notificationDeliveryLog:J,securityChecklist:$e,deployPipeline:ze,productionReadiness:k,offlineSyncQueue:Ne,activityFeed:me,conversations:D,communityBoards:ce})}function et(e){e&&(e.state&&Object.assign(s,e.state),e.userProfiles&&y(B,e.userProfiles),e.tenantStates&&y(se,e.tenantStates),e.schoolDesigns&&Ee(ae,e.schoolDesigns),e.rosterRecords&&y(I,e.rosterRecords),e.gradebookSubmissions&&y(F,e.gradebookSubmissions),e.auditLogs&&y(he,e.auditLogs),e.lmsAssignments&&y(x,e.lmsAssignments),e.lmsLessons&&y(M,e.lmsLessons),e.lmsSubmissions&&y(de,e.lmsSubmissions),e.questionBank&&y(Te,e.questionBank),e.curriculumCourses&&y(re,e.curriculumCourses),e.lmsFiles&&y(je,e.lmsFiles),e.lmsNotifications&&y(Q,e.lmsNotifications),e.realtimeEvents&&y(le,e.realtimeEvents),e.databaseTables&&y(Ae,e.databaseTables),e.onboardingTasks&&y(ye,e.onboardingTasks),e.fileUploads&&y(H,e.fileUploads),e.notificationDeliveryLog&&y(J,e.notificationDeliveryLog),e.securityChecklist&&y($e,e.securityChecklist),e.deployPipeline&&y(ze,e.deployPipeline),e.productionReadiness&&Ee(k,e.productionReadiness),e.offlineSyncQueue&&y(Ne,e.offlineSyncQueue),e.activityFeed&&y(me,e.activityFeed),e.conversations&&y(D,e.conversations),e.communityBoards&&Ee(ce,e.communityBoards))}function Js(){const e=ba();localStorage.setItem(Ge,JSON.stringify(e)),(s.apiMode==="mock-api"||s.apiMode==="live-api")&&Ns(e,s.apiMode).catch(()=>{})}async function fa(e=s.apiMode){const t=await Os(e);t&&et(t)}function Vs(){localStorage.removeItem(Ge),Object.assign(s,structuredClone(E.state)),y(B,E.userProfiles),y(se,E.tenantStates),Ee(ae,E.schoolDesigns),y(I,E.rosterRecords),y(F,E.gradebookSubmissions),y(he,E.auditLogs),y(x,E.lmsAssignments),y(M,E.lmsLessons),y(de,E.lmsSubmissions),y(Te,E.questionBank),y(re,E.curriculumCourses),y(je,E.lmsFiles),y(Q,E.lmsNotifications),y(le,E.realtimeEvents),y(Ae,E.databaseTables),y(ye,E.onboardingTasks),y(H,E.fileUploads),y(J,E.notificationDeliveryLog),y($e,E.securityChecklist),y(ze,E.deployPipeline),Ee(k,E.productionReadiness),y(Ne,E.offlineSyncQueue),y(me,E.activityFeed),y(D,E.conversations),Ee(ce,E.communityBoards)}xs();const aa=document.querySelector("#app");let C=null,we=null,Ce="",Re=!1,Oe=null;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),Oe=e});const sa={English:{settings:"Settings",notifications:"Notifications",lessons:"Lessons",assignments:"Assignments",progress:"My Progress",saveDraft:"Save draft",submit:"Submit assignment"},Spanish:{settings:"Configuración",notifications:"Notificaciones",lessons:"Lecciones",assignments:"Tareas",progress:"Mi progreso",saveDraft:"Guardar borrador",submit:"Entregar tarea"}};function qe(e){var t;return((t=sa[s.language])==null?void 0:t[e])||sa.English[e]||e}const be=[{title:"Choose a role",body:"Use the demo login panel to switch between state, district, school, teacher, parent, and student access.",role:"state-admin"},{title:"Create learning work",body:"Teachers can author multimedia lessons, build quizzes, publish assignments, and prepare offline packs in the LMS.",role:"lms"},{title:"Communicate safely",body:"Messaging respects school work hours, with emergency override reserved for admins.",role:"messages"},{title:"Approve community posts",body:"Admins can approve posts before they publish to the school community board.",role:"community"}],Ys={AlertTriangle:vs,Award:Na,Bell:Oa,BookOpen:Ra,Building2:Ia,CalendarDays:ja,Check:za,ChevronRight:Fa,ClipboardCheck:Ba,Clock:Ga,Database:Ua,Download:Wa,Eye:_a,FileText:Ja,GraduationCap:Va,Layers:Ya,Lock:Qa,Mail:Ka,Map:Za,Megaphone:Xa,MessageCircle:es,MoreHorizontal:Ha,Paperclip:ts,PenLine:as,Play:ss,Plus:ns,RefreshCw:is,Rocket:os,RotateCcw:rs,Search:ls,Send:cs,Settings:ds,ShieldCheck:us,Smartphone:ps,Sparkles:ms,Star:hs,TrendingUp:gs,Users:bs,Video:fs,X:ys};function c(e){return`<i class="app-icon" data-lucide="${e}" data-icon="${e}" aria-hidden="true"></i>`}function Qs(e){return`/${e.replace(/^\/+/,"")}`}function ue(e){return e.split(" ").map(t=>t[0]).slice(0,2).join("")}function ne(e){return`<div class="progress" aria-label="${e}% complete"><span style="width:${e}%"></span></div>`}function O(e,t,a,i){return`<article class="stat-card ${i}"><div class="stat-icon">${c(a)}</div><span>${e}</span><strong>${t}</strong></article>`}function d(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ya(e){try{const t=new URL(String(e||""));return["http:","https:"].includes(t.protocol)?d(t.href):""}catch{return""}}function $a(e,t=0){const a=`block-${Date.now()}-${t}-${Math.random().toString(16).slice(2)}`;return e==="quiz"?{id:a,type:e,title:"Knowledge check",question:"",questionType:"Multiple choice",options:["","","",""],pairs:[{left:"",right:""},{left:"",right:""}],correctAnswer:0,feedback:"",points:5,required:!0,timeLimit:0,maxAttempts:2,randomize:!1,showAnswers:!0,partialCredit:!0,questionPool:"Current lesson",accommodationMultiplier:1.5}:e==="media"?{id:a,type:e,mediaType:"Video",title:"Learning media",url:"",caption:""}:{id:a,type:"text",title:"Lesson section",body:""}}function Sa(e=null){return e?structuredClone(e):{id:"",title:"",subject:"English Language Arts",className:s.selectedClass==="All"?Y[0].name:s.selectedClass,summary:"",status:"Draft",visibility:"Teacher only",dueDate:"",estimatedMinutes:30,points:20,allowLate:!0,requireOrder:!0,updatedAt:"Just now",blocks:[$a("text")]}}function h(e){s.toast=e,b()}function f(e,t=$().name,a=q().label){he.unshift({actor:a,event:e,scope:t,time:"Just now"})}function U(e,t,a=$().name,i="Live dashboard"){Q.unshift({id:`notice-${Date.now()}-${Math.random().toString(16).slice(2)}`,level:e,title:t,target:a,channel:i,read:!1})}function z(e,t,a){le.unshift({id:`live-${Date.now()}-${Math.random().toString(16).slice(2)}`,type:e,title:t,detail:a,time:"Just now"}),le.length>8&&(le.length=8)}function Ue(){return Q.filter(e=>!e.read).length}function wa(e="manual"){const t=$(),a=[()=>{const i=I[s.realtimeTick%I.length];i.attendance=Math.min(100,i.attendance+1),me.unshift([i.student,"attendance synced from SIS","Just now",i.className]),z("Roster",`${i.student} synced`,`Attendance is now ${i.attendance}% in ${i.className}.`),U("FYI",`${i.student} roster sync completed`,i.className,"SIS")},()=>{const i=F[s.realtimeTick%F.length];i.status=i.status==="Missing"?"Needs review":i.status,z("LMS",`${i.student} gradebook updated`,`${i.assignment} is ${i.status.toLowerCase()}.`),U("Action",`${i.student} submission needs attention`,i.assignment,"Teacher inbox")},()=>{const i=D.find(r=>r.id===s.activeConversationId)||D[0];i.messages.push({from:"them",text:`Live ${t.name} update received.`,time:"Now"}),i.preview="Live school update received.",i.unread=(i.unread||0)+1,z("Messages",`New message from ${i.name}`,"Conversation preview and unread count updated."),U("Urgent",`New message from ${i.name}`,t.name,"Messages")}];a[s.realtimeTick%a.length](),s.realtimeTick+=1,f(`Processed ${e} live update`,t.name,"Realtime service"),s.toast="Live app data updated.",b()}function q(){return C||B.find(e=>e.id===s.currentUser)||B[0]}function Pe(){return!["localhost","127.0.0.1","0.0.0.0"].includes(window.location.hostname)}function pe(e=q()){if(!e)return[];if((e.permissions||[]).includes("global-access"))return ke.map(i=>i.id);const t=new Set([e.landing]),a=new Set(e.permissions||[]);return e.scope==="state"&&t.add("state-admin"),["state","district"].includes(e.scope)&&t.add("district-admin"),["state","district","school"].includes(e.scope)&&/Admin$/i.test(e.role||"")&&t.add("school-admin"),a.has("lms")&&t.add("lms"),a.has("teacher-tools")&&t.add("teacher"),a.has("message")&&t.add("messages"),(a.has("approve-posts")||a.has("submit-post"))&&t.add("community"),a.has("student-missions")&&t.add("student"),ke.map(i=>i.id).filter(i=>t.has(i))}function He(){const e=new Set(pe());return ke.filter(t=>e.has(t.id))}function na(e,t="Signed in as"){if(!e)return;C={...B.find(r=>r.id===e.id),...e},s.currentUser=C.id,s.toast=`${t} ${C.label}.`,f("Signed in",$().name,C.label);const i=pe(C).includes(C.landing)?C.landing:pe(C)[0];Le(i||"student")}function Ks(e){if(!W("global-access"))return;const t=B.find(a=>a.id===e);!t||t.id===q().id||(we={...C},s.impersonatingFrom=C.id,C={...t},s.currentUser=t.id,s.toast=`Previewing the application as ${t.label}.`,f(`Started role preview as ${t.label}`,$().name,we.label),Le(t.landing||pe(t)[0]||"student"))}function Zs(){we&&(C=we,we=null,s.currentUser=C.id,s.impersonatingFrom="",s.toast="Returned to Global Admin.",Le("state-admin"))}function Xs(){const e=q().label;localStorage.removeItem("educonnect-session-token"),C=null,we=null,s.impersonatingFrom="",s.toast="",s.searchTerm="",Ce="",history.replaceState(null,"",window.location.pathname),b(),requestAnimationFrame(()=>{var t;return(t=document.querySelector("#landing-identifier"))==null?void 0:t.focus()}),console.info(`${e} signed out`)}function W(e){return q().permissions.includes(e)}function K(e,t="This role cannot use that action"){return W(e)?"":`disabled aria-disabled="true" title="${t}"`}function Me(e,t){return W(e)?"":`<div class="permission-note">${c("lock")} ${t}</div>`}function en(e){const t=[];return(!e||typeof e!="object")&&t.push("File must contain a JSON object."),(!(e!=null&&e.state)||typeof e.state!="object")&&t.push("Missing state object."),Array.isArray(e==null?void 0:e.tenantStates)||t.push("Missing tenantStates array."),Array.isArray(e==null?void 0:e.conversations)||t.push("Missing conversations array."),(!(e!=null&&e.communityBoards)||typeof e.communityBoards!="object")&&t.push("Missing communityBoards object."),t}function ia(){const e=window.location.hash.replace("#","");return e==="platform"?"state-admin":ke.some(t=>t.id===e)?e:""}function Le(e,t=!0){if(e==="platform"&&(e="state-admin"),!ke.some(a=>a.id===e)||!pe().includes(e)){C&&(s.toast="That workspace is not available for your role.");return}s.role=e,s.notificationsOpen=!1,s.settingsOpen=!1,t&&window.location.hash!==`#${e}`&&history.pushState(null,"",`#${e}`),b(),requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}))}function oe(e,t=""){t&&(s.toast=t),Le(e)}function Qe(){$s({icons:Ys,attrs:{"stroke-width":2.25}})}function De(){return se.find(e=>e.id===s.selectedState)||se[0]}function Se(){const e=De();return e.districts.find(t=>t.id===s.selectedDistrict)||e.districts[0]}function $(){const e=Se();return e.schools.find(t=>t.id===s.selectedSchool)||e.schools[0]}function tn(){const e=$(),t=new Set(pe());return[...He().map(a=>({label:a.label,detail:"Workspace",role:a.id})),...We.map(a=>({label:a.title,detail:`${a.subject} mission`,role:"student"})),...Y.map(a=>({label:a.name,detail:a.room,role:"teacher"})),...x.map(a=>({label:a.title,detail:`${a.type} in LMS`,role:"lms"})),...M.map(a=>({label:a.title,detail:`${a.status} ${a.subject} lesson`,role:"lms"})),...Ze.map(a=>({label:a.title,detail:a.meta,role:"parent"})),...D.map(a=>({label:a.name,detail:a.preview,role:"messages"})),...te().published.map(a=>({label:a.title,detail:`${a.type} post`,role:"community"})),{label:e.name,detail:`${e.category} school tenant`,role:"school-admin"}].filter(a=>t.has(a.role))}function an(){const e=s.searchTerm.trim().toLowerCase();if(!e)return"";const t=tn().filter(a=>`${a.label} ${a.detail}`.toLowerCase().includes(e)).slice(0,6);return`
    <section class="search-results" aria-label="Search results">
      <div><strong>${t.length?`Results for "${d(s.searchTerm)}"`:`No results for "${d(s.searchTerm)}"`}</strong><button class="text-button" data-clear-search>Clear</button></div>
      ${t.length?`<div class="search-result-list">${t.map(a=>`
        <button class="search-result" data-open-role="${a.role}">
          ${c("search")}
          <span><strong>${d(a.label)}</strong><small>${d(a.detail)}</small></span>
        </button>
      `).join("")}</div>`:""}
    </section>
  `}function sn(){const e=Pe(),t=$(),a=xe(),i=[["School leaders","Bring school news, staff support, and everyday planning together in one welcoming place.","shield-check"],["Teachers","Plan lessons, celebrate progress, share classroom updates, and stay close to families.","graduation-cap"],["Families","Follow learning, remember important dates, and keep in touch with the school community.","users"],["Students","Discover activities, continue learning adventures, and see accomplishments grow.","sparkles"]];return`
    <div class="landing-shell">
      <header class="landing-header">
        <a class="landing-brand" href="#top" aria-label="EduConnect home"><span>EC</span><strong>EduConnect</strong></a>
        <nav aria-label="Public navigation"><a href="#solutions">For everyone</a><a href="#trust">For schools</a><a href="#signin">Sign in</a></nav>
        <a class="primary-action landing-header-cta" href="#signin">Open your portal</a>
      </header>
      <main id="top">
        <section class="landing-hero">
          <div class="landing-hero-copy">
            <p class="eyebrow">A brighter school day, all in one place</p>
            <h1>Learning, families, and schools—connected.</h1>
            <p class="landing-lede">EduConnect makes it easier to learn, teach, share progress, and stay involved—whether you are in the classroom, at home, or on the go.</p>
            <div class="landing-actions"><a class="primary-action" href="#signin">Sign in ${c("chevron-right")}</a><a class="secondary-action" href="#solutions">See how EduConnect helps</a></div>
            <div class="landing-proof"><span>${c("book-open")} Made for learning</span><span>${c("users")} Brings families closer</span><span>${c("smartphone")} Works wherever you are</span></div>
          </div>
          <div class="landing-login-card" id="signin">
            <div class="landing-login-heading"><span class="landing-lock school-login-logo">${_e(a)}</span><div><p class="eyebrow">${d(t.name)} portal</p><h2>Welcome back</h2><p>${d(t.loginMessage||"Enter the sign-in details provided by your school.")}</p></div></div>
            ${Ce?`<div class="landing-error" role="alert">${c("alert-triangle")} ${d(Ce)}</div>`:""}
            <form id="landing-login-form">
              <label><span>School email or username</span><input id="landing-identifier" type="text" autocomplete="username" placeholder="Enter your school username" required /></label>
              <label><span>Password</span><input id="landing-password" type="password" autocomplete="current-password" placeholder="Enter your password" ${e?"required":""} /></label>
              <button class="primary-action landing-submit" type="submit" ${Re?"disabled":""}>${Re?"Signing in…":`${c("book-open")} Sign in`}</button>
            </form>
            <p class="landing-login-note">${e?"Need help signing in? Contact your school office or teacher.":"Local preview: use global-admin, state-admin, district-admin, school-admin, teacher, parent, or student. No password is required."}</p>
          </div>
        </section>
        <section class="landing-role-section" id="solutions">
          <div class="landing-section-heading"><p class="eyebrow">Made for the whole school community</p><h2>Everyone has a place to learn and connect.</h2><p>Simple, welcoming experiences help each person focus on what matters most in their school day.</p></div>
          <div class="landing-role-grid">${i.map(([r,u,v])=>`<article class="landing-role-card">${c(v)}<strong>${r}</strong><span>${u}</span></article>`).join("")}</div>
        </section>
        <section class="landing-trust" id="trust">
          <div><p class="eyebrow">Thoughtfully made for schools</p><h2>A calm, caring place to learn and connect.</h2><p>EduConnect keeps the school day organized without getting in the way, so people can spend more time teaching, learning, and encouraging one another.</p></div>
          <div class="landing-trust-grid"><article>${c("sparkles")}<strong>Joyful learning</strong><span>Friendly activities and clear progress help students feel proud of every step.</span></article><article>${c("users")}<strong>Closer families</strong><span>Updates and reminders make it easier for families to take part in learning.</span></article><article>${c("graduation-cap")}<strong>Helpful for teachers</strong><span>Everyday classroom work stays organized and easy to find.</span></article></div>
        </section>
      </main>
      <footer class="landing-footer"><a class="landing-brand" href="#top"><span>EC</span><strong>EduConnect</strong></a><p>Learning together. Growing together.</p><small>Made for students, families, teachers, and schools.</small></footer>
    </div>
  `}function te(){const e=$();return ce[e.id]||(ce[e.id]={approvers:[{id:`${e.id}-principal`,name:"Principal Office",title:"Principal",active:!0},{id:`${e.id}-assistant-principal`,name:"Assistant Principal",title:"Assistant Principal",active:!0}],published:[{id:`${e.id}-welcome`,author:"School Office",role:"Administrator",type:"Announcement",audience:"All families",title:`Welcome to ${e.name}`,body:"This board is reserved for administrator-approved school community updates.",media:"No media",time:"Approved"}],pending:[]}),ce[e.id]}function nn(e){return e.approvers.find(t=>t.active)||e.approvers[0]}function on(e,t){var a;return((a=e.approvers.find(i=>i.id===t))==null?void 0:a.name)||"Unassigned"}function xe(){const e=$();return ae[e.id]||(ae[e.id]={logo:ue(e.name).slice(0,1),logoUrl:"",crest:`${e.name} Crest`,primary:"#0050cb",accent:"#006b5f",highlight:"#735c00",background:"#f8f9ff",voice:"School-owned portal identity"}),ae[e.id]}function _e(e,t=""){const a=ya(e.logoUrl);return a?`<img class="school-logo-image ${t}" src="${a}" alt="${d(e.crest||$().name)} logo" />`:`<span class="${t}">${d(e.logo||ue($().name).slice(0,1))}</span>`}function ka(e){return`--primary:${e.primary};--primary-2:${e.primary};--teal:${e.accent};--gold:${e.highlight};--background:${e.background};`}function rn(){var a,i,r,u,v,p,L,T,j,G,A;const e=$(),t=(a=document.querySelector("#school-subdomain"))==null?void 0:a.value.trim().toLowerCase().replace(/[^a-z0-9-]+/g,"-").replace(/^-+|-+$/g,"");if(e.name=((i=document.querySelector("#school-name"))==null?void 0:i.value.trim())||e.name,e.subdomain=t||e.subdomain,e.category=((r=document.querySelector("#school-category"))==null?void 0:r.value)||e.category,e.plan=((u=document.querySelector("#school-plan"))==null?void 0:u.value.trim())||e.plan,e.theme=((v=document.querySelector("#school-theme"))==null?void 0:v.value.trim())||e.theme,e.workHours=((p=document.querySelector("#school-work-hours"))==null?void 0:p.value.trim())||e.workHours,e.customDomain=((L=document.querySelector("#school-custom-domain"))==null?void 0:L.value.trim().toLowerCase())||"",e.loginMessage=((T=document.querySelector("#school-login-message"))==null?void 0:T.value.trim())||"Welcome to your school learning portal.",e.storageQuota=Number(((j=document.querySelector("#school-storage-quota"))==null?void 0:j.value)||25),e.parentPortalEnabled=((G=document.querySelector("#school-parent-portal"))==null?void 0:G.checked)??!0,e.modules=Array.from(document.querySelectorAll("[data-school-module]:checked"),N=>N.value),e.customDomain){const N=k.domains.find(R=>R.schoolId===e.id);N?Object.assign(N,{domain:e.customDomain,dns:N.domain===e.customDomain?N.dns:"Awaiting DNS",ssl:N.domain===e.customDomain?N.ssl:"Pending",checkedAt:"Just now"}):k.domains.push({schoolId:e.id,domain:e.customDomain,dns:"Awaiting DNS",ssl:"Pending",checkedAt:"Just now"})}ae[e.id]={...xe(),logo:document.querySelector("#design-logo").value.trim()||ue(e.name).slice(0,1),logoUrl:((A=document.querySelector("#design-logo-url"))==null?void 0:A.value.trim())||"",crest:document.querySelector("#design-crest").value.trim()||`${e.name} Crest`,voice:document.querySelector("#design-voice").value.trim()||"School-owned portal identity",primary:document.querySelector("#design-primary").value,accent:document.querySelector("#design-accent").value,highlight:document.querySelector("#design-highlight").value,background:document.querySelector("#design-background").value}}function b(){if(!C){aa.innerHTML=sn(),ei(),Qe();return}const e=ke.find(i=>i.id===s.role),t=$(),a=xe();aa.innerHTML=`
    <div class="app ${s.compactMode?"compact-mode":""} ${s.highContrast?"high-contrast":""} ${s.fontScale==="Large"?"font-large":s.fontScale==="Extra large"?"font-extra-large":""} ${s.dyslexiaFriendly?"dyslexia-friendly":""} ${s.reducedMotion?"reduced-motion":""}" style="${ka(a)}">
      ${un(e,a)}
      <main class="workspace workspace-${s.role}">
        ${we?`<section class="impersonation-banner" role="status"><span>${c("eye")} Previewing as <strong>${d(q().label)}</strong> (${d(q().role)})</span><button type="button" data-stop-impersonating>Return to Global Admin</button></section>`:""}
        ${dn(t,a)}
        ${mn(e)}
        ${ln()}
        ${an()}
        ${s.role==="state-admin"?hn():""}
        ${s.role==="district-admin"?gn():""}
        ${s.role==="school-admin"?bn():""}
        ${s.role==="lms"?On():""}
        ${s.role==="student"?In():""}
        ${s.role==="teacher"?zn():""}
        ${s.role==="parent"?Fn():""}
        ${s.role==="messages"?Gn():""}
        ${s.role==="community"?Un():""}
      </main>
      ${pn()}
      ${cn()}
    </div>
  `,ti(),Qe(),Js()}function ln(){if(!s.tourOpen)return"";const e=be[s.tourStep]||be[0];return`
    <section class="tour-card" aria-label="Guided onboarding">
      <div>
        <p class="eyebrow">Walkthrough ${s.tourStep+1} of ${be.length}</p>
        <h3>${e.title}</h3>
        <p>${e.body}</p>
      </div>
      <div class="tour-actions">
        <button class="secondary-action" data-tour-prev ${s.tourStep===0?"disabled":""}>${c("chevron-right")} Back</button>
        <button class="primary-action" data-tour-next>${c("play")} ${s.tourStep===be.length-1?"Finish":"Next"}</button>
      </div>
    </section>
  `}function cn(){return`
    ${s.toast?`<div class="toast" role="status"><span>${d(s.toast)}</span><button class="icon-button" aria-label="Dismiss message" data-dismiss-toast>${c("x")}</button></div>`:""}
    ${s.notificationsOpen?`
      <aside class="utility-panel" aria-label="Notifications">
        <div class="section-heading"><h3>${qe("notifications")}</h3><button class="icon-button" aria-label="Close notifications" data-close-panel>${c("x")}</button></div>
        <div class="utility-actions">
          <button class="secondary-action" data-mark-notifications>${c("check")} Mark all read</button>
          <button class="secondary-action" data-simulate-live>${c("refresh-cw")} Simulate live update</button>
        </div>
        ${Q.length?Q.map(e=>`
          <article class="notice-row ${e.level.toLowerCase()} ${e.read?"read":""}">
            <strong>${e.level}</strong>
            <div><span>${e.title}</span><small>${e.target} • ${e.channel}</small></div>
            <button class="icon-button" aria-label="Dismiss ${d(e.title)}" data-dismiss-notification="${e.id}">${c("x")}</button>
          </article>
        `).join(""):'<div class="empty-state">No notifications.</div>'}
      </aside>
    `:""}
    ${s.settingsOpen?`
      <aside class="utility-panel" aria-label="Settings">
        <div class="section-heading"><h3>${qe("settings")}</h3><button class="icon-button" aria-label="Close settings" data-close-panel>${c("x")}</button></div>
        <label class="setting-field"><span>Language</span><select data-setting-select="language"><option ${s.language==="English"?"selected":""}>English</option><option ${s.language==="Spanish"?"selected":""}>Spanish</option></select></label>
        <label class="setting-field"><span>Text size</span><select data-setting-select="fontScale"><option ${s.fontScale==="Normal"?"selected":""}>Normal</option><option ${s.fontScale==="Large"?"selected":""}>Large</option><option ${s.fontScale==="Extra large"?"selected":""}>Extra large</option></select></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="compactMode" ${s.compactMode?"checked":""} /><span>Compact dashboard density</span></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="highContrast" ${s.highContrast?"checked":""} /><span>High contrast panels</span></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="dyslexiaFriendly" ${s.dyslexiaFriendly?"checked":""} /><span>Dyslexia-friendly type</span></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="reducedMotion" ${s.reducedMotion?"checked":""} /><span>Reduce motion</span></label>
        <div class="notification-preferences"><strong>Notification preferences</strong>
          <label class="toggle-row"><input type="checkbox" data-notification-preference="email" ${s.notificationPreferences.email?"checked":""} /><span>Email</span></label>
          <label class="toggle-row"><input type="checkbox" data-notification-preference="sms" ${s.notificationPreferences.sms?"checked":""} /><span>SMS</span></label>
          <label class="toggle-row"><input type="checkbox" data-notification-preference="push" ${s.notificationPreferences.push?"checked":""} /><span>Push notifications</span></label>
          <label class="setting-field"><span>Remind me before due dates</span><select data-notification-days><option value="1" ${s.notificationPreferences.dueDays===1?"selected":""}>1 day</option><option value="2" ${s.notificationPreferences.dueDays===2?"selected":""}>2 days</option><option value="7" ${s.notificationPreferences.dueDays===7?"selected":""}>1 week</option></select></label>
          <button class="secondary-action" type="button" data-send-preference-test>${c("bell")} Send test notification</button>
        </div>
        <button class="secondary-action" data-export-demo>${c("download")} Export JSON File</button>
        <label class="secondary-action import-action">${c("file-text")} Import JSON File<input type="file" id="import-demo-state" accept="application/json" /></label>
      </aside>
    `:""}
  `}function dn(e,t){return`
    <section class="tenant-bar" aria-label="Current tenant">
      <div>
        ${_e(t,"school-logo-mini")}
        <span class="tenant-label">Tenant</span>
        <strong>${e.name}</strong>
        <em>${e.category} school</em>
        <em>${e.subdomain}.educonnect.local</em>
        <em>${e.workHours}</em>
      </div>
      <div class="tenant-path">
        <span>${De().name}</span>
        <span>${Se().name}</span>
          <span>${e.name}</span>
          <span>${e.plan}</span>
        </div>
    </section>
  `}function un(e,t){return`
    <aside class="sidebar">
      <div class="brand-row">
        ${_e(t,"brand-mark")}
        <div><h1>${t.crest}</h1><p>${t.voice}</p></div>
      </div>
      <nav class="role-nav" aria-label="Portal views">
        ${He().map(a=>`<a class="nav-item ${s.role===a.id?"active":""}" href="#${a.id}" data-role="${a.id}" ${s.role===a.id?'aria-current="page"':""}>${c(a.icon)}<span>${a.label}</span></a>`).join("")}
      </nav>
      <div class="reference-card">
        <img src="${Qs(e.image)}" alt="" />
        <div><strong>Stitch reference</strong><span>Visual source</span></div>
      </div>
    </aside>
  `}function pn(){return`
    <nav class="mobile-role-nav" aria-label="Mobile portal views">
      ${He().map(e=>`<a class="mobile-nav-item ${s.role===e.id?"active":""}" href="#${e.id}" data-role="${e.id}" ${s.role===e.id?'aria-current="page"':""}>${c(e.icon)}<span>${e.label}</span></a>`).join("")}
    </nav>
  `}function mn(e){const t=e.id==="messages"?"Communication Hub":e.id==="state-admin"?"State Governance":e.id==="district-admin"?"District Operations":e.id==="school-admin"?"School Administration":`${e.label} Dashboard`;return`
    <header class="topbar">
      <div><p class="eyebrow">${e.label} workspace</p><h2>${t}</h2></div>
      <div class="topbar-actions">
        <label class="searchbox">${c("search")}<input id="global-search" value="${d(s.searchTerm)}" placeholder="Search resources..." /></label>
        ${W("manage-users")&&pe().includes("state-admin")?`<button class="secondary-action role-controls-action" data-role-controls type="button">${c("users")} Role controls</button>`:""}
        ${W("manage-users")&&pe().includes("school-admin")?`<button class="secondary-action school-customization-action" data-school-customization type="button">${c("settings")} School design</button>`:""}
        <div class="account-chip"><span>${ue(q().label)}</span><div><strong>${q().label}</strong><small>${q().role}</small></div></div>
        ${Pe()?"":`<button class="secondary-action reset-action" data-reset-demo type="button">${c("rotate-ccw")} Reset Demo</button>`}
        <button class="icon-button" aria-label="Notifications" data-toggle-notifications>${c("bell")}${Ue()?`<span class="status-dot">${Ue()}</span>`:""}</button>
        <button class="icon-button" aria-label="Settings" data-toggle-settings>${c("settings")}</button>
        <button class="icon-button" aria-label="Sign out" data-sign-out>${c("x")}</button>
      </div>
    </header>
  `}function hn(){const e=De(),t=e.districts,a=t.flatMap(r=>r.schools),i=a.filter(r=>r.status==="Active").length;return`
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">State admin workspace</p>
          <h2>Tenant Governance</h2>
          <p>State administrators supervise districts, compliance, tenant standards, statewide calendars, and cross-district readiness.</p>
        </div>
        <div class="inline-actions">
          <button class="secondary-action" data-open-role="district-admin">${c("building-2")} Review Districts</button>
          <button class="primary-action" data-add-school ${K("manage-tenants","Only state and district admins can add school tenants.")}>${c("plus")} Add School Tenant</button>
        </div>
      </div>
      ${Me("manage-tenants","Tenant creation and district configuration are admin-only in this demo.")}
      ${O("Districts",t.length,"building-2","blue")}
      ${O("Schools",a.length,"graduation-cap","teal")}
      ${O("Active tenants",i,"shield-check","gold")}
      ${yn()}
      ${Aa()}
      ${tt()}
      <section class="panel state-management-panel">
        <div class="section-heading"><h3>District Oversight</h3><span>${e.name}</span></div>
        <div class="management-list">
          ${t.map(r=>`
            <button class="management-row ${r.id===Se().id?"active":""}" data-manage-district="${r.id}">
              <div class="management-icon">${c("building-2")}</div>
              <div><strong>${r.name}</strong><small>${r.region} • Superintendent: ${r.superintendent}</small></div>
              <span>${r.schools.length} schools</span>
            </button>
          `).join("")}
        </div>
      </section>
      ${La()}
      <section class="panel audit-panel">
        <div class="section-heading"><h3>Audit Trail</h3><span>Cross-tenant accountability</span></div>
        <div class="audit-list">
          ${he.map(r=>`
            <article class="audit-row">
              ${c("clipboard-check")}
              <div><strong>${r.event}</strong><small>${r.actor} • ${r.scope}</small></div>
              <time>${r.time}</time>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="panel calendar-panel">
        <div class="section-heading"><h3>Statewide Calendar</h3><span>Policy, reporting, and public events</span></div>
        <div class="calendar-list">
          ${da.map(r=>`<article class="calendar-row"><div class="calendar-date">${r.date}</div><div><strong>${r.title}</strong><small>${r.audience} • ${r.type}</small></div></article>`).join("")}
        </div>
      </section>
      <section class="panel hierarchy-panel">
        <div class="section-heading"><h3>Governance Chain</h3><span>State to classroom</span></div>
        <div class="hierarchy-list">
          ${ws.map(([r,u],v)=>`<article class="hierarchy-level"><div class="level-number">${v+1}</div><div><h4>${r}</h4><p>${u.join(" • ")}</p></div></article>`).join("")}
        </div>
      </section>
      ${$n()}
    </section>
  `}function gn(){const e=De(),t=Se(),a=t.schools,i=a.reduce((u,v)=>u+v.students,0),r=a.reduce((u,v)=>u+v.staff,0);return`
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">District admin workspace</p>
          <h2>${t.name}</h2>
          <p>District administrators manage school tenants, staffing, rollout readiness, district messages, and cross-school performance.</p>
        </div>
        <button class="primary-action" data-add-school ${K("manage-tenants","Only district and state admins can add school tenants.")}>${c("plus")} Add School Tenant</button>
      </div>
      ${O("Schools",a.length,"graduation-cap","blue")}
      ${O("Students",i.toLocaleString(),"users","teal")}
      ${O("Staff",r.toLocaleString(),"shield-check","gold")}
      <section class="panel tenant-controls">
        <div class="section-heading"><h3>District Scope</h3><span>${e.name}</span></div>
        <div class="tenant-selectors">
          <label><span>State</span><select id="state-filter">${se.map(u=>`<option value="${u.id}" ${s.selectedState===u.id?"selected":""}>${u.name}</option>`).join("")}</select></label>
          <label><span>District</span><select id="district-filter">${e.districts.map(u=>`<option value="${u.id}" ${t.id===u.id?"selected":""}>${u.name}</option>`).join("")}</select></label>
        </div>
      </section>
      <section class="panel district-management-panel">
        <div class="section-heading"><h3>Schools In This District</h3><span>${t.region}</span></div>
        <div class="management-list">
          ${a.map(u=>`<button class="management-row ${u.id===$().id?"active":""}" data-manage-school="${u.id}"><div class="management-icon">${c("graduation-cap")}</div><div><strong>${u.name}</strong><small>${u.category} • ${u.subdomain}.educonnect.local</small></div><span>${u.status}</span></button>`).join("")}
        </div>
      </section>
      ${Aa()}
      ${tt()}
      <section class="panel audit-panel">
        <div class="section-heading"><h3>District Audit Trail</h3><span>School and staff actions</span></div>
        <div class="audit-list">${he.map(u=>`<article class="audit-row">${c("clipboard-check")}<div><strong>${u.event}</strong><small>${u.actor} • ${u.scope}</small></div><time>${u.time}</time></article>`).join("")}</div>
      </section>
    </section>
  `}function vn(){const e=$(),t=xe(),a=Se();return`
    <section class="panel school-customization-panel" id="school-customization" aria-labelledby="school-customization-title">
      <div class="section-heading customization-heading">
        <div><p class="eyebrow">School-owned experience</p><h3 id="school-customization-title">School Customization</h3><p>Update this school's identity, instance details, logo, colors, and portal voice.</p></div>
        <span>${W("manage-users")?"Editable":"Read-only"}</span>
      </div>
      ${W("manage-tenants")?`<label class="customization-school-picker"><span>Customize school</span><select id="customization-school-filter">${a.schools.map(i=>`<option value="${i.id}" ${i.id===e.id?"selected":""}>${d(i.name)}</option>`).join("")}</select></label>`:""}
      <div class="design-studio school-customization-studio">
        <div class="brand-preview-card school-brand-preview" style="${ka(t)}">
          <div class="brand-preview-top">
            ${_e(t,"brand-preview-logo")}
            <div><strong>${d(t.crest)}</strong><span>${d(e.customDomain||`${e.subdomain}.educonnect.local`)}</span></div>
          </div>
          <div><span class="preview-school-type">${d(e.category)} • ${d(e.plan)}</span><h4>${d(e.name)}</h4><p>${d(t.voice)}</p></div>
          <div class="preview-color-row" aria-label="Current school colors"><span style="background:${t.primary}" title="Primary"></span><span style="background:${t.accent}" title="Accent"></span><span style="background:${t.highlight}" title="Highlight"></span><span style="background:${t.background}" title="Background"></span></div>
          <div class="brand-preview-actions"><button data-open-role="parent" type="button">Family Portal</button><button data-open-role="lms" type="button">LMS</button><button data-open-role="community" type="button">Community</button></div>
        </div>
        <form class="design-form customization-form" id="design-form">
          <div class="form-section-heading span-2"><strong>School identity</strong><span>Name and portal instance</span></div>
          <label class="span-2"><span>School name</span><input id="school-name" value="${d(e.name)}" required /></label>
          <label><span>Instance slug</span><div class="input-suffix"><input id="school-subdomain" value="${d(e.subdomain)}" required /><em>.educonnect.local</em></div></label>
          <label><span>School type</span><select id="school-category"><option ${e.category==="Public"?"selected":""}>Public</option><option ${e.category==="Private"?"selected":""}>Private</option><option ${e.category==="Chartered"?"selected":""}>Chartered</option></select></label>
          <label><span>Plan name</span><input id="school-plan" value="${d(e.plan)}" /></label>
          <label><span>Theme name</span><input id="school-theme" value="${d(e.theme)}" /></label>
          <label class="span-2"><span>School work hours</span><input id="school-work-hours" value="${d(e.workHours)}" /></label>
          <label class="span-2"><span>Custom domain</span><input type="text" id="school-custom-domain" value="${d(e.customDomain||"")}" placeholder="learn.yourschool.org" /></label>
          <label class="span-2"><span>Login welcome message</span><textarea id="school-login-message" placeholder="Welcome students and families...">${d(e.loginMessage||"Welcome to your school learning portal.")}</textarea></label>
          <label><span>Storage quota (GB)</span><input type="number" id="school-storage-quota" min="1" max="500" value="${e.storageQuota||25}" /></label>
          <label class="toggle-field"><input type="checkbox" id="school-parent-portal" ${e.parentPortalEnabled!==!1?"checked":""} /><span>Enable family portal</span></label>
          <fieldset class="module-selector span-2"><legend>Enabled modules</legend>${["LMS","Assignments","Quizzes","Messages","Community","Parent portal"].map(i=>`<label><input type="checkbox" data-school-module value="${i}" ${(e.modules||["LMS","Assignments","Quizzes","Messages","Community","Parent portal"]).includes(i)?"checked":""} /><span>${i}</span></label>`).join("")}</fieldset>
          <div class="form-section-heading span-2"><strong>Logo and voice</strong><span>Use a short mark or an image URL</span></div>
          <label><span>Logo mark</span><input id="design-logo" maxlength="3" value="${d(t.logo)}" /></label>
          <label><span>Crest / logo name</span><input id="design-crest" value="${d(t.crest)}" /></label>
          <label class="span-2"><span>Logo image URL</span><input type="url" id="design-logo-url" value="${d(t.logoUrl||"")}" placeholder="https://school.edu/logo.png" /></label>
          <label class="span-2"><span>School voice</span><input id="design-voice" value="${d(t.voice)}" /></label>
          <div class="form-section-heading span-2"><strong>Portal colors</strong><span>Applied throughout the selected school experience</span></div>
          <label><span>Primary buttons</span><input type="color" id="design-primary" value="${t.primary}" /></label>
          <label><span>Accent</span><input type="color" id="design-accent" value="${t.accent}" /></label>
          <label><span>Highlight</span><input type="color" id="design-highlight" value="${t.highlight}" /></label>
          <label><span>Page background</span><input type="color" id="design-background" value="${t.background}" /></label>
          <div class="customization-form-actions span-2"><button class="secondary-action" type="button" data-reset-school-design>Reset colors</button><button class="primary-action" type="submit" ${K("manage-users","Only school administrators can customize the school experience.")}>${c("check")} Save school customization</button></div>
        </form>
      </div>
      <div class="theme-presets"><div><strong>Theme presets</strong><span>Start with a coordinated school palette.</span></div><div class="palette-list">${Ye.map(i=>`<button class="palette-button ${e.theme===i.name?"active":""}" data-design-preset="${i.name}" type="button"><span style="background:${i.primary}"></span><span style="background:${i.accent}"></span><span style="background:${i.highlight}"></span><strong>${i.name}</strong></button>`).join("")}</div></div>
      ${Me("manage-users","School branding is managed by authorized administrators.")}
    </section>
  `}function bn(){const e=$(),t=te(),a=I.filter(r=>r.status==="Watch").length,i=F.filter(r=>r.status!=="Reviewed").length;return`
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">School admin workspace</p>
          <h2>${e.name}</h2>
          <p>School administrators run campus operations: users, safety messaging, approvals, LMS visibility, roster health, and family communication windows.</p>
        </div>
        <div class="inline-actions"><button class="secondary-action" data-school-customization type="button">${c("settings")} Customize school</button><button class="primary-action" data-open-role="community">${c("megaphone")} Review Community Posts</button></div>
      </div>
      ${O("Students",e.students.toLocaleString(),"users","blue")}
      ${O("Staff",e.staff.toLocaleString(),"shield-check","teal")}
      ${O("Pending approvals",t.pending.length,"clipboard-check","gold")}
      ${vn()}
      ${fn()}
      <section class="panel instance-panel">
        <div class="section-heading"><h3>Campus Tenant</h3><span>${e.status}</span></div>
        <div class="instance-card">
          <div><span>Instance URL</span><strong>${e.subdomain}.educonnect.local</strong></div>
          <div><span>Plan</span><strong>${e.plan}</strong></div>
          <div><span>Work hours</span><strong>${e.workHours}</strong></div>
          <div><span>Messages</span><strong>${e.messages}</strong></div>
          <div><span>Roster watch</span><strong>${a}</strong></div>
          <div><span>Submissions</span><strong>${i} pending</strong></div>
        </div>
      </section>
      <section class="panel permissions-panel">
        <div class="section-heading"><h3>School Operations</h3><span>LMS, messages, approvals</span></div>
        <div class="permission-table">
          <button class="permission-row" data-open-role="lms"><strong>LMS</strong><span>Assignments and gradebook</span><small>${x.length} assignments</small></button>
          <button class="permission-row" data-open-role="messages"><strong>Messages</strong><span>Family and staff communication</span><small>${D.reduce((r,u)=>r+(u.unread||0),0)} unread</small></button>
          <button class="permission-row" data-open-role="community"><strong>Community</strong><span>Approval queue and published posts</span><small>${t.pending.length} pending</small></button>
        </div>
      </section>
      ${La()}
      ${tt()}
    </section>
  `}function fn(){const e=$(),t=k.enrollmentImports.filter(a=>a.schoolId===e.id);return`<section class="panel enrollment-center-panel"><div class="section-heading"><div><p class="eyebrow">Roster operations</p><h3>Enrollment Center</h3></div><span>${I.length} active learners</span></div><div class="enrollment-grid"><form id="enrollment-import-form" class="enrollment-import-card"><h4>Import roster</h4><p>Upload a OneRoster or CSV file, validate students and guardians, then stage changes before enrollment.</p><label class="upload-drop">${c("paperclip")} Choose CSV or OneRoster file<input id="enrollment-file" type="file" accept=".csv,application/json" required/></label><select id="enrollment-role" aria-label="Import record type"><option>Students and guardians</option><option>Staff</option><option>Classes and enrollments</option></select><button class="primary-action" type="submit">Validate and import</button></form><div class="enrollment-history"><div class="section-heading"><h4>Import history</h4><span>${t.length}</span></div>${t.map(a=>`<article><div><strong>${d(a.file)}</strong><small>${a.createdAt} • ${a.rows} rows</small></div><span>${a.accepted} accepted</span><em>${a.needsReview} review</em></article>`).join("")||'<div class="empty-state">No roster imports for this school.</div>'}</div></div><div class="enrollment-actions"><button class="secondary-action" type="button" data-export-roster>${c("download")} Export OneRoster CSV</button><button class="secondary-action" type="button" data-send-enrollment-invites>${c("send")} Send account invitations</button><span>Transfers and deactivations preserve audit history.</span></div></section>`}function yn(){const e={"state-admin":"Statewide governance, district oversight, compliance, and policy","district-admin":"School tenants, shared calendars, roster health, and district analytics","school-admin":"Campus users, family access, safety, approvals, and operations",lms:"Assignments, gradebook, learning files, and classroom integrations",student:"Personal learning missions, progress, and approved resources",teacher:"Classes, assignments, grading, messages, and community submissions",parent:"Linked learner progress, deadlines, approved posts, and messages",messages:"Authorized family, staff, and school conversations",community:"School announcements, submissions, approvals, and published updates"},t=He();return`
    <section class="panel users-roles-panel role-control-center" id="role-control-center" aria-labelledby="role-control-title">
      <div class="section-heading role-control-heading">
        <div><p class="eyebrow">Global administration</p><h3 id="role-control-title">Role Control Center</h3></div>
        <span>${W("manage-users")?"Permissions editable":"Read-only"}</span>
      </div>
      <p class="role-control-intro">Open role-based workspaces, review their access boundaries, and manage account permissions from one place.</p>
      <div class="role-control-launcher" aria-label="Role workspaces">
        ${t.map(a=>`
          <button class="role-control-card" type="button" data-open-role="${a.id}">
            <span class="role-control-icon">${c(a.icon)}</span>
            <span><strong>${a.label}</strong><small>${e[a.id]}</small></span>
            <em>Open workspace ${c("chevron-right")}</em>
          </button>
        `).join("")}
      </div>
      <div class="section-heading account-access-heading"><h4>Account access</h4><span>${B.length} profiles</span></div>
      <div class="users-grid">
        ${B.map(a=>`
          <article class="user-role-card">
            <div><strong>${a.label}</strong><small>${a.role} • ${a.scope||"global"} scope • lands on ${a.landing}</small></div>
            ${W("global-access")&&a.id!==q().id?`<button class="secondary-action impersonate-action" type="button" data-impersonate-profile="${a.id}">${c("eye")} Preview as this user</button>`:""}
            <div class="permission-chip-list">
              ${Ss.map(([i,r])=>`
                <label class="permission-chip ${a.permissions.includes(i)?"active":""}">
                  <input type="checkbox" data-profile-permission="${a.id}:${i}" ${a.permissions.includes(i)?"checked":""} ${W("manage-users")?"":"disabled"} />
                  <span>${r}</span>
                </label>
              `).join("")}
            </div>
          </article>
        `).join("")}
      </div>
      ${Me("manage-users","Only administrators can change role permissions.")}
    </section>
  `}function tt(){return`
    <section class="panel realtime-panel">
      <div class="section-heading">
        <div><h3>Realtime Operations</h3><span>${s.liveUpdates?"Live updates enabled":"Live updates paused"}</span></div>
        <div class="inline-actions">
          <label class="mini-toggle"><input type="checkbox" data-toggle-live ${s.liveUpdates?"checked":""} /><span>Live</span></label>
          <button class="secondary-action" data-simulate-live>${c("refresh-cw")} Simulate Update</button>
        </div>
      </div>
      <div class="realtime-list">
        ${le.map(e=>`
          <article class="realtime-row">
            <strong>${e.type}</strong>
            <div><span>${e.title}</span><small>${e.detail}</small></div>
            <time>${e.time}</time>
          </article>
        `).join("")}
      </div>
    </section>
  `}function Aa(){const e=$(),t=te(),a=Math.round(I.reduce((p,L)=>p+L.grade,0)/I.length),i=I.filter(p=>p.status==="Watch").length,r=F.filter(p=>p.status!=="Reviewed").length,u=D.reduce((p,L)=>p+(L.unread||0),0),v=[{role:"lms",label:"LMS",iconName:"layers",metric:`${M.length} lessons`,detail:`${x.length} assignments • ${r} need review`},{role:"student",label:"Students",iconName:"sparkles",metric:`${I.length} learners`,detail:`${i} students on watch status`},{role:"teacher",label:"Teachers",iconName:"graduation-cap",metric:`${Y.length} classes`,detail:`${me.length} activity events in the feed`},{role:"parent",label:"Parents",iconName:"users",metric:`${Ze.length} deadlines`,detail:`${s.checkedDeadlines.length} family tasks checked`},{role:"messages",label:"Messages",iconName:"message-circle",metric:`${u} unread`,detail:`${D.length} parent and group threads`},{role:"community",label:"Community",iconName:"megaphone",metric:`${t.pending.length} pending`,detail:`${t.published.length} approved posts live`}];return`
    <section class="panel unified-os-panel">
      <div class="section-heading">
        <div><p class="eyebrow">One integrated system</p><h3>Unified School Operating System</h3></div>
        <span>${e.name}</span>
      </div>
      <div class="unified-os-grid">
        ${v.map(p=>`
          <button class="module-hub-card" data-open-role="${p.role}">
            <span class="module-hub-icon">${c(p.iconName)}</span>
            <span><strong>${p.label}</strong><small>${p.detail}</small></span>
            <em>${p.metric}</em>
          </button>
        `).join("")}
      </div>
      <div class="system-snapshot-grid">
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Students + LMS</h4><button class="text-button" data-open-role="lms">Open LMS ${c("chevron-right")}</button></div>
          <div class="snapshot-metrics">
            <span><strong>${a}%</strong><small>Average roster grade</small></span>
            <span><strong>${r}</strong><small>Submissions in queue</small></span>
            <span><strong>${s.offlinePackReady?"Ready":"Build"}</strong><small>Offline learning pack</small></span>
          </div>
          ${F.slice(0,3).map(p=>`<div class="snapshot-row"><strong>${p.student}</strong><span>${p.assignment}</span><em>${p.status}</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Teachers + Classes</h4><button class="text-button" data-open-role="teacher">Open Teacher ${c("chevron-right")}</button></div>
          ${Y.map(p=>`<div class="snapshot-row"><strong>${p.name}</strong><span>${p.room}</span><em>${p.pending} pending</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Parents + Messages</h4><button class="text-button" data-open-role="messages">Open Messages ${c("chevron-right")}</button></div>
          ${D.slice(0,3).map(p=>`<div class="snapshot-row"><strong>${p.name}</strong><span>${p.preview}</span><em>${p.unread||0} unread</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Admin + Community</h4><button class="text-button" data-open-role="community">Open Community ${c("chevron-right")}</button></div>
          <div class="snapshot-metrics">
            <span><strong>${t.pending.length}</strong><small>Approval queue</small></span>
            <span><strong>${Ue()}</strong><small>Unread alerts</small></span>
            <span><strong>${he.length}</strong><small>Audit entries</small></span>
          </div>
          ${le.slice(0,2).map(p=>`<div class="snapshot-row"><strong>${p.type}</strong><span>${p.title}</span><em>${p.time}</em></div>`).join("")}
        </article>
      </div>
    </section>
  `}function $n(){const e=ye.filter(a=>a.done).length,t=$e.filter(a=>a.done).length;return`
    <section class="panel production-panel">
      <div class="section-heading">
        <div><p class="eyebrow">Production operations</p><h3>Launch Control</h3></div>
        <span>${s.gatewayMode==="demo"?"Demo mode":"Backend-ready mode"}</span>
      </div>
      <div class="production-grid">
        <article class="production-card gateway-card">
          <div class="section-heading"><h4>Public Login Gateway</h4><span>${s.authProvider}</span></div>
          <label><span>Auth mode</span><select id="auth-provider"><option ${s.authProvider==="Role-based demo auth"?"selected":""}>Role-based demo auth</option><option ${s.authProvider==="Supabase Auth"?"selected":""}>Supabase Auth</option><option ${s.authProvider==="Firebase Auth"?"selected":""}>Firebase Auth</option></select></label>
          <label><span>Backend provider</span><select id="backend-provider"><option ${s.backendProvider==="Supabase"?"selected":""}>Supabase</option><option ${s.backendProvider==="Firebase"?"selected":""}>Firebase</option><option ${s.backendProvider==="Custom API"?"selected":""}>Custom API</option></select></label>
          <div class="gateway-actions">
            <button class="secondary-action" data-set-gateway="demo">${c("play")} Demo Mode</button>
            <button class="primary-action" data-set-gateway="backend">${c("database")} Backend Ready</button>
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Database Blueprint</h4><button class="text-button" data-provision-schema>Provision mock schema</button></div>
          <div class="schema-list">
            ${Ae.map(a=>`<div class="schema-row"><strong>${a.name}</strong><span>${a.records} records</span><em>${a.status}</em><small>${a.detail}</small></div>`).join("")}
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Admin Onboarding</h4><span>${e}/${ye.length} complete</span></div>
          <div class="checklist-list">
            ${ye.map(a=>`<label class="checklist-row"><input type="checkbox" data-onboarding-task="${a.id}" ${a.done?"checked":""} /><span class="custom-check">${a.done?c("check"):""}</span><span><strong>${a.label}</strong><small>${a.owner}</small></span></label>`).join("")}
          </div>
          <form id="onboarding-user-form" class="mini-form">
            <input id="onboarding-user-name" placeholder="Invite user name" />
            <select id="onboarding-user-role"><option>Teacher</option><option>Parent</option><option>Student</option><option>Admin</option></select>
            <button class="secondary-action" type="submit">${c("plus")} Invite</button>
          </form>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>File Uploads</h4><span>${H.length} files</span></div>
          <label class="upload-drop">${c("paperclip")} Add assignment, PDF, image, or community file<input type="file" id="production-file-upload" multiple /></label>
          <div class="upload-list">
            ${H.map(a=>`<div class="upload-row"><strong>${a.name}</strong><span>${a.area} • ${a.size}</span><em>${a.status}</em></div>`).join("")}
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Notification Delivery</h4><button class="text-button" data-send-delivery-test>Send test batch</button></div>
          ${J.map(a=>`<div class="delivery-row"><strong>${a.channel}</strong><span>${a.audience}</span><em>${a.status}</em><small>${a.detail}</small></div>`).join("")}
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Privacy & Security</h4><span>${t}/${$e.length} ready</span></div>
          <div class="checklist-list">
            ${$e.map(a=>`<label class="checklist-row"><input type="checkbox" data-security-check="${a.id}" ${a.done?"checked":""} /><span class="custom-check">${a.done?c("check"):""}</span><span><strong>${a.label}</strong><small>${a.status}</small></span></label>`).join("")}
          </div>
        </article>

        <article class="production-card deploy-card">
          <div class="section-heading"><h4>Deployment Pipeline</h4><span>Hostinger live</span></div>
          ${ze.map(a=>`<div class="pipeline-row"><strong>${a.step}</strong><span>${a.detail}</span><em class="${a.status.toLowerCase()}">${a.status}</em></div>`).join("")}
        </article>
      </div>
      ${Sn()}
    </section>
  `}function Sn(){const e=k,t=Math.round(e.storage.usedGb/e.storage.quotaGb*100);return`<div class="operations-command-center">
    <div class="section-heading"><div><p class="eyebrow">Production readiness</p><h3>Platform Operations Center</h3></div><span>${e.monitors.every(a=>a.status==="Operational")?"All systems operational":"Attention required"}</span></div>
    <div class="operations-tabs" role="tablist">${[["tenants","Tenants & domains"],["security","Security & backups"],["notifications","Notifications"],["monitoring","Monitoring"]].map(([a,i])=>`<button type="button" role="tab" aria-selected="${s.activeOperationsTab===a}" class="${s.activeOperationsTab===a?"active":""}" data-operations-tab="${a}">${i}</button>`).join("")}</div>
    ${s.activeOperationsTab==="tenants"?`<div class="operations-grid">
      <article class="operations-card"><div class="section-heading"><h4>Tenant isolation</h4><span>${e.tenantIsolation.status}</span></div><p>${e.tenantIsolation.strategy}</p><div class="operations-metric"><strong>${se.flatMap(a=>a.districts).flatMap(a=>a.schools).length}</strong><span>school databases</span></div><button class="secondary-action" type="button" data-run-isolation-test>${c("shield-check")} Test isolation</button></article>
      <article class="operations-card"><div class="section-heading"><h4>Tenant media storage</h4><span>${t}% used</span></div>${ne(t)}<p>${e.storage.usedGb} GB of ${e.storage.quotaGb} GB • file validation active • compression and thumbnails: ${e.storage.compression}</p><button class="secondary-action" type="button" data-optimize-storage>${c("database")} Optimize media</button></article>
      <article class="operations-card domain-operations"><div class="section-heading"><h4>Domains & SSL</h4><span>${e.domains.filter(a=>a.ssl==="Active").length}/${e.domains.length} active</span></div>${e.domains.map(a=>`<div class="domain-row"><div><strong>${d(a.domain)}</strong><small>${a.dns} • SSL ${a.ssl}</small></div><button class="text-button" type="button" data-verify-domain="${a.schoolId}">Verify</button></div>`).join("")}</article>
      <article class="operations-card"><div class="section-heading"><h4>Plans & billing</h4><span>${e.billing.status}</span></div><div class="operations-metric"><strong>$${e.billing.monthlyEstimate}</strong><span>estimated monthly</span></div><p>${e.billing.schools} schools on ${e.billing.plan}. No premium classroom paywall.</p></article>
    </div>`:""}
    ${s.activeOperationsTab==="security"?`<div class="operations-grid">
      <article class="operations-card"><div class="section-heading"><h4>Authentication</h4><span>${e.security.mfaRequired?"MFA required":"MFA optional"}</span></div><label class="toggle-row"><input type="checkbox" data-security-setting="mfaRequired" ${e.security.mfaRequired?"checked":""}/><span>Require MFA for administrators</span></label><label class="toggle-row"><input type="checkbox" data-security-setting="loginAlerts" ${e.security.loginAlerts?"checked":""}/><span>Send new-login alerts</span></label><label class="setting-field"><span>Idle session timeout</span><select data-session-timeout><option value="30" ${e.security.sessionTimeoutMinutes===30?"selected":""}>30 minutes</option><option value="60" ${e.security.sessionTimeoutMinutes===60?"selected":""}>60 minutes</option><option value="480" ${e.security.sessionTimeoutMinutes===480?"selected":""}>8 hours</option></select></label></article>
      <article class="operations-card"><div class="section-heading"><h4>Active sessions</h4><span>${e.security.activeSessions.length}</span></div>${e.security.activeSessions.map(a=>`<div class="session-row"><div><strong>${d(a.user)}</strong><small>${d(a.device)} • ${d(a.location)} • ${a.lastActive}</small></div>${a.current?"<span>Current</span>":`<button class="text-button" data-revoke-session="${a.id}">Revoke</button>`}</div>`).join("")}</article>
      <article class="operations-card"><div class="section-heading"><h4>Backups & recovery</h4><span>${e.backups.encrypted?"Encrypted":"Review"}</span></div><p>${e.backups.schedule} • ${e.backups.retentionDays}-day retention</p><p>Last backup: ${e.backups.lastBackup}<br/>Restore drill: ${e.backups.lastRestoreTest}</p><div class="inline-actions"><button class="secondary-action" type="button" data-create-backup>Create backup</button><button class="secondary-action" type="button" data-test-restore>Test restore</button></div></article>
      <article class="operations-card"><div class="section-heading"><h4>Accessibility assurance</h4><span>${e.accessibility.score}/100</span></div><p>${e.accessibility.wcagTarget} • ${e.accessibility.issues} open issues • ${e.accessibility.languages.join(" + ")}</p><button class="secondary-action" type="button" data-run-accessibility-audit>${c("check")} Run accessibility audit</button></article>
    </div>`:""}
    ${s.activeOperationsTab==="notifications"?`<div class="operations-grid"><article class="operations-card notification-template-card"><div class="section-heading"><h4>Notification templates</h4><span>${e.notifications.provider}</span></div>${e.notifications.templates.map(a=>`<div class="template-row"><div><strong>${d(a.name)}</strong><small>${a.channels.join(" + ")} • ${a.status}</small></div><button class="text-button" type="button" data-send-template="${a.id}">Send test</button></div>`).join("")}<form id="notification-template-form" class="mini-form"><input id="notification-template-name" placeholder="New template name" required/><select id="notification-template-channel"><option>Email</option><option>SMS</option><option>Push</option></select><button class="secondary-action" type="submit">Add template</button></form></article><article class="operations-card"><h4>Consent & opt-outs</h4><div class="operations-metric"><strong>${e.notifications.optOuts}</strong><span>channel opt-outs honored</span></div><p>Emergency notices remain available while routine communications respect family preferences.</p></article></div>`:""}
    ${s.activeOperationsTab==="monitoring"?`<div class="operations-grid"><article class="operations-card monitor-card"><div class="section-heading"><h4>Live service health</h4><button class="text-button" type="button" data-run-monitors>Run checks</button></div>${e.monitors.map(a=>`<div class="monitor-row"><span class="health-dot ${a.status.toLowerCase()}"></span><div><strong>${a.service}</strong><small>${a.latency} ms • ${a.uptime} uptime</small></div><em>${a.status}</em></div>`).join("")}</article><article class="operations-card"><h4>Installable applications</h4><p>EduConnect supports installation, offline lesson access, queued submissions, and background synchronization.</p><button class="secondary-action" type="button" data-install-app>${c("smartphone")} ${s.pwaInstalled?"App installed":"Install EduConnect"}</button></article></div>`:""}
  </div>`}function La(){return`
    <section class="panel compliance-panel">
      <div class="section-heading"><h3>Privacy & Compliance Dashboard</h3><span>FERPA operations</span></div>
      <div class="compliance-grid">
        ${Ls.map(e=>`
          <article class="compliance-card">
            ${c("shield-check")}
            <div><strong>${e.value}</strong><span>${e.label}</span><small>${e.status} • ${e.detail}</small></div>
          </article>
        `).join("")}
      </div>
      ${Me("view-compliance","Compliance detail is admin-only.")}
    </section>
  `}function Ma({teacherStudio:e=!1}={}){const t=s.lessonFilter==="All"?M:M.filter(r=>r.status===s.lessonFilter),a=M.filter(r=>r.status==="Published").length,i=M.length-a;return`
    <section class="panel lesson-library-panel ${e?"teacher-lesson-library":"lms-panel"}">
      <div class="section-heading lesson-library-heading">
        <div><p class="eyebrow">${e?"Teacher authoring":"Course content"}</p><h3>Lesson Library</h3></div>
        <div class="inline-actions">
          <select id="lesson-filter" aria-label="Filter lessons"><option>All</option><option ${s.lessonFilter==="Published"?"selected":""}>Published</option><option ${s.lessonFilter==="Draft"?"selected":""}>Draft</option></select>
          ${e?`<button class="primary-action" type="button" data-new-lesson ${K("teacher-tools","Only teachers and administrators can create lessons.")}>${c("plus")} Create lesson</button>`:""}
        </div>
      </div>
      <div class="lesson-library-stats"><span><strong>${M.length}</strong> total lessons</span><span><strong>${a}</strong> published</span><span><strong>${i}</strong> drafts</span></div>
      <div class="lesson-card-grid">
        ${t.map(r=>{const u=r.blocks.filter(p=>p.type==="quiz").length,v=r.blocks.filter(p=>p.type==="media").length;return`
            <article class="lesson-card">
              <div class="lesson-card-top"><span class="lesson-status ${r.status.toLowerCase()}">${r.status}</span><small>${d(r.subject)}</small></div>
              <h4>${d(r.title)}</h4>
              <p>${d(r.summary)}</p>
              <div class="lesson-meta"><span>${c("graduation-cap")} ${d(r.className)}</span><span>${c("clock")} ${r.estimatedMinutes} min</span><span>${c("layers")} ${r.blocks.length} blocks</span></div>
              <div class="lesson-feature-row"><span>${u} quiz${u===1?"":"zes"}</span><span>${v} media</span><span>${r.points} points</span></div>
              <div class="lesson-card-actions">
                <button class="secondary-action" type="button" data-preview-lesson="${r.id}">${c("eye")} Preview</button>
                ${W("teacher-tools")?`<button class="secondary-action" type="button" data-edit-lesson="${r.id}">${c("pen-line")} Edit</button><button class="text-button" type="button" data-toggle-lesson="${r.id}">${r.status==="Published"?"Unpublish":"Publish"}</button>`:""}
              </div>
            </article>
          `}).join("")||`<div class="empty-state">No ${s.lessonFilter.toLowerCase()} lessons yet.</div>`}
      </div>
      ${wn(M.find(r=>r.id===s.lessonPreviewId))}
    </section>
  `}function wn(e){return e?`<aside class="lesson-preview-panel" aria-label="Lesson preview">
    <div class="section-heading"><div><p class="eyebrow">Student preview</p><h4>${d(e.title)}</h4></div><button class="icon-button" type="button" data-close-lesson-preview aria-label="Close lesson preview">${c("x")}</button></div>
    <p>${d(e.summary)}</p>
    <div class="lesson-preview-meta"><span>${d(e.className)}</span><span>${e.estimatedMinutes} minutes</span><span>${e.points} points</span></div>
    <div class="lesson-preview-blocks">${e.blocks.map((t,a)=>t.type==="text"?`<article><span class="block-number">${a+1}</span><div><strong>${d(t.title)}</strong><p>${d(t.body)}</p></div></article>`:t.type==="media"?`<article><span class="block-number">${a+1}</span><div><strong>${d(t.title)}</strong>${Ea(t)}</div></article>`:`<article><span class="block-number">${a+1}</span><div><strong>${d(t.title)}</strong><p>${d(t.question)}</p><div class="preview-answer-list">${t.options.filter(Boolean).map(i=>`<span>${d(i)}</span>`).join("")}</div></div></article>`).join("")}</div>
  </aside>`:""}function kn(e,t,a){const i=`<div class="block-order-actions"><button type="button" data-move-lesson-block="${e.id}:up" ${t===0?"disabled":""} aria-label="Move block up">↑</button><span>${t+1}</span><button type="button" data-move-lesson-block="${e.id}:down" ${t===a-1?"disabled":""} aria-label="Move block down">↓</button><button type="button" data-remove-lesson-block="${e.id}" aria-label="Remove block">${c("x")}</button></div>`;return e.type==="quiz"?`
    <article class="lesson-block-editor quiz-block-editor" data-lesson-block="${e.id}">
      <div class="lesson-block-heading"><div><span class="block-type-icon">${c("clipboard-check")}</span><div><strong>Quiz</strong><small>Auto-graded knowledge check</small></div></div>${i}</div>
      <div class="lesson-block-fields">
        <label><span>Quiz title</span><input value="${d(e.title)}" data-block-field="${e.id}:title" /></label>
        <label><span>Question type</span><select data-block-field="${e.id}:questionType"><option ${e.questionType==="Multiple choice"?"selected":""}>Multiple choice</option><option ${e.questionType==="True or false"?"selected":""}>True or false</option><option ${e.questionType==="Short answer"?"selected":""}>Short answer</option><option ${e.questionType==="Fill in the blank"?"selected":""}>Fill in the blank</option><option ${e.questionType==="Matching"?"selected":""}>Matching</option></select></label>
        <label class="span-2"><span>Question</span><textarea data-block-field="${e.id}:question" placeholder="What should students understand?">${d(e.question)}</textarea></label>
        <div class="quiz-option-editor span-2">
          ${e.questionType==="Matching"?`<div class="matching-pair-editor">${(e.pairs||[]).map((r,u)=>`<label><span>Prompt ${u+1}</span><input value="${d(r.left)}" data-match-pair="${e.id}:${u}:left" /></label><label><span>Match ${u+1}</span><input value="${d(r.right)}" data-match-pair="${e.id}:${u}:right" /></label>`).join("")}</div>`:["Short answer","Fill in the blank"].includes(e.questionType)?`<label><span>Accepted answer</span><input aria-label="Accepted short answer" value="${d(e.options[0]||"")}" data-quiz-option="${e.id}:0" /></label>`:e.options.map((r,u)=>`<label class="quiz-option ${e.questionType==="True or false"&&u>1?"hidden-option":""}"><input type="radio" name="correct-${e.id}" value="${u}" data-correct-answer="${e.id}" ${Number(e.correctAnswer)===u?"checked":""} /><span>Correct</span><input aria-label="Answer option ${u+1}" value="${d(r)}" data-quiz-option="${e.id}:${u}" /></label>`).join("")}
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
        <label class="span-2"><span>Answer feedback</span><textarea data-block-field="${e.id}:feedback" placeholder="Explain the correct answer.">${d(e.feedback)}</textarea></label>
      </div>
    </article>`:e.type==="media"?`
    <article class="lesson-block-editor media-block-editor" data-lesson-block="${e.id}">
      <div class="lesson-block-heading"><div><span class="block-type-icon">${c("video")}</span><div><strong>Media</strong><small>Video, image, audio, document, or link</small></div></div>${i}</div>
      <div class="lesson-block-fields">
        <label><span>Media title</span><input value="${d(e.title)}" data-block-field="${e.id}:title" /></label>
        <label><span>Media type</span><select data-block-field="${e.id}:mediaType">${["Video","Image","Audio","Document","Link"].map(r=>`<option ${e.mediaType===r?"selected":""}>${r}</option>`).join("")}</select></label>
        <label class="span-2"><span>Media URL</span><input type="url" value="${d(e.url)}" data-block-field="${e.id}:url" placeholder="https://..." /></label>
        <label class="span-2 lesson-file-upload"><span>Or upload media</span><input type="file" data-lesson-media-upload="${e.id}" accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.ppt,.pptx" /><small>${e.file?`${d(e.file.name)} • ${d(e.file.status||"Ready")}`:"Images, video, audio, PDF, Word, or PowerPoint up to 5 MB"}</small></label>
        <label class="span-2"><span>Caption or instructions</span><textarea data-block-field="${e.id}:caption">${d(e.caption)}</textarea></label>
      </div>
    </article>`:`
    <article class="lesson-block-editor text-block-editor" data-lesson-block="${e.id}">
      <div class="lesson-block-heading"><div><span class="block-type-icon">${c("file-text")}</span><div><strong>Content</strong><small>Directions, reading, or explanation</small></div></div>${i}</div>
      <div class="lesson-block-fields">
        <label class="span-2"><span>Section title</span><input value="${d(e.title)}" data-block-field="${e.id}:title" /></label>
        <label class="span-2"><span>Lesson content</span><textarea class="lesson-content-textarea" data-block-field="${e.id}:body" placeholder="Write instructions or learning content...">${d(e.body)}</textarea></label>
      </div>
    </article>`}function An(){const e=s.lessonDraft||Sa();return`
    <section class="panel lesson-builder-panel" aria-labelledby="lesson-builder-title">
      <div class="section-heading lesson-builder-heading"><div><p class="eyebrow">Lesson Studio</p><h3 id="lesson-builder-title">${e.id?"Edit lesson":"Create a lesson"}</h3></div><button class="icon-button" type="button" data-close-lesson-builder aria-label="Close lesson builder">${c("x")}</button></div>
      <form id="lesson-builder-form" class="lesson-builder-form">
        <div class="lesson-settings-grid">
          <label class="span-2"><span>Lesson title</span><input required value="${d(e.title)}" data-lesson-field="title" placeholder="Example: Exploring persuasive writing" /></label>
          <label><span>Subject</span><select data-lesson-field="subject">${["English Language Arts","Math","Science","Social Studies","Art","Technology"].map(t=>`<option ${e.subject===t?"selected":""}>${t}</option>`).join("")}</select></label>
          <label><span>Class</span><select data-lesson-field="className">${Y.map(t=>`<option ${e.className===t.name?"selected":""}>${t.name}</option>`).join("")}</select></label>
          <label class="span-2"><span>Learning objective and summary</span><textarea required data-lesson-field="summary" placeholder="What will students learn and do?">${d(e.summary)}</textarea></label>
          <label><span>Due date</span><input type="date" value="${d(e.dueDate)}" data-lesson-field="dueDate" /></label>
          <label><span>Estimated minutes</span><input type="number" min="5" max="240" value="${e.estimatedMinutes}" data-lesson-field="estimatedMinutes" /></label>
          <label><span>Total points</span><input type="number" min="0" max="1000" value="${e.points}" data-lesson-field="points" /></label>
          <label><span>Visibility</span><select data-lesson-field="visibility"><option ${e.visibility==="Teacher only"?"selected":""}>Teacher only</option><option ${e.visibility==="Students"?"selected":""}>Students</option><option ${e.visibility==="Students and families"?"selected":""}>Students and families</option></select></label>
          <label class="toggle-field"><input type="checkbox" data-lesson-field="allowLate" ${e.allowLate?"checked":""} /><span>Allow late completion</span></label>
          <label class="toggle-field"><input type="checkbox" data-lesson-field="requireOrder" ${e.requireOrder?"checked":""} /><span>Require blocks in order</span></label>
        </div>
        <div class="lesson-block-toolbar"><div><strong>Lesson blocks</strong><small>Add and reorder learning content.</small></div><div class="inline-actions"><button class="secondary-action" type="button" data-add-lesson-block="text">${c("file-text")} Content</button><button class="secondary-action" type="button" data-add-lesson-block="media">${c("video")} Media</button><button class="secondary-action" type="button" data-add-lesson-block="quiz">${c("clipboard-check")} Quiz</button></div></div>
        <div class="question-bank-bar"><div><strong>Question bank</strong><small>Reuse standards-aligned questions.</small></div><select id="question-bank-select" aria-label="Question bank item">${Te.map(t=>`<option value="${t.id}">${d(t.subject)} • ${d(t.question)}</option>`).join("")}</select><button class="secondary-action" type="button" data-add-bank-question>${c("plus")} Add question</button></div>
        <div class="lesson-block-list">${e.blocks.map((t,a)=>kn(t,a,e.blocks.length)).join("")}</div>
        <div class="lesson-publish-bar"><div><strong>${e.blocks.length} blocks</strong><span>Changes are saved when you choose an action.</span></div><div class="inline-actions"><button class="secondary-action" type="submit" data-lesson-status="Draft">Save draft</button><button class="primary-action" type="submit" data-lesson-status="Published">${c("check")} Publish lesson</button></div></div>
      </form>
    </section>
  `}function Ln(){return s.lessonBuilderOpen?An():Ma({teacherStudio:!0})}function Ea(e){var a;if(e.file){const i=(a=e.file.id)!=null&&a.startsWith("upload-")&&s.apiMode==="live-api"?Ts(e.file.id):e.file.dataUrl||"#";return`<a class="lesson-media-link" href="${d(i)}" ${i==="#"?"":'target="_blank" rel="noreferrer"'}>${c("paperclip")}<span><strong>${d(e.file.name)}</strong><small>${d(e.caption||e.file.type||"Lesson attachment")}</small></span>${c("download")}</a>`}const t=ya(e.url);return t?e.mediaType==="Image"?`<figure class="student-lesson-media"><img src="${t}" alt="${d(e.caption||e.title)}" /><figcaption>${d(e.caption)}</figcaption></figure>`:e.mediaType==="Audio"?`<div class="student-lesson-media"><audio controls src="${t}"></audio><p>${d(e.caption)}</p></div>`:e.mediaType==="Video"&&/\.(mp4|webm|ogg)(\?|$)/i.test(t)?`<div class="student-lesson-media"><video controls src="${t}"></video><p>${d(e.caption)}</p></div>`:`<a class="lesson-media-link" href="${t}" target="_blank" rel="noreferrer">${c(e.mediaType==="Video"?"play":"paperclip")}<span><strong>${d(e.title)}</strong><small>${d(e.caption||`Open ${e.mediaType.toLowerCase()}`)}</small></span>${c("chevron-right")}</a>`:`<div class="lesson-media-placeholder">${c("paperclip")}<span>Media link has not been added yet.</span></div>`}function Mn(e){if(["Short answer","Fill in the blank"].includes(e.questionType))return`<label class="short-answer-field"><span>Your answer</span><input name="quiz-${e.id}" ${e.required?"required":""} /></label>`;if(e.questionType==="Matching"){const a=(e.pairs||[]).filter(r=>r.left.trim()&&r.right.trim()),i=e.randomize?[...a].reverse():a;return a.map((r,u)=>`<label class="matching-answer"><span>${d(r.left)}</span><select name="quiz-${e.id}-${u}" ${e.required?"required":""}><option value="">Choose a match</option>${i.map(v=>`<option value="${d(v.right)}">${d(v.right)}</option>`).join("")}</select></label>`).join("")}let t=e.options.map((a,i)=>({option:a,optionIndex:i})).filter(({option:a})=>a.trim());return e.randomize&&(t=[...t].reverse()),t.map(({option:a,optionIndex:i})=>`<label><input type="radio" name="quiz-${e.id}" value="${i}" ${e.required?"required":""} /><span>${d(a)}</span></label>`).join("")}function oa(e){var i;const t=((i=s.lessonProgress)==null?void 0:i[e.id])||{},a=new Set(t.completedBlocks||[]);return e.blocks.filter(r=>r.type==="quiz"&&t.completed).forEach(r=>a.add(r.id)),e.blocks.length?Math.round(a.size/e.blocks.length*100):0}function En(){var i,r,u,v;const e=M.filter(p=>p.status==="Published"),t=e.find(p=>p.id===s.activeStudentLessonId)||e[0],a=t?(i=s.lessonProgress)==null?void 0:i[t.id]:null;return`
    <section class="panel student-lessons-panel">
      <div class="section-heading"><div><p class="eyebrow">My classroom</p><h3>${qe("lessons")}</h3></div><span>${e.length} available</span></div>
      <div class="student-lesson-layout">
        <div class="student-lesson-list">
          ${e.map(p=>`<button class="student-lesson-card ${(t==null?void 0:t.id)===p.id?"active":""}" type="button" data-open-student-lesson="${p.id}"><span>${c("book-open")}</span><div><strong>${d(p.title)}</strong><small>${d(p.subject)} • ${p.estimatedMinutes} min • ${p.points} points</small>${ne(oa(p))}</div><em>${oa(p)}%</em></button>`).join("")}
        </div>
        ${t?`<article class="student-lesson-view">
          <div class="student-lesson-hero"><span>${d(t.subject)}</span><h4>${d(t.title)}</h4><p>${d(t.summary)}</p><div><small>Due ${t.dueDate||"anytime"}</small><small>${t.allowLate?"Late work allowed":"Firm deadline"}</small><small>${t.requireOrder?"Complete in order":"Flexible order"}</small></div><div class="student-lesson-tools"><button type="button" data-bookmark-lesson="${t.id}">${c((r=s.bookmarkedLessons)!=null&&r.includes(t.id)?"star":"book-open")} ${(u=s.bookmarkedLessons)!=null&&u.includes(t.id)?"Bookmarked":"Bookmark"}</button><button type="button" data-read-lesson="${t.id}">${c("play")} Read aloud</button></div></div>
          <form class="student-lesson-content" data-submit-lesson="${t.id}">
            ${t.blocks.map((p,L)=>{var T,j,G,A,N,R,V,X;return p.type==="text"?`<section class="student-content-block"><span class="block-number">${L+1}</span><div><h5>${d(p.title)}</h5><p>${d(p.body).replace(/\n/g,"<br />")}</p><button class="text-button" type="button" data-complete-lesson-block="${t.id}:${p.id}">${(T=a==null?void 0:a.completedBlocks)!=null&&T.includes(p.id)?c("check")+" Completed":"Mark section complete"}</button></div></section>`:p.type==="media"?`<section class="student-content-block"><span class="block-number">${L+1}</span><div><h5>${d(p.title)}</h5>${Ea(p)}<button class="text-button" type="button" data-complete-lesson-block="${t.id}:${p.id}">${(j=a==null?void 0:a.completedBlocks)!=null&&j.includes(p.id)?c("check")+" Completed":"Mark media complete"}</button></div></section>`:`<fieldset class="student-quiz-block"><legend><span class="block-number">${L+1}</span><span><strong>${d(p.title)}</strong><small>${p.points} points${p.required?" • Required":""}${p.timeLimit?` • ${p.timeLimit} min`:""} • ${p.maxAttempts||1} attempt${(p.maxAttempts||1)===1?"":"s"}</small></span></legend><p>${d(p.question)}</p><div class="student-answer-list">${Mn(p)}</div>${a&&p.showAnswers!==!1?`<div class="quiz-feedback ${(A=(G=a.answers)==null?void 0:G[p.id])!=null&&A.correct?"correct":"incorrect"}">${(R=(N=a.answers)==null?void 0:N[p.id])!=null&&R.correct?c("check"):c("alert-triangle")} ${d((X=(V=a.answers)==null?void 0:V[p.id])!=null&&X.correct?p.feedback||"Correct.":"Review this question and try again.")}</div>`:""}</fieldset>`}).join("")}
            <label class="student-lesson-notes"><span>Private notes</span><textarea data-lesson-note="${t.id}" placeholder="Write notes or questions to revisit...">${d(((v=s.studentNotes)==null?void 0:v[t.id])||"")}</textarea><button class="secondary-action" type="button" data-save-lesson-note="${t.id}">Save notes</button></label>
            <div class="student-lesson-submit"><div>${a?`<strong>${a.score}%</strong><span>Latest score • Attempt ${a.attempts||1}</span>`:`<strong>${t.points}</strong><span>points available</span>`}</div><div class="inline-actions">${a!=null&&a.certificate?`<button class="secondary-action" type="button" data-download-certificate="${t.id}">${c("award")} Certificate</button>`:""}<button class="primary-action" type="submit">${c("check")} ${a?"Submit again":"Complete lesson"}</button></div></div>
          </form>
        </article>`:'<div class="empty-state">No published lessons are available yet.</div>'}
      </div>
    </section>`}function ra(){return q().role==="Student"?q().id:"student"}function fe(e,t=!1){let a=de.find(i=>i.assignmentId===e&&i.studentId===ra());return!a&&t&&(a={id:`work-${e}-${Date.now()}`,assignmentId:e,studentId:ra(),student:q().role==="Student"?q().label:"Demo Learner",response:"",attachments:[],status:"Not started",attempt:1,submittedAt:"",score:null,feedback:"",returnedAt:""},de.unshift(a)),a}function Cn(){const e=x.filter(r=>(r.status||"Published")==="Published"),t=e.find(r=>r.id===s.activeAssignmentId)||e[0],a=t?fe(t.id):null,i=e.filter(r=>{var u;return!fe(r.id)||["Not started","Draft"].includes((u=fe(r.id))==null?void 0:u.status)}).length;return`<section class="panel student-assignments-panel">
    <div class="section-heading"><div><p class="eyebrow">${qe("assignments")}</p><h3>Submit Your Work</h3></div><span>${i} need attention</span></div>
    <div class="student-assignment-layout">
      <div class="student-assignment-list">${e.map(r=>{const u=fe(r.id);return`<button type="button" class="student-assignment-card ${(t==null?void 0:t.id)===r.id?"active":""}" data-open-assignment="${r.id}"><span>${c("file-text")}</span><div><strong>${d(r.title)}</strong><small>${d(r.className||"All classes")} • Due ${d(r.dueDate||r.lockDate)}</small></div><em>${(u==null?void 0:u.status)||"Not started"}</em></button>`}).join("")}</div>
      ${t?`<form class="student-assignment-work" data-assignment-work="${t.id}">
        <div class="assignment-detail-heading"><div><span>${d(t.type)}</span><h4>${d(t.title)}</h4><p>${d(t.instructions||"Complete the assignment and submit your work.")}</p></div><strong>${t.points||100} pts</strong></div>
        <div class="assignment-requirements"><span>${t.allowResubmit?"Resubmissions allowed":"One submission"}</span><span>Up to ${t.maxAttempts||1} attempts</span><span>${d(t.rubric)}</span></div>
        ${(a==null?void 0:a.status)==="Returned"?`<div class="returned-feedback"><strong>${a.score}% • Returned</strong><p>${d(a.feedback||"Review the teacher feedback and resubmit when ready.")}</p></div>`:""}
        <label><span>Written response</span><textarea id="student-assignment-response" placeholder="Write or paste your response here...">${d((a==null?void 0:a.response)||"")}</textarea></label>
        <label class="assignment-upload"><span>Attach files</span><input type="file" data-assignment-file="${t.id}" multiple accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.ppt,.pptx,.txt" /><small>Up to 5 MB per file</small></label>
        <div class="submission-attachments">${((a==null?void 0:a.attachments)||[]).map(r=>`<span>${c("paperclip")} ${d(r.name)} <button type="button" data-remove-assignment-file="${t.id}:${r.id}" aria-label="Remove ${d(r.name)}">${c("x")}</button></span>`).join("")||"<small>No files attached.</small>"}</div>
        <div class="assignment-submit-actions"><span>Attempt ${(a==null?void 0:a.attempt)||1} of ${t.maxAttempts||1}</span><div class="inline-actions"><button class="secondary-action" type="submit" data-work-status="Draft">${qe("saveDraft")}</button><button class="primary-action" type="submit" data-work-status="Submitted">${c("send")} ${qe("submit")}</button></div></div>
      </form>`:'<div class="empty-state">No published assignments.</div>'}
    </div>
  </section>`}function qn(){var u;const e=M.filter(v=>v.status==="Published"),t=e.filter(v=>{var p,L;return(L=(p=s.lessonProgress)==null?void 0:p[v.id])==null?void 0:L.completed}),a=t.map(v=>s.lessonProgress[v.id].score),i=a.length?Math.round(a.reduce((v,p)=>v+p,0)/a.length):0,r=x.filter(v=>{var p;return!["Submitted","Returned"].includes((p=fe(v.id))==null?void 0:p.status)}).length;return`<section class="panel student-progress-hub"><div class="section-heading"><div><p class="eyebrow">Learning overview</p><h3>My Progress</h3></div><span>Resumes automatically</span></div><div class="student-progress-grid"><article><strong>${t.length}/${e.length}</strong><span>Lessons completed</span>${ne(e.length?Math.round(t.length/e.length*100):0)}</article><article><strong>${i}%</strong><span>Average quiz score</span>${ne(i)}</article><article class="${r?"needs-attention":""}"><strong>${r}</strong><span>Missing or draft assignments</span></article><article><strong>${((u=s.bookmarkedLessons)==null?void 0:u.length)||0}</strong><span>Bookmarked lessons</span></article><article><strong>${t.filter(v=>s.lessonProgress[v.id].certificate).length}</strong><span>Certificates earned</span></article></div></section>`}function Pn(){const e=de.filter(a=>a.status==="Submitted"),t=de.filter(a=>a.status==="Returned");return`<section class="panel teacher-operations-panel">
    <div class="section-heading"><div><p class="eyebrow">Teacher command center</p><h3>Learning Operations</h3></div><span>${e.length} ready to grade</span></div>
    <div class="teacher-operation-stats"><span><strong>${M.filter(a=>a.status==="Draft").length}</strong> lesson drafts</span><span><strong>${x.filter(a=>a.status==="Published").length}</strong> live assignments</span><span><strong>${e.length}</strong> grading queue</span><span><strong>${t.length}</strong> returned</span></div>
    <div class="grading-inbox"><div class="section-heading"><h4>Submission Inbox</h4><span>Score, comment, return</span></div>${e.length?e.map(a=>{const i=x.find(r=>r.id===a.assignmentId);return`<form class="grading-inbox-row" data-return-submission="${a.id}"><div><strong>${d(a.student)}</strong><small>${d((i==null?void 0:i.title)||a.assignmentId)} • Attempt ${a.attempt}</small><p>${d(a.response||"Attachment submission")}</p></div><label><span>Score</span><input type="number" min="0" max="100" value="${a.score??""}" required data-grade-score /></label><label><span>Feedback</span><textarea required data-grade-feedback>${d(a.feedback||"")}</textarea></label><button class="primary-action" type="submit">${c("check")} Return</button></form>`}).join(""):'<div class="empty-state">No submissions are waiting for review.</div>'}</div>
  </section>`}function Dn(){return`<section class="panel curriculum-planner-panel">
    <div class="section-heading"><div><p class="eyebrow">Curriculum map</p><h3>Courses and Units</h3></div><span>${re.length} courses</span></div>
    <form class="curriculum-create-form" id="course-create-form"><input id="course-title" placeholder="New course title" required /><select id="course-subject"><option>English Language Arts</option><option>Math</option><option>Science</option><option>Social Studies</option><option>Art</option><option>Technology</option></select><input id="course-grade" placeholder="Grade" required /><button class="secondary-action" type="submit">${c("plus")} Add course</button></form>
    <div class="curriculum-course-list">${re.map(e=>`<article class="curriculum-course"><div class="curriculum-course-heading"><div><span>${d(e.subject)} • Grade ${d(e.grade)}</span><h4>${d(e.title)}</h4><small>${e.standards.join(" • ")||"Standards can be added"}</small></div><form data-add-unit="${e.id}"><input aria-label="New unit for ${d(e.title)}" placeholder="New unit title" required /><button class="text-button" type="submit">${c("plus")} Add unit</button></form></div><div class="curriculum-unit-list">${e.units.map(t=>`<section><div><strong>${d(t.title)}</strong><small>${d(t.description||"Curriculum unit")}</small></div><span>${t.lessonIds.length} lessons</span><span>${t.assignmentIds.length} assignments</span><form data-link-curriculum="${e.id}:${t.id}"><select aria-label="Content to add to ${d(t.title)}"><optgroup label="Lessons">${M.map(a=>`<option value="lesson:${a.id}">${d(a.title)}</option>`).join("")}</optgroup><optgroup label="Assignments">${x.map(a=>`<option value="assignment:${a.id}">${d(a.title)}</option>`).join("")}</optgroup></select><button class="text-button" type="submit">Link content</button></form></section>`).join("")}</div></article>`).join("")}</div>
  </section>`}function xn(){const e=[...M.filter(t=>t.dueDate).map(t=>({title:t.title,date:t.dueDate,kind:"Lesson",status:t.status})),...x.filter(t=>t.dueDate).map(t=>({title:t.title,date:t.dueDate,kind:"Assignment",status:t.status}))].sort((t,a)=>t.date.localeCompare(a.date));return`<section class="panel teacher-calendar-panel"><div class="section-heading"><div><p class="eyebrow">Instruction plan</p><h3>Teaching Calendar</h3></div><span>${e.length} scheduled</span></div><div class="teaching-calendar-list">${e.map(t=>`<article><time>${d(t.date)}</time><div><strong>${d(t.title)}</strong><small>${t.kind} • ${t.status}</small></div></article>`).join("")||'<div class="empty-state">Add a due date to a lesson or assignment to place it here.</div>'}</div></section>`}function Tn(){return`<section class="panel notification-automation-panel"><div class="section-heading"><div><p class="eyebrow">Family communication</p><h3>Automated Reminders</h3></div><span>${Object.entries(s.notificationPreferences).filter(([t,a])=>["email","sms","push"].includes(t)&&a).map(([t])=>t.toUpperCase()).join(" + ")||"Dashboard only"}</span></div><p>Due-date reminders are scheduled ${s.notificationPreferences.dueDays} day${s.notificationPreferences.dueDays===1?"":"s"} ahead using each person's preferences.</p><button class="secondary-action" type="button" data-send-class-reminder>${c("send")} Send class reminder now</button><div class="delivery-summary">${J.slice(0,3).map(t=>`<span><strong>${d(t.channel)}</strong> ${d(t.status)}</span>`).join("")}</div></section>`}function Nn(){const e=Ke(),t=e.categories.reduce((a,i)=>a+Number(i.weight),0);return`<section class="panel standards-gradebook-panel"><div class="section-heading"><div><p class="eyebrow">Standards and reporting</p><h3>Standards Gradebook</h3></div><span>${t===100?"Weights balanced":`${t}% total`}</span></div><div class="standards-gradebook-grid"><div><h4>Weighted categories</h4><div class="weight-list">${e.categories.map((a,i)=>`<label><span>${d(a.name)}</span><input type="number" min="0" max="100" value="${a.weight}" data-gradebook-weight="${i}"/><em>%</em></label>`).join("")}</div></div><div><h4>Standards mastery</h4><div class="standards-list">${e.standards.map(a=>`<article><div><strong>${d(a.code)}</strong><span>${a.mastery}% mastery</span></div>${ne(a.mastery)}</article>`).join("")}</div></div><div class="reporting-actions"><h4>Reporting & SIS</h4><p>Generate report cards or exchange grades using ${e.sisExport.format}.</p><button class="secondary-action" type="button" data-generate-report-cards>${c("file-text")} Generate report cards</button><button class="secondary-action" type="button" data-export-sis>${c("download")} Export to SIS</button><small>Last export: ${e.sisExport.lastExport}</small></div></div></section>`}function Ke(){k.gradebooks||(k.gradebooks={});const e=$().id;return k.gradebooks[e]||(k.gradebooks[e]=structuredClone(k.gradebook)),k.gradebooks[e]}function On(){const e=$(),t=Je.find(r=>r.id===s.activeAccount)||Je[0],a=M.reduce((r,u)=>r+u.blocks.filter(v=>v.type==="quiz").length,0),i=M.filter(r=>r.status==="Published").length;return`
    <section class="dashboard-grid lms-grid">
      <div class="welcome-strip lms-welcome">
        <div>
          <p class="eyebrow">${e.name} advanced LMS</p>
          <h2>Lessons, quizzes, media, and grading in one LMS</h2>
          <p>Teachers can build multimedia lessons, publish quizzes, manage assignments, grade submissions, and support offline learning inside this school instance.</p>
        </div>
        <button class="primary-action" data-build-offline ${K("lms","Only teachers and administrators can build LMS offline packs.")}>${c("download")} ${s.offlinePackReady?"Rebuild Offline Pack":"Build Offline Pack"}</button>
      </div>

      ${O("Published lessons",i,"book-open","blue")}
      ${O("Quiz blocks",a,"clipboard-check","teal")}
      ${O("Offline packs",s.offlinePackReady?"Ready":"Not built","download","gold")}

      ${Ma()}
      ${jn()}

      <section class="panel lms-panel simplicity-suite">
        <div class="section-heading"><h3>Simple Classroom Experience</h3><span>Clean by default</span></div>
        ${ks.slice(0,2).map(([r,u])=>`<article class="strength-row">${c("check")}<div><strong>${r}</strong><small>${u}</small></div></article>`).join("")}
      </section>

      <section class="panel lms-panel free-suite">
        <div class="section-heading"><h3>Zero Cost Core</h3><span>No premium paywall</span></div>
        <div class="free-card"><strong>$0</strong><p>Schools can use classroom basics, paperless assignments, messaging, and parent summaries without hidden fees.</p></div>
      </section>

      <section class="panel lms-panel grading-suite">
        <div class="section-heading"><h3>Advanced Grading</h3><span>Automated tests + rubrics + analytics</span></div>
        <div class="assignment-list">
          ${x.map(r=>`
            <article class="assignment-row">
              <div><strong>${r.title}</strong><small>${r.type} • ${r.rubric}</small></div>
              ${ne(r.analytics)}
              <span>${r.analytics}% mastery</span>
            </article>
          `).join("")}
        </div>
      </section>

      ${Rn()}

      <section class="panel lms-panel deadline-suite">
        <div class="section-heading"><h3>Deadline Controls</h3><span>Firm locks + exceptions</span></div>
        ${x.map(r=>`
          <article class="deadline-control">
            <div><strong>${r.title}</strong><small>Locks ${r.lockDate}</small></div>
            <span>${r.exception}</span>
          </article>
        `).join("")}
      </section>

      <section class="panel lms-panel account-suite">
        <div class="section-heading"><h3>Account Context</h3><span>No constant log-outs</span></div>
        <div class="account-switcher">
          ${Je.map(r=>`<button class="${t.id===r.id?"active":""}" data-lms-account="${r.id}"><strong>${r.name}</strong><span>${r.context}</span></button>`).join("")}
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
        <label class="guardrail-row"><input type="checkbox" data-guardrail="lockSubmissions" ${s.guardrails.lockSubmissions?"checked":""} ${W("lms")?"":"disabled"} /><span class="custom-check">${s.guardrails.lockSubmissions?c("check"):""}</span><span>Prevent edits after submission</span></label>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="hideAnswers" ${s.guardrails.hideAnswers?"checked":""} ${W("lms")?"":"disabled"} /><span class="custom-check">${s.guardrails.hideAnswers?c("check"):""}</span><span>Hide answers until quiz closes</span></label>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="parentSummaries" ${s.guardrails.parentSummaries?"checked":""} ${W("lms")?"":"disabled"} /><span class="custom-check">${s.guardrails.parentSummaries?c("check"):""}</span><span>Auto-return parent email summaries</span></label>
        ${Me("lms","LMS guardrails are managed by teachers and administrators.")}
      </section>

      <section class="panel lms-panel offline-suite">
        <div class="section-heading"><h3>Offline Learning</h3><span>${s.offlinePackReady?"Synced for low-connectivity use":"Build a pack for offline work"}</span></div>
        <div class="offline-card">
          <div class="offline-status ${s.offlinePackReady?"ready":""}">${s.offlinePackReady?c("check"):c("download")}</div>
          <div><strong>${s.offlinePackReady?"Offline pack ready":"Offline pack not built"}</strong><p>Includes assignments, rubrics, PDF annotations, and queued submissions for later sync.</p></div>
        </div>
      </section>

      <section class="panel lms-panel privacy-suite">
        <div class="section-heading"><h3>Learning Privacy</h3><span>FERPA-aware LMS</span></div>
        ${As.map(r=>`<article class="strength-row">${c("shield-check")}<div><strong>${r.label}</strong><small>${r.detail}</small></div></article>`).join("")}
      </section>
    </section>
  `}function Rn(){const e=F.find(t=>t.id===s.selectedSubmissionId)||F[0];return`
    <section class="panel lms-panel gradebook-detail-suite">
      <div class="section-heading"><h3>Gradebook Detail</h3><span>Submissions, rubric, comments</span></div>
      <div class="gradebook-layout">
        <div class="submission-list">
          ${F.map(t=>`
            <button class="submission-row ${e.id===t.id?"active":""}" data-submission="${t.id}">
              ${c(t.status==="Missing"?"alert-triangle":"file-text")}
              <span><strong>${t.student}</strong><small>${t.assignment} • ${t.status}</small></span>
              <em>${t.score}%</em>
            </button>
          `).join("")}
        </div>
        <article class="submission-detail">
          <div class="section-heading"><h4>${e.student}</h4><span>${e.assignment}</span></div>
          ${e.rubric.map(([t,a])=>`<div class="rubric-row"><span>${t}</span>${ne(Math.round(a/4*100))}<strong>${a}/4</strong></div>`).join("")}
          <label><span>Teacher comment</span><textarea id="submission-comment">${d(e.comment)}</textarea></label>
          <button class="primary-action" data-save-submission="${e.id}" ${K("teacher-tools","Only teachers and administrators can save grading comments.")}>${c("check")} Save Comment</button>
        </article>
      </div>
    </section>
  `}function In(){const e=$(),t=(e.studentPoints+s.completed.length*75).toLocaleString();return`
    <section class="dashboard-grid student-grid">
      <div class="hero-card student-hero">
        <div>
          <span class="badge soft">${c("star")} ${t} points</span>
          <h2>Welcome back, ${e.studentName}!</h2>
          <p>You are learning inside the ${e.name} instance. Keep going and unlock today's discovery badge.</p>
          <button class="primary-action" data-continue-adventure>${c("play")} Continue Adventure</button>
        </div>
        <div class="orbital-scene" aria-hidden="true"><span class="planet planet-one"></span><span class="planet planet-two"></span><span class="rocket-shape">${c("rocket")}</span></div>
      </div>
      ${O("Daily streak","5 days","trending-up","blue")}
      ${O("Books read","12","book-open","teal")}
      ${qn()}
      ${Cn()}
      ${En()}
      <section class="panel missions-panel">
        <div class="section-heading"><div><p class="eyebrow">Today</p><h3>My Missions</h3></div><button class="text-button" data-action="All available missions are already shown for this learner.">See all ${c("chevron-right")}</button></div>
        <div class="mission-list">
          ${We.map(a=>{const i=s.completed.includes(a.id);return`
              <article class="mission-card ${a.accent}">
                <div class="mission-icon">${c(a.icon)}</div>
                <div class="mission-main">
                  <div class="mission-meta"><span>${a.subject}</span><span>${a.due}</span></div>
                  <h4>${a.title}</h4>
                  ${ne(i?100:a.progress)}
                </div>
                <button class="complete-button ${i?"done":""}" data-complete="${a.id}">${c(i?"check":"play")} ${i?"Done":a.action}</button>
              </article>
            `}).join("")}
        </div>
      </section>
      <section class="panel awards-panel">
        <div class="section-heading"><h3>Awards</h3>${c("award")}</div>
        <div class="award-grid">${["Kindness Kid","Problem Solver","Fast Learner","Story Teller"].map(a=>`<div class="award-tile">${c("sparkles")}<span>${a}</span></div>`).join("")}</div>
      </section>
    </section>
  `}function jn(){const e=Ue();return`
    <section class="panel lms-panel background-services" aria-label="Passive background services">
      <div class="section-heading">
        <div><p class="eyebrow">Passive background layer</p><h3>Background Services</h3></div>
        <span>Runs quietly behind LMS work</span>
      </div>
      <div class="background-service-grid">
        <article class="background-service-card">
          <div>${c("refresh-cw")}<strong>Workspace sync</strong></div>
          <small>${ea.length} connected services attach, collect, archive, and export in the background.</small>
          <span>Passive</span>
        </article>
        <article class="background-service-card">
          <div>${c("paperclip")}<strong>File handling</strong></div>
          <small>${je.length} class files are converted, attached, or archived without interrupting classroom flow.</small>
          <span>Passive</span>
        </article>
        <article class="background-service-card">
          <div>${c("bell")}<strong>Notification routing</strong></div>
          <small>${e} unread alert${e===1?"":"s"} stay in the notification tray unless action is needed.</small>
          <span>Tray</span>
        </article>
        <article class="background-service-card">
          <div>${c("calendar-days")}<strong>Calendar bridge</strong></div>
          <small>${da.length} shared events inform deadlines and family reminders in the background.</small>
          <span>Synced</span>
        </article>
      </div>
      <details class="background-details">
        <summary>View background service activity</summary>
        <div class="background-activity">
          ${ea.map(t=>`<article><strong>${t.app}</strong><small>${t.action}</small><span>${t.status}</span></article>`).join("")}
          ${Ne.map(t=>`<article><strong>${t.item}</strong><small>${t.owner}</small><span>${s.offlinePackReady?t.status:"Waiting"}</span></article>`).join("")}
        </div>
      </details>
    </section>
  `}function zn(){const e=$(),t=s.selectedClass==="All"?Y:Y.filter(i=>i.name===s.selectedClass),a=s.rosterFilter==="All"?I:I.filter(i=>i.status===s.rosterFilter);return`
    <section class="dashboard-grid teacher-grid">
      <div class="welcome-strip"><div><p class="eyebrow">${e.name} instance</p><h2>Welcome back, Demo Teacher.</h2><p>Build lessons with rich content, quizzes, and media, then publish them directly to your students.</p></div><button class="primary-action" data-new-lesson ${K("teacher-tools","Only teachers and administrators can create lessons.")}>${c("plus")} Create lesson</button></div>
      ${O("Average grade",e.avgGrade,"trending-up","blue")}
      ${O("Attendance",e.attendance,"calendar-days","teal")}
      ${O("Messages",e.messages,"mail","gold")}
      ${Pn()}
      ${xn()}
      ${Tn()}
      ${Nn()}
      ${Ln()}
      <section class="panel class-panel">
        <div class="section-heading">
          <h3>Active Classes</h3>
          <select id="class-filter" aria-label="Filter classes"><option>All</option>${Y.map(i=>`<option ${s.selectedClass===i.name?"selected":""}>${i.name}</option>`).join("")}</select>
        </div>
        <div class="class-list">${t.map(i=>`<article class="class-card"><div><h4>${i.name}</h4><p>${i.room}</p></div><div class="class-metrics"><span>${i.grade}% grade</span><span>${i.attendance}% attendance</span><span>${i.pending} pending</span></div><button class="icon-button" aria-label="Open ${i.name} options" data-action="${i.name} class tools opened.">${c("more-horizontal")}</button></article>`).join("")}</div>
      </section>
      <section class="panel assignment-composer-panel">
        <div class="section-heading"><h3>Quick Assignment</h3><span>Add a simple graded task</span></div>
        <form id="assignment-form" class="assignment-form">
          <label><span>Title</span><input id="assignment-title" placeholder="Example: Reading Checkpoint" required /></label>
          <label><span>Class</span><select id="assignment-class">${Y.map(i=>`<option>${i.name}</option>`).join("")}</select></label>
          <label><span>Type</span><select id="assignment-type"><option>Automated quiz</option><option>Writing task</option><option>Project</option><option>Reading response</option></select></label>
          <label><span>Due date</span><input type="date" id="assignment-due" value="2026-10-30" /></label>
          <label class="span-2"><span>Instructions</span><textarea id="assignment-instructions" placeholder="What should students submit?"></textarea></label>
          <label><span>Points</span><input type="number" id="assignment-points" min="1" max="1000" value="100" /></label>
          <label><span>Maximum attempts</span><input type="number" id="assignment-attempts" min="1" max="10" value="2" /></label>
          <label class="toggle-field span-2"><input type="checkbox" id="assignment-resubmit" checked /><span>Allow resubmissions after feedback</span></label>
          <button class="primary-action" type="submit" ${K("teacher-tools","Only teachers and administrators can create assignments.")}>${c("plus")} Add Assignment</button>
        </form>
        <div class="quick-assignment-list">${x.slice(0,5).map(i=>`<article><strong>${d(i.title)}</strong><span>${d(i.className||"All classes")} • ${i.status||"Published"}</span></article>`).join("")}</div>
      </section>
      <section class="panel activity-panel">
        <div class="section-heading"><h3>Recent Student Activity</h3><button class="icon-button" aria-label="Refresh activity" data-refresh-activity>${c("refresh-cw")}</button></div>
        ${me.map(([i,r,u,v])=>`<article class="activity-row"><div class="avatar">${ue(i)}</div><div><p><strong>${i}</strong> ${r}</p><span>${u} | ${v}</span></div><button class="icon-button" aria-label="Reply to ${i}" data-reply-student="${i}">${c("pen-line")}</button></article>`).join("")}
      </section>
      ${Dn()}
      <section class="panel grading-card"><h3>Grading To-Do</h3>${ne(68)}<p>18 submissions left across 3 classes.</p><button class="secondary-action" data-open-role="lms">${c("clipboard-check")} Open Grading Hub</button></section>
      ${Me("teacher-tools","Teacher tools are read-only for this signed-in role.")}
      <section class="panel roster-panel">
        <div class="section-heading">
          <h3>Roster & Enrollments</h3>
          <select id="roster-filter" aria-label="Filter roster"><option>All</option><option>Active</option><option>Watch</option></select>
        </div>
        <div class="roster-table">
          ${a.map(i=>`
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
  `}function Fn(){const e=$();return`
    <section class="dashboard-grid parent-grid">
      <div class="welcome-strip parent-welcome"><div><p class="eyebrow">${e.learnerName}'s progress</p><h2>Welcome back, ${e.guardianName}.</h2><p>${e.learnerName}'s family view belongs to ${e.name}'s private instance.</p></div><button class="primary-action" data-open-role="messages">${c("send")} Message Teacher</button></div>
      ${O("Current grade","A-","trending-up","blue")}
      ${O("Attendance","98%","calendar-days","teal")}
      ${O("Reading pace","56%","book-open","gold")}
      ${Bn()}
      <section class="panel teacher-note"><div class="teacher-avatar">MH</div><h3>Ms. Henderson</h3><p>"Leo is making great progress in Geometry. Keep practicing the new vocabulary cards at home."</p><button class="secondary-action" data-open-role="messages">${c("message-circle")} Start Chat</button></section>
      <section class="panel deadline-panel">
        <div class="section-heading"><h3>Upcoming Deadlines</h3><button class="text-button" data-open-role="platform">Calendar ${c("chevron-right")}</button></div>
        ${Ze.map(t=>{const a=s.checkedDeadlines.includes(t.title);return`<label class="deadline-row ${t.urgent?"urgent":""}"><input type="checkbox" data-deadline="${t.title}" ${a?"checked":""} /><span class="custom-check">${a?c("check"):""}</span><span><strong>${t.title}</strong><small>${t.meta}</small></span></label>`}).join("")}
      </section>
      <section class="panel mobile-parent-panel">
        <div class="phone-preview">
          <div class="phone-top">${e.learnerName}</div>
          <strong>${e.name}</strong>
          <span>${s.workHoursOpen?"Teacher chat open":"Teacher chat resumes during work hours"}</span>
          <button data-open-role="messages">${c("send")} Message</button>
        </div>
        <div class="mobile-actions">
          <h3>Mobile Parent Experience</h3>
          ${Es.map(t=>`<article class="mobile-action">${c("smartphone")}<div><strong>${t.title}</strong><small>${t.detail}</small></div></article>`).join("")}
        </div>
      </section>
      <section class="panel subject-panel"><h3>Subject Snapshot</h3>${[["Math",92],["Science",88],["Reading",84],["History",91]].map(([t,a])=>`<div class="subject-row"><span>${t}</span>${ne(a)}<strong>${a}%</strong></div>`).join("")}</section>
    </section>
  `}function Bn(){const e=s.notificationPreferences;return`<section class="panel family-summary-panel"><div class="section-heading"><div><p class="eyebrow">Family digest</p><h3>This Week at a Glance</h3></div><span>Updated today</span></div><div class="family-summary-grid"><article><strong>4</strong><span>assignments completed</span></article><article><strong>2</strong><span>deadlines ahead</span></article><article><strong>98%</strong><span>attendance</span></article><article><strong>+6%</strong><span>reading growth</span></article></div><div class="family-summary-body"><div><h4>Teacher highlights</h4><p>Strong participation in discussion and continued progress with evidence-based writing.</p></div><div><h4>Delivery preferences</h4><span>${e.email?"Email":""}${e.sms?" • SMS":""}${e.push?" • Push":""}</span><button class="text-button" type="button" data-open-family-settings>Manage preferences</button></div><button class="secondary-action" type="button" data-send-weekly-summary>${c("send")} Send summary now</button></div></section>`}function Gn(){const e=$(),t=D.filter(i=>i.type===s.conversationFilter),a=D.find(i=>i.id===s.activeConversationId)||t[0]||D[0];return`
    <section class="messages-shell">
      <aside class="conversation-list">
        <div class="segment-control">${["Parents","Groups"].map(i=>`<button class="${s.conversationFilter===i?"active":""}" data-filter="${i}">${i}</button>`).join("")}</div>
        ${t.map(i=>`<button class="conversation ${a.id===i.id?"active":""}" data-conversation="${i.id}"><div class="avatar">${ue(i.name)}</div><div><strong>${i.name}</strong><span>${i.preview}</span></div>${i.unread?`<em>${i.unread}</em>`:""}</button>`).join("")}
        <div class="emergency-card ${s.emergencyOverride?"active":""}">
          ${c("alert-triangle")}
          <div><strong>Emergency Override</strong><span>${s.emergencyOverride?"Administrator enabled for urgent safety communication.":"Available only to school administrators."}</span></div>
          <button class="secondary-action" data-toggle-emergency ${K("emergency","Emergency override is admin-only.")}>${s.emergencyOverride?"Disable":"Enable"}</button>
        </div>
      </aside>
      <section class="chat-panel">
        <header class="chat-header"><div class="avatar">${ue(a.name)}</div><div><h3>${a.name}</h3><p>${a.online?"Online now":a.role}</p></div><div class="chat-tools"><button class="icon-button" aria-label="Start video call" data-start-call="${a.id}">${c("video")}</button><button class="icon-button" aria-label="More chat options" data-action="Chat options opened for ${a.name}.">${c("more-horizontal")}</button></div></header>
        ${s.activeCallName?`<div class="call-banner">${c("video")} <strong>Live call with ${s.activeCallName}</strong><button class="text-button" data-end-call>End call</button></div>`:""}
        <div class="work-hours-banner ${s.workHoursOpen||s.emergencyOverride?"open":"closed"}">
          ${c(s.workHoursOpen||s.emergencyOverride?"check":"x")}
          <div><strong>${s.emergencyOverride?"Emergency override active":s.workHoursOpen?"Communication window open":"After-hours messaging paused"}</strong><span>${e.workHours}. ${s.emergencyOverride?"Urgent administrator-approved messages can be sent now.":s.workHoursOpen?"Parents and teachers can message now.":e.afterHours}</span></div>
          <button class="text-button" data-toggle-hours>${s.workHoursOpen?"Simulate after hours":"Open work hours"}</button>
        </div>
        <div class="chat-stream">${a.messages.map(i=>`<div class="bubble ${i.from==="me"?"mine":""}"><p>${i.text}</p><span>${i.time}</span></div>`).join("")}</div>
        <form class="compose-box ${s.workHoursOpen||s.emergencyOverride?"":"locked"}" id="compose"><input id="message-draft" value="${s.draft}" placeholder="${s.workHoursOpen||s.emergencyOverride?`Message ${a.name}...`:"Messaging resumes during work hours"}" ${s.workHoursOpen||s.emergencyOverride?"":"disabled"} /><button class="primary-action" type="submit" ${s.workHoursOpen||s.emergencyOverride?"":"disabled"}>${c("send")} Send</button></form>
      </section>
    </section>
  `}function Un(){const e=$(),t=te(),a=nn(t);return`
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
          <label class="span-2"><span>Assigned approver</span><select id="board-approver">${t.approvers.map(i=>`<option value="${i.id}" ${a.id===i.id?"selected":""}>${i.name} - ${i.title}</option>`).join("")}</select></label>
          <button class="primary-action span-2" type="submit">${c("send")} Submit for Admin Approval</button>
        </form>
      </section>

      <section class="panel approver-panel">
        <div class="section-heading"><h3>Assigned Post Approvers</h3>${c("shield-check")}</div>
        <div class="approver-list">
          ${t.approvers.map(i=>`
            <label class="approver-row ${i.active?"active":""}">
              <input type="checkbox" data-approver-toggle="${i.id}" ${i.active?"checked":""} />
              <span class="custom-check">${i.active?c("check"):""}</span>
              <span><strong>${i.name}</strong><small>${i.title}</small></span>
            </label>
          `).join("")}
        </div>
        <form id="approver-form" class="approver-form">
          <input id="new-approver-name" placeholder="Add approver name" />
          <select id="new-approver-title"><option>Principal</option><option>Assistant Principal</option><option>Dean of Students</option><option>Department Chair</option></select>
          <button class="secondary-action" type="submit">${c("plus")} Assign</button>
        </form>
      </section>

      <section class="panel approval-queue">
        <div class="section-heading"><h3>Administrator Approval Queue</h3>${c("shield-check")}</div>
        <div class="queue-list">
          ${t.pending.length?t.pending.map(i=>Wn(i)).join(""):'<div class="empty-state">No posts waiting for approval.</div>'}
        </div>
      </section>

      <section class="panel published-board">
        <div class="section-heading"><h3>Published Community Board</h3><span>${t.published.length} approved</span></div>
        <div class="post-list">
          ${t.published.map(i=>Hn(i)).join("")}
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
        ${Me("approve-posts","Only administrators can approve or reject community posts.")}
      </section>

      <section class="panel workflow-rules-panel">
        <div class="section-heading"><h3>Approval Workflow Rules</h3>${c("shield-check")}</div>
        ${Ms.map(([i,r])=>`<article class="rule-row"><strong>${i}</strong><span>${r}</span></article>`).join("")}
      </section>
    </section>
  `}function Wn(e){const t=te();return`
    <article class="board-post pending-post">
      <div class="post-header"><div class="avatar">${ue(e.author)}</div><div><strong>${e.title}</strong><span>${e.author} • ${e.role} • ${e.audience}</span></div></div>
      <p>${e.body}</p>
      <div class="post-media">${c("paperclip")} ${e.media||"No media"}</div>
      <div class="assigned-approver">${c("shield-check")} Assigned to ${on(t,e.approverId)}</div>
      <div class="approval-actions">
        <button class="secondary-action" data-reject-post="${e.id}" ${K("approve-posts","Only administrators can reject community posts.")}>${c("x")} Reject</button>
        <button class="primary-action" data-approve-post="${e.id}" ${K("approve-posts","Only administrators can approve community posts.")}>${c("check")} Approve</button>
      </div>
    </article>
  `}function Hn(e){return`
    <article class="board-post">
      <div class="post-header"><div class="avatar">${ue(e.author)}</div><div><strong>${e.title}</strong><span>${e.author} • ${e.role} • ${e.time}</span></div></div>
      <p>${e.body}</p>
      <div class="post-tags"><span>${e.type}</span><span>${e.audience}</span><span>${e.media||"No media"}</span></div>
    </article>
  `}function _n(){const e=Se(),t=e.schools.length+1,a=`demo-school-${Date.now()}`,i={id:a,name:`Demo Learning Academy ${t}`,category:"Public",students:240+t*18,staff:32+t,status:"Onboarding",subdomain:`demoacademy${t}`,plan:"District Core",modules:["SIS","LMS","Messaging","Family Portal"],storage:18,uptime:"Provisioning",theme:"Discovery Blue",isolation:"Dedicated tenant database",avgGrade:"89.0%",attendance:"95.0%",messages:"0 pending",studentPoints:760,studentName:"Explorer",guardianName:"Jordan",learnerName:"Riley",workHours:"Mon-Fri, 8:00 AM-4:00 PM",afterHours:"Messages are queued until office hours"};e.schools.push(i),k.domains.push({schoolId:a,domain:`${i.subdomain}.educationalsystem.fieldserviceit.com`,dns:"Awaiting DNS",ssl:"Pending",checkedAt:"Just now"}),k.billing.schools=se.flatMap(r=>r.districts).flatMap(r=>r.schools).length,s.selectedSchool=a,f("Created demo school tenant",e.name),s.toast=`${i.name} was added to ${e.name}.`,b()}function Jn(){const e=`Quick Check ${x.length+1}`;Ca({title:e,className:s.selectedClass==="All"?"All classes":s.selectedClass,type:"Teacher-created assignment",lockDate:"Next Friday, 8:00 PM"}),oe("lms",`${e} was created in the LMS grading suite.`)}function Ca({title:e,className:t,type:a,lockDate:i,dueDate:r="",instructions:u="Complete the assignment and submit your work.",points:v=100,maxAttempts:p=1,allowResubmit:L=!1}){const T=`${e.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${Date.now()}`;x.unshift({id:T,schoolId:$().id,title:e,className:t,type:a,instructions:u,dueDate:r,points:v,status:"Published",allowResubmit:L,maxAttempts:p,attachments:[],rubric:"Auto rubric draft",analytics:0,lockDate:i||"Next Friday, 8:00 PM",exception:"None"}),U("FYI",`${e} published`,t,"Student inbox"),z("LMS",`${e} created`,`${a} assigned to ${t}.`),f(`Created assignment ${e}`,$().name)}function la(e=""){const t=M.find(a=>a.id===e);s.lessonDraft=Sa(t),s.lessonBuilderOpen=!0,s.role!=="teacher"?oe("teacher",t?`${t.title} opened in Lesson Studio.`:"Lesson Studio opened."):b()}function Vn(e){var u,v;const t=s.lessonDraft;if(!((u=t==null?void 0:t.title)!=null&&u.trim())||!((v=t==null?void 0:t.summary)!=null&&v.trim())){h("Add a lesson title and learning objective before saving.");return}if(!t.blocks.length){h("Add at least one content, media, or quiz block.");return}if(t.blocks.find(p=>{var L;return p.type==="quiz"&&(!p.question.trim()||["Short answer","Fill in the blank"].includes(p.questionType)&&!((L=p.options[0])!=null&&L.trim())||p.questionType==="Matching"&&(p.pairs||[]).filter(T=>T.left.trim()&&T.right.trim()).length<2||!["Short answer","Fill in the blank","Matching"].includes(p.questionType)&&p.options.filter(T=>T.trim()).length<2)})){h("Each quiz needs a question and at least two answer choices.");return}const i=structuredClone(t);i.schoolId=i.schoolId||$().id,i.id||(i.id=`lesson-${i.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}-${Date.now()}`),i.status=e,i.visibility=e==="Published"&&i.visibility==="Teacher only"?"Students":i.visibility,i.updatedAt="Just now";const r=M.findIndex(p=>p.id===i.id);r>=0?M.splice(r,1,i):M.unshift(i),s.lessonDraft=null,s.lessonBuilderOpen=!1,s.activeStudentLessonId=e==="Published"?i.id:s.activeStudentLessonId,z("LMS",`${i.title} ${e==="Published"?"published":"saved"}`,`${i.blocks.length} lesson blocks for ${i.className}.`),U(e==="Published"?"FYI":"Action",`${i.title} ${e==="Published"?"is available to students":"saved as a draft"}`,i.className,"Lesson Studio"),f(`${e==="Published"?"Published":"Saved draft lesson"} ${i.title}`,i.className),h(`${i.title} ${e==="Published"?"published to students":"saved as a draft"}.`)}function Yn(e){const t=M.find(a=>a.id===e);t&&(t.status=t.status==="Published"?"Draft":"Published",t.visibility=t.status==="Published"&&t.visibility==="Teacher only"?"Students":t.visibility,t.updatedAt="Just now",f(`${t.status==="Published"?"Published":"Unpublished"} lesson ${t.title}`,t.className),h(`${t.title} is now ${t.status.toLowerCase()}.`))}function Qn(e,t){var G;const a=M.find(A=>A.id===e&&A.status==="Published");if(!a)return;const i=a.blocks.filter(A=>A.type==="quiz"),r=(G=s.lessonProgress)==null?void 0:G[a.id],u=Math.min(...i.map(A=>Number(A.maxAttempts)||1),10);if(((r==null?void 0:r.attempts)||0)>=u){h(`Maximum attempts reached for ${a.title}.`);return}const v={};let p=0,L=0;const T=new FormData(t);i.forEach(A=>{const N=T.get(`quiz-${A.id}`);let R,V,X=0;if(["Short answer","Fill in the blank"].includes(A.questionType))R=String(N||"").trim(),V=R.toLowerCase()===String(A.options[0]||"").trim().toLowerCase();else if(A.questionType==="Matching"){const ge=(A.pairs||[]).filter(ee=>ee.left.trim()&&ee.right.trim());R=ge.map((ee,ve)=>String(T.get(`quiz-${A.id}-${ve}`)||"")),V=ge.every((ee,ve)=>R[ve]===ee.right),A.partialCredit!==!1&&ge.length&&(X=ge.filter((ee,ve)=>R[ve]===ee.right).length/ge.length)}else R=N===null?-1:Number(N),V=R===Number(A.correctAnswer);V&&(X=1),v[A.id]={selected:R,correct:V,credit:X},L+=Number(A.points)||0,p+=(Number(A.points)||0)*X});const j=L?Math.round(p/L*100):100;s.lessonProgress||(s.lessonProgress={}),s.lessonProgress[a.id]={completed:!0,score:j,earned:p,available:L,answers:v,attempts:((r==null?void 0:r.attempts)||0)+1,submittedAt:"Just now",certificate:j>=70},me.unshift([q().label,`completed ${a.title} with ${j}%`,"Just now",a.className]),z("LMS",`${q().label} completed a lesson`,`${a.title}: ${j}% quiz score.`),h(`${a.title} completed with a ${j}% quiz score.`)}function Kn(){const e=We.find(t=>!s.completed.includes(t.id));if(!e){h("All missions are complete. Reset the demo or wait for the next adventure.");return}s.completed.includes(e.id)||s.completed.push(e.id),h(`${e.title} marked complete. Points updated.`)}function Zn(){me.unshift(["Demo Student","opened the newest assignment","Just now",s.selectedClass==="All"?"All Classes":s.selectedClass]),h("Student activity refreshed.")}function Xn(e){s.conversationFilter="Groups",s.activeConversationId="grade-team",s.draft=`Following up about ${e}'s recent activity.`,oe("messages",`Reply draft started for ${e}.`)}function ei(){var e;(e=document.querySelector("#landing-login-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const a=document.querySelector("#landing-identifier").value.trim(),i=document.querySelector("#landing-password").value,r=a.toLowerCase(),u=B.find(v=>[v.id,v.email,v.username,v.label].filter(Boolean).some(p=>String(p).toLowerCase()===r));if(Ce="",!Pe()){u?na(u):(Ce="We could not find that school account.",b());return}Re=!0,b();try{const v=await Rs(a,i);localStorage.setItem("educonnect-session-token",v.token),s.apiMode="live-api",await fa("live-api").catch(()=>{}),Re=!1,na(v.user,"Securely signed in as")}catch(v){localStorage.removeItem("educonnect-session-token"),Re=!1,Ce=v.message||"Invalid credentials.",b()}})}function ti(){var e,t,a,i,r,u,v,p,L,T,j,G,A,N,R,V,X,ge,ee,ve,at,st,nt,it,ot,rt,lt,ct,dt,ut,pt,mt,ht,gt,vt,bt,ft,yt,$t,St,wt,kt,At,Lt,Mt,Et,Ct,qt,Pt,Dt,xt,Tt,Nt,Ot,Rt,It,jt,zt,Ft,Bt,Gt,Ut,Wt,Ht,_t,Jt,Vt,Yt,Qt,Kt,Zt;document.querySelectorAll("[data-role]").forEach(n=>{n.addEventListener("click",o=>{o.preventDefault(),Le(n.dataset.role)})}),(e=document.querySelector("[data-reset-demo]"))==null||e.addEventListener("click",()=>{Vs(),s.currentUser=C.id,Le(C.landing)}),(t=document.querySelector("[data-sign-out]"))==null||t.addEventListener("click",Xs),(a=document.querySelector("#global-search"))==null||a.addEventListener("input",n=>{s.searchTerm=n.target.value,b()}),(i=document.querySelector("[data-clear-search]"))==null||i.addEventListener("click",()=>{s.searchTerm="",b()}),document.querySelectorAll("[data-open-role]").forEach(n=>{n.addEventListener("click",()=>{var o;s.searchTerm="",oe(n.dataset.openRole,`${((o=ke.find(l=>l.id===n.dataset.openRole))==null?void 0:o.label)||"Workspace"} opened.`)})}),(r=document.querySelector("[data-role-controls]"))==null||r.addEventListener("click",()=>{oe("state-admin","Role Control Center opened."),requestAnimationFrame(()=>{var n;return(n=document.querySelector("#role-control-center"))==null?void 0:n.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelectorAll("[data-school-customization]").forEach(n=>n.addEventListener("click",()=>{oe("school-admin","School Customization opened."),requestAnimationFrame(()=>{var o;return(o=document.querySelector("#school-customization"))==null?void 0:o.scrollIntoView({behavior:"smooth",block:"start"})})})),document.querySelectorAll("[data-impersonate-profile]").forEach(n=>n.addEventListener("click",()=>Ks(n.dataset.impersonateProfile))),(u=document.querySelector("[data-stop-impersonating]"))==null||u.addEventListener("click",Zs),(v=document.querySelector("[data-start-tour]"))==null||v.addEventListener("click",()=>{s.tourOpen=!0,s.tourStep=0,oe(be[0].role,"Walkthrough started.")}),(p=document.querySelector("[data-tour-next]"))==null||p.addEventListener("click",()=>{if(s.tourStep>=be.length-1){s.tourOpen=!1,h("Walkthrough complete.");return}s.tourStep+=1,oe(be[s.tourStep].role)}),(L=document.querySelector("[data-tour-prev]"))==null||L.addEventListener("click",()=>{s.tourStep!==0&&(s.tourStep-=1,oe(be[s.tourStep].role))}),document.querySelectorAll("[data-action]").forEach(n=>{n.addEventListener("click",()=>h(n.dataset.action))}),(T=document.querySelector("[data-dismiss-toast]"))==null||T.addEventListener("click",()=>{s.toast="",b()}),(j=document.querySelector("[data-toggle-notifications]"))==null||j.addEventListener("click",()=>{s.notificationsOpen=!s.notificationsOpen,s.settingsOpen=!1,b()}),(G=document.querySelector("[data-toggle-settings]"))==null||G.addEventListener("click",()=>{s.settingsOpen=!s.settingsOpen,s.notificationsOpen=!1,b()}),document.querySelectorAll("[data-close-panel]").forEach(n=>{n.addEventListener("click",()=>{s.notificationsOpen=!1,s.settingsOpen=!1,b()})}),(A=document.querySelector("[data-mark-notifications]"))==null||A.addEventListener("click",()=>{Q.forEach(n=>{n.read=!0}),h("All notifications marked read.")}),document.querySelectorAll("[data-dismiss-notification]").forEach(n=>{n.addEventListener("click",()=>{const o=Q.findIndex(l=>l.id===n.dataset.dismissNotification);o>=0&&Q.splice(o,1),b()})}),document.querySelectorAll("[data-simulate-live]").forEach(n=>{n.addEventListener("click",()=>wa("manual"))}),(N=document.querySelector("[data-toggle-live]"))==null||N.addEventListener("change",n=>{s.liveUpdates=n.target.checked,h(s.liveUpdates?"Realtime updates enabled.":"Realtime updates paused.")}),(R=document.querySelector("#auth-provider"))==null||R.addEventListener("change",n=>{s.authProvider=n.target.value,f(`Updated auth provider to ${s.authProvider}`),h(`${s.authProvider} selected.`)}),(V=document.querySelector("#backend-provider"))==null||V.addEventListener("change",n=>{s.backendProvider=n.target.value,f(`Updated backend provider to ${s.backendProvider}`),h(`${s.backendProvider} selected as backend provider.`)}),document.querySelectorAll("[data-set-gateway]").forEach(n=>{n.addEventListener("click",()=>{s.gatewayMode=n.dataset.setGateway,z("Production","Gateway mode updated",`Launch gateway is now ${s.gatewayMode}.`),h(s.gatewayMode==="backend"?"Backend-ready mode enabled.":"Demo mode enabled.")})}),(X=document.querySelector("[data-provision-schema]"))==null||X.addEventListener("click",()=>{Ae.forEach(n=>{n.status="Ready"}),z("Database","Mock schema provisioned",`${Ae.length} production tables marked ready.`),f("Provisioned mock production schema"),h("Database blueprint marked ready.")}),document.querySelectorAll("[data-onboarding-task]").forEach(n=>{n.addEventListener("change",()=>{const o=ye.find(l=>l.id===n.dataset.onboardingTask);o&&(o.done=n.checked,f(`${o.done?"Completed":"Reopened"} onboarding task: ${o.label}`),h("Onboarding checklist updated."))})}),(ge=document.querySelector("#onboarding-user-form"))==null||ge.addEventListener("submit",n=>{n.preventDefault();const o=document.querySelector("#onboarding-user-name").value.trim(),l=document.querySelector("#onboarding-user-role").value;if(!o)return;const m=l==="Admin"?"school-admin":l.toLowerCase();B.push({id:`${l.toLowerCase()}-${Date.now()}`,label:o,role:l,landing:m,permissions:l==="Admin"?["manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]:l==="Teacher"?["lms","teacher-tools","message","submit-post"]:l==="Parent"?["message","submit-post"]:["student-missions"]}),U("Action",`${o} invited`,$().name,"Onboarding"),f(`Invited ${l}: ${o}`),h(`${o} invited as ${l}.`)}),(ee=document.querySelector("#production-file-upload"))==null||ee.addEventListener("change",async n=>{var l;const o=Array.from(n.target.files||[]);for(const m of o)if(s.apiMode==="live-api")try{const g=await Ve(m,s.role==="community"?"Community":"LMS");H.unshift(g.file)}catch{H.unshift({id:`upload-${Date.now()}-${Math.random().toString(16).slice(2)}`,name:m.name,area:s.role==="community"?"Community":"LMS",size:`${Math.max(1,Math.round(m.size/1024))} KB`,status:"Server upload failed; metadata stored locally"})}else H.unshift({id:`upload-${Date.now()}-${Math.random().toString(16).slice(2)}`,name:m.name,area:s.role==="community"?"Community":"LMS",size:`${Math.max(1,Math.round(m.size/1024))} KB`,status:"Stored in demo metadata; ready for cloud storage"});z("Files","Upload metadata captured",`${((l=n.target.files)==null?void 0:l.length)||0} file(s) added to production upload queue.`),f("Added production upload metadata"),h("File upload metadata added.")}),(ve=document.querySelector("[data-send-delivery-test]"))==null||ve.addEventListener("click",async()=>{if(s.apiMode==="live-api")try{(await js("Launch test group")).records.forEach(o=>J.unshift(o))}catch{["Email","SMS","Push"].forEach(n=>{J.unshift({id:`delivery-${Date.now()}-${n}`,channel:n,audience:"Launch test group",status:"Failed over locally",detail:`${n} test could not reach operational API`})})}else["Email","SMS","Push"].forEach(n=>{J.unshift({id:`delivery-${Date.now()}-${n}`,channel:n,audience:"Launch test group",status:"Delivered",detail:`${n} test generated from Launch Control`})});U("FYI","Notification delivery test completed",$().name,"Launch Control"),f("Sent notification delivery test batch"),h("Notification delivery test completed.")}),document.querySelectorAll("[data-operations-tab]").forEach(n=>n.addEventListener("click",()=>{s.activeOperationsTab=n.dataset.operationsTab,b()})),(at=document.querySelector("[data-run-isolation-test]"))==null||at.addEventListener("click",()=>{k.tenantIsolation.lastTest="Passed • Just now",f("Passed cross-tenant isolation test",De().name,q().label),h("Tenant isolation test passed: no cross-school records were exposed.")}),(st=document.querySelector("[data-optimize-storage]"))==null||st.addEventListener("click",()=>{k.storage.usedGb=Math.max(0,Number((k.storage.usedGb-1.2).toFixed(1))),f("Optimized cloud media storage"),h("Media optimization completed and 1.2 GB was reclaimed.")}),document.querySelectorAll("[data-verify-domain]").forEach(n=>n.addEventListener("click",async()=>{const o=k.domains.find(l=>l.schoolId===n.dataset.verifyDomain);if(o){if(s.apiMode==="live-api")try{Object.assign(o,(await Bs(o.schoolId)).domain)}catch(l){h(l.message);return}else Object.assign(o,{dns:"Verified",ssl:"Active",checkedAt:"Just now"});f(`Verified custom domain ${o.domain}`),h(`${o.domain} DNS and SSL are verified.`)}})),document.querySelectorAll("[data-security-setting]").forEach(n=>n.addEventListener("change",async()=>{if(k.security[n.dataset.securitySetting]=n.checked,s.apiMode==="live-api"&&n.dataset.securitySetting==="mfaRequired")try{await Us(n.checked)}catch(o){h(o.message);return}f(`Updated security policy ${n.dataset.securitySetting}`),h("Security policy updated.")})),(nt=document.querySelector("[data-session-timeout]"))==null||nt.addEventListener("change",n=>{k.security.sessionTimeoutMinutes=Number(n.target.value),h("Session timeout policy updated.")}),document.querySelectorAll("[data-revoke-session]").forEach(n=>n.addEventListener("click",()=>{k.security.activeSessions=k.security.activeSessions.filter(o=>o.id!==n.dataset.revokeSession),f("Revoked an active account session"),h("Session revoked.")})),(it=document.querySelector("[data-create-backup]"))==null||it.addEventListener("click",async()=>{if(s.apiMode==="live-api")try{await zs()}catch(n){h(n.message);return}k.backups.lastBackup="Just now",f("Created encrypted platform backup"),h("Encrypted backup created successfully.")}),(ot=document.querySelector("[data-test-restore]"))==null||ot.addEventListener("click",async()=>{if(s.apiMode==="live-api")try{await Fs()}catch(n){h(n.message);return}k.backups.lastRestoreTest="Passed • Just now",f("Completed backup restore drill"),h("Restore drill passed and the backup snapshot was valid.")}),(rt=document.querySelector("[data-run-accessibility-audit]"))==null||rt.addEventListener("click",()=>{k.accessibility.score=100,k.accessibility.issues=0,k.accessibility.lastAudit="Just now",h("WCAG 2.2 AA accessibility audit passed.")}),(lt=document.querySelector("#notification-template-form"))==null||lt.addEventListener("submit",n=>{n.preventDefault();const o=document.querySelector("#notification-template-name").value.trim(),l=document.querySelector("#notification-template-channel").value;k.notifications.templates.push({id:`template-${Date.now()}`,name:o,channels:[l],status:"Active"}),f(`Created notification template ${o}`),h(`${o} template created.`)}),document.querySelectorAll("[data-send-template]").forEach(n=>n.addEventListener("click",async()=>{const o=k.notifications.templates.find(l=>l.id===n.dataset.sendTemplate);if(o){if(s.apiMode==="live-api")try{await Ws({channel:o.channels[0],audience:"Test recipients",template:o.name})}catch(l){h(l.message);return}J.unshift({id:`template-delivery-${Date.now()}`,channel:o.channels.join(" + "),audience:"Test recipients",status:"Delivered",detail:o.name}),h(`${o.name} test delivered.`)}})),(ct=document.querySelector("[data-run-monitors]"))==null||ct.addEventListener("click",async()=>{var n;if(s.apiMode==="live-api")try{const o=await Hs();(n=o.monitors)!=null&&n.length&&k.monitors.splice(0,k.monitors.length,...o.monitors)}catch(o){h(o.message);return}else k.monitors.forEach((o,l)=>Object.assign(o,{status:"Operational",latency:82+l*31,checkedAt:"Just now"}));z("Monitoring","Production health checks passed","Website, API, storage, and notifications are operational."),h("All production service checks passed.")}),(dt=document.querySelector("[data-install-app]"))==null||dt.addEventListener("click",async()=>{Oe&&(await Oe.prompt(),await Oe.userChoice,Oe=null),s.pwaInstalled=!0,h("EduConnect is ready for offline use on this device.")}),(ut=document.querySelector("#enrollment-import-form"))==null||ut.addEventListener("submit",async n=>{var S;n.preventDefault();const o=(S=document.querySelector("#enrollment-file").files)==null?void 0:S[0];if(!o)return;const l=await o.text(),m=o.name.toLowerCase().endsWith(".json")?JSON.parse(l).length||0:Math.max(0,l.split(/\r?\n/).filter(Boolean).length-1);let g={id:`import-${Date.now()}`,schoolId:$().id,file:o.name,rows:m,accepted:m,needsReview:0,status:"Completed",createdAt:"Just now",recordType:document.querySelector("#enrollment-role").value};if(s.apiMode==="live-api")try{g=(await Gs($().id,o.name,Array.from({length:m},(P,_)=>({row:_+1})))).import}catch(P){h(P.message);return}k.enrollmentImports.unshift(g),f(`Imported ${m} enrollment records`,$().name),h(`${m} enrollment records validated and imported.`)}),(pt=document.querySelector("[data-export-roster]"))==null||pt.addEventListener("click",()=>{const n=["student,guardian,class,grade,attendance,status",...I.map(m=>[m.student,m.guardian,m.className,m.grade,m.attendance,m.status].map(g=>`"${String(g).replaceAll('"','""')}"`).join(","))].join(`
`),o=URL.createObjectURL(new Blob([n],{type:"text/csv"})),l=document.createElement("a");l.href=o,l.download=`${$().subdomain}-oneroster.csv`,l.click(),URL.revokeObjectURL(o),f("Exported OneRoster CSV"),h("OneRoster CSV exported.")}),(mt=document.querySelector("[data-send-enrollment-invites]"))==null||mt.addEventListener("click",()=>{U("FYI","Enrollment invitations sent",$().name,"Email + SMS"),h("Account invitations queued for enrolled families and staff.")}),document.querySelectorAll("[data-gradebook-weight]").forEach(n=>n.addEventListener("change",()=>{Ke().categories[Number(n.dataset.gradebookWeight)].weight=Number(n.value),h("Gradebook category weights updated.")})),(ht=document.querySelector("[data-generate-report-cards]"))==null||ht.addEventListener("click",()=>{f("Generated standards-based report cards"),h("Standards-based report cards generated for the active classes.")}),(gt=document.querySelector("[data-export-sis]"))==null||gt.addEventListener("click",()=>{Ke().sisExport.lastExport="Just now",f("Exported grades to SIS using OneRoster CSV"),h("Gradebook exported to the SIS.")}),(vt=document.querySelector("[data-open-family-settings]"))==null||vt.addEventListener("click",()=>{s.settingsOpen=!0,b()}),(bt=document.querySelector("[data-send-weekly-summary]"))==null||bt.addEventListener("click",()=>{J.unshift({id:`weekly-${Date.now()}`,channel:"Email",audience:q().label,status:"Delivered",detail:"Weekly family progress summary"}),h("Weekly family summary sent.")}),document.querySelectorAll("[data-security-check]").forEach(n=>{n.addEventListener("change",()=>{const o=$e.find(l=>l.id===n.dataset.securityCheck);o&&(o.done=n.checked,o.status=o.done?"Configured":"Needs review",f(`Updated security checklist: ${o.label}`),h("Security checklist updated."))})}),document.querySelectorAll("[data-toggle-setting]").forEach(n=>{n.addEventListener("change",()=>{s[n.dataset.toggleSetting]=n.checked,b()})}),document.querySelectorAll("[data-setting-select]").forEach(n=>n.addEventListener("change",()=>{s[n.dataset.settingSelect]=n.value,b()})),document.querySelectorAll("[data-notification-preference]").forEach(n=>n.addEventListener("change",()=>{s.notificationPreferences[n.dataset.notificationPreference]=n.checked,b()})),(ft=document.querySelector("[data-notification-days]"))==null||ft.addEventListener("change",n=>{s.notificationPreferences.dueDays=Number(n.target.value),b()}),(yt=document.querySelector("[data-send-preference-test]"))==null||yt.addEventListener("click",()=>{U("FYI","Your notification preferences are working",q().label,"Preference test"),h("Test notification added to your notification tray.")}),($t=document.querySelector("[data-export-demo]"))==null||$t.addEventListener("click",async()=>{const n=JSON.stringify(ba(),null,2),o=new Blob([n],{type:"application/json"}),l=URL.createObjectURL(o),m=document.createElement("a");m.href=l,m.download="educonnect-demo-state.json",m.click(),URL.revokeObjectURL(l),f("Exported demo state JSON");try{await navigator.clipboard.writeText(n),h("Demo state exported and copied to clipboard.")}catch{h("Demo state exported as a JSON file.")}}),(St=document.querySelector("#import-demo-state"))==null||St.addEventListener("change",async n=>{var l;const o=(l=n.target.files)==null?void 0:l[0];if(o)try{const m=JSON.parse(await o.text()),g=en(m);if(g.length){h(`Import failed: ${g.join(" ")}`);return}et(m),f("Imported demo state JSON"),h("Demo state imported.")}catch{h("That JSON file could not be imported.")}}),(wt=document.querySelector("[data-add-school]"))==null||wt.addEventListener("click",_n),(kt=document.querySelector("[data-create-assignment]"))==null||kt.addEventListener("click",Jn),(At=document.querySelector("#assignment-form"))==null||At.addEventListener("submit",n=>{n.preventDefault();const o=document.querySelector("#assignment-title").value.trim();if(!o)return;const l=document.querySelector("#assignment-class").value;Ca({title:o,className:l,type:document.querySelector("#assignment-type").value,lockDate:document.querySelector("#assignment-due").value,dueDate:document.querySelector("#assignment-due").value,instructions:document.querySelector("#assignment-instructions").value.trim(),points:Number(document.querySelector("#assignment-points").value),maxAttempts:Number(document.querySelector("#assignment-attempts").value),allowResubmit:document.querySelector("#assignment-resubmit").checked}),h(`${o} added to ${l}.`)}),document.querySelectorAll("[data-new-lesson]").forEach(n=>n.addEventListener("click",()=>la())),(Lt=document.querySelector("[data-close-lesson-builder]"))==null||Lt.addEventListener("click",()=>{s.lessonBuilderOpen=!1,s.lessonDraft=null,b()}),(Mt=document.querySelector("#lesson-filter"))==null||Mt.addEventListener("change",n=>{s.lessonFilter=n.target.value,b()}),document.querySelectorAll("[data-edit-lesson]").forEach(n=>n.addEventListener("click",()=>la(n.dataset.editLesson))),document.querySelectorAll("[data-toggle-lesson]").forEach(n=>n.addEventListener("click",()=>Yn(n.dataset.toggleLesson))),document.querySelectorAll("[data-preview-lesson]").forEach(n=>n.addEventListener("click",()=>{s.lessonPreviewId=n.dataset.previewLesson,b(),requestAnimationFrame(()=>{var o;return(o=document.querySelector(".lesson-preview-panel"))==null?void 0:o.scrollIntoView({behavior:"smooth",block:"center"})})})),(Et=document.querySelector("[data-close-lesson-preview]"))==null||Et.addEventListener("click",()=>{s.lessonPreviewId="",b()}),document.querySelectorAll("[data-lesson-field]").forEach(n=>{n.addEventListener("change",()=>{if(!s.lessonDraft)return;const o=n.dataset.lessonField;s.lessonDraft[o]=n.type==="checkbox"?n.checked:n.type==="number"?Number(n.value):n.value}),n.addEventListener("input",()=>{!s.lessonDraft||["checkbox","number"].includes(n.type)||(s.lessonDraft[n.dataset.lessonField]=n.value)})}),document.querySelectorAll("[data-block-field]").forEach(n=>{const o=()=>{var S,P;const[l,m]=n.dataset.blockField.split(":"),g=(S=s.lessonDraft)==null?void 0:S.blocks.find(_=>_.id===l);g&&(g[m]=n.type==="checkbox"?n.checked:n.type==="number"?Number(n.value):n.value,m==="questionType"&&n.value==="True or false"&&(g.options=["True","False","",""],g.correctAnswer=0,b()),m==="questionType"&&n.value==="Short answer"&&(g.options=["","","",""],g.correctAnswer=0,b()),m==="questionType"&&n.value==="Fill in the blank"&&(g.options=["","","",""],g.correctAnswer=0,b()),m==="questionType"&&n.value==="Matching"&&(g.pairs=(P=g.pairs)!=null&&P.length?g.pairs:[{left:"",right:""},{left:"",right:""}],b()))};n.addEventListener("change",o),n.addEventListener("input",o)}),document.querySelectorAll("[data-quiz-option]").forEach(n=>n.addEventListener("input",()=>{var g;const[o,l]=n.dataset.quizOption.split(":"),m=(g=s.lessonDraft)==null?void 0:g.blocks.find(S=>S.id===o);m&&(m.options[Number(l)]=n.value)})),document.querySelectorAll("[data-match-pair]").forEach(n=>n.addEventListener("input",()=>{var S,P;const[o,l,m]=n.dataset.matchPair.split(":"),g=(S=s.lessonDraft)==null?void 0:S.blocks.find(_=>_.id===o);(P=g==null?void 0:g.pairs)!=null&&P[Number(l)]&&(g.pairs[Number(l)][m]=n.value)})),(Ct=document.querySelector("[data-add-bank-question]"))==null||Ct.addEventListener("click",()=>{const n=Te.find(o=>{var l;return o.id===((l=document.querySelector("#question-bank-select"))==null?void 0:l.value)});!n||!s.lessonDraft||(s.lessonDraft.blocks.push({...structuredClone(n),id:`block-bank-${Date.now()}`,type:"quiz",title:`${n.subject} check`,required:!0,timeLimit:0,maxAttempts:2,randomize:!1,showAnswers:!0,pairs:n.pairs||[{left:"",right:""},{left:"",right:""}]}),b())}),document.querySelectorAll("[data-lesson-media-upload]").forEach(n=>n.addEventListener("change",async()=>{var m,g;const o=(m=n.files)==null?void 0:m[0],l=(g=s.lessonDraft)==null?void 0:g.blocks.find(S=>S.id===n.dataset.lessonMediaUpload);if(!(!o||!l)){if(o.size>5*1024*1024){h("Lesson media must be 5 MB or smaller.");return}try{let S;if(s.apiMode==="live-api")S=(await Ve(o,"Lesson Media")).file;else{const P=o.size<=768e3?await new Promise((_,Fe)=>{const ie=new FileReader;ie.onload=()=>_(String(ie.result)),ie.onerror=()=>Fe(ie.error),ie.readAsDataURL(o)}):"";S={id:`lesson-file-${Date.now()}`,name:o.name,type:o.type,size:`${Math.max(1,Math.round(o.size/1024))} KB`,status:P?"Ready":"Metadata saved; upload on publish",dataUrl:P}}l.file=S,l.mediaType=o.type.startsWith("image/")?"Image":o.type.startsWith("video/")?"Video":o.type.startsWith("audio/")?"Audio":"Document",H.some(P=>P.id===S.id)||H.unshift(S),h(`${o.name} attached to the lesson.`)}catch{h(`Could not upload ${o.name}.`)}}})),document.querySelectorAll("[data-correct-answer]").forEach(n=>n.addEventListener("change",()=>{var l;const o=(l=s.lessonDraft)==null?void 0:l.blocks.find(m=>m.id===n.dataset.correctAnswer);o&&(o.correctAnswer=Number(n.value))})),document.querySelectorAll("[data-add-lesson-block]").forEach(n=>n.addEventListener("click",()=>{var o;(o=s.lessonDraft)==null||o.blocks.push($a(n.dataset.addLessonBlock,s.lessonDraft.blocks.length)),b()})),document.querySelectorAll("[data-remove-lesson-block]").forEach(n=>n.addEventListener("click",()=>{if(!s.lessonDraft||s.lessonDraft.blocks.length===1){h("A lesson must keep at least one block.");return}s.lessonDraft.blocks=s.lessonDraft.blocks.filter(o=>o.id!==n.dataset.removeLessonBlock),b()})),document.querySelectorAll("[data-move-lesson-block]").forEach(n=>n.addEventListener("click",()=>{if(!s.lessonDraft)return;const[o,l]=n.dataset.moveLessonBlock.split(":"),m=s.lessonDraft.blocks.findIndex(S=>S.id===o),g=l==="up"?m-1:m+1;m<0||g<0||g>=s.lessonDraft.blocks.length||([s.lessonDraft.blocks[m],s.lessonDraft.blocks[g]]=[s.lessonDraft.blocks[g],s.lessonDraft.blocks[m]],b())})),(qt=document.querySelector("#lesson-builder-form"))==null||qt.addEventListener("submit",n=>{var o;n.preventDefault(),Vn(((o=n.submitter)==null?void 0:o.dataset.lessonStatus)||"Draft")}),document.querySelectorAll("[data-open-student-lesson]").forEach(n=>n.addEventListener("click",()=>{s.activeStudentLessonId=n.dataset.openStudentLesson,b()})),(Pt=document.querySelector("[data-submit-lesson]"))==null||Pt.addEventListener("submit",n=>{n.preventDefault(),Qn(n.currentTarget.dataset.submitLesson,n.currentTarget)}),document.querySelectorAll("[data-complete-lesson-block]").forEach(n=>n.addEventListener("click",()=>{var g;const[o,l]=n.dataset.completeLessonBlock.split(":");s.lessonProgress||(s.lessonProgress={});const m=(g=s.lessonProgress)[o]||(g[o]={completed:!1,score:0,earned:0,available:0,answers:{},attempts:0,completedBlocks:[]});m.completedBlocks=[...new Set([...m.completedBlocks||[],l])],h("Lesson progress saved. You can resume here later.")})),document.querySelectorAll("[data-bookmark-lesson]").forEach(n=>n.addEventListener("click",()=>{const o=n.dataset.bookmarkLesson;s.bookmarkedLessons||(s.bookmarkedLessons=[]),s.bookmarkedLessons=s.bookmarkedLessons.includes(o)?s.bookmarkedLessons.filter(l=>l!==o):[...s.bookmarkedLessons,o],h(s.bookmarkedLessons.includes(o)?"Lesson bookmarked.":"Bookmark removed.")})),document.querySelectorAll("[data-save-lesson-note]").forEach(n=>n.addEventListener("click",()=>{var l;const o=n.dataset.saveLessonNote;s.studentNotes||(s.studentNotes={}),s.studentNotes[o]=((l=document.querySelector(`[data-lesson-note="${o}"]`))==null?void 0:l.value.trim())||"",h("Private lesson notes saved.")})),document.querySelectorAll("[data-read-lesson]").forEach(n=>n.addEventListener("click",()=>{const o=M.find(l=>l.id===n.dataset.readLesson);if(!o||!("speechSynthesis"in window)){h("Read aloud is not available in this browser.");return}speechSynthesis.cancel(),speechSynthesis.speak(new SpeechSynthesisUtterance([o.title,o.summary,...o.blocks.filter(l=>l.type==="text").map(l=>`${l.title}. ${l.body}`)].join(". "))),s.toast="Reading lesson aloud.",b()})),document.querySelectorAll("[data-download-certificate]").forEach(n=>n.addEventListener("click",()=>{var P;const o=M.find(_=>_.id===n.dataset.downloadCertificate),l=(P=s.lessonProgress)==null?void 0:P[n.dataset.downloadCertificate];if(!o||!(l!=null&&l.certificate))return;const m=new Blob([`EduConnect Certificate of Completion

${q().label}
${o.title}
Score: ${l.score}%
${$().name}`],{type:"text/plain"}),g=URL.createObjectURL(m),S=document.createElement("a");S.href=g,S.download=`${o.title.replace(/[^a-z0-9]+/gi,"-").toLowerCase()}-certificate.txt`,S.click(),URL.revokeObjectURL(g),f(`Downloaded certificate for ${o.title}`,q().label),h("Certificate downloaded.")})),document.querySelectorAll("[data-open-assignment]").forEach(n=>n.addEventListener("click",()=>{s.activeAssignmentId=n.dataset.openAssignment,b()})),(Dt=document.querySelector("[data-assignment-work]"))==null||Dt.addEventListener("submit",n=>{var g,S;n.preventDefault();const o=x.find(P=>P.id===n.currentTarget.dataset.assignmentWork),l=fe(o==null?void 0:o.id,!0);if(!o||!l)return;const m=((g=n.submitter)==null?void 0:g.dataset.workStatus)||"Draft";if(m==="Submitted"&&l.status==="Returned"&&l.attempt>=(o.maxAttempts||1)){h("Maximum assignment attempts reached.");return}if(l.response=((S=document.querySelector("#student-assignment-response"))==null?void 0:S.value.trim())||"",m==="Submitted"&&!l.response&&!l.attachments.length){h("Add a written response or attachment before submitting.");return}m==="Submitted"&&l.status==="Returned"&&(l.attempt+=1),l.status=m,l.submittedAt=m==="Submitted"?"Just now":l.submittedAt,m==="Submitted"&&(U("Action",`${l.student} submitted ${o.title}`,o.className,"Teacher inbox"),z("LMS",`${o.title} submitted`,`${l.student} sent attempt ${l.attempt}.`)),f(`${m==="Submitted"?"Submitted":"Saved draft for"} ${o.title}`,l.student),h(`${o.title} ${m==="Submitted"?"submitted":"draft saved"}.`)}),(xt=document.querySelector("[data-assignment-file]"))==null||xt.addEventListener("change",async n=>{const o=n.target.dataset.assignmentFile,l=fe(o,!0);for(const m of Array.from(n.target.files||[]))if(!(m.size>5*1024*1024))try{const g=s.apiMode==="live-api"?(await Ve(m,"Assignment Submission")).file:{id:`assignment-file-${Date.now()}-${Math.random().toString(16).slice(2)}`,name:m.name,type:m.type,size:`${Math.max(1,Math.round(m.size/1024))} KB`,status:"Ready"};l.attachments.push(g),H.some(S=>S.id===g.id)||H.unshift(g)}catch{}h("Assignment attachments updated.")}),document.querySelectorAll("[data-remove-assignment-file]").forEach(n=>n.addEventListener("click",()=>{const[o,l]=n.dataset.removeAssignmentFile.split(":"),m=fe(o);m&&(m.attachments=m.attachments.filter(g=>g.id!==l)),h("Attachment removed.")})),document.querySelectorAll("[data-return-submission]").forEach(n=>n.addEventListener("submit",o=>{o.preventDefault();const l=de.find(S=>S.id===n.dataset.returnSubmission),m=x.find(S=>S.id===(l==null?void 0:l.assignmentId));if(!l||!m)return;l.score=Number(n.querySelector("[data-grade-score]").value),l.feedback=n.querySelector("[data-grade-feedback]").value.trim(),l.status="Returned",l.returnedAt="Just now";let g=F.find(S=>S.assignment===m.title&&S.student===l.student);g?Object.assign(g,{status:"Reviewed",score:l.score,comment:l.feedback}):(g={id:`grade-${Date.now()}`,student:l.student,assignment:m.title,status:"Reviewed",score:l.score,rubric:[["Completion",4],["Accuracy",4],["Explanation",4]],comment:l.feedback},F.unshift(g)),U("FYI",`${m.title} was graded`,l.student,"Student inbox"),f(`Returned graded assignment ${m.title}`,l.student),h(`${m.title} returned to ${l.student}.`)})),(Tt=document.querySelector("#course-create-form"))==null||Tt.addEventListener("submit",n=>{n.preventDefault();const o=document.querySelector("#course-title").value.trim();re.push({id:`course-${Date.now()}`,title:o,subject:document.querySelector("#course-subject").value,grade:document.querySelector("#course-grade").value.trim(),className:Y[0].name,standards:[],units:[]}),f(`Created curriculum course ${o}`),h(`${o} added to the curriculum map.`)}),document.querySelectorAll("[data-add-unit]").forEach(n=>n.addEventListener("submit",o=>{o.preventDefault();const l=re.find(g=>g.id===n.dataset.addUnit),m=n.querySelector("input");!l||!m.value.trim()||(l.units.push({id:`unit-${Date.now()}`,title:m.value.trim(),description:"New curriculum unit",lessonIds:[],assignmentIds:[]}),h(`${m.value.trim()} added to ${l.title}.`))})),document.querySelectorAll("[data-link-curriculum]").forEach(n=>n.addEventListener("submit",o=>{o.preventDefault();const[l,m]=n.dataset.linkCurriculum.split(":"),g=re.find(ie=>ie.id===l),S=g==null?void 0:g.units.find(ie=>ie.id===m),[P,_]=n.querySelector("select").value.split(":");if(!S)return;const Fe=P==="lesson"?S.lessonIds:S.assignmentIds;Fe.includes(_)||Fe.push(_),f(`Linked ${P} to ${g.title}: ${S.title}`),h(`Content linked to ${S.title}.`)})),(Nt=document.querySelector("[data-send-class-reminder]"))==null||Nt.addEventListener("click",()=>{const n=["email","sms","push"].filter(o=>s.notificationPreferences[o]);(n.length?n:["dashboard"]).forEach(o=>J.unshift({id:`reminder-${Date.now()}-${o}`,channel:o.toUpperCase(),audience:s.selectedClass==="All"?"All active classes":s.selectedClass,status:"Delivered",detail:`Assignment reminder sent by ${q().label}`})),U("FYI","Class assignment reminder sent",s.selectedClass==="All"?"All active classes":s.selectedClass,n.join(" + ")||"Dashboard"),f("Sent class assignment reminder"),h("Class reminder sent using the selected notification channels.")}),(Ot=document.querySelector("[data-continue-adventure]"))==null||Ot.addEventListener("click",Kn),(Rt=document.querySelector("[data-refresh-activity]"))==null||Rt.addEventListener("click",Zn),document.querySelectorAll("[data-reply-student]").forEach(n=>{n.addEventListener("click",()=>Xn(n.dataset.replyStudent))}),document.querySelectorAll("[data-guardrail]").forEach(n=>{n.addEventListener("change",()=>{s.guardrails[n.dataset.guardrail]=n.checked,f(`Updated guardrail ${n.dataset.guardrail}`),h("Guardrail setting updated.")})}),document.querySelectorAll("[data-profile-permission]").forEach(n=>{n.addEventListener("change",()=>{const[o,l]=n.dataset.profilePermission.split(":"),m=B.find(g=>g.id===o);m&&(m.permissions=n.checked?[...new Set([...m.permissions,l])]:m.permissions.filter(g=>g!==l),f(`Updated ${m.role} permission: ${l}`),h(`${m.role} permissions updated.`))})}),document.querySelectorAll("[data-submission]").forEach(n=>{n.addEventListener("click",()=>{s.selectedSubmissionId=n.dataset.submission,b()})}),document.querySelectorAll("[data-save-submission]").forEach(n=>{n.addEventListener("click",()=>{const o=F.find(l=>l.id===n.dataset.saveSubmission);o&&(o.comment=document.querySelector("#submission-comment").value.trim(),o.status="Reviewed",f(`Saved gradebook comment for ${o.student}`,o.assignment),h("Gradebook comment saved."))})}),document.querySelectorAll("[data-complete]").forEach(n=>{n.addEventListener("click",()=>{const o=Number(n.dataset.complete);s.completed.includes(o)||s.completed.push(o);const l=We.find(m=>m.id===o);h(`${(l==null?void 0:l.title)||"Mission"} marked complete.`)})}),(It=document.querySelector("#class-filter"))==null||It.addEventListener("change",n=>{s.selectedClass=n.target.value,b()}),(jt=document.querySelector("#roster-filter"))==null||jt.addEventListener("change",n=>{s.rosterFilter=n.target.value,b()}),document.querySelectorAll("[data-roster-grade], [data-roster-attendance], [data-roster-status]").forEach(n=>{n.addEventListener("change",()=>{const o=n.dataset.rosterGrade||n.dataset.rosterAttendance||n.dataset.rosterStatus,l=I.find(m=>m.id===o);l&&(n.dataset.rosterGrade&&(l.grade=Math.max(0,Math.min(100,Number(n.value)||0))),n.dataset.rosterAttendance&&(l.attendance=Math.max(0,Math.min(100,Number(n.value)||0))),n.dataset.rosterStatus&&(l.status=n.value),z("Roster",`${l.student} record updated`,`Grade ${l.grade}%, attendance ${l.attendance}%, status ${l.status}.`),f(`Updated roster record for ${l.student}`,l.className),h(`${l.student}'s roster record updated.`))})}),document.querySelectorAll("[data-lms-account]").forEach(n=>{n.addEventListener("click",()=>{s.activeAccount=n.dataset.lmsAccount,b()})}),(zt=document.querySelector("[data-build-offline]"))==null||zt.addEventListener("click",()=>{s.offlinePackReady=!0,Ne.forEach(n=>{n.status=n.status.replace("Waiting for pack","Queued for upload")}),h("Offline pack built and sync queue prepared.")}),(Ft=document.querySelector("#state-filter"))==null||Ft.addEventListener("change",n=>{s.selectedState=n.target.value;const o=De();s.selectedDistrict=o.districts[0].id,s.selectedSchool=o.districts[0].schools[0].id,b()}),(Bt=document.querySelector("#district-filter"))==null||Bt.addEventListener("change",n=>{s.selectedDistrict=n.target.value,s.selectedSchool=Se().schools[0].id,b()}),(Gt=document.querySelector("#school-filter"))==null||Gt.addEventListener("change",n=>{s.selectedSchool=n.target.value,b()}),(Ut=document.querySelector("#design-form"))==null||Ut.addEventListener("submit",n=>{n.preventDefault(),rn(),f(`Updated school customization for ${$().name}`),h(`${$().name} customization saved.`)}),document.querySelectorAll("#design-primary, #design-accent, #design-highlight, #design-background").forEach(n=>n.addEventListener("input",()=>{const o=document.querySelector(".school-brand-preview");if(!o)return;const l={"design-primary":"--primary","design-accent":"--teal","design-highlight":"--gold","design-background":"--background"}[n.id];o.style.setProperty(l,n.value)})),(Wt=document.querySelector("#customization-school-filter"))==null||Wt.addEventListener("change",n=>{s.selectedSchool=n.target.value,b()}),document.querySelectorAll("[data-design-preset]").forEach(n=>{n.addEventListener("click",()=>{const o=$(),l=Ye.find(m=>m.name===n.dataset.designPreset);l&&(ae[o.id]={...xe(),...l},o.theme=l.name,f(`Applied ${l.name} theme`,o.name),h(`${l.name} applied to ${o.name}.`))})}),(Ht=document.querySelector("[data-reset-school-design]"))==null||Ht.addEventListener("click",()=>{const n=$(),o=Ye[0];ae[n.id]={...xe(),...o},n.theme=o.name,f("Reset school colors",n.name),h(`${n.name} colors reset.`)}),document.querySelectorAll("[data-manage-district]").forEach(n=>{n.addEventListener("click",()=>{s.selectedDistrict=n.dataset.manageDistrict,s.selectedSchool=Se().schools[0].id,b()})}),document.querySelectorAll("[data-manage-school]").forEach(n=>{n.addEventListener("click",()=>{s.selectedSchool=n.dataset.manageSchool,b()})}),document.querySelectorAll("[data-deadline]").forEach(n=>{n.addEventListener("change",()=>{const o=n.dataset.deadline;s.checkedDeadlines=s.checkedDeadlines.includes(o)?s.checkedDeadlines.filter(l=>l!==o):[...s.checkedDeadlines,o],b()})}),document.querySelectorAll("[data-filter]").forEach(n=>{n.addEventListener("click",()=>{s.conversationFilter=n.dataset.filter;const o=D.find(l=>l.type===s.conversationFilter);o&&(s.activeConversationId=o.id),b()})}),document.querySelectorAll("[data-conversation]").forEach(n=>{n.addEventListener("click",()=>{s.activeConversationId=n.dataset.conversation;const o=D.find(l=>l.id===s.activeConversationId);o&&(o.unread=0),b()})}),(_t=document.querySelector("#message-draft"))==null||_t.addEventListener("input",n=>{s.draft=n.target.value}),(Jt=document.querySelector("[data-toggle-hours]"))==null||Jt.addEventListener("click",()=>{s.workHoursOpen=!s.workHoursOpen,b()}),(Vt=document.querySelector("[data-toggle-emergency]"))==null||Vt.addEventListener("click",()=>{s.emergencyOverride=!s.emergencyOverride,f(`${s.emergencyOverride?"Enabled":"Disabled"} emergency override`),b()}),document.querySelectorAll("[data-start-call]").forEach(n=>{n.addEventListener("click",()=>{const o=D.find(l=>l.id===n.dataset.startCall);o&&(s.activeCallName=o.name,z("Messages",`Live call started with ${o.name}`,"Video room is active in the communication hub."),f(`Started video call with ${o.name}`,$().name),h(`Video call started with ${o.name}.`))})}),(Yt=document.querySelector("[data-end-call]"))==null||Yt.addEventListener("click",()=>{const n=s.activeCallName;s.activeCallName="",n&&z("Messages",`Live call ended with ${n}`,"Call state closed."),h("Video call ended.")}),(Qt=document.querySelector("#compose"))==null||Qt.addEventListener("submit",n=>{if(n.preventDefault(),!s.workHoursOpen&&!s.emergencyOverride)return;const o=s.draft.trim();o&&(D.splice(0,D.length,...D.map(l=>l.id===s.activeConversationId?{...l,preview:o,messages:[...l.messages,{from:"me",text:o,time:"Now"}]}:l)),z("Messages","Message sent",`Delivered to ${q().label}'s active conversation.`),U("FYI","Message delivered",$().name,"Messages"),s.draft="",b())}),(Kt=document.querySelector("#board-form"))==null||Kt.addEventListener("submit",n=>{n.preventDefault();const o=$();te().pending.unshift({id:`${o.id}-${Date.now()}`,author:document.querySelector("#board-author").value.trim()||"Community Member",role:document.querySelector("#board-role").value,type:document.querySelector("#board-type").value,audience:document.querySelector("#board-audience").value,title:document.querySelector("#board-title").value.trim(),body:document.querySelector("#board-body").value.trim(),media:document.querySelector("#board-media").value.trim()||"No media",approverId:document.querySelector("#board-approver").value,time:"Awaiting administrator approval"}),z("Community","Community post submitted",`${document.querySelector("#board-title").value.trim()} is waiting for approval.`),U("Action","Community post awaiting approval",o.name,"Approval queue"),f("Submitted community post for approval",o.name),h("Post submitted for administrator approval.")}),document.querySelectorAll("[data-approver-toggle]").forEach(n=>{n.addEventListener("change",()=>{const o=te();o.approvers=o.approvers.map(l=>l.id===n.dataset.approverToggle?{...l,active:n.checked}:l),b()})}),(Zt=document.querySelector("#approver-form"))==null||Zt.addEventListener("submit",n=>{n.preventDefault();const o=te(),l=document.querySelector("#new-approver-name").value.trim();l&&(o.approvers.push({id:`${l.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${Date.now()}`,name:l,title:document.querySelector("#new-approver-title").value,active:!0}),b())}),document.querySelectorAll("[data-approve-post]").forEach(n=>{n.addEventListener("click",()=>{const o=te(),l=o.pending.find(m=>m.id===n.dataset.approvePost);l&&(o.pending=o.pending.filter(m=>m.id!==l.id),o.published.unshift({...l,time:"Approved just now"}),f(`Approved community post: ${l.title}`),b())})}),document.querySelectorAll("[data-reject-post]").forEach(n=>{n.addEventListener("click",()=>{const o=te(),l=o.pending.find(m=>m.id===n.dataset.rejectPost);o.pending=o.pending.filter(m=>m.id!==n.dataset.rejectPost),l&&f(`Rejected community post: ${l.title}`),b()})})}async function ai(){"serviceWorker"in navigator&&Pe()&&navigator.serviceWorker.register("/service-worker.js").catch(()=>{}),_s();const e=window.location.hostname.toLowerCase(),t=se.flatMap(a=>a.districts).flatMap(a=>a.schools).find(a=>[a.customDomain,`${a.subdomain}.educationalsystem.fieldserviceit.com`,a.id==="ps-118"?"educationalsystem.fieldserviceit.com":""].filter(Boolean).includes(e));if(t&&(s.selectedSchool=t.id),Pe()&&(s.apiMode="live-api",localStorage.getItem("educonnect-session-token")))try{const a=await Is();C={...B.find(r=>r.id===a.user.id),...a.user},s.currentUser=C.id}catch{localStorage.removeItem("educonnect-session-token")}if(C&&(s.apiMode==="mock-api"||s.apiMode==="live-api"))try{await fa(s.apiMode)}catch{Pe()||(s.apiMode="local",s.toast="Server API unavailable. Local demo state mode enabled.")}if(C){const a=ia();s.role=a&&pe().includes(a)?a:C.landing}window.addEventListener("hashchange",()=>{if(!C)return;const a=ia();a&&a!==s.role&&Le(a,!1)}),window.addEventListener("load",Qe),b(),window.setInterval(()=>{!C||!s.liveUpdates||document.hidden||wa("automatic")},15e3)}ai();
