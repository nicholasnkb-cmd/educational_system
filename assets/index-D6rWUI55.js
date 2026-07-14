(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const g of c.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&i(g)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}})();/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=(e,t,s=[])=>{const i=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(o=>{i.setAttribute(o,String(t[o]))}),s.length&&s.forEach(o=>{const c=yt(...o);i.appendChild(c)}),i};var It=([e,t,s])=>yt(e,t,s);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=e=>Array.from(e.attributes).reduce((t,s)=>(t[s.name]=s.value,t),{}),Bt=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",Gt=e=>e.flatMap(Bt).map(s=>s.trim()).filter(Boolean).filter((s,i,o)=>o.indexOf(s)===i).join(" "),Ht=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,s,i)=>s.toUpperCase()+i.toLowerCase()),ut=(e,{nameAttr:t,icons:s,attrs:i})=>{var pe;const o=e.getAttribute(t);if(o==null)return;const c=Ht(o),g=s[c];if(!g)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const u=zt(e),[C,w,R]=g,N={...w,"data-lucide":o,...i,...u},q=Gt(["lucide",`lucide-${o}`,u,i]);q&&Object.assign(N,{class:q});const Q=It([C,N,R]);return(pe=e.parentNode)==null?void 0:pe.replaceChild(Q,e)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=["svg",v,[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=["svg",v,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=["svg",v,[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=["svg",v,[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=["svg",v,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=["svg",v,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=["svg",v,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=["svg",v,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=["svg",v,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=["svg",v,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=["svg",v,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=["svg",v,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=["svg",v,[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=["svg",v,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=["svg",v,[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=["svg",v,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=["svg",v,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=["svg",v,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=["svg",v,[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=["svg",v,[["path",{d:"m3 11 18-5v12L3 14v-3z"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=["svg",v,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=["svg",v,[["path",{d:"M13.234 20.252 21 12.3"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=["svg",v,[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=["svg",v,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=["svg",v,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=["svg",v,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=["svg",v,[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=["svg",v,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=["svg",v,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=["svg",v,[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=["svg",v,[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=["svg",v,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=["svg",v,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=["svg",v,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=["svg",v,[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=["svg",v,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=["svg",v,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=["svg",v,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=["svg",v,[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=["svg",v,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=({icons:e={},nameAttr:t="data-lucide",attrs:s={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const i=document.querySelectorAll(`[${t}]`);if(Array.from(i).forEach(o=>ut(o,{nameAttr:t,icons:e,attrs:s})),t==="data-lucide"){const o=document.querySelectorAll("[icon-name]");o.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(o).forEach(c=>ut(c,{nameAttr:"icon-name",icons:e,attrs:s})))}},se=[{id:"state-admin",label:"State Admin",icon:"map",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"district-admin",label:"District Admin",icon:"building-2",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"school-admin",label:"School Admin",icon:"shield-check",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"lms",label:"LMS",icon:"layers",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"student",label:"Student",icon:"sparkles",image:"/stitch_educonnect_interactive_portal/student_portal_1/screen.png"},{id:"teacher",label:"Teacher",icon:"graduation-cap",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"parent",label:"Parent",icon:"users",image:"/stitch_educonnect_interactive_portal/parent_dashboard/screen.png"},{id:"messages",label:"Messages",icon:"message-circle",image:"/stitch_educonnect_interactive_portal/communication_hub/screen.png"},{id:"community",label:"Community",icon:"megaphone",image:"/stitch_educonnect_interactive_portal/communication_hub/screen.png"}],a={role:"state-admin",selectedState:"ny",selectedDistrict:"nyc-doe",selectedSchool:"ps-118",completed:[],selectedClass:"All",checkedDeadlines:["Science: Water Cycle Model"],conversationFilter:"Parents",activeConversationId:"sarah",draft:"",boardAudience:"All families",activeAccount:"teacher-school",selectedSubmissionId:"sub-1",rosterFilter:"All",liveUpdates:!0,realtimeTick:0,activeCallName:"",gatewayMode:"demo",backendProvider:"Supabase",authProvider:"Role-based demo auth",offlinePackReady:!1,workHoursOpen:!0,emergencyOverride:!1,currentUser:"state-admin",apiMode:"local",tourOpen:!1,tourStep:0,searchTerm:"",notificationsOpen:!1,settingsOpen:!1,toast:"",compactMode:!1,highContrast:!1,guardrails:{lockSubmissions:!0,hideAnswers:!0,parentSummaries:!0},lessonBuilderOpen:!1,lessonDraft:null,lessonFilter:"All",lessonPreviewId:"",activeStudentLessonId:"lesson-moon-phases",lessonProgress:{}},x=[{id:"global-admin",label:"Global Test Admin",role:"Global Admin",landing:"state-admin",scope:"state",stateId:"ny",permissions:["global-access","manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance","submit-post","student-missions"]},{id:"state-admin",label:"NYS State Admin",role:"State Admin",landing:"state-admin",scope:"state",stateId:"ny",permissions:["manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]},{id:"district-admin",label:"District Admin",role:"District Admin",landing:"district-admin",scope:"district",stateId:"ny",districtId:"nyc-doe",permissions:["manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]},{id:"school-admin",label:"School Admin",role:"School Admin",landing:"school-admin",scope:"school",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",permissions:["approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]},{id:"teacher",label:"Demo Teacher",role:"Teacher",landing:"teacher",scope:"school",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",permissions:["lms","teacher-tools","message","submit-post"]},{id:"student",label:"Demo Learner",role:"Student",landing:"student",scope:"student",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",studentId:"learner-1",permissions:["student-missions"]},{id:"parent",label:"Demo Guardian",role:"Parent",landing:"parent",scope:"guardian",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",studentIds:["learner-1"],permissions:["message","submit-post"]}],qa=[["global-access","Access every test workspace"],["manage-tenants","Manage tenants"],["manage-users","Manage users"],["view-compliance","View compliance"],["approve-posts","Approve posts"],["emergency","Emergency override"],["lms","Manage LMS"],["teacher-tools","Teacher tools"],["message","Messaging"],["submit-post","Submit posts"],["student-missions","Student missions"]],Me=[{id:1,subject:"Science",title:"Space Explorers: The Moon",due:"Due tomorrow",action:"Start Mission",progress:78,accent:"teal",icon:"rocket"},{id:2,subject:"Math",title:"Number Quest: Addition",due:"Due in 2 days",action:"Play Now",progress:44,accent:"blue",icon:"star"},{id:3,subject:"Reading",title:"The Whale and the Star",due:"Keep reading",action:"Continue",progress:56,accent:"gold",icon:"book-open"}],ne=[{id:"ny",name:"New York",agency:"NYS Education Department (NYSED)",districts:[{id:"nyc-doe",name:"New York City Public Schools",region:"New York City",superintendent:"NYC Chancellor",schools:[{id:"ps-118",name:"P.S. 118 Discovery Academy",category:"Public",students:684,staff:78,status:"Active",subdomain:"ps118",plan:"District Core",modules:["SIS","LMS","Messaging","Family Portal"],storage:64,uptime:"99.98%",theme:"Discovery Blue",isolation:"Dedicated tenant database",avgGrade:"88.4%",attendance:"94.2%",messages:"3 pending",studentPoints:1240,studentName:"Demo Learner",guardianName:"Demo Guardian",learnerName:"Demo Learner",workHours:"Mon-Fri, 8:00 AM-4:30 PM",afterHours:"Messages are held until the next work day"},{id:"bronx-charter",name:"Bronx Learning Charter",category:"Chartered",students:412,staff:49,status:"Onboarding",subdomain:"bronxlearning",plan:"Charter Launch",modules:["SIS","Messaging","Enrollment"],storage:31,uptime:"99.91%",theme:"Charter Gold",isolation:"Dedicated tenant database",avgGrade:"86.1%",attendance:"92.7%",messages:"8 pending",studentPoints:890,studentName:"Explorer",guardianName:"Monica",learnerName:"Ari",workHours:"Mon-Fri, 7:45 AM-4:00 PM",afterHours:"Messages are held until staff office hours reopen"}]},{id:"albany-csd",name:"Albany City School District",region:"Capital Region",superintendent:"District Superintendent",schools:[{id:"albany-prep",name:"Albany Preparatory School",category:"Private",students:325,staff:44,status:"Active",subdomain:"albanyprep",plan:"Private Plus",modules:["LMS","Messaging","Tuition","Family Portal"],storage:46,uptime:"99.95%",theme:"Prep Teal",isolation:"Dedicated tenant database",avgGrade:"91.8%",attendance:"96.4%",messages:"1 pending",studentPoints:1565,studentName:"Scholar",guardianName:"Priya",learnerName:"Noah",workHours:"Mon-Fri, 8:30 AM-5:00 PM",afterHours:"Messages wait for the next administrator-approved window"},{id:"eagle-point",name:"Eagle Point Elementary",category:"Public",students:538,staff:61,status:"Active",subdomain:"eaglepoint",plan:"District Core",modules:["SIS","LMS","Messaging"],storage:52,uptime:"99.97%",theme:"Eagle Green",isolation:"Dedicated tenant database",avgGrade:"87.2%",attendance:"95.1%",messages:"4 pending",studentPoints:1120,studentName:"Navigator",guardianName:"Sarah",learnerName:"Mia",workHours:"Mon-Fri, 8:00 AM-4:00 PM",afterHours:"Messages are queued until office hours"}]}]},{id:"ca",name:"California",agency:"California Department of Education",districts:[{id:"la-usd",name:"Los Angeles Unified School District",region:"Los Angeles County",superintendent:"District Superintendent",schools:[{id:"pacific-stem",name:"Pacific STEM Charter",category:"Chartered",students:496,staff:52,status:"Active",subdomain:"pacificstem",plan:"STEM Charter",modules:["SIS","LMS","Messaging","Lab Scheduler"],storage:58,uptime:"99.94%",theme:"Pacific Blue",isolation:"Dedicated tenant database",avgGrade:"90.3%",attendance:"93.8%",messages:"6 pending",studentPoints:1325,studentName:"Innovator",guardianName:"Elena",learnerName:"Kai",workHours:"Mon-Fri, 8:00 AM-4:30 PM",afterHours:"Messages are held until staff work hours"}]}]}],Ta=[["State Governance",["Board of Regents","Commissioner of Education","NYS Education Department (NYSED)"]],["District & Regional Governance",["BOCES District Superintendents","Local Board of Education (BOE)","District Superintendent / NYC Chancellor","Assistant / Deputy Superintendents","District Directors / Coordinators"]],["School Building Administration",["Principal","Assistant Principal","Dean of Students / Department Chairs"]],["Classroom Faculty",["Tenured Teachers","Probationary Teachers","Substitutes / Leave Replacements"]],["Instructional & Specialized Support",["Specialized Clinicians","Teaching Assistants","Teacher Aides / Paraprofessionals"]],["Operational Support",["Secretaries / Clerical Staff","Custodial / Maintenance Staff","Food Service / Security / Transportation"]],["Student Leadership & Student Body",["Student Board of Education Representative","Student Council President / Officers","Class Officers","Club Presidents / Team Captains","General Student Body"]]],I=[{name:"English Literature",room:"Period 2, Room 304",grade:89,attendance:96,pending:12},{name:"Creative Writing",room:"Period 4, Room 201",grade:92,attendance:97,pending:1},{name:"Basic English",room:"Period 6, Room 118",grade:84,attendance:91,pending:5}],E=[{id:"stu-1",student:"Demo Learner 1",guardian:"Demo Guardian 1",teacher:"Demo Teacher",className:"English Literature",grade:91,attendance:98,accommodations:"Visual vocabulary cards",status:"Active"},{id:"stu-2",student:"Demo Learner 2",guardian:"Demo Guardian 2",teacher:"Demo Teacher",className:"Creative Writing",grade:88,attendance:94,accommodations:"Extended quiz time",status:"Active"},{id:"stu-3",student:"Demo Learner 3",guardian:"Demo Guardian 3",teacher:"Demo Teacher",className:"English Literature",grade:82,attendance:91,accommodations:"Reading support",status:"Watch"},{id:"stu-4",student:"Demo Learner 4",guardian:"Demo Guardian 4",teacher:"Demo Teacher",className:"Creative Writing",grade:96,attendance:99,accommodations:"None",status:"Active"}],D=[{id:"sub-1",student:"Demo Learner 1",assignment:"Fractions Mastery Check",status:"Submitted",score:88,rubric:[["Concepts",4],["Accuracy",3],["Explanation",4],["Neatness",3]],comment:"Strong reasoning. Recheck mixed-number conversions."},{id:"sub-2",student:"Demo Learner 2",assignment:"Great Depression Essay",status:"Needs review",score:74,rubric:[["Thesis",3],["Evidence",3],["Organization",2],["Conventions",4]],comment:"Good evidence. Add a clearer argument in the introduction."},{id:"sub-3",student:"Demo Learner 3",assignment:"Grammar Quiz - Week 5",status:"Missing",score:0,rubric:[["Completion",0],["Accuracy",0],["Timeliness",0]],comment:"Family reminder queued."}],J=[["Demo Learner 3","finished reading The Great Gatsby","15 minutes ago","Lit 101"],["Demo Learner 4","submitted Grammar Quiz - Week 5","42 minutes ago","Creative Writing"],["Marcus Thorne","posted in the discussion board","2 hours ago","Shakespeare"]],De=[{title:"History: Great Depression Essay",meta:"Due tomorrow, 11:59 PM",urgent:!0},{title:"Science: Water Cycle Model",meta:"Due Thursday",urgent:!1},{title:"Math: Quadratic Equations Quiz",meta:"Due Sunday",urgent:!1}],O=[{id:"fractions",title:"Fractions Mastery Check",type:"Automated quiz",rubric:"4-domain rubric",analytics:82,lockDate:"Oct 24, 8:00 PM",exception:"Maya R. +24h"},{id:"essay",title:"Great Depression Essay",type:"Writing task",rubric:"Argument + evidence rubric",analytics:74,lockDate:"Oct 28, 11:59 PM",exception:"None"}],A=[{id:"lesson-moon-phases",title:"Moon Phases Explorer",subject:"Science",className:"English Literature",summary:"Explore why the Moon appears to change shape and check your understanding.",status:"Published",visibility:"Students and families",dueDate:"2026-10-24",estimatedMinutes:35,points:20,allowLate:!0,requireOrder:!0,updatedAt:"Today",blocks:[{id:"moon-intro",type:"text",title:"Look up at the Moon",body:"The Moon does not make its own light. As it travels around Earth, sunlight illuminates different portions that we can see."},{id:"moon-video",type:"media",mediaType:"Video",title:"Moon phases video",url:"https://www.youtube.com/watch?v=3f_21N3wcX8",caption:"Watch the short overview, then continue to the knowledge check."},{id:"moon-quiz",type:"quiz",title:"Knowledge check",question:"What causes the phases of the Moon?",questionType:"Multiple choice",options:["Earth's shadow always covers the Moon","We see different sunlit portions as the Moon orbits Earth","Clouds change the Moon's shape","The Moon produces different amounts of light"],correctAnswer:1,feedback:"The Moon's orbit changes how much of its sunlit half is visible from Earth.",points:10,required:!0}]},{id:"lesson-story-elements",title:"Building a Strong Story",subject:"English Language Arts",className:"Creative Writing",summary:"Use character, setting, conflict, and resolution to plan an original story.",status:"Draft",visibility:"Teacher only",dueDate:"2026-10-28",estimatedMinutes:45,points:25,allowLate:!1,requireOrder:!1,updatedAt:"Yesterday",blocks:[{id:"story-intro",type:"text",title:"Four story building blocks",body:"A memorable story gives readers a character to care about, a setting they can picture, a conflict that creates tension, and a resolution that shows change."},{id:"story-link",type:"media",mediaType:"Link",title:"Story planner",url:"https://www.readwritethink.org/",caption:"Open the planning resource for additional examples."}]}],be=[{name:"Water Cycle Worksheet.docx",status:"Converted to editable lesson copy",type:"Word"},{name:"Moon Lab Packet.pdf",status:"OCR indexed + annotation ready",type:"PDF"},{name:"Parent Signature Form.pdf",status:"Fillable fields detected",type:"PDF"}],Ce=[{id:"teacher-school",name:"Demo Teacher",context:"Teacher at selected school",active:!0},{id:"parent-school",name:"Demo Guardian",context:"Parent profile",active:!1},{id:"district-admin",name:"District Admin",context:"District-wide oversight",active:!1}],j=[{id:"notice-lock-window",level:"Urgent",title:"Locked submission window closes tonight",target:"Grade 4 Math",channel:"Dashboard + SMS",read:!1},{id:"notice-rubrics",level:"Action",title:"3 rubric scores need review",target:"English Literature",channel:"Teacher inbox",read:!1},{id:"notice-family-comment",level:"FYI",title:"New family comment on community board",target:"All families",channel:"Digest",read:!1}],H=[{id:"live-1",type:"Roster",title:"Demo Learner 1 attendance synced",detail:"SIS updated attendance to 98%.",time:"Live now"},{id:"live-2",type:"LMS",title:"Rubric queue refreshed",detail:"3 submissions are ready for review.",time:"Live now"},{id:"live-3",type:"Messages",title:"Parent digest prepared",detail:"Routine updates will send during the next work window.",time:"Live now"}],pt=[{app:"Docs",action:"Distribute editable templates instantly",status:"Connected"},{app:"Drive",action:"Attach, collect, and archive class files",status:"Connected"},{app:"Forms",action:"Auto-create quizzes with answer visibility rules",status:"Connected"},{app:"Slides",action:"Share lesson decks as view or copy templates",status:"Connected"}],xa=[["Intuitive Design","Clean teacher and student workflows with minimal training."],["Zero Cost Base","Core classroom, assignments, communication, and family summaries stay free for schools."],["Paperless Workflow","Create, collect, grade, return, and archive digital assignments."],["Centralized Communication","Class announcements, direct messages, and parent summaries in one place."],["Automated Guardrails","Lock edits after submission and hide quiz answers until the assessment ends."]],Y=[{actor:"District Admin",event:"Provisioned school tenant",scope:"NYC DOE",time:"Today 9:12 AM"},{actor:"Principal Rivera",event:"Approved community board post",scope:"P.S. 118",time:"Today 10:44 AM"},{actor:"System",event:"Blocked after-hours parent message",scope:"P.S. 118",time:"Yesterday 6:03 PM"},{actor:"NYSED Reviewer",event:"Viewed compliance dashboard",scope:"New York",time:"Yesterday 2:21 PM"}],Na=[{label:"FERPA Mode",status:"Enabled",detail:"Student records are hidden outside authorized tenant scopes."},{label:"Media Review",status:"Required",detail:"Photos and files stay pending until an assigned approver approves them."},{label:"Data Export",status:"Logged",detail:"Every roster, gradebook, or message export appears in the audit trail."}],Oa=[{label:"FERPA access reviews",value:"12",status:"Due this month",detail:"Confirm staff access for student records."},{label:"Data export logs",value:"4",status:"Reviewed",detail:"Gradebook and roster exports are audit logged."},{label:"Media approvals",value:"1",status:"Pending",detail:"Photo content waiting for administrator approval."},{label:"After-hours blocks",value:"7",status:"Protected",detail:"Messages held outside school communication windows."}],$t=[{title:"Superintendent Hearing Window",audience:"District",date:"Oct 21",type:"Compliance"},{title:"Science Night",audience:"P.S. 118 families",date:"Oct 23",type:"Community"},{title:"Fractions Mastery Lock Date",audience:"Grade 4 Math",date:"Oct 24",type:"LMS"},{title:"Parent Conference Block",audience:"Teachers + guardians",date:"Oct 27",type:"Messaging"}],de=[{item:"Fractions quiz attempt",owner:"Leo",status:"Queued for upload"},{item:"PDF annotation packet",owner:"Maya",status:"Conflict check ready"},{item:"Teacher rubric draft",owner:"Demo Teacher",status:"Saved offline"}],Ra=[["Default route","Parent and teacher posts go to the first active school approver."],["Media route","Photos, videos, and files require Principal or Assistant Principal approval."],["Sensitive route","Discipline, health, or student-identifying content is held for administrator review."],["Publishing rule","Approved posts publish only inside the selected school tenant."]],ja=[{title:"One-tap teacher message",detail:"Disabled automatically outside school work hours."},{title:"Digest-first notifications",detail:"Urgent alerts separate from routine activity noise."},{title:"Offline packet pickup",detail:"Assignments and forms can be downloaded before Wi-Fi drops."}],U={"ps-118":{logo:"D",crest:"Discovery Owls",primary:"#0050cb",accent:"#006b5f",highlight:"#735c00",background:"#f8f9ff",voice:"Bright, curious, elementary STEM"},"bronx-charter":{logo:"B",crest:"Bronx Torch",primary:"#6d3f00",accent:"#005b96",highlight:"#996b00",background:"#fff9ef",voice:"Confident, college-bound, community first"},"albany-prep":{logo:"A",crest:"Albany Shield",primary:"#005f73",accent:"#7a3e9d",highlight:"#8a5a00",background:"#f3fbfb",voice:"Polished, private school, seminar-ready"},"eagle-point":{logo:"E",crest:"Eagle Point",primary:"#116149",accent:"#004e98",highlight:"#7c5c00",background:"#f4fbf6",voice:"Warm, neighborhood public school"},"pacific-stem":{logo:"P",crest:"Pacific Wave",primary:"#0057a8",accent:"#00756f",highlight:"#7a6100",background:"#f2f8ff",voice:"Modern, STEM lab, project-based"}},Fa=[{name:"Discovery Blue",primary:"#0050cb",accent:"#006b5f",highlight:"#735c00",background:"#f8f9ff"},{name:"Charter Gold",primary:"#6d3f00",accent:"#005b96",highlight:"#996b00",background:"#fff9ef"},{name:"Prep Teal",primary:"#005f73",accent:"#7a3e9d",highlight:"#8a5a00",background:"#f3fbfb"},{name:"Eagle Green",primary:"#116149",accent:"#004e98",highlight:"#7c5c00",background:"#f4fbf6"},{name:"Pacific Blue",primary:"#0057a8",accent:"#00756f",highlight:"#7a6100",background:"#f2f8ff"}],L=[{id:"sarah",name:"Demo Guardian 1",role:"Leo's parent",type:"Parents",unread:0,online:!0,preview:"I'll send the photo of the worksheet now...",messages:[{from:"them",text:"Hi Mr. Anderson! Leo found the fractions section tricky.",time:"13:45"},{from:"me",text:"Thanks for the heads up. I can send a visual practice sheet today.",time:"13:52"},{from:"them",text:"That would help. I'll send the photo of the worksheet now.",time:"14:02"}]},{id:"elena",name:"Demo Guardian 2",role:"Maya's parent",type:"Parents",unread:3,online:!1,preview:"Is the field trip still happening on Friday?",messages:[{from:"them",text:"Is the field trip still happening on Friday?",time:"Tue"},{from:"me",text:"Yes, the permission forms are due by Thursday morning.",time:"Tue"}]},{id:"grade-team",name:"Grade 4 Team",role:"6 teachers",type:"Groups",unread:1,online:!0,preview:"New reading groups are posted.",messages:[{from:"them",text:"New reading groups are posted for next week.",time:"09:18"},{from:"me",text:"Great, I updated my small-group rotation.",time:"09:26"}]}],_={"ps-118":{approvers:[{id:"principal-rivera",name:"Principal Rivera",title:"Principal",active:!0},{id:"ap-kim",name:"Assistant Principal Kim",title:"Assistant Principal",active:!0},{id:"dean-walker",name:"Dean Walker",title:"Dean of Students",active:!1}],published:[{id:"ps-post-1",author:"Ms. Henderson",role:"Teacher",type:"Announcement",audience:"All families",title:"Science Night Volunteers",body:"We need four family volunteers for Thursday's hands-on moon lab.",media:"Flyer PDF",time:"Approved today"},{id:"ps-post-2",author:"Demo Guardian 1",role:"Parent",type:"Resource",audience:"Grade 4",title:"Math Game Practice Link",body:"Sharing a free fractions game that helped a learner practice at home.",media:"Website link",time:"Approved yesterday"}],pending:[{id:"ps-pending-1",author:"Mr. Anderson",role:"Teacher",type:"Photo",audience:"Grade 4",title:"Moon Rock Lab Photos",body:"A photo set from today's science station rotation.",media:"6 images",approverId:"principal-rivera",time:"Awaiting principal approval"}]}},ie=[{name:"users",records:x.length,status:"Mapped",detail:"Role, permission, school, guardian/student links"},{name:"schools",records:5,status:"Mapped",detail:"State, district, tenant URL, modules, branding"},{name:"classes",records:I.length,status:"Mapped",detail:"Teacher, room, attendance, pending work"},{name:"students",records:E.length,status:"Mapped",detail:"Guardian, accommodations, grades, attendance"},{name:"assignments",records:O.length,status:"Mapped",detail:"Type, rubric, lock date, exceptions"},{name:"lessons",records:A.length,status:"Mapped",detail:"Content blocks, media, quizzes, publishing, and learner progress"},{name:"submissions",records:D.length,status:"Mapped",detail:"Rubric scores, comments, review status"},{name:"messages",records:L.length,status:"Mapped",detail:"Parent and group threads with work-hour controls"},{name:"community_posts",records:_["ps-118"].published.length+_["ps-118"].pending.length,status:"Mapped",detail:"Approvals, media, audience, publishing state"},{name:"audit_logs",records:Y.length,status:"Mapped",detail:"Admin actions, exports, compliance events"}],X=[{id:"district",label:"Create district and school tenants",owner:"Admin",done:!0},{id:"staff",label:"Invite staff accounts",owner:"Admin",done:!0},{id:"roster",label:"Import student roster",owner:"Registrar",done:!0},{id:"guardians",label:"Connect parent and guardian accounts",owner:"School office",done:!1},{id:"classes",label:"Assign teachers to classes",owner:"Principal",done:!0},{id:"launch",label:"Send launch notification",owner:"Communications",done:!1}],W=[{id:"upload-1",name:"Moon Lab Packet.pdf",area:"LMS",size:"1.2 MB",status:"Ready for class distribution"},{id:"upload-2",name:"Science Night Flyer.pdf",area:"Community",size:"420 KB",status:"Waiting for approval"}],ee=[{id:"delivery-1",channel:"Email",audience:"Grade 4 families",status:"Queued",detail:"Science Night reminder"},{id:"delivery-2",channel:"SMS",audience:"Emergency contacts",status:"Ready",detail:"Emergency override test"},{id:"delivery-3",channel:"Push",audience:"Teachers",status:"Delivered",detail:"Rubric queue refresh"}],te=[{id:"auth",label:"Role-based authentication rules",status:"Configured",done:!0},{id:"ferpa",label:"FERPA tenant data isolation",status:"Configured",done:!0},{id:"audit",label:"Audit log export policy",status:"Configured",done:!0},{id:"backups",label:"Nightly database backups",status:"Needs backend provider",done:!1},{id:"encryption",label:"Encrypted file storage",status:"Needs storage provider",done:!1},{id:"retention",label:"Data retention schedule",status:"Drafted",done:!1}],fe=[{step:"Build",status:"Passing",detail:"Vite production build generates static assets"},{step:"Tests",status:"Passing",detail:"Playwright local and live smoke tests available"},{step:"FTP deploy",status:"Live",detail:"educationalsystem.fieldserviceit.com is serving the app"},{step:"GitHub sync",status:"Connected",detail:"Backend repository deploys through Hostinger hPanel"}],Ia="educationalsystem.fieldserviceit.com",za="https://api.educationalsystem.fieldserviceit.com";function wt(e,t="",s=""){return e===Ia?za:t||s||""}const mt=new Map;function Ba(){return wt(window.location.hostname,window.__EDUCONNECT_API_BASE__,void 0)}function Ga(e,t={}){var i;const s=e instanceof Error?e:new Error(String(e||"Unknown client error"));return{source:t.source||"frontend",message:s.message.slice(0,1e3),stack:String(s.stack||"").slice(0,6e3),path:`${window.location.pathname}${window.location.hash}`.slice(0,300),release:((i=document.querySelector('meta[name="app-release"]'))==null?void 0:i.content)||"web"}}function we(e,t={}){const s=Ba();if(!s)return;const i=Ga(e,t),o=`${i.source}:${i.message}:${i.path}`,c=Date.now();c-(mt.get(o)||0)<6e4||(mt.set(o,c),fetch(`${s}/api/error-reports`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),keepalive:!0}).catch(()=>{}))}function Ha(){window.addEventListener("error",e=>we(e.error||e.message,{source:"window.error"})),window.addEventListener("unhandledrejection",e=>we(e.reason,{source:"unhandledrejection"}))}const St="educonnect-mock-api-v1";let he=0;function kt(e){return e&&typeof e=="object"&&"data"in e?e.data:e}function At(){return new Promise(e=>setTimeout(e,80))}function Mt(){return wt(window.location.hostname,window.__EDUCONNECT_API_BASE__,void 0)}function Lt(){const e=localStorage.getItem("educonnect-session-token");return e?{Authorization:`Bearer ${e}`}:{}}async function Pt(e,t){const s=`${Mt()}/api/state`,i=await fetch(s,{method:e,headers:{"Content-Type":"application/json",...Lt()},body:t?JSON.stringify(t):void 0});if(he+=1,!i.ok){`${i.status}`;const o=new Error(`Server API request failed with ${i.status}`);throw we(o,{source:"api.state"}),o}return kt(await i.json())}async function Le(e,t={}){const s=`${Mt()}${e}`,i=await fetch(s,{headers:{"Content-Type":"application/json",...Lt(),...t.headers||{}},...t});if(he+=1,!i.ok){`${i.status}`;const o=await i.json().catch(()=>({})),c=new Error(o.error||`Server API request failed with ${i.status}`);throw we(c,{source:"api.request"}),c}return kt(await i.json())}async function Ua(e,t="mock-api"){return t==="live-api"?Pt("PUT",{snapshot:e}):(he+=1,await At(),localStorage.setItem(St,JSON.stringify(e)),{ok:!0,requestCount:he})}async function _a(e="mock-api"){return e==="live-api"?(await Pt("GET")).snapshot:(he+=1,await At(),JSON.parse(localStorage.getItem(St)||"null"))}async function Wa(e,t){return Le("/api/login",{method:"POST",body:JSON.stringify({identifier:e,password:t})})}async function Va(){return Le("/api/session",{method:"GET"})}async function Ja(e,t="LMS"){const s=await new Promise((i,o)=>{const c=new FileReader;c.onload=()=>i(String(c.result).split(",")[1]||""),c.onerror=()=>o(c.error),c.readAsDataURL(e)});return Le("/api/files",{method:"POST",body:JSON.stringify({name:e.name,type:e.type,area:t,size:`${Math.max(1,Math.round(e.size/1024))} KB`,contentBase64:s})})}async function Ya(e="Launch test group"){return Le("/api/notifications/test",{method:"POST",body:JSON.stringify({audience:e})})}const Se="educonnect-demo-state-v1",k=structuredClone({state:a,userProfiles:x,tenantStates:ne,schoolDesigns:U,rosterRecords:E,gradebookSubmissions:D,auditLogs:Y,lmsAssignments:O,lmsLessons:A,lmsFiles:be,lmsNotifications:j,realtimeEvents:H,databaseTables:ie,onboardingTasks:X,fileUploads:W,notificationDeliveryLog:ee,securityChecklist:te,deployPipeline:fe,offlineSyncQueue:de,activityFeed:J,conversations:L,communityBoards:_});function ke(e,t){Object.keys(e).forEach(s=>delete e[s]),Object.assign(e,structuredClone(t))}function f(e,t){e.splice(0,e.length,...structuredClone(t))}function Qa(){try{const e=JSON.parse(localStorage.getItem(Se)||"null");qe(e)}catch{localStorage.removeItem(Se)}}function Ct(){return structuredClone({state:a,userProfiles:x,tenantStates:ne,schoolDesigns:U,rosterRecords:E,gradebookSubmissions:D,auditLogs:Y,lmsAssignments:O,lmsLessons:A,lmsFiles:be,lmsNotifications:j,realtimeEvents:H,databaseTables:ie,onboardingTasks:X,fileUploads:W,notificationDeliveryLog:ee,securityChecklist:te,deployPipeline:fe,offlineSyncQueue:de,activityFeed:J,conversations:L,communityBoards:_})}function qe(e){e&&(e.state&&Object.assign(a,e.state),e.userProfiles&&f(x,e.userProfiles),e.tenantStates&&f(ne,e.tenantStates),e.schoolDesigns&&ke(U,e.schoolDesigns),e.rosterRecords&&f(E,e.rosterRecords),e.gradebookSubmissions&&f(D,e.gradebookSubmissions),e.auditLogs&&f(Y,e.auditLogs),e.lmsAssignments&&f(O,e.lmsAssignments),e.lmsLessons&&f(A,e.lmsLessons),e.lmsFiles&&f(be,e.lmsFiles),e.lmsNotifications&&f(j,e.lmsNotifications),e.realtimeEvents&&f(H,e.realtimeEvents),e.databaseTables&&f(ie,e.databaseTables),e.onboardingTasks&&f(X,e.onboardingTasks),e.fileUploads&&f(W,e.fileUploads),e.notificationDeliveryLog&&f(ee,e.notificationDeliveryLog),e.securityChecklist&&f(te,e.securityChecklist),e.deployPipeline&&f(fe,e.deployPipeline),e.offlineSyncQueue&&f(de,e.offlineSyncQueue),e.activityFeed&&f(J,e.activityFeed),e.conversations&&f(L,e.conversations),e.communityBoards&&ke(_,e.communityBoards))}function Ka(){const e=Ct();localStorage.setItem(Se,JSON.stringify(e)),(a.apiMode==="mock-api"||a.apiMode==="live-api")&&Ua(e,a.apiMode).catch(()=>{})}async function Et(e=a.apiMode){const t=await _a(e);t&&qe(t)}function Za(){localStorage.removeItem(Se),Object.assign(a,structuredClone(k.state)),f(x,k.userProfiles),f(ne,k.tenantStates),ke(U,k.schoolDesigns),f(E,k.rosterRecords),f(D,k.gradebookSubmissions),f(Y,k.auditLogs),f(O,k.lmsAssignments),f(A,k.lmsLessons),f(be,k.lmsFiles),f(j,k.lmsNotifications),f(H,k.realtimeEvents),f(ie,k.databaseTables),f(X,k.onboardingTasks),f(W,k.fileUploads),f(ee,k.notificationDeliveryLog),f(te,k.securityChecklist),f(fe,k.deployPipeline),f(de,k.offlineSyncQueue),f(J,k.activityFeed),f(L,k.conversations),ke(_,k.communityBoards)}Ha();const ht=document.querySelector("#app");let M=null,ce="",me=!1;const Z=[{title:"Choose a role",body:"Use the demo login panel to switch between state, district, school, teacher, parent, and student access.",role:"state-admin"},{title:"Create learning work",body:"Teachers can author multimedia lessons, build quizzes, publish assignments, and prepare offline packs in the LMS.",role:"lms"},{title:"Communicate safely",body:"Messaging respects school work hours, with emergency override reserved for admins.",role:"messages"},{title:"Approve community posts",body:"Admins can approve posts before they publish to the school community board.",role:"community"}],Xa={AlertTriangle:La,Award:Ut,Bell:_t,BookOpen:Wt,Building2:Vt,CalendarDays:Jt,Check:Yt,ChevronRight:Qt,ClipboardCheck:Kt,Clock:Zt,Database:Xt,Download:ea,Eye:aa,FileText:sa,GraduationCap:na,Layers:ia,Lock:oa,Mail:ra,Map:la,Megaphone:ca,MessageCircle:da,MoreHorizontal:ta,Paperclip:ua,PenLine:pa,Play:ma,Plus:ha,RefreshCw:ga,Rocket:va,RotateCcw:ba,Search:fa,Send:ya,Settings:$a,ShieldCheck:wa,Smartphone:Sa,Sparkles:ka,Star:Aa,TrendingUp:Ma,Users:Pa,Video:Ca,X:Ea};function r(e){return`<i class="app-icon" data-lucide="${e}" data-icon="${e}" aria-hidden="true"></i>`}function es(e){return`/${e.replace(/^\/+/,"")}`}function ae(e){return e.split(" ").map(t=>t[0]).slice(0,2).join("")}function ye(e){return`<div class="progress" aria-label="${e}% complete"><span style="width:${e}%"></span></div>`}function P(e,t,s,i){return`<article class="stat-card ${i}"><div class="stat-icon">${r(s)}</div><span>${e}</span><strong>${t}</strong></article>`}function p(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ts(e){try{const t=new URL(String(e||""));return["http:","https:"].includes(t.protocol)?p(t.href):""}catch{return""}}function Dt(e,t=0){const s=`block-${Date.now()}-${t}-${Math.random().toString(16).slice(2)}`;return e==="quiz"?{id:s,type:e,title:"Knowledge check",question:"",questionType:"Multiple choice",options:["","","",""],correctAnswer:0,feedback:"",points:5,required:!0}:e==="media"?{id:s,type:e,mediaType:"Video",title:"Learning media",url:"",caption:""}:{id:s,type:"text",title:"Lesson section",body:""}}function qt(e=null){return e?structuredClone(e):{id:"",title:"",subject:"English Language Arts",className:a.selectedClass==="All"?I[0].name:a.selectedClass,summary:"",status:"Draft",visibility:"Teacher only",dueDate:"",estimatedMinutes:30,points:20,allowLate:!0,requireOrder:!0,updatedAt:"Just now",blocks:[Dt("text")]}}function b(e){a.toast=e,h()}function y(e,t=$().name,s=z().label){Y.unshift({actor:s,event:e,scope:t,time:"Just now"})}function G(e,t,s=$().name,i="Live dashboard"){j.unshift({id:`notice-${Date.now()}-${Math.random().toString(16).slice(2)}`,level:e,title:t,target:s,channel:i,read:!1})}function T(e,t,s){H.unshift({id:`live-${Date.now()}-${Math.random().toString(16).slice(2)}`,type:e,title:t,detail:s,time:"Just now"}),H.length>8&&(H.length=8)}function Ae(){return j.filter(e=>!e.read).length}function Tt(e="manual"){const t=$(),s=[()=>{const i=E[a.realtimeTick%E.length];i.attendance=Math.min(100,i.attendance+1),J.unshift([i.student,"attendance synced from SIS","Just now",i.className]),T("Roster",`${i.student} synced`,`Attendance is now ${i.attendance}% in ${i.className}.`),G("FYI",`${i.student} roster sync completed`,i.className,"SIS")},()=>{const i=D[a.realtimeTick%D.length];i.status=i.status==="Missing"?"Needs review":i.status,T("LMS",`${i.student} gradebook updated`,`${i.assignment} is ${i.status.toLowerCase()}.`),G("Action",`${i.student} submission needs attention`,i.assignment,"Teacher inbox")},()=>{const i=L.find(o=>o.id===a.activeConversationId)||L[0];i.messages.push({from:"them",text:`Live ${t.name} update received.`,time:"Now"}),i.preview="Live school update received.",i.unread=(i.unread||0)+1,T("Messages",`New message from ${i.name}`,"Conversation preview and unread count updated."),G("Urgent",`New message from ${i.name}`,t.name,"Messages")}];s[a.realtimeTick%s.length](),a.realtimeTick+=1,y(`Processed ${e} live update`,t.name,"Realtime service"),a.toast="Live app data updated.",h()}function z(){return M||x.find(e=>e.id===a.currentUser)||x[0]}function ge(){return!["localhost","127.0.0.1","0.0.0.0"].includes(window.location.hostname)}function oe(e=z()){if(!e)return[];if((e.permissions||[]).includes("global-access"))return se.map(i=>i.id);const t=new Set([e.landing]),s=new Set(e.permissions||[]);return e.scope==="state"&&t.add("state-admin"),["state","district"].includes(e.scope)&&t.add("district-admin"),["state","district","school"].includes(e.scope)&&/Admin$/i.test(e.role||"")&&t.add("school-admin"),s.has("lms")&&t.add("lms"),s.has("teacher-tools")&&t.add("teacher"),s.has("message")&&t.add("messages"),(s.has("approve-posts")||s.has("submit-post"))&&t.add("community"),s.has("student-missions")&&t.add("student"),se.map(i=>i.id).filter(i=>t.has(i))}function Pe(){const e=new Set(oe());return se.filter(t=>e.has(t.id))}function gt(e,t="Signed in as"){if(!e)return;M={...x.find(o=>o.id===e.id),...e},a.currentUser=M.id,a.toast=`${t} ${M.label}.`,y("Signed in",$().name,M.label);const i=oe(M).includes(M.landing)?M.landing:oe(M)[0];ve(i||"student")}function as(){const e=z().label;localStorage.removeItem("educonnect-session-token"),M=null,a.toast="",a.searchTerm="",ce="",history.replaceState(null,"",window.location.pathname),h(),requestAnimationFrame(()=>{var t;return(t=document.querySelector("#landing-identifier"))==null?void 0:t.focus()}),console.info(`${e} signed out`)}function V(e){return z().permissions.includes(e)}function B(e,t="This role cannot use that action"){return V(e)?"":`disabled aria-disabled="true" title="${t}"`}function ue(e,t){return V(e)?"":`<div class="permission-note">${r("lock")} ${t}</div>`}function ss(e){const t=[];return(!e||typeof e!="object")&&t.push("File must contain a JSON object."),(!(e!=null&&e.state)||typeof e.state!="object")&&t.push("Missing state object."),Array.isArray(e==null?void 0:e.tenantStates)||t.push("Missing tenantStates array."),Array.isArray(e==null?void 0:e.conversations)||t.push("Missing conversations array."),(!(e!=null&&e.communityBoards)||typeof e.communityBoards!="object")&&t.push("Missing communityBoards object."),t}function vt(){const e=window.location.hash.replace("#","");return e==="platform"?"state-admin":se.some(t=>t.id===e)?e:""}function ve(e,t=!0){if(e==="platform"&&(e="state-admin"),!se.some(s=>s.id===e)||!oe().includes(e)){M&&(a.toast="That workspace is not available for your role.");return}a.role=e,a.notificationsOpen=!1,a.settingsOpen=!1,t&&window.location.hash!==`#${e}`&&history.pushState(null,"",`#${e}`),h()}function K(e,t=""){t&&(a.toast=t),ve(e)}function Ee(){Da({icons:Xa,attrs:{"stroke-width":2.25}})}function $e(){return ne.find(e=>e.id===a.selectedState)||ne[0]}function re(){const e=$e();return e.districts.find(t=>t.id===a.selectedDistrict)||e.districts[0]}function $(){const e=re();return e.schools.find(t=>t.id===a.selectedSchool)||e.schools[0]}function ns(){const e=$(),t=new Set(oe());return[...Pe().map(s=>({label:s.label,detail:"Workspace",role:s.id})),...Me.map(s=>({label:s.title,detail:`${s.subject} mission`,role:"student"})),...I.map(s=>({label:s.name,detail:s.room,role:"teacher"})),...O.map(s=>({label:s.title,detail:`${s.type} in LMS`,role:"lms"})),...A.map(s=>({label:s.title,detail:`${s.status} ${s.subject} lesson`,role:"lms"})),...De.map(s=>({label:s.title,detail:s.meta,role:"parent"})),...L.map(s=>({label:s.name,detail:s.preview,role:"messages"})),...F().published.map(s=>({label:s.title,detail:`${s.type} post`,role:"community"})),{label:e.name,detail:`${e.category} school tenant`,role:"school-admin"}].filter(s=>t.has(s.role))}function is(){const e=a.searchTerm.trim().toLowerCase();if(!e)return"";const t=ns().filter(s=>`${s.label} ${s.detail}`.toLowerCase().includes(e)).slice(0,6);return`
    <section class="search-results" aria-label="Search results">
      <div><strong>${t.length?`Results for "${p(a.searchTerm)}"`:`No results for "${p(a.searchTerm)}"`}</strong><button class="text-button" data-clear-search>Clear</button></div>
      ${t.length?`<div class="search-result-list">${t.map(s=>`
        <button class="search-result" data-open-role="${s.role}">
          ${r("search")}
          <span><strong>${p(s.label)}</strong><small>${p(s.detail)}</small></span>
        </button>
      `).join("")}</div>`:""}
    </section>
  `}function os(){const e=ge(),t=[["School leaders","Bring school news, staff support, and everyday planning together in one welcoming place.","shield-check"],["Teachers","Plan lessons, celebrate progress, share classroom updates, and stay close to families.","graduation-cap"],["Families","Follow learning, remember important dates, and keep in touch with the school community.","users"],["Students","Discover activities, continue learning adventures, and see accomplishments grow.","sparkles"]];return`
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
            <div class="landing-actions"><a class="primary-action" href="#signin">Sign in ${r("chevron-right")}</a><a class="secondary-action" href="#solutions">See how EduConnect helps</a></div>
            <div class="landing-proof"><span>${r("book-open")} Made for learning</span><span>${r("users")} Brings families closer</span><span>${r("smartphone")} Works wherever you are</span></div>
          </div>
          <div class="landing-login-card" id="signin">
            <div class="landing-login-heading"><span class="landing-lock">${r("book-open")}</span><div><p class="eyebrow">Your school portal</p><h2>Welcome back</h2><p>Enter the sign-in details provided by your school.</p></div></div>
            ${ce?`<div class="landing-error" role="alert">${r("alert-triangle")} ${p(ce)}</div>`:""}
            <form id="landing-login-form">
              <label><span>School email or username</span><input id="landing-identifier" type="text" autocomplete="username" placeholder="Enter your school username" required /></label>
              <label><span>Password</span><input id="landing-password" type="password" autocomplete="current-password" placeholder="Enter your password" ${e?"required":""} /></label>
              <button class="primary-action landing-submit" type="submit" ${me?"disabled":""}>${me?"Signing in…":`${r("book-open")} Sign in`}</button>
            </form>
            <p class="landing-login-note">${e?"Need help signing in? Contact your school office or teacher.":"Local preview: use global-admin, state-admin, district-admin, school-admin, teacher, parent, or student. No password is required."}</p>
          </div>
        </section>
        <section class="landing-role-section" id="solutions">
          <div class="landing-section-heading"><p class="eyebrow">Made for the whole school community</p><h2>Everyone has a place to learn and connect.</h2><p>Simple, welcoming experiences help each person focus on what matters most in their school day.</p></div>
          <div class="landing-role-grid">${t.map(([s,i,o])=>`<article class="landing-role-card">${r(o)}<strong>${s}</strong><span>${i}</span></article>`).join("")}</div>
        </section>
        <section class="landing-trust" id="trust">
          <div><p class="eyebrow">Thoughtfully made for schools</p><h2>A calm, caring place to learn and connect.</h2><p>EduConnect keeps the school day organized without getting in the way, so people can spend more time teaching, learning, and encouraging one another.</p></div>
          <div class="landing-trust-grid"><article>${r("sparkles")}<strong>Joyful learning</strong><span>Friendly activities and clear progress help students feel proud of every step.</span></article><article>${r("users")}<strong>Closer families</strong><span>Updates and reminders make it easier for families to take part in learning.</span></article><article>${r("graduation-cap")}<strong>Helpful for teachers</strong><span>Everyday classroom work stays organized and easy to find.</span></article></div>
        </section>
      </main>
      <footer class="landing-footer"><a class="landing-brand" href="#top"><span>EC</span><strong>EduConnect</strong></a><p>Learning together. Growing together.</p><small>Made for students, families, teachers, and schools.</small></footer>
    </div>
  `}function F(){const e=$();return _[e.id]||(_[e.id]={approvers:[{id:`${e.id}-principal`,name:"Principal Office",title:"Principal",active:!0},{id:`${e.id}-assistant-principal`,name:"Assistant Principal",title:"Assistant Principal",active:!0}],published:[{id:`${e.id}-welcome`,author:"School Office",role:"Administrator",type:"Announcement",audience:"All families",title:`Welcome to ${e.name}`,body:"This board is reserved for administrator-approved school community updates.",media:"No media",time:"Approved"}],pending:[]}),_[e.id]}function rs(e){return e.approvers.find(t=>t.active)||e.approvers[0]}function ls(e,t){var s;return((s=e.approvers.find(i=>i.id===t))==null?void 0:s.name)||"Unassigned"}function Te(){const e=$();return U[e.id]||(U[e.id]={logo:ae(e.name).slice(0,1),crest:`${e.name} Crest`,primary:"#0050cb",accent:"#006b5f",highlight:"#735c00",background:"#f8f9ff",voice:"School-owned portal identity"}),U[e.id]}function cs(e){return`--primary:${e.primary};--primary-2:${e.primary};--teal:${e.accent};--gold:${e.highlight};--background:${e.background};`}function bt(){const e=$();U[e.id]={...Te(),logo:document.querySelector("#design-logo").value.trim()||ae(e.name).slice(0,1),crest:document.querySelector("#design-crest").value.trim()||`${e.name} Crest`,voice:document.querySelector("#design-voice").value.trim()||"School-owned portal identity",primary:document.querySelector("#design-primary").value,accent:document.querySelector("#design-accent").value,highlight:document.querySelector("#design-highlight").value,background:document.querySelector("#design-background").value}}function h(){if(!M){ht.innerHTML=os(),Us(),Ee();return}const e=se.find(i=>i.id===a.role),t=$(),s=Te();ht.innerHTML=`
    <div class="app ${a.compactMode?"compact-mode":""} ${a.highContrast?"high-contrast":""}" style="${cs(s)}">
      ${ms(e,s)}
      <main class="workspace workspace-${a.role}">
        ${ps(t,s)}
        ${gs(e)}
        ${ds()}
        ${is()}
        ${a.role==="state-admin"?vs():""}
        ${a.role==="district-admin"?bs():""}
        ${a.role==="school-admin"?fs():""}
        ${a.role==="lms"?Ls():""}
        ${a.role==="student"?Cs():""}
        ${a.role==="teacher"?Ds():""}
        ${a.role==="parent"?qs():""}
        ${a.role==="messages"?Ts():""}
        ${a.role==="community"?xs():""}
      </main>
      ${hs()}
      ${us()}
    </div>
  `,_s(),Ee(),Ka()}function ds(){if(!a.tourOpen)return"";const e=Z[a.tourStep]||Z[0];return`
    <section class="tour-card" aria-label="Guided onboarding">
      <div>
        <p class="eyebrow">Walkthrough ${a.tourStep+1} of ${Z.length}</p>
        <h3>${e.title}</h3>
        <p>${e.body}</p>
      </div>
      <div class="tour-actions">
        <button class="secondary-action" data-tour-prev ${a.tourStep===0?"disabled":""}>${r("chevron-right")} Back</button>
        <button class="primary-action" data-tour-next>${r("play")} ${a.tourStep===Z.length-1?"Finish":"Next"}</button>
      </div>
    </section>
  `}function us(){return`
    ${a.toast?`<div class="toast" role="status"><span>${p(a.toast)}</span><button class="icon-button" aria-label="Dismiss message" data-dismiss-toast>${r("x")}</button></div>`:""}
    ${a.notificationsOpen?`
      <aside class="utility-panel" aria-label="Notifications">
        <div class="section-heading"><h3>Notifications</h3><button class="icon-button" aria-label="Close notifications" data-close-panel>${r("x")}</button></div>
        <div class="utility-actions">
          <button class="secondary-action" data-mark-notifications>${r("check")} Mark all read</button>
          <button class="secondary-action" data-simulate-live>${r("refresh-cw")} Simulate live update</button>
        </div>
        ${j.length?j.map(e=>`
          <article class="notice-row ${e.level.toLowerCase()} ${e.read?"read":""}">
            <strong>${e.level}</strong>
            <div><span>${e.title}</span><small>${e.target} • ${e.channel}</small></div>
            <button class="icon-button" aria-label="Dismiss ${p(e.title)}" data-dismiss-notification="${e.id}">${r("x")}</button>
          </article>
        `).join(""):'<div class="empty-state">No notifications.</div>'}
      </aside>
    `:""}
    ${a.settingsOpen?`
      <aside class="utility-panel" aria-label="Settings">
        <div class="section-heading"><h3>Settings</h3><button class="icon-button" aria-label="Close settings" data-close-panel>${r("x")}</button></div>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="compactMode" ${a.compactMode?"checked":""} /><span>Compact dashboard density</span></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="highContrast" ${a.highContrast?"checked":""} /><span>High contrast panels</span></label>
        <button class="secondary-action" data-export-demo>${r("download")} Export JSON File</button>
        <label class="secondary-action import-action">${r("file-text")} Import JSON File<input type="file" id="import-demo-state" accept="application/json" /></label>
      </aside>
    `:""}
  `}function ps(e,t){return`
    <section class="tenant-bar" aria-label="Current tenant">
      <div>
        <span class="school-logo-mini">${t.logo}</span>
        <span class="tenant-label">Tenant</span>
        <strong>${e.name}</strong>
        <em>${e.category} school</em>
        <em>${e.subdomain}.educonnect.local</em>
        <em>${e.workHours}</em>
      </div>
      <div class="tenant-path">
        <span>${$e().name}</span>
        <span>${re().name}</span>
          <span>${e.name}</span>
          <span>${e.plan}</span>
        </div>
    </section>
  `}function ms(e,t){return`
    <aside class="sidebar">
      <div class="brand-row">
        <div class="brand-mark">${t.logo}</div>
        <div><h1>${t.crest}</h1><p>${t.voice}</p></div>
      </div>
      <nav class="role-nav" aria-label="Portal views">
        ${Pe().map(s=>`<a class="nav-item ${a.role===s.id?"active":""}" href="#${s.id}" data-role="${s.id}" ${a.role===s.id?'aria-current="page"':""}>${r(s.icon)}<span>${s.label}</span></a>`).join("")}
      </nav>
      <div class="reference-card">
        <img src="${es(e.image)}" alt="" />
        <div><strong>Stitch reference</strong><span>Visual source</span></div>
      </div>
    </aside>
  `}function hs(){return`
    <nav class="mobile-role-nav" aria-label="Mobile portal views">
      ${Pe().map(e=>`<a class="mobile-nav-item ${a.role===e.id?"active":""}" href="#${e.id}" data-role="${e.id}" ${a.role===e.id?'aria-current="page"':""}>${r(e.icon)}<span>${e.label}</span></a>`).join("")}
    </nav>
  `}function gs(e){const t=e.id==="messages"?"Communication Hub":e.id==="state-admin"?"State Governance":e.id==="district-admin"?"District Operations":e.id==="school-admin"?"School Administration":`${e.label} Dashboard`;return`
    <header class="topbar">
      <div><p class="eyebrow">${e.label} workspace</p><h2>${t}</h2></div>
      <div class="topbar-actions">
        <label class="searchbox">${r("search")}<input id="global-search" value="${p(a.searchTerm)}" placeholder="Search resources..." /></label>
        ${V("manage-users")&&oe().includes("state-admin")?`<button class="secondary-action role-controls-action" data-role-controls type="button">${r("users")} Role controls</button>`:""}
        <div class="account-chip"><span>${ae(z().label)}</span><div><strong>${z().label}</strong><small>${z().role}</small></div></div>
        ${ge()?"":`<button class="secondary-action reset-action" data-reset-demo type="button">${r("rotate-ccw")} Reset Demo</button>`}
        <button class="icon-button" aria-label="Notifications" data-toggle-notifications>${r("bell")}${Ae()?`<span class="status-dot">${Ae()}</span>`:""}</button>
        <button class="icon-button" aria-label="Settings" data-toggle-settings>${r("settings")}</button>
        <button class="icon-button" aria-label="Sign out" data-sign-out>${r("x")}</button>
      </div>
    </header>
  `}function vs(){const e=$e(),t=e.districts,s=t.flatMap(o=>o.schools),i=s.filter(o=>o.status==="Active").length;return`
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">State admin workspace</p>
          <h2>Tenant Governance</h2>
          <p>State administrators supervise districts, compliance, tenant standards, statewide calendars, and cross-district readiness.</p>
        </div>
        <div class="inline-actions">
          <button class="secondary-action" data-open-role="district-admin">${r("building-2")} Review Districts</button>
          <button class="primary-action" data-add-school ${B("manage-tenants","Only state and district admins can add school tenants.")}>${r("plus")} Add School Tenant</button>
        </div>
      </div>
      ${ue("manage-tenants","Tenant creation and district configuration are admin-only in this demo.")}
      ${P("Districts",t.length,"building-2","blue")}
      ${P("Schools",s.length,"graduation-cap","teal")}
      ${P("Active tenants",i,"shield-check","gold")}
      ${ys()}
      ${xt()}
      ${xe()}
      <section class="panel state-management-panel">
        <div class="section-heading"><h3>District Oversight</h3><span>${e.name}</span></div>
        <div class="management-list">
          ${t.map(o=>`
            <button class="management-row ${o.id===re().id?"active":""}" data-manage-district="${o.id}">
              <div class="management-icon">${r("building-2")}</div>
              <div><strong>${o.name}</strong><small>${o.region} • Superintendent: ${o.superintendent}</small></div>
              <span>${o.schools.length} schools</span>
            </button>
          `).join("")}
        </div>
      </section>
      ${Nt()}
      <section class="panel audit-panel">
        <div class="section-heading"><h3>Audit Trail</h3><span>Cross-tenant accountability</span></div>
        <div class="audit-list">
          ${Y.map(o=>`
            <article class="audit-row">
              ${r("clipboard-check")}
              <div><strong>${o.event}</strong><small>${o.actor} • ${o.scope}</small></div>
              <time>${o.time}</time>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="panel calendar-panel">
        <div class="section-heading"><h3>Statewide Calendar</h3><span>Policy, reporting, and public events</span></div>
        <div class="calendar-list">
          ${$t.map(o=>`<article class="calendar-row"><div class="calendar-date">${o.date}</div><div><strong>${o.title}</strong><small>${o.audience} • ${o.type}</small></div></article>`).join("")}
        </div>
      </section>
      <section class="panel hierarchy-panel">
        <div class="section-heading"><h3>Governance Chain</h3><span>State to classroom</span></div>
        <div class="hierarchy-list">
          ${Ta.map(([o,c],g)=>`<article class="hierarchy-level"><div class="level-number">${g+1}</div><div><h4>${o}</h4><p>${c.join(" • ")}</p></div></article>`).join("")}
        </div>
      </section>
      ${$s()}
    </section>
  `}function bs(){const e=$e(),t=re(),s=t.schools,i=s.reduce((c,g)=>c+g.students,0),o=s.reduce((c,g)=>c+g.staff,0);return`
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">District admin workspace</p>
          <h2>${t.name}</h2>
          <p>District administrators manage school tenants, staffing, rollout readiness, district messages, and cross-school performance.</p>
        </div>
        <button class="primary-action" data-add-school ${B("manage-tenants","Only district and state admins can add school tenants.")}>${r("plus")} Add School Tenant</button>
      </div>
      ${P("Schools",s.length,"graduation-cap","blue")}
      ${P("Students",i.toLocaleString(),"users","teal")}
      ${P("Staff",o.toLocaleString(),"shield-check","gold")}
      <section class="panel tenant-controls">
        <div class="section-heading"><h3>District Scope</h3><span>${e.name}</span></div>
        <div class="tenant-selectors">
          <label><span>State</span><select id="state-filter">${ne.map(c=>`<option value="${c.id}" ${a.selectedState===c.id?"selected":""}>${c.name}</option>`).join("")}</select></label>
          <label><span>District</span><select id="district-filter">${e.districts.map(c=>`<option value="${c.id}" ${t.id===c.id?"selected":""}>${c.name}</option>`).join("")}</select></label>
        </div>
      </section>
      <section class="panel district-management-panel">
        <div class="section-heading"><h3>Schools In This District</h3><span>${t.region}</span></div>
        <div class="management-list">
          ${s.map(c=>`<button class="management-row ${c.id===$().id?"active":""}" data-manage-school="${c.id}"><div class="management-icon">${r("graduation-cap")}</div><div><strong>${c.name}</strong><small>${c.category} • ${c.subdomain}.educonnect.local</small></div><span>${c.status}</span></button>`).join("")}
        </div>
      </section>
      ${xt()}
      ${xe()}
      <section class="panel audit-panel">
        <div class="section-heading"><h3>District Audit Trail</h3><span>School and staff actions</span></div>
        <div class="audit-list">${Y.map(c=>`<article class="audit-row">${r("clipboard-check")}<div><strong>${c.event}</strong><small>${c.actor} • ${c.scope}</small></div><time>${c.time}</time></article>`).join("")}</div>
      </section>
    </section>
  `}function fs(){const e=$(),t=F(),s=E.filter(o=>o.status==="Watch").length,i=D.filter(o=>o.status!=="Reviewed").length;return`
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">School admin workspace</p>
          <h2>${e.name}</h2>
          <p>School administrators run campus operations: users, safety messaging, approvals, LMS visibility, roster health, and family communication windows.</p>
        </div>
        <button class="primary-action" data-open-role="community">${r("megaphone")} Review Community Posts</button>
      </div>
      ${P("Students",e.students.toLocaleString(),"users","blue")}
      ${P("Staff",e.staff.toLocaleString(),"shield-check","teal")}
      ${P("Pending approvals",t.pending.length,"clipboard-check","gold")}
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
      <section class="panel permissions-panel">
        <div class="section-heading"><h3>School Operations</h3><span>LMS, messages, approvals</span></div>
        <div class="permission-table">
          <button class="permission-row" data-open-role="lms"><strong>LMS</strong><span>Assignments and gradebook</span><small>${O.length} assignments</small></button>
          <button class="permission-row" data-open-role="messages"><strong>Messages</strong><span>Family and staff communication</span><small>${L.reduce((o,c)=>o+(c.unread||0),0)} unread</small></button>
          <button class="permission-row" data-open-role="community"><strong>Community</strong><span>Approval queue and published posts</span><small>${t.pending.length} pending</small></button>
        </div>
      </section>
      ${Nt()}
      ${xe()}
    </section>
  `}function ys(){const e={"state-admin":"Statewide governance, district oversight, compliance, and policy","district-admin":"School tenants, shared calendars, roster health, and district analytics","school-admin":"Campus users, family access, safety, approvals, and operations",lms:"Assignments, gradebook, learning files, and classroom integrations",student:"Personal learning missions, progress, and approved resources",teacher:"Classes, assignments, grading, messages, and community submissions",parent:"Linked learner progress, deadlines, approved posts, and messages",messages:"Authorized family, staff, and school conversations",community:"School announcements, submissions, approvals, and published updates"},t=Pe();return`
    <section class="panel users-roles-panel role-control-center" id="role-control-center" aria-labelledby="role-control-title">
      <div class="section-heading role-control-heading">
        <div><p class="eyebrow">Global administration</p><h3 id="role-control-title">Role Control Center</h3></div>
        <span>${V("manage-users")?"Permissions editable":"Read-only"}</span>
      </div>
      <p class="role-control-intro">Open role-based workspaces, review their access boundaries, and manage account permissions from one place.</p>
      <div class="role-control-launcher" aria-label="Role workspaces">
        ${t.map(s=>`
          <button class="role-control-card" type="button" data-open-role="${s.id}">
            <span class="role-control-icon">${r(s.icon)}</span>
            <span><strong>${s.label}</strong><small>${e[s.id]}</small></span>
            <em>Open workspace ${r("chevron-right")}</em>
          </button>
        `).join("")}
      </div>
      <div class="section-heading account-access-heading"><h4>Account access</h4><span>${x.length} profiles</span></div>
      <div class="users-grid">
        ${x.map(s=>`
          <article class="user-role-card">
            <div><strong>${s.label}</strong><small>${s.role} • ${s.scope||"global"} scope • lands on ${s.landing}</small></div>
            <div class="permission-chip-list">
              ${qa.map(([i,o])=>`
                <label class="permission-chip ${s.permissions.includes(i)?"active":""}">
                  <input type="checkbox" data-profile-permission="${s.id}:${i}" ${s.permissions.includes(i)?"checked":""} ${V("manage-users")?"":"disabled"} />
                  <span>${o}</span>
                </label>
              `).join("")}
            </div>
          </article>
        `).join("")}
      </div>
      ${ue("manage-users","Only administrators can change role permissions.")}
    </section>
  `}function xe(){return`
    <section class="panel realtime-panel">
      <div class="section-heading">
        <div><h3>Realtime Operations</h3><span>${a.liveUpdates?"Live updates enabled":"Live updates paused"}</span></div>
        <div class="inline-actions">
          <label class="mini-toggle"><input type="checkbox" data-toggle-live ${a.liveUpdates?"checked":""} /><span>Live</span></label>
          <button class="secondary-action" data-simulate-live>${r("refresh-cw")} Simulate Update</button>
        </div>
      </div>
      <div class="realtime-list">
        ${H.map(e=>`
          <article class="realtime-row">
            <strong>${e.type}</strong>
            <div><span>${e.title}</span><small>${e.detail}</small></div>
            <time>${e.time}</time>
          </article>
        `).join("")}
      </div>
    </section>
  `}function xt(){const e=$(),t=F(),s=Math.round(E.reduce((u,C)=>u+C.grade,0)/E.length),i=E.filter(u=>u.status==="Watch").length,o=D.filter(u=>u.status!=="Reviewed").length,c=L.reduce((u,C)=>u+(C.unread||0),0),g=[{role:"lms",label:"LMS",iconName:"layers",metric:`${A.length} lessons`,detail:`${O.length} assignments • ${o} need review`},{role:"student",label:"Students",iconName:"sparkles",metric:`${E.length} learners`,detail:`${i} students on watch status`},{role:"teacher",label:"Teachers",iconName:"graduation-cap",metric:`${I.length} classes`,detail:`${J.length} activity events in the feed`},{role:"parent",label:"Parents",iconName:"users",metric:`${De.length} deadlines`,detail:`${a.checkedDeadlines.length} family tasks checked`},{role:"messages",label:"Messages",iconName:"message-circle",metric:`${c} unread`,detail:`${L.length} parent and group threads`},{role:"community",label:"Community",iconName:"megaphone",metric:`${t.pending.length} pending`,detail:`${t.published.length} approved posts live`}];return`
    <section class="panel unified-os-panel">
      <div class="section-heading">
        <div><p class="eyebrow">One integrated system</p><h3>Unified School Operating System</h3></div>
        <span>${e.name}</span>
      </div>
      <div class="unified-os-grid">
        ${g.map(u=>`
          <button class="module-hub-card" data-open-role="${u.role}">
            <span class="module-hub-icon">${r(u.iconName)}</span>
            <span><strong>${u.label}</strong><small>${u.detail}</small></span>
            <em>${u.metric}</em>
          </button>
        `).join("")}
      </div>
      <div class="system-snapshot-grid">
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Students + LMS</h4><button class="text-button" data-open-role="lms">Open LMS ${r("chevron-right")}</button></div>
          <div class="snapshot-metrics">
            <span><strong>${s}%</strong><small>Average roster grade</small></span>
            <span><strong>${o}</strong><small>Submissions in queue</small></span>
            <span><strong>${a.offlinePackReady?"Ready":"Build"}</strong><small>Offline learning pack</small></span>
          </div>
          ${D.slice(0,3).map(u=>`<div class="snapshot-row"><strong>${u.student}</strong><span>${u.assignment}</span><em>${u.status}</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Teachers + Classes</h4><button class="text-button" data-open-role="teacher">Open Teacher ${r("chevron-right")}</button></div>
          ${I.map(u=>`<div class="snapshot-row"><strong>${u.name}</strong><span>${u.room}</span><em>${u.pending} pending</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Parents + Messages</h4><button class="text-button" data-open-role="messages">Open Messages ${r("chevron-right")}</button></div>
          ${L.slice(0,3).map(u=>`<div class="snapshot-row"><strong>${u.name}</strong><span>${u.preview}</span><em>${u.unread||0} unread</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Admin + Community</h4><button class="text-button" data-open-role="community">Open Community ${r("chevron-right")}</button></div>
          <div class="snapshot-metrics">
            <span><strong>${t.pending.length}</strong><small>Approval queue</small></span>
            <span><strong>${Ae()}</strong><small>Unread alerts</small></span>
            <span><strong>${Y.length}</strong><small>Audit entries</small></span>
          </div>
          ${H.slice(0,2).map(u=>`<div class="snapshot-row"><strong>${u.type}</strong><span>${u.title}</span><em>${u.time}</em></div>`).join("")}
        </article>
      </div>
    </section>
  `}function $s(){const e=X.filter(s=>s.done).length,t=te.filter(s=>s.done).length;return`
    <section class="panel production-panel">
      <div class="section-heading">
        <div><p class="eyebrow">Production operations</p><h3>Launch Control</h3></div>
        <span>${a.gatewayMode==="demo"?"Demo mode":"Backend-ready mode"}</span>
      </div>
      <div class="production-grid">
        <article class="production-card gateway-card">
          <div class="section-heading"><h4>Public Login Gateway</h4><span>${a.authProvider}</span></div>
          <label><span>Auth mode</span><select id="auth-provider"><option ${a.authProvider==="Role-based demo auth"?"selected":""}>Role-based demo auth</option><option ${a.authProvider==="Supabase Auth"?"selected":""}>Supabase Auth</option><option ${a.authProvider==="Firebase Auth"?"selected":""}>Firebase Auth</option></select></label>
          <label><span>Backend provider</span><select id="backend-provider"><option ${a.backendProvider==="Supabase"?"selected":""}>Supabase</option><option ${a.backendProvider==="Firebase"?"selected":""}>Firebase</option><option ${a.backendProvider==="Custom API"?"selected":""}>Custom API</option></select></label>
          <div class="gateway-actions">
            <button class="secondary-action" data-set-gateway="demo">${r("play")} Demo Mode</button>
            <button class="primary-action" data-set-gateway="backend">${r("database")} Backend Ready</button>
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Database Blueprint</h4><button class="text-button" data-provision-schema>Provision mock schema</button></div>
          <div class="schema-list">
            ${ie.map(s=>`<div class="schema-row"><strong>${s.name}</strong><span>${s.records} records</span><em>${s.status}</em><small>${s.detail}</small></div>`).join("")}
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Admin Onboarding</h4><span>${e}/${X.length} complete</span></div>
          <div class="checklist-list">
            ${X.map(s=>`<label class="checklist-row"><input type="checkbox" data-onboarding-task="${s.id}" ${s.done?"checked":""} /><span class="custom-check">${s.done?r("check"):""}</span><span><strong>${s.label}</strong><small>${s.owner}</small></span></label>`).join("")}
          </div>
          <form id="onboarding-user-form" class="mini-form">
            <input id="onboarding-user-name" placeholder="Invite user name" />
            <select id="onboarding-user-role"><option>Teacher</option><option>Parent</option><option>Student</option><option>Admin</option></select>
            <button class="secondary-action" type="submit">${r("plus")} Invite</button>
          </form>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>File Uploads</h4><span>${W.length} files</span></div>
          <label class="upload-drop">${r("paperclip")} Add assignment, PDF, image, or community file<input type="file" id="production-file-upload" multiple /></label>
          <div class="upload-list">
            ${W.map(s=>`<div class="upload-row"><strong>${s.name}</strong><span>${s.area} • ${s.size}</span><em>${s.status}</em></div>`).join("")}
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Notification Delivery</h4><button class="text-button" data-send-delivery-test>Send test batch</button></div>
          ${ee.map(s=>`<div class="delivery-row"><strong>${s.channel}</strong><span>${s.audience}</span><em>${s.status}</em><small>${s.detail}</small></div>`).join("")}
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Privacy & Security</h4><span>${t}/${te.length} ready</span></div>
          <div class="checklist-list">
            ${te.map(s=>`<label class="checklist-row"><input type="checkbox" data-security-check="${s.id}" ${s.done?"checked":""} /><span class="custom-check">${s.done?r("check"):""}</span><span><strong>${s.label}</strong><small>${s.status}</small></span></label>`).join("")}
          </div>
        </article>

        <article class="production-card deploy-card">
          <div class="section-heading"><h4>Deployment Pipeline</h4><span>Hostinger live</span></div>
          ${fe.map(s=>`<div class="pipeline-row"><strong>${s.step}</strong><span>${s.detail}</span><em class="${s.status.toLowerCase()}">${s.status}</em></div>`).join("")}
        </article>
      </div>
    </section>
  `}function Nt(){return`
    <section class="panel compliance-panel">
      <div class="section-heading"><h3>Privacy & Compliance Dashboard</h3><span>FERPA operations</span></div>
      <div class="compliance-grid">
        ${Oa.map(e=>`
          <article class="compliance-card">
            ${r("shield-check")}
            <div><strong>${e.value}</strong><span>${e.label}</span><small>${e.status} • ${e.detail}</small></div>
          </article>
        `).join("")}
      </div>
      ${ue("view-compliance","Compliance detail is admin-only.")}
    </section>
  `}function Ot({teacherStudio:e=!1}={}){const t=a.lessonFilter==="All"?A:A.filter(o=>o.status===a.lessonFilter),s=A.filter(o=>o.status==="Published").length,i=A.length-s;return`
    <section class="panel lesson-library-panel ${e?"teacher-lesson-library":"lms-panel"}">
      <div class="section-heading lesson-library-heading">
        <div><p class="eyebrow">${e?"Teacher authoring":"Course content"}</p><h3>Lesson Library</h3></div>
        <div class="inline-actions">
          <select id="lesson-filter" aria-label="Filter lessons"><option>All</option><option ${a.lessonFilter==="Published"?"selected":""}>Published</option><option ${a.lessonFilter==="Draft"?"selected":""}>Draft</option></select>
          ${e?`<button class="primary-action" type="button" data-new-lesson ${B("teacher-tools","Only teachers and administrators can create lessons.")}>${r("plus")} Create lesson</button>`:""}
        </div>
      </div>
      <div class="lesson-library-stats"><span><strong>${A.length}</strong> total lessons</span><span><strong>${s}</strong> published</span><span><strong>${i}</strong> drafts</span></div>
      <div class="lesson-card-grid">
        ${t.map(o=>{const c=o.blocks.filter(u=>u.type==="quiz").length,g=o.blocks.filter(u=>u.type==="media").length;return`
            <article class="lesson-card">
              <div class="lesson-card-top"><span class="lesson-status ${o.status.toLowerCase()}">${o.status}</span><small>${p(o.subject)}</small></div>
              <h4>${p(o.title)}</h4>
              <p>${p(o.summary)}</p>
              <div class="lesson-meta"><span>${r("graduation-cap")} ${p(o.className)}</span><span>${r("clock")} ${o.estimatedMinutes} min</span><span>${r("layers")} ${o.blocks.length} blocks</span></div>
              <div class="lesson-feature-row"><span>${c} quiz${c===1?"":"zes"}</span><span>${g} media</span><span>${o.points} points</span></div>
              <div class="lesson-card-actions">
                <button class="secondary-action" type="button" data-preview-lesson="${o.id}">${r("eye")} Preview</button>
                ${V("teacher-tools")?`<button class="secondary-action" type="button" data-edit-lesson="${o.id}">${r("pen-line")} Edit</button><button class="text-button" type="button" data-toggle-lesson="${o.id}">${o.status==="Published"?"Unpublish":"Publish"}</button>`:""}
              </div>
            </article>
          `}).join("")||`<div class="empty-state">No ${a.lessonFilter.toLowerCase()} lessons yet.</div>`}
      </div>
      ${ws(A.find(o=>o.id===a.lessonPreviewId))}
    </section>
  `}function ws(e){return e?`<aside class="lesson-preview-panel" aria-label="Lesson preview">
    <div class="section-heading"><div><p class="eyebrow">Student preview</p><h4>${p(e.title)}</h4></div><button class="icon-button" type="button" data-close-lesson-preview aria-label="Close lesson preview">${r("x")}</button></div>
    <p>${p(e.summary)}</p>
    <div class="lesson-preview-meta"><span>${p(e.className)}</span><span>${e.estimatedMinutes} minutes</span><span>${e.points} points</span></div>
    <div class="lesson-preview-blocks">${e.blocks.map((t,s)=>t.type==="text"?`<article><span class="block-number">${s+1}</span><div><strong>${p(t.title)}</strong><p>${p(t.body)}</p></div></article>`:t.type==="media"?`<article><span class="block-number">${s+1}</span><div><strong>${p(t.title)}</strong>${Rt(t)}</div></article>`:`<article><span class="block-number">${s+1}</span><div><strong>${p(t.title)}</strong><p>${p(t.question)}</p><div class="preview-answer-list">${t.options.filter(Boolean).map(i=>`<span>${p(i)}</span>`).join("")}</div></div></article>`).join("")}</div>
  </aside>`:""}function Ss(e,t,s){const i=`<div class="block-order-actions"><button type="button" data-move-lesson-block="${e.id}:up" ${t===0?"disabled":""} aria-label="Move block up">↑</button><span>${t+1}</span><button type="button" data-move-lesson-block="${e.id}:down" ${t===s-1?"disabled":""} aria-label="Move block down">↓</button><button type="button" data-remove-lesson-block="${e.id}" aria-label="Remove block">${r("x")}</button></div>`;return e.type==="quiz"?`
    <article class="lesson-block-editor quiz-block-editor" data-lesson-block="${e.id}">
      <div class="lesson-block-heading"><div><span class="block-type-icon">${r("clipboard-check")}</span><div><strong>Quiz</strong><small>Auto-graded knowledge check</small></div></div>${i}</div>
      <div class="lesson-block-fields">
        <label><span>Quiz title</span><input value="${p(e.title)}" data-block-field="${e.id}:title" /></label>
        <label><span>Question type</span><select data-block-field="${e.id}:questionType"><option ${e.questionType==="Multiple choice"?"selected":""}>Multiple choice</option><option ${e.questionType==="True or false"?"selected":""}>True or false</option><option ${e.questionType==="Short answer"?"selected":""}>Short answer</option></select></label>
        <label class="span-2"><span>Question</span><textarea data-block-field="${e.id}:question" placeholder="What should students understand?">${p(e.question)}</textarea></label>
        <div class="quiz-option-editor span-2">
          ${e.questionType==="Short answer"?`<label><span>Accepted answer</span><input aria-label="Accepted short answer" value="${p(e.options[0]||"")}" data-quiz-option="${e.id}:0" /></label>`:e.options.map((o,c)=>`<label class="quiz-option ${e.questionType==="True or false"&&c>1?"hidden-option":""}"><input type="radio" name="correct-${e.id}" value="${c}" data-correct-answer="${e.id}" ${Number(e.correctAnswer)===c?"checked":""} /><span>Correct</span><input aria-label="Answer option ${c+1}" value="${p(o)}" data-quiz-option="${e.id}:${c}" /></label>`).join("")}
        </div>
        <label><span>Points</span><input type="number" min="1" max="100" value="${e.points}" data-block-field="${e.id}:points" /></label>
        <label class="toggle-field"><input type="checkbox" data-block-field="${e.id}:required" ${e.required?"checked":""} /><span>Required question</span></label>
        <label class="span-2"><span>Answer feedback</span><textarea data-block-field="${e.id}:feedback" placeholder="Explain the correct answer.">${p(e.feedback)}</textarea></label>
      </div>
    </article>`:e.type==="media"?`
    <article class="lesson-block-editor media-block-editor" data-lesson-block="${e.id}">
      <div class="lesson-block-heading"><div><span class="block-type-icon">${r("video")}</span><div><strong>Media</strong><small>Video, image, audio, document, or link</small></div></div>${i}</div>
      <div class="lesson-block-fields">
        <label><span>Media title</span><input value="${p(e.title)}" data-block-field="${e.id}:title" /></label>
        <label><span>Media type</span><select data-block-field="${e.id}:mediaType">${["Video","Image","Audio","Document","Link"].map(o=>`<option ${e.mediaType===o?"selected":""}>${o}</option>`).join("")}</select></label>
        <label class="span-2"><span>Media URL</span><input type="url" value="${p(e.url)}" data-block-field="${e.id}:url" placeholder="https://..." /></label>
        <label class="span-2"><span>Caption or instructions</span><textarea data-block-field="${e.id}:caption">${p(e.caption)}</textarea></label>
      </div>
    </article>`:`
    <article class="lesson-block-editor text-block-editor" data-lesson-block="${e.id}">
      <div class="lesson-block-heading"><div><span class="block-type-icon">${r("file-text")}</span><div><strong>Content</strong><small>Directions, reading, or explanation</small></div></div>${i}</div>
      <div class="lesson-block-fields">
        <label class="span-2"><span>Section title</span><input value="${p(e.title)}" data-block-field="${e.id}:title" /></label>
        <label class="span-2"><span>Lesson content</span><textarea class="lesson-content-textarea" data-block-field="${e.id}:body" placeholder="Write instructions or learning content...">${p(e.body)}</textarea></label>
      </div>
    </article>`}function ks(){const e=a.lessonDraft||qt();return`
    <section class="panel lesson-builder-panel" aria-labelledby="lesson-builder-title">
      <div class="section-heading lesson-builder-heading"><div><p class="eyebrow">Lesson Studio</p><h3 id="lesson-builder-title">${e.id?"Edit lesson":"Create a lesson"}</h3></div><button class="icon-button" type="button" data-close-lesson-builder aria-label="Close lesson builder">${r("x")}</button></div>
      <form id="lesson-builder-form" class="lesson-builder-form">
        <div class="lesson-settings-grid">
          <label class="span-2"><span>Lesson title</span><input required value="${p(e.title)}" data-lesson-field="title" placeholder="Example: Exploring persuasive writing" /></label>
          <label><span>Subject</span><select data-lesson-field="subject">${["English Language Arts","Math","Science","Social Studies","Art","Technology"].map(t=>`<option ${e.subject===t?"selected":""}>${t}</option>`).join("")}</select></label>
          <label><span>Class</span><select data-lesson-field="className">${I.map(t=>`<option ${e.className===t.name?"selected":""}>${t.name}</option>`).join("")}</select></label>
          <label class="span-2"><span>Learning objective and summary</span><textarea required data-lesson-field="summary" placeholder="What will students learn and do?">${p(e.summary)}</textarea></label>
          <label><span>Due date</span><input type="date" value="${p(e.dueDate)}" data-lesson-field="dueDate" /></label>
          <label><span>Estimated minutes</span><input type="number" min="5" max="240" value="${e.estimatedMinutes}" data-lesson-field="estimatedMinutes" /></label>
          <label><span>Total points</span><input type="number" min="0" max="1000" value="${e.points}" data-lesson-field="points" /></label>
          <label><span>Visibility</span><select data-lesson-field="visibility"><option ${e.visibility==="Teacher only"?"selected":""}>Teacher only</option><option ${e.visibility==="Students"?"selected":""}>Students</option><option ${e.visibility==="Students and families"?"selected":""}>Students and families</option></select></label>
          <label class="toggle-field"><input type="checkbox" data-lesson-field="allowLate" ${e.allowLate?"checked":""} /><span>Allow late completion</span></label>
          <label class="toggle-field"><input type="checkbox" data-lesson-field="requireOrder" ${e.requireOrder?"checked":""} /><span>Require blocks in order</span></label>
        </div>
        <div class="lesson-block-toolbar"><div><strong>Lesson blocks</strong><small>Add and reorder learning content.</small></div><div class="inline-actions"><button class="secondary-action" type="button" data-add-lesson-block="text">${r("file-text")} Content</button><button class="secondary-action" type="button" data-add-lesson-block="media">${r("video")} Media</button><button class="secondary-action" type="button" data-add-lesson-block="quiz">${r("clipboard-check")} Quiz</button></div></div>
        <div class="lesson-block-list">${e.blocks.map((t,s)=>Ss(t,s,e.blocks.length)).join("")}</div>
        <div class="lesson-publish-bar"><div><strong>${e.blocks.length} blocks</strong><span>Changes are saved when you choose an action.</span></div><div class="inline-actions"><button class="secondary-action" type="submit" data-lesson-status="Draft">Save draft</button><button class="primary-action" type="submit" data-lesson-status="Published">${r("check")} Publish lesson</button></div></div>
      </form>
    </section>
  `}function As(){return a.lessonBuilderOpen?ks():Ot({teacherStudio:!0})}function Rt(e){const t=ts(e.url);return t?e.mediaType==="Image"?`<figure class="student-lesson-media"><img src="${t}" alt="${p(e.caption||e.title)}" /><figcaption>${p(e.caption)}</figcaption></figure>`:e.mediaType==="Audio"?`<div class="student-lesson-media"><audio controls src="${t}"></audio><p>${p(e.caption)}</p></div>`:e.mediaType==="Video"&&/\.(mp4|webm|ogg)(\?|$)/i.test(t)?`<div class="student-lesson-media"><video controls src="${t}"></video><p>${p(e.caption)}</p></div>`:`<a class="lesson-media-link" href="${t}" target="_blank" rel="noreferrer">${r(e.mediaType==="Video"?"play":"paperclip")}<span><strong>${p(e.title)}</strong><small>${p(e.caption||`Open ${e.mediaType.toLowerCase()}`)}</small></span>${r("chevron-right")}</a>`:`<div class="lesson-media-placeholder">${r("paperclip")}<span>Media link has not been added yet.</span></div>`}function Ms(){var i;const e=A.filter(o=>o.status==="Published"),t=e.find(o=>o.id===a.activeStudentLessonId)||e[0],s=t?(i=a.lessonProgress)==null?void 0:i[t.id]:null;return`
    <section class="panel student-lessons-panel">
      <div class="section-heading"><div><p class="eyebrow">My classroom</p><h3>Lessons</h3></div><span>${e.length} available</span></div>
      <div class="student-lesson-layout">
        <div class="student-lesson-list">
          ${e.map(o=>{var c,g;return`<button class="student-lesson-card ${(t==null?void 0:t.id)===o.id?"active":""}" type="button" data-open-student-lesson="${o.id}"><span>${r("book-open")}</span><div><strong>${p(o.title)}</strong><small>${p(o.subject)} • ${o.estimatedMinutes} min • ${o.points} points</small></div><em>${(g=(c=a.lessonProgress)==null?void 0:c[o.id])!=null&&g.completed?"Completed":"Open"}</em></button>`}).join("")}
        </div>
        ${t?`<article class="student-lesson-view">
          <div class="student-lesson-hero"><span>${p(t.subject)}</span><h4>${p(t.title)}</h4><p>${p(t.summary)}</p><div><small>Due ${t.dueDate||"anytime"}</small><small>${t.allowLate?"Late work allowed":"Firm deadline"}</small><small>${t.requireOrder?"Complete in order":"Flexible order"}</small></div></div>
          <form class="student-lesson-content" data-submit-lesson="${t.id}">
            ${t.blocks.map((o,c)=>{var g,u,C,w,R,N;return o.type==="text"?`<section class="student-content-block"><span class="block-number">${c+1}</span><div><h5>${p(o.title)}</h5><p>${p(o.body).replace(/\n/g,"<br />")}</p></div></section>`:o.type==="media"?`<section class="student-content-block"><span class="block-number">${c+1}</span><div><h5>${p(o.title)}</h5>${Rt(o)}</div></section>`:`<fieldset class="student-quiz-block"><legend><span class="block-number">${c+1}</span><span><strong>${p(o.title)}</strong><small>${o.points} points${o.required?" • Required":""}</small></span></legend><p>${p(o.question)}</p><div class="student-answer-list">${o.questionType==="Short answer"?`<label class="short-answer-field"><span>Your answer</span><input name="quiz-${o.id}" ${o.required?"required":""} /></label>`:o.options.map((q,Q)=>({option:q,optionIndex:Q})).filter(({option:q})=>q.trim()).map(({option:q,optionIndex:Q})=>`<label><input type="radio" name="quiz-${o.id}" value="${Q}" ${o.required?"required":""} /><span>${p(q)}</span></label>`).join("")}</div>${s?`<div class="quiz-feedback ${(u=(g=s.answers)==null?void 0:g[o.id])!=null&&u.correct?"correct":"incorrect"}">${(w=(C=s.answers)==null?void 0:C[o.id])!=null&&w.correct?r("check"):r("alert-triangle")} ${p((N=(R=s.answers)==null?void 0:R[o.id])!=null&&N.correct?o.feedback||"Correct.":"Review this question and try again.")}</div>`:""}</fieldset>`}).join("")}
            <div class="student-lesson-submit"><div>${s?`<strong>${s.score}%</strong><span>Latest score</span>`:`<strong>${t.points}</strong><span>points available</span>`}</div><button class="primary-action" type="submit">${r("check")} ${s?"Submit again":"Complete lesson"}</button></div>
          </form>
        </article>`:'<div class="empty-state">No published lessons are available yet.</div>'}
      </div>
    </section>`}function Ls(){const e=$(),t=Ce.find(o=>o.id===a.activeAccount)||Ce[0],s=A.reduce((o,c)=>o+c.blocks.filter(g=>g.type==="quiz").length,0),i=A.filter(o=>o.status==="Published").length;return`
    <section class="dashboard-grid lms-grid">
      <div class="welcome-strip lms-welcome">
        <div>
          <p class="eyebrow">${e.name} advanced LMS</p>
          <h2>Lessons, quizzes, media, and grading in one LMS</h2>
          <p>Teachers can build multimedia lessons, publish quizzes, manage assignments, grade submissions, and support offline learning inside this school instance.</p>
        </div>
        <button class="primary-action" data-build-offline ${B("lms","Only teachers and administrators can build LMS offline packs.")}>${r("download")} ${a.offlinePackReady?"Rebuild Offline Pack":"Build Offline Pack"}</button>
      </div>

      ${P("Published lessons",i,"book-open","blue")}
      ${P("Quiz blocks",s,"clipboard-check","teal")}
      ${P("Offline packs",a.offlinePackReady?"Ready":"Not built","download","gold")}

      ${Ot()}
      ${Es()}

      <section class="panel lms-panel simplicity-suite">
        <div class="section-heading"><h3>Simple Classroom Experience</h3><span>Clean by default</span></div>
        ${xa.slice(0,2).map(([o,c])=>`<article class="strength-row">${r("check")}<div><strong>${o}</strong><small>${c}</small></div></article>`).join("")}
      </section>

      <section class="panel lms-panel free-suite">
        <div class="section-heading"><h3>Zero Cost Core</h3><span>No premium paywall</span></div>
        <div class="free-card"><strong>$0</strong><p>Schools can use classroom basics, paperless assignments, messaging, and parent summaries without hidden fees.</p></div>
      </section>

      <section class="panel lms-panel grading-suite">
        <div class="section-heading"><h3>Advanced Grading</h3><span>Automated tests + rubrics + analytics</span></div>
        <div class="assignment-list">
          ${O.map(o=>`
            <article class="assignment-row">
              <div><strong>${o.title}</strong><small>${o.type} • ${o.rubric}</small></div>
              ${ye(o.analytics)}
              <span>${o.analytics}% mastery</span>
            </article>
          `).join("")}
        </div>
      </section>

      ${Ps()}

      <section class="panel lms-panel deadline-suite">
        <div class="section-heading"><h3>Deadline Controls</h3><span>Firm locks + exceptions</span></div>
        ${O.map(o=>`
          <article class="deadline-control">
            <div><strong>${o.title}</strong><small>Locks ${o.lockDate}</small></div>
            <span>${o.exception}</span>
          </article>
        `).join("")}
      </section>

      <section class="panel lms-panel account-suite">
        <div class="section-heading"><h3>Account Context</h3><span>No constant log-outs</span></div>
        <div class="account-switcher">
          ${Ce.map(o=>`<button class="${t.id===o.id?"active":""}" data-lms-account="${o.id}"><strong>${o.name}</strong><span>${o.context}</span></button>`).join("")}
        </div>
        <p class="account-note">Current context: <strong>${t.name}</strong> can switch roles without leaving ${e.name}.</p>
      </section>

      <section class="panel lms-panel workflow-suite">
        <div class="section-heading"><h3>Paperless Assignment Workflow</h3><span>Create to return</span></div>
        <div class="workflow-steps">
          ${["Create","Distribute","Collect","Grade","Return","Archive"].map((o,c)=>`<div><strong>${c+1}</strong><span>${o}</span></div>`).join("")}
        </div>
      </section>

      <section class="panel lms-panel guardrail-suite">
        <div class="section-heading"><h3>Automated Guardrails</h3><span>Submission and quiz controls</span></div>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="lockSubmissions" ${a.guardrails.lockSubmissions?"checked":""} ${V("lms")?"":"disabled"} /><span class="custom-check">${a.guardrails.lockSubmissions?r("check"):""}</span><span>Prevent edits after submission</span></label>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="hideAnswers" ${a.guardrails.hideAnswers?"checked":""} ${V("lms")?"":"disabled"} /><span class="custom-check">${a.guardrails.hideAnswers?r("check"):""}</span><span>Hide answers until quiz closes</span></label>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="parentSummaries" ${a.guardrails.parentSummaries?"checked":""} ${V("lms")?"":"disabled"} /><span class="custom-check">${a.guardrails.parentSummaries?r("check"):""}</span><span>Auto-return parent email summaries</span></label>
        ${ue("lms","LMS guardrails are managed by teachers and administrators.")}
      </section>

      <section class="panel lms-panel offline-suite">
        <div class="section-heading"><h3>Offline Learning</h3><span>${a.offlinePackReady?"Synced for low-connectivity use":"Build a pack for offline work"}</span></div>
        <div class="offline-card">
          <div class="offline-status ${a.offlinePackReady?"ready":""}">${a.offlinePackReady?r("check"):r("download")}</div>
          <div><strong>${a.offlinePackReady?"Offline pack ready":"Offline pack not built"}</strong><p>Includes assignments, rubrics, PDF annotations, and queued submissions for later sync.</p></div>
        </div>
      </section>

      <section class="panel lms-panel privacy-suite">
        <div class="section-heading"><h3>Learning Privacy</h3><span>FERPA-aware LMS</span></div>
        ${Na.map(o=>`<article class="strength-row">${r("shield-check")}<div><strong>${o.label}</strong><small>${o.detail}</small></div></article>`).join("")}
      </section>
    </section>
  `}function Ps(){const e=D.find(t=>t.id===a.selectedSubmissionId)||D[0];return`
    <section class="panel lms-panel gradebook-detail-suite">
      <div class="section-heading"><h3>Gradebook Detail</h3><span>Submissions, rubric, comments</span></div>
      <div class="gradebook-layout">
        <div class="submission-list">
          ${D.map(t=>`
            <button class="submission-row ${e.id===t.id?"active":""}" data-submission="${t.id}">
              ${r(t.status==="Missing"?"alert-triangle":"file-text")}
              <span><strong>${t.student}</strong><small>${t.assignment} • ${t.status}</small></span>
              <em>${t.score}%</em>
            </button>
          `).join("")}
        </div>
        <article class="submission-detail">
          <div class="section-heading"><h4>${e.student}</h4><span>${e.assignment}</span></div>
          ${e.rubric.map(([t,s])=>`<div class="rubric-row"><span>${t}</span>${ye(Math.round(s/4*100))}<strong>${s}/4</strong></div>`).join("")}
          <label><span>Teacher comment</span><textarea id="submission-comment">${p(e.comment)}</textarea></label>
          <button class="primary-action" data-save-submission="${e.id}" ${B("teacher-tools","Only teachers and administrators can save grading comments.")}>${r("check")} Save Comment</button>
        </article>
      </div>
    </section>
  `}function Cs(){const e=$(),t=(e.studentPoints+a.completed.length*75).toLocaleString();return`
    <section class="dashboard-grid student-grid">
      <div class="hero-card student-hero">
        <div>
          <span class="badge soft">${r("star")} ${t} points</span>
          <h2>Welcome back, ${e.studentName}!</h2>
          <p>You are learning inside the ${e.name} instance. Keep going and unlock today's discovery badge.</p>
          <button class="primary-action" data-continue-adventure>${r("play")} Continue Adventure</button>
        </div>
        <div class="orbital-scene" aria-hidden="true"><span class="planet planet-one"></span><span class="planet planet-two"></span><span class="rocket-shape">${r("rocket")}</span></div>
      </div>
      ${P("Daily streak","5 days","trending-up","blue")}
      ${P("Books read","12","book-open","teal")}
      ${Ms()}
      <section class="panel missions-panel">
        <div class="section-heading"><div><p class="eyebrow">Today</p><h3>My Missions</h3></div><button class="text-button" data-action="All available missions are already shown for this learner.">See all ${r("chevron-right")}</button></div>
        <div class="mission-list">
          ${Me.map(s=>{const i=a.completed.includes(s.id);return`
              <article class="mission-card ${s.accent}">
                <div class="mission-icon">${r(s.icon)}</div>
                <div class="mission-main">
                  <div class="mission-meta"><span>${s.subject}</span><span>${s.due}</span></div>
                  <h4>${s.title}</h4>
                  ${ye(i?100:s.progress)}
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
  `}function Es(){const e=Ae();return`
    <section class="panel lms-panel background-services" aria-label="Passive background services">
      <div class="section-heading">
        <div><p class="eyebrow">Passive background layer</p><h3>Background Services</h3></div>
        <span>Runs quietly behind LMS work</span>
      </div>
      <div class="background-service-grid">
        <article class="background-service-card">
          <div>${r("refresh-cw")}<strong>Workspace sync</strong></div>
          <small>${pt.length} connected services attach, collect, archive, and export in the background.</small>
          <span>Passive</span>
        </article>
        <article class="background-service-card">
          <div>${r("paperclip")}<strong>File handling</strong></div>
          <small>${be.length} class files are converted, attached, or archived without interrupting classroom flow.</small>
          <span>Passive</span>
        </article>
        <article class="background-service-card">
          <div>${r("bell")}<strong>Notification routing</strong></div>
          <small>${e} unread alert${e===1?"":"s"} stay in the notification tray unless action is needed.</small>
          <span>Tray</span>
        </article>
        <article class="background-service-card">
          <div>${r("calendar-days")}<strong>Calendar bridge</strong></div>
          <small>${$t.length} shared events inform deadlines and family reminders in the background.</small>
          <span>Synced</span>
        </article>
      </div>
      <details class="background-details">
        <summary>View background service activity</summary>
        <div class="background-activity">
          ${pt.map(t=>`<article><strong>${t.app}</strong><small>${t.action}</small><span>${t.status}</span></article>`).join("")}
          ${de.map(t=>`<article><strong>${t.item}</strong><small>${t.owner}</small><span>${a.offlinePackReady?t.status:"Waiting"}</span></article>`).join("")}
        </div>
      </details>
    </section>
  `}function Ds(){const e=$(),t=a.selectedClass==="All"?I:I.filter(i=>i.name===a.selectedClass),s=a.rosterFilter==="All"?E:E.filter(i=>i.status===a.rosterFilter);return`
    <section class="dashboard-grid teacher-grid">
      <div class="welcome-strip"><div><p class="eyebrow">${e.name} instance</p><h2>Welcome back, Demo Teacher.</h2><p>Build lessons with rich content, quizzes, and media, then publish them directly to your students.</p></div><button class="primary-action" data-new-lesson ${B("teacher-tools","Only teachers and administrators can create lessons.")}>${r("plus")} Create lesson</button></div>
      ${P("Average grade",e.avgGrade,"trending-up","blue")}
      ${P("Attendance",e.attendance,"calendar-days","teal")}
      ${P("Messages",e.messages,"mail","gold")}
      ${As()}
      <section class="panel class-panel">
        <div class="section-heading">
          <h3>Active Classes</h3>
          <select id="class-filter" aria-label="Filter classes"><option>All</option>${I.map(i=>`<option ${a.selectedClass===i.name?"selected":""}>${i.name}</option>`).join("")}</select>
        </div>
        <div class="class-list">${t.map(i=>`<article class="class-card"><div><h4>${i.name}</h4><p>${i.room}</p></div><div class="class-metrics"><span>${i.grade}% grade</span><span>${i.attendance}% attendance</span><span>${i.pending} pending</span></div><button class="icon-button" aria-label="Open ${i.name} options" data-action="${i.name} class tools opened.">${r("more-horizontal")}</button></article>`).join("")}</div>
      </section>
      <section class="panel assignment-composer-panel">
        <div class="section-heading"><h3>Quick Assignment</h3><span>Add a simple graded task</span></div>
        <form id="assignment-form" class="assignment-form">
          <label><span>Title</span><input id="assignment-title" placeholder="Example: Reading Checkpoint" required /></label>
          <label><span>Class</span><select id="assignment-class">${I.map(i=>`<option>${i.name}</option>`).join("")}</select></label>
          <label><span>Type</span><select id="assignment-type"><option>Automated quiz</option><option>Writing task</option><option>Project</option><option>Reading response</option></select></label>
          <label><span>Lock date</span><input id="assignment-lock" value="Next Friday, 8:00 PM" /></label>
          <button class="primary-action" type="submit" ${B("teacher-tools","Only teachers and administrators can create assignments.")}>${r("plus")} Add Assignment</button>
        </form>
      </section>
      <section class="panel activity-panel">
        <div class="section-heading"><h3>Recent Student Activity</h3><button class="icon-button" aria-label="Refresh activity" data-refresh-activity>${r("refresh-cw")}</button></div>
        ${J.map(([i,o,c,g])=>`<article class="activity-row"><div class="avatar">${ae(i)}</div><div><p><strong>${i}</strong> ${o}</p><span>${c} | ${g}</span></div><button class="icon-button" aria-label="Reply to ${i}" data-reply-student="${i}">${r("pen-line")}</button></article>`).join("")}
      </section>
      <section class="panel grading-card"><h3>Grading To-Do</h3>${ye(68)}<p>18 submissions left across 3 classes.</p><button class="secondary-action" data-open-role="lms">${r("clipboard-check")} Open Grading Hub</button></section>
      ${ue("teacher-tools","Teacher tools are read-only for this signed-in role.")}
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
  `}function qs(){const e=$();return`
    <section class="dashboard-grid parent-grid">
      <div class="welcome-strip parent-welcome"><div><p class="eyebrow">${e.learnerName}'s progress</p><h2>Welcome back, ${e.guardianName}.</h2><p>${e.learnerName}'s family view belongs to ${e.name}'s private instance.</p></div><button class="primary-action" data-open-role="messages">${r("send")} Message Teacher</button></div>
      ${P("Current grade","A-","trending-up","blue")}
      ${P("Attendance","98%","calendar-days","teal")}
      ${P("Reading pace","56%","book-open","gold")}
      <section class="panel teacher-note"><div class="teacher-avatar">MH</div><h3>Ms. Henderson</h3><p>"Leo is making great progress in Geometry. Keep practicing the new vocabulary cards at home."</p><button class="secondary-action" data-open-role="messages">${r("message-circle")} Start Chat</button></section>
      <section class="panel deadline-panel">
        <div class="section-heading"><h3>Upcoming Deadlines</h3><button class="text-button" data-open-role="platform">Calendar ${r("chevron-right")}</button></div>
        ${De.map(t=>{const s=a.checkedDeadlines.includes(t.title);return`<label class="deadline-row ${t.urgent?"urgent":""}"><input type="checkbox" data-deadline="${t.title}" ${s?"checked":""} /><span class="custom-check">${s?r("check"):""}</span><span><strong>${t.title}</strong><small>${t.meta}</small></span></label>`}).join("")}
      </section>
      <section class="panel mobile-parent-panel">
        <div class="phone-preview">
          <div class="phone-top">${e.learnerName}</div>
          <strong>${e.name}</strong>
          <span>${a.workHoursOpen?"Teacher chat open":"Teacher chat resumes during work hours"}</span>
          <button data-open-role="messages">${r("send")} Message</button>
        </div>
        <div class="mobile-actions">
          <h3>Mobile Parent Experience</h3>
          ${ja.map(t=>`<article class="mobile-action">${r("smartphone")}<div><strong>${t.title}</strong><small>${t.detail}</small></div></article>`).join("")}
        </div>
      </section>
      <section class="panel subject-panel"><h3>Subject Snapshot</h3>${[["Math",92],["Science",88],["Reading",84],["History",91]].map(([t,s])=>`<div class="subject-row"><span>${t}</span>${ye(s)}<strong>${s}%</strong></div>`).join("")}</section>
    </section>
  `}function Ts(){const e=$(),t=L.filter(i=>i.type===a.conversationFilter),s=L.find(i=>i.id===a.activeConversationId)||t[0]||L[0];return`
    <section class="messages-shell">
      <aside class="conversation-list">
        <div class="segment-control">${["Parents","Groups"].map(i=>`<button class="${a.conversationFilter===i?"active":""}" data-filter="${i}">${i}</button>`).join("")}</div>
        ${t.map(i=>`<button class="conversation ${s.id===i.id?"active":""}" data-conversation="${i.id}"><div class="avatar">${ae(i.name)}</div><div><strong>${i.name}</strong><span>${i.preview}</span></div>${i.unread?`<em>${i.unread}</em>`:""}</button>`).join("")}
        <div class="emergency-card ${a.emergencyOverride?"active":""}">
          ${r("alert-triangle")}
          <div><strong>Emergency Override</strong><span>${a.emergencyOverride?"Administrator enabled for urgent safety communication.":"Available only to school administrators."}</span></div>
          <button class="secondary-action" data-toggle-emergency ${B("emergency","Emergency override is admin-only.")}>${a.emergencyOverride?"Disable":"Enable"}</button>
        </div>
      </aside>
      <section class="chat-panel">
        <header class="chat-header"><div class="avatar">${ae(s.name)}</div><div><h3>${s.name}</h3><p>${s.online?"Online now":s.role}</p></div><div class="chat-tools"><button class="icon-button" aria-label="Start video call" data-start-call="${s.id}">${r("video")}</button><button class="icon-button" aria-label="More chat options" data-action="Chat options opened for ${s.name}.">${r("more-horizontal")}</button></div></header>
        ${a.activeCallName?`<div class="call-banner">${r("video")} <strong>Live call with ${a.activeCallName}</strong><button class="text-button" data-end-call>End call</button></div>`:""}
        <div class="work-hours-banner ${a.workHoursOpen||a.emergencyOverride?"open":"closed"}">
          ${r(a.workHoursOpen||a.emergencyOverride?"check":"x")}
          <div><strong>${a.emergencyOverride?"Emergency override active":a.workHoursOpen?"Communication window open":"After-hours messaging paused"}</strong><span>${e.workHours}. ${a.emergencyOverride?"Urgent administrator-approved messages can be sent now.":a.workHoursOpen?"Parents and teachers can message now.":e.afterHours}</span></div>
          <button class="text-button" data-toggle-hours>${a.workHoursOpen?"Simulate after hours":"Open work hours"}</button>
        </div>
        <div class="chat-stream">${s.messages.map(i=>`<div class="bubble ${i.from==="me"?"mine":""}"><p>${i.text}</p><span>${i.time}</span></div>`).join("")}</div>
        <form class="compose-box ${a.workHoursOpen||a.emergencyOverride?"":"locked"}" id="compose"><input id="message-draft" value="${a.draft}" placeholder="${a.workHoursOpen||a.emergencyOverride?`Message ${s.name}...`:"Messaging resumes during work hours"}" ${a.workHoursOpen||a.emergencyOverride?"":"disabled"} /><button class="primary-action" type="submit" ${a.workHoursOpen||a.emergencyOverride?"":"disabled"}>${r("send")} Send</button></form>
      </section>
    </section>
  `}function xs(){const e=$(),t=F(),s=rs(t);return`
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
          <label class="span-2"><span>Assigned approver</span><select id="board-approver">${t.approvers.map(i=>`<option value="${i.id}" ${s.id===i.id?"selected":""}>${i.name} - ${i.title}</option>`).join("")}</select></label>
          <button class="primary-action span-2" type="submit">${r("send")} Submit for Admin Approval</button>
        </form>
      </section>

      <section class="panel approver-panel">
        <div class="section-heading"><h3>Assigned Post Approvers</h3>${r("shield-check")}</div>
        <div class="approver-list">
          ${t.approvers.map(i=>`
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
          ${t.pending.length?t.pending.map(i=>Ns(i)).join(""):'<div class="empty-state">No posts waiting for approval.</div>'}
        </div>
      </section>

      <section class="panel published-board">
        <div class="section-heading"><h3>Published Community Board</h3><span>${t.published.length} approved</span></div>
        <div class="post-list">
          ${t.published.map(i=>Os(i)).join("")}
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
        ${ue("approve-posts","Only administrators can approve or reject community posts.")}
      </section>

      <section class="panel workflow-rules-panel">
        <div class="section-heading"><h3>Approval Workflow Rules</h3>${r("shield-check")}</div>
        ${Ra.map(([i,o])=>`<article class="rule-row"><strong>${i}</strong><span>${o}</span></article>`).join("")}
      </section>
    </section>
  `}function Ns(e){const t=F();return`
    <article class="board-post pending-post">
      <div class="post-header"><div class="avatar">${ae(e.author)}</div><div><strong>${e.title}</strong><span>${e.author} • ${e.role} • ${e.audience}</span></div></div>
      <p>${e.body}</p>
      <div class="post-media">${r("paperclip")} ${e.media||"No media"}</div>
      <div class="assigned-approver">${r("shield-check")} Assigned to ${ls(t,e.approverId)}</div>
      <div class="approval-actions">
        <button class="secondary-action" data-reject-post="${e.id}" ${B("approve-posts","Only administrators can reject community posts.")}>${r("x")} Reject</button>
        <button class="primary-action" data-approve-post="${e.id}" ${B("approve-posts","Only administrators can approve community posts.")}>${r("check")} Approve</button>
      </div>
    </article>
  `}function Os(e){return`
    <article class="board-post">
      <div class="post-header"><div class="avatar">${ae(e.author)}</div><div><strong>${e.title}</strong><span>${e.author} • ${e.role} • ${e.time}</span></div></div>
      <p>${e.body}</p>
      <div class="post-tags"><span>${e.type}</span><span>${e.audience}</span><span>${e.media||"No media"}</span></div>
    </article>
  `}function Rs(){const e=re(),t=e.schools.length+1,s=`demo-school-${Date.now()}`,i={id:s,name:`Demo Learning Academy ${t}`,category:"Public",students:240+t*18,staff:32+t,status:"Onboarding",subdomain:`demoacademy${t}`,plan:"District Core",modules:["SIS","LMS","Messaging","Family Portal"],storage:18,uptime:"Provisioning",theme:"Discovery Blue",isolation:"Dedicated tenant database",avgGrade:"89.0%",attendance:"95.0%",messages:"0 pending",studentPoints:760,studentName:"Explorer",guardianName:"Jordan",learnerName:"Riley",workHours:"Mon-Fri, 8:00 AM-4:00 PM",afterHours:"Messages are queued until office hours"};e.schools.push(i),a.selectedSchool=s,y("Created demo school tenant",e.name),a.toast=`${i.name} was added to ${e.name}.`,h()}function js(){const e=`Quick Check ${O.length+1}`;jt({title:e,className:a.selectedClass==="All"?"All classes":a.selectedClass,type:"Teacher-created assignment",lockDate:"Next Friday, 8:00 PM"}),K("lms",`${e} was created in the LMS grading suite.`)}function jt({title:e,className:t,type:s,lockDate:i}){const o=`${e.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${Date.now()}`;O.unshift({id:o,title:e,type:s,rubric:"Auto rubric draft",analytics:0,lockDate:i||"Next Friday, 8:00 PM",exception:"None"});const c=E.find(g=>t==="All classes"||g.className===t)||E[0];c&&(D.unshift({id:`sub-${Date.now()}`,student:c.student,assignment:e,status:"Needs review",score:0,rubric:[["Completion",0],["Accuracy",0],["Explanation",0]],comment:"New assignment created. Awaiting student work."}),a.selectedSubmissionId=D[0].id),G("Action",`${e} is ready to publish`,t,"Teacher inbox"),T("LMS",`${e} created`,`${s} assigned to ${t}.`),y(`Created assignment ${e}`,$().name)}function ft(e=""){const t=A.find(s=>s.id===e);a.lessonDraft=qt(t),a.lessonBuilderOpen=!0,a.role!=="teacher"?K("teacher",t?`${t.title} opened in Lesson Studio.`:"Lesson Studio opened."):h()}function Fs(e){var c,g;const t=a.lessonDraft;if(!((c=t==null?void 0:t.title)!=null&&c.trim())||!((g=t==null?void 0:t.summary)!=null&&g.trim())){b("Add a lesson title and learning objective before saving.");return}if(!t.blocks.length){b("Add at least one content, media, or quiz block.");return}if(t.blocks.find(u=>{var C;return u.type==="quiz"&&(!u.question.trim()||(u.questionType==="Short answer"?!((C=u.options[0])!=null&&C.trim()):u.options.filter(w=>w.trim()).length<2))})){b("Each quiz needs a question and at least two answer choices.");return}const i=structuredClone(t);i.id||(i.id=`lesson-${i.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}-${Date.now()}`),i.status=e,i.visibility=e==="Published"&&i.visibility==="Teacher only"?"Students":i.visibility,i.updatedAt="Just now";const o=A.findIndex(u=>u.id===i.id);o>=0?A.splice(o,1,i):A.unshift(i),a.lessonDraft=null,a.lessonBuilderOpen=!1,a.activeStudentLessonId=e==="Published"?i.id:a.activeStudentLessonId,T("LMS",`${i.title} ${e==="Published"?"published":"saved"}`,`${i.blocks.length} lesson blocks for ${i.className}.`),G(e==="Published"?"FYI":"Action",`${i.title} ${e==="Published"?"is available to students":"saved as a draft"}`,i.className,"Lesson Studio"),y(`${e==="Published"?"Published":"Saved draft lesson"} ${i.title}`,i.className),b(`${i.title} ${e==="Published"?"published to students":"saved as a draft"}.`)}function Is(e){const t=A.find(s=>s.id===e);t&&(t.status=t.status==="Published"?"Draft":"Published",t.visibility=t.status==="Published"&&t.visibility==="Teacher only"?"Students":t.visibility,t.updatedAt="Just now",y(`${t.status==="Published"?"Published":"Unpublished"} lesson ${t.title}`,t.className),b(`${t.title} is now ${t.status.toLowerCase()}.`))}function zs(e,t){const s=A.find(w=>w.id===e&&w.status==="Published");if(!s)return;const i=s.blocks.filter(w=>w.type==="quiz"),o={};let c=0,g=0;const u=new FormData(t);i.forEach(w=>{const R=u.get(`quiz-${w.id}`),N=w.questionType==="Short answer"?String(R||"").trim():R===null?-1:Number(R),q=w.questionType==="Short answer"?N.toLowerCase()===String(w.options[0]||"").trim().toLowerCase():N===Number(w.correctAnswer);o[w.id]={selected:N,correct:q},g+=Number(w.points)||0,q&&(c+=Number(w.points)||0)});const C=g?Math.round(c/g*100):100;a.lessonProgress||(a.lessonProgress={}),a.lessonProgress[s.id]={completed:!0,score:C,earned:c,available:g,answers:o,submittedAt:"Just now"},J.unshift([z().label,`completed ${s.title} with ${C}%`,"Just now",s.className]),T("LMS",`${z().label} completed a lesson`,`${s.title}: ${C}% quiz score.`),b(`${s.title} completed with a ${C}% quiz score.`)}function Bs(){const e=Me.find(t=>!a.completed.includes(t.id));if(!e){b("All missions are complete. Reset the demo or wait for the next adventure.");return}a.completed.includes(e.id)||a.completed.push(e.id),b(`${e.title} marked complete. Points updated.`)}function Gs(){J.unshift(["Demo Student","opened the newest assignment","Just now",a.selectedClass==="All"?"All Classes":a.selectedClass]),b("Student activity refreshed.")}function Hs(e){a.conversationFilter="Groups",a.activeConversationId="grade-team",a.draft=`Following up about ${e}'s recent activity.`,K("messages",`Reply draft started for ${e}.`)}function Us(){var e;(e=document.querySelector("#landing-login-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const s=document.querySelector("#landing-identifier").value.trim(),i=document.querySelector("#landing-password").value,o=s.toLowerCase(),c=x.find(g=>[g.id,g.email,g.username,g.label].filter(Boolean).some(u=>String(u).toLowerCase()===o));if(ce="",!ge()){c?gt(c):(ce="We could not find that school account.",h());return}me=!0,h();try{const g=await Wa(s,i);localStorage.setItem("educonnect-session-token",g.token),a.apiMode="live-api",await Et("live-api").catch(()=>{}),me=!1,gt(g.user,"Securely signed in as")}catch(g){localStorage.removeItem("educonnect-session-token"),me=!1,ce=g.message||"Invalid credentials.",h()}})}function _s(){var e,t,s,i,o,c,g,u,C,w,R,N,q,Q,pe,Ne,Oe,Re,je,Fe,Ie,ze,Be,Ge,He,Ue,_e,We,Ve,Je,Ye,Qe,Ke,Ze,Xe,et,tt,at,st,nt,it,ot,rt,lt,ct,dt;document.querySelectorAll("[data-role]").forEach(n=>{n.addEventListener("click",l=>{l.preventDefault(),ve(n.dataset.role)})}),(e=document.querySelector("[data-reset-demo]"))==null||e.addEventListener("click",()=>{Za(),a.currentUser=M.id,ve(M.landing)}),(t=document.querySelector("[data-sign-out]"))==null||t.addEventListener("click",as),(s=document.querySelector("#global-search"))==null||s.addEventListener("input",n=>{a.searchTerm=n.target.value,h()}),(i=document.querySelector("[data-clear-search]"))==null||i.addEventListener("click",()=>{a.searchTerm="",h()}),document.querySelectorAll("[data-open-role]").forEach(n=>{n.addEventListener("click",()=>{var l;a.searchTerm="",K(n.dataset.openRole,`${((l=se.find(d=>d.id===n.dataset.openRole))==null?void 0:l.label)||"Workspace"} opened.`)})}),(o=document.querySelector("[data-role-controls]"))==null||o.addEventListener("click",()=>{K("state-admin","Role Control Center opened."),requestAnimationFrame(()=>{var n;return(n=document.querySelector("#role-control-center"))==null?void 0:n.scrollIntoView({behavior:"smooth",block:"start"})})}),(c=document.querySelector("[data-start-tour]"))==null||c.addEventListener("click",()=>{a.tourOpen=!0,a.tourStep=0,K(Z[0].role,"Walkthrough started.")}),(g=document.querySelector("[data-tour-next]"))==null||g.addEventListener("click",()=>{if(a.tourStep>=Z.length-1){a.tourOpen=!1,b("Walkthrough complete.");return}a.tourStep+=1,K(Z[a.tourStep].role)}),(u=document.querySelector("[data-tour-prev]"))==null||u.addEventListener("click",()=>{a.tourStep!==0&&(a.tourStep-=1,K(Z[a.tourStep].role))}),document.querySelectorAll("[data-action]").forEach(n=>{n.addEventListener("click",()=>b(n.dataset.action))}),(C=document.querySelector("[data-dismiss-toast]"))==null||C.addEventListener("click",()=>{a.toast="",h()}),(w=document.querySelector("[data-toggle-notifications]"))==null||w.addEventListener("click",()=>{a.notificationsOpen=!a.notificationsOpen,a.settingsOpen=!1,h()}),(R=document.querySelector("[data-toggle-settings]"))==null||R.addEventListener("click",()=>{a.settingsOpen=!a.settingsOpen,a.notificationsOpen=!1,h()}),document.querySelectorAll("[data-close-panel]").forEach(n=>{n.addEventListener("click",()=>{a.notificationsOpen=!1,a.settingsOpen=!1,h()})}),(N=document.querySelector("[data-mark-notifications]"))==null||N.addEventListener("click",()=>{j.forEach(n=>{n.read=!0}),b("All notifications marked read.")}),document.querySelectorAll("[data-dismiss-notification]").forEach(n=>{n.addEventListener("click",()=>{const l=j.findIndex(d=>d.id===n.dataset.dismissNotification);l>=0&&j.splice(l,1),h()})}),document.querySelectorAll("[data-simulate-live]").forEach(n=>{n.addEventListener("click",()=>Tt("manual"))}),(q=document.querySelector("[data-toggle-live]"))==null||q.addEventListener("change",n=>{a.liveUpdates=n.target.checked,b(a.liveUpdates?"Realtime updates enabled.":"Realtime updates paused.")}),(Q=document.querySelector("#auth-provider"))==null||Q.addEventListener("change",n=>{a.authProvider=n.target.value,y(`Updated auth provider to ${a.authProvider}`),b(`${a.authProvider} selected.`)}),(pe=document.querySelector("#backend-provider"))==null||pe.addEventListener("change",n=>{a.backendProvider=n.target.value,y(`Updated backend provider to ${a.backendProvider}`),b(`${a.backendProvider} selected as backend provider.`)}),document.querySelectorAll("[data-set-gateway]").forEach(n=>{n.addEventListener("click",()=>{a.gatewayMode=n.dataset.setGateway,T("Production","Gateway mode updated",`Launch gateway is now ${a.gatewayMode}.`),b(a.gatewayMode==="backend"?"Backend-ready mode enabled.":"Demo mode enabled.")})}),(Ne=document.querySelector("[data-provision-schema]"))==null||Ne.addEventListener("click",()=>{ie.forEach(n=>{n.status="Ready"}),T("Database","Mock schema provisioned",`${ie.length} production tables marked ready.`),y("Provisioned mock production schema"),b("Database blueprint marked ready.")}),document.querySelectorAll("[data-onboarding-task]").forEach(n=>{n.addEventListener("change",()=>{const l=X.find(d=>d.id===n.dataset.onboardingTask);l&&(l.done=n.checked,y(`${l.done?"Completed":"Reopened"} onboarding task: ${l.label}`),b("Onboarding checklist updated."))})}),(Oe=document.querySelector("#onboarding-user-form"))==null||Oe.addEventListener("submit",n=>{n.preventDefault();const l=document.querySelector("#onboarding-user-name").value.trim(),d=document.querySelector("#onboarding-user-role").value;if(!l)return;const m=d==="Admin"?"school-admin":d.toLowerCase();x.push({id:`${d.toLowerCase()}-${Date.now()}`,label:l,role:d,landing:m,permissions:d==="Admin"?["manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]:d==="Teacher"?["lms","teacher-tools","message","submit-post"]:d==="Parent"?["message","submit-post"]:["student-missions"]}),G("Action",`${l} invited`,$().name,"Onboarding"),y(`Invited ${d}: ${l}`),b(`${l} invited as ${d}.`)}),(Re=document.querySelector("#production-file-upload"))==null||Re.addEventListener("change",async n=>{var d;const l=Array.from(n.target.files||[]);for(const m of l)if(a.apiMode==="live-api")try{const S=await Ja(m,a.role==="community"?"Community":"LMS");W.unshift(S.file)}catch{W.unshift({id:`upload-${Date.now()}-${Math.random().toString(16).slice(2)}`,name:m.name,area:a.role==="community"?"Community":"LMS",size:`${Math.max(1,Math.round(m.size/1024))} KB`,status:"Server upload failed; metadata stored locally"})}else W.unshift({id:`upload-${Date.now()}-${Math.random().toString(16).slice(2)}`,name:m.name,area:a.role==="community"?"Community":"LMS",size:`${Math.max(1,Math.round(m.size/1024))} KB`,status:"Stored in demo metadata; ready for cloud storage"});T("Files","Upload metadata captured",`${((d=n.target.files)==null?void 0:d.length)||0} file(s) added to production upload queue.`),y("Added production upload metadata"),b("File upload metadata added.")}),(je=document.querySelector("[data-send-delivery-test]"))==null||je.addEventListener("click",async()=>{if(a.apiMode==="live-api")try{(await Ya("Launch test group")).records.forEach(l=>ee.unshift(l))}catch{["Email","SMS","Push"].forEach(n=>{ee.unshift({id:`delivery-${Date.now()}-${n}`,channel:n,audience:"Launch test group",status:"Failed over locally",detail:`${n} test could not reach operational API`})})}else["Email","SMS","Push"].forEach(n=>{ee.unshift({id:`delivery-${Date.now()}-${n}`,channel:n,audience:"Launch test group",status:"Delivered",detail:`${n} test generated from Launch Control`})});G("FYI","Notification delivery test completed",$().name,"Launch Control"),y("Sent notification delivery test batch"),b("Notification delivery test completed.")}),document.querySelectorAll("[data-security-check]").forEach(n=>{n.addEventListener("change",()=>{const l=te.find(d=>d.id===n.dataset.securityCheck);l&&(l.done=n.checked,l.status=l.done?"Configured":"Needs review",y(`Updated security checklist: ${l.label}`),b("Security checklist updated."))})}),document.querySelectorAll("[data-toggle-setting]").forEach(n=>{n.addEventListener("change",()=>{a[n.dataset.toggleSetting]=n.checked,h()})}),(Fe=document.querySelector("[data-export-demo]"))==null||Fe.addEventListener("click",async()=>{const n=JSON.stringify(Ct(),null,2),l=new Blob([n],{type:"application/json"}),d=URL.createObjectURL(l),m=document.createElement("a");m.href=d,m.download="educonnect-demo-state.json",m.click(),URL.revokeObjectURL(d),y("Exported demo state JSON");try{await navigator.clipboard.writeText(n),b("Demo state exported and copied to clipboard.")}catch{b("Demo state exported as a JSON file.")}}),(Ie=document.querySelector("#import-demo-state"))==null||Ie.addEventListener("change",async n=>{var d;const l=(d=n.target.files)==null?void 0:d[0];if(l)try{const m=JSON.parse(await l.text()),S=ss(m);if(S.length){b(`Import failed: ${S.join(" ")}`);return}qe(m),y("Imported demo state JSON"),b("Demo state imported.")}catch{b("That JSON file could not be imported.")}}),(ze=document.querySelector("[data-add-school]"))==null||ze.addEventListener("click",Rs),(Be=document.querySelector("[data-create-assignment]"))==null||Be.addEventListener("click",js),(Ge=document.querySelector("#assignment-form"))==null||Ge.addEventListener("submit",n=>{n.preventDefault();const l=document.querySelector("#assignment-title").value.trim();if(!l)return;const d=document.querySelector("#assignment-class").value;jt({title:l,className:d,type:document.querySelector("#assignment-type").value,lockDate:document.querySelector("#assignment-lock").value.trim()}),b(`${l} added to ${d}.`)}),document.querySelectorAll("[data-new-lesson]").forEach(n=>n.addEventListener("click",()=>ft())),(He=document.querySelector("[data-close-lesson-builder]"))==null||He.addEventListener("click",()=>{a.lessonBuilderOpen=!1,a.lessonDraft=null,h()}),(Ue=document.querySelector("#lesson-filter"))==null||Ue.addEventListener("change",n=>{a.lessonFilter=n.target.value,h()}),document.querySelectorAll("[data-edit-lesson]").forEach(n=>n.addEventListener("click",()=>ft(n.dataset.editLesson))),document.querySelectorAll("[data-toggle-lesson]").forEach(n=>n.addEventListener("click",()=>Is(n.dataset.toggleLesson))),document.querySelectorAll("[data-preview-lesson]").forEach(n=>n.addEventListener("click",()=>{a.lessonPreviewId=n.dataset.previewLesson,h(),requestAnimationFrame(()=>{var l;return(l=document.querySelector(".lesson-preview-panel"))==null?void 0:l.scrollIntoView({behavior:"smooth",block:"center"})})})),(_e=document.querySelector("[data-close-lesson-preview]"))==null||_e.addEventListener("click",()=>{a.lessonPreviewId="",h()}),document.querySelectorAll("[data-lesson-field]").forEach(n=>{n.addEventListener("change",()=>{if(!a.lessonDraft)return;const l=n.dataset.lessonField;a.lessonDraft[l]=n.type==="checkbox"?n.checked:n.type==="number"?Number(n.value):n.value}),n.addEventListener("input",()=>{!a.lessonDraft||["checkbox","number"].includes(n.type)||(a.lessonDraft[n.dataset.lessonField]=n.value)})}),document.querySelectorAll("[data-block-field]").forEach(n=>{const l=()=>{var le;const[d,m]=n.dataset.blockField.split(":"),S=(le=a.lessonDraft)==null?void 0:le.blocks.find(Ft=>Ft.id===d);S&&(S[m]=n.type==="checkbox"?n.checked:n.type==="number"?Number(n.value):n.value,m==="questionType"&&n.value==="True or false"&&(S.options=["True","False","",""],S.correctAnswer=0,h()),m==="questionType"&&n.value==="Short answer"&&(S.options=["","","",""],S.correctAnswer=0,h()))};n.addEventListener("change",l),n.addEventListener("input",l)}),document.querySelectorAll("[data-quiz-option]").forEach(n=>n.addEventListener("input",()=>{var S;const[l,d]=n.dataset.quizOption.split(":"),m=(S=a.lessonDraft)==null?void 0:S.blocks.find(le=>le.id===l);m&&(m.options[Number(d)]=n.value)})),document.querySelectorAll("[data-correct-answer]").forEach(n=>n.addEventListener("change",()=>{var d;const l=(d=a.lessonDraft)==null?void 0:d.blocks.find(m=>m.id===n.dataset.correctAnswer);l&&(l.correctAnswer=Number(n.value))})),document.querySelectorAll("[data-add-lesson-block]").forEach(n=>n.addEventListener("click",()=>{var l;(l=a.lessonDraft)==null||l.blocks.push(Dt(n.dataset.addLessonBlock,a.lessonDraft.blocks.length)),h()})),document.querySelectorAll("[data-remove-lesson-block]").forEach(n=>n.addEventListener("click",()=>{if(!a.lessonDraft||a.lessonDraft.blocks.length===1){b("A lesson must keep at least one block.");return}a.lessonDraft.blocks=a.lessonDraft.blocks.filter(l=>l.id!==n.dataset.removeLessonBlock),h()})),document.querySelectorAll("[data-move-lesson-block]").forEach(n=>n.addEventListener("click",()=>{if(!a.lessonDraft)return;const[l,d]=n.dataset.moveLessonBlock.split(":"),m=a.lessonDraft.blocks.findIndex(le=>le.id===l),S=d==="up"?m-1:m+1;m<0||S<0||S>=a.lessonDraft.blocks.length||([a.lessonDraft.blocks[m],a.lessonDraft.blocks[S]]=[a.lessonDraft.blocks[S],a.lessonDraft.blocks[m]],h())})),(We=document.querySelector("#lesson-builder-form"))==null||We.addEventListener("submit",n=>{var l;n.preventDefault(),Fs(((l=n.submitter)==null?void 0:l.dataset.lessonStatus)||"Draft")}),document.querySelectorAll("[data-open-student-lesson]").forEach(n=>n.addEventListener("click",()=>{a.activeStudentLessonId=n.dataset.openStudentLesson,h()})),(Ve=document.querySelector("[data-submit-lesson]"))==null||Ve.addEventListener("submit",n=>{n.preventDefault(),zs(n.currentTarget.dataset.submitLesson,n.currentTarget)}),(Je=document.querySelector("[data-continue-adventure]"))==null||Je.addEventListener("click",Bs),(Ye=document.querySelector("[data-refresh-activity]"))==null||Ye.addEventListener("click",Gs),document.querySelectorAll("[data-reply-student]").forEach(n=>{n.addEventListener("click",()=>Hs(n.dataset.replyStudent))}),document.querySelectorAll("[data-guardrail]").forEach(n=>{n.addEventListener("change",()=>{a.guardrails[n.dataset.guardrail]=n.checked,y(`Updated guardrail ${n.dataset.guardrail}`),b("Guardrail setting updated.")})}),document.querySelectorAll("[data-profile-permission]").forEach(n=>{n.addEventListener("change",()=>{const[l,d]=n.dataset.profilePermission.split(":"),m=x.find(S=>S.id===l);m&&(m.permissions=n.checked?[...new Set([...m.permissions,d])]:m.permissions.filter(S=>S!==d),y(`Updated ${m.role} permission: ${d}`),b(`${m.role} permissions updated.`))})}),document.querySelectorAll("[data-submission]").forEach(n=>{n.addEventListener("click",()=>{a.selectedSubmissionId=n.dataset.submission,h()})}),document.querySelectorAll("[data-save-submission]").forEach(n=>{n.addEventListener("click",()=>{const l=D.find(d=>d.id===n.dataset.saveSubmission);l&&(l.comment=document.querySelector("#submission-comment").value.trim(),l.status="Reviewed",y(`Saved gradebook comment for ${l.student}`,l.assignment),b("Gradebook comment saved."))})}),document.querySelectorAll("[data-complete]").forEach(n=>{n.addEventListener("click",()=>{const l=Number(n.dataset.complete);a.completed.includes(l)||a.completed.push(l);const d=Me.find(m=>m.id===l);b(`${(d==null?void 0:d.title)||"Mission"} marked complete.`)})}),(Qe=document.querySelector("#class-filter"))==null||Qe.addEventListener("change",n=>{a.selectedClass=n.target.value,h()}),(Ke=document.querySelector("#roster-filter"))==null||Ke.addEventListener("change",n=>{a.rosterFilter=n.target.value,h()}),document.querySelectorAll("[data-roster-grade], [data-roster-attendance], [data-roster-status]").forEach(n=>{n.addEventListener("change",()=>{const l=n.dataset.rosterGrade||n.dataset.rosterAttendance||n.dataset.rosterStatus,d=E.find(m=>m.id===l);d&&(n.dataset.rosterGrade&&(d.grade=Math.max(0,Math.min(100,Number(n.value)||0))),n.dataset.rosterAttendance&&(d.attendance=Math.max(0,Math.min(100,Number(n.value)||0))),n.dataset.rosterStatus&&(d.status=n.value),T("Roster",`${d.student} record updated`,`Grade ${d.grade}%, attendance ${d.attendance}%, status ${d.status}.`),y(`Updated roster record for ${d.student}`,d.className),b(`${d.student}'s roster record updated.`))})}),document.querySelectorAll("[data-lms-account]").forEach(n=>{n.addEventListener("click",()=>{a.activeAccount=n.dataset.lmsAccount,h()})}),(Ze=document.querySelector("[data-build-offline]"))==null||Ze.addEventListener("click",()=>{a.offlinePackReady=!0,de.forEach(n=>{n.status=n.status.replace("Waiting for pack","Queued for upload")}),b("Offline pack built and sync queue prepared.")}),(Xe=document.querySelector("#state-filter"))==null||Xe.addEventListener("change",n=>{a.selectedState=n.target.value;const l=$e();a.selectedDistrict=l.districts[0].id,a.selectedSchool=l.districts[0].schools[0].id,h()}),(et=document.querySelector("#district-filter"))==null||et.addEventListener("change",n=>{a.selectedDistrict=n.target.value,a.selectedSchool=re().schools[0].id,h()}),(tt=document.querySelector("#school-filter"))==null||tt.addEventListener("change",n=>{a.selectedSchool=n.target.value,h()}),(at=document.querySelector("#design-form"))==null||at.addEventListener("change",()=>{bt(),h()}),(st=document.querySelector("#design-form"))==null||st.addEventListener("submit",n=>{n.preventDefault(),bt(),h()}),document.querySelectorAll("[data-design-preset]").forEach(n=>{n.addEventListener("click",()=>{const l=$(),d=Fa.find(m=>m.name===n.dataset.designPreset);d&&(U[l.id]={...Te(),...d},h())})}),document.querySelectorAll("[data-manage-district]").forEach(n=>{n.addEventListener("click",()=>{a.selectedDistrict=n.dataset.manageDistrict,a.selectedSchool=re().schools[0].id,h()})}),document.querySelectorAll("[data-manage-school]").forEach(n=>{n.addEventListener("click",()=>{a.selectedSchool=n.dataset.manageSchool,h()})}),document.querySelectorAll("[data-deadline]").forEach(n=>{n.addEventListener("change",()=>{const l=n.dataset.deadline;a.checkedDeadlines=a.checkedDeadlines.includes(l)?a.checkedDeadlines.filter(d=>d!==l):[...a.checkedDeadlines,l],h()})}),document.querySelectorAll("[data-filter]").forEach(n=>{n.addEventListener("click",()=>{a.conversationFilter=n.dataset.filter;const l=L.find(d=>d.type===a.conversationFilter);l&&(a.activeConversationId=l.id),h()})}),document.querySelectorAll("[data-conversation]").forEach(n=>{n.addEventListener("click",()=>{a.activeConversationId=n.dataset.conversation;const l=L.find(d=>d.id===a.activeConversationId);l&&(l.unread=0),h()})}),(nt=document.querySelector("#message-draft"))==null||nt.addEventListener("input",n=>{a.draft=n.target.value}),(it=document.querySelector("[data-toggle-hours]"))==null||it.addEventListener("click",()=>{a.workHoursOpen=!a.workHoursOpen,h()}),(ot=document.querySelector("[data-toggle-emergency]"))==null||ot.addEventListener("click",()=>{a.emergencyOverride=!a.emergencyOverride,y(`${a.emergencyOverride?"Enabled":"Disabled"} emergency override`),h()}),document.querySelectorAll("[data-start-call]").forEach(n=>{n.addEventListener("click",()=>{const l=L.find(d=>d.id===n.dataset.startCall);l&&(a.activeCallName=l.name,T("Messages",`Live call started with ${l.name}`,"Video room is active in the communication hub."),y(`Started video call with ${l.name}`,$().name),b(`Video call started with ${l.name}.`))})}),(rt=document.querySelector("[data-end-call]"))==null||rt.addEventListener("click",()=>{const n=a.activeCallName;a.activeCallName="",n&&T("Messages",`Live call ended with ${n}`,"Call state closed."),b("Video call ended.")}),(lt=document.querySelector("#compose"))==null||lt.addEventListener("submit",n=>{if(n.preventDefault(),!a.workHoursOpen&&!a.emergencyOverride)return;const l=a.draft.trim();l&&(L.splice(0,L.length,...L.map(d=>d.id===a.activeConversationId?{...d,preview:l,messages:[...d.messages,{from:"me",text:l,time:"Now"}]}:d)),T("Messages","Message sent",`Delivered to ${z().label}'s active conversation.`),G("FYI","Message delivered",$().name,"Messages"),a.draft="",h())}),(ct=document.querySelector("#board-form"))==null||ct.addEventListener("submit",n=>{n.preventDefault();const l=$();F().pending.unshift({id:`${l.id}-${Date.now()}`,author:document.querySelector("#board-author").value.trim()||"Community Member",role:document.querySelector("#board-role").value,type:document.querySelector("#board-type").value,audience:document.querySelector("#board-audience").value,title:document.querySelector("#board-title").value.trim(),body:document.querySelector("#board-body").value.trim(),media:document.querySelector("#board-media").value.trim()||"No media",approverId:document.querySelector("#board-approver").value,time:"Awaiting administrator approval"}),T("Community","Community post submitted",`${document.querySelector("#board-title").value.trim()} is waiting for approval.`),G("Action","Community post awaiting approval",l.name,"Approval queue"),y("Submitted community post for approval",l.name),b("Post submitted for administrator approval.")}),document.querySelectorAll("[data-approver-toggle]").forEach(n=>{n.addEventListener("change",()=>{const l=F();l.approvers=l.approvers.map(d=>d.id===n.dataset.approverToggle?{...d,active:n.checked}:d),h()})}),(dt=document.querySelector("#approver-form"))==null||dt.addEventListener("submit",n=>{n.preventDefault();const l=F(),d=document.querySelector("#new-approver-name").value.trim();d&&(l.approvers.push({id:`${d.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${Date.now()}`,name:d,title:document.querySelector("#new-approver-title").value,active:!0}),h())}),document.querySelectorAll("[data-approve-post]").forEach(n=>{n.addEventListener("click",()=>{const l=F(),d=l.pending.find(m=>m.id===n.dataset.approvePost);d&&(l.pending=l.pending.filter(m=>m.id!==d.id),l.published.unshift({...d,time:"Approved just now"}),y(`Approved community post: ${d.title}`),h())})}),document.querySelectorAll("[data-reject-post]").forEach(n=>{n.addEventListener("click",()=>{const l=F(),d=l.pending.find(m=>m.id===n.dataset.rejectPost);l.pending=l.pending.filter(m=>m.id!==n.dataset.rejectPost),d&&y(`Rejected community post: ${d.title}`),h()})})}async function Ws(){if(Qa(),ge()&&(a.apiMode="live-api",localStorage.getItem("educonnect-session-token")))try{const e=await Va();M={...x.find(s=>s.id===e.user.id),...e.user},a.currentUser=M.id}catch{localStorage.removeItem("educonnect-session-token")}if(M&&(a.apiMode==="mock-api"||a.apiMode==="live-api"))try{await Et(a.apiMode)}catch{ge()||(a.apiMode="local",a.toast="Server API unavailable. Local demo state mode enabled.")}if(M){const e=vt();a.role=e&&oe().includes(e)?e:M.landing}window.addEventListener("hashchange",()=>{if(!M)return;const e=vt();e&&e!==a.role&&ve(e,!1)}),window.addEventListener("load",Ee),h(),window.setInterval(()=>{!M||!a.liveUpdates||document.hidden||Tt("automatic")},15e3)}Ws();
