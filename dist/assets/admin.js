import{s as f,aD as N,c as j,d as D,g as M,W as q,A as K,D as P,o as O,m as G,k as z,V as x}from"./BlockTypes.js";const k=new Map,s=new Set,u=new Map;let v="all",B="all";async function H(){U();const t=document.getElementById("filter-category");for(const[o,e]of Object.entries(f)){const n=document.createElement("option");n.value=o,n.textContent=`${e.label} (${e.types.length})`,t.appendChild(n)}b(),h(),Z()}function U(){try{const t=localStorage.getItem("blockReviewState");if(t){const o=JSON.parse(t);for(const[e,n]of Object.entries(o.states||{}))k.set(e,n);for(const e of o.broken||[])s.add(e)}}catch(t){console.warn("Failed to load saved state:",t)}}function S(){const t={states:Object.fromEntries(k),broken:Array.from(s)};localStorage.setItem("blockReviewState",JSON.stringify(t))}function i(t){return k.get(t)||"undecided"}function g(t,o){k.set(t,o),S(),h(),J(t)}function F(t){const o=i(t);let e;o==="undecided"?e="keep":o==="keep"?e="delete":e="undecided",g(t,e)}function h(){let t=0,o=0,e=0,n=0;for(const a of Object.values(f))for(const c of a.types){t++;const l=i(c);l==="keep"?o++:l==="delete"&&e++,s.has(c)&&n++}document.getElementById("stat-total").textContent=t,document.getElementById("stat-keep").textContent=o,document.getElementById("stat-delete").textContent=e,document.getElementById("stat-broken").textContent=n}function _(t,o){const e=o.clientWidth||140,n=100,a=new j;a.background=new D(657941);const c=new M(45,e/n,.1,100);c.position.set(1.5,1.2,1.5),c.lookAt(0,0,0);const l=new q({antialias:!0});l.setSize(e,n),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.appendChild(l.domElement);const w=new K(16777215,.6);a.add(w);const y=new P(16777215,.8);y.position.set(5,10,5),a.add(y);let r=null,p=null;try{const d=O[t];if(!d)throw new Error("No geometry creator");const m=d({w:1,h:1,d:1});if(!m||!m.attributes||!m.attributes.position)throw new Error("Invalid geometry");if(m.attributes.position.count===0)throw new Error("Empty geometry");const R=new G({color:5605580,roughness:.7,metalness:.1});r=new z(m,R),m.computeBoundingBox();const L=m.boundingBox,C=new x;L.getCenter(C),r.position.sub(C);const E=new x;L.getSize(E);const I=Math.max(E.x,E.y,E.z);if(I>1.5){const T=1.2/I;r.scale.setScalar(T)}a.add(r)}catch(d){p=d.message,s.add(t)}if(l.render(a,c),u.set(t,{scene:a,camera:c,renderer:l,mesh:r,error:p}),p){const d=document.createElement("div");d.className="error",d.textContent=`Error: ${p}`,o.appendChild(d)}return{error:p}}function b(){const t=document.getElementById("main");t.innerHTML="";for(const[o,e]of Object.entries(f)){if(B!=="all"&&B!==o)continue;const n=e.types.filter(r=>v==="all"?!0:v==="broken"?s.has(r):i(r)===v);if(n.length===0)continue;const a=document.createElement("div");a.className="category-section",a.dataset.category=o;const c=document.createElement("div");c.className="category-header";const l=e.types.filter(r=>i(r)==="keep").length,w=e.types.filter(r=>i(r)==="delete").length;c.innerHTML=`
      <h2>${e.label}</h2>
      <span class="category-stats">${l} keep / ${w} delete / ${e.types.length} total</span>
      <div class="category-actions">
        <button class="secondary btn-keep-all" data-category="${o}">Keep All</button>
        <button class="secondary btn-delete-all" data-category="${o}">Delete All</button>
      </div>
    `,a.appendChild(c);const y=document.createElement("div");y.className="blocks-grid";for(const r of n){const p=W(r);y.appendChild(p)}a.appendChild(y),t.appendChild(a)}document.querySelectorAll(".btn-keep-all").forEach(o=>{o.addEventListener("click",e=>{e.stopPropagation();const n=o.dataset.category,a=f[n];for(const c of a.types)g(c,"keep")})}),document.querySelectorAll(".btn-delete-all").forEach(o=>{o.addEventListener("click",e=>{e.stopPropagation();const n=o.dataset.category,a=f[n];for(const c of a.types)g(c,"delete")})}),requestAnimationFrame(()=>{for(const[o,e]of u);document.querySelectorAll(".block-card").forEach(o=>{const e=o.dataset.type,n=o.querySelector(".block-preview");n&&!u.has(e)&&_(e,n)}),V()})}function W(t){const o=N[t]||{label:t},e=i(t),n=s.has(t),a=document.createElement("div");return a.className=`block-card ${e}${n?" broken":""}`,a.dataset.type=t,a.innerHTML=`
    <div class="block-preview"></div>
    <div class="block-info">
      <div class="block-name">${o.label}</div>
      <div class="block-type">${t}</div>
      <div class="block-status">
        ${e==="keep"?'<span class="keep-badge">KEEP</span>':""}
        ${e==="delete"?'<span class="delete-badge">DELETE</span>':""}
        ${n?'<span class="broken-badge">BROKEN</span>':""}
      </div>
    </div>
  `,a.addEventListener("click",()=>{F(t)}),a}function J(t){const o=document.querySelector(`.block-card[data-type="${t}"]`);if(!o)return;const e=i(t),n=s.has(t);o.className=`block-card ${e}${n?" broken":""}`;const a=o.querySelector(".block-status");a.innerHTML=`
    ${e==="keep"?'<span class="keep-badge">KEEP</span>':""}
    ${e==="delete"?'<span class="delete-badge">DELETE</span>':""}
    ${n?'<span class="broken-badge">BROKEN</span>':""}
  `}let $=null;function V(){if($)return;function t(){$=requestAnimationFrame(t);for(const[o,e]of u)!e||!e.mesh||(e.mesh.rotation.y+=.01,e.renderer.render(e.scene,e.camera))}t()}function Y(){s.clear();for(const t of Object.values(f))for(const o of t.types)try{const e=O[o];if(!e){s.add(o);continue}const n=e({w:1,h:1,d:1});if(!n||!n.attributes||!n.attributes.position){s.add(o);continue}if(n.attributes.position.count===0){s.add(o);continue}const a=n.attributes.position.array;for(let c=0;c<a.length;c++)if(isNaN(a[c])){s.add(o);break}n.dispose()}catch{s.add(o)}for(const t of s)i(t)==="undecided"&&g(t,"delete");S(),b(),h(),alert(`Found ${s.size} broken blocks. They have been marked for deletion.`)}function A(){const t={};for(const[e,n]of Object.entries(f)){const a=n.types.filter(c=>i(c)!=="delete");a.length>0&&(t[e]={label:n.label,types:a})}let o=`// Block categories for UI organization
// Generated by Block Admin Tool
// Date: ${new Date().toISOString()}

export const BLOCK_CATEGORIES = {
`;for(const[e,n]of Object.entries(t))o+=`  ${e}: {
`,o+=`    label: '${n.label}',
`,o+=`    types: [${n.types.map(a=>`'${a}'`).join(", ")}]
`,o+=`  },
`;return o+=`};

// Helper to get all block types as flat array
export function getAllBlockTypes() {
  const types = [];
  for (const category of Object.values(BLOCK_CATEGORIES)) {
    types.push(...category.types);
  }
  return types;
}
`,o}function Q(){const t=document.getElementById("export-modal"),o=document.getElementById("export-preview"),e=document.getElementById("export-summary");let n=0,a=0;for(const c of Object.values(f))for(const l of c.types)i(l)==="delete"?a++:n++;e.innerHTML=`
    <p style="margin: 15px 0; color: #95d5b2;">
      Keeping <strong>${n}</strong> blocks, removing <strong>${a}</strong> blocks.
    </p>
  `,o.textContent=A(),t.classList.add("visible")}function X(){const t=A(),o=new Blob([t],{type:"text/javascript"}),e=URL.createObjectURL(o),n=document.createElement("a");n.href=e,n.download="categories.js",n.click(),URL.revokeObjectURL(e)}function Z(){document.getElementById("filter-category").addEventListener("change",t=>{B=t.target.value;for(const[o,e]of u)e&&e.renderer&&e.renderer.dispose();u.clear(),b()}),document.querySelectorAll(".filter-buttons button").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".filter-buttons button").forEach(o=>o.classList.remove("active")),t.classList.add("active"),v=t.dataset.filter;for(const[o,e]of u)e&&e.renderer&&e.renderer.dispose();u.clear(),b()})}),document.getElementById("btn-detect-broken").addEventListener("click",Y),document.getElementById("btn-reset").addEventListener("click",()=>{confirm("Reset all block states to undecided?")&&(k.clear(),s.clear(),S(),b(),h())}),document.getElementById("btn-export").addEventListener("click",Q),document.getElementById("btn-download").addEventListener("click",X),document.getElementById("btn-close-modal").addEventListener("click",()=>{document.getElementById("export-modal").classList.remove("visible")}),document.addEventListener("keydown",t=>{t.target.tagName==="INPUT"||t.target.tagName==="SELECT"||(t.key==="k"||t.key==="K"?document.querySelectorAll(".block-card").forEach(o=>{g(o.dataset.type,"keep")}):(t.key==="d"||t.key==="D")&&document.querySelectorAll(".block-card").forEach(o=>{g(o.dataset.type,"delete")}))})}H();
