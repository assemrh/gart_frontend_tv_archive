import{j as n}from"./vendor-CM1MfBSy.js";import{c as r,C as d,g as x,W as l,a4 as h,G as k,D as o}from"./index-goo_VwzN.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=r("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=r("CircleDashed",[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=r("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=r("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=r("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=r("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=r("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=r("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),C={[o.Draft]:{tone:"draft",icon:y},[o.Pending]:{tone:"waiting",icon:p,short:"بانتظار المونيتور"},[o.Review]:{tone:"review",icon:f,short:"قيد المراجعة"},[o.Ready]:{tone:"done",icon:d,short:"جاهزة للعرض"},[o.Cancelled]:{tone:"cancelled",icon:m},[k.Pending]:{tone:"waiting",icon:p},[k.Approved]:{tone:"done",icon:w},[h.Ready]:{tone:"ok",icon:d},[h.NeedsEdit]:{tone:"edit",icon:u},[l.Open]:{tone:"neutral",icon:g},[l.Closed]:{tone:"done",icon:b}},v={draft:"bg-muted text-ink border-line",waiting:"bg-warn-soft text-ink-strong border-wheat-dark/70 [&>svg]:text-wheat-dark",review:"bg-primary-soft text-forest-dark border-forest/40 dark:text-wheat-light",done:"bg-forest-dark text-white border-forest-dark",cancelled:"bg-umber text-white border-umber",ok:"bg-transparent text-forest-dark border-transparent dark:text-forest [&>svg]:text-forest",edit:"bg-transparent text-umber border-transparent dark:text-wheat [&>svg]:text-umber dark:[&>svg]:text-wheat",neutral:"bg-surface text-ink border-line"};function S({value:t,short:i,className:c}){if(!t)return n.jsx("span",{className:"text-ink-soft",children:"—"});const e=C[t]??{tone:"neutral",icon:y},s=e.icon,a=i&&e.short?e.short:t;return n.jsxs("span",{className:x("inline-flex max-w-full items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-medium",v[e.tone],c),title:a!==t?t:void 0,children:[n.jsx(s,{"aria-hidden":!0,className:"h-3.5 w-3.5 shrink-0"}),n.jsx("span",{className:"truncate",children:a})]})}function N({steps:t,current:i,label:c}){const e=t.indexOf(i);return n.jsx("ol",{"aria-label":c,className:"flex flex-wrap items-center gap-1.5",children:t.map((s,a)=>n.jsx("li",{"aria-current":a===e?"step":void 0,className:x("rounded-full border px-3 py-1 text-xs font-medium",a===e&&"border-forest-dark bg-forest-dark text-white",a<e&&"border-forest/40 bg-primary-soft text-forest-dark dark:text-wheat-light",a>e&&"border-line bg-surface text-ink-soft"),children:s},s))})}export{b as L,S,u as T,N as a};
