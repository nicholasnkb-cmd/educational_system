(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const g of u.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&i(g)}).observe(document,{childList:!0,subtree:!0});function s(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(o){if(o.ep)return;o.ep=!0;const u=s(o);fetch(o.href,u)}})();/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=(e,t,s=[])=>{const i=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(o=>{i.setAttribute(o,String(t[o]))}),s.length&&s.forEach(o=>{const u=Wt(...o);i.appendChild(u)}),i};var da=([e,t,s])=>Wt(e,t,s);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=e=>Array.from(e.attributes).reduce((t,s)=>(t[s.name]=s.value,t),{}),pa=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",ma=e=>e.flatMap(pa).map(s=>s.trim()).filter(Boolean).filter((s,i,o)=>o.indexOf(s)===i).join(" "),ha=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,s,i)=>s.toUpperCase()+i.toLowerCase()),Nt=(e,{nameAttr:t,icons:s,attrs:i})=>{var R;const o=e.getAttribute(t);if(o==null)return;const u=ha(o),g=s[u];if(!g)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const p=ua(e),[A,D,N]=g,F={...D,"data-lucide":o,...i,...p},k=ma(["lucide",`lucide-${o}`,p,i]);k&&Object.assign(F,{class:k});const G=da([A,F,N]);return(R=e.parentNode)==null?void 0:R.replaceChild(G,e)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=["svg",$,[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=["svg",$,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=["svg",$,[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=["svg",$,[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=["svg",$,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=["svg",$,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=["svg",$,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=["svg",$,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=["svg",$,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=["svg",$,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=["svg",$,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=["svg",$,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=["svg",$,[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=["svg",$,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=["svg",$,[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=["svg",$,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=["svg",$,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=["svg",$,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=["svg",$,[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=["svg",$,[["path",{d:"m3 11 18-5v12L3 14v-3z"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=["svg",$,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=["svg",$,[["path",{d:"M13.234 20.252 21 12.3"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=["svg",$,[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=["svg",$,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=["svg",$,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=["svg",$,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=["svg",$,[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=["svg",$,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=["svg",$,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=["svg",$,[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=["svg",$,[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=["svg",$,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=["svg",$,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=["svg",$,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=["svg",$,[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=["svg",$,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=["svg",$,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=["svg",$,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=["svg",$,[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=["svg",$,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=({icons:e={},nameAttr:t="data-lucide",attrs:s={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const i=document.querySelectorAll(`[${t}]`);if(Array.from(i).forEach(o=>Nt(o,{nameAttr:t,icons:e,attrs:s})),t==="data-lucide"){const o=document.querySelectorAll("[icon-name]");o.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(o).forEach(u=>Nt(u,{nameAttr:"icon-name",icons:e,attrs:s})))}},fe=[{id:"state-admin",label:"State Admin",icon:"map",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"district-admin",label:"District Admin",icon:"building-2",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"school-admin",label:"School Admin",icon:"shield-check",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"lms",label:"LMS",icon:"layers",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"student",label:"Student",icon:"sparkles",image:"/stitch_educonnect_interactive_portal/student_portal_1/screen.png"},{id:"teacher",label:"Teacher",icon:"graduation-cap",image:"/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png"},{id:"parent",label:"Parent",icon:"users",image:"/stitch_educonnect_interactive_portal/parent_dashboard/screen.png"},{id:"messages",label:"Messages",icon:"message-circle",image:"/stitch_educonnect_interactive_portal/communication_hub/screen.png"},{id:"community",label:"Community",icon:"megaphone",image:"/stitch_educonnect_interactive_portal/communication_hub/screen.png"}],a={role:"state-admin",selectedState:"ny",selectedDistrict:"nyc-doe",selectedSchool:"ps-118",completed:[],selectedClass:"All",checkedDeadlines:["Science: Water Cycle Model"],conversationFilter:"Parents",activeConversationId:"sarah",draft:"",boardAudience:"All families",activeAccount:"teacher-school",selectedSubmissionId:"sub-1",rosterFilter:"All",liveUpdates:!0,realtimeTick:0,activeCallName:"",gatewayMode:"demo",backendProvider:"Supabase",authProvider:"Role-based demo auth",offlinePackReady:!1,workHoursOpen:!0,emergencyOverride:!1,currentUser:"state-admin",apiMode:"local",tourOpen:!1,tourStep:0,searchTerm:"",notificationsOpen:!1,settingsOpen:!1,toast:"",compactMode:!1,highContrast:!1,guardrails:{lockSubmissions:!0,hideAnswers:!0,parentSummaries:!0},lessonBuilderOpen:!1,lessonDraft:null,lessonFilter:"All",lessonPreviewId:"",activeStudentLessonId:"lesson-moon-phases",lessonProgress:{},activeAssignmentId:"essay",assignmentFilter:"All",studentNotes:{},bookmarkedLessons:[],fontScale:"Normal",dyslexiaFriendly:!1,reducedMotion:!1,language:"English",notificationPreferences:{email:!0,sms:!1,push:!0,dueDays:2,missingWork:!0,gradeReturned:!0},impersonatingFrom:""},z=[{id:"global-admin",label:"Global Test Admin",role:"Global Admin",landing:"state-admin",scope:"state",stateId:"ny",permissions:["global-access","manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance","submit-post","student-missions"]},{id:"state-admin",label:"NYS State Admin",role:"State Admin",landing:"state-admin",scope:"state",stateId:"ny",permissions:["manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]},{id:"district-admin",label:"District Admin",role:"District Admin",landing:"district-admin",scope:"district",stateId:"ny",districtId:"nyc-doe",permissions:["manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]},{id:"school-admin",label:"School Admin",role:"School Admin",landing:"school-admin",scope:"school",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",permissions:["approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]},{id:"teacher",label:"Demo Teacher",role:"Teacher",landing:"teacher",scope:"school",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",permissions:["lms","teacher-tools","message","submit-post"]},{id:"student",label:"Demo Learner",role:"Student",landing:"student",scope:"student",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",studentId:"learner-1",permissions:["student-missions"]},{id:"parent",label:"Demo Guardian",role:"Parent",landing:"parent",scope:"guardian",stateId:"ny",districtId:"nyc-doe",schoolId:"ps-118",studentIds:["learner-1"],permissions:["message","submit-post"]}],as=[["global-access","Access every test workspace"],["manage-tenants","Manage tenants"],["manage-users","Manage users"],["view-compliance","View compliance"],["approve-posts","Approve posts"],["emergency","Emergency override"],["lms","Manage LMS"],["teacher-tools","Teacher tools"],["message","Messaging"],["submit-post","Submit posts"],["student-missions","Student missions"]],Fe=[{id:1,subject:"Science",title:"Space Explorers: The Moon",due:"Due tomorrow",action:"Start Mission",progress:78,accent:"teal",icon:"rocket"},{id:2,subject:"Math",title:"Number Quest: Addition",due:"Due in 2 days",action:"Play Now",progress:44,accent:"blue",icon:"star"},{id:3,subject:"Reading",title:"The Whale and the Star",due:"Keep reading",action:"Continue",progress:56,accent:"gold",icon:"book-open"}],$e=[{id:"ny",name:"New York",agency:"NYS Education Department (NYSED)",districts:[{id:"nyc-doe",name:"New York City Public Schools",region:"New York City",superintendent:"NYC Chancellor",schools:[{id:"ps-118",name:"P.S. 118 Discovery Academy",category:"Public",students:684,staff:78,status:"Active",subdomain:"ps118",plan:"District Core",modules:["SIS","LMS","Messaging","Family Portal"],storage:64,uptime:"99.98%",theme:"Discovery Blue",isolation:"Dedicated tenant database",avgGrade:"88.4%",attendance:"94.2%",messages:"3 pending",studentPoints:1240,studentName:"Demo Learner",guardianName:"Demo Guardian",learnerName:"Demo Learner",workHours:"Mon-Fri, 8:00 AM-4:30 PM",afterHours:"Messages are held until the next work day"},{id:"bronx-charter",name:"Bronx Learning Charter",category:"Chartered",students:412,staff:49,status:"Onboarding",subdomain:"bronxlearning",plan:"Charter Launch",modules:["SIS","Messaging","Enrollment"],storage:31,uptime:"99.91%",theme:"Charter Gold",isolation:"Dedicated tenant database",avgGrade:"86.1%",attendance:"92.7%",messages:"8 pending",studentPoints:890,studentName:"Explorer",guardianName:"Monica",learnerName:"Ari",workHours:"Mon-Fri, 7:45 AM-4:00 PM",afterHours:"Messages are held until staff office hours reopen"}]},{id:"albany-csd",name:"Albany City School District",region:"Capital Region",superintendent:"District Superintendent",schools:[{id:"albany-prep",name:"Albany Preparatory School",category:"Private",students:325,staff:44,status:"Active",subdomain:"albanyprep",plan:"Private Plus",modules:["LMS","Messaging","Tuition","Family Portal"],storage:46,uptime:"99.95%",theme:"Prep Teal",isolation:"Dedicated tenant database",avgGrade:"91.8%",attendance:"96.4%",messages:"1 pending",studentPoints:1565,studentName:"Scholar",guardianName:"Priya",learnerName:"Noah",workHours:"Mon-Fri, 8:30 AM-5:00 PM",afterHours:"Messages wait for the next administrator-approved window"},{id:"eagle-point",name:"Eagle Point Elementary",category:"Public",students:538,staff:61,status:"Active",subdomain:"eaglepoint",plan:"District Core",modules:["SIS","LMS","Messaging"],storage:52,uptime:"99.97%",theme:"Eagle Green",isolation:"Dedicated tenant database",avgGrade:"87.2%",attendance:"95.1%",messages:"4 pending",studentPoints:1120,studentName:"Navigator",guardianName:"Sarah",learnerName:"Mia",workHours:"Mon-Fri, 8:00 AM-4:00 PM",afterHours:"Messages are queued until office hours"}]}]},{id:"ca",name:"California",agency:"California Department of Education",districts:[{id:"la-usd",name:"Los Angeles Unified School District",region:"Los Angeles County",superintendent:"District Superintendent",schools:[{id:"pacific-stem",name:"Pacific STEM Charter",category:"Chartered",students:496,staff:52,status:"Active",subdomain:"pacificstem",plan:"STEM Charter",modules:["SIS","LMS","Messaging","Lab Scheduler"],storage:58,uptime:"99.94%",theme:"Pacific Blue",isolation:"Dedicated tenant database",avgGrade:"90.3%",attendance:"93.8%",messages:"6 pending",studentPoints:1325,studentName:"Innovator",guardianName:"Elena",learnerName:"Kai",workHours:"Mon-Fri, 8:00 AM-4:30 PM",afterHours:"Messages are held until staff work hours"}]}]}],ss=[["State Governance",["Board of Regents","Commissioner of Education","NYS Education Department (NYSED)"]],["District & Regional Governance",["BOCES District Superintendents","Local Board of Education (BOE)","District Superintendent / NYC Chancellor","Assistant / Deputy Superintendents","District Directors / Coordinators"]],["School Building Administration",["Principal","Assistant Principal","Dean of Students / Department Chairs"]],["Classroom Faculty",["Tenured Teachers","Probationary Teachers","Substitutes / Leave Replacements"]],["Instructional & Specialized Support",["Specialized Clinicians","Teaching Assistants","Teacher Aides / Paraprofessionals"]],["Operational Support",["Secretaries / Clerical Staff","Custodial / Maintenance Staff","Food Service / Security / Transportation"]],["Student Leadership & Student Body",["Student Board of Education Representative","Student Council President / Officers","Class Officers","Club Presidents / Team Captains","General Student Body"]]],_=[{name:"English Literature",room:"Period 2, Room 304",grade:89,attendance:96,pending:12},{name:"Creative Writing",room:"Period 4, Room 201",grade:92,attendance:97,pending:1},{name:"Basic English",room:"Period 6, Room 118",grade:84,attendance:91,pending:5}],I=[{id:"stu-1",student:"Demo Learner 1",guardian:"Demo Guardian 1",teacher:"Demo Teacher",className:"English Literature",grade:91,attendance:98,accommodations:"Visual vocabulary cards",status:"Active"},{id:"stu-2",student:"Demo Learner 2",guardian:"Demo Guardian 2",teacher:"Demo Teacher",className:"Creative Writing",grade:88,attendance:94,accommodations:"Extended quiz time",status:"Active"},{id:"stu-3",student:"Demo Learner 3",guardian:"Demo Guardian 3",teacher:"Demo Teacher",className:"English Literature",grade:82,attendance:91,accommodations:"Reading support",status:"Watch"},{id:"stu-4",student:"Demo Learner 4",guardian:"Demo Guardian 4",teacher:"Demo Teacher",className:"Creative Writing",grade:96,attendance:99,accommodations:"None",status:"Active"}],O=[{id:"sub-1",student:"Demo Learner 1",assignment:"Fractions Mastery Check",status:"Submitted",score:88,rubric:[["Concepts",4],["Accuracy",3],["Explanation",4],["Neatness",3]],comment:"Strong reasoning. Recheck mixed-number conversions."},{id:"sub-2",student:"Demo Learner 2",assignment:"Great Depression Essay",status:"Needs review",score:74,rubric:[["Thesis",3],["Evidence",3],["Organization",2],["Conventions",4]],comment:"Good evidence. Add a clearer argument in the introduction."},{id:"sub-3",student:"Demo Learner 3",assignment:"Grammar Quiz - Week 5",status:"Missing",score:0,rubric:[["Completion",0],["Accuracy",0],["Timeliness",0]],comment:"Family reminder queued."}],re=[["Demo Learner 3","finished reading The Great Gatsby","15 minutes ago","Lit 101"],["Demo Learner 4","submitted Grammar Quiz - Week 5","42 minutes ago","Creative Writing"],["Marcus Thorne","posted in the discussion board","2 hours ago","Shakespeare"]],Ye=[{title:"History: Great Depression Essay",meta:"Due tomorrow, 11:59 PM",urgent:!0},{title:"Science: Water Cycle Model",meta:"Due Thursday",urgent:!1},{title:"Math: Quadratic Equations Quiz",meta:"Due Sunday",urgent:!1}],q=[{id:"fractions",title:"Fractions Mastery Check",className:"Basic English",type:"Automated quiz",instructions:"Complete the mastery check and show your reasoning.",rubric:"4-domain rubric",analytics:82,dueDate:"2026-10-24",points:20,status:"Published",allowResubmit:!0,maxAttempts:2,lockDate:"Oct 24, 8:00 PM",exception:"Maya R. +24h",attachments:[]},{id:"essay",title:"Great Depression Essay",className:"English Literature",type:"Writing task",instructions:"Write a supported argument using at least three pieces of evidence from the unit.",rubric:"Argument + evidence rubric",analytics:74,dueDate:"2026-10-28",points:100,status:"Published",allowResubmit:!0,maxAttempts:3,lockDate:"Oct 28, 11:59 PM",exception:"None",attachments:[]}],ne=[{id:"work-essay-demo",assignmentId:"essay",studentId:"student",student:"Demo Learner",response:"The New Deal changed the federal government's role by expanding relief and recovery programs.",attachments:[],status:"Draft",attempt:1,submittedAt:"",score:null,feedback:"",returnedAt:""}],Me=[{id:"qb-claim",subject:"English Language Arts",standard:"CCSS.ELA-LITERACY.W.4.1",questionType:"Multiple choice",question:"Which statement is the strongest claim?",options:["School is interesting.","Schools should provide daily reading time because it improves fluency and comprehension.","Many students read.","Books have pages."],correctAnswer:1,points:5,feedback:"A strong claim is specific and supported by a clear reason."},{id:"qb-moon",subject:"Science",standard:"NGSS 5-ESS1-1",questionType:"True or false",question:"The Moon produces its own visible light.",options:["True","False","",""],correctAnswer:1,points:5,feedback:"The Moon reflects sunlight."},{id:"qb-fraction",subject:"Math",standard:"CCSS.MATH.CONTENT.4.NF.A.1",questionType:"Short answer",question:"Write an equivalent fraction for 1/2.",options:["2/4","","",""],correctAnswer:0,points:5,feedback:"Multiplying the numerator and denominator by the same number creates an equivalent fraction."}],te=[{id:"course-ela-4",title:"Grade 4 English Language Arts",subject:"English Language Arts",grade:"4",className:"English Literature",standards:["CCSS.ELA-LITERACY.RL.4.1","CCSS.ELA-LITERACY.W.4.1"],units:[{id:"unit-stories",title:"Stories and Perspective",description:"Analyze characters, point of view, and evidence.",lessonIds:["lesson-story-elements"],assignmentIds:[]},{id:"unit-arguments",title:"Claims and Evidence",description:"Build clear claims supported by relevant evidence.",lessonIds:[],assignmentIds:["essay"]}]},{id:"course-science-4",title:"Grade 4 Earth and Space Science",subject:"Science",grade:"4",className:"Basic English",standards:["NGSS 5-ESS1-1"],units:[{id:"unit-moon",title:"Earth and Moon Systems",description:"Observe patterns in the Moon's appearance.",lessonIds:["lesson-moon-phases"],assignmentIds:[]}]}],L=[{id:"lesson-moon-phases",title:"Moon Phases Explorer",subject:"Science",className:"English Literature",summary:"Explore why the Moon appears to change shape and check your understanding.",status:"Published",visibility:"Students and families",dueDate:"2026-10-24",estimatedMinutes:35,points:20,allowLate:!0,requireOrder:!0,updatedAt:"Today",blocks:[{id:"moon-intro",type:"text",title:"Look up at the Moon",body:"The Moon does not make its own light. As it travels around Earth, sunlight illuminates different portions that we can see."},{id:"moon-video",type:"media",mediaType:"Video",title:"Moon phases video",url:"https://www.youtube.com/watch?v=3f_21N3wcX8",caption:"Watch the short overview, then continue to the knowledge check."},{id:"moon-quiz",type:"quiz",title:"Knowledge check",question:"What causes the phases of the Moon?",questionType:"Multiple choice",options:["Earth's shadow always covers the Moon","We see different sunlit portions as the Moon orbits Earth","Clouds change the Moon's shape","The Moon produces different amounts of light"],correctAnswer:1,feedback:"The Moon's orbit changes how much of its sunlit half is visible from Earth.",points:10,required:!0}]},{id:"lesson-story-elements",title:"Building a Strong Story",subject:"English Language Arts",className:"Creative Writing",summary:"Use character, setting, conflict, and resolution to plan an original story.",status:"Draft",visibility:"Teacher only",dueDate:"2026-10-28",estimatedMinutes:45,points:25,allowLate:!1,requireOrder:!1,updatedAt:"Yesterday",blocks:[{id:"story-intro",type:"text",title:"Four story building blocks",body:"A memorable story gives readers a character to care about, a setting they can picture, a conflict that creates tension, and a resolution that shows change."},{id:"story-link",type:"media",mediaType:"Link",title:"Story planner",url:"https://www.readwritethink.org/",caption:"Open the planning resource for additional examples."}]}],xe=[{name:"Water Cycle Worksheet.docx",status:"Converted to editable lesson copy",type:"Word"},{name:"Moon Lab Packet.pdf",status:"OCR indexed + annotation ready",type:"PDF"},{name:"Parent Signature Form.pdf",status:"Fillable fields detected",type:"PDF"}],Ue=[{id:"teacher-school",name:"Demo Teacher",context:"Teacher at selected school",active:!0},{id:"parent-school",name:"Demo Guardian",context:"Parent profile",active:!1},{id:"district-admin",name:"District Admin",context:"District-wide oversight",active:!1}],Y=[{id:"notice-lock-window",level:"Urgent",title:"Locked submission window closes tonight",target:"Grade 4 Math",channel:"Dashboard + SMS",read:!1},{id:"notice-rubrics",level:"Action",title:"3 rubric scores need review",target:"English Literature",channel:"Teacher inbox",read:!1},{id:"notice-family-comment",level:"FYI",title:"New family comment on community board",target:"All families",channel:"Digest",read:!1}],ae=[{id:"live-1",type:"Roster",title:"Demo Learner 1 attendance synced",detail:"SIS updated attendance to 98%.",time:"Live now"},{id:"live-2",type:"LMS",title:"Rubric queue refreshed",detail:"3 submissions are ready for review.",time:"Live now"},{id:"live-3",type:"Messages",title:"Parent digest prepared",detail:"Routine updates will send during the next work window.",time:"Live now"}],Rt=[{app:"Docs",action:"Distribute editable templates instantly",status:"Connected"},{app:"Drive",action:"Attach, collect, and archive class files",status:"Connected"},{app:"Forms",action:"Auto-create quizzes with answer visibility rules",status:"Connected"},{app:"Slides",action:"Share lesson decks as view or copy templates",status:"Connected"}],ns=[["Intuitive Design","Clean teacher and student workflows with minimal training."],["Zero Cost Base","Core classroom, assignments, communication, and family summaries stay free for schools."],["Paperless Workflow","Create, collect, grade, return, and archive digital assignments."],["Centralized Communication","Class announcements, direct messages, and parent summaries in one place."],["Automated Guardrails","Lock edits after submission and hide quiz answers until the assessment ends."]],le=[{actor:"District Admin",event:"Provisioned school tenant",scope:"NYC DOE",time:"Today 9:12 AM"},{actor:"Principal Rivera",event:"Approved community board post",scope:"P.S. 118",time:"Today 10:44 AM"},{actor:"System",event:"Blocked after-hours parent message",scope:"P.S. 118",time:"Yesterday 6:03 PM"},{actor:"NYSED Reviewer",event:"Viewed compliance dashboard",scope:"New York",time:"Yesterday 2:21 PM"}],is=[{label:"FERPA Mode",status:"Enabled",detail:"Student records are hidden outside authorized tenant scopes."},{label:"Media Review",status:"Required",detail:"Photos and files stay pending until an assigned approver approves them."},{label:"Data Export",status:"Logged",detail:"Every roster, gradebook, or message export appears in the audit trail."}],os=[{label:"FERPA access reviews",value:"12",status:"Due this month",detail:"Confirm staff access for student records."},{label:"Data export logs",value:"4",status:"Reviewed",detail:"Gradebook and roster exports are audit logged."},{label:"Media approvals",value:"1",status:"Pending",detail:"Photo content waiting for administrator approval."},{label:"After-hours blocks",value:"7",status:"Protected",detail:"Messages held outside school communication windows."}],Ht=[{title:"Superintendent Hearing Window",audience:"District",date:"Oct 21",type:"Compliance"},{title:"Science Night",audience:"P.S. 118 families",date:"Oct 23",type:"Community"},{title:"Fractions Mastery Lock Date",audience:"Grade 4 Math",date:"Oct 24",type:"LMS"},{title:"Parent Conference Block",audience:"Teachers + guardians",date:"Oct 27",type:"Messaging"}],Ee=[{item:"Fractions quiz attempt",owner:"Leo",status:"Queued for upload"},{item:"PDF annotation packet",owner:"Maya",status:"Conflict check ready"},{item:"Teacher rubric draft",owner:"Demo Teacher",status:"Saved offline"}],rs=[["Default route","Parent and teacher posts go to the first active school approver."],["Media route","Photos, videos, and files require Principal or Assistant Principal approval."],["Sensitive route","Discipline, health, or student-identifying content is held for administrator review."],["Publishing rule","Approved posts publish only inside the selected school tenant."]],ls=[{title:"One-tap teacher message",detail:"Disabled automatically outside school work hours."},{title:"Digest-first notifications",detail:"Urgent alerts separate from routine activity noise."},{title:"Offline packet pickup",detail:"Assignments and forms can be downloaded before Wi-Fi drops."}],Z={"ps-118":{logo:"D",crest:"Discovery Owls",primary:"#0050cb",accent:"#006b5f",highlight:"#735c00",background:"#f8f9ff",voice:"Bright, curious, elementary STEM"},"bronx-charter":{logo:"B",crest:"Bronx Torch",primary:"#6d3f00",accent:"#005b96",highlight:"#996b00",background:"#fff9ef",voice:"Confident, college-bound, community first"},"albany-prep":{logo:"A",crest:"Albany Shield",primary:"#005f73",accent:"#7a3e9d",highlight:"#8a5a00",background:"#f3fbfb",voice:"Polished, private school, seminar-ready"},"eagle-point":{logo:"E",crest:"Eagle Point",primary:"#116149",accent:"#004e98",highlight:"#7c5c00",background:"#f4fbf6",voice:"Warm, neighborhood public school"},"pacific-stem":{logo:"P",crest:"Pacific Wave",primary:"#0057a8",accent:"#00756f",highlight:"#7a6100",background:"#f2f8ff",voice:"Modern, STEM lab, project-based"}},He=[{name:"Discovery Blue",primary:"#0050cb",accent:"#006b5f",highlight:"#735c00",background:"#f8f9ff"},{name:"Charter Gold",primary:"#6d3f00",accent:"#005b96",highlight:"#996b00",background:"#fff9ef"},{name:"Prep Teal",primary:"#005f73",accent:"#7a3e9d",highlight:"#8a5a00",background:"#f3fbfb"},{name:"Eagle Green",primary:"#116149",accent:"#004e98",highlight:"#7c5c00",background:"#f4fbf6"},{name:"Pacific Blue",primary:"#0057a8",accent:"#00756f",highlight:"#7a6100",background:"#f2f8ff"}],C=[{id:"sarah",name:"Demo Guardian 1",role:"Leo's parent",type:"Parents",unread:0,online:!0,preview:"I'll send the photo of the worksheet now...",messages:[{from:"them",text:"Hi Mr. Anderson! Leo found the fractions section tricky.",time:"13:45"},{from:"me",text:"Thanks for the heads up. I can send a visual practice sheet today.",time:"13:52"},{from:"them",text:"That would help. I'll send the photo of the worksheet now.",time:"14:02"}]},{id:"elena",name:"Demo Guardian 2",role:"Maya's parent",type:"Parents",unread:3,online:!1,preview:"Is the field trip still happening on Friday?",messages:[{from:"them",text:"Is the field trip still happening on Friday?",time:"Tue"},{from:"me",text:"Yes, the permission forms are due by Thursday morning.",time:"Tue"}]},{id:"grade-team",name:"Grade 4 Team",role:"6 teachers",type:"Groups",unread:1,online:!0,preview:"New reading groups are posted.",messages:[{from:"them",text:"New reading groups are posted for next week.",time:"09:18"},{from:"me",text:"Great, I updated my small-group rotation.",time:"09:26"}]}],se={"ps-118":{approvers:[{id:"principal-rivera",name:"Principal Rivera",title:"Principal",active:!0},{id:"ap-kim",name:"Assistant Principal Kim",title:"Assistant Principal",active:!0},{id:"dean-walker",name:"Dean Walker",title:"Dean of Students",active:!1}],published:[{id:"ps-post-1",author:"Ms. Henderson",role:"Teacher",type:"Announcement",audience:"All families",title:"Science Night Volunteers",body:"We need four family volunteers for Thursday's hands-on moon lab.",media:"Flyer PDF",time:"Approved today"},{id:"ps-post-2",author:"Demo Guardian 1",role:"Parent",type:"Resource",audience:"Grade 4",title:"Math Game Practice Link",body:"Sharing a free fractions game that helped a learner practice at home.",media:"Website link",time:"Approved yesterday"}],pending:[{id:"ps-pending-1",author:"Mr. Anderson",role:"Teacher",type:"Photo",audience:"Grade 4",title:"Moon Rock Lab Photos",body:"A photo set from today's science station rotation.",media:"6 images",approverId:"principal-rivera",time:"Awaiting principal approval"}]}},ye=[{name:"users",records:z.length,status:"Mapped",detail:"Role, permission, school, guardian/student links"},{name:"schools",records:5,status:"Mapped",detail:"State, district, tenant URL, modules, branding"},{name:"classes",records:_.length,status:"Mapped",detail:"Teacher, room, attendance, pending work"},{name:"students",records:I.length,status:"Mapped",detail:"Guardian, accommodations, grades, attendance"},{name:"assignments",records:q.length,status:"Mapped",detail:"Type, rubric, lock date, exceptions"},{name:"lessons",records:L.length,status:"Mapped",detail:"Content blocks, media, quizzes, publishing, and learner progress"},{name:"submissions",records:O.length,status:"Mapped",detail:"Rubric scores, comments, review status"},{name:"messages",records:C.length,status:"Mapped",detail:"Parent and group threads with work-hour controls"},{name:"community_posts",records:se["ps-118"].published.length+se["ps-118"].pending.length,status:"Mapped",detail:"Approvals, media, audience, publishing state"},{name:"audit_logs",records:le.length,status:"Mapped",detail:"Admin actions, exports, compliance events"}],me=[{id:"district",label:"Create district and school tenants",owner:"Admin",done:!0},{id:"staff",label:"Invite staff accounts",owner:"Admin",done:!0},{id:"roster",label:"Import student roster",owner:"Registrar",done:!0},{id:"guardians",label:"Connect parent and guardian accounts",owner:"School office",done:!1},{id:"classes",label:"Assign teachers to classes",owner:"Principal",done:!0},{id:"launch",label:"Send launch notification",owner:"Communications",done:!1}],W=[{id:"upload-1",name:"Moon Lab Packet.pdf",area:"LMS",size:"1.2 MB",status:"Ready for class distribution"},{id:"upload-2",name:"Science Night Flyer.pdf",area:"Community",size:"420 KB",status:"Waiting for approval"}],K=[{id:"delivery-1",channel:"Email",audience:"Grade 4 families",status:"Queued",detail:"Science Night reminder"},{id:"delivery-2",channel:"SMS",audience:"Emergency contacts",status:"Ready",detail:"Emergency override test"},{id:"delivery-3",channel:"Push",audience:"Teachers",status:"Delivered",detail:"Rubric queue refresh"}],he=[{id:"auth",label:"Role-based authentication rules",status:"Configured",done:!0},{id:"ferpa",label:"FERPA tenant data isolation",status:"Configured",done:!0},{id:"audit",label:"Audit log export policy",status:"Configured",done:!0},{id:"backups",label:"Nightly database backups",status:"Needs backend provider",done:!1},{id:"encryption",label:"Encrypted file storage",status:"Needs storage provider",done:!1},{id:"retention",label:"Data retention schedule",status:"Drafted",done:!1}],Te=[{step:"Build",status:"Passing",detail:"Vite production build generates static assets"},{step:"Tests",status:"Passing",detail:"Playwright local and live smoke tests available"},{step:"FTP deploy",status:"Live",detail:"educationalsystem.fieldserviceit.com is serving the app"},{step:"GitHub sync",status:"Connected",detail:"Backend repository deploys through Hostinger hPanel"}],cs="educationalsystem.fieldserviceit.com",ds="https://api.educationalsystem.fieldserviceit.com";function _t(e,t="",s=""){return e===cs?ds:t||s||""}const Ot=new Map;function us(){return _t(window.location.hostname,window.__EDUCONNECT_API_BASE__,void 0)}function ps(e,t={}){var i;const s=e instanceof Error?e:new Error(String(e||"Unknown client error"));return{source:t.source||"frontend",message:s.message.slice(0,1e3),stack:String(s.stack||"").slice(0,6e3),path:`${window.location.pathname}${window.location.hash}`.slice(0,300),release:((i=document.querySelector('meta[name="app-release"]'))==null?void 0:i.content)||"web"}}function Oe(e,t={}){const s=us();if(!s)return;const i=ps(e,t),o=`${i.source}:${i.message}:${i.path}`,u=Date.now();u-(Ot.get(o)||0)<6e4||(Ot.set(o,u),fetch(`${s}/api/error-reports`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),keepalive:!0}).catch(()=>{}))}function ms(){window.addEventListener("error",e=>Oe(e.error||e.message,{source:"window.error"})),window.addEventListener("unhandledrejection",e=>Oe(e.reason,{source:"unhandledrejection"}))}const Yt="educonnect-mock-api-v1";let Ce=0;function Vt(e){return e&&typeof e=="object"&&"data"in e?e.data:e}function Jt(){return new Promise(e=>setTimeout(e,80))}function Ve(){return _t(window.location.hostname,window.__EDUCONNECT_API_BASE__,void 0)}function hs(e){return`${Ve()}/api/files/${encodeURIComponent(e)}/download`}function Qt(){const e=localStorage.getItem("educonnect-session-token");return e?{Authorization:`Bearer ${e}`}:{}}async function Kt(e,t){const s=`${Ve()}/api/state`,i=await fetch(s,{method:e,headers:{"Content-Type":"application/json",...Qt()},body:t?JSON.stringify(t):void 0});if(Ce+=1,!i.ok){`${i.status}`;const o=new Error(`Server API request failed with ${i.status}`);throw Oe(o,{source:"api.state"}),o}return Vt(await i.json())}async function Be(e,t={}){const s=`${Ve()}${e}`,i=await fetch(s,{headers:{"Content-Type":"application/json",...Qt(),...t.headers||{}},...t});if(Ce+=1,!i.ok){`${i.status}`;const o=await i.json().catch(()=>({})),u=new Error(o.error||`Server API request failed with ${i.status}`);throw Oe(u,{source:"api.request"}),u}return Vt(await i.json())}async function gs(e,t="mock-api"){return t==="live-api"?Kt("PUT",{snapshot:e}):(Ce+=1,await Jt(),localStorage.setItem(Yt,JSON.stringify(e)),{ok:!0,requestCount:Ce})}async function vs(e="mock-api"){return e==="live-api"?(await Kt("GET")).snapshot:(Ce+=1,await Jt(),JSON.parse(localStorage.getItem(Yt)||"null"))}async function bs(e,t){return Be("/api/login",{method:"POST",body:JSON.stringify({identifier:e,password:t})})}async function fs(){return Be("/api/session",{method:"GET"})}async function We(e,t="LMS"){const s=await new Promise((i,o)=>{const u=new FileReader;u.onload=()=>i(String(u.result).split(",")[1]||""),u.onerror=()=>o(u.error),u.readAsDataURL(e)});return Be("/api/files",{method:"POST",body:JSON.stringify({name:e.name,type:e.type,area:t,size:`${Math.max(1,Math.round(e.size/1024))} KB`,contentBase64:s})})}async function $s(e="Launch test group"){return Be("/api/notifications/test",{method:"POST",body:JSON.stringify({audience:e})})}const je="educonnect-demo-state-v1",E=structuredClone({state:a,userProfiles:z,tenantStates:$e,schoolDesigns:Z,rosterRecords:I,gradebookSubmissions:O,auditLogs:le,lmsAssignments:q,lmsLessons:L,lmsSubmissions:ne,questionBank:Me,curriculumCourses:te,lmsFiles:xe,lmsNotifications:Y,realtimeEvents:ae,databaseTables:ye,onboardingTasks:me,fileUploads:W,notificationDeliveryLog:K,securityChecklist:he,deployPipeline:Te,offlineSyncQueue:Ee,activityFeed:re,conversations:C,communityBoards:se});function Ie(e,t){Object.keys(e).forEach(s=>delete e[s]),Object.assign(e,structuredClone(t))}function f(e,t){e.splice(0,e.length,...structuredClone(t))}function ys(){try{const e=JSON.parse(localStorage.getItem(je)||"null");Je(e)}catch{localStorage.removeItem(je)}}function Zt(){return structuredClone({state:a,userProfiles:z,tenantStates:$e,schoolDesigns:Z,rosterRecords:I,gradebookSubmissions:O,auditLogs:le,lmsAssignments:q,lmsLessons:L,lmsSubmissions:ne,questionBank:Me,curriculumCourses:te,lmsFiles:xe,lmsNotifications:Y,realtimeEvents:ae,databaseTables:ye,onboardingTasks:me,fileUploads:W,notificationDeliveryLog:K,securityChecklist:he,deployPipeline:Te,offlineSyncQueue:Ee,activityFeed:re,conversations:C,communityBoards:se})}function Je(e){e&&(e.state&&Object.assign(a,e.state),e.userProfiles&&f(z,e.userProfiles),e.tenantStates&&f($e,e.tenantStates),e.schoolDesigns&&Ie(Z,e.schoolDesigns),e.rosterRecords&&f(I,e.rosterRecords),e.gradebookSubmissions&&f(O,e.gradebookSubmissions),e.auditLogs&&f(le,e.auditLogs),e.lmsAssignments&&f(q,e.lmsAssignments),e.lmsLessons&&f(L,e.lmsLessons),e.lmsSubmissions&&f(ne,e.lmsSubmissions),e.questionBank&&f(Me,e.questionBank),e.curriculumCourses&&f(te,e.curriculumCourses),e.lmsFiles&&f(xe,e.lmsFiles),e.lmsNotifications&&f(Y,e.lmsNotifications),e.realtimeEvents&&f(ae,e.realtimeEvents),e.databaseTables&&f(ye,e.databaseTables),e.onboardingTasks&&f(me,e.onboardingTasks),e.fileUploads&&f(W,e.fileUploads),e.notificationDeliveryLog&&f(K,e.notificationDeliveryLog),e.securityChecklist&&f(he,e.securityChecklist),e.deployPipeline&&f(Te,e.deployPipeline),e.offlineSyncQueue&&f(Ee,e.offlineSyncQueue),e.activityFeed&&f(re,e.activityFeed),e.conversations&&f(C,e.conversations),e.communityBoards&&Ie(se,e.communityBoards))}function ws(){const e=Zt();localStorage.setItem(je,JSON.stringify(e)),(a.apiMode==="mock-api"||a.apiMode==="live-api")&&gs(e,a.apiMode).catch(()=>{})}async function Xt(e=a.apiMode){const t=await vs(e);t&&Je(t)}function Ss(){localStorage.removeItem(je),Object.assign(a,structuredClone(E.state)),f(z,E.userProfiles),f($e,E.tenantStates),Ie(Z,E.schoolDesigns),f(I,E.rosterRecords),f(O,E.gradebookSubmissions),f(le,E.auditLogs),f(q,E.lmsAssignments),f(L,E.lmsLessons),f(ne,E.lmsSubmissions),f(Me,E.questionBank),f(te,E.curriculumCourses),f(xe,E.lmsFiles),f(Y,E.lmsNotifications),f(ae,E.realtimeEvents),f(ye,E.databaseTables),f(me,E.onboardingTasks),f(W,E.fileUploads),f(K,E.notificationDeliveryLog),f(he,E.securityChecklist),f(Te,E.deployPipeline),f(Ee,E.offlineSyncQueue),f(re,E.activityFeed),f(C,E.conversations),Ie(se,E.communityBoards)}ms();const jt=document.querySelector("#app");let M=null,be=null,Ae="",Pe=!1;const It={English:{settings:"Settings",notifications:"Notifications",lessons:"Lessons",assignments:"Assignments",progress:"My Progress",saveDraft:"Save draft",submit:"Submit assignment"},Spanish:{settings:"Configuración",notifications:"Notificaciones",lessons:"Lecciones",assignments:"Tareas",progress:"Mi progreso",saveDraft:"Guardar borrador",submit:"Entregar tarea"}};function Le(e){var t;return((t=It[a.language])==null?void 0:t[e])||It.English[e]||e}const ue=[{title:"Choose a role",body:"Use the demo login panel to switch between state, district, school, teacher, parent, and student access.",role:"state-admin"},{title:"Create learning work",body:"Teachers can author multimedia lessons, build quizzes, publish assignments, and prepare offline packs in the LMS.",role:"lms"},{title:"Communicate safely",body:"Messaging respects school work hours, with emergency override reserved for admins.",role:"messages"},{title:"Approve community posts",body:"Admins can approve posts before they publish to the school community board.",role:"community"}],ks={AlertTriangle:Ka,Award:ga,Bell:va,BookOpen:ba,Building2:fa,CalendarDays:$a,Check:ya,ChevronRight:wa,ClipboardCheck:Sa,Clock:ka,Database:Aa,Download:La,Eye:Ea,FileText:Pa,GraduationCap:Ca,Layers:qa,Lock:Da,Mail:xa,Map:Ta,Megaphone:Na,MessageCircle:Ra,MoreHorizontal:Ma,Paperclip:Oa,PenLine:ja,Play:Ia,Plus:za,RefreshCw:Fa,Rocket:Ba,RotateCcw:Ga,Search:Ua,Send:Wa,Settings:Ha,ShieldCheck:_a,Smartphone:Ya,Sparkles:Va,Star:Ja,TrendingUp:Qa,Users:Za,Video:Xa,X:es};function c(e){return`<i class="app-icon" data-lucide="${e}" data-icon="${e}" aria-hidden="true"></i>`}function As(e){return`/${e.replace(/^\/+/,"")}`}function ie(e){return e.split(" ").map(t=>t[0]).slice(0,2).join("")}function ge(e){return`<div class="progress" aria-label="${e}% complete"><span style="width:${e}%"></span></div>`}function x(e,t,s,i){return`<article class="stat-card ${i}"><div class="stat-icon">${c(s)}</div><span>${e}</span><strong>${t}</strong></article>`}function d(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ea(e){try{const t=new URL(String(e||""));return["http:","https:"].includes(t.protocol)?d(t.href):""}catch{return""}}function ta(e,t=0){const s=`block-${Date.now()}-${t}-${Math.random().toString(16).slice(2)}`;return e==="quiz"?{id:s,type:e,title:"Knowledge check",question:"",questionType:"Multiple choice",options:["","","",""],pairs:[{left:"",right:""},{left:"",right:""}],correctAnswer:0,feedback:"",points:5,required:!0,timeLimit:0,maxAttempts:2,randomize:!1,showAnswers:!0}:e==="media"?{id:s,type:e,mediaType:"Video",title:"Learning media",url:"",caption:""}:{id:s,type:"text",title:"Lesson section",body:""}}function aa(e=null){return e?structuredClone(e):{id:"",title:"",subject:"English Language Arts",className:a.selectedClass==="All"?_[0].name:a.selectedClass,summary:"",status:"Draft",visibility:"Teacher only",dueDate:"",estimatedMinutes:30,points:20,allowLate:!0,requireOrder:!0,updatedAt:"Just now",blocks:[ta("text")]}}function v(e){a.toast=e,b()}function w(e,t=S().name,s=P().label){le.unshift({actor:s,event:e,scope:t,time:"Just now"})}function U(e,t,s=S().name,i="Live dashboard"){Y.unshift({id:`notice-${Date.now()}-${Math.random().toString(16).slice(2)}`,level:e,title:t,target:s,channel:i,read:!1})}function j(e,t,s){ae.unshift({id:`live-${Date.now()}-${Math.random().toString(16).slice(2)}`,type:e,title:t,detail:s,time:"Just now"}),ae.length>8&&(ae.length=8)}function ze(){return Y.filter(e=>!e.read).length}function sa(e="manual"){const t=S(),s=[()=>{const i=I[a.realtimeTick%I.length];i.attendance=Math.min(100,i.attendance+1),re.unshift([i.student,"attendance synced from SIS","Just now",i.className]),j("Roster",`${i.student} synced`,`Attendance is now ${i.attendance}% in ${i.className}.`),U("FYI",`${i.student} roster sync completed`,i.className,"SIS")},()=>{const i=O[a.realtimeTick%O.length];i.status=i.status==="Missing"?"Needs review":i.status,j("LMS",`${i.student} gradebook updated`,`${i.assignment} is ${i.status.toLowerCase()}.`),U("Action",`${i.student} submission needs attention`,i.assignment,"Teacher inbox")},()=>{const i=C.find(o=>o.id===a.activeConversationId)||C[0];i.messages.push({from:"them",text:`Live ${t.name} update received.`,time:"Now"}),i.preview="Live school update received.",i.unread=(i.unread||0)+1,j("Messages",`New message from ${i.name}`,"Conversation preview and unread count updated."),U("Urgent",`New message from ${i.name}`,t.name,"Messages")}];s[a.realtimeTick%s.length](),a.realtimeTick+=1,w(`Processed ${e} live update`,t.name,"Realtime service"),a.toast="Live app data updated.",b()}function P(){return M||z.find(e=>e.id===a.currentUser)||z[0]}function qe(){return!["localhost","127.0.0.1","0.0.0.0"].includes(window.location.hostname)}function oe(e=P()){if(!e)return[];if((e.permissions||[]).includes("global-access"))return fe.map(i=>i.id);const t=new Set([e.landing]),s=new Set(e.permissions||[]);return e.scope==="state"&&t.add("state-admin"),["state","district"].includes(e.scope)&&t.add("district-admin"),["state","district","school"].includes(e.scope)&&/Admin$/i.test(e.role||"")&&t.add("school-admin"),s.has("lms")&&t.add("lms"),s.has("teacher-tools")&&t.add("teacher"),s.has("message")&&t.add("messages"),(s.has("approve-posts")||s.has("submit-post"))&&t.add("community"),s.has("student-missions")&&t.add("student"),fe.map(i=>i.id).filter(i=>t.has(i))}function Ge(){const e=new Set(oe());return fe.filter(t=>e.has(t.id))}function zt(e,t="Signed in as"){if(!e)return;M={...z.find(o=>o.id===e.id),...e},a.currentUser=M.id,a.toast=`${t} ${M.label}.`,w("Signed in",S().name,M.label);const i=oe(M).includes(M.landing)?M.landing:oe(M)[0];we(i||"student")}function Ls(e){if(!B("global-access"))return;const t=z.find(s=>s.id===e);!t||t.id===P().id||(be={...M},a.impersonatingFrom=M.id,M={...t},a.currentUser=t.id,a.toast=`Previewing the application as ${t.label}.`,w(`Started role preview as ${t.label}`,S().name,be.label),we(t.landing||oe(t)[0]||"student"))}function Ms(){be&&(M=be,be=null,a.currentUser=M.id,a.impersonatingFrom="",a.toast="Returned to Global Admin.",we("state-admin"))}function Es(){const e=P().label;localStorage.removeItem("educonnect-session-token"),M=null,be=null,a.impersonatingFrom="",a.toast="",a.searchTerm="",Ae="",history.replaceState(null,"",window.location.pathname),b(),requestAnimationFrame(()=>{var t;return(t=document.querySelector("#landing-identifier"))==null?void 0:t.focus()}),console.info(`${e} signed out`)}function B(e){return P().permissions.includes(e)}function V(e,t="This role cannot use that action"){return B(e)?"":`disabled aria-disabled="true" title="${t}"`}function Se(e,t){return B(e)?"":`<div class="permission-note">${c("lock")} ${t}</div>`}function Ps(e){const t=[];return(!e||typeof e!="object")&&t.push("File must contain a JSON object."),(!(e!=null&&e.state)||typeof e.state!="object")&&t.push("Missing state object."),Array.isArray(e==null?void 0:e.tenantStates)||t.push("Missing tenantStates array."),Array.isArray(e==null?void 0:e.conversations)||t.push("Missing conversations array."),(!(e!=null&&e.communityBoards)||typeof e.communityBoards!="object")&&t.push("Missing communityBoards object."),t}function Ft(){const e=window.location.hash.replace("#","");return e==="platform"?"state-admin":fe.some(t=>t.id===e)?e:""}function we(e,t=!0){if(e==="platform"&&(e="state-admin"),!fe.some(s=>s.id===e)||!oe().includes(e)){M&&(a.toast="That workspace is not available for your role.");return}a.role=e,a.notificationsOpen=!1,a.settingsOpen=!1,t&&window.location.hash!==`#${e}`&&history.pushState(null,"",`#${e}`),b(),requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}))}function ee(e,t=""){t&&(a.toast=t),we(e)}function _e(){ts({icons:ks,attrs:{"stroke-width":2.25}})}function Ne(){return $e.find(e=>e.id===a.selectedState)||$e[0]}function ve(){const e=Ne();return e.districts.find(t=>t.id===a.selectedDistrict)||e.districts[0]}function S(){const e=ve();return e.schools.find(t=>t.id===a.selectedSchool)||e.schools[0]}function Cs(){const e=S(),t=new Set(oe());return[...Ge().map(s=>({label:s.label,detail:"Workspace",role:s.id})),...Fe.map(s=>({label:s.title,detail:`${s.subject} mission`,role:"student"})),..._.map(s=>({label:s.name,detail:s.room,role:"teacher"})),...q.map(s=>({label:s.title,detail:`${s.type} in LMS`,role:"lms"})),...L.map(s=>({label:s.title,detail:`${s.status} ${s.subject} lesson`,role:"lms"})),...Ye.map(s=>({label:s.title,detail:s.meta,role:"parent"})),...C.map(s=>({label:s.name,detail:s.preview,role:"messages"})),...Q().published.map(s=>({label:s.title,detail:`${s.type} post`,role:"community"})),{label:e.name,detail:`${e.category} school tenant`,role:"school-admin"}].filter(s=>t.has(s.role))}function qs(){const e=a.searchTerm.trim().toLowerCase();if(!e)return"";const t=Cs().filter(s=>`${s.label} ${s.detail}`.toLowerCase().includes(e)).slice(0,6);return`
    <section class="search-results" aria-label="Search results">
      <div><strong>${t.length?`Results for "${d(a.searchTerm)}"`:`No results for "${d(a.searchTerm)}"`}</strong><button class="text-button" data-clear-search>Clear</button></div>
      ${t.length?`<div class="search-result-list">${t.map(s=>`
        <button class="search-result" data-open-role="${s.role}">
          ${c("search")}
          <span><strong>${d(s.label)}</strong><small>${d(s.detail)}</small></span>
        </button>
      `).join("")}</div>`:""}
    </section>
  `}function Ds(){const e=qe(),t=[["School leaders","Bring school news, staff support, and everyday planning together in one welcoming place.","shield-check"],["Teachers","Plan lessons, celebrate progress, share classroom updates, and stay close to families.","graduation-cap"],["Families","Follow learning, remember important dates, and keep in touch with the school community.","users"],["Students","Discover activities, continue learning adventures, and see accomplishments grow.","sparkles"]];return`
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
            <div class="landing-login-heading"><span class="landing-lock">${c("book-open")}</span><div><p class="eyebrow">Your school portal</p><h2>Welcome back</h2><p>Enter the sign-in details provided by your school.</p></div></div>
            ${Ae?`<div class="landing-error" role="alert">${c("alert-triangle")} ${d(Ae)}</div>`:""}
            <form id="landing-login-form">
              <label><span>School email or username</span><input id="landing-identifier" type="text" autocomplete="username" placeholder="Enter your school username" required /></label>
              <label><span>Password</span><input id="landing-password" type="password" autocomplete="current-password" placeholder="Enter your password" ${e?"required":""} /></label>
              <button class="primary-action landing-submit" type="submit" ${Pe?"disabled":""}>${Pe?"Signing in…":`${c("book-open")} Sign in`}</button>
            </form>
            <p class="landing-login-note">${e?"Need help signing in? Contact your school office or teacher.":"Local preview: use global-admin, state-admin, district-admin, school-admin, teacher, parent, or student. No password is required."}</p>
          </div>
        </section>
        <section class="landing-role-section" id="solutions">
          <div class="landing-section-heading"><p class="eyebrow">Made for the whole school community</p><h2>Everyone has a place to learn and connect.</h2><p>Simple, welcoming experiences help each person focus on what matters most in their school day.</p></div>
          <div class="landing-role-grid">${t.map(([s,i,o])=>`<article class="landing-role-card">${c(o)}<strong>${s}</strong><span>${i}</span></article>`).join("")}</div>
        </section>
        <section class="landing-trust" id="trust">
          <div><p class="eyebrow">Thoughtfully made for schools</p><h2>A calm, caring place to learn and connect.</h2><p>EduConnect keeps the school day organized without getting in the way, so people can spend more time teaching, learning, and encouraging one another.</p></div>
          <div class="landing-trust-grid"><article>${c("sparkles")}<strong>Joyful learning</strong><span>Friendly activities and clear progress help students feel proud of every step.</span></article><article>${c("users")}<strong>Closer families</strong><span>Updates and reminders make it easier for families to take part in learning.</span></article><article>${c("graduation-cap")}<strong>Helpful for teachers</strong><span>Everyday classroom work stays organized and easy to find.</span></article></div>
        </section>
      </main>
      <footer class="landing-footer"><a class="landing-brand" href="#top"><span>EC</span><strong>EduConnect</strong></a><p>Learning together. Growing together.</p><small>Made for students, families, teachers, and schools.</small></footer>
    </div>
  `}function Q(){const e=S();return se[e.id]||(se[e.id]={approvers:[{id:`${e.id}-principal`,name:"Principal Office",title:"Principal",active:!0},{id:`${e.id}-assistant-principal`,name:"Assistant Principal",title:"Assistant Principal",active:!0}],published:[{id:`${e.id}-welcome`,author:"School Office",role:"Administrator",type:"Announcement",audience:"All families",title:`Welcome to ${e.name}`,body:"This board is reserved for administrator-approved school community updates.",media:"No media",time:"Approved"}],pending:[]}),se[e.id]}function xs(e){return e.approvers.find(t=>t.active)||e.approvers[0]}function Ts(e,t){var s;return((s=e.approvers.find(i=>i.id===t))==null?void 0:s.name)||"Unassigned"}function De(){const e=S();return Z[e.id]||(Z[e.id]={logo:ie(e.name).slice(0,1),logoUrl:"",crest:`${e.name} Crest`,primary:"#0050cb",accent:"#006b5f",highlight:"#735c00",background:"#f8f9ff",voice:"School-owned portal identity"}),Z[e.id]}function Qe(e,t=""){const s=ea(e.logoUrl);return s?`<img class="school-logo-image ${t}" src="${s}" alt="${d(e.crest||S().name)} logo" />`:`<span class="${t}">${d(e.logo||ie(S().name).slice(0,1))}</span>`}function na(e){return`--primary:${e.primary};--primary-2:${e.primary};--teal:${e.accent};--gold:${e.highlight};--background:${e.background};`}function Ns(){var s,i,o,u,g,p,A,D,N,F,k;const e=S(),t=(s=document.querySelector("#school-subdomain"))==null?void 0:s.value.trim().toLowerCase().replace(/[^a-z0-9-]+/g,"-").replace(/^-+|-+$/g,"");e.name=((i=document.querySelector("#school-name"))==null?void 0:i.value.trim())||e.name,e.subdomain=t||e.subdomain,e.category=((o=document.querySelector("#school-category"))==null?void 0:o.value)||e.category,e.plan=((u=document.querySelector("#school-plan"))==null?void 0:u.value.trim())||e.plan,e.theme=((g=document.querySelector("#school-theme"))==null?void 0:g.value.trim())||e.theme,e.workHours=((p=document.querySelector("#school-work-hours"))==null?void 0:p.value.trim())||e.workHours,e.customDomain=((A=document.querySelector("#school-custom-domain"))==null?void 0:A.value.trim().toLowerCase())||"",e.loginMessage=((D=document.querySelector("#school-login-message"))==null?void 0:D.value.trim())||"Welcome to your school learning portal.",e.storageQuota=Number(((N=document.querySelector("#school-storage-quota"))==null?void 0:N.value)||25),e.parentPortalEnabled=((F=document.querySelector("#school-parent-portal"))==null?void 0:F.checked)??!0,e.modules=Array.from(document.querySelectorAll("[data-school-module]:checked"),G=>G.value),Z[e.id]={...De(),logo:document.querySelector("#design-logo").value.trim()||ie(e.name).slice(0,1),logoUrl:((k=document.querySelector("#design-logo-url"))==null?void 0:k.value.trim())||"",crest:document.querySelector("#design-crest").value.trim()||`${e.name} Crest`,voice:document.querySelector("#design-voice").value.trim()||"School-owned portal identity",primary:document.querySelector("#design-primary").value,accent:document.querySelector("#design-accent").value,highlight:document.querySelector("#design-highlight").value,background:document.querySelector("#design-background").value}}function b(){if(!M){jt.innerHTML=Ds(),An(),_e();return}const e=fe.find(i=>i.id===a.role),t=S(),s=De();jt.innerHTML=`
    <div class="app ${a.compactMode?"compact-mode":""} ${a.highContrast?"high-contrast":""} ${a.fontScale==="Large"?"font-large":a.fontScale==="Extra large"?"font-extra-large":""} ${a.dyslexiaFriendly?"dyslexia-friendly":""} ${a.reducedMotion?"reduced-motion":""}" style="${na(s)}">
      ${Is(e,s)}
      <main class="workspace workspace-${a.role}">
        ${be?`<section class="impersonation-banner" role="status"><span>${c("eye")} Previewing as <strong>${d(P().label)}</strong> (${d(P().role)})</span><button type="button" data-stop-impersonating>Return to Global Admin</button></section>`:""}
        ${js(t,s)}
        ${Fs(e)}
        ${Rs()}
        ${qs()}
        ${a.role==="state-admin"?Bs():""}
        ${a.role==="district-admin"?Gs():""}
        ${a.role==="school-admin"?Ws():""}
        ${a.role==="lms"?on():""}
        ${a.role==="student"?ln():""}
        ${a.role==="teacher"?dn():""}
        ${a.role==="parent"?un():""}
        ${a.role==="messages"?pn():""}
        ${a.role==="community"?mn():""}
      </main>
      ${zs()}
      ${Os()}
    </div>
  `,Ln(),_e(),ws()}function Rs(){if(!a.tourOpen)return"";const e=ue[a.tourStep]||ue[0];return`
    <section class="tour-card" aria-label="Guided onboarding">
      <div>
        <p class="eyebrow">Walkthrough ${a.tourStep+1} of ${ue.length}</p>
        <h3>${e.title}</h3>
        <p>${e.body}</p>
      </div>
      <div class="tour-actions">
        <button class="secondary-action" data-tour-prev ${a.tourStep===0?"disabled":""}>${c("chevron-right")} Back</button>
        <button class="primary-action" data-tour-next>${c("play")} ${a.tourStep===ue.length-1?"Finish":"Next"}</button>
      </div>
    </section>
  `}function Os(){return`
    ${a.toast?`<div class="toast" role="status"><span>${d(a.toast)}</span><button class="icon-button" aria-label="Dismiss message" data-dismiss-toast>${c("x")}</button></div>`:""}
    ${a.notificationsOpen?`
      <aside class="utility-panel" aria-label="Notifications">
        <div class="section-heading"><h3>${Le("notifications")}</h3><button class="icon-button" aria-label="Close notifications" data-close-panel>${c("x")}</button></div>
        <div class="utility-actions">
          <button class="secondary-action" data-mark-notifications>${c("check")} Mark all read</button>
          <button class="secondary-action" data-simulate-live>${c("refresh-cw")} Simulate live update</button>
        </div>
        ${Y.length?Y.map(e=>`
          <article class="notice-row ${e.level.toLowerCase()} ${e.read?"read":""}">
            <strong>${e.level}</strong>
            <div><span>${e.title}</span><small>${e.target} • ${e.channel}</small></div>
            <button class="icon-button" aria-label="Dismiss ${d(e.title)}" data-dismiss-notification="${e.id}">${c("x")}</button>
          </article>
        `).join(""):'<div class="empty-state">No notifications.</div>'}
      </aside>
    `:""}
    ${a.settingsOpen?`
      <aside class="utility-panel" aria-label="Settings">
        <div class="section-heading"><h3>${Le("settings")}</h3><button class="icon-button" aria-label="Close settings" data-close-panel>${c("x")}</button></div>
        <label class="setting-field"><span>Language</span><select data-setting-select="language"><option ${a.language==="English"?"selected":""}>English</option><option ${a.language==="Spanish"?"selected":""}>Spanish</option></select></label>
        <label class="setting-field"><span>Text size</span><select data-setting-select="fontScale"><option ${a.fontScale==="Normal"?"selected":""}>Normal</option><option ${a.fontScale==="Large"?"selected":""}>Large</option><option ${a.fontScale==="Extra large"?"selected":""}>Extra large</option></select></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="compactMode" ${a.compactMode?"checked":""} /><span>Compact dashboard density</span></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="highContrast" ${a.highContrast?"checked":""} /><span>High contrast panels</span></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="dyslexiaFriendly" ${a.dyslexiaFriendly?"checked":""} /><span>Dyslexia-friendly type</span></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="reducedMotion" ${a.reducedMotion?"checked":""} /><span>Reduce motion</span></label>
        <div class="notification-preferences"><strong>Notification preferences</strong>
          <label class="toggle-row"><input type="checkbox" data-notification-preference="email" ${a.notificationPreferences.email?"checked":""} /><span>Email</span></label>
          <label class="toggle-row"><input type="checkbox" data-notification-preference="sms" ${a.notificationPreferences.sms?"checked":""} /><span>SMS</span></label>
          <label class="toggle-row"><input type="checkbox" data-notification-preference="push" ${a.notificationPreferences.push?"checked":""} /><span>Push notifications</span></label>
          <label class="setting-field"><span>Remind me before due dates</span><select data-notification-days><option value="1" ${a.notificationPreferences.dueDays===1?"selected":""}>1 day</option><option value="2" ${a.notificationPreferences.dueDays===2?"selected":""}>2 days</option><option value="7" ${a.notificationPreferences.dueDays===7?"selected":""}>1 week</option></select></label>
          <button class="secondary-action" type="button" data-send-preference-test>${c("bell")} Send test notification</button>
        </div>
        <button class="secondary-action" data-export-demo>${c("download")} Export JSON File</button>
        <label class="secondary-action import-action">${c("file-text")} Import JSON File<input type="file" id="import-demo-state" accept="application/json" /></label>
      </aside>
    `:""}
  `}function js(e,t){return`
    <section class="tenant-bar" aria-label="Current tenant">
      <div>
        ${Qe(t,"school-logo-mini")}
        <span class="tenant-label">Tenant</span>
        <strong>${e.name}</strong>
        <em>${e.category} school</em>
        <em>${e.subdomain}.educonnect.local</em>
        <em>${e.workHours}</em>
      </div>
      <div class="tenant-path">
        <span>${Ne().name}</span>
        <span>${ve().name}</span>
          <span>${e.name}</span>
          <span>${e.plan}</span>
        </div>
    </section>
  `}function Is(e,t){return`
    <aside class="sidebar">
      <div class="brand-row">
        ${Qe(t,"brand-mark")}
        <div><h1>${t.crest}</h1><p>${t.voice}</p></div>
      </div>
      <nav class="role-nav" aria-label="Portal views">
        ${Ge().map(s=>`<a class="nav-item ${a.role===s.id?"active":""}" href="#${s.id}" data-role="${s.id}" ${a.role===s.id?'aria-current="page"':""}>${c(s.icon)}<span>${s.label}</span></a>`).join("")}
      </nav>
      <div class="reference-card">
        <img src="${As(e.image)}" alt="" />
        <div><strong>Stitch reference</strong><span>Visual source</span></div>
      </div>
    </aside>
  `}function zs(){return`
    <nav class="mobile-role-nav" aria-label="Mobile portal views">
      ${Ge().map(e=>`<a class="mobile-nav-item ${a.role===e.id?"active":""}" href="#${e.id}" data-role="${e.id}" ${a.role===e.id?'aria-current="page"':""}>${c(e.icon)}<span>${e.label}</span></a>`).join("")}
    </nav>
  `}function Fs(e){const t=e.id==="messages"?"Communication Hub":e.id==="state-admin"?"State Governance":e.id==="district-admin"?"District Operations":e.id==="school-admin"?"School Administration":`${e.label} Dashboard`;return`
    <header class="topbar">
      <div><p class="eyebrow">${e.label} workspace</p><h2>${t}</h2></div>
      <div class="topbar-actions">
        <label class="searchbox">${c("search")}<input id="global-search" value="${d(a.searchTerm)}" placeholder="Search resources..." /></label>
        ${B("manage-users")&&oe().includes("state-admin")?`<button class="secondary-action role-controls-action" data-role-controls type="button">${c("users")} Role controls</button>`:""}
        ${B("manage-users")&&oe().includes("school-admin")?`<button class="secondary-action school-customization-action" data-school-customization type="button">${c("settings")} School design</button>`:""}
        <div class="account-chip"><span>${ie(P().label)}</span><div><strong>${P().label}</strong><small>${P().role}</small></div></div>
        ${qe()?"":`<button class="secondary-action reset-action" data-reset-demo type="button">${c("rotate-ccw")} Reset Demo</button>`}
        <button class="icon-button" aria-label="Notifications" data-toggle-notifications>${c("bell")}${ze()?`<span class="status-dot">${ze()}</span>`:""}</button>
        <button class="icon-button" aria-label="Settings" data-toggle-settings>${c("settings")}</button>
        <button class="icon-button" aria-label="Sign out" data-sign-out>${c("x")}</button>
      </div>
    </header>
  `}function Bs(){const e=Ne(),t=e.districts,s=t.flatMap(o=>o.schools),i=s.filter(o=>o.status==="Active").length;return`
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">State admin workspace</p>
          <h2>Tenant Governance</h2>
          <p>State administrators supervise districts, compliance, tenant standards, statewide calendars, and cross-district readiness.</p>
        </div>
        <div class="inline-actions">
          <button class="secondary-action" data-open-role="district-admin">${c("building-2")} Review Districts</button>
          <button class="primary-action" data-add-school ${V("manage-tenants","Only state and district admins can add school tenants.")}>${c("plus")} Add School Tenant</button>
        </div>
      </div>
      ${Se("manage-tenants","Tenant creation and district configuration are admin-only in this demo.")}
      ${x("Districts",t.length,"building-2","blue")}
      ${x("Schools",s.length,"graduation-cap","teal")}
      ${x("Active tenants",i,"shield-check","gold")}
      ${Hs()}
      ${ia()}
      ${Ke()}
      <section class="panel state-management-panel">
        <div class="section-heading"><h3>District Oversight</h3><span>${e.name}</span></div>
        <div class="management-list">
          ${t.map(o=>`
            <button class="management-row ${o.id===ve().id?"active":""}" data-manage-district="${o.id}">
              <div class="management-icon">${c("building-2")}</div>
              <div><strong>${o.name}</strong><small>${o.region} • Superintendent: ${o.superintendent}</small></div>
              <span>${o.schools.length} schools</span>
            </button>
          `).join("")}
        </div>
      </section>
      ${oa()}
      <section class="panel audit-panel">
        <div class="section-heading"><h3>Audit Trail</h3><span>Cross-tenant accountability</span></div>
        <div class="audit-list">
          ${le.map(o=>`
            <article class="audit-row">
              ${c("clipboard-check")}
              <div><strong>${o.event}</strong><small>${o.actor} • ${o.scope}</small></div>
              <time>${o.time}</time>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="panel calendar-panel">
        <div class="section-heading"><h3>Statewide Calendar</h3><span>Policy, reporting, and public events</span></div>
        <div class="calendar-list">
          ${Ht.map(o=>`<article class="calendar-row"><div class="calendar-date">${o.date}</div><div><strong>${o.title}</strong><small>${o.audience} • ${o.type}</small></div></article>`).join("")}
        </div>
      </section>
      <section class="panel hierarchy-panel">
        <div class="section-heading"><h3>Governance Chain</h3><span>State to classroom</span></div>
        <div class="hierarchy-list">
          ${ss.map(([o,u],g)=>`<article class="hierarchy-level"><div class="level-number">${g+1}</div><div><h4>${o}</h4><p>${u.join(" • ")}</p></div></article>`).join("")}
        </div>
      </section>
      ${_s()}
    </section>
  `}function Gs(){const e=Ne(),t=ve(),s=t.schools,i=s.reduce((u,g)=>u+g.students,0),o=s.reduce((u,g)=>u+g.staff,0);return`
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">District admin workspace</p>
          <h2>${t.name}</h2>
          <p>District administrators manage school tenants, staffing, rollout readiness, district messages, and cross-school performance.</p>
        </div>
        <button class="primary-action" data-add-school ${V("manage-tenants","Only district and state admins can add school tenants.")}>${c("plus")} Add School Tenant</button>
      </div>
      ${x("Schools",s.length,"graduation-cap","blue")}
      ${x("Students",i.toLocaleString(),"users","teal")}
      ${x("Staff",o.toLocaleString(),"shield-check","gold")}
      <section class="panel tenant-controls">
        <div class="section-heading"><h3>District Scope</h3><span>${e.name}</span></div>
        <div class="tenant-selectors">
          <label><span>State</span><select id="state-filter">${$e.map(u=>`<option value="${u.id}" ${a.selectedState===u.id?"selected":""}>${u.name}</option>`).join("")}</select></label>
          <label><span>District</span><select id="district-filter">${e.districts.map(u=>`<option value="${u.id}" ${t.id===u.id?"selected":""}>${u.name}</option>`).join("")}</select></label>
        </div>
      </section>
      <section class="panel district-management-panel">
        <div class="section-heading"><h3>Schools In This District</h3><span>${t.region}</span></div>
        <div class="management-list">
          ${s.map(u=>`<button class="management-row ${u.id===S().id?"active":""}" data-manage-school="${u.id}"><div class="management-icon">${c("graduation-cap")}</div><div><strong>${u.name}</strong><small>${u.category} • ${u.subdomain}.educonnect.local</small></div><span>${u.status}</span></button>`).join("")}
        </div>
      </section>
      ${ia()}
      ${Ke()}
      <section class="panel audit-panel">
        <div class="section-heading"><h3>District Audit Trail</h3><span>School and staff actions</span></div>
        <div class="audit-list">${le.map(u=>`<article class="audit-row">${c("clipboard-check")}<div><strong>${u.event}</strong><small>${u.actor} • ${u.scope}</small></div><time>${u.time}</time></article>`).join("")}</div>
      </section>
    </section>
  `}function Us(){const e=S(),t=De(),s=ve();return`
    <section class="panel school-customization-panel" id="school-customization" aria-labelledby="school-customization-title">
      <div class="section-heading customization-heading">
        <div><p class="eyebrow">School-owned experience</p><h3 id="school-customization-title">School Customization</h3><p>Update this school's identity, instance details, logo, colors, and portal voice.</p></div>
        <span>${B("manage-users")?"Editable":"Read-only"}</span>
      </div>
      ${B("manage-tenants")?`<label class="customization-school-picker"><span>Customize school</span><select id="customization-school-filter">${s.schools.map(i=>`<option value="${i.id}" ${i.id===e.id?"selected":""}>${d(i.name)}</option>`).join("")}</select></label>`:""}
      <div class="design-studio school-customization-studio">
        <div class="brand-preview-card school-brand-preview" style="${na(t)}">
          <div class="brand-preview-top">
            ${Qe(t,"brand-preview-logo")}
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
          <div class="customization-form-actions span-2"><button class="secondary-action" type="button" data-reset-school-design>Reset colors</button><button class="primary-action" type="submit" ${V("manage-users","Only school administrators can customize the school experience.")}>${c("check")} Save school customization</button></div>
        </form>
      </div>
      <div class="theme-presets"><div><strong>Theme presets</strong><span>Start with a coordinated school palette.</span></div><div class="palette-list">${He.map(i=>`<button class="palette-button ${e.theme===i.name?"active":""}" data-design-preset="${i.name}" type="button"><span style="background:${i.primary}"></span><span style="background:${i.accent}"></span><span style="background:${i.highlight}"></span><strong>${i.name}</strong></button>`).join("")}</div></div>
      ${Se("manage-users","School branding is managed by authorized administrators.")}
    </section>
  `}function Ws(){const e=S(),t=Q(),s=I.filter(o=>o.status==="Watch").length,i=O.filter(o=>o.status!=="Reviewed").length;return`
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">School admin workspace</p>
          <h2>${e.name}</h2>
          <p>School administrators run campus operations: users, safety messaging, approvals, LMS visibility, roster health, and family communication windows.</p>
        </div>
        <div class="inline-actions"><button class="secondary-action" data-school-customization type="button">${c("settings")} Customize school</button><button class="primary-action" data-open-role="community">${c("megaphone")} Review Community Posts</button></div>
      </div>
      ${x("Students",e.students.toLocaleString(),"users","blue")}
      ${x("Staff",e.staff.toLocaleString(),"shield-check","teal")}
      ${x("Pending approvals",t.pending.length,"clipboard-check","gold")}
      ${Us()}
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
          <button class="permission-row" data-open-role="lms"><strong>LMS</strong><span>Assignments and gradebook</span><small>${q.length} assignments</small></button>
          <button class="permission-row" data-open-role="messages"><strong>Messages</strong><span>Family and staff communication</span><small>${C.reduce((o,u)=>o+(u.unread||0),0)} unread</small></button>
          <button class="permission-row" data-open-role="community"><strong>Community</strong><span>Approval queue and published posts</span><small>${t.pending.length} pending</small></button>
        </div>
      </section>
      ${oa()}
      ${Ke()}
    </section>
  `}function Hs(){const e={"state-admin":"Statewide governance, district oversight, compliance, and policy","district-admin":"School tenants, shared calendars, roster health, and district analytics","school-admin":"Campus users, family access, safety, approvals, and operations",lms:"Assignments, gradebook, learning files, and classroom integrations",student:"Personal learning missions, progress, and approved resources",teacher:"Classes, assignments, grading, messages, and community submissions",parent:"Linked learner progress, deadlines, approved posts, and messages",messages:"Authorized family, staff, and school conversations",community:"School announcements, submissions, approvals, and published updates"},t=Ge();return`
    <section class="panel users-roles-panel role-control-center" id="role-control-center" aria-labelledby="role-control-title">
      <div class="section-heading role-control-heading">
        <div><p class="eyebrow">Global administration</p><h3 id="role-control-title">Role Control Center</h3></div>
        <span>${B("manage-users")?"Permissions editable":"Read-only"}</span>
      </div>
      <p class="role-control-intro">Open role-based workspaces, review their access boundaries, and manage account permissions from one place.</p>
      <div class="role-control-launcher" aria-label="Role workspaces">
        ${t.map(s=>`
          <button class="role-control-card" type="button" data-open-role="${s.id}">
            <span class="role-control-icon">${c(s.icon)}</span>
            <span><strong>${s.label}</strong><small>${e[s.id]}</small></span>
            <em>Open workspace ${c("chevron-right")}</em>
          </button>
        `).join("")}
      </div>
      <div class="section-heading account-access-heading"><h4>Account access</h4><span>${z.length} profiles</span></div>
      <div class="users-grid">
        ${z.map(s=>`
          <article class="user-role-card">
            <div><strong>${s.label}</strong><small>${s.role} • ${s.scope||"global"} scope • lands on ${s.landing}</small></div>
            ${B("global-access")&&s.id!==P().id?`<button class="secondary-action impersonate-action" type="button" data-impersonate-profile="${s.id}">${c("eye")} Preview as this user</button>`:""}
            <div class="permission-chip-list">
              ${as.map(([i,o])=>`
                <label class="permission-chip ${s.permissions.includes(i)?"active":""}">
                  <input type="checkbox" data-profile-permission="${s.id}:${i}" ${s.permissions.includes(i)?"checked":""} ${B("manage-users")?"":"disabled"} />
                  <span>${o}</span>
                </label>
              `).join("")}
            </div>
          </article>
        `).join("")}
      </div>
      ${Se("manage-users","Only administrators can change role permissions.")}
    </section>
  `}function Ke(){return`
    <section class="panel realtime-panel">
      <div class="section-heading">
        <div><h3>Realtime Operations</h3><span>${a.liveUpdates?"Live updates enabled":"Live updates paused"}</span></div>
        <div class="inline-actions">
          <label class="mini-toggle"><input type="checkbox" data-toggle-live ${a.liveUpdates?"checked":""} /><span>Live</span></label>
          <button class="secondary-action" data-simulate-live>${c("refresh-cw")} Simulate Update</button>
        </div>
      </div>
      <div class="realtime-list">
        ${ae.map(e=>`
          <article class="realtime-row">
            <strong>${e.type}</strong>
            <div><span>${e.title}</span><small>${e.detail}</small></div>
            <time>${e.time}</time>
          </article>
        `).join("")}
      </div>
    </section>
  `}function ia(){const e=S(),t=Q(),s=Math.round(I.reduce((p,A)=>p+A.grade,0)/I.length),i=I.filter(p=>p.status==="Watch").length,o=O.filter(p=>p.status!=="Reviewed").length,u=C.reduce((p,A)=>p+(A.unread||0),0),g=[{role:"lms",label:"LMS",iconName:"layers",metric:`${L.length} lessons`,detail:`${q.length} assignments • ${o} need review`},{role:"student",label:"Students",iconName:"sparkles",metric:`${I.length} learners`,detail:`${i} students on watch status`},{role:"teacher",label:"Teachers",iconName:"graduation-cap",metric:`${_.length} classes`,detail:`${re.length} activity events in the feed`},{role:"parent",label:"Parents",iconName:"users",metric:`${Ye.length} deadlines`,detail:`${a.checkedDeadlines.length} family tasks checked`},{role:"messages",label:"Messages",iconName:"message-circle",metric:`${u} unread`,detail:`${C.length} parent and group threads`},{role:"community",label:"Community",iconName:"megaphone",metric:`${t.pending.length} pending`,detail:`${t.published.length} approved posts live`}];return`
    <section class="panel unified-os-panel">
      <div class="section-heading">
        <div><p class="eyebrow">One integrated system</p><h3>Unified School Operating System</h3></div>
        <span>${e.name}</span>
      </div>
      <div class="unified-os-grid">
        ${g.map(p=>`
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
            <span><strong>${s}%</strong><small>Average roster grade</small></span>
            <span><strong>${o}</strong><small>Submissions in queue</small></span>
            <span><strong>${a.offlinePackReady?"Ready":"Build"}</strong><small>Offline learning pack</small></span>
          </div>
          ${O.slice(0,3).map(p=>`<div class="snapshot-row"><strong>${p.student}</strong><span>${p.assignment}</span><em>${p.status}</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Teachers + Classes</h4><button class="text-button" data-open-role="teacher">Open Teacher ${c("chevron-right")}</button></div>
          ${_.map(p=>`<div class="snapshot-row"><strong>${p.name}</strong><span>${p.room}</span><em>${p.pending} pending</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Parents + Messages</h4><button class="text-button" data-open-role="messages">Open Messages ${c("chevron-right")}</button></div>
          ${C.slice(0,3).map(p=>`<div class="snapshot-row"><strong>${p.name}</strong><span>${p.preview}</span><em>${p.unread||0} unread</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Admin + Community</h4><button class="text-button" data-open-role="community">Open Community ${c("chevron-right")}</button></div>
          <div class="snapshot-metrics">
            <span><strong>${t.pending.length}</strong><small>Approval queue</small></span>
            <span><strong>${ze()}</strong><small>Unread alerts</small></span>
            <span><strong>${le.length}</strong><small>Audit entries</small></span>
          </div>
          ${ae.slice(0,2).map(p=>`<div class="snapshot-row"><strong>${p.type}</strong><span>${p.title}</span><em>${p.time}</em></div>`).join("")}
        </article>
      </div>
    </section>
  `}function _s(){const e=me.filter(s=>s.done).length,t=he.filter(s=>s.done).length;return`
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
            <button class="secondary-action" data-set-gateway="demo">${c("play")} Demo Mode</button>
            <button class="primary-action" data-set-gateway="backend">${c("database")} Backend Ready</button>
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Database Blueprint</h4><button class="text-button" data-provision-schema>Provision mock schema</button></div>
          <div class="schema-list">
            ${ye.map(s=>`<div class="schema-row"><strong>${s.name}</strong><span>${s.records} records</span><em>${s.status}</em><small>${s.detail}</small></div>`).join("")}
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Admin Onboarding</h4><span>${e}/${me.length} complete</span></div>
          <div class="checklist-list">
            ${me.map(s=>`<label class="checklist-row"><input type="checkbox" data-onboarding-task="${s.id}" ${s.done?"checked":""} /><span class="custom-check">${s.done?c("check"):""}</span><span><strong>${s.label}</strong><small>${s.owner}</small></span></label>`).join("")}
          </div>
          <form id="onboarding-user-form" class="mini-form">
            <input id="onboarding-user-name" placeholder="Invite user name" />
            <select id="onboarding-user-role"><option>Teacher</option><option>Parent</option><option>Student</option><option>Admin</option></select>
            <button class="secondary-action" type="submit">${c("plus")} Invite</button>
          </form>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>File Uploads</h4><span>${W.length} files</span></div>
          <label class="upload-drop">${c("paperclip")} Add assignment, PDF, image, or community file<input type="file" id="production-file-upload" multiple /></label>
          <div class="upload-list">
            ${W.map(s=>`<div class="upload-row"><strong>${s.name}</strong><span>${s.area} • ${s.size}</span><em>${s.status}</em></div>`).join("")}
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Notification Delivery</h4><button class="text-button" data-send-delivery-test>Send test batch</button></div>
          ${K.map(s=>`<div class="delivery-row"><strong>${s.channel}</strong><span>${s.audience}</span><em>${s.status}</em><small>${s.detail}</small></div>`).join("")}
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Privacy & Security</h4><span>${t}/${he.length} ready</span></div>
          <div class="checklist-list">
            ${he.map(s=>`<label class="checklist-row"><input type="checkbox" data-security-check="${s.id}" ${s.done?"checked":""} /><span class="custom-check">${s.done?c("check"):""}</span><span><strong>${s.label}</strong><small>${s.status}</small></span></label>`).join("")}
          </div>
        </article>

        <article class="production-card deploy-card">
          <div class="section-heading"><h4>Deployment Pipeline</h4><span>Hostinger live</span></div>
          ${Te.map(s=>`<div class="pipeline-row"><strong>${s.step}</strong><span>${s.detail}</span><em class="${s.status.toLowerCase()}">${s.status}</em></div>`).join("")}
        </article>
      </div>
    </section>
  `}function oa(){return`
    <section class="panel compliance-panel">
      <div class="section-heading"><h3>Privacy & Compliance Dashboard</h3><span>FERPA operations</span></div>
      <div class="compliance-grid">
        ${os.map(e=>`
          <article class="compliance-card">
            ${c("shield-check")}
            <div><strong>${e.value}</strong><span>${e.label}</span><small>${e.status} • ${e.detail}</small></div>
          </article>
        `).join("")}
      </div>
      ${Se("view-compliance","Compliance detail is admin-only.")}
    </section>
  `}function ra({teacherStudio:e=!1}={}){const t=a.lessonFilter==="All"?L:L.filter(o=>o.status===a.lessonFilter),s=L.filter(o=>o.status==="Published").length,i=L.length-s;return`
    <section class="panel lesson-library-panel ${e?"teacher-lesson-library":"lms-panel"}">
      <div class="section-heading lesson-library-heading">
        <div><p class="eyebrow">${e?"Teacher authoring":"Course content"}</p><h3>Lesson Library</h3></div>
        <div class="inline-actions">
          <select id="lesson-filter" aria-label="Filter lessons"><option>All</option><option ${a.lessonFilter==="Published"?"selected":""}>Published</option><option ${a.lessonFilter==="Draft"?"selected":""}>Draft</option></select>
          ${e?`<button class="primary-action" type="button" data-new-lesson ${V("teacher-tools","Only teachers and administrators can create lessons.")}>${c("plus")} Create lesson</button>`:""}
        </div>
      </div>
      <div class="lesson-library-stats"><span><strong>${L.length}</strong> total lessons</span><span><strong>${s}</strong> published</span><span><strong>${i}</strong> drafts</span></div>
      <div class="lesson-card-grid">
        ${t.map(o=>{const u=o.blocks.filter(p=>p.type==="quiz").length,g=o.blocks.filter(p=>p.type==="media").length;return`
            <article class="lesson-card">
              <div class="lesson-card-top"><span class="lesson-status ${o.status.toLowerCase()}">${o.status}</span><small>${d(o.subject)}</small></div>
              <h4>${d(o.title)}</h4>
              <p>${d(o.summary)}</p>
              <div class="lesson-meta"><span>${c("graduation-cap")} ${d(o.className)}</span><span>${c("clock")} ${o.estimatedMinutes} min</span><span>${c("layers")} ${o.blocks.length} blocks</span></div>
              <div class="lesson-feature-row"><span>${u} quiz${u===1?"":"zes"}</span><span>${g} media</span><span>${o.points} points</span></div>
              <div class="lesson-card-actions">
                <button class="secondary-action" type="button" data-preview-lesson="${o.id}">${c("eye")} Preview</button>
                ${B("teacher-tools")?`<button class="secondary-action" type="button" data-edit-lesson="${o.id}">${c("pen-line")} Edit</button><button class="text-button" type="button" data-toggle-lesson="${o.id}">${o.status==="Published"?"Unpublish":"Publish"}</button>`:""}
              </div>
            </article>
          `}).join("")||`<div class="empty-state">No ${a.lessonFilter.toLowerCase()} lessons yet.</div>`}
      </div>
      ${Ys(L.find(o=>o.id===a.lessonPreviewId))}
    </section>
  `}function Ys(e){return e?`<aside class="lesson-preview-panel" aria-label="Lesson preview">
    <div class="section-heading"><div><p class="eyebrow">Student preview</p><h4>${d(e.title)}</h4></div><button class="icon-button" type="button" data-close-lesson-preview aria-label="Close lesson preview">${c("x")}</button></div>
    <p>${d(e.summary)}</p>
    <div class="lesson-preview-meta"><span>${d(e.className)}</span><span>${e.estimatedMinutes} minutes</span><span>${e.points} points</span></div>
    <div class="lesson-preview-blocks">${e.blocks.map((t,s)=>t.type==="text"?`<article><span class="block-number">${s+1}</span><div><strong>${d(t.title)}</strong><p>${d(t.body)}</p></div></article>`:t.type==="media"?`<article><span class="block-number">${s+1}</span><div><strong>${d(t.title)}</strong>${la(t)}</div></article>`:`<article><span class="block-number">${s+1}</span><div><strong>${d(t.title)}</strong><p>${d(t.question)}</p><div class="preview-answer-list">${t.options.filter(Boolean).map(i=>`<span>${d(i)}</span>`).join("")}</div></div></article>`).join("")}</div>
  </aside>`:""}function Vs(e,t,s){const i=`<div class="block-order-actions"><button type="button" data-move-lesson-block="${e.id}:up" ${t===0?"disabled":""} aria-label="Move block up">↑</button><span>${t+1}</span><button type="button" data-move-lesson-block="${e.id}:down" ${t===s-1?"disabled":""} aria-label="Move block down">↓</button><button type="button" data-remove-lesson-block="${e.id}" aria-label="Remove block">${c("x")}</button></div>`;return e.type==="quiz"?`
    <article class="lesson-block-editor quiz-block-editor" data-lesson-block="${e.id}">
      <div class="lesson-block-heading"><div><span class="block-type-icon">${c("clipboard-check")}</span><div><strong>Quiz</strong><small>Auto-graded knowledge check</small></div></div>${i}</div>
      <div class="lesson-block-fields">
        <label><span>Quiz title</span><input value="${d(e.title)}" data-block-field="${e.id}:title" /></label>
        <label><span>Question type</span><select data-block-field="${e.id}:questionType"><option ${e.questionType==="Multiple choice"?"selected":""}>Multiple choice</option><option ${e.questionType==="True or false"?"selected":""}>True or false</option><option ${e.questionType==="Short answer"?"selected":""}>Short answer</option><option ${e.questionType==="Fill in the blank"?"selected":""}>Fill in the blank</option><option ${e.questionType==="Matching"?"selected":""}>Matching</option></select></label>
        <label class="span-2"><span>Question</span><textarea data-block-field="${e.id}:question" placeholder="What should students understand?">${d(e.question)}</textarea></label>
        <div class="quiz-option-editor span-2">
          ${e.questionType==="Matching"?`<div class="matching-pair-editor">${(e.pairs||[]).map((o,u)=>`<label><span>Prompt ${u+1}</span><input value="${d(o.left)}" data-match-pair="${e.id}:${u}:left" /></label><label><span>Match ${u+1}</span><input value="${d(o.right)}" data-match-pair="${e.id}:${u}:right" /></label>`).join("")}</div>`:["Short answer","Fill in the blank"].includes(e.questionType)?`<label><span>Accepted answer</span><input aria-label="Accepted short answer" value="${d(e.options[0]||"")}" data-quiz-option="${e.id}:0" /></label>`:e.options.map((o,u)=>`<label class="quiz-option ${e.questionType==="True or false"&&u>1?"hidden-option":""}"><input type="radio" name="correct-${e.id}" value="${u}" data-correct-answer="${e.id}" ${Number(e.correctAnswer)===u?"checked":""} /><span>Correct</span><input aria-label="Answer option ${u+1}" value="${d(o)}" data-quiz-option="${e.id}:${u}" /></label>`).join("")}
        </div>
        <label><span>Points</span><input type="number" min="1" max="100" value="${e.points}" data-block-field="${e.id}:points" /></label>
        <label class="toggle-field"><input type="checkbox" data-block-field="${e.id}:required" ${e.required?"checked":""} /><span>Required question</span></label>
        <label><span>Time limit (minutes)</span><input type="number" min="0" max="180" value="${e.timeLimit||0}" data-block-field="${e.id}:timeLimit" /></label>
        <label><span>Maximum attempts</span><input type="number" min="1" max="10" value="${e.maxAttempts||1}" data-block-field="${e.id}:maxAttempts" /></label>
        <label class="toggle-field"><input type="checkbox" data-block-field="${e.id}:randomize" ${e.randomize?"checked":""} /><span>Randomize answer choices</span></label>
        <label class="toggle-field"><input type="checkbox" data-block-field="${e.id}:showAnswers" ${e.showAnswers!==!1?"checked":""} /><span>Show feedback after submission</span></label>
        <label class="span-2"><span>Answer feedback</span><textarea data-block-field="${e.id}:feedback" placeholder="Explain the correct answer.">${d(e.feedback)}</textarea></label>
      </div>
    </article>`:e.type==="media"?`
    <article class="lesson-block-editor media-block-editor" data-lesson-block="${e.id}">
      <div class="lesson-block-heading"><div><span class="block-type-icon">${c("video")}</span><div><strong>Media</strong><small>Video, image, audio, document, or link</small></div></div>${i}</div>
      <div class="lesson-block-fields">
        <label><span>Media title</span><input value="${d(e.title)}" data-block-field="${e.id}:title" /></label>
        <label><span>Media type</span><select data-block-field="${e.id}:mediaType">${["Video","Image","Audio","Document","Link"].map(o=>`<option ${e.mediaType===o?"selected":""}>${o}</option>`).join("")}</select></label>
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
    </article>`}function Js(){const e=a.lessonDraft||aa();return`
    <section class="panel lesson-builder-panel" aria-labelledby="lesson-builder-title">
      <div class="section-heading lesson-builder-heading"><div><p class="eyebrow">Lesson Studio</p><h3 id="lesson-builder-title">${e.id?"Edit lesson":"Create a lesson"}</h3></div><button class="icon-button" type="button" data-close-lesson-builder aria-label="Close lesson builder">${c("x")}</button></div>
      <form id="lesson-builder-form" class="lesson-builder-form">
        <div class="lesson-settings-grid">
          <label class="span-2"><span>Lesson title</span><input required value="${d(e.title)}" data-lesson-field="title" placeholder="Example: Exploring persuasive writing" /></label>
          <label><span>Subject</span><select data-lesson-field="subject">${["English Language Arts","Math","Science","Social Studies","Art","Technology"].map(t=>`<option ${e.subject===t?"selected":""}>${t}</option>`).join("")}</select></label>
          <label><span>Class</span><select data-lesson-field="className">${_.map(t=>`<option ${e.className===t.name?"selected":""}>${t.name}</option>`).join("")}</select></label>
          <label class="span-2"><span>Learning objective and summary</span><textarea required data-lesson-field="summary" placeholder="What will students learn and do?">${d(e.summary)}</textarea></label>
          <label><span>Due date</span><input type="date" value="${d(e.dueDate)}" data-lesson-field="dueDate" /></label>
          <label><span>Estimated minutes</span><input type="number" min="5" max="240" value="${e.estimatedMinutes}" data-lesson-field="estimatedMinutes" /></label>
          <label><span>Total points</span><input type="number" min="0" max="1000" value="${e.points}" data-lesson-field="points" /></label>
          <label><span>Visibility</span><select data-lesson-field="visibility"><option ${e.visibility==="Teacher only"?"selected":""}>Teacher only</option><option ${e.visibility==="Students"?"selected":""}>Students</option><option ${e.visibility==="Students and families"?"selected":""}>Students and families</option></select></label>
          <label class="toggle-field"><input type="checkbox" data-lesson-field="allowLate" ${e.allowLate?"checked":""} /><span>Allow late completion</span></label>
          <label class="toggle-field"><input type="checkbox" data-lesson-field="requireOrder" ${e.requireOrder?"checked":""} /><span>Require blocks in order</span></label>
        </div>
        <div class="lesson-block-toolbar"><div><strong>Lesson blocks</strong><small>Add and reorder learning content.</small></div><div class="inline-actions"><button class="secondary-action" type="button" data-add-lesson-block="text">${c("file-text")} Content</button><button class="secondary-action" type="button" data-add-lesson-block="media">${c("video")} Media</button><button class="secondary-action" type="button" data-add-lesson-block="quiz">${c("clipboard-check")} Quiz</button></div></div>
        <div class="question-bank-bar"><div><strong>Question bank</strong><small>Reuse standards-aligned questions.</small></div><select id="question-bank-select" aria-label="Question bank item">${Me.map(t=>`<option value="${t.id}">${d(t.subject)} • ${d(t.question)}</option>`).join("")}</select><button class="secondary-action" type="button" data-add-bank-question>${c("plus")} Add question</button></div>
        <div class="lesson-block-list">${e.blocks.map((t,s)=>Vs(t,s,e.blocks.length)).join("")}</div>
        <div class="lesson-publish-bar"><div><strong>${e.blocks.length} blocks</strong><span>Changes are saved when you choose an action.</span></div><div class="inline-actions"><button class="secondary-action" type="submit" data-lesson-status="Draft">Save draft</button><button class="primary-action" type="submit" data-lesson-status="Published">${c("check")} Publish lesson</button></div></div>
      </form>
    </section>
  `}function Qs(){return a.lessonBuilderOpen?Js():ra({teacherStudio:!0})}function la(e){var s;if(e.file){const i=(s=e.file.id)!=null&&s.startsWith("upload-")&&a.apiMode==="live-api"?hs(e.file.id):e.file.dataUrl||"#";return`<a class="lesson-media-link" href="${d(i)}" ${i==="#"?"":'target="_blank" rel="noreferrer"'}>${c("paperclip")}<span><strong>${d(e.file.name)}</strong><small>${d(e.caption||e.file.type||"Lesson attachment")}</small></span>${c("download")}</a>`}const t=ea(e.url);return t?e.mediaType==="Image"?`<figure class="student-lesson-media"><img src="${t}" alt="${d(e.caption||e.title)}" /><figcaption>${d(e.caption)}</figcaption></figure>`:e.mediaType==="Audio"?`<div class="student-lesson-media"><audio controls src="${t}"></audio><p>${d(e.caption)}</p></div>`:e.mediaType==="Video"&&/\.(mp4|webm|ogg)(\?|$)/i.test(t)?`<div class="student-lesson-media"><video controls src="${t}"></video><p>${d(e.caption)}</p></div>`:`<a class="lesson-media-link" href="${t}" target="_blank" rel="noreferrer">${c(e.mediaType==="Video"?"play":"paperclip")}<span><strong>${d(e.title)}</strong><small>${d(e.caption||`Open ${e.mediaType.toLowerCase()}`)}</small></span>${c("chevron-right")}</a>`:`<div class="lesson-media-placeholder">${c("paperclip")}<span>Media link has not been added yet.</span></div>`}function Ks(e){if(["Short answer","Fill in the blank"].includes(e.questionType))return`<label class="short-answer-field"><span>Your answer</span><input name="quiz-${e.id}" ${e.required?"required":""} /></label>`;if(e.questionType==="Matching"){const s=(e.pairs||[]).filter(o=>o.left.trim()&&o.right.trim()),i=e.randomize?[...s].reverse():s;return s.map((o,u)=>`<label class="matching-answer"><span>${d(o.left)}</span><select name="quiz-${e.id}-${u}" ${e.required?"required":""}><option value="">Choose a match</option>${i.map(g=>`<option value="${d(g.right)}">${d(g.right)}</option>`).join("")}</select></label>`).join("")}let t=e.options.map((s,i)=>({option:s,optionIndex:i})).filter(({option:s})=>s.trim());return e.randomize&&(t=[...t].reverse()),t.map(({option:s,optionIndex:i})=>`<label><input type="radio" name="quiz-${e.id}" value="${i}" ${e.required?"required":""} /><span>${d(s)}</span></label>`).join("")}function Bt(e){var i;const t=((i=a.lessonProgress)==null?void 0:i[e.id])||{},s=new Set(t.completedBlocks||[]);return e.blocks.filter(o=>o.type==="quiz"&&t.completed).forEach(o=>s.add(o.id)),e.blocks.length?Math.round(s.size/e.blocks.length*100):0}function Zs(){var i,o,u,g;const e=L.filter(p=>p.status==="Published"),t=e.find(p=>p.id===a.activeStudentLessonId)||e[0],s=t?(i=a.lessonProgress)==null?void 0:i[t.id]:null;return`
    <section class="panel student-lessons-panel">
      <div class="section-heading"><div><p class="eyebrow">My classroom</p><h3>${Le("lessons")}</h3></div><span>${e.length} available</span></div>
      <div class="student-lesson-layout">
        <div class="student-lesson-list">
          ${e.map(p=>`<button class="student-lesson-card ${(t==null?void 0:t.id)===p.id?"active":""}" type="button" data-open-student-lesson="${p.id}"><span>${c("book-open")}</span><div><strong>${d(p.title)}</strong><small>${d(p.subject)} • ${p.estimatedMinutes} min • ${p.points} points</small>${ge(Bt(p))}</div><em>${Bt(p)}%</em></button>`).join("")}
        </div>
        ${t?`<article class="student-lesson-view">
          <div class="student-lesson-hero"><span>${d(t.subject)}</span><h4>${d(t.title)}</h4><p>${d(t.summary)}</p><div><small>Due ${t.dueDate||"anytime"}</small><small>${t.allowLate?"Late work allowed":"Firm deadline"}</small><small>${t.requireOrder?"Complete in order":"Flexible order"}</small></div><div class="student-lesson-tools"><button type="button" data-bookmark-lesson="${t.id}">${c((o=a.bookmarkedLessons)!=null&&o.includes(t.id)?"star":"book-open")} ${(u=a.bookmarkedLessons)!=null&&u.includes(t.id)?"Bookmarked":"Bookmark"}</button><button type="button" data-read-lesson="${t.id}">${c("play")} Read aloud</button></div></div>
          <form class="student-lesson-content" data-submit-lesson="${t.id}">
            ${t.blocks.map((p,A)=>{var D,N,F,k,G,R,H,ce;return p.type==="text"?`<section class="student-content-block"><span class="block-number">${A+1}</span><div><h5>${d(p.title)}</h5><p>${d(p.body).replace(/\n/g,"<br />")}</p><button class="text-button" type="button" data-complete-lesson-block="${t.id}:${p.id}">${(D=s==null?void 0:s.completedBlocks)!=null&&D.includes(p.id)?c("check")+" Completed":"Mark section complete"}</button></div></section>`:p.type==="media"?`<section class="student-content-block"><span class="block-number">${A+1}</span><div><h5>${d(p.title)}</h5>${la(p)}<button class="text-button" type="button" data-complete-lesson-block="${t.id}:${p.id}">${(N=s==null?void 0:s.completedBlocks)!=null&&N.includes(p.id)?c("check")+" Completed":"Mark media complete"}</button></div></section>`:`<fieldset class="student-quiz-block"><legend><span class="block-number">${A+1}</span><span><strong>${d(p.title)}</strong><small>${p.points} points${p.required?" • Required":""}${p.timeLimit?` • ${p.timeLimit} min`:""} • ${p.maxAttempts||1} attempt${(p.maxAttempts||1)===1?"":"s"}</small></span></legend><p>${d(p.question)}</p><div class="student-answer-list">${Ks(p)}</div>${s&&p.showAnswers!==!1?`<div class="quiz-feedback ${(k=(F=s.answers)==null?void 0:F[p.id])!=null&&k.correct?"correct":"incorrect"}">${(R=(G=s.answers)==null?void 0:G[p.id])!=null&&R.correct?c("check"):c("alert-triangle")} ${d((ce=(H=s.answers)==null?void 0:H[p.id])!=null&&ce.correct?p.feedback||"Correct.":"Review this question and try again.")}</div>`:""}</fieldset>`}).join("")}
            <label class="student-lesson-notes"><span>Private notes</span><textarea data-lesson-note="${t.id}" placeholder="Write notes or questions to revisit...">${d(((g=a.studentNotes)==null?void 0:g[t.id])||"")}</textarea><button class="secondary-action" type="button" data-save-lesson-note="${t.id}">Save notes</button></label>
            <div class="student-lesson-submit"><div>${s?`<strong>${s.score}%</strong><span>Latest score • Attempt ${s.attempts||1}</span>`:`<strong>${t.points}</strong><span>points available</span>`}</div><div class="inline-actions">${s!=null&&s.certificate?`<button class="secondary-action" type="button" data-download-certificate="${t.id}">${c("award")} Certificate</button>`:""}<button class="primary-action" type="submit">${c("check")} ${s?"Submit again":"Complete lesson"}</button></div></div>
          </form>
        </article>`:'<div class="empty-state">No published lessons are available yet.</div>'}
      </div>
    </section>`}function Gt(){return P().role==="Student"?P().id:"student"}function pe(e,t=!1){let s=ne.find(i=>i.assignmentId===e&&i.studentId===Gt());return!s&&t&&(s={id:`work-${e}-${Date.now()}`,assignmentId:e,studentId:Gt(),student:P().role==="Student"?P().label:"Demo Learner",response:"",attachments:[],status:"Not started",attempt:1,submittedAt:"",score:null,feedback:"",returnedAt:""},ne.unshift(s)),s}function Xs(){const e=q.filter(o=>(o.status||"Published")==="Published"),t=e.find(o=>o.id===a.activeAssignmentId)||e[0],s=t?pe(t.id):null,i=e.filter(o=>{var u;return!pe(o.id)||["Not started","Draft"].includes((u=pe(o.id))==null?void 0:u.status)}).length;return`<section class="panel student-assignments-panel">
    <div class="section-heading"><div><p class="eyebrow">${Le("assignments")}</p><h3>Submit Your Work</h3></div><span>${i} need attention</span></div>
    <div class="student-assignment-layout">
      <div class="student-assignment-list">${e.map(o=>{const u=pe(o.id);return`<button type="button" class="student-assignment-card ${(t==null?void 0:t.id)===o.id?"active":""}" data-open-assignment="${o.id}"><span>${c("file-text")}</span><div><strong>${d(o.title)}</strong><small>${d(o.className||"All classes")} • Due ${d(o.dueDate||o.lockDate)}</small></div><em>${(u==null?void 0:u.status)||"Not started"}</em></button>`}).join("")}</div>
      ${t?`<form class="student-assignment-work" data-assignment-work="${t.id}">
        <div class="assignment-detail-heading"><div><span>${d(t.type)}</span><h4>${d(t.title)}</h4><p>${d(t.instructions||"Complete the assignment and submit your work.")}</p></div><strong>${t.points||100} pts</strong></div>
        <div class="assignment-requirements"><span>${t.allowResubmit?"Resubmissions allowed":"One submission"}</span><span>Up to ${t.maxAttempts||1} attempts</span><span>${d(t.rubric)}</span></div>
        ${(s==null?void 0:s.status)==="Returned"?`<div class="returned-feedback"><strong>${s.score}% • Returned</strong><p>${d(s.feedback||"Review the teacher feedback and resubmit when ready.")}</p></div>`:""}
        <label><span>Written response</span><textarea id="student-assignment-response" placeholder="Write or paste your response here...">${d((s==null?void 0:s.response)||"")}</textarea></label>
        <label class="assignment-upload"><span>Attach files</span><input type="file" data-assignment-file="${t.id}" multiple accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.ppt,.pptx,.txt" /><small>Up to 5 MB per file</small></label>
        <div class="submission-attachments">${((s==null?void 0:s.attachments)||[]).map(o=>`<span>${c("paperclip")} ${d(o.name)} <button type="button" data-remove-assignment-file="${t.id}:${o.id}" aria-label="Remove ${d(o.name)}">${c("x")}</button></span>`).join("")||"<small>No files attached.</small>"}</div>
        <div class="assignment-submit-actions"><span>Attempt ${(s==null?void 0:s.attempt)||1} of ${t.maxAttempts||1}</span><div class="inline-actions"><button class="secondary-action" type="submit" data-work-status="Draft">${Le("saveDraft")}</button><button class="primary-action" type="submit" data-work-status="Submitted">${c("send")} ${Le("submit")}</button></div></div>
      </form>`:'<div class="empty-state">No published assignments.</div>'}
    </div>
  </section>`}function en(){var u;const e=L.filter(g=>g.status==="Published"),t=e.filter(g=>{var p,A;return(A=(p=a.lessonProgress)==null?void 0:p[g.id])==null?void 0:A.completed}),s=t.map(g=>a.lessonProgress[g.id].score),i=s.length?Math.round(s.reduce((g,p)=>g+p,0)/s.length):0,o=q.filter(g=>{var p;return!["Submitted","Returned"].includes((p=pe(g.id))==null?void 0:p.status)}).length;return`<section class="panel student-progress-hub"><div class="section-heading"><div><p class="eyebrow">Learning overview</p><h3>My Progress</h3></div><span>Resumes automatically</span></div><div class="student-progress-grid"><article><strong>${t.length}/${e.length}</strong><span>Lessons completed</span>${ge(e.length?Math.round(t.length/e.length*100):0)}</article><article><strong>${i}%</strong><span>Average quiz score</span>${ge(i)}</article><article class="${o?"needs-attention":""}"><strong>${o}</strong><span>Missing or draft assignments</span></article><article><strong>${((u=a.bookmarkedLessons)==null?void 0:u.length)||0}</strong><span>Bookmarked lessons</span></article><article><strong>${t.filter(g=>a.lessonProgress[g.id].certificate).length}</strong><span>Certificates earned</span></article></div></section>`}function tn(){const e=ne.filter(s=>s.status==="Submitted"),t=ne.filter(s=>s.status==="Returned");return`<section class="panel teacher-operations-panel">
    <div class="section-heading"><div><p class="eyebrow">Teacher command center</p><h3>Learning Operations</h3></div><span>${e.length} ready to grade</span></div>
    <div class="teacher-operation-stats"><span><strong>${L.filter(s=>s.status==="Draft").length}</strong> lesson drafts</span><span><strong>${q.filter(s=>s.status==="Published").length}</strong> live assignments</span><span><strong>${e.length}</strong> grading queue</span><span><strong>${t.length}</strong> returned</span></div>
    <div class="grading-inbox"><div class="section-heading"><h4>Submission Inbox</h4><span>Score, comment, return</span></div>${e.length?e.map(s=>{const i=q.find(o=>o.id===s.assignmentId);return`<form class="grading-inbox-row" data-return-submission="${s.id}"><div><strong>${d(s.student)}</strong><small>${d((i==null?void 0:i.title)||s.assignmentId)} • Attempt ${s.attempt}</small><p>${d(s.response||"Attachment submission")}</p></div><label><span>Score</span><input type="number" min="0" max="100" value="${s.score??""}" required data-grade-score /></label><label><span>Feedback</span><textarea required data-grade-feedback>${d(s.feedback||"")}</textarea></label><button class="primary-action" type="submit">${c("check")} Return</button></form>`}).join(""):'<div class="empty-state">No submissions are waiting for review.</div>'}</div>
  </section>`}function an(){return`<section class="panel curriculum-planner-panel">
    <div class="section-heading"><div><p class="eyebrow">Curriculum map</p><h3>Courses and Units</h3></div><span>${te.length} courses</span></div>
    <form class="curriculum-create-form" id="course-create-form"><input id="course-title" placeholder="New course title" required /><select id="course-subject"><option>English Language Arts</option><option>Math</option><option>Science</option><option>Social Studies</option><option>Art</option><option>Technology</option></select><input id="course-grade" placeholder="Grade" required /><button class="secondary-action" type="submit">${c("plus")} Add course</button></form>
    <div class="curriculum-course-list">${te.map(e=>`<article class="curriculum-course"><div class="curriculum-course-heading"><div><span>${d(e.subject)} • Grade ${d(e.grade)}</span><h4>${d(e.title)}</h4><small>${e.standards.join(" • ")||"Standards can be added"}</small></div><form data-add-unit="${e.id}"><input aria-label="New unit for ${d(e.title)}" placeholder="New unit title" required /><button class="text-button" type="submit">${c("plus")} Add unit</button></form></div><div class="curriculum-unit-list">${e.units.map(t=>`<section><div><strong>${d(t.title)}</strong><small>${d(t.description||"Curriculum unit")}</small></div><span>${t.lessonIds.length} lessons</span><span>${t.assignmentIds.length} assignments</span><form data-link-curriculum="${e.id}:${t.id}"><select aria-label="Content to add to ${d(t.title)}"><optgroup label="Lessons">${L.map(s=>`<option value="lesson:${s.id}">${d(s.title)}</option>`).join("")}</optgroup><optgroup label="Assignments">${q.map(s=>`<option value="assignment:${s.id}">${d(s.title)}</option>`).join("")}</optgroup></select><button class="text-button" type="submit">Link content</button></form></section>`).join("")}</div></article>`).join("")}</div>
  </section>`}function sn(){const e=[...L.filter(t=>t.dueDate).map(t=>({title:t.title,date:t.dueDate,kind:"Lesson",status:t.status})),...q.filter(t=>t.dueDate).map(t=>({title:t.title,date:t.dueDate,kind:"Assignment",status:t.status}))].sort((t,s)=>t.date.localeCompare(s.date));return`<section class="panel teacher-calendar-panel"><div class="section-heading"><div><p class="eyebrow">Instruction plan</p><h3>Teaching Calendar</h3></div><span>${e.length} scheduled</span></div><div class="teaching-calendar-list">${e.map(t=>`<article><time>${d(t.date)}</time><div><strong>${d(t.title)}</strong><small>${t.kind} • ${t.status}</small></div></article>`).join("")||'<div class="empty-state">Add a due date to a lesson or assignment to place it here.</div>'}</div></section>`}function nn(){return`<section class="panel notification-automation-panel"><div class="section-heading"><div><p class="eyebrow">Family communication</p><h3>Automated Reminders</h3></div><span>${Object.entries(a.notificationPreferences).filter(([t,s])=>["email","sms","push"].includes(t)&&s).map(([t])=>t.toUpperCase()).join(" + ")||"Dashboard only"}</span></div><p>Due-date reminders are scheduled ${a.notificationPreferences.dueDays} day${a.notificationPreferences.dueDays===1?"":"s"} ahead using each person's preferences.</p><button class="secondary-action" type="button" data-send-class-reminder>${c("send")} Send class reminder now</button><div class="delivery-summary">${K.slice(0,3).map(t=>`<span><strong>${d(t.channel)}</strong> ${d(t.status)}</span>`).join("")}</div></section>`}function on(){const e=S(),t=Ue.find(o=>o.id===a.activeAccount)||Ue[0],s=L.reduce((o,u)=>o+u.blocks.filter(g=>g.type==="quiz").length,0),i=L.filter(o=>o.status==="Published").length;return`
    <section class="dashboard-grid lms-grid">
      <div class="welcome-strip lms-welcome">
        <div>
          <p class="eyebrow">${e.name} advanced LMS</p>
          <h2>Lessons, quizzes, media, and grading in one LMS</h2>
          <p>Teachers can build multimedia lessons, publish quizzes, manage assignments, grade submissions, and support offline learning inside this school instance.</p>
        </div>
        <button class="primary-action" data-build-offline ${V("lms","Only teachers and administrators can build LMS offline packs.")}>${c("download")} ${a.offlinePackReady?"Rebuild Offline Pack":"Build Offline Pack"}</button>
      </div>

      ${x("Published lessons",i,"book-open","blue")}
      ${x("Quiz blocks",s,"clipboard-check","teal")}
      ${x("Offline packs",a.offlinePackReady?"Ready":"Not built","download","gold")}

      ${ra()}
      ${cn()}

      <section class="panel lms-panel simplicity-suite">
        <div class="section-heading"><h3>Simple Classroom Experience</h3><span>Clean by default</span></div>
        ${ns.slice(0,2).map(([o,u])=>`<article class="strength-row">${c("check")}<div><strong>${o}</strong><small>${u}</small></div></article>`).join("")}
      </section>

      <section class="panel lms-panel free-suite">
        <div class="section-heading"><h3>Zero Cost Core</h3><span>No premium paywall</span></div>
        <div class="free-card"><strong>$0</strong><p>Schools can use classroom basics, paperless assignments, messaging, and parent summaries without hidden fees.</p></div>
      </section>

      <section class="panel lms-panel grading-suite">
        <div class="section-heading"><h3>Advanced Grading</h3><span>Automated tests + rubrics + analytics</span></div>
        <div class="assignment-list">
          ${q.map(o=>`
            <article class="assignment-row">
              <div><strong>${o.title}</strong><small>${o.type} • ${o.rubric}</small></div>
              ${ge(o.analytics)}
              <span>${o.analytics}% mastery</span>
            </article>
          `).join("")}
        </div>
      </section>

      ${rn()}

      <section class="panel lms-panel deadline-suite">
        <div class="section-heading"><h3>Deadline Controls</h3><span>Firm locks + exceptions</span></div>
        ${q.map(o=>`
          <article class="deadline-control">
            <div><strong>${o.title}</strong><small>Locks ${o.lockDate}</small></div>
            <span>${o.exception}</span>
          </article>
        `).join("")}
      </section>

      <section class="panel lms-panel account-suite">
        <div class="section-heading"><h3>Account Context</h3><span>No constant log-outs</span></div>
        <div class="account-switcher">
          ${Ue.map(o=>`<button class="${t.id===o.id?"active":""}" data-lms-account="${o.id}"><strong>${o.name}</strong><span>${o.context}</span></button>`).join("")}
        </div>
        <p class="account-note">Current context: <strong>${t.name}</strong> can switch roles without leaving ${e.name}.</p>
      </section>

      <section class="panel lms-panel workflow-suite">
        <div class="section-heading"><h3>Paperless Assignment Workflow</h3><span>Create to return</span></div>
        <div class="workflow-steps">
          ${["Create","Distribute","Collect","Grade","Return","Archive"].map((o,u)=>`<div><strong>${u+1}</strong><span>${o}</span></div>`).join("")}
        </div>
      </section>

      <section class="panel lms-panel guardrail-suite">
        <div class="section-heading"><h3>Automated Guardrails</h3><span>Submission and quiz controls</span></div>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="lockSubmissions" ${a.guardrails.lockSubmissions?"checked":""} ${B("lms")?"":"disabled"} /><span class="custom-check">${a.guardrails.lockSubmissions?c("check"):""}</span><span>Prevent edits after submission</span></label>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="hideAnswers" ${a.guardrails.hideAnswers?"checked":""} ${B("lms")?"":"disabled"} /><span class="custom-check">${a.guardrails.hideAnswers?c("check"):""}</span><span>Hide answers until quiz closes</span></label>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="parentSummaries" ${a.guardrails.parentSummaries?"checked":""} ${B("lms")?"":"disabled"} /><span class="custom-check">${a.guardrails.parentSummaries?c("check"):""}</span><span>Auto-return parent email summaries</span></label>
        ${Se("lms","LMS guardrails are managed by teachers and administrators.")}
      </section>

      <section class="panel lms-panel offline-suite">
        <div class="section-heading"><h3>Offline Learning</h3><span>${a.offlinePackReady?"Synced for low-connectivity use":"Build a pack for offline work"}</span></div>
        <div class="offline-card">
          <div class="offline-status ${a.offlinePackReady?"ready":""}">${a.offlinePackReady?c("check"):c("download")}</div>
          <div><strong>${a.offlinePackReady?"Offline pack ready":"Offline pack not built"}</strong><p>Includes assignments, rubrics, PDF annotations, and queued submissions for later sync.</p></div>
        </div>
      </section>

      <section class="panel lms-panel privacy-suite">
        <div class="section-heading"><h3>Learning Privacy</h3><span>FERPA-aware LMS</span></div>
        ${is.map(o=>`<article class="strength-row">${c("shield-check")}<div><strong>${o.label}</strong><small>${o.detail}</small></div></article>`).join("")}
      </section>
    </section>
  `}function rn(){const e=O.find(t=>t.id===a.selectedSubmissionId)||O[0];return`
    <section class="panel lms-panel gradebook-detail-suite">
      <div class="section-heading"><h3>Gradebook Detail</h3><span>Submissions, rubric, comments</span></div>
      <div class="gradebook-layout">
        <div class="submission-list">
          ${O.map(t=>`
            <button class="submission-row ${e.id===t.id?"active":""}" data-submission="${t.id}">
              ${c(t.status==="Missing"?"alert-triangle":"file-text")}
              <span><strong>${t.student}</strong><small>${t.assignment} • ${t.status}</small></span>
              <em>${t.score}%</em>
            </button>
          `).join("")}
        </div>
        <article class="submission-detail">
          <div class="section-heading"><h4>${e.student}</h4><span>${e.assignment}</span></div>
          ${e.rubric.map(([t,s])=>`<div class="rubric-row"><span>${t}</span>${ge(Math.round(s/4*100))}<strong>${s}/4</strong></div>`).join("")}
          <label><span>Teacher comment</span><textarea id="submission-comment">${d(e.comment)}</textarea></label>
          <button class="primary-action" data-save-submission="${e.id}" ${V("teacher-tools","Only teachers and administrators can save grading comments.")}>${c("check")} Save Comment</button>
        </article>
      </div>
    </section>
  `}function ln(){const e=S(),t=(e.studentPoints+a.completed.length*75).toLocaleString();return`
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
      ${x("Daily streak","5 days","trending-up","blue")}
      ${x("Books read","12","book-open","teal")}
      ${en()}
      ${Xs()}
      ${Zs()}
      <section class="panel missions-panel">
        <div class="section-heading"><div><p class="eyebrow">Today</p><h3>My Missions</h3></div><button class="text-button" data-action="All available missions are already shown for this learner.">See all ${c("chevron-right")}</button></div>
        <div class="mission-list">
          ${Fe.map(s=>{const i=a.completed.includes(s.id);return`
              <article class="mission-card ${s.accent}">
                <div class="mission-icon">${c(s.icon)}</div>
                <div class="mission-main">
                  <div class="mission-meta"><span>${s.subject}</span><span>${s.due}</span></div>
                  <h4>${s.title}</h4>
                  ${ge(i?100:s.progress)}
                </div>
                <button class="complete-button ${i?"done":""}" data-complete="${s.id}">${c(i?"check":"play")} ${i?"Done":s.action}</button>
              </article>
            `}).join("")}
        </div>
      </section>
      <section class="panel awards-panel">
        <div class="section-heading"><h3>Awards</h3>${c("award")}</div>
        <div class="award-grid">${["Kindness Kid","Problem Solver","Fast Learner","Story Teller"].map(s=>`<div class="award-tile">${c("sparkles")}<span>${s}</span></div>`).join("")}</div>
      </section>
    </section>
  `}function cn(){const e=ze();return`
    <section class="panel lms-panel background-services" aria-label="Passive background services">
      <div class="section-heading">
        <div><p class="eyebrow">Passive background layer</p><h3>Background Services</h3></div>
        <span>Runs quietly behind LMS work</span>
      </div>
      <div class="background-service-grid">
        <article class="background-service-card">
          <div>${c("refresh-cw")}<strong>Workspace sync</strong></div>
          <small>${Rt.length} connected services attach, collect, archive, and export in the background.</small>
          <span>Passive</span>
        </article>
        <article class="background-service-card">
          <div>${c("paperclip")}<strong>File handling</strong></div>
          <small>${xe.length} class files are converted, attached, or archived without interrupting classroom flow.</small>
          <span>Passive</span>
        </article>
        <article class="background-service-card">
          <div>${c("bell")}<strong>Notification routing</strong></div>
          <small>${e} unread alert${e===1?"":"s"} stay in the notification tray unless action is needed.</small>
          <span>Tray</span>
        </article>
        <article class="background-service-card">
          <div>${c("calendar-days")}<strong>Calendar bridge</strong></div>
          <small>${Ht.length} shared events inform deadlines and family reminders in the background.</small>
          <span>Synced</span>
        </article>
      </div>
      <details class="background-details">
        <summary>View background service activity</summary>
        <div class="background-activity">
          ${Rt.map(t=>`<article><strong>${t.app}</strong><small>${t.action}</small><span>${t.status}</span></article>`).join("")}
          ${Ee.map(t=>`<article><strong>${t.item}</strong><small>${t.owner}</small><span>${a.offlinePackReady?t.status:"Waiting"}</span></article>`).join("")}
        </div>
      </details>
    </section>
  `}function dn(){const e=S(),t=a.selectedClass==="All"?_:_.filter(i=>i.name===a.selectedClass),s=a.rosterFilter==="All"?I:I.filter(i=>i.status===a.rosterFilter);return`
    <section class="dashboard-grid teacher-grid">
      <div class="welcome-strip"><div><p class="eyebrow">${e.name} instance</p><h2>Welcome back, Demo Teacher.</h2><p>Build lessons with rich content, quizzes, and media, then publish them directly to your students.</p></div><button class="primary-action" data-new-lesson ${V("teacher-tools","Only teachers and administrators can create lessons.")}>${c("plus")} Create lesson</button></div>
      ${x("Average grade",e.avgGrade,"trending-up","blue")}
      ${x("Attendance",e.attendance,"calendar-days","teal")}
      ${x("Messages",e.messages,"mail","gold")}
      ${tn()}
      ${sn()}
      ${nn()}
      ${Qs()}
      <section class="panel class-panel">
        <div class="section-heading">
          <h3>Active Classes</h3>
          <select id="class-filter" aria-label="Filter classes"><option>All</option>${_.map(i=>`<option ${a.selectedClass===i.name?"selected":""}>${i.name}</option>`).join("")}</select>
        </div>
        <div class="class-list">${t.map(i=>`<article class="class-card"><div><h4>${i.name}</h4><p>${i.room}</p></div><div class="class-metrics"><span>${i.grade}% grade</span><span>${i.attendance}% attendance</span><span>${i.pending} pending</span></div><button class="icon-button" aria-label="Open ${i.name} options" data-action="${i.name} class tools opened.">${c("more-horizontal")}</button></article>`).join("")}</div>
      </section>
      <section class="panel assignment-composer-panel">
        <div class="section-heading"><h3>Quick Assignment</h3><span>Add a simple graded task</span></div>
        <form id="assignment-form" class="assignment-form">
          <label><span>Title</span><input id="assignment-title" placeholder="Example: Reading Checkpoint" required /></label>
          <label><span>Class</span><select id="assignment-class">${_.map(i=>`<option>${i.name}</option>`).join("")}</select></label>
          <label><span>Type</span><select id="assignment-type"><option>Automated quiz</option><option>Writing task</option><option>Project</option><option>Reading response</option></select></label>
          <label><span>Due date</span><input type="date" id="assignment-due" value="2026-10-30" /></label>
          <label class="span-2"><span>Instructions</span><textarea id="assignment-instructions" placeholder="What should students submit?"></textarea></label>
          <label><span>Points</span><input type="number" id="assignment-points" min="1" max="1000" value="100" /></label>
          <label><span>Maximum attempts</span><input type="number" id="assignment-attempts" min="1" max="10" value="2" /></label>
          <label class="toggle-field span-2"><input type="checkbox" id="assignment-resubmit" checked /><span>Allow resubmissions after feedback</span></label>
          <button class="primary-action" type="submit" ${V("teacher-tools","Only teachers and administrators can create assignments.")}>${c("plus")} Add Assignment</button>
        </form>
        <div class="quick-assignment-list">${q.slice(0,5).map(i=>`<article><strong>${d(i.title)}</strong><span>${d(i.className||"All classes")} • ${i.status||"Published"}</span></article>`).join("")}</div>
      </section>
      <section class="panel activity-panel">
        <div class="section-heading"><h3>Recent Student Activity</h3><button class="icon-button" aria-label="Refresh activity" data-refresh-activity>${c("refresh-cw")}</button></div>
        ${re.map(([i,o,u,g])=>`<article class="activity-row"><div class="avatar">${ie(i)}</div><div><p><strong>${i}</strong> ${o}</p><span>${u} | ${g}</span></div><button class="icon-button" aria-label="Reply to ${i}" data-reply-student="${i}">${c("pen-line")}</button></article>`).join("")}
      </section>
      ${an()}
      <section class="panel grading-card"><h3>Grading To-Do</h3>${ge(68)}<p>18 submissions left across 3 classes.</p><button class="secondary-action" data-open-role="lms">${c("clipboard-check")} Open Grading Hub</button></section>
      ${Se("teacher-tools","Teacher tools are read-only for this signed-in role.")}
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
  `}function un(){const e=S();return`
    <section class="dashboard-grid parent-grid">
      <div class="welcome-strip parent-welcome"><div><p class="eyebrow">${e.learnerName}'s progress</p><h2>Welcome back, ${e.guardianName}.</h2><p>${e.learnerName}'s family view belongs to ${e.name}'s private instance.</p></div><button class="primary-action" data-open-role="messages">${c("send")} Message Teacher</button></div>
      ${x("Current grade","A-","trending-up","blue")}
      ${x("Attendance","98%","calendar-days","teal")}
      ${x("Reading pace","56%","book-open","gold")}
      <section class="panel teacher-note"><div class="teacher-avatar">MH</div><h3>Ms. Henderson</h3><p>"Leo is making great progress in Geometry. Keep practicing the new vocabulary cards at home."</p><button class="secondary-action" data-open-role="messages">${c("message-circle")} Start Chat</button></section>
      <section class="panel deadline-panel">
        <div class="section-heading"><h3>Upcoming Deadlines</h3><button class="text-button" data-open-role="platform">Calendar ${c("chevron-right")}</button></div>
        ${Ye.map(t=>{const s=a.checkedDeadlines.includes(t.title);return`<label class="deadline-row ${t.urgent?"urgent":""}"><input type="checkbox" data-deadline="${t.title}" ${s?"checked":""} /><span class="custom-check">${s?c("check"):""}</span><span><strong>${t.title}</strong><small>${t.meta}</small></span></label>`}).join("")}
      </section>
      <section class="panel mobile-parent-panel">
        <div class="phone-preview">
          <div class="phone-top">${e.learnerName}</div>
          <strong>${e.name}</strong>
          <span>${a.workHoursOpen?"Teacher chat open":"Teacher chat resumes during work hours"}</span>
          <button data-open-role="messages">${c("send")} Message</button>
        </div>
        <div class="mobile-actions">
          <h3>Mobile Parent Experience</h3>
          ${ls.map(t=>`<article class="mobile-action">${c("smartphone")}<div><strong>${t.title}</strong><small>${t.detail}</small></div></article>`).join("")}
        </div>
      </section>
      <section class="panel subject-panel"><h3>Subject Snapshot</h3>${[["Math",92],["Science",88],["Reading",84],["History",91]].map(([t,s])=>`<div class="subject-row"><span>${t}</span>${ge(s)}<strong>${s}%</strong></div>`).join("")}</section>
    </section>
  `}function pn(){const e=S(),t=C.filter(i=>i.type===a.conversationFilter),s=C.find(i=>i.id===a.activeConversationId)||t[0]||C[0];return`
    <section class="messages-shell">
      <aside class="conversation-list">
        <div class="segment-control">${["Parents","Groups"].map(i=>`<button class="${a.conversationFilter===i?"active":""}" data-filter="${i}">${i}</button>`).join("")}</div>
        ${t.map(i=>`<button class="conversation ${s.id===i.id?"active":""}" data-conversation="${i.id}"><div class="avatar">${ie(i.name)}</div><div><strong>${i.name}</strong><span>${i.preview}</span></div>${i.unread?`<em>${i.unread}</em>`:""}</button>`).join("")}
        <div class="emergency-card ${a.emergencyOverride?"active":""}">
          ${c("alert-triangle")}
          <div><strong>Emergency Override</strong><span>${a.emergencyOverride?"Administrator enabled for urgent safety communication.":"Available only to school administrators."}</span></div>
          <button class="secondary-action" data-toggle-emergency ${V("emergency","Emergency override is admin-only.")}>${a.emergencyOverride?"Disable":"Enable"}</button>
        </div>
      </aside>
      <section class="chat-panel">
        <header class="chat-header"><div class="avatar">${ie(s.name)}</div><div><h3>${s.name}</h3><p>${s.online?"Online now":s.role}</p></div><div class="chat-tools"><button class="icon-button" aria-label="Start video call" data-start-call="${s.id}">${c("video")}</button><button class="icon-button" aria-label="More chat options" data-action="Chat options opened for ${s.name}.">${c("more-horizontal")}</button></div></header>
        ${a.activeCallName?`<div class="call-banner">${c("video")} <strong>Live call with ${a.activeCallName}</strong><button class="text-button" data-end-call>End call</button></div>`:""}
        <div class="work-hours-banner ${a.workHoursOpen||a.emergencyOverride?"open":"closed"}">
          ${c(a.workHoursOpen||a.emergencyOverride?"check":"x")}
          <div><strong>${a.emergencyOverride?"Emergency override active":a.workHoursOpen?"Communication window open":"After-hours messaging paused"}</strong><span>${e.workHours}. ${a.emergencyOverride?"Urgent administrator-approved messages can be sent now.":a.workHoursOpen?"Parents and teachers can message now.":e.afterHours}</span></div>
          <button class="text-button" data-toggle-hours>${a.workHoursOpen?"Simulate after hours":"Open work hours"}</button>
        </div>
        <div class="chat-stream">${s.messages.map(i=>`<div class="bubble ${i.from==="me"?"mine":""}"><p>${i.text}</p><span>${i.time}</span></div>`).join("")}</div>
        <form class="compose-box ${a.workHoursOpen||a.emergencyOverride?"":"locked"}" id="compose"><input id="message-draft" value="${a.draft}" placeholder="${a.workHoursOpen||a.emergencyOverride?`Message ${s.name}...`:"Messaging resumes during work hours"}" ${a.workHoursOpen||a.emergencyOverride?"":"disabled"} /><button class="primary-action" type="submit" ${a.workHoursOpen||a.emergencyOverride?"":"disabled"}>${c("send")} Send</button></form>
      </section>
    </section>
  `}function mn(){const e=S(),t=Q(),s=xs(t);return`
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
          ${t.pending.length?t.pending.map(i=>hn(i)).join(""):'<div class="empty-state">No posts waiting for approval.</div>'}
        </div>
      </section>

      <section class="panel published-board">
        <div class="section-heading"><h3>Published Community Board</h3><span>${t.published.length} approved</span></div>
        <div class="post-list">
          ${t.published.map(i=>gn(i)).join("")}
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
        ${Se("approve-posts","Only administrators can approve or reject community posts.")}
      </section>

      <section class="panel workflow-rules-panel">
        <div class="section-heading"><h3>Approval Workflow Rules</h3>${c("shield-check")}</div>
        ${rs.map(([i,o])=>`<article class="rule-row"><strong>${i}</strong><span>${o}</span></article>`).join("")}
      </section>
    </section>
  `}function hn(e){const t=Q();return`
    <article class="board-post pending-post">
      <div class="post-header"><div class="avatar">${ie(e.author)}</div><div><strong>${e.title}</strong><span>${e.author} • ${e.role} • ${e.audience}</span></div></div>
      <p>${e.body}</p>
      <div class="post-media">${c("paperclip")} ${e.media||"No media"}</div>
      <div class="assigned-approver">${c("shield-check")} Assigned to ${Ts(t,e.approverId)}</div>
      <div class="approval-actions">
        <button class="secondary-action" data-reject-post="${e.id}" ${V("approve-posts","Only administrators can reject community posts.")}>${c("x")} Reject</button>
        <button class="primary-action" data-approve-post="${e.id}" ${V("approve-posts","Only administrators can approve community posts.")}>${c("check")} Approve</button>
      </div>
    </article>
  `}function gn(e){return`
    <article class="board-post">
      <div class="post-header"><div class="avatar">${ie(e.author)}</div><div><strong>${e.title}</strong><span>${e.author} • ${e.role} • ${e.time}</span></div></div>
      <p>${e.body}</p>
      <div class="post-tags"><span>${e.type}</span><span>${e.audience}</span><span>${e.media||"No media"}</span></div>
    </article>
  `}function vn(){const e=ve(),t=e.schools.length+1,s=`demo-school-${Date.now()}`,i={id:s,name:`Demo Learning Academy ${t}`,category:"Public",students:240+t*18,staff:32+t,status:"Onboarding",subdomain:`demoacademy${t}`,plan:"District Core",modules:["SIS","LMS","Messaging","Family Portal"],storage:18,uptime:"Provisioning",theme:"Discovery Blue",isolation:"Dedicated tenant database",avgGrade:"89.0%",attendance:"95.0%",messages:"0 pending",studentPoints:760,studentName:"Explorer",guardianName:"Jordan",learnerName:"Riley",workHours:"Mon-Fri, 8:00 AM-4:00 PM",afterHours:"Messages are queued until office hours"};e.schools.push(i),a.selectedSchool=s,w("Created demo school tenant",e.name),a.toast=`${i.name} was added to ${e.name}.`,b()}function bn(){const e=`Quick Check ${q.length+1}`;ca({title:e,className:a.selectedClass==="All"?"All classes":a.selectedClass,type:"Teacher-created assignment",lockDate:"Next Friday, 8:00 PM"}),ee("lms",`${e} was created in the LMS grading suite.`)}function ca({title:e,className:t,type:s,lockDate:i,dueDate:o="",instructions:u="Complete the assignment and submit your work.",points:g=100,maxAttempts:p=1,allowResubmit:A=!1}){const D=`${e.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${Date.now()}`;q.unshift({id:D,title:e,className:t,type:s,instructions:u,dueDate:o,points:g,status:"Published",allowResubmit:A,maxAttempts:p,attachments:[],rubric:"Auto rubric draft",analytics:0,lockDate:i||"Next Friday, 8:00 PM",exception:"None"}),U("FYI",`${e} published`,t,"Student inbox"),j("LMS",`${e} created`,`${s} assigned to ${t}.`),w(`Created assignment ${e}`,S().name)}function Ut(e=""){const t=L.find(s=>s.id===e);a.lessonDraft=aa(t),a.lessonBuilderOpen=!0,a.role!=="teacher"?ee("teacher",t?`${t.title} opened in Lesson Studio.`:"Lesson Studio opened."):b()}function fn(e){var u,g;const t=a.lessonDraft;if(!((u=t==null?void 0:t.title)!=null&&u.trim())||!((g=t==null?void 0:t.summary)!=null&&g.trim())){v("Add a lesson title and learning objective before saving.");return}if(!t.blocks.length){v("Add at least one content, media, or quiz block.");return}if(t.blocks.find(p=>{var A;return p.type==="quiz"&&(!p.question.trim()||["Short answer","Fill in the blank"].includes(p.questionType)&&!((A=p.options[0])!=null&&A.trim())||p.questionType==="Matching"&&(p.pairs||[]).filter(D=>D.left.trim()&&D.right.trim()).length<2||!["Short answer","Fill in the blank","Matching"].includes(p.questionType)&&p.options.filter(D=>D.trim()).length<2)})){v("Each quiz needs a question and at least two answer choices.");return}const i=structuredClone(t);i.id||(i.id=`lesson-${i.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}-${Date.now()}`),i.status=e,i.visibility=e==="Published"&&i.visibility==="Teacher only"?"Students":i.visibility,i.updatedAt="Just now";const o=L.findIndex(p=>p.id===i.id);o>=0?L.splice(o,1,i):L.unshift(i),a.lessonDraft=null,a.lessonBuilderOpen=!1,a.activeStudentLessonId=e==="Published"?i.id:a.activeStudentLessonId,j("LMS",`${i.title} ${e==="Published"?"published":"saved"}`,`${i.blocks.length} lesson blocks for ${i.className}.`),U(e==="Published"?"FYI":"Action",`${i.title} ${e==="Published"?"is available to students":"saved as a draft"}`,i.className,"Lesson Studio"),w(`${e==="Published"?"Published":"Saved draft lesson"} ${i.title}`,i.className),v(`${i.title} ${e==="Published"?"published to students":"saved as a draft"}.`)}function $n(e){const t=L.find(s=>s.id===e);t&&(t.status=t.status==="Published"?"Draft":"Published",t.visibility=t.status==="Published"&&t.visibility==="Teacher only"?"Students":t.visibility,t.updatedAt="Just now",w(`${t.status==="Published"?"Published":"Unpublished"} lesson ${t.title}`,t.className),v(`${t.title} is now ${t.status.toLowerCase()}.`))}function yn(e,t){var F;const s=L.find(k=>k.id===e&&k.status==="Published");if(!s)return;const i=s.blocks.filter(k=>k.type==="quiz"),o=(F=a.lessonProgress)==null?void 0:F[s.id],u=Math.min(...i.map(k=>Number(k.maxAttempts)||1),10);if(((o==null?void 0:o.attempts)||0)>=u){v(`Maximum attempts reached for ${s.title}.`);return}const g={};let p=0,A=0;const D=new FormData(t);i.forEach(k=>{const G=D.get(`quiz-${k.id}`);let R,H;if(["Short answer","Fill in the blank"].includes(k.questionType))R=String(G||"").trim(),H=R.toLowerCase()===String(k.options[0]||"").trim().toLowerCase();else if(k.questionType==="Matching"){const ce=(k.pairs||[]).filter(de=>de.left.trim()&&de.right.trim());R=ce.map((de,ke)=>String(D.get(`quiz-${k.id}-${ke}`)||"")),H=ce.every((de,ke)=>R[ke]===de.right)}else R=G===null?-1:Number(G),H=R===Number(k.correctAnswer);g[k.id]={selected:R,correct:H},A+=Number(k.points)||0,H&&(p+=Number(k.points)||0)});const N=A?Math.round(p/A*100):100;a.lessonProgress||(a.lessonProgress={}),a.lessonProgress[s.id]={completed:!0,score:N,earned:p,available:A,answers:g,attempts:((o==null?void 0:o.attempts)||0)+1,submittedAt:"Just now",certificate:N>=70},re.unshift([P().label,`completed ${s.title} with ${N}%`,"Just now",s.className]),j("LMS",`${P().label} completed a lesson`,`${s.title}: ${N}% quiz score.`),v(`${s.title} completed with a ${N}% quiz score.`)}function wn(){const e=Fe.find(t=>!a.completed.includes(t.id));if(!e){v("All missions are complete. Reset the demo or wait for the next adventure.");return}a.completed.includes(e.id)||a.completed.push(e.id),v(`${e.title} marked complete. Points updated.`)}function Sn(){re.unshift(["Demo Student","opened the newest assignment","Just now",a.selectedClass==="All"?"All Classes":a.selectedClass]),v("Student activity refreshed.")}function kn(e){a.conversationFilter="Groups",a.activeConversationId="grade-team",a.draft=`Following up about ${e}'s recent activity.`,ee("messages",`Reply draft started for ${e}.`)}function An(){var e;(e=document.querySelector("#landing-login-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const s=document.querySelector("#landing-identifier").value.trim(),i=document.querySelector("#landing-password").value,o=s.toLowerCase(),u=z.find(g=>[g.id,g.email,g.username,g.label].filter(Boolean).some(p=>String(p).toLowerCase()===o));if(Ae="",!qe()){u?zt(u):(Ae="We could not find that school account.",b());return}Pe=!0,b();try{const g=await bs(s,i);localStorage.setItem("educonnect-session-token",g.token),a.apiMode="live-api",await Xt("live-api").catch(()=>{}),Pe=!1,zt(g.user,"Securely signed in as")}catch(g){localStorage.removeItem("educonnect-session-token"),Pe=!1,Ae=g.message||"Invalid credentials.",b()}})}function Ln(){var e,t,s,i,o,u,g,p,A,D,N,F,k,G,R,H,ce,de,ke,Ze,Xe,et,tt,at,st,nt,it,ot,rt,lt,ct,dt,ut,pt,mt,ht,gt,vt,bt,ft,$t,yt,wt,St,kt,At,Lt,Mt,Et,Pt,Ct,qt,Dt,xt,Tt;document.querySelectorAll("[data-role]").forEach(n=>{n.addEventListener("click",r=>{r.preventDefault(),we(n.dataset.role)})}),(e=document.querySelector("[data-reset-demo]"))==null||e.addEventListener("click",()=>{Ss(),a.currentUser=M.id,we(M.landing)}),(t=document.querySelector("[data-sign-out]"))==null||t.addEventListener("click",Es),(s=document.querySelector("#global-search"))==null||s.addEventListener("input",n=>{a.searchTerm=n.target.value,b()}),(i=document.querySelector("[data-clear-search]"))==null||i.addEventListener("click",()=>{a.searchTerm="",b()}),document.querySelectorAll("[data-open-role]").forEach(n=>{n.addEventListener("click",()=>{var r;a.searchTerm="",ee(n.dataset.openRole,`${((r=fe.find(l=>l.id===n.dataset.openRole))==null?void 0:r.label)||"Workspace"} opened.`)})}),(o=document.querySelector("[data-role-controls]"))==null||o.addEventListener("click",()=>{ee("state-admin","Role Control Center opened."),requestAnimationFrame(()=>{var n;return(n=document.querySelector("#role-control-center"))==null?void 0:n.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelectorAll("[data-school-customization]").forEach(n=>n.addEventListener("click",()=>{ee("school-admin","School Customization opened."),requestAnimationFrame(()=>{var r;return(r=document.querySelector("#school-customization"))==null?void 0:r.scrollIntoView({behavior:"smooth",block:"start"})})})),document.querySelectorAll("[data-impersonate-profile]").forEach(n=>n.addEventListener("click",()=>Ls(n.dataset.impersonateProfile))),(u=document.querySelector("[data-stop-impersonating]"))==null||u.addEventListener("click",Ms),(g=document.querySelector("[data-start-tour]"))==null||g.addEventListener("click",()=>{a.tourOpen=!0,a.tourStep=0,ee(ue[0].role,"Walkthrough started.")}),(p=document.querySelector("[data-tour-next]"))==null||p.addEventListener("click",()=>{if(a.tourStep>=ue.length-1){a.tourOpen=!1,v("Walkthrough complete.");return}a.tourStep+=1,ee(ue[a.tourStep].role)}),(A=document.querySelector("[data-tour-prev]"))==null||A.addEventListener("click",()=>{a.tourStep!==0&&(a.tourStep-=1,ee(ue[a.tourStep].role))}),document.querySelectorAll("[data-action]").forEach(n=>{n.addEventListener("click",()=>v(n.dataset.action))}),(D=document.querySelector("[data-dismiss-toast]"))==null||D.addEventListener("click",()=>{a.toast="",b()}),(N=document.querySelector("[data-toggle-notifications]"))==null||N.addEventListener("click",()=>{a.notificationsOpen=!a.notificationsOpen,a.settingsOpen=!1,b()}),(F=document.querySelector("[data-toggle-settings]"))==null||F.addEventListener("click",()=>{a.settingsOpen=!a.settingsOpen,a.notificationsOpen=!1,b()}),document.querySelectorAll("[data-close-panel]").forEach(n=>{n.addEventListener("click",()=>{a.notificationsOpen=!1,a.settingsOpen=!1,b()})}),(k=document.querySelector("[data-mark-notifications]"))==null||k.addEventListener("click",()=>{Y.forEach(n=>{n.read=!0}),v("All notifications marked read.")}),document.querySelectorAll("[data-dismiss-notification]").forEach(n=>{n.addEventListener("click",()=>{const r=Y.findIndex(l=>l.id===n.dataset.dismissNotification);r>=0&&Y.splice(r,1),b()})}),document.querySelectorAll("[data-simulate-live]").forEach(n=>{n.addEventListener("click",()=>sa("manual"))}),(G=document.querySelector("[data-toggle-live]"))==null||G.addEventListener("change",n=>{a.liveUpdates=n.target.checked,v(a.liveUpdates?"Realtime updates enabled.":"Realtime updates paused.")}),(R=document.querySelector("#auth-provider"))==null||R.addEventListener("change",n=>{a.authProvider=n.target.value,w(`Updated auth provider to ${a.authProvider}`),v(`${a.authProvider} selected.`)}),(H=document.querySelector("#backend-provider"))==null||H.addEventListener("change",n=>{a.backendProvider=n.target.value,w(`Updated backend provider to ${a.backendProvider}`),v(`${a.backendProvider} selected as backend provider.`)}),document.querySelectorAll("[data-set-gateway]").forEach(n=>{n.addEventListener("click",()=>{a.gatewayMode=n.dataset.setGateway,j("Production","Gateway mode updated",`Launch gateway is now ${a.gatewayMode}.`),v(a.gatewayMode==="backend"?"Backend-ready mode enabled.":"Demo mode enabled.")})}),(ce=document.querySelector("[data-provision-schema]"))==null||ce.addEventListener("click",()=>{ye.forEach(n=>{n.status="Ready"}),j("Database","Mock schema provisioned",`${ye.length} production tables marked ready.`),w("Provisioned mock production schema"),v("Database blueprint marked ready.")}),document.querySelectorAll("[data-onboarding-task]").forEach(n=>{n.addEventListener("change",()=>{const r=me.find(l=>l.id===n.dataset.onboardingTask);r&&(r.done=n.checked,w(`${r.done?"Completed":"Reopened"} onboarding task: ${r.label}`),v("Onboarding checklist updated."))})}),(de=document.querySelector("#onboarding-user-form"))==null||de.addEventListener("submit",n=>{n.preventDefault();const r=document.querySelector("#onboarding-user-name").value.trim(),l=document.querySelector("#onboarding-user-role").value;if(!r)return;const m=l==="Admin"?"school-admin":l.toLowerCase();z.push({id:`${l.toLowerCase()}-${Date.now()}`,label:r,role:l,landing:m,permissions:l==="Admin"?["manage-tenants","approve-posts","emergency","lms","teacher-tools","message","manage-users","view-compliance"]:l==="Teacher"?["lms","teacher-tools","message","submit-post"]:l==="Parent"?["message","submit-post"]:["student-missions"]}),U("Action",`${r} invited`,S().name,"Onboarding"),w(`Invited ${l}: ${r}`),v(`${r} invited as ${l}.`)}),(ke=document.querySelector("#production-file-upload"))==null||ke.addEventListener("change",async n=>{var l;const r=Array.from(n.target.files||[]);for(const m of r)if(a.apiMode==="live-api")try{const h=await We(m,a.role==="community"?"Community":"LMS");W.unshift(h.file)}catch{W.unshift({id:`upload-${Date.now()}-${Math.random().toString(16).slice(2)}`,name:m.name,area:a.role==="community"?"Community":"LMS",size:`${Math.max(1,Math.round(m.size/1024))} KB`,status:"Server upload failed; metadata stored locally"})}else W.unshift({id:`upload-${Date.now()}-${Math.random().toString(16).slice(2)}`,name:m.name,area:a.role==="community"?"Community":"LMS",size:`${Math.max(1,Math.round(m.size/1024))} KB`,status:"Stored in demo metadata; ready for cloud storage"});j("Files","Upload metadata captured",`${((l=n.target.files)==null?void 0:l.length)||0} file(s) added to production upload queue.`),w("Added production upload metadata"),v("File upload metadata added.")}),(Ze=document.querySelector("[data-send-delivery-test]"))==null||Ze.addEventListener("click",async()=>{if(a.apiMode==="live-api")try{(await $s("Launch test group")).records.forEach(r=>K.unshift(r))}catch{["Email","SMS","Push"].forEach(n=>{K.unshift({id:`delivery-${Date.now()}-${n}`,channel:n,audience:"Launch test group",status:"Failed over locally",detail:`${n} test could not reach operational API`})})}else["Email","SMS","Push"].forEach(n=>{K.unshift({id:`delivery-${Date.now()}-${n}`,channel:n,audience:"Launch test group",status:"Delivered",detail:`${n} test generated from Launch Control`})});U("FYI","Notification delivery test completed",S().name,"Launch Control"),w("Sent notification delivery test batch"),v("Notification delivery test completed.")}),document.querySelectorAll("[data-security-check]").forEach(n=>{n.addEventListener("change",()=>{const r=he.find(l=>l.id===n.dataset.securityCheck);r&&(r.done=n.checked,r.status=r.done?"Configured":"Needs review",w(`Updated security checklist: ${r.label}`),v("Security checklist updated."))})}),document.querySelectorAll("[data-toggle-setting]").forEach(n=>{n.addEventListener("change",()=>{a[n.dataset.toggleSetting]=n.checked,b()})}),document.querySelectorAll("[data-setting-select]").forEach(n=>n.addEventListener("change",()=>{a[n.dataset.settingSelect]=n.value,b()})),document.querySelectorAll("[data-notification-preference]").forEach(n=>n.addEventListener("change",()=>{a.notificationPreferences[n.dataset.notificationPreference]=n.checked,b()})),(Xe=document.querySelector("[data-notification-days]"))==null||Xe.addEventListener("change",n=>{a.notificationPreferences.dueDays=Number(n.target.value),b()}),(et=document.querySelector("[data-send-preference-test]"))==null||et.addEventListener("click",()=>{U("FYI","Your notification preferences are working",P().label,"Preference test"),v("Test notification added to your notification tray.")}),(tt=document.querySelector("[data-export-demo]"))==null||tt.addEventListener("click",async()=>{const n=JSON.stringify(Zt(),null,2),r=new Blob([n],{type:"application/json"}),l=URL.createObjectURL(r),m=document.createElement("a");m.href=l,m.download="educonnect-demo-state.json",m.click(),URL.revokeObjectURL(l),w("Exported demo state JSON");try{await navigator.clipboard.writeText(n),v("Demo state exported and copied to clipboard.")}catch{v("Demo state exported as a JSON file.")}}),(at=document.querySelector("#import-demo-state"))==null||at.addEventListener("change",async n=>{var l;const r=(l=n.target.files)==null?void 0:l[0];if(r)try{const m=JSON.parse(await r.text()),h=Ps(m);if(h.length){v(`Import failed: ${h.join(" ")}`);return}Je(m),w("Imported demo state JSON"),v("Demo state imported.")}catch{v("That JSON file could not be imported.")}}),(st=document.querySelector("[data-add-school]"))==null||st.addEventListener("click",vn),(nt=document.querySelector("[data-create-assignment]"))==null||nt.addEventListener("click",bn),(it=document.querySelector("#assignment-form"))==null||it.addEventListener("submit",n=>{n.preventDefault();const r=document.querySelector("#assignment-title").value.trim();if(!r)return;const l=document.querySelector("#assignment-class").value;ca({title:r,className:l,type:document.querySelector("#assignment-type").value,lockDate:document.querySelector("#assignment-due").value,dueDate:document.querySelector("#assignment-due").value,instructions:document.querySelector("#assignment-instructions").value.trim(),points:Number(document.querySelector("#assignment-points").value),maxAttempts:Number(document.querySelector("#assignment-attempts").value),allowResubmit:document.querySelector("#assignment-resubmit").checked}),v(`${r} added to ${l}.`)}),document.querySelectorAll("[data-new-lesson]").forEach(n=>n.addEventListener("click",()=>Ut())),(ot=document.querySelector("[data-close-lesson-builder]"))==null||ot.addEventListener("click",()=>{a.lessonBuilderOpen=!1,a.lessonDraft=null,b()}),(rt=document.querySelector("#lesson-filter"))==null||rt.addEventListener("change",n=>{a.lessonFilter=n.target.value,b()}),document.querySelectorAll("[data-edit-lesson]").forEach(n=>n.addEventListener("click",()=>Ut(n.dataset.editLesson))),document.querySelectorAll("[data-toggle-lesson]").forEach(n=>n.addEventListener("click",()=>$n(n.dataset.toggleLesson))),document.querySelectorAll("[data-preview-lesson]").forEach(n=>n.addEventListener("click",()=>{a.lessonPreviewId=n.dataset.previewLesson,b(),requestAnimationFrame(()=>{var r;return(r=document.querySelector(".lesson-preview-panel"))==null?void 0:r.scrollIntoView({behavior:"smooth",block:"center"})})})),(lt=document.querySelector("[data-close-lesson-preview]"))==null||lt.addEventListener("click",()=>{a.lessonPreviewId="",b()}),document.querySelectorAll("[data-lesson-field]").forEach(n=>{n.addEventListener("change",()=>{if(!a.lessonDraft)return;const r=n.dataset.lessonField;a.lessonDraft[r]=n.type==="checkbox"?n.checked:n.type==="number"?Number(n.value):n.value}),n.addEventListener("input",()=>{!a.lessonDraft||["checkbox","number"].includes(n.type)||(a.lessonDraft[n.dataset.lessonField]=n.value)})}),document.querySelectorAll("[data-block-field]").forEach(n=>{const r=()=>{var y,T;const[l,m]=n.dataset.blockField.split(":"),h=(y=a.lessonDraft)==null?void 0:y.blocks.find(J=>J.id===l);h&&(h[m]=n.type==="checkbox"?n.checked:n.type==="number"?Number(n.value):n.value,m==="questionType"&&n.value==="True or false"&&(h.options=["True","False","",""],h.correctAnswer=0,b()),m==="questionType"&&n.value==="Short answer"&&(h.options=["","","",""],h.correctAnswer=0,b()),m==="questionType"&&n.value==="Fill in the blank"&&(h.options=["","","",""],h.correctAnswer=0,b()),m==="questionType"&&n.value==="Matching"&&(h.pairs=(T=h.pairs)!=null&&T.length?h.pairs:[{left:"",right:""},{left:"",right:""}],b()))};n.addEventListener("change",r),n.addEventListener("input",r)}),document.querySelectorAll("[data-quiz-option]").forEach(n=>n.addEventListener("input",()=>{var h;const[r,l]=n.dataset.quizOption.split(":"),m=(h=a.lessonDraft)==null?void 0:h.blocks.find(y=>y.id===r);m&&(m.options[Number(l)]=n.value)})),document.querySelectorAll("[data-match-pair]").forEach(n=>n.addEventListener("input",()=>{var y,T;const[r,l,m]=n.dataset.matchPair.split(":"),h=(y=a.lessonDraft)==null?void 0:y.blocks.find(J=>J.id===r);(T=h==null?void 0:h.pairs)!=null&&T[Number(l)]&&(h.pairs[Number(l)][m]=n.value)})),(ct=document.querySelector("[data-add-bank-question]"))==null||ct.addEventListener("click",()=>{const n=Me.find(r=>{var l;return r.id===((l=document.querySelector("#question-bank-select"))==null?void 0:l.value)});!n||!a.lessonDraft||(a.lessonDraft.blocks.push({...structuredClone(n),id:`block-bank-${Date.now()}`,type:"quiz",title:`${n.subject} check`,required:!0,timeLimit:0,maxAttempts:2,randomize:!1,showAnswers:!0,pairs:n.pairs||[{left:"",right:""},{left:"",right:""}]}),b())}),document.querySelectorAll("[data-lesson-media-upload]").forEach(n=>n.addEventListener("change",async()=>{var m,h;const r=(m=n.files)==null?void 0:m[0],l=(h=a.lessonDraft)==null?void 0:h.blocks.find(y=>y.id===n.dataset.lessonMediaUpload);if(!(!r||!l)){if(r.size>5*1024*1024){v("Lesson media must be 5 MB or smaller.");return}try{let y;if(a.apiMode==="live-api")y=(await We(r,"Lesson Media")).file;else{const T=r.size<=768e3?await new Promise((J,Re)=>{const X=new FileReader;X.onload=()=>J(String(X.result)),X.onerror=()=>Re(X.error),X.readAsDataURL(r)}):"";y={id:`lesson-file-${Date.now()}`,name:r.name,type:r.type,size:`${Math.max(1,Math.round(r.size/1024))} KB`,status:T?"Ready":"Metadata saved; upload on publish",dataUrl:T}}l.file=y,l.mediaType=r.type.startsWith("image/")?"Image":r.type.startsWith("video/")?"Video":r.type.startsWith("audio/")?"Audio":"Document",W.some(T=>T.id===y.id)||W.unshift(y),v(`${r.name} attached to the lesson.`)}catch{v(`Could not upload ${r.name}.`)}}})),document.querySelectorAll("[data-correct-answer]").forEach(n=>n.addEventListener("change",()=>{var l;const r=(l=a.lessonDraft)==null?void 0:l.blocks.find(m=>m.id===n.dataset.correctAnswer);r&&(r.correctAnswer=Number(n.value))})),document.querySelectorAll("[data-add-lesson-block]").forEach(n=>n.addEventListener("click",()=>{var r;(r=a.lessonDraft)==null||r.blocks.push(ta(n.dataset.addLessonBlock,a.lessonDraft.blocks.length)),b()})),document.querySelectorAll("[data-remove-lesson-block]").forEach(n=>n.addEventListener("click",()=>{if(!a.lessonDraft||a.lessonDraft.blocks.length===1){v("A lesson must keep at least one block.");return}a.lessonDraft.blocks=a.lessonDraft.blocks.filter(r=>r.id!==n.dataset.removeLessonBlock),b()})),document.querySelectorAll("[data-move-lesson-block]").forEach(n=>n.addEventListener("click",()=>{if(!a.lessonDraft)return;const[r,l]=n.dataset.moveLessonBlock.split(":"),m=a.lessonDraft.blocks.findIndex(y=>y.id===r),h=l==="up"?m-1:m+1;m<0||h<0||h>=a.lessonDraft.blocks.length||([a.lessonDraft.blocks[m],a.lessonDraft.blocks[h]]=[a.lessonDraft.blocks[h],a.lessonDraft.blocks[m]],b())})),(dt=document.querySelector("#lesson-builder-form"))==null||dt.addEventListener("submit",n=>{var r;n.preventDefault(),fn(((r=n.submitter)==null?void 0:r.dataset.lessonStatus)||"Draft")}),document.querySelectorAll("[data-open-student-lesson]").forEach(n=>n.addEventListener("click",()=>{a.activeStudentLessonId=n.dataset.openStudentLesson,b()})),(ut=document.querySelector("[data-submit-lesson]"))==null||ut.addEventListener("submit",n=>{n.preventDefault(),yn(n.currentTarget.dataset.submitLesson,n.currentTarget)}),document.querySelectorAll("[data-complete-lesson-block]").forEach(n=>n.addEventListener("click",()=>{var h;const[r,l]=n.dataset.completeLessonBlock.split(":");a.lessonProgress||(a.lessonProgress={});const m=(h=a.lessonProgress)[r]||(h[r]={completed:!1,score:0,earned:0,available:0,answers:{},attempts:0,completedBlocks:[]});m.completedBlocks=[...new Set([...m.completedBlocks||[],l])],v("Lesson progress saved. You can resume here later.")})),document.querySelectorAll("[data-bookmark-lesson]").forEach(n=>n.addEventListener("click",()=>{const r=n.dataset.bookmarkLesson;a.bookmarkedLessons||(a.bookmarkedLessons=[]),a.bookmarkedLessons=a.bookmarkedLessons.includes(r)?a.bookmarkedLessons.filter(l=>l!==r):[...a.bookmarkedLessons,r],v(a.bookmarkedLessons.includes(r)?"Lesson bookmarked.":"Bookmark removed.")})),document.querySelectorAll("[data-save-lesson-note]").forEach(n=>n.addEventListener("click",()=>{var l;const r=n.dataset.saveLessonNote;a.studentNotes||(a.studentNotes={}),a.studentNotes[r]=((l=document.querySelector(`[data-lesson-note="${r}"]`))==null?void 0:l.value.trim())||"",v("Private lesson notes saved.")})),document.querySelectorAll("[data-read-lesson]").forEach(n=>n.addEventListener("click",()=>{const r=L.find(l=>l.id===n.dataset.readLesson);if(!r||!("speechSynthesis"in window)){v("Read aloud is not available in this browser.");return}speechSynthesis.cancel(),speechSynthesis.speak(new SpeechSynthesisUtterance([r.title,r.summary,...r.blocks.filter(l=>l.type==="text").map(l=>`${l.title}. ${l.body}`)].join(". "))),a.toast="Reading lesson aloud.",b()})),document.querySelectorAll("[data-download-certificate]").forEach(n=>n.addEventListener("click",()=>{var T;const r=L.find(J=>J.id===n.dataset.downloadCertificate),l=(T=a.lessonProgress)==null?void 0:T[n.dataset.downloadCertificate];if(!r||!(l!=null&&l.certificate))return;const m=new Blob([`EduConnect Certificate of Completion

${P().label}
${r.title}
Score: ${l.score}%
${S().name}`],{type:"text/plain"}),h=URL.createObjectURL(m),y=document.createElement("a");y.href=h,y.download=`${r.title.replace(/[^a-z0-9]+/gi,"-").toLowerCase()}-certificate.txt`,y.click(),URL.revokeObjectURL(h),w(`Downloaded certificate for ${r.title}`,P().label),v("Certificate downloaded.")})),document.querySelectorAll("[data-open-assignment]").forEach(n=>n.addEventListener("click",()=>{a.activeAssignmentId=n.dataset.openAssignment,b()})),(pt=document.querySelector("[data-assignment-work]"))==null||pt.addEventListener("submit",n=>{var h,y;n.preventDefault();const r=q.find(T=>T.id===n.currentTarget.dataset.assignmentWork),l=pe(r==null?void 0:r.id,!0);if(!r||!l)return;const m=((h=n.submitter)==null?void 0:h.dataset.workStatus)||"Draft";if(m==="Submitted"&&l.status==="Returned"&&l.attempt>=(r.maxAttempts||1)){v("Maximum assignment attempts reached.");return}if(l.response=((y=document.querySelector("#student-assignment-response"))==null?void 0:y.value.trim())||"",m==="Submitted"&&!l.response&&!l.attachments.length){v("Add a written response or attachment before submitting.");return}m==="Submitted"&&l.status==="Returned"&&(l.attempt+=1),l.status=m,l.submittedAt=m==="Submitted"?"Just now":l.submittedAt,m==="Submitted"&&(U("Action",`${l.student} submitted ${r.title}`,r.className,"Teacher inbox"),j("LMS",`${r.title} submitted`,`${l.student} sent attempt ${l.attempt}.`)),w(`${m==="Submitted"?"Submitted":"Saved draft for"} ${r.title}`,l.student),v(`${r.title} ${m==="Submitted"?"submitted":"draft saved"}.`)}),(mt=document.querySelector("[data-assignment-file]"))==null||mt.addEventListener("change",async n=>{const r=n.target.dataset.assignmentFile,l=pe(r,!0);for(const m of Array.from(n.target.files||[]))if(!(m.size>5*1024*1024))try{const h=a.apiMode==="live-api"?(await We(m,"Assignment Submission")).file:{id:`assignment-file-${Date.now()}-${Math.random().toString(16).slice(2)}`,name:m.name,type:m.type,size:`${Math.max(1,Math.round(m.size/1024))} KB`,status:"Ready"};l.attachments.push(h),W.some(y=>y.id===h.id)||W.unshift(h)}catch{}v("Assignment attachments updated.")}),document.querySelectorAll("[data-remove-assignment-file]").forEach(n=>n.addEventListener("click",()=>{const[r,l]=n.dataset.removeAssignmentFile.split(":"),m=pe(r);m&&(m.attachments=m.attachments.filter(h=>h.id!==l)),v("Attachment removed.")})),document.querySelectorAll("[data-return-submission]").forEach(n=>n.addEventListener("submit",r=>{r.preventDefault();const l=ne.find(y=>y.id===n.dataset.returnSubmission),m=q.find(y=>y.id===(l==null?void 0:l.assignmentId));if(!l||!m)return;l.score=Number(n.querySelector("[data-grade-score]").value),l.feedback=n.querySelector("[data-grade-feedback]").value.trim(),l.status="Returned",l.returnedAt="Just now";let h=O.find(y=>y.assignment===m.title&&y.student===l.student);h?Object.assign(h,{status:"Reviewed",score:l.score,comment:l.feedback}):(h={id:`grade-${Date.now()}`,student:l.student,assignment:m.title,status:"Reviewed",score:l.score,rubric:[["Completion",4],["Accuracy",4],["Explanation",4]],comment:l.feedback},O.unshift(h)),U("FYI",`${m.title} was graded`,l.student,"Student inbox"),w(`Returned graded assignment ${m.title}`,l.student),v(`${m.title} returned to ${l.student}.`)})),(ht=document.querySelector("#course-create-form"))==null||ht.addEventListener("submit",n=>{n.preventDefault();const r=document.querySelector("#course-title").value.trim();te.push({id:`course-${Date.now()}`,title:r,subject:document.querySelector("#course-subject").value,grade:document.querySelector("#course-grade").value.trim(),className:_[0].name,standards:[],units:[]}),w(`Created curriculum course ${r}`),v(`${r} added to the curriculum map.`)}),document.querySelectorAll("[data-add-unit]").forEach(n=>n.addEventListener("submit",r=>{r.preventDefault();const l=te.find(h=>h.id===n.dataset.addUnit),m=n.querySelector("input");!l||!m.value.trim()||(l.units.push({id:`unit-${Date.now()}`,title:m.value.trim(),description:"New curriculum unit",lessonIds:[],assignmentIds:[]}),v(`${m.value.trim()} added to ${l.title}.`))})),document.querySelectorAll("[data-link-curriculum]").forEach(n=>n.addEventListener("submit",r=>{r.preventDefault();const[l,m]=n.dataset.linkCurriculum.split(":"),h=te.find(X=>X.id===l),y=h==null?void 0:h.units.find(X=>X.id===m),[T,J]=n.querySelector("select").value.split(":");if(!y)return;const Re=T==="lesson"?y.lessonIds:y.assignmentIds;Re.includes(J)||Re.push(J),w(`Linked ${T} to ${h.title}: ${y.title}`),v(`Content linked to ${y.title}.`)})),(gt=document.querySelector("[data-send-class-reminder]"))==null||gt.addEventListener("click",()=>{const n=["email","sms","push"].filter(r=>a.notificationPreferences[r]);(n.length?n:["dashboard"]).forEach(r=>K.unshift({id:`reminder-${Date.now()}-${r}`,channel:r.toUpperCase(),audience:a.selectedClass==="All"?"All active classes":a.selectedClass,status:"Delivered",detail:`Assignment reminder sent by ${P().label}`})),U("FYI","Class assignment reminder sent",a.selectedClass==="All"?"All active classes":a.selectedClass,n.join(" + ")||"Dashboard"),w("Sent class assignment reminder"),v("Class reminder sent using the selected notification channels.")}),(vt=document.querySelector("[data-continue-adventure]"))==null||vt.addEventListener("click",wn),(bt=document.querySelector("[data-refresh-activity]"))==null||bt.addEventListener("click",Sn),document.querySelectorAll("[data-reply-student]").forEach(n=>{n.addEventListener("click",()=>kn(n.dataset.replyStudent))}),document.querySelectorAll("[data-guardrail]").forEach(n=>{n.addEventListener("change",()=>{a.guardrails[n.dataset.guardrail]=n.checked,w(`Updated guardrail ${n.dataset.guardrail}`),v("Guardrail setting updated.")})}),document.querySelectorAll("[data-profile-permission]").forEach(n=>{n.addEventListener("change",()=>{const[r,l]=n.dataset.profilePermission.split(":"),m=z.find(h=>h.id===r);m&&(m.permissions=n.checked?[...new Set([...m.permissions,l])]:m.permissions.filter(h=>h!==l),w(`Updated ${m.role} permission: ${l}`),v(`${m.role} permissions updated.`))})}),document.querySelectorAll("[data-submission]").forEach(n=>{n.addEventListener("click",()=>{a.selectedSubmissionId=n.dataset.submission,b()})}),document.querySelectorAll("[data-save-submission]").forEach(n=>{n.addEventListener("click",()=>{const r=O.find(l=>l.id===n.dataset.saveSubmission);r&&(r.comment=document.querySelector("#submission-comment").value.trim(),r.status="Reviewed",w(`Saved gradebook comment for ${r.student}`,r.assignment),v("Gradebook comment saved."))})}),document.querySelectorAll("[data-complete]").forEach(n=>{n.addEventListener("click",()=>{const r=Number(n.dataset.complete);a.completed.includes(r)||a.completed.push(r);const l=Fe.find(m=>m.id===r);v(`${(l==null?void 0:l.title)||"Mission"} marked complete.`)})}),(ft=document.querySelector("#class-filter"))==null||ft.addEventListener("change",n=>{a.selectedClass=n.target.value,b()}),($t=document.querySelector("#roster-filter"))==null||$t.addEventListener("change",n=>{a.rosterFilter=n.target.value,b()}),document.querySelectorAll("[data-roster-grade], [data-roster-attendance], [data-roster-status]").forEach(n=>{n.addEventListener("change",()=>{const r=n.dataset.rosterGrade||n.dataset.rosterAttendance||n.dataset.rosterStatus,l=I.find(m=>m.id===r);l&&(n.dataset.rosterGrade&&(l.grade=Math.max(0,Math.min(100,Number(n.value)||0))),n.dataset.rosterAttendance&&(l.attendance=Math.max(0,Math.min(100,Number(n.value)||0))),n.dataset.rosterStatus&&(l.status=n.value),j("Roster",`${l.student} record updated`,`Grade ${l.grade}%, attendance ${l.attendance}%, status ${l.status}.`),w(`Updated roster record for ${l.student}`,l.className),v(`${l.student}'s roster record updated.`))})}),document.querySelectorAll("[data-lms-account]").forEach(n=>{n.addEventListener("click",()=>{a.activeAccount=n.dataset.lmsAccount,b()})}),(yt=document.querySelector("[data-build-offline]"))==null||yt.addEventListener("click",()=>{a.offlinePackReady=!0,Ee.forEach(n=>{n.status=n.status.replace("Waiting for pack","Queued for upload")}),v("Offline pack built and sync queue prepared.")}),(wt=document.querySelector("#state-filter"))==null||wt.addEventListener("change",n=>{a.selectedState=n.target.value;const r=Ne();a.selectedDistrict=r.districts[0].id,a.selectedSchool=r.districts[0].schools[0].id,b()}),(St=document.querySelector("#district-filter"))==null||St.addEventListener("change",n=>{a.selectedDistrict=n.target.value,a.selectedSchool=ve().schools[0].id,b()}),(kt=document.querySelector("#school-filter"))==null||kt.addEventListener("change",n=>{a.selectedSchool=n.target.value,b()}),(At=document.querySelector("#design-form"))==null||At.addEventListener("submit",n=>{n.preventDefault(),Ns(),w(`Updated school customization for ${S().name}`),v(`${S().name} customization saved.`)}),document.querySelectorAll("#design-primary, #design-accent, #design-highlight, #design-background").forEach(n=>n.addEventListener("input",()=>{const r=document.querySelector(".school-brand-preview");if(!r)return;const l={"design-primary":"--primary","design-accent":"--teal","design-highlight":"--gold","design-background":"--background"}[n.id];r.style.setProperty(l,n.value)})),(Lt=document.querySelector("#customization-school-filter"))==null||Lt.addEventListener("change",n=>{a.selectedSchool=n.target.value,b()}),document.querySelectorAll("[data-design-preset]").forEach(n=>{n.addEventListener("click",()=>{const r=S(),l=He.find(m=>m.name===n.dataset.designPreset);l&&(Z[r.id]={...De(),...l},r.theme=l.name,w(`Applied ${l.name} theme`,r.name),v(`${l.name} applied to ${r.name}.`))})}),(Mt=document.querySelector("[data-reset-school-design]"))==null||Mt.addEventListener("click",()=>{const n=S(),r=He[0];Z[n.id]={...De(),...r},n.theme=r.name,w("Reset school colors",n.name),v(`${n.name} colors reset.`)}),document.querySelectorAll("[data-manage-district]").forEach(n=>{n.addEventListener("click",()=>{a.selectedDistrict=n.dataset.manageDistrict,a.selectedSchool=ve().schools[0].id,b()})}),document.querySelectorAll("[data-manage-school]").forEach(n=>{n.addEventListener("click",()=>{a.selectedSchool=n.dataset.manageSchool,b()})}),document.querySelectorAll("[data-deadline]").forEach(n=>{n.addEventListener("change",()=>{const r=n.dataset.deadline;a.checkedDeadlines=a.checkedDeadlines.includes(r)?a.checkedDeadlines.filter(l=>l!==r):[...a.checkedDeadlines,r],b()})}),document.querySelectorAll("[data-filter]").forEach(n=>{n.addEventListener("click",()=>{a.conversationFilter=n.dataset.filter;const r=C.find(l=>l.type===a.conversationFilter);r&&(a.activeConversationId=r.id),b()})}),document.querySelectorAll("[data-conversation]").forEach(n=>{n.addEventListener("click",()=>{a.activeConversationId=n.dataset.conversation;const r=C.find(l=>l.id===a.activeConversationId);r&&(r.unread=0),b()})}),(Et=document.querySelector("#message-draft"))==null||Et.addEventListener("input",n=>{a.draft=n.target.value}),(Pt=document.querySelector("[data-toggle-hours]"))==null||Pt.addEventListener("click",()=>{a.workHoursOpen=!a.workHoursOpen,b()}),(Ct=document.querySelector("[data-toggle-emergency]"))==null||Ct.addEventListener("click",()=>{a.emergencyOverride=!a.emergencyOverride,w(`${a.emergencyOverride?"Enabled":"Disabled"} emergency override`),b()}),document.querySelectorAll("[data-start-call]").forEach(n=>{n.addEventListener("click",()=>{const r=C.find(l=>l.id===n.dataset.startCall);r&&(a.activeCallName=r.name,j("Messages",`Live call started with ${r.name}`,"Video room is active in the communication hub."),w(`Started video call with ${r.name}`,S().name),v(`Video call started with ${r.name}.`))})}),(qt=document.querySelector("[data-end-call]"))==null||qt.addEventListener("click",()=>{const n=a.activeCallName;a.activeCallName="",n&&j("Messages",`Live call ended with ${n}`,"Call state closed."),v("Video call ended.")}),(Dt=document.querySelector("#compose"))==null||Dt.addEventListener("submit",n=>{if(n.preventDefault(),!a.workHoursOpen&&!a.emergencyOverride)return;const r=a.draft.trim();r&&(C.splice(0,C.length,...C.map(l=>l.id===a.activeConversationId?{...l,preview:r,messages:[...l.messages,{from:"me",text:r,time:"Now"}]}:l)),j("Messages","Message sent",`Delivered to ${P().label}'s active conversation.`),U("FYI","Message delivered",S().name,"Messages"),a.draft="",b())}),(xt=document.querySelector("#board-form"))==null||xt.addEventListener("submit",n=>{n.preventDefault();const r=S();Q().pending.unshift({id:`${r.id}-${Date.now()}`,author:document.querySelector("#board-author").value.trim()||"Community Member",role:document.querySelector("#board-role").value,type:document.querySelector("#board-type").value,audience:document.querySelector("#board-audience").value,title:document.querySelector("#board-title").value.trim(),body:document.querySelector("#board-body").value.trim(),media:document.querySelector("#board-media").value.trim()||"No media",approverId:document.querySelector("#board-approver").value,time:"Awaiting administrator approval"}),j("Community","Community post submitted",`${document.querySelector("#board-title").value.trim()} is waiting for approval.`),U("Action","Community post awaiting approval",r.name,"Approval queue"),w("Submitted community post for approval",r.name),v("Post submitted for administrator approval.")}),document.querySelectorAll("[data-approver-toggle]").forEach(n=>{n.addEventListener("change",()=>{const r=Q();r.approvers=r.approvers.map(l=>l.id===n.dataset.approverToggle?{...l,active:n.checked}:l),b()})}),(Tt=document.querySelector("#approver-form"))==null||Tt.addEventListener("submit",n=>{n.preventDefault();const r=Q(),l=document.querySelector("#new-approver-name").value.trim();l&&(r.approvers.push({id:`${l.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${Date.now()}`,name:l,title:document.querySelector("#new-approver-title").value,active:!0}),b())}),document.querySelectorAll("[data-approve-post]").forEach(n=>{n.addEventListener("click",()=>{const r=Q(),l=r.pending.find(m=>m.id===n.dataset.approvePost);l&&(r.pending=r.pending.filter(m=>m.id!==l.id),r.published.unshift({...l,time:"Approved just now"}),w(`Approved community post: ${l.title}`),b())})}),document.querySelectorAll("[data-reject-post]").forEach(n=>{n.addEventListener("click",()=>{const r=Q(),l=r.pending.find(m=>m.id===n.dataset.rejectPost);r.pending=r.pending.filter(m=>m.id!==n.dataset.rejectPost),l&&w(`Rejected community post: ${l.title}`),b()})})}async function Mn(){if(ys(),qe()&&(a.apiMode="live-api",localStorage.getItem("educonnect-session-token")))try{const e=await fs();M={...z.find(s=>s.id===e.user.id),...e.user},a.currentUser=M.id}catch{localStorage.removeItem("educonnect-session-token")}if(M&&(a.apiMode==="mock-api"||a.apiMode==="live-api"))try{await Xt(a.apiMode)}catch{qe()||(a.apiMode="local",a.toast="Server API unavailable. Local demo state mode enabled.")}if(M){const e=Ft();a.role=e&&oe().includes(e)?e:M.landing}window.addEventListener("hashchange",()=>{if(!M)return;const e=Ft();e&&e!==a.role&&we(e,!1)}),window.addEventListener("load",_e),b(),window.setInterval(()=>{!M||!a.liveUpdates||document.hidden||sa("automatic")},15e3)}Mn();
