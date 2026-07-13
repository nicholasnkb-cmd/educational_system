(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function a(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function n(r){if(r.ep)return;r.ep=!0;const d=a(r);fetch(r.href,d)}})();/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=(e,s,a=[])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(s).forEach(r=>{n.setAttribute(r,String(s[r]))}),a.length&&a.forEach(r=>{const d=ua(...r);n.appendChild(d)}),n};var Pa=([e,s,a])=>ua(e,s,a);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=e=>Array.from(e.attributes).reduce((s,a)=>(s[a.name]=a.value,s),{}),La=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",Ea=e=>e.flatMap(La).map(a=>a.trim()).filter(Boolean).filter((a,n,r)=>r.indexOf(a)===n).join(" "),Da=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(s,a,n)=>a.toUpperCase()+n.toLowerCase()),na=(e,{nameAttr:s,icons:a,attrs:n})=>{var oe;const r=e.getAttribute(s);if(r==null)return;const d=Da(r),f=a[d];if(!f)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const h=Ca(e),[I,ve,fe]=f,ne={...ve,"data-lucide":r,...n,...h},ie=Ea(["lucide",`lucide-${r}`,h,n]);ie&&Object.assign(ne,{class:ie});const be=Pa([I,ne,fe]);return(oe=e.parentNode)==null?void 0:oe.replaceChild(be,e)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=["svg",u,[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=["svg",u,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=["svg",u,[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=["svg",u,[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=["svg",u,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=["svg",u,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=["svg",u,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=["svg",u,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=["svg",u,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=["svg",u,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=["svg",u,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=["svg",u,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=["svg",u,[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=["svg",u,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=["svg",u,[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=["svg",u,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=["svg",u,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=["svg",u,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=["svg",u,[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=["svg",u,[["path",{d:"m3 11 18-5v12L3 14v-3z"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=["svg",u,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=["svg",u,[["path",{d:"M13.234 20.252 21 12.3"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=["svg",u,[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=["svg",u,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=["svg",u,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=["svg",u,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=["svg",u,[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=["svg",u,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=["svg",u,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=["svg",u,[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=["svg",u,[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=["svg",u,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=["svg",u,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=["svg",u,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=["svg",u,[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=["svg",u,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=["svg",u,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=["svg",u,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=["svg",u,[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=["svg",u,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=({icons:e={},nameAttr:s="data-lucide",attrs:a={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${s}]`);if(Array.from(n).forEach(r=>na(r,{nameAttr:s,icons:e,attrs:a})),s==="data-lucide"){const r=document.querySelectorAll("[icon-name]");r.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(r).forEach(d=>na(d,{nameAttr:"icon-name",icons:e,attrs:a})))}},ae=[{id:"state-admin",label:"State Admin",icon:"map",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"district-admin",label:"District Admin",icon:"building-2",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"school-admin",label:"School Admin",icon:"shield-check",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"lms",label:"LMS",icon:"layers",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"student",label:"Student",icon:"sparkles",image:"/stitch_educonnect_interactive_portal/student_portal_1/screen.png"},{id:"teacher",label:"Teacher",icon:"graduation-cap",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"parent",label:"Parent",icon:"users",image:"/stitch_educonnect_interactive_portal/parent_dashboard/screen.png"},{id:"messages",label:"Messages",icon:"message-circle",image:"/stitch_educonnect_interactive_portal/communication_hub/screen.png"},{id:"community",label:"Community",icon:"megaphone",image:"/stitch_educonnect_interactive_portal/communication_hub/screen.png"}],t={role:"state-admin",selectedState:"ny",selectedDistrict:"nyc-doe",selectedSchool:"ps-118",completed:[],selectedClass:"All",checkedDeadlines:["Science: Water Cycle Model"],conversationFilter:"Parents",activeConversationId:"sarah",draft:"",boardAudience:"All families",activeAccount:"teacher-school",selectedSubmissionId:"sub-1",rosterFilter:"All",liveUpdates:!0,realtimeTick:0,activeCallName:"",gatewayMode:"demo",backendProvider:"Supabase",authProvider:"Role-based demo auth",offlinePackReady:!1,workHoursOpen:!0,emergencyOverride:!1,currentUser:"state-admin",apiMode:"local",tourOpen:!1,tourStep:0,searchTerm:"",notificationsOpen:!1,settingsOpen:!1,toast:"",compactMode:!1,highContrast:!1,guardrails:{lockSubmissions:!0,hideAnswers:!0,parentSummaries:!0}},M=[{id:"state-admin",label:"NYS State Admin",role:"State Admin",landing:"state-admin",scope:"state",stateId:"ny",permissions:["manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]},{id:"district-admin",label:"District Admin",role:"District Admin",landing:"district-admin",scope:"district",stateId:"ny",districtId:"nyc-doe",permissions:["manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]},{id:"school-admin",label:"School Admin",role:"School Admin",landing:"school-admin",scope:"school",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",permissions:["approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]},{id:"teacher",label:"Demo Teacher",role:"Teacher",landing:"teacher",scope:"school",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",permissions:["lms","teacher-tools","message","submit-post"]},{id:"student",label:"Demo Learner",role:"Student",landing:"student",scope:"student",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",studentId:"learner-1",permissions:["student-missions"]},{id:"parent",label:"Demo Guardian",role:"Parent",landing:"parent",scope:"guardian",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",studentIds:["learner-1"],permissions:["message","submit-post"]}],bt=[["manage-tenants","Manage tenants"],["manage-users","Manage users"],["view-compliance","View compliance"],["approve-posts","Approve posts"],["emergency","Emergency override"],["lms","Manage LMS"],["teacher-tools","Teacher tools"],["message","Messaging"],["submit-post","Submit posts"],["student-missions","Student missions"]],ke=[{id:1,subject:"Science",title:"Space Explorers: The Moon",due:"Due tomorrow",action:"Start Mission",progress:78,accent:"teal",icon:"rocket"},{id:2,subject:"Math",title:"Number Quest: Addition",due:"Due in 2 days",action:"Play Now",progress:44,accent:"blue",icon:"star"},{id:3,subject:"Reading",title:"The Whale and the Star",due:"Keep reading",action:"Continue",progress:56,accent:"gold",icon:"book-open"}],K=[{id:"ny",name:"New York",agency:"NYS Education Department (NYSED)",districts:[{id:"nyc-doe",name:"New York City Public Schools",region:"New York City",superintendent:"NYC Chancellor",schools:[{id:"ps-118",name:"P.S. 118 Discovery Academy",category:"Public",students:684,staff:78,status:"Active",subdomain:"ps118",plan:"District Core",modules:["SIS","LMS","Messaging","Family Portal"],storage:64,uptime:"99.98%",theme:"Discovery Blue",isolation:"Dedicated tenant database",avgGrade:"88.4%",attendance:"94.2%",messages:"3 pending",studentPoints:1240,studentName:"Demo Learner",guardianName:"Demo Guardian",learnerName:"Demo Learner",workHours:"Mon-Fri, 8:00 AM-4:30 PM",afterHours:"Messages are held until the next work day"},{id:"bronx-charter",name:"Bronx Learning Charter",category:"Chartered",students:412,staff:49,status:"Onboarding",subdomain:"bronxlearning",plan:"Charter Launch",modules:["SIS","Messaging","Enrollment"],storage:31,uptime:"99.91%",theme:"Charter Gold",isolation:"Dedicated tenant database",avgGrade:"86.1%",attendance:"92.7%",messages:"8 pending",studentPoints:890,studentName:"Explorer",guardianName:"Monica",learnerName:"Ari",workHours:"Mon-Fri, 7:45 AM-4:00 PM",afterHours:"Messages are held until staff office hours reopen"}]},{id:"albany-csd",name:"Albany City School District",region:"Capital Region",superintendent:"District Superintendent",schools:[{id:"albany-prep",name:"Albany Preparatory School",category:"Private",students:325,staff:44,status:"Active",subdomain:"albanyprep",plan:"Private Plus",modules:["LMS","Messaging","Tuition","Family Portal"],storage:46,uptime:"99.95%",theme:"Prep Teal",isolation:"Dedicated tenant database",avgGrade:"91.8%",attendance:"96.4%",messages:"1 pending",studentPoints:1565,studentName:"Scholar",guardianName:"Priya",learnerName:"Noah",workHours:"Mon-Fri, 8:30 AM-5:00 PM",afterHours:"Messages wait for the next administrator-approved window"},{id:"eagle-point",name:"Eagle Point Elementary",category:"Public",students:538,staff:61,status:"Active",subdomain:"eaglepoint",plan:"District Core",modules:["SIS","LMS","Messaging"],storage:52,uptime:"99.97%",theme:"Eagle Green",isolation:"Dedicated tenant database",avgGrade:"87.2%",attendance:"95.1%",messages:"4 pending",studentPoints:1120,studentName:"Navigator",guardianName:"Sarah",learnerName:"Mia",workHours:"Mon-Fri, 8:00 AM-4:00 PM",afterHours:"Messages are queued until office hours"}]}]},{id:"ca",name:"California",agency:"California Department of Education",districts:[{id:"la-usd",name:"Los Angeles Unified School District",region:"Los Angeles County",superintendent:"District Superintendent",schools:[{id:"pacific-stem",name:"Pacific STEM Charter",category:"Chartered",students:496,staff:52,status:"Active",subdomain:"pacificstem",plan:"STEM Charter",modules:["SIS","LMS","Messaging","Lab Scheduler"],storage:58,uptime:"99.94%",theme:"Pacific Blue",isolation:"Dedicated tenant database",avgGrade:"90.3%",attendance:"93.8%",messages:"6 pending",studentPoints:1325,studentName:"Innovator",guardianName:"Elena",learnerName:"Kai",workHours:"Mon-Fri, 8:00 AM-4:30 PM",afterHours:"Messages are held until staff work hours"}]}]}],yt=[["State Governance",["Board of Regents","Commissioner of Education","NYS Education Department (NYSED)"]],["District & Regional Governance",["BOCES District Superintendents","Local Board of Education (BOE)","District Superintendent / NYC Chancellor","Assistant / Deputy Superintendents","District Directors / Coordinators"]],["School Building Administration",["Principal","Assistant Principal","Dean of Students / Department Chairs"]],["Classroom Faculty",["Tenured Teachers","Probationary Teachers","Substitutes / Leave Replacements"]],["Instructional & Specialized Support",["Specialized Clinicians","Teaching Assistants","Teacher Aides / Paraprofessionals"]],["Operational Support",["Secretaries / Clerical Staff","Custodial / Maintenance Staff","Food Service / Security / Transportation"]],["Student Leadership & Student Body",["Student Board of Education Representative","Student Council President / Officers","Class Officers","Club Presidents / Team Captains","General Student Body"]]],G=[{name:"English Literature",room:"Period 2, Room 304",grade:89,attendance:96,pending:12},{name:"Creative Writing",room:"Period 4, Room 201",grade:92,attendance:97,pending:1},{name:"Basic English",room:"Period 6, Room 118",grade:84,attendance:91,pending:5}],A=[{id:"stu-1",student:"Demo Learner 1",guardian:"Demo Guardian 1",teacher:"Demo Teacher",className:"English Literature",grade:91,attendance:98,accommodations:"Visual vocabulary cards",status:"Active"},{id:"stu-2",student:"Demo Learner 2",guardian:"Demo Guardian 2",teacher:"Demo Teacher",className:"Creative Writing",grade:88,attendance:94,accommodations:"Extended quiz time",status:"Active"},{id:"stu-3",student:"Demo Learner 3",guardian:"Demo Guardian 3",teacher:"Demo Teacher",className:"English Literature",grade:82,attendance:91,accommodations:"Reading support",status:"Watch"},{id:"stu-4",student:"Demo Learner 4",guardian:"Demo Guardian 4",teacher:"Demo Teacher",className:"Creative Writing",grade:96,attendance:99,accommodations:"None",status:"Active"}],P=[{id:"sub-1",student:"Demo Learner 1",assignment:"Fractions Mastery Check",status:"Submitted",score:88,rubric:[["Concepts",4],["Accuracy",3],["Explanation",4],["Neatness",3]],comment:"Strong reasoning. Recheck mixed-number conversions."},{id:"sub-2",student:"Demo Learner 2",assignment:"Great Depression Essay",status:"Needs review",score:74,rubric:[["Thesis",3],["Evidence",3],["Organization",2],["Conventions",4]],comment:"Good evidence. Add a clearer argument in the introduction."},{id:"sub-3",student:"Demo Learner 3",assignment:"Grammar Quiz - Week 5",status:"Missing",score:0,rubric:[["Completion",0],["Accuracy",0],["Timeliness",0]],comment:"Family reminder queued."}],Y=[["Demo Learner 3","finished reading The Great Gatsby","15 minutes ago","Lit 101"],["Demo Learner 4","submitted Grammar Quiz - Week 5","42 minutes ago","Creative Writing"],["Marcus Thorne","posted in the discussion board","2 hours ago","Shakespeare"]],Ce=[{title:"History: Great Depression Essay",meta:"Due tomorrow, 11:59 PM",urgent:!0},{title:"Science: Water Cycle Model",meta:"Due Thursday",urgent:!1},{title:"Math: Quadratic Equations Quiz",meta:"Due Sunday",urgent:!1}],L=[{id:"fractions",title:"Fractions Mastery Check",type:"Automated quiz",rubric:"4-domain rubric",analytics:82,lockDate:"Oct 24, 8:00 PM",exception:"Maya R. +24h"},{id:"essay",title:"Great Depression Essay",type:"Writing task",rubric:"Argument + evidence rubric",analytics:74,lockDate:"Oct 28, 11:59 PM",exception:"None"}],pe=[{name:"Water Cycle Worksheet.docx",status:"Converted to editable lesson copy",type:"Word"},{name:"Moon Lab Packet.pdf",status:"OCR indexed + annotation ready",type:"PDF"},{name:"Parent Signature Form.pdf",status:"Fillable fields detected",type:"PDF"}],Me=[{id:"teacher-school",name:"Demo Teacher",context:"Teacher at selected school",active:!0},{id:"parent-school",name:"Demo Guardian",context:"Parent profile",active:!1},{id:"district-admin",name:"District Admin",context:"District-wide oversight",active:!1}],E=[{id:"notice-lock-window",level:"Urgent",title:"Locked submission window closes tonight",target:"Grade 4 Math",channel:"Dashboard + SMS",read:!1},{id:"notice-rubrics",level:"Action",title:"3 rubric scores need review",target:"English Literature",channel:"Teacher inbox",read:!1},{id:"notice-family-comment",level:"FYI",title:"New family comment on community board",target:"All families",channel:"Digest",read:!1}],T=[{id:"live-1",type:"Roster",title:"Demo Learner 1 attendance synced",detail:"SIS updated attendance to 98%.",time:"Live now"},{id:"live-2",type:"LMS",title:"Rubric queue refreshed",detail:"3 submissions are ready for review.",time:"Live now"},{id:"live-3",type:"Messages",title:"Parent digest prepared",detail:"Routine updates will send during the next work window.",time:"Live now"}],ia=[{app:"Docs",action:"Distribute editable templates instantly",status:"Connected"},{app:"Drive",action:"Attach, collect, and archive class files",status:"Connected"},{app:"Forms",action:"Auto-create quizzes with answer visibility rules",status:"Connected"},{app:"Slides",action:"Share lesson decks as view or copy templates",status:"Connected"}],$t=[["Intuitive Design","Clean teacher and student workflows with minimal training."],["Zero Cost Base","Core classroom, assignments, communication, and family summaries stay free for schools."],["Paperless Workflow","Create, collect, grade, return, and archive digital assignments."],["Centralized Communication","Class announcements, direct messages, and parent summaries in one place."],["Automated Guardrails","Lock edits after submission and hide quiz answers until the assessment ends."]],j=[{actor:"District Admin",event:"Provisioned school tenant",scope:"NYC DOE",time:"Today 9:12 AM"},{actor:"Principal Rivera",event:"Approved community board post",scope:"P.S. 118",time:"Today 10:44 AM"},{actor:"System",event:"Blocked after-hours parent message",scope:"P.S. 118",time:"Yesterday 6:03 PM"},{actor:"NYSED Reviewer",event:"Viewed compliance dashboard",scope:"New York",time:"Yesterday 2:21 PM"}],St=[{label:"FERPA Mode",status:"Enabled",detail:"Student records are hidden outside authorized tenant scopes."},{label:"Media Review",status:"Required",detail:"Photos and files stay pending until an assigned approver approves them."},{label:"Data Export",status:"Logged",detail:"Every roster, gradebook, or message export appears in the audit trail."}],wt=[{label:"FERPA access reviews",value:"12",status:"Due this month",detail:"Confirm staff access for student records."},{label:"Data export logs",value:"4",status:"Reviewed",detail:"Gradebook and roster exports are audit logged."},{label:"Media approvals",value:"1",status:"Pending",detail:"Photo content waiting for administrator approval."},{label:"After-hours blocks",value:"7",status:"Protected",detail:"Messages held outside school communication windows."}],pa=[{title:"Superintendent Hearing Window",audience:"District",date:"Oct 21",type:"Compliance"},{title:"Science Night",audience:"P.S. 118 families",date:"Oct 23",type:"Community"},{title:"Fractions Mastery Lock Date",audience:"Grade 4 Math",date:"Oct 24",type:"LMS"},{title:"Parent Conference Block",audience:"Teachers + guardians",date:"Oct 27",type:"Messaging"}],te=[{item:"Fractions quiz attempt",owner:"Leo",status:"Queued for upload"},{item:"PDF annotation packet",owner:"Maya",status:"Conflict check ready"},{item:"Teacher rubric draft",owner:"Demo Teacher",status:"Saved offline"}],kt=[["Default route","Parent and teacher posts go to the first active school approver."],["Media route","Photos, videos, and files require Principal or Assistant Principal approval."],["Sensitive route","Discipline, health, or student-identifying content is held for administrator review."],["Publishing rule","Approved posts publish only inside the selected school tenant."]],At=[{title:"One-tap teacher message",detail:"Disabled automatically outside school work hours."},{title:"Digest-first notifications",detail:"Urgent alerts separate from routine activity noise."},{title:"Offline packet pickup",detail:"Assignments and forms can be downloaded before Wi-Fi drops."}],N={"ps-118":{logo:"D",crest:"Discovery Owls",primary:"#0050cb",accent:"#006b5f",highlight:"#735c00",background:"#f8f9ff",voice:"Bright, curious, elementary STEM"},"bronx-charter":{logo:"B",crest:"Bronx Torch",primary:"#6d3f00",accent:"#005b96",highlight:"#996b00",background:"#fff9ef",voice:"Confident, college-bound, community first"},"albany-prep":{logo:"A",crest:"Albany Shield",primary:"#005f73",accent:"#7a3e9d",highlight:"#8a5a00",background:"#f3fbfb",voice:"Polished, private school, seminar-ready"},"eagle-point":{logo:"E",crest:"Eagle Point",primary:"#116149",accent:"#004e98",highlight:"#7c5c00",background:"#f4fbf6",voice:"Warm, neighborhood public school"},"pacific-stem":{logo:"P",crest:"Pacific Wave",primary:"#0057a8",accent:"#00756f",highlight:"#7a6100",background:"#f2f8ff",voice:"Modern, STEM lab, project-based"}},Mt=[{name:"Discovery Blue",primary:"#0050cb",accent:"#006b5f",highlight:"#735c00",background:"#f8f9ff"},{name:"Charter Gold",primary:"#6d3f00",accent:"#005b96",highlight:"#996b00",background:"#fff9ef"},{name:"Prep Teal",primary:"#005f73",accent:"#7a3e9d",highlight:"#8a5a00",background:"#f3fbfb"},{name:"Eagle Green",primary:"#116149",accent:"#004e98",highlight:"#7c5c00",background:"#f4fbf6"},{name:"Pacific Blue",primary:"#0057a8",accent:"#00756f",highlight:"#7a6100",background:"#f2f8ff"}],w=[{id:"sarah",name:"Demo Guardian 1",role:"Leo's parent",type:"Parents",unread:0,online:!0,preview:"I'll send the photo of the worksheet now...",messages:[{from:"them",text:"Hi Mr. Anderson! Leo found the fractions section tricky.",time:"13:45"},{from:"me",text:"Thanks for the heads up. I can send a visual practice sheet today.",time:"13:52"},{from:"them",text:"That would help. I'll send the photo of the worksheet now.",time:"14:02"}]},{id:"elena",name:"Demo Guardian 2",role:"Maya's parent",type:"Parents",unread:3,online:!1,preview:"Is the field trip still happening on Friday?",messages:[{from:"them",text:"Is the field trip still happening on Friday?",time:"Tue"},{from:"me",text:"Yes, the permission forms are due by Thursday morning.",time:"Tue"}]},{id:"grade-team",name:"Grade 4 Team",role:"6 teachers",type:"Groups",unread:1,online:!0,preview:"New reading groups are posted.",messages:[{from:"them",text:"New reading groups are posted for next week.",time:"09:18"},{from:"me",text:"Great, I updated my small-group rotation.",time:"09:26"}]}],q={"ps-118":{approvers:[{id:"principal-rivera",name:"Principal Rivera",title:"Principal",active:!0},{id:"ap-kim",name:"Assistant Principal Kim",title:"Assistant Principal",active:!0},{id:"dean-walker",name:"Dean Walker",title:"Dean of Students",active:!1}],published:[{id:"ps-post-1",author:"Ms. Henderson",role:"Teacher",type:"Announcement",audience:"All families",title:"Science Night Volunteers",body:"We need four family volunteers for Thursday's hands-on moon lab.",media:"Flyer PDF",time:"Approved today"},{id:"ps-post-2",author:"Demo Guardian 1",role:"Parent",type:"Resource",audience:"Grade 4",title:"Math Game Practice Link",body:"Sharing a free fractions game that helped a learner practice at home.",media:"Website link",time:"Approved yesterday"}],pending:[{id:"ps-pending-1",author:"Mr. Anderson",role:"Teacher",type:"Photo",audience:"Grade 4",title:"Moon Rock Lab Photos",body:"A photo set from today's science station rotation.",media:"6 images",approverId:"principal-rivera",time:"Awaiting principal approval"}]}},Q=[{name:"users",records:M.length,status:"Mapped",detail:"Role, permission, school, guardian/student links"},{name:"schools",records:5,status:"Mapped",detail:"State, district, tenant URL, modules, branding"},{name:"classes",records:G.length,status:"Mapped",detail:"Teacher, room, attendance, pending work"},{name:"students",records:A.length,status:"Mapped",detail:"Guardian, accommodations, grades, attendance"},{name:"assignments",records:L.length,status:"Mapped",detail:"Type, rubric, lock date, exceptions"},{name:"submissions",records:P.length,status:"Mapped",detail:"Rubric scores, comments, review status"},{name:"messages",records:w.length,status:"Mapped",detail:"Parent and group threads with work-hour controls"},{name:"community_posts",records:q["ps-118"].published.length+q["ps-118"].pending.length,status:"Mapped",detail:"Approvals, media, audience, publishing state"},{name:"audit_logs",records:j.length,status:"Mapped",detail:"Admin actions, exports, compliance events"}],U=[{id:"district",label:"Create district and school tenants",owner:"Admin",done:!0},{id:"staff",label:"Invite staff accounts",owner:"Admin",done:!0},{id:"roster",label:"Import student roster",owner:"Registrar",done:!0},{id:"guardians",label:"Connect parent and guardian accounts",owner:"School office",done:!1},{id:"classes",label:"Assign teachers to classes",owner:"Principal",done:!0},{id:"launch",label:"Send launch notification",owner:"Communications",done:!1}],x=[{id:"upload-1",name:"Moon Lab Packet.pdf",area:"LMS",size:"1.2 MB",status:"Ready for class distribution"},{id:"upload-2",name:"Science Night Flyer.pdf",area:"Community",size:"420 KB",status:"Waiting for approval"}],_=[{id:"delivery-1",channel:"Email",audience:"Grade 4 families",status:"Queued",detail:"Science Night reminder"},{id:"delivery-2",channel:"SMS",audience:"Emergency contacts",status:"Ready",detail:"Emergency override test"},{id:"delivery-3",channel:"Push",audience:"Teachers",status:"Delivered",detail:"Rubric queue refresh"}],z=[{id:"auth",label:"Role-based authentication rules",status:"Configured",done:!0},{id:"ferpa",label:"FERPA tenant data isolation",status:"Configured",done:!0},{id:"audit",label:"Audit log export policy",status:"Configured",done:!0},{id:"backups",label:"Nightly database backups",status:"Needs backend provider",done:!1},{id:"encryption",label:"Encrypted file storage",status:"Needs storage provider",done:!1},{id:"retention",label:"Data retention schedule",status:"Drafted",done:!1}],me=[{step:"Build",status:"Passing",detail:"Vite production build generates static assets"},{step:"Tests",status:"Passing",detail:"Playwright local and live smoke tests available"},{step:"FTP deploy",status:"Live",detail:"educationalsystem.fieldserviceit.com is serving the app"},{step:"GitHub sync",status:"Connected",detail:"Backend repository deploys through Hostinger hPanel"}],Pt="educationalsystem.fieldserviceit.com",Ct="https://api.educationalsystem.fieldserviceit.com";function ma(e,s="",a=""){return e===Pt?Ct:s||a||""}const oa=new Map;function Lt(){return ma(window.location.hostname,window.__EDUCONNECT_API_BASE__,void 0)}function Et(e,s={}){var n;const a=e instanceof Error?e:new Error(String(e||"Unknown client error"));return{source:s.source||"frontend",message:a.message.slice(0,1e3),stack:String(a.stack||"").slice(0,6e3),path:`${window.location.pathname}${window.location.hash}`.slice(0,300),release:((n=document.querySelector('meta[name="app-release"]'))==null?void 0:n.content)||"web"}}function ye(e,s={}){const a=Lt();if(!a)return;const n=Et(e,s),r=`${n.source}:${n.message}:${n.path}`,d=Date.now();d-(oa.get(r)||0)<6e4||(oa.set(r,d),fetch(`${a}/api/error-reports`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n),keepalive:!0}).catch(()=>{}))}function Dt(){window.addEventListener("error",e=>ye(e.error||e.message,{source:"window.error"})),window.addEventListener("unhandledrejection",e=>ye(e.reason,{source:"unhandledrejection"}))}const ha="educonnect-mock-api-v1";let ce=0;function ga(e){return e&&typeof e=="object"&&"data"in e?e.data:e}function va(){return new Promise(e=>setTimeout(e,80))}function fa(){return ma(window.location.hostname,window.__EDUCONNECT_API_BASE__,void 0)}function ba(){const e=localStorage.getItem("educonnect-session-token");return e?{Authorization:`Bearer ${e}`}:{}}async function ya(e,s){const a=`${fa()}/api/state`,n=await fetch(a,{method:e,headers:{"Content-Type":"application/json",...ba()},body:s?JSON.stringify(s):void 0});if(ce+=1,!n.ok){`${n.status}`;const r=new Error(`Server API request failed with ${n.status}`);throw ye(r,{source:"api.state"}),r}return ga(await n.json())}async function Ae(e,s={}){const a=`${fa()}${e}`,n=await fetch(a,{headers:{"Content-Type":"application/json",...ba(),...s.headers||{}},...s});if(ce+=1,!n.ok){`${n.status}`;const r=await n.json().catch(()=>({})),d=new Error(r.error||`Server API request failed with ${n.status}`);throw ye(d,{source:"api.request"}),d}return ga(await n.json())}async function Ot(e,s="mock-api"){return s==="live-api"?ya("PUT",{snapshot:e}):(ce+=1,await va(),localStorage.setItem(ha,JSON.stringify(e)),{ok:!0,requestCount:ce})}async function Tt(e="mock-api"){return e==="live-api"?(await ya("GET")).snapshot:(ce+=1,await va(),JSON.parse(localStorage.getItem(ha)||"null"))}async function Nt(e,s){return Ae("/api/login",{method:"POST",body:JSON.stringify({profileId:e,password:s})})}async function qt(){return Ae("/api/session",{method:"GET"})}async function xt(e,s="LMS"){const a=await new Promise((n,r)=>{const d=new FileReader;d.onload=()=>n(String(d.result).split(",")[1]||""),d.onerror=()=>r(d.error),d.readAsDataURL(e)});return Ae("/api/files",{method:"POST",body:JSON.stringify({name:e.name,type:e.type,area:s,size:`${Math.max(1,Math.round(e.size/1024))} KB`,contentBase64:a})})}async function Rt(e="Launch test group"){return Ae("/api/notifications/test",{method:"POST",body:JSON.stringify({audience:e})})}const $e="educonnect-demo-state-v1",$=structuredClone({state:t,userProfiles:M,tenantStates:K,schoolDesigns:N,rosterRecords:A,gradebookSubmissions:P,auditLogs:j,lmsAssignments:L,lmsFiles:pe,lmsNotifications:E,realtimeEvents:T,databaseTables:Q,onboardingTasks:U,fileUploads:x,notificationDeliveryLog:_,securityChecklist:z,deployPipeline:me,offlineSyncQueue:te,activityFeed:Y,conversations:w,communityBoards:q});function Se(e,s){Object.keys(e).forEach(a=>delete e[a]),Object.assign(e,structuredClone(s))}function m(e,s){e.splice(0,e.length,...structuredClone(s))}function jt(){try{const e=JSON.parse(localStorage.getItem($e)||"null");Le(e)}catch{localStorage.removeItem($e)}}function $a(){return structuredClone({state:t,userProfiles:M,tenantStates:K,schoolDesigns:N,rosterRecords:A,gradebookSubmissions:P,auditLogs:j,lmsAssignments:L,lmsFiles:pe,lmsNotifications:E,realtimeEvents:T,databaseTables:Q,onboardingTasks:U,fileUploads:x,notificationDeliveryLog:_,securityChecklist:z,deployPipeline:me,offlineSyncQueue:te,activityFeed:Y,conversations:w,communityBoards:q})}function Le(e){e&&(e.state&&Object.assign(t,e.state),e.userProfiles&&m(M,e.userProfiles),e.tenantStates&&m(K,e.tenantStates),e.schoolDesigns&&Se(N,e.schoolDesigns),e.rosterRecords&&m(A,e.rosterRecords),e.gradebookSubmissions&&m(P,e.gradebookSubmissions),e.auditLogs&&m(j,e.auditLogs),e.lmsAssignments&&m(L,e.lmsAssignments),e.lmsFiles&&m(pe,e.lmsFiles),e.lmsNotifications&&m(E,e.lmsNotifications),e.realtimeEvents&&m(T,e.realtimeEvents),e.databaseTables&&m(Q,e.databaseTables),e.onboardingTasks&&m(U,e.onboardingTasks),e.fileUploads&&m(x,e.fileUploads),e.notificationDeliveryLog&&m(_,e.notificationDeliveryLog),e.securityChecklist&&m(z,e.securityChecklist),e.deployPipeline&&m(me,e.deployPipeline),e.offlineSyncQueue&&m(te,e.offlineSyncQueue),e.activityFeed&&m(Y,e.activityFeed),e.conversations&&m(w,e.conversations),e.communityBoards&&Se(q,e.communityBoards))}function It(){const e=$a();localStorage.setItem($e,JSON.stringify(e)),(t.apiMode==="mock-api"||t.apiMode==="live-api")&&Ot(e,t.apiMode).catch(()=>{})}async function Sa(e=t.apiMode){const s=await Tt(e);s&&Le(s)}function Ft(){localStorage.removeItem($e),Object.assign(t,structuredClone($.state)),m(M,$.userProfiles),m(K,$.tenantStates),Se(N,$.schoolDesigns),m(A,$.rosterRecords),m(P,$.gradebookSubmissions),m(j,$.auditLogs),m(L,$.lmsAssignments),m(pe,$.lmsFiles),m(E,$.lmsNotifications),m(T,$.realtimeEvents),m(Q,$.databaseTables),m(U,$.onboardingTasks),m(x,$.fileUploads),m(_,$.notificationDeliveryLog),m(z,$.securityChecklist),m(me,$.deployPipeline),m(te,$.offlineSyncQueue),m(Y,$.activityFeed),m(w,$.conversations),Se(q,$.communityBoards)}Dt();const ra=document.querySelector("#app");let S=null,le="",re=!1;const B=[{title:"Choose a role",body:"Use the demo login panel to switch between state, district, school, teacher, parent, and student access.",role:"state-admin"},{title:"Create learning work",body:"Teachers and admins can create assignments and build offline packs in the LMS.",role:"lms"},{title:"Communicate safely",body:"Messaging respects school work hours, with emergency override reserved for admins.",role:"messages"},{title:"Approve community posts",body:"Admins can approve posts before they publish to the school community board.",role:"community"}],Gt={AlertTriangle:mt,Award:Oa,Bell:Ta,BookOpen:Na,Building2:qa,CalendarDays:xa,Check:Ra,ChevronRight:ja,ClipboardCheck:Ia,Clock:Fa,Database:Ga,Download:Ba,Eye:Ua,FileText:_a,GraduationCap:za,Layers:Wa,Lock:Va,Mail:Ya,Map:Ja,Megaphone:Ka,MessageCircle:Qa,MoreHorizontal:Ha,Paperclip:Za,PenLine:Xa,Play:et,Plus:at,RefreshCw:tt,Rocket:st,RotateCcw:nt,Search:it,Send:ot,Settings:rt,ShieldCheck:ct,Smartphone:lt,Sparkles:dt,Star:ut,TrendingUp:pt,Users:ht,Video:gt,X:vt};function o(e){return`<i class="app-icon" data-lucide="${e}" data-icon="${e}" aria-hidden="true"></i>`}function Bt(e){return`/${e.replace(/^\/+/,"")}`}function V(e){return e.split(" ").map(s=>s[0]).slice(0,2).join("")}function he(e){return`<div class="progress" aria-label="${e}% complete"><span style="width:${e}%"></span></div>`}function k(e,s,a,n){return`<article class="stat-card ${n}"><div class="stat-icon">${o(a)}</div><span>${e}</span><strong>${s}</strong></article>`}function O(e){return String(e).replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s])}function v(e){t.toast=e,p()}function y(e,s=b().name,a=W().label){j.unshift({actor:a,event:e,scope:s,time:"Just now"})}function H(e,s,a=b().name,n="Live dashboard"){E.unshift({id:`notice-${Date.now()}-${Math.random().toString(16).slice(2)}`,level:e,title:s,target:a,channel:n,read:!1})}function C(e,s,a){T.unshift({id:`live-${Date.now()}-${Math.random().toString(16).slice(2)}`,type:e,title:s,detail:a,time:"Just now"}),T.length>8&&(T.length=8)}function we(){return E.filter(e=>!e.read).length}function wa(e="manual"){const s=b(),a=[()=>{const n=A[t.realtimeTick%A.length];n.attendance=Math.min(100,n.attendance+1),Y.unshift([n.student,"attendance synced from SIS","Just now",n.className]),C("Roster",`${n.student} synced`,`Attendance is now ${n.attendance}% in ${n.className}.`),H("FYI",`${n.student} roster sync completed`,n.className,"SIS")},()=>{const n=P[t.realtimeTick%P.length];n.status=n.status==="Missing"?"Needs review":n.status,C("LMS",`${n.student} gradebook updated`,`${n.assignment} is ${n.status.toLowerCase()}.`),H("Action",`${n.student} submission needs attention`,n.assignment,"Teacher inbox")},()=>{const n=w.find(r=>r.id===t.activeConversationId)||w[0];n.messages.push({from:"them",text:`Live ${s.name} update received.`,time:"Now"}),n.preview="Live school update received.",n.unread=(n.unread||0)+1,C("Messages",`New message from ${n.name}`,"Conversation preview and unread count updated."),H("Urgent",`New message from ${n.name}`,s.name,"Messages")}];a[t.realtimeTick%a.length](),t.realtimeTick+=1,y(`Processed ${e} live update`,s.name,"Realtime service"),t.toast="Live app data updated.",p()}function W(){return S||M.find(e=>e.id===t.currentUser)||M[0]}function de(){return!["localhost","127.0.0.1","0.0.0.0"].includes(window.location.hostname)}function ee(e=W()){if(!e)return[];const s=new Set([e.landing]),a=new Set(e.permissions||[]);return e.scope==="state"&&s.add("state-admin"),["state","district"].includes(e.scope)&&s.add("district-admin"),["state","district","school"].includes(e.scope)&&/Admin$/i.test(e.role||"")&&s.add("school-admin"),a.has("lms")&&s.add("lms"),a.has("teacher-tools")&&s.add("teacher"),a.has("message")&&s.add("messages"),(a.has("approve-posts")||a.has("submit-post"))&&s.add("community"),a.has("student-missions")&&s.add("student"),ae.map(n=>n.id).filter(n=>s.has(n))}function Ee(){const e=new Set(ee());return ae.filter(s=>e.has(s.id))}function ca(e,s="Signed in as"){if(!e)return;S={...M.find(r=>r.id===e.id),...e},t.currentUser=S.id,t.toast=`${s} ${S.label}.`,y("Signed in",b().name,S.label);const n=ee(S).includes(S.landing)?S.landing:ee(S)[0];ue(n||"student")}function Ht(){const e=W().label;localStorage.removeItem("educonnect-session-token"),S=null,t.toast="",t.searchTerm="",le="",history.replaceState(null,"",window.location.pathname),p(),requestAnimationFrame(()=>{var s;return(s=document.querySelector("#landing-profile"))==null?void 0:s.focus()}),console.info(`${e} signed out`)}function J(e){return W().permissions.includes(e)}function R(e,s="This role cannot use that action"){return J(e)?"":`disabled aria-disabled="true" title="${s}"`}function se(e,s){return J(e)?"":`<div class="permission-note">${o("lock")} ${s}</div>`}function Ut(e){const s=[];return(!e||typeof e!="object")&&s.push("File must contain a JSON object."),(!(e!=null&&e.state)||typeof e.state!="object")&&s.push("Missing state object."),Array.isArray(e==null?void 0:e.tenantStates)||s.push("Missing tenantStates array."),Array.isArray(e==null?void 0:e.conversations)||s.push("Missing conversations array."),(!(e!=null&&e.communityBoards)||typeof e.communityBoards!="object")&&s.push("Missing communityBoards object."),s}function la(){const e=window.location.hash.replace("#","");return e==="platform"?"state-admin":ae.some(s=>s.id===e)?e:""}function ue(e,s=!0){if(e==="platform"&&(e="state-admin"),!ae.some(a=>a.id===e)||!ee().includes(e)){S&&(t.toast="That workspace is not available for your role.");return}t.role=e,t.notificationsOpen=!1,t.settingsOpen=!1,s&&window.location.hash!==`#${e}`&&history.pushState(null,"",`#${e}`),p()}function X(e,s=""){s&&(t.toast=s),ue(e)}function Pe(){ft({icons:Gt,attrs:{"stroke-width":2.25}})}function ge(){return K.find(e=>e.id===t.selectedState)||K[0]}function Z(){const e=ge();return e.districts.find(s=>s.id===t.selectedDistrict)||e.districts[0]}function b(){const e=Z();return e.schools.find(s=>s.id===t.selectedSchool)||e.schools[0]}function _t(){const e=b(),s=new Set(ee());return[...Ee().map(a=>({label:a.label,detail:"Workspace",role:a.id})),...ke.map(a=>({label:a.title,detail:`${a.subject} mission`,role:"student"})),...G.map(a=>({label:a.name,detail:a.room,role:"teacher"})),...L.map(a=>({label:a.title,detail:`${a.type} in LMS`,role:"lms"})),...Ce.map(a=>({label:a.title,detail:a.meta,role:"parent"})),...w.map(a=>({label:a.name,detail:a.preview,role:"messages"})),...D().published.map(a=>({label:a.title,detail:`${a.type} post`,role:"community"})),{label:e.name,detail:`${e.category} school tenant`,role:"school-admin"}].filter(a=>s.has(a.role))}function zt(){const e=t.searchTerm.trim().toLowerCase();if(!e)return"";const s=_t().filter(a=>`${a.label} ${a.detail}`.toLowerCase().includes(e)).slice(0,6);return`
    <section class="search-results" aria-label="Search results">
      <div><strong>${s.length?`Results for "${O(t.searchTerm)}"`:`No results for "${O(t.searchTerm)}"`}</strong><button class="text-button" data-clear-search>Clear</button></div>
      ${s.length?`<div class="search-result-list">${s.map(a=>`
        <button class="search-result" data-open-role="${a.role}">
          ${o("search")}
          <span><strong>${O(a.label)}</strong><small>${O(a.detail)}</small></span>
        </button>
      `).join("")}</div>`:""}
    </section>
  `}function Wt(){const e=de(),s=M.find(n=>n.id===t.currentUser)||M[0],a=[["Administrators","District and school oversight, access governance, compliance, and tenant operations.","shield-check","school-admin"],["Teachers","Classrooms, assignments, gradebooks, family communication, and learning resources.","graduation-cap","teacher"],["Families","A focused view of learner progress, deadlines, messages, and school updates.","users","parent"],["Students","Missions, progress, classroom activities, and age-appropriate learning tools.","sparkles","student"]];return`
    <div class="landing-shell">
      <header class="landing-header">
        <a class="landing-brand" href="#top" aria-label="EduConnect home"><span>EC</span><strong>EduConnect</strong></a>
        <nav aria-label="Public navigation"><a href="#solutions">Solutions</a><a href="#trust">Privacy</a><a href="#signin">Sign in</a></nav>
        <a class="primary-action landing-header-cta" href="#signin">Open your portal</a>
      </header>
      <main id="top">
        <section class="landing-hero">
          <div class="landing-hero-copy">
            <p class="eyebrow">One connected school community</p>
            <h1>The right school view for every person.</h1>
            <p class="landing-lede">EduConnect gives administrators, teachers, families, and students a secure workspace shaped around what they are responsible for—nothing more, nothing less.</p>
            <div class="landing-actions"><a class="primary-action" href="#signin">Sign in to your workspace ${o("chevron-right")}</a><a class="secondary-action" href="#solutions">See role-based views</a></div>
            <div class="landing-proof"><span>${o("shield-check")} Role-scoped access</span><span>${o("lock")} Private tenant data</span><span>${o("smartphone")} Ready on any device</span></div>
          </div>
          <div class="landing-login-card" id="signin">
            <div class="landing-login-heading"><span class="landing-lock">${o("lock")}</span><div><p class="eyebrow">Secure portal</p><h2>Welcome back</h2><p>Select your account and enter your password.</p></div></div>
            ${le?`<div class="landing-error" role="alert">${o("alert-triangle")} ${O(le)}</div>`:""}
            <form id="landing-login-form">
              <label><span>Account</span><select id="landing-profile" aria-label="Login account">${M.map(n=>`<option value="${n.id}" ${n.id===s.id?"selected":""}>${n.role} — ${n.label}</option>`).join("")}</select></label>
              <label><span>Password</span><input id="landing-password" type="password" autocomplete="current-password" placeholder="Enter your password" ${e?"required":""} /></label>
              <button class="primary-action landing-submit" type="submit" ${re?"disabled":""}>${re?"Signing in…":`${o("lock")} Sign in securely`}</button>
            </form>
            <p class="landing-login-note">${e?"Your assigned role determines the workspaces and records you can access.":"Local preview: choose any synthetic account; no password is required."}</p>
          </div>
        </section>
        <section class="landing-role-section" id="solutions">
          <div class="landing-section-heading"><p class="eyebrow">Purpose-built access</p><h2>Everyone starts where their work begins.</h2><p>Each person enters a distinct dashboard with navigation and actions matched to their responsibilities.</p></div>
          <div class="landing-role-grid">${a.map(([n,r,d,f])=>`<button class="landing-role-card" data-landing-profile="${f}">${o(d)}<strong>${n}</strong><span>${r}</span><em>View this sign-in ${o("chevron-right")}</em></button>`).join("")}</div>
        </section>
        <section class="landing-trust" id="trust">
          <div><p class="eyebrow">Privacy by design</p><h2>Student information stays in the right hands.</h2><p>Tenant boundaries, role permissions, encrypted connections, audit trails, and scoped family access work together throughout the platform.</p></div>
          <div class="landing-trust-grid"><article>${o("shield-check")}<strong>Scoped by role</strong><span>People only see workspaces their assigned role permits.</span></article><article>${o("building-2")}<strong>Scoped by school</strong><span>District and school records stay inside their tenant boundaries.</span></article><article>${o("clipboard-check")}<strong>Accountable actions</strong><span>Administrative changes and sensitive workflows are auditable.</span></article></div>
        </section>
      </main>
      <footer class="landing-footer"><a class="landing-brand" href="#top"><span>EC</span><strong>EduConnect</strong></a><p>Connected learning. Appropriate access. One school community.</p><small>All demonstration people and records are synthetic.</small></footer>
    </div>
  `}function D(){const e=b();return q[e.id]||(q[e.id]={approvers:[{id:`${e.id}-principal`,name:"Principal Office",title:"Principal",active:!0},{id:`${e.id}-assistant-principal`,name:"Assistant Principal",title:"Assistant Principal",active:!0}],published:[{id:`${e.id}-welcome`,author:"School Office",role:"Administrator",type:"Announcement",audience:"All families",title:`Welcome to ${e.name}`,body:"This board is reserved for administrator-approved school community updates.",media:"No media",time:"Approved"}],pending:[]}),q[e.id]}function Vt(e){return e.approvers.find(s=>s.active)||e.approvers[0]}function Yt(e,s){var a;return((a=e.approvers.find(n=>n.id===s))==null?void 0:a.name)||"Unassigned"}function De(){const e=b();return N[e.id]||(N[e.id]={logo:V(e.name).slice(0,1),crest:`${e.name} Crest`,primary:"#0050cb",accent:"#006b5f",highlight:"#735c00",background:"#f8f9ff",voice:"School-owned portal identity"}),N[e.id]}function Jt(e){return`--primary:${e.primary};--primary-2:${e.primary};--teal:${e.accent};--gold:${e.highlight};--background:${e.background};`}function da(){const e=b();N[e.id]={...De(),logo:document.querySelector("#design-logo").value.trim()||V(e.name).slice(0,1),crest:document.querySelector("#design-crest").value.trim()||`${e.name} Crest`,voice:document.querySelector("#design-voice").value.trim()||"School-owned portal identity",primary:document.querySelector("#design-primary").value,accent:document.querySelector("#design-accent").value,highlight:document.querySelector("#design-highlight").value,background:document.querySelector("#design-background").value}}function p(){if(!S){ra.innerHTML=Wt(),Ss(),Pe();return}const e=ae.find(n=>n.id===t.role),s=b(),a=De();ra.innerHTML=`
    <div class="app ${t.compactMode?"compact-mode":""} ${t.highContrast?"high-contrast":""}" style="${Jt(a)}">
      ${Xt(e,a)}
      <main class="workspace workspace-${t.role}">
        ${Zt(s,a)}
        ${as(e)}
        ${Kt()}
        ${zt()}
        ${t.role==="state-admin"?ts():""}
        ${t.role==="district-admin"?ss():""}
        ${t.role==="school-admin"?ns():""}
        ${t.role==="lms"?os():""}
        ${t.role==="student"?cs():""}
        ${t.role==="teacher"?ds():""}
        ${t.role==="parent"?us():""}
        ${t.role==="messages"?ps():""}
        ${t.role==="community"?ms():""}
      </main>
      ${es()}
      ${Qt()}
    </div>
  `,ws(),Pe(),It()}function Kt(){if(!t.tourOpen)return"";const e=B[t.tourStep]||B[0];return`
    <section class="tour-card" aria-label="Guided onboarding">
      <div>
        <p class="eyebrow">Walkthrough ${t.tourStep+1} of ${B.length}</p>
        <h3>${e.title}</h3>
        <p>${e.body}</p>
      </div>
      <div class="tour-actions">
        <button class="secondary-action" data-tour-prev ${t.tourStep===0?"disabled":""}>${o("chevron-right")} Back</button>
        <button class="primary-action" data-tour-next>${o("play")} ${t.tourStep===B.length-1?"Finish":"Next"}</button>
      </div>
    </section>
  `}function Qt(){return`
    ${t.toast?`<div class="toast" role="status"><span>${O(t.toast)}</span><button class="icon-button" aria-label="Dismiss message" data-dismiss-toast>${o("x")}</button></div>`:""}
    ${t.notificationsOpen?`
      <aside class="utility-panel" aria-label="Notifications">
        <div class="section-heading"><h3>Notifications</h3><button class="icon-button" aria-label="Close notifications" data-close-panel>${o("x")}</button></div>
        <div class="utility-actions">
          <button class="secondary-action" data-mark-notifications>${o("check")} Mark all read</button>
          <button class="secondary-action" data-simulate-live>${o("refresh-cw")} Simulate live update</button>
        </div>
        ${E.length?E.map(e=>`
          <article class="notice-row ${e.level.toLowerCase()} ${e.read?"read":""}">
            <strong>${e.level}</strong>
            <div><span>${e.title}</span><small>${e.target} • ${e.channel}</small></div>
            <button class="icon-button" aria-label="Dismiss ${O(e.title)}" data-dismiss-notification="${e.id}">${o("x")}</button>
          </article>
        `).join(""):'<div class="empty-state">No notifications.</div>'}
      </aside>
    `:""}
    ${t.settingsOpen?`
      <aside class="utility-panel" aria-label="Settings">
        <div class="section-heading"><h3>Settings</h3><button class="icon-button" aria-label="Close settings" data-close-panel>${o("x")}</button></div>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="compactMode" ${t.compactMode?"checked":""} /><span>Compact dashboard density</span></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="highContrast" ${t.highContrast?"checked":""} /><span>High contrast panels</span></label>
        <button class="secondary-action" data-export-demo>${o("download")} Export JSON File</button>
        <label class="secondary-action import-action">${o("file-text")} Import JSON File<input type="file" id="import-demo-state" accept="application/json" /></label>
      </aside>
    `:""}
  `}function Zt(e,s){return`
    <section class="tenant-bar" aria-label="Current tenant">
      <div>
        <span class="school-logo-mini">${s.logo}</span>
        <span class="tenant-label">Tenant</span>
        <strong>${e.name}</strong>
        <em>${e.category} school</em>
        <em>${e.subdomain}.educonnect.local</em>
        <em>${e.workHours}</em>
      </div>
      <div class="tenant-path">
        <span>${ge().name}</span>
        <span>${Z().name}</span>
          <span>${e.name}</span>
          <span>${e.plan}</span>
        </div>
    </section>
  `}function Xt(e,s){return`
    <aside class="sidebar">
      <div class="brand-row">
        <div class="brand-mark">${s.logo}</div>
        <div><h1>${s.crest}</h1><p>${s.voice}</p></div>
      </div>
      <nav class="role-nav" aria-label="Portal views">
        ${Ee().map(a=>`<a class="nav-item ${t.role===a.id?"active":""}" href="#${a.id}" data-role="${a.id}" ${t.role===a.id?'aria-current="page"':""}>${o(a.icon)}<span>${a.label}</span></a>`).join("")}
      </nav>
      <div class="reference-card">
        <img src="${Bt(e.image)}" alt="" />
        <div><strong>Stitch reference</strong><span>Visual source</span></div>
      </div>
    </aside>
  `}function es(){return`
    <nav class="mobile-role-nav" aria-label="Mobile portal views">
      ${Ee().map(e=>`<a class="mobile-nav-item ${t.role===e.id?"active":""}" href="#${e.id}" data-role="${e.id}" ${t.role===e.id?'aria-current="page"':""}>${o(e.icon)}<span>${e.label}</span></a>`).join("")}
    </nav>
  `}function as(e){const s=e.id==="messages"?"Communication Hub":e.id==="state-admin"?"State Governance":e.id==="district-admin"?"District Operations":e.id==="school-admin"?"School Administration":`${e.label} Dashboard`;return`
    <header class="topbar">
      <div><p class="eyebrow">${e.label} workspace</p><h2>${s}</h2></div>
      <div class="topbar-actions">
        <label class="searchbox">${o("search")}<input id="global-search" value="${O(t.searchTerm)}" placeholder="Search resources..." /></label>
        <div class="account-chip"><span>${V(W().label)}</span><div><strong>${W().label}</strong><small>${W().role}</small></div></div>
        ${de()?"":`<button class="secondary-action reset-action" data-reset-demo type="button">${o("rotate-ccw")} Reset Demo</button>`}
        <button class="icon-button" aria-label="Notifications" data-toggle-notifications>${o("bell")}${we()?`<span class="status-dot">${we()}</span>`:""}</button>
        <button class="icon-button" aria-label="Settings" data-toggle-settings>${o("settings")}</button>
        <button class="icon-button" aria-label="Sign out" data-sign-out>${o("x")}</button>
      </div>
    </header>
  `}function ts(){const e=ge(),s=e.districts,a=s.flatMap(r=>r.schools),n=a.filter(r=>r.status==="Active").length;return`
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">State admin workspace</p>
          <h2>Tenant Governance</h2>
          <p>State administrators supervise districts, compliance, tenant standards, statewide calendars, and cross-district readiness.</p>
        </div>
        <div class="inline-actions">
          <button class="secondary-action" data-open-role="district-admin">${o("building-2")} Review Districts</button>
          <button class="primary-action" data-add-school ${R("manage-tenants","Only state and district admins can add school tenants.")}>${o("plus")} Add School Tenant</button>
        </div>
      </div>
      ${se("manage-tenants","Tenant creation and district configuration are admin-only in this demo.")}
      ${k("Districts",s.length,"building-2","blue")}
      ${k("Schools",a.length,"graduation-cap","teal")}
      ${k("Active tenants",n,"shield-check","gold")}
      ${ka()}
      ${Oe()}
      ${Te()}
      <section class="panel state-management-panel">
        <div class="section-heading"><h3>District Oversight</h3><span>${e.name}</span></div>
        <div class="management-list">
          ${s.map(r=>`
            <button class="management-row ${r.id===Z().id?"active":""}" data-manage-district="${r.id}">
              <div class="management-icon">${o("building-2")}</div>
              <div><strong>${r.name}</strong><small>${r.region} • Superintendent: ${r.superintendent}</small></div>
              <span>${r.schools.length} schools</span>
            </button>
          `).join("")}
        </div>
      </section>
      ${Aa()}
      <section class="panel audit-panel">
        <div class="section-heading"><h3>Audit Trail</h3><span>Cross-tenant accountability</span></div>
        <div class="audit-list">
          ${j.map(r=>`
            <article class="audit-row">
              ${o("clipboard-check")}
              <div><strong>${r.event}</strong><small>${r.actor} • ${r.scope}</small></div>
              <time>${r.time}</time>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="panel calendar-panel">
        <div class="section-heading"><h3>Statewide Calendar</h3><span>Policy, reporting, and public events</span></div>
        <div class="calendar-list">
          ${pa.map(r=>`<article class="calendar-row"><div class="calendar-date">${r.date}</div><div><strong>${r.title}</strong><small>${r.audience} • ${r.type}</small></div></article>`).join("")}
        </div>
      </section>
      <section class="panel hierarchy-panel">
        <div class="section-heading"><h3>Governance Chain</h3><span>State to classroom</span></div>
        <div class="hierarchy-list">
          ${yt.map(([r,d],f)=>`<article class="hierarchy-level"><div class="level-number">${f+1}</div><div><h4>${r}</h4><p>${d.join(" • ")}</p></div></article>`).join("")}
        </div>
      </section>
      ${is()}
    </section>
  `}function ss(){const e=ge(),s=Z(),a=s.schools,n=a.reduce((d,f)=>d+f.students,0),r=a.reduce((d,f)=>d+f.staff,0);return`
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">District admin workspace</p>
          <h2>${s.name}</h2>
          <p>District administrators manage school tenants, staffing, rollout readiness, district messages, and cross-school performance.</p>
        </div>
        <button class="primary-action" data-add-school ${R("manage-tenants","Only district and state admins can add school tenants.")}>${o("plus")} Add School Tenant</button>
      </div>
      ${k("Schools",a.length,"graduation-cap","blue")}
      ${k("Students",n.toLocaleString(),"users","teal")}
      ${k("Staff",r.toLocaleString(),"shield-check","gold")}
      <section class="panel tenant-controls">
        <div class="section-heading"><h3>District Scope</h3><span>${e.name}</span></div>
        <div class="tenant-selectors">
          <label><span>State</span><select id="state-filter">${K.map(d=>`<option value="${d.id}" ${t.selectedState===d.id?"selected":""}>${d.name}</option>`).join("")}</select></label>
          <label><span>District</span><select id="district-filter">${e.districts.map(d=>`<option value="${d.id}" ${s.id===d.id?"selected":""}>${d.name}</option>`).join("")}</select></label>
        </div>
      </section>
      <section class="panel district-management-panel">
        <div class="section-heading"><h3>Schools In This District</h3><span>${s.region}</span></div>
        <div class="management-list">
          ${a.map(d=>`<button class="management-row ${d.id===b().id?"active":""}" data-manage-school="${d.id}"><div class="management-icon">${o("graduation-cap")}</div><div><strong>${d.name}</strong><small>${d.category} • ${d.subdomain}.educonnect.local</small></div><span>${d.status}</span></button>`).join("")}
        </div>
      </section>
      ${ka()}
      ${Oe()}
      ${Te()}
      <section class="panel audit-panel">
        <div class="section-heading"><h3>District Audit Trail</h3><span>School and staff actions</span></div>
        <div class="audit-list">${j.map(d=>`<article class="audit-row">${o("clipboard-check")}<div><strong>${d.event}</strong><small>${d.actor} • ${d.scope}</small></div><time>${d.time}</time></article>`).join("")}</div>
      </section>
    </section>
  `}function ns(){const e=b(),s=D(),a=A.filter(r=>r.status==="Watch").length,n=P.filter(r=>r.status!=="Reviewed").length;return`
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">School admin workspace</p>
          <h2>${e.name}</h2>
          <p>School administrators run campus operations: users, safety messaging, approvals, LMS visibility, roster health, and family communication windows.</p>
        </div>
        <button class="primary-action" data-open-role="community">${o("megaphone")} Review Community Posts</button>
      </div>
      ${k("Students",e.students.toLocaleString(),"users","blue")}
      ${k("Staff",e.staff.toLocaleString(),"shield-check","teal")}
      ${k("Pending approvals",s.pending.length,"clipboard-check","gold")}
      <section class="panel instance-panel">
        <div class="section-heading"><h3>Campus Tenant</h3><span>${e.status}</span></div>
        <div class="instance-card">
          <div><span>Instance URL</span><strong>${e.subdomain}.educonnect.local</strong></div>
          <div><span>Plan</span><strong>${e.plan}</strong></div>
          <div><span>Work hours</span><strong>${e.workHours}</strong></div>
          <div><span>Messages</span><strong>${e.messages}</strong></div>
          <div><span>Roster watch</span><strong>${a}</strong></div>
          <div><span>Submissions</span><strong>${n} pending</strong></div>
        </div>
      </section>
      ${Oe()}
      <section class="panel permissions-panel">
        <div class="section-heading"><h3>School Operations</h3><span>LMS, messages, approvals</span></div>
        <div class="permission-table">
          <button class="permission-row" data-open-role="lms"><strong>LMS</strong><span>Assignments and gradebook</span><small>${L.length} assignments</small></button>
          <button class="permission-row" data-open-role="messages"><strong>Messages</strong><span>Family and staff communication</span><small>${w.reduce((r,d)=>r+(d.unread||0),0)} unread</small></button>
          <button class="permission-row" data-open-role="community"><strong>Community</strong><span>Approval queue and published posts</span><small>${s.pending.length} pending</small></button>
        </div>
      </section>
      ${Aa()}
      ${Te()}
    </section>
  `}function Oe(){return`
    <section class="panel users-roles-panel">
      <div class="section-heading"><h3>Users & Roles</h3><span>${J("manage-users")?"Editable":"Read-only"}</span></div>
      <div class="users-grid">
        ${M.map(e=>`
          <article class="user-role-card">
            <div><strong>${e.label}</strong><small>${e.role} • ${e.scope||"global"} scope • lands on ${e.landing}</small></div>
            <div class="permission-chip-list">
              ${bt.map(([s,a])=>`
                <label class="permission-chip ${e.permissions.includes(s)?"active":""}">
                  <input type="checkbox" data-profile-permission="${e.id}:${s}" ${e.permissions.includes(s)?"checked":""} ${J("manage-users")?"":"disabled"} />
                  <span>${a}</span>
                </label>
              `).join("")}
            </div>
          </article>
        `).join("")}
      </div>
      ${se("manage-users","Only administrators can change demo role permissions.")}
    </section>
  `}function Te(){return`
    <section class="panel realtime-panel">
      <div class="section-heading">
        <div><h3>Realtime Operations</h3><span>${t.liveUpdates?"Live updates enabled":"Live updates paused"}</span></div>
        <div class="inline-actions">
          <label class="mini-toggle"><input type="checkbox" data-toggle-live ${t.liveUpdates?"checked":""} /><span>Live</span></label>
          <button class="secondary-action" data-simulate-live>${o("refresh-cw")} Simulate Update</button>
        </div>
      </div>
      <div class="realtime-list">
        ${T.map(e=>`
          <article class="realtime-row">
            <strong>${e.type}</strong>
            <div><span>${e.title}</span><small>${e.detail}</small></div>
            <time>${e.time}</time>
          </article>
        `).join("")}
      </div>
    </section>
  `}function ka(){const e=b(),s=D(),a=Math.round(A.reduce((h,I)=>h+I.grade,0)/A.length),n=A.filter(h=>h.status==="Watch").length,r=P.filter(h=>h.status!=="Reviewed").length,d=w.reduce((h,I)=>h+(I.unread||0),0),f=[{role:"lms",label:"LMS",iconName:"layers",metric:`${L.length} assignments`,detail:`${r} gradebook items need review`},{role:"student",label:"Students",iconName:"sparkles",metric:`${A.length} learners`,detail:`${n} students on watch status`},{role:"teacher",label:"Teachers",iconName:"graduation-cap",metric:`${G.length} classes`,detail:`${Y.length} activity events in the feed`},{role:"parent",label:"Parents",iconName:"users",metric:`${Ce.length} deadlines`,detail:`${t.checkedDeadlines.length} family tasks checked`},{role:"messages",label:"Messages",iconName:"message-circle",metric:`${d} unread`,detail:`${w.length} parent and group threads`},{role:"community",label:"Community",iconName:"megaphone",metric:`${s.pending.length} pending`,detail:`${s.published.length} approved posts live`}];return`
    <section class="panel unified-os-panel">
      <div class="section-heading">
        <div><p class="eyebrow">One integrated system</p><h3>Unified School Operating System</h3></div>
        <span>${e.name}</span>
      </div>
      <div class="unified-os-grid">
        ${f.map(h=>`
          <button class="module-hub-card" data-open-role="${h.role}">
            <span class="module-hub-icon">${o(h.iconName)}</span>
            <span><strong>${h.label}</strong><small>${h.detail}</small></span>
            <em>${h.metric}</em>
          </button>
        `).join("")}
      </div>
      <div class="system-snapshot-grid">
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Students + LMS</h4><button class="text-button" data-open-role="lms">Open LMS ${o("chevron-right")}</button></div>
          <div class="snapshot-metrics">
            <span><strong>${a}%</strong><small>Average roster grade</small></span>
            <span><strong>${r}</strong><small>Submissions in queue</small></span>
            <span><strong>${t.offlinePackReady?"Ready":"Build"}</strong><small>Offline learning pack</small></span>
          </div>
          ${P.slice(0,3).map(h=>`<div class="snapshot-row"><strong>${h.student}</strong><span>${h.assignment}</span><em>${h.status}</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Teachers + Classes</h4><button class="text-button" data-open-role="teacher">Open Teacher ${o("chevron-right")}</button></div>
          ${G.map(h=>`<div class="snapshot-row"><strong>${h.name}</strong><span>${h.room}</span><em>${h.pending} pending</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Parents + Messages</h4><button class="text-button" data-open-role="messages">Open Messages ${o("chevron-right")}</button></div>
          ${w.slice(0,3).map(h=>`<div class="snapshot-row"><strong>${h.name}</strong><span>${h.preview}</span><em>${h.unread||0} unread</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Admin + Community</h4><button class="text-button" data-open-role="community">Open Community ${o("chevron-right")}</button></div>
          <div class="snapshot-metrics">
            <span><strong>${s.pending.length}</strong><small>Approval queue</small></span>
            <span><strong>${we()}</strong><small>Unread alerts</small></span>
            <span><strong>${j.length}</strong><small>Audit entries</small></span>
          </div>
          ${T.slice(0,2).map(h=>`<div class="snapshot-row"><strong>${h.type}</strong><span>${h.title}</span><em>${h.time}</em></div>`).join("")}
        </article>
      </div>
    </section>
  `}function is(){const e=U.filter(a=>a.done).length,s=z.filter(a=>a.done).length;return`
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
            <button class="secondary-action" data-set-gateway="demo">${o("play")} Demo Mode</button>
            <button class="primary-action" data-set-gateway="backend">${o("database")} Backend Ready</button>
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Database Blueprint</h4><button class="text-button" data-provision-schema>Provision mock schema</button></div>
          <div class="schema-list">
            ${Q.map(a=>`<div class="schema-row"><strong>${a.name}</strong><span>${a.records} records</span><em>${a.status}</em><small>${a.detail}</small></div>`).join("")}
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Admin Onboarding</h4><span>${e}/${U.length} complete</span></div>
          <div class="checklist-list">
            ${U.map(a=>`<label class="checklist-row"><input type="checkbox" data-onboarding-task="${a.id}" ${a.done?"checked":""} /><span class="custom-check">${a.done?o("check"):""}</span><span><strong>${a.label}</strong><small>${a.owner}</small></span></label>`).join("")}
          </div>
          <form id="onboarding-user-form" class="mini-form">
            <input id="onboarding-user-name" placeholder="Invite user name" />
            <select id="onboarding-user-role"><option>Teacher</option><option>Parent</option><option>Student</option><option>Admin</option></select>
            <button class="secondary-action" type="submit">${o("plus")} Invite</button>
          </form>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>File Uploads</h4><span>${x.length} files</span></div>
          <label class="upload-drop">${o("paperclip")} Add assignment, PDF, image, or community file<input type="file" id="production-file-upload" multiple /></label>
          <div class="upload-list">
            ${x.map(a=>`<div class="upload-row"><strong>${a.name}</strong><span>${a.area} • ${a.size}</span><em>${a.status}</em></div>`).join("")}
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Notification Delivery</h4><button class="text-button" data-send-delivery-test>Send test batch</button></div>
          ${_.map(a=>`<div class="delivery-row"><strong>${a.channel}</strong><span>${a.audience}</span><em>${a.status}</em><small>${a.detail}</small></div>`).join("")}
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Privacy & Security</h4><span>${s}/${z.length} ready</span></div>
          <div class="checklist-list">
            ${z.map(a=>`<label class="checklist-row"><input type="checkbox" data-security-check="${a.id}" ${a.done?"checked":""} /><span class="custom-check">${a.done?o("check"):""}</span><span><strong>${a.label}</strong><small>${a.status}</small></span></label>`).join("")}
          </div>
        </article>

        <article class="production-card deploy-card">
          <div class="section-heading"><h4>Deployment Pipeline</h4><span>Hostinger live</span></div>
          ${me.map(a=>`<div class="pipeline-row"><strong>${a.step}</strong><span>${a.detail}</span><em class="${a.status.toLowerCase()}">${a.status}</em></div>`).join("")}
        </article>
      </div>
    </section>
  `}function Aa(){return`
    <section class="panel compliance-panel">
      <div class="section-heading"><h3>Privacy & Compliance Dashboard</h3><span>FERPA operations</span></div>
      <div class="compliance-grid">
        ${wt.map(e=>`
          <article class="compliance-card">
            ${o("shield-check")}
            <div><strong>${e.value}</strong><span>${e.label}</span><small>${e.status} • ${e.detail}</small></div>
          </article>
        `).join("")}
      </div>
      ${se("view-compliance","Compliance detail is admin-only.")}
    </section>
  `}function os(){const e=b(),s=Me.find(a=>a.id===t.activeAccount)||Me[0];return`
    <section class="dashboard-grid lms-grid">
      <div class="welcome-strip lms-welcome">
        <div>
          <p class="eyebrow">${e.name} advanced LMS</p>
          <h2>Learning tools beyond basic classroom workflows</h2>
          <p>Advanced grading, firm deadlines, file conversion, account context, organized alerts, and offline access are all managed inside this school instance.</p>
        </div>
        <button class="primary-action" data-build-offline ${R("lms","Only teachers and administrators can build LMS offline packs.")}>${o("download")} ${t.offlinePackReady?"Rebuild Offline Pack":"Build Offline Pack"}</button>
      </div>

      ${k("Auto-graded checks","18","clipboard-check","blue")}
      ${k("Rubrics active","7","layers","teal")}
      ${k("Offline packs",t.offlinePackReady?"Ready":"Not built","download","gold")}

      ${ls()}

      <section class="panel lms-panel simplicity-suite">
        <div class="section-heading"><h3>Simple Classroom Experience</h3><span>Clean by default</span></div>
        ${$t.slice(0,2).map(([a,n])=>`<article class="strength-row">${o("check")}<div><strong>${a}</strong><small>${n}</small></div></article>`).join("")}
      </section>

      <section class="panel lms-panel free-suite">
        <div class="section-heading"><h3>Zero Cost Core</h3><span>No premium paywall</span></div>
        <div class="free-card"><strong>$0</strong><p>Schools can use classroom basics, paperless assignments, messaging, and parent summaries without hidden fees.</p></div>
      </section>

      <section class="panel lms-panel grading-suite">
        <div class="section-heading"><h3>Advanced Grading</h3><span>Automated tests + rubrics + analytics</span></div>
        <div class="assignment-list">
          ${L.map(a=>`
            <article class="assignment-row">
              <div><strong>${a.title}</strong><small>${a.type} • ${a.rubric}</small></div>
              ${he(a.analytics)}
              <span>${a.analytics}% mastery</span>
            </article>
          `).join("")}
        </div>
      </section>

      ${rs()}

      <section class="panel lms-panel deadline-suite">
        <div class="section-heading"><h3>Deadline Controls</h3><span>Firm locks + exceptions</span></div>
        ${L.map(a=>`
          <article class="deadline-control">
            <div><strong>${a.title}</strong><small>Locks ${a.lockDate}</small></div>
            <span>${a.exception}</span>
          </article>
        `).join("")}
      </section>

      <section class="panel lms-panel account-suite">
        <div class="section-heading"><h3>Account Context</h3><span>No constant log-outs</span></div>
        <div class="account-switcher">
          ${Me.map(a=>`<button class="${s.id===a.id?"active":""}" data-lms-account="${a.id}"><strong>${a.name}</strong><span>${a.context}</span></button>`).join("")}
        </div>
        <p class="account-note">Current context: <strong>${s.name}</strong> can switch roles without leaving ${e.name}.</p>
      </section>

      <section class="panel lms-panel workflow-suite">
        <div class="section-heading"><h3>Paperless Assignment Workflow</h3><span>Create to return</span></div>
        <div class="workflow-steps">
          ${["Create","Distribute","Collect","Grade","Return","Archive"].map((a,n)=>`<div><strong>${n+1}</strong><span>${a}</span></div>`).join("")}
        </div>
      </section>

      <section class="panel lms-panel guardrail-suite">
        <div class="section-heading"><h3>Automated Guardrails</h3><span>Submission and quiz controls</span></div>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="lockSubmissions" ${t.guardrails.lockSubmissions?"checked":""} ${J("lms")?"":"disabled"} /><span class="custom-check">${t.guardrails.lockSubmissions?o("check"):""}</span><span>Prevent edits after submission</span></label>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="hideAnswers" ${t.guardrails.hideAnswers?"checked":""} ${J("lms")?"":"disabled"} /><span class="custom-check">${t.guardrails.hideAnswers?o("check"):""}</span><span>Hide answers until quiz closes</span></label>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="parentSummaries" ${t.guardrails.parentSummaries?"checked":""} ${J("lms")?"":"disabled"} /><span class="custom-check">${t.guardrails.parentSummaries?o("check"):""}</span><span>Auto-return parent email summaries</span></label>
        ${se("lms","LMS guardrails are managed by teachers and administrators.")}
      </section>

      <section class="panel lms-panel offline-suite">
        <div class="section-heading"><h3>Offline Learning</h3><span>${t.offlinePackReady?"Synced for low-connectivity use":"Build a pack for offline work"}</span></div>
        <div class="offline-card">
          <div class="offline-status ${t.offlinePackReady?"ready":""}">${t.offlinePackReady?o("check"):o("download")}</div>
          <div><strong>${t.offlinePackReady?"Offline pack ready":"Offline pack not built"}</strong><p>Includes assignments, rubrics, PDF annotations, and queued submissions for later sync.</p></div>
        </div>
      </section>

      <section class="panel lms-panel privacy-suite">
        <div class="section-heading"><h3>Learning Privacy</h3><span>FERPA-aware LMS</span></div>
        ${St.map(a=>`<article class="strength-row">${o("shield-check")}<div><strong>${a.label}</strong><small>${a.detail}</small></div></article>`).join("")}
      </section>
    </section>
  `}function rs(){const e=P.find(s=>s.id===t.selectedSubmissionId)||P[0];return`
    <section class="panel lms-panel gradebook-detail-suite">
      <div class="section-heading"><h3>Gradebook Detail</h3><span>Submissions, rubric, comments</span></div>
      <div class="gradebook-layout">
        <div class="submission-list">
          ${P.map(s=>`
            <button class="submission-row ${e.id===s.id?"active":""}" data-submission="${s.id}">
              ${o(s.status==="Missing"?"alert-triangle":"file-text")}
              <span><strong>${s.student}</strong><small>${s.assignment} • ${s.status}</small></span>
              <em>${s.score}%</em>
            </button>
          `).join("")}
        </div>
        <article class="submission-detail">
          <div class="section-heading"><h4>${e.student}</h4><span>${e.assignment}</span></div>
          ${e.rubric.map(([s,a])=>`<div class="rubric-row"><span>${s}</span>${he(Math.round(a/4*100))}<strong>${a}/4</strong></div>`).join("")}
          <label><span>Teacher comment</span><textarea id="submission-comment">${O(e.comment)}</textarea></label>
          <button class="primary-action" data-save-submission="${e.id}" ${R("teacher-tools","Only teachers and administrators can save grading comments.")}>${o("check")} Save Comment</button>
        </article>
      </div>
    </section>
  `}function cs(){const e=b(),s=(e.studentPoints+t.completed.length*75).toLocaleString();return`
    <section class="dashboard-grid student-grid">
      <div class="hero-card student-hero">
        <div>
          <span class="badge soft">${o("star")} ${s} points</span>
          <h2>Welcome back, ${e.studentName}!</h2>
          <p>You are learning inside the ${e.name} instance. Keep going and unlock today's discovery badge.</p>
          <button class="primary-action" data-continue-adventure>${o("play")} Continue Adventure</button>
        </div>
        <div class="orbital-scene" aria-hidden="true"><span class="planet planet-one"></span><span class="planet planet-two"></span><span class="rocket-shape">${o("rocket")}</span></div>
      </div>
      ${k("Daily streak","5 days","trending-up","blue")}
      ${k("Books read","12","book-open","teal")}
      <section class="panel missions-panel">
        <div class="section-heading"><div><p class="eyebrow">Today</p><h3>My Missions</h3></div><button class="text-button" data-action="All available missions are already shown for this learner.">See all ${o("chevron-right")}</button></div>
        <div class="mission-list">
          ${ke.map(a=>{const n=t.completed.includes(a.id);return`
              <article class="mission-card ${a.accent}">
                <div class="mission-icon">${o(a.icon)}</div>
                <div class="mission-main">
                  <div class="mission-meta"><span>${a.subject}</span><span>${a.due}</span></div>
                  <h4>${a.title}</h4>
                  ${he(n?100:a.progress)}
                </div>
                <button class="complete-button ${n?"done":""}" data-complete="${a.id}">${o(n?"check":"play")} ${n?"Done":a.action}</button>
              </article>
            `}).join("")}
        </div>
      </section>
      <section class="panel awards-panel">
        <div class="section-heading"><h3>Awards</h3>${o("award")}</div>
        <div class="award-grid">${["Kindness Kid","Problem Solver","Fast Learner","Story Teller"].map(a=>`<div class="award-tile">${o("sparkles")}<span>${a}</span></div>`).join("")}</div>
      </section>
    </section>
  `}function ls(){const e=we();return`
    <section class="panel lms-panel background-services" aria-label="Passive background services">
      <div class="section-heading">
        <div><p class="eyebrow">Passive background layer</p><h3>Background Services</h3></div>
        <span>Runs quietly behind LMS work</span>
      </div>
      <div class="background-service-grid">
        <article class="background-service-card">
          <div>${o("refresh-cw")}<strong>Workspace sync</strong></div>
          <small>${ia.length} connected services attach, collect, archive, and export in the background.</small>
          <span>Passive</span>
        </article>
        <article class="background-service-card">
          <div>${o("paperclip")}<strong>File handling</strong></div>
          <small>${pe.length} class files are converted, attached, or archived without interrupting classroom flow.</small>
          <span>Passive</span>
        </article>
        <article class="background-service-card">
          <div>${o("bell")}<strong>Notification routing</strong></div>
          <small>${e} unread alert${e===1?"":"s"} stay in the notification tray unless action is needed.</small>
          <span>Tray</span>
        </article>
        <article class="background-service-card">
          <div>${o("calendar-days")}<strong>Calendar bridge</strong></div>
          <small>${pa.length} shared events inform deadlines and family reminders in the background.</small>
          <span>Synced</span>
        </article>
      </div>
      <details class="background-details">
        <summary>View background service activity</summary>
        <div class="background-activity">
          ${ia.map(s=>`<article><strong>${s.app}</strong><small>${s.action}</small><span>${s.status}</span></article>`).join("")}
          ${te.map(s=>`<article><strong>${s.item}</strong><small>${s.owner}</small><span>${t.offlinePackReady?s.status:"Waiting"}</span></article>`).join("")}
        </div>
      </details>
    </section>
  `}function ds(){const e=b(),s=t.selectedClass==="All"?G:G.filter(n=>n.name===t.selectedClass),a=t.rosterFilter==="All"?A:A.filter(n=>n.status===t.rosterFilter);return`
    <section class="dashboard-grid teacher-grid">
      <div class="welcome-strip"><div><p class="eyebrow">${e.name} instance</p><h2>Welcome back, Demo Teacher.</h2><p>${e.messages} need attention in this school tenant, with class data isolated from every other school.</p></div><button class="primary-action" data-create-assignment ${R("teacher-tools","Only teachers and administrators can create assignments.")}>${o("plus")} Create Assignment</button></div>
      ${k("Average grade",e.avgGrade,"trending-up","blue")}
      ${k("Attendance",e.attendance,"calendar-days","teal")}
      ${k("Messages",e.messages,"mail","gold")}
      <section class="panel class-panel">
        <div class="section-heading">
          <h3>Active Classes</h3>
          <select id="class-filter" aria-label="Filter classes"><option>All</option>${G.map(n=>`<option ${t.selectedClass===n.name?"selected":""}>${n.name}</option>`).join("")}</select>
        </div>
        <div class="class-list">${s.map(n=>`<article class="class-card"><div><h4>${n.name}</h4><p>${n.room}</p></div><div class="class-metrics"><span>${n.grade}% grade</span><span>${n.attendance}% attendance</span><span>${n.pending} pending</span></div><button class="icon-button" aria-label="Open ${n.name} options" data-action="${n.name} class tools opened.">${o("more-horizontal")}</button></article>`).join("")}</div>
      </section>
      <section class="panel assignment-composer-panel">
        <div class="section-heading"><h3>Create Assignment</h3><span>Realtime LMS filler data</span></div>
        <form id="assignment-form" class="assignment-form">
          <label><span>Title</span><input id="assignment-title" placeholder="Example: Reading Checkpoint" required /></label>
          <label><span>Class</span><select id="assignment-class">${G.map(n=>`<option>${n.name}</option>`).join("")}</select></label>
          <label><span>Type</span><select id="assignment-type"><option>Automated quiz</option><option>Writing task</option><option>Project</option><option>Reading response</option></select></label>
          <label><span>Lock date</span><input id="assignment-lock" value="Next Friday, 8:00 PM" /></label>
          <button class="primary-action" type="submit" ${R("teacher-tools","Only teachers and administrators can create assignments.")}>${o("plus")} Add Assignment</button>
        </form>
      </section>
      <section class="panel activity-panel">
        <div class="section-heading"><h3>Recent Student Activity</h3><button class="icon-button" aria-label="Refresh activity" data-refresh-activity>${o("refresh-cw")}</button></div>
        ${Y.map(([n,r,d,f])=>`<article class="activity-row"><div class="avatar">${V(n)}</div><div><p><strong>${n}</strong> ${r}</p><span>${d} | ${f}</span></div><button class="icon-button" aria-label="Reply to ${n}" data-reply-student="${n}">${o("pen-line")}</button></article>`).join("")}
      </section>
      <section class="panel grading-card"><h3>Grading To-Do</h3>${he(68)}<p>18 submissions left across 3 classes.</p><button class="secondary-action" data-open-role="lms">${o("clipboard-check")} Open Grading Hub</button></section>
      ${se("teacher-tools","Teacher tools are read-only for this signed-in role.")}
      <section class="panel roster-panel">
        <div class="section-heading">
          <h3>Roster & Enrollments</h3>
          <select id="roster-filter" aria-label="Filter roster"><option>All</option><option>Active</option><option>Watch</option></select>
        </div>
        <div class="roster-table">
          ${a.map(n=>`
            <article class="roster-row editable-roster-row">
              <div><strong>${n.student}</strong><small>${n.className} • Guardian: ${n.guardian}</small></div>
              <label><span>Grade</span><input type="number" min="0" max="100" value="${n.grade}" data-roster-grade="${n.id}" /></label>
              <label><span>Attendance</span><input type="number" min="0" max="100" value="${n.attendance}" data-roster-attendance="${n.id}" /></label>
              <label><span>Status</span><select data-roster-status="${n.id}"><option ${n.status==="Active"?"selected":""}>Active</option><option ${n.status==="Watch"?"selected":""}>Watch</option></select></label>
            </article>
          `).join("")}
        </div>
      </section>
    </section>
  `}function us(){const e=b();return`
    <section class="dashboard-grid parent-grid">
      <div class="welcome-strip parent-welcome"><div><p class="eyebrow">${e.learnerName}'s progress</p><h2>Welcome back, ${e.guardianName}.</h2><p>${e.learnerName}'s family view belongs to ${e.name}'s private instance.</p></div><button class="primary-action" data-open-role="messages">${o("send")} Message Teacher</button></div>
      ${k("Current grade","A-","trending-up","blue")}
      ${k("Attendance","98%","calendar-days","teal")}
      ${k("Reading pace","56%","book-open","gold")}
      <section class="panel teacher-note"><div class="teacher-avatar">MH</div><h3>Ms. Henderson</h3><p>"Leo is making great progress in Geometry. Keep practicing the new vocabulary cards at home."</p><button class="secondary-action" data-open-role="messages">${o("message-circle")} Start Chat</button></section>
      <section class="panel deadline-panel">
        <div class="section-heading"><h3>Upcoming Deadlines</h3><button class="text-button" data-open-role="platform">Calendar ${o("chevron-right")}</button></div>
        ${Ce.map(s=>{const a=t.checkedDeadlines.includes(s.title);return`<label class="deadline-row ${s.urgent?"urgent":""}"><input type="checkbox" data-deadline="${s.title}" ${a?"checked":""} /><span class="custom-check">${a?o("check"):""}</span><span><strong>${s.title}</strong><small>${s.meta}</small></span></label>`}).join("")}
      </section>
      <section class="panel mobile-parent-panel">
        <div class="phone-preview">
          <div class="phone-top">${e.learnerName}</div>
          <strong>${e.name}</strong>
          <span>${t.workHoursOpen?"Teacher chat open":"Teacher chat resumes during work hours"}</span>
          <button data-open-role="messages">${o("send")} Message</button>
        </div>
        <div class="mobile-actions">
          <h3>Mobile Parent Experience</h3>
          ${At.map(s=>`<article class="mobile-action">${o("smartphone")}<div><strong>${s.title}</strong><small>${s.detail}</small></div></article>`).join("")}
        </div>
      </section>
      <section class="panel subject-panel"><h3>Subject Snapshot</h3>${[["Math",92],["Science",88],["Reading",84],["History",91]].map(([s,a])=>`<div class="subject-row"><span>${s}</span>${he(a)}<strong>${a}%</strong></div>`).join("")}</section>
    </section>
  `}function ps(){const e=b(),s=w.filter(n=>n.type===t.conversationFilter),a=w.find(n=>n.id===t.activeConversationId)||s[0]||w[0];return`
    <section class="messages-shell">
      <aside class="conversation-list">
        <div class="segment-control">${["Parents","Groups"].map(n=>`<button class="${t.conversationFilter===n?"active":""}" data-filter="${n}">${n}</button>`).join("")}</div>
        ${s.map(n=>`<button class="conversation ${a.id===n.id?"active":""}" data-conversation="${n.id}"><div class="avatar">${V(n.name)}</div><div><strong>${n.name}</strong><span>${n.preview}</span></div>${n.unread?`<em>${n.unread}</em>`:""}</button>`).join("")}
        <div class="emergency-card ${t.emergencyOverride?"active":""}">
          ${o("alert-triangle")}
          <div><strong>Emergency Override</strong><span>${t.emergencyOverride?"Administrator enabled for urgent safety communication.":"Available only to school administrators."}</span></div>
          <button class="secondary-action" data-toggle-emergency ${R("emergency","Emergency override is admin-only.")}>${t.emergencyOverride?"Disable":"Enable"}</button>
        </div>
      </aside>
      <section class="chat-panel">
        <header class="chat-header"><div class="avatar">${V(a.name)}</div><div><h3>${a.name}</h3><p>${a.online?"Online now":a.role}</p></div><div class="chat-tools"><button class="icon-button" aria-label="Start video call" data-start-call="${a.id}">${o("video")}</button><button class="icon-button" aria-label="More chat options" data-action="Chat options opened for ${a.name}.">${o("more-horizontal")}</button></div></header>
        ${t.activeCallName?`<div class="call-banner">${o("video")} <strong>Live call with ${t.activeCallName}</strong><button class="text-button" data-end-call>End call</button></div>`:""}
        <div class="work-hours-banner ${t.workHoursOpen||t.emergencyOverride?"open":"closed"}">
          ${o(t.workHoursOpen||t.emergencyOverride?"check":"x")}
          <div><strong>${t.emergencyOverride?"Emergency override active":t.workHoursOpen?"Communication window open":"After-hours messaging paused"}</strong><span>${e.workHours}. ${t.emergencyOverride?"Urgent administrator-approved messages can be sent now.":t.workHoursOpen?"Parents and teachers can message now.":e.afterHours}</span></div>
          <button class="text-button" data-toggle-hours>${t.workHoursOpen?"Simulate after hours":"Open work hours"}</button>
        </div>
        <div class="chat-stream">${a.messages.map(n=>`<div class="bubble ${n.from==="me"?"mine":""}"><p>${n.text}</p><span>${n.time}</span></div>`).join("")}</div>
        <form class="compose-box ${t.workHoursOpen||t.emergencyOverride?"":"locked"}" id="compose"><input id="message-draft" value="${t.draft}" placeholder="${t.workHoursOpen||t.emergencyOverride?`Message ${a.name}...`:"Messaging resumes during work hours"}" ${t.workHoursOpen||t.emergencyOverride?"":"disabled"} /><button class="primary-action" type="submit" ${t.workHoursOpen||t.emergencyOverride?"":"disabled"}>${o("send")} Send</button></form>
      </section>
    </section>
  `}function ms(){const e=b(),s=D(),a=Vt(s);return`
    <section class="dashboard-grid community-grid">
      <div class="welcome-strip community-welcome">
        <div>
          <p class="eyebrow">${e.name} community board</p>
          <h2>Approved school community chat</h2>
          <p>Parents and teachers can submit information, links, photos, or files. School administrators approve posts before they appear publicly.</p>
        </div>
        <span class="approval-badge">${s.pending.length} awaiting approval</span>
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
          <label class="span-2"><span>Assigned approver</span><select id="board-approver">${s.approvers.map(n=>`<option value="${n.id}" ${a.id===n.id?"selected":""}>${n.name} - ${n.title}</option>`).join("")}</select></label>
          <button class="primary-action span-2" type="submit">${o("send")} Submit for Admin Approval</button>
        </form>
      </section>

      <section class="panel approver-panel">
        <div class="section-heading"><h3>Assigned Post Approvers</h3>${o("shield-check")}</div>
        <div class="approver-list">
          ${s.approvers.map(n=>`
            <label class="approver-row ${n.active?"active":""}">
              <input type="checkbox" data-approver-toggle="${n.id}" ${n.active?"checked":""} />
              <span class="custom-check">${n.active?o("check"):""}</span>
              <span><strong>${n.name}</strong><small>${n.title}</small></span>
            </label>
          `).join("")}
        </div>
        <form id="approver-form" class="approver-form">
          <input id="new-approver-name" placeholder="Add approver name" />
          <select id="new-approver-title"><option>Principal</option><option>Assistant Principal</option><option>Dean of Students</option><option>Department Chair</option></select>
          <button class="secondary-action" type="submit">${o("plus")} Assign</button>
        </form>
      </section>

      <section class="panel approval-queue">
        <div class="section-heading"><h3>Administrator Approval Queue</h3>${o("shield-check")}</div>
        <div class="queue-list">
          ${s.pending.length?s.pending.map(n=>hs(n)).join(""):'<div class="empty-state">No posts waiting for approval.</div>'}
        </div>
      </section>

      <section class="panel published-board">
        <div class="section-heading"><h3>Published Community Board</h3><span>${s.published.length} approved</span></div>
        <div class="post-list">
          ${s.published.map(n=>gs(n)).join("")}
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
        ${se("approve-posts","Only administrators can approve or reject community posts.")}
      </section>

      <section class="panel workflow-rules-panel">
        <div class="section-heading"><h3>Approval Workflow Rules</h3>${o("shield-check")}</div>
        ${kt.map(([n,r])=>`<article class="rule-row"><strong>${n}</strong><span>${r}</span></article>`).join("")}
      </section>
    </section>
  `}function hs(e){const s=D();return`
    <article class="board-post pending-post">
      <div class="post-header"><div class="avatar">${V(e.author)}</div><div><strong>${e.title}</strong><span>${e.author} • ${e.role} • ${e.audience}</span></div></div>
      <p>${e.body}</p>
      <div class="post-media">${o("paperclip")} ${e.media||"No media"}</div>
      <div class="assigned-approver">${o("shield-check")} Assigned to ${Yt(s,e.approverId)}</div>
      <div class="approval-actions">
        <button class="secondary-action" data-reject-post="${e.id}" ${R("approve-posts","Only administrators can reject community posts.")}>${o("x")} Reject</button>
        <button class="primary-action" data-approve-post="${e.id}" ${R("approve-posts","Only administrators can approve community posts.")}>${o("check")} Approve</button>
      </div>
    </article>
  `}function gs(e){return`
    <article class="board-post">
      <div class="post-header"><div class="avatar">${V(e.author)}</div><div><strong>${e.title}</strong><span>${e.author} • ${e.role} • ${e.time}</span></div></div>
      <p>${e.body}</p>
      <div class="post-tags"><span>${e.type}</span><span>${e.audience}</span><span>${e.media||"No media"}</span></div>
    </article>
  `}function vs(){const e=Z(),s=e.schools.length+1,a=`demo-school-${Date.now()}`,n={id:a,name:`Demo Learning Academy ${s}`,category:"Public",students:240+s*18,staff:32+s,status:"Onboarding",subdomain:`demoacademy${s}`,plan:"District Core",modules:["SIS","LMS","Messaging","Family Portal"],storage:18,uptime:"Provisioning",theme:"Discovery Blue",isolation:"Dedicated tenant database",avgGrade:"89.0%",attendance:"95.0%",messages:"0 pending",studentPoints:760,studentName:"Explorer",guardianName:"Jordan",learnerName:"Riley",workHours:"Mon-Fri, 8:00 AM-4:00 PM",afterHours:"Messages are queued until office hours"};e.schools.push(n),t.selectedSchool=a,y("Created demo school tenant",e.name),t.toast=`${n.name} was added to ${e.name}.`,p()}function fs(){const e=`Quick Check ${L.length+1}`;Ma({title:e,className:t.selectedClass==="All"?"All classes":t.selectedClass,type:"Teacher-created assignment",lockDate:"Next Friday, 8:00 PM"}),X("lms",`${e} was created in the LMS grading suite.`)}function Ma({title:e,className:s,type:a,lockDate:n}){const r=`${e.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${Date.now()}`;L.unshift({id:r,title:e,type:a,rubric:"Auto rubric draft",analytics:0,lockDate:n||"Next Friday, 8:00 PM",exception:"None"});const d=A.find(f=>s==="All classes"||f.className===s)||A[0];d&&(P.unshift({id:`sub-${Date.now()}`,student:d.student,assignment:e,status:"Needs review",score:0,rubric:[["Completion",0],["Accuracy",0],["Explanation",0]],comment:"New assignment created. Awaiting student work."}),t.selectedSubmissionId=P[0].id),H("Action",`${e} is ready to publish`,s,"Teacher inbox"),C("LMS",`${e} created`,`${a} assigned to ${s}.`),y(`Created assignment ${e}`,b().name)}function bs(){const e=ke.find(s=>!t.completed.includes(s.id));if(!e){v("All missions are complete. Reset the demo or wait for the next adventure.");return}t.completed.includes(e.id)||t.completed.push(e.id),v(`${e.title} marked complete. Points updated.`)}function ys(){Y.unshift(["Demo Student","opened the newest assignment","Just now",t.selectedClass==="All"?"All Classes":t.selectedClass]),v("Student activity refreshed.")}function $s(e){t.conversationFilter="Groups",t.activeConversationId="grade-team",t.draft=`Following up about ${e}'s recent activity.`,X("messages",`Reply draft started for ${e}.`)}function Ss(){var e,s;document.querySelectorAll("[data-landing-profile]").forEach(a=>{a.addEventListener("click",()=>{var r,d;const n=document.querySelector("#landing-profile");n&&(n.value=a.dataset.landingProfile),(r=document.querySelector("#signin"))==null||r.scrollIntoView({behavior:"smooth",block:"center"}),(d=document.querySelector("#landing-password"))==null||d.focus({preventScroll:!0})})}),(e=document.querySelector("#landing-profile"))==null||e.addEventListener("change",a=>{t.currentUser=a.target.value}),(s=document.querySelector("#landing-login-form"))==null||s.addEventListener("submit",async a=>{a.preventDefault();const n=document.querySelector("#landing-profile").value,r=document.querySelector("#landing-password").value,d=M.find(f=>f.id===n);if(le="",!de()){ca(d);return}re=!0,p();try{const f=await Nt(n,r);localStorage.setItem("educonnect-session-token",f.token),t.apiMode="live-api",await Sa("live-api").catch(()=>{}),re=!1,ca(f.user,"Securely signed in as")}catch(f){localStorage.removeItem("educonnect-session-token"),re=!1,le=f.message||"Invalid credentials.",p()}})}function ws(){var e,s,a,n,r,d,f,h,I,ve,fe,ne,ie,be,oe,Ne,qe,xe,Re,je,Ie,Fe,Ge,Be,He,Ue,_e,ze,We,Ve,Ye,Je,Ke,Qe,Ze,Xe,ea,aa,ta,sa;document.querySelectorAll("[data-role]").forEach(i=>{i.addEventListener("click",c=>{c.preventDefault(),ue(i.dataset.role)})}),(e=document.querySelector("[data-reset-demo]"))==null||e.addEventListener("click",()=>{Ft(),t.currentUser=S.id,ue(S.landing)}),(s=document.querySelector("[data-sign-out]"))==null||s.addEventListener("click",Ht),(a=document.querySelector("#global-search"))==null||a.addEventListener("input",i=>{t.searchTerm=i.target.value,p()}),(n=document.querySelector("[data-clear-search]"))==null||n.addEventListener("click",()=>{t.searchTerm="",p()}),document.querySelectorAll("[data-open-role]").forEach(i=>{i.addEventListener("click",()=>{var c;t.searchTerm="",X(i.dataset.openRole,`${((c=ae.find(l=>l.id===i.dataset.openRole))==null?void 0:c.label)||"Workspace"} opened.`)})}),(r=document.querySelector("[data-start-tour]"))==null||r.addEventListener("click",()=>{t.tourOpen=!0,t.tourStep=0,X(B[0].role,"Walkthrough started.")}),(d=document.querySelector("[data-tour-next]"))==null||d.addEventListener("click",()=>{if(t.tourStep>=B.length-1){t.tourOpen=!1,v("Walkthrough complete.");return}t.tourStep+=1,X(B[t.tourStep].role)}),(f=document.querySelector("[data-tour-prev]"))==null||f.addEventListener("click",()=>{t.tourStep!==0&&(t.tourStep-=1,X(B[t.tourStep].role))}),document.querySelectorAll("[data-action]").forEach(i=>{i.addEventListener("click",()=>v(i.dataset.action))}),(h=document.querySelector("[data-dismiss-toast]"))==null||h.addEventListener("click",()=>{t.toast="",p()}),(I=document.querySelector("[data-toggle-notifications]"))==null||I.addEventListener("click",()=>{t.notificationsOpen=!t.notificationsOpen,t.settingsOpen=!1,p()}),(ve=document.querySelector("[data-toggle-settings]"))==null||ve.addEventListener("click",()=>{t.settingsOpen=!t.settingsOpen,t.notificationsOpen=!1,p()}),document.querySelectorAll("[data-close-panel]").forEach(i=>{i.addEventListener("click",()=>{t.notificationsOpen=!1,t.settingsOpen=!1,p()})}),(fe=document.querySelector("[data-mark-notifications]"))==null||fe.addEventListener("click",()=>{E.forEach(i=>{i.read=!0}),v("All notifications marked read.")}),document.querySelectorAll("[data-dismiss-notification]").forEach(i=>{i.addEventListener("click",()=>{const c=E.findIndex(l=>l.id===i.dataset.dismissNotification);c>=0&&E.splice(c,1),p()})}),document.querySelectorAll("[data-simulate-live]").forEach(i=>{i.addEventListener("click",()=>wa("manual"))}),(ne=document.querySelector("[data-toggle-live]"))==null||ne.addEventListener("change",i=>{t.liveUpdates=i.target.checked,v(t.liveUpdates?"Realtime updates enabled.":"Realtime updates paused.")}),(ie=document.querySelector("#auth-provider"))==null||ie.addEventListener("change",i=>{t.authProvider=i.target.value,y(`Updated auth provider to ${t.authProvider}`),v(`${t.authProvider} selected.`)}),(be=document.querySelector("#backend-provider"))==null||be.addEventListener("change",i=>{t.backendProvider=i.target.value,y(`Updated backend provider to ${t.backendProvider}`),v(`${t.backendProvider} selected as backend provider.`)}),document.querySelectorAll("[data-set-gateway]").forEach(i=>{i.addEventListener("click",()=>{t.gatewayMode=i.dataset.setGateway,C("Production","Gateway mode updated",`Launch gateway is now ${t.gatewayMode}.`),v(t.gatewayMode==="backend"?"Backend-ready mode enabled.":"Demo mode enabled.")})}),(oe=document.querySelector("[data-provision-schema]"))==null||oe.addEventListener("click",()=>{Q.forEach(i=>{i.status="Ready"}),C("Database","Mock schema provisioned",`${Q.length} production tables marked ready.`),y("Provisioned mock production schema"),v("Database blueprint marked ready.")}),document.querySelectorAll("[data-onboarding-task]").forEach(i=>{i.addEventListener("change",()=>{const c=U.find(l=>l.id===i.dataset.onboardingTask);c&&(c.done=i.checked,y(`${c.done?"Completed":"Reopened"} onboarding task: ${c.label}`),v("Onboarding checklist updated."))})}),(Ne=document.querySelector("#onboarding-user-form"))==null||Ne.addEventListener("submit",i=>{i.preventDefault();const c=document.querySelector("#onboarding-user-name").value.trim(),l=document.querySelector("#onboarding-user-role").value;if(!c)return;const g=l==="Admin"?"school-admin":l.toLowerCase();M.push({id:`${l.toLowerCase()}-${Date.now()}`,label:c,role:l,landing:g,permissions:l==="Admin"?["manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]:l==="Teacher"?["lms","teacher-tools","message","submit-post"]:l==="Parent"?["message","submit-post"]:["student-missions"]}),H("Action",`${c} invited`,b().name,"Onboarding"),y(`Invited ${l}: ${c}`),v(`${c} invited as ${l}.`)}),(qe=document.querySelector("#production-file-upload"))==null||qe.addEventListener("change",async i=>{var l;const c=Array.from(i.target.files||[]);for(const g of c)if(t.apiMode==="live-api")try{const F=await xt(g,t.role==="community"?"Community":"LMS");x.unshift(F.file)}catch{x.unshift({id:`upload-${Date.now()}-${Math.random().toString(16).slice(2)}`,name:g.name,area:t.role==="community"?"Community":"LMS",size:`${Math.max(1,Math.round(g.size/1024))} KB`,status:"Server upload failed; metadata stored locally"})}else x.unshift({id:`upload-${Date.now()}-${Math.random().toString(16).slice(2)}`,name:g.name,area:t.role==="community"?"Community":"LMS",size:`${Math.max(1,Math.round(g.size/1024))} KB`,status:"Stored in demo metadata; ready for cloud storage"});C("Files","Upload metadata captured",`${((l=i.target.files)==null?void 0:l.length)||0} file(s) added to production upload queue.`),y("Added production upload metadata"),v("File upload metadata added.")}),(xe=document.querySelector("[data-send-delivery-test]"))==null||xe.addEventListener("click",async()=>{if(t.apiMode==="live-api")try{(await Rt("Launch test group")).records.forEach(c=>_.unshift(c))}catch{["Email","SMS","Push"].forEach(i=>{_.unshift({id:`delivery-${Date.now()}-${i}`,channel:i,audience:"Launch test group",status:"Failed over locally",detail:`${i} test could not reach operational API`})})}else["Email","SMS","Push"].forEach(i=>{_.unshift({id:`delivery-${Date.now()}-${i}`,channel:i,audience:"Launch test group",status:"Delivered",detail:`${i} test generated from Launch Control`})});H("FYI","Notification delivery test completed",b().name,"Launch Control"),y("Sent notification delivery test batch"),v("Notification delivery test completed.")}),document.querySelectorAll("[data-security-check]").forEach(i=>{i.addEventListener("change",()=>{const c=z.find(l=>l.id===i.dataset.securityCheck);c&&(c.done=i.checked,c.status=c.done?"Configured":"Needs review",y(`Updated security checklist: ${c.label}`),v("Security checklist updated."))})}),document.querySelectorAll("[data-toggle-setting]").forEach(i=>{i.addEventListener("change",()=>{t[i.dataset.toggleSetting]=i.checked,p()})}),(Re=document.querySelector("[data-export-demo]"))==null||Re.addEventListener("click",async()=>{const i=JSON.stringify($a(),null,2),c=new Blob([i],{type:"application/json"}),l=URL.createObjectURL(c),g=document.createElement("a");g.href=l,g.download="educonnect-demo-state.json",g.click(),URL.revokeObjectURL(l),y("Exported demo state JSON");try{await navigator.clipboard.writeText(i),v("Demo state exported and copied to clipboard.")}catch{v("Demo state exported as a JSON file.")}}),(je=document.querySelector("#import-demo-state"))==null||je.addEventListener("change",async i=>{var l;const c=(l=i.target.files)==null?void 0:l[0];if(c)try{const g=JSON.parse(await c.text()),F=Ut(g);if(F.length){v(`Import failed: ${F.join(" ")}`);return}Le(g),y("Imported demo state JSON"),v("Demo state imported.")}catch{v("That JSON file could not be imported.")}}),(Ie=document.querySelector("[data-add-school]"))==null||Ie.addEventListener("click",vs),(Fe=document.querySelector("[data-create-assignment]"))==null||Fe.addEventListener("click",fs),(Ge=document.querySelector("#assignment-form"))==null||Ge.addEventListener("submit",i=>{i.preventDefault();const c=document.querySelector("#assignment-title").value.trim();if(!c)return;const l=document.querySelector("#assignment-class").value;Ma({title:c,className:l,type:document.querySelector("#assignment-type").value,lockDate:document.querySelector("#assignment-lock").value.trim()}),v(`${c} added to ${l}.`)}),(Be=document.querySelector("[data-continue-adventure]"))==null||Be.addEventListener("click",bs),(He=document.querySelector("[data-refresh-activity]"))==null||He.addEventListener("click",ys),document.querySelectorAll("[data-reply-student]").forEach(i=>{i.addEventListener("click",()=>$s(i.dataset.replyStudent))}),document.querySelectorAll("[data-guardrail]").forEach(i=>{i.addEventListener("change",()=>{t.guardrails[i.dataset.guardrail]=i.checked,y(`Updated guardrail ${i.dataset.guardrail}`),v("Guardrail setting updated.")})}),document.querySelectorAll("[data-profile-permission]").forEach(i=>{i.addEventListener("change",()=>{const[c,l]=i.dataset.profilePermission.split(":"),g=M.find(F=>F.id===c);g&&(g.permissions=i.checked?[...new Set([...g.permissions,l])]:g.permissions.filter(F=>F!==l),y(`Updated ${g.role} permission: ${l}`),v(`${g.role} permissions updated.`))})}),document.querySelectorAll("[data-submission]").forEach(i=>{i.addEventListener("click",()=>{t.selectedSubmissionId=i.dataset.submission,p()})}),document.querySelectorAll("[data-save-submission]").forEach(i=>{i.addEventListener("click",()=>{const c=P.find(l=>l.id===i.dataset.saveSubmission);c&&(c.comment=document.querySelector("#submission-comment").value.trim(),c.status="Reviewed",y(`Saved gradebook comment for ${c.student}`,c.assignment),v("Gradebook comment saved."))})}),document.querySelectorAll("[data-complete]").forEach(i=>{i.addEventListener("click",()=>{const c=Number(i.dataset.complete);t.completed.includes(c)||t.completed.push(c);const l=ke.find(g=>g.id===c);v(`${(l==null?void 0:l.title)||"Mission"} marked complete.`)})}),(Ue=document.querySelector("#class-filter"))==null||Ue.addEventListener("change",i=>{t.selectedClass=i.target.value,p()}),(_e=document.querySelector("#roster-filter"))==null||_e.addEventListener("change",i=>{t.rosterFilter=i.target.value,p()}),document.querySelectorAll("[data-roster-grade], [data-roster-attendance], [data-roster-status]").forEach(i=>{i.addEventListener("change",()=>{const c=i.dataset.rosterGrade||i.dataset.rosterAttendance||i.dataset.rosterStatus,l=A.find(g=>g.id===c);l&&(i.dataset.rosterGrade&&(l.grade=Math.max(0,Math.min(100,Number(i.value)||0))),i.dataset.rosterAttendance&&(l.attendance=Math.max(0,Math.min(100,Number(i.value)||0))),i.dataset.rosterStatus&&(l.status=i.value),C("Roster",`${l.student} record updated`,`Grade ${l.grade}%, attendance ${l.attendance}%, status ${l.status}.`),y(`Updated roster record for ${l.student}`,l.className),v(`${l.student}'s roster record updated.`))})}),document.querySelectorAll("[data-lms-account]").forEach(i=>{i.addEventListener("click",()=>{t.activeAccount=i.dataset.lmsAccount,p()})}),(ze=document.querySelector("[data-build-offline]"))==null||ze.addEventListener("click",()=>{t.offlinePackReady=!0,te.forEach(i=>{i.status=i.status.replace("Waiting for pack","Queued for upload")}),v("Offline pack built and sync queue prepared.")}),(We=document.querySelector("#state-filter"))==null||We.addEventListener("change",i=>{t.selectedState=i.target.value;const c=ge();t.selectedDistrict=c.districts[0].id,t.selectedSchool=c.districts[0].schools[0].id,p()}),(Ve=document.querySelector("#district-filter"))==null||Ve.addEventListener("change",i=>{t.selectedDistrict=i.target.value,t.selectedSchool=Z().schools[0].id,p()}),(Ye=document.querySelector("#school-filter"))==null||Ye.addEventListener("change",i=>{t.selectedSchool=i.target.value,p()}),(Je=document.querySelector("#design-form"))==null||Je.addEventListener("change",()=>{da(),p()}),(Ke=document.querySelector("#design-form"))==null||Ke.addEventListener("submit",i=>{i.preventDefault(),da(),p()}),document.querySelectorAll("[data-design-preset]").forEach(i=>{i.addEventListener("click",()=>{const c=b(),l=Mt.find(g=>g.name===i.dataset.designPreset);l&&(N[c.id]={...De(),...l},p())})}),document.querySelectorAll("[data-manage-district]").forEach(i=>{i.addEventListener("click",()=>{t.selectedDistrict=i.dataset.manageDistrict,t.selectedSchool=Z().schools[0].id,p()})}),document.querySelectorAll("[data-manage-school]").forEach(i=>{i.addEventListener("click",()=>{t.selectedSchool=i.dataset.manageSchool,p()})}),document.querySelectorAll("[data-deadline]").forEach(i=>{i.addEventListener("change",()=>{const c=i.dataset.deadline;t.checkedDeadlines=t.checkedDeadlines.includes(c)?t.checkedDeadlines.filter(l=>l!==c):[...t.checkedDeadlines,c],p()})}),document.querySelectorAll("[data-filter]").forEach(i=>{i.addEventListener("click",()=>{t.conversationFilter=i.dataset.filter;const c=w.find(l=>l.type===t.conversationFilter);c&&(t.activeConversationId=c.id),p()})}),document.querySelectorAll("[data-conversation]").forEach(i=>{i.addEventListener("click",()=>{t.activeConversationId=i.dataset.conversation;const c=w.find(l=>l.id===t.activeConversationId);c&&(c.unread=0),p()})}),(Qe=document.querySelector("#message-draft"))==null||Qe.addEventListener("input",i=>{t.draft=i.target.value}),(Ze=document.querySelector("[data-toggle-hours]"))==null||Ze.addEventListener("click",()=>{t.workHoursOpen=!t.workHoursOpen,p()}),(Xe=document.querySelector("[data-toggle-emergency]"))==null||Xe.addEventListener("click",()=>{t.emergencyOverride=!t.emergencyOverride,y(`${t.emergencyOverride?"Enabled":"Disabled"} emergency override`),p()}),document.querySelectorAll("[data-start-call]").forEach(i=>{i.addEventListener("click",()=>{const c=w.find(l=>l.id===i.dataset.startCall);c&&(t.activeCallName=c.name,C("Messages",`Live call started with ${c.name}`,"Video room is active in the communication hub."),y(`Started video call with ${c.name}`,b().name),v(`Video call started with ${c.name}.`))})}),(ea=document.querySelector("[data-end-call]"))==null||ea.addEventListener("click",()=>{const i=t.activeCallName;t.activeCallName="",i&&C("Messages",`Live call ended with ${i}`,"Call state closed."),v("Video call ended.")}),(aa=document.querySelector("#compose"))==null||aa.addEventListener("submit",i=>{if(i.preventDefault(),!t.workHoursOpen&&!t.emergencyOverride)return;const c=t.draft.trim();c&&(w.splice(0,w.length,...w.map(l=>l.id===t.activeConversationId?{...l,preview:c,messages:[...l.messages,{from:"me",text:c,time:"Now"}]}:l)),C("Messages","Message sent",`Delivered to ${W().label}'s active conversation.`),H("FYI","Message delivered",b().name,"Messages"),t.draft="",p())}),(ta=document.querySelector("#board-form"))==null||ta.addEventListener("submit",i=>{i.preventDefault();const c=b();D().pending.unshift({id:`${c.id}-${Date.now()}`,author:document.querySelector("#board-author").value.trim()||"Community Member",role:document.querySelector("#board-role").value,type:document.querySelector("#board-type").value,audience:document.querySelector("#board-audience").value,title:document.querySelector("#board-title").value.trim(),body:document.querySelector("#board-body").value.trim(),media:document.querySelector("#board-media").value.trim()||"No media",approverId:document.querySelector("#board-approver").value,time:"Awaiting administrator approval"}),C("Community","Community post submitted",`${document.querySelector("#board-title").value.trim()} is waiting for approval.`),H("Action","Community post awaiting approval",c.name,"Approval queue"),y("Submitted community post for approval",c.name),v("Post submitted for administrator approval.")}),document.querySelectorAll("[data-approver-toggle]").forEach(i=>{i.addEventListener("change",()=>{const c=D();c.approvers=c.approvers.map(l=>l.id===i.dataset.approverToggle?{...l,active:i.checked}:l),p()})}),(sa=document.querySelector("#approver-form"))==null||sa.addEventListener("submit",i=>{i.preventDefault();const c=D(),l=document.querySelector("#new-approver-name").value.trim();l&&(c.approvers.push({id:`${l.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${Date.now()}`,name:l,title:document.querySelector("#new-approver-title").value,active:!0}),p())}),document.querySelectorAll("[data-approve-post]").forEach(i=>{i.addEventListener("click",()=>{const c=D(),l=c.pending.find(g=>g.id===i.dataset.approvePost);l&&(c.pending=c.pending.filter(g=>g.id!==l.id),c.published.unshift({...l,time:"Approved just now"}),y(`Approved community post: ${l.title}`),p())})}),document.querySelectorAll("[data-reject-post]").forEach(i=>{i.addEventListener("click",()=>{const c=D(),l=c.pending.find(g=>g.id===i.dataset.rejectPost);c.pending=c.pending.filter(g=>g.id!==i.dataset.rejectPost),l&&y(`Rejected community post: ${l.title}`),p()})})}async function ks(){if(jt(),de()&&(t.apiMode="live-api",localStorage.getItem("educonnect-session-token")))try{const e=await qt();S={...M.find(a=>a.id===e.user.id),...e.user},t.currentUser=S.id}catch{localStorage.removeItem("educonnect-session-token")}if(S&&(t.apiMode==="mock-api"||t.apiMode==="live-api"))try{await Sa(t.apiMode)}catch{de()||(t.apiMode="local",t.toast="Server API unavailable. Local demo state mode enabled.")}if(S){const e=la();t.role=e&&ee().includes(e)?e:S.landing}window.addEventListener("hashchange",()=>{if(!S)return;const e=la();e&&e!==t.role&&ue(e,!1)}),window.addEventListener("load",Pe),p(),window.setInterval(()=>{!S||!t.liveUpdates||document.hidden||wa("automatic")},15e3)}ks();
