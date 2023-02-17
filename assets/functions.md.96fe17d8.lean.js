import{f as _e,g as W,o as $,c as E,d as p,h as H,m as Ae,u as v,n as J,k as z,l as Le,p as Ce,q as V,F as D,i as U,t as Y,w as Z,v as ue,s as q,x as Ne,e as te,b as xe,j as Re,y as Fe,z as Oe,_ as ye}from"./app.6d8b6ff3.js";const Te=["innerHTML"],Pe={key:0,"i-carbon-launch":"",class:"opacity-80 text-xs"},je=p("span",{op50:""},"-",-1),De=["innerHTML"],We=_e({__name:"FunctionBadge",props:{fn:null},setup(t){const e=t;function s(n=""){return n.replace(/^### (.*$)/gim,"<h3>$1</h3>").replace(/^## (.*$)/gim,"<h2>$1</h2>").replace(/^# (.*$)/gim,"<h1>$1</h1>").replace(/^\> (.*$)/gim,"<blockquote>$1</blockquote>").replace(/\*\*(.*)\*\*/gim,"<b>$1</b>").replace(/\*(.*)\*/gim,"<i>$1</i>").replace(/!\[(.*?)\]\((.*?)\)/gim,"<img alt='$1' src='$2' />").replace(/\[(.*?)\]\((.*?)\)/gim,"<a href='$2'>$1</a>").replace(/`(.*?)`/gim,"<code>$1</code>").replace(/\n$/gim,"<br />").trim()}function r(n){return n.startsWith("use")?`<span opacity="70">use</span>${n.slice(3)}`:n.startsWith("try")?`<span opacity="70">try</span>${n.slice(3)}`:n.startsWith("on")?`<span opacity="70">on</span>${n.slice(2)}`:n}const i=W(()=>e.fn.external?{href:e.fn.external,target:"_blank"}:{href:`/${e.fn.package}/${e.fn.name}/`});return(n,c)=>($(),E("div",{text:"sm",flex:"~ gap1","items-center":"",class:J(t.fn.deprecated?"op80 saturate-0":"")},[p("a",Ae(v(i),{bg:"gray-400/5",p:"x-1.5 y-0.5",class:["rounded items-center",t.fn.deprecated?"line-through !decoration-solid":""],flex:"inline gap-1 none","my-auto":""}),[p("span",{innerHTML:r(t.fn.name)},null,8,Te),t.fn.external?($(),E("i",Pe)):H("",!0)],16),je,p("span",{class:"whitespace-wrap",innerHTML:s(t.fn.description)},null,8,De)],2))}});function N(t){return Array.isArray?Array.isArray(t):be(t)==="[object Array]"}const Be=1/0;function Ve(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Be?"-0":e}function He(t){return t==null?"":Ve(t)}function C(t){return typeof t=="string"}function ve(t){return typeof t=="number"}function Ke(t){return t===!0||t===!1||ze(t)&&be(t)=="[object Boolean]"}function Me(t){return typeof t=="object"}function ze(t){return Me(t)&&t!==null}function k(t){return t!=null}function ee(t){return!t.trim().length}function be(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Ue="Incorrect 'index' type",Ye=t=>`Invalid value for key ${t}`,Ge=t=>`Pattern length exceeds max of ${t}.`,Je=t=>`Missing ${t} property in key`,Qe=t=>`Property 'weight' in key '${t}' must be a positive integer`,de=Object.prototype.hasOwnProperty;class Xe{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(r=>{let i=$e(r);s+=i.weight,this._keys.push(i),this._keyMap[i.id]=i,s+=i.weight}),this._keys.forEach(r=>{r.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function $e(t){let e=null,s=null,r=null,i=1,n=null;if(C(t)||N(t))r=t,e=fe(t),s=se(t);else{if(!de.call(t,"name"))throw new Error(Je("name"));const c=t.name;if(r=c,de.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(Qe(c));e=fe(c),s=se(c),n=t.getFn}return{path:e,id:s,weight:i,src:r,getFn:n}}function fe(t){return N(t)?t:t.split(".")}function se(t){return N(t)?t.join("."):t}function Ze(t,e){let s=[],r=!1;const i=(n,c,o)=>{if(!!k(n))if(!c[o])s.push(n);else{let a=c[o];const l=n[a];if(!k(l))return;if(o===c.length-1&&(C(l)||ve(l)||Ke(l)))s.push(He(l));else if(N(l)){r=!0;for(let h=0,d=l.length;h<d;h+=1)i(l[h],c,o+1)}else c.length&&i(l,c,o+1)}};return i(t,C(e)?e.split("."):e,0),r?s:s[0]}const qe={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},et={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},tt={location:0,threshold:.6,distance:100},st={useExtendedSearch:!1,getFn:Ze,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u={...et,...qe,...tt,...st};const nt=/[^ ]+/g;function rt(t=1,e=3){const s=new Map,r=Math.pow(10,e);return{get(i){const n=i.match(nt).length;if(s.has(n))return s.get(n);const c=1/Math.pow(n,.5*t),o=parseFloat(Math.round(c*r)/r);return s.set(n,o),o},clear(){s.clear()}}}class ae{constructor({getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){this.norm=rt(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,r)=>{this._keysMap[s.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,C(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();C(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,r=this.size();s<r;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!k(e)||ee(e))return;let r={v:e,i:s,n:this.norm.get(e)};this.records.push(r)}_addObject(e,s){let r={i:s,$:{}};this.keys.forEach((i,n)=>{let c=i.getFn?i.getFn(e):this.getFn(e,i.path);if(!!k(c)){if(N(c)){let o=[];const a=[{nestedArrIndex:-1,value:c}];for(;a.length;){const{nestedArrIndex:l,value:h}=a.pop();if(!!k(h))if(C(h)&&!ee(h)){let d={v:h,i:l,n:this.norm.get(h)};o.push(d)}else N(h)&&h.forEach((d,f)=>{a.push({nestedArrIndex:f,value:d})})}r.$[n]=o}else if(C(c)&&!ee(c)){let o={v:c,n:this.norm.get(c)};r.$[n]=o}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Ee(t,e,{getFn:s=u.getFn,fieldNormWeight:r=u.fieldNormWeight}={}){const i=new ae({getFn:s,fieldNormWeight:r});return i.setKeys(t.map($e)),i.setSources(e),i.create(),i}function it(t,{getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){const{keys:r,records:i}=t,n=new ae({getFn:e,fieldNormWeight:s});return n.setKeys(r),n.setIndexRecords(i),n}function G(t,{errors:e=0,currentLocation:s=0,expectedLocation:r=0,distance:i=u.distance,ignoreLocation:n=u.ignoreLocation}={}){const c=e/t.length;if(n)return c;const o=Math.abs(r-s);return i?c+o/i:o?1:c}function ct(t=[],e=u.minMatchCharLength){let s=[],r=-1,i=-1,n=0;for(let c=t.length;n<c;n+=1){let o=t[n];o&&r===-1?r=n:!o&&r!==-1&&(i=n-1,i-r+1>=e&&s.push([r,i]),r=-1)}return t[n-1]&&n-r>=e&&s.push([r,n-1]),s}const P=32;function ot(t,e,s,{location:r=u.location,distance:i=u.distance,threshold:n=u.threshold,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,includeMatches:a=u.includeMatches,ignoreLocation:l=u.ignoreLocation}={}){if(e.length>P)throw new Error(Ge(P));const h=e.length,d=t.length,f=Math.max(0,Math.min(r,d));let x=n,y=f;const M=o>1||a,L=M?Array(d):[];let w;for(;(w=t.indexOf(e,y))>-1;){let b=G(e,{currentLocation:w,expectedLocation:f,distance:i,ignoreLocation:l});if(x=Math.min(b,x),y=w+h,M){let F=0;for(;F<h;)L[w+F]=1,F+=1}}y=-1;let g=[],m=1,I=h+d;const _=1<<h-1;for(let b=0;b<h;b+=1){let F=0,O=I;for(;F<O;)G(e,{errors:b,currentLocation:f+O,expectedLocation:f,distance:i,ignoreLocation:l})<=x?F=O:I=O,O=Math.floor((I-F)/2+F);I=O;let le=Math.max(1,f-O+1),X=c?d:Math.min(f+O,d)+h,j=Array(X+2);j[X+1]=(1<<b)-1;for(let A=X;A>=le;A-=1){let K=A-1,he=s[t.charAt(K)];if(M&&(L[K]=+!!he),j[A]=(j[A+1]<<1|1)&he,b&&(j[A]|=(g[A+1]|g[A])<<1|1|g[A+1]),j[A]&_&&(m=G(e,{errors:b,currentLocation:K,expectedLocation:f,distance:i,ignoreLocation:l}),m<=x)){if(x=m,y=K,y<=f)break;le=Math.max(1,2*f-y)}}if(G(e,{errors:b+1,currentLocation:f,expectedLocation:f,distance:i,ignoreLocation:l})>x)break;g=j}const R={isMatch:y>=0,score:Math.max(.001,m)};if(M){const b=ct(L,o);b.length?a&&(R.indices=b):R.isMatch=!1}return R}function at(t){let e={};for(let s=0,r=t.length;s<r;s+=1){const i=t.charAt(s);e[i]=(e[i]||0)|1<<r-s-1}return e}class ke{constructor(e,{location:s=u.location,threshold:r=u.threshold,distance:i=u.distance,includeMatches:n=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:l=u.ignoreLocation}={}){if(this.options={location:s,threshold:r,distance:i,includeMatches:n,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:l},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(f,x)=>{this.chunks.push({pattern:f,alphabet:at(f),startIndex:x})},d=this.pattern.length;if(d>P){let f=0;const x=d%P,y=d-x;for(;f<y;)h(this.pattern.substr(f,P),f),f+=P;if(x){const M=d-P;h(this.pattern.substr(M),M)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:r}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let y={isMatch:!0,score:0};return r&&(y.indices=[[0,e.length-1]]),y}const{location:i,distance:n,threshold:c,findAllMatches:o,minMatchCharLength:a,ignoreLocation:l}=this.options;let h=[],d=0,f=!1;this.chunks.forEach(({pattern:y,alphabet:M,startIndex:L})=>{const{isMatch:w,score:g,indices:m}=ot(e,y,M,{location:i+L,distance:n,threshold:c,findAllMatches:o,minMatchCharLength:a,includeMatches:r,ignoreLocation:l});w&&(f=!0),d+=g,w&&m&&(h=[...h,...m])});let x={isMatch:f,score:f?d/this.chunks.length:1};return f&&r&&(x.indices=h),x}}class T{constructor(e){this.pattern=e}static isMultiMatch(e){return pe(e,this.multiRegex)}static isSingleMatch(e){return pe(e,this.singleRegex)}search(){}}function pe(t,e){const s=t.match(e);return s?s[1]:null}class lt extends T{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class ht extends T{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class ut extends T{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class dt extends T{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class ft extends T{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class pt extends T{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class Ie extends T{constructor(e,{location:s=u.location,threshold:r=u.threshold,distance:i=u.distance,includeMatches:n=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:l=u.ignoreLocation}={}){super(e),this._bitapSearch=new ke(e,{location:s,threshold:r,distance:i,includeMatches:n,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Se extends T{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,r;const i=[],n=this.pattern.length;for(;(r=e.indexOf(this.pattern,s))>-1;)s=r+n,i.push([r,s-1]);const c=!!i.length;return{isMatch:c,score:c?0:1,indices:i}}}const ne=[lt,Se,ut,dt,pt,ft,ht,Ie],ge=ne.length,gt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,mt="|";function _t(t,e={}){return t.split(mt).map(s=>{let r=s.trim().split(gt).filter(n=>n&&!!n.trim()),i=[];for(let n=0,c=r.length;n<c;n+=1){const o=r[n];let a=!1,l=-1;for(;!a&&++l<ge;){const h=ne[l];let d=h.isMultiMatch(o);d&&(i.push(new h(d,e)),a=!0)}if(!a)for(l=-1;++l<ge;){const h=ne[l];let d=h.isSingleMatch(o);if(d){i.push(new h(d,e));break}}}return i})}const xt=new Set([Ie.type,Se.type]);class yt{constructor(e,{isCaseSensitive:s=u.isCaseSensitive,includeMatches:r=u.includeMatches,minMatchCharLength:i=u.minMatchCharLength,ignoreLocation:n=u.ignoreLocation,findAllMatches:c=u.findAllMatches,location:o=u.location,threshold:a=u.threshold,distance:l=u.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:r,minMatchCharLength:i,findAllMatches:c,ignoreLocation:n,location:o,threshold:a,distance:l},this.pattern=s?e:e.toLowerCase(),this.query=_t(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let n=0,c=[],o=0;for(let a=0,l=s.length;a<l;a+=1){const h=s[a];c.length=0,n=0;for(let d=0,f=h.length;d<f;d+=1){const x=h[d],{isMatch:y,indices:M,score:L}=x.search(e);if(y){if(n+=1,o+=L,r){const w=x.constructor.type;xt.has(w)?c=[...c,...M]:c.push(M)}}else{o=0,n=0,c.length=0;break}}if(n){let d={isMatch:!0,score:o/n};return r&&(d.indices=c),d}}return{isMatch:!1,score:1}}}const re=[];function vt(...t){re.push(...t)}function ie(t,e){for(let s=0,r=re.length;s<r;s+=1){let i=re[s];if(i.condition(t,e))return new i(t,e)}return new ke(t,e)}const Q={AND:"$and",OR:"$or"},ce={PATH:"$path",PATTERN:"$val"},oe=t=>!!(t[Q.AND]||t[Q.OR]),Mt=t=>!!t[ce.PATH],bt=t=>!N(t)&&Me(t)&&!oe(t),me=t=>({[Q.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function we(t,e,{auto:s=!0}={}){const r=i=>{let n=Object.keys(i);const c=Mt(i);if(!c&&n.length>1&&!oe(i))return r(me(i));if(bt(i)){const a=c?i[ce.PATH]:n[0],l=c?i[ce.PATTERN]:i[a];if(!C(l))throw new Error(Ye(a));const h={keyId:se(a),pattern:l};return s&&(h.searcher=ie(l,e)),h}let o={children:[],operator:n[0]};return n.forEach(a=>{const l=i[a];N(l)&&l.forEach(h=>{o.children.push(r(h))})}),o};return oe(t)||(t=me(t)),r(t)}function $t(t,{ignoreFieldNorm:e=u.ignoreFieldNorm}){t.forEach(s=>{let r=1;s.matches.forEach(({key:i,norm:n,score:c})=>{const o=i?i.weight:null;r*=Math.pow(c===0&&o?Number.EPSILON:c,(o||1)*(e?1:n))}),s.score=r})}function Et(t,e){const s=t.matches;e.matches=[],k(s)&&s.forEach(r=>{if(!k(r.indices)||!r.indices.length)return;const{indices:i,value:n}=r;let c={indices:i,value:n};r.key&&(c.key=r.key.src),r.idx>-1&&(c.refIndex=r.idx),e.matches.push(c)})}function kt(t,e){e.score=t.score}function It(t,e,{includeMatches:s=u.includeMatches,includeScore:r=u.includeScore}={}){const i=[];return s&&i.push(Et),r&&i.push(kt),t.map(n=>{const{idx:c}=n,o={item:e[c],refIndex:c};return i.length&&i.forEach(a=>{a(n,o)}),o})}class B{constructor(e,s={},r){this.options={...u,...s},this.options.useExtendedSearch,this._keyStore=new Xe(this.options.keys),this.setCollection(e,r)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof ae))throw new Error(Ue);this._myIndex=s||Ee(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){!k(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let r=0,i=this._docs.length;r<i;r+=1){const n=this._docs[r];e(n,r)&&(this.removeAt(r),r-=1,i-=1,s.push(n))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:n,sortFn:c,ignoreFieldNorm:o}=this.options;let a=C(e)?C(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return $t(a,{ignoreFieldNorm:o}),n&&a.sort(c),ve(s)&&s>-1&&(a=a.slice(0,s)),It(a,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const s=ie(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:n,i:c,n:o})=>{if(!k(n))return;const{isMatch:a,score:l,indices:h}=s.searchIn(n);a&&i.push({item:n,idx:c,matches:[{score:l,value:n,norm:o,indices:h}]})}),i}_searchLogical(e){const s=we(e,this.options),r=(o,a,l)=>{if(!o.children){const{keyId:d,searcher:f}=o,x=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(a,d),searcher:f});return x&&x.length?[{idx:l,item:a,matches:x}]:[]}const h=[];for(let d=0,f=o.children.length;d<f;d+=1){const x=o.children[d],y=r(x,a,l);if(y.length)h.push(...y);else if(o.operator===Q.AND)return[]}return h},i=this._myIndex.records,n={},c=[];return i.forEach(({$:o,i:a})=>{if(k(o)){let l=r(s,o,a);l.length&&(n[a]||(n[a]={idx:a,item:o,matches:[]},c.push(n[a])),l.forEach(({matches:h})=>{n[a].matches.push(...h)}))}}),c}_searchObjectList(e){const s=ie(e,this.options),{keys:r,records:i}=this._myIndex,n=[];return i.forEach(({$:c,i:o})=>{if(!k(c))return;let a=[];r.forEach((l,h)=>{a.push(...this._findMatches({key:l,value:c[h],searcher:s}))}),a.length&&n.push({idx:o,item:c,matches:a})}),n}_findMatches({key:e,value:s,searcher:r}){if(!k(s))return[];let i=[];if(N(s))s.forEach(({v:n,i:c,n:o})=>{if(!k(n))return;const{isMatch:a,score:l,indices:h}=r.searchIn(n);a&&i.push({score:l,key:e,value:n,idx:c,norm:o,indices:h})});else{const{v:n,n:c}=s,{isMatch:o,score:a,indices:l}=r.searchIn(n);o&&i.push({score:a,key:e,value:n,norm:c,indices:l})}return i}}B.version="6.6.2";B.createIndex=Ee;B.parseIndex=it;B.config=u;B.parseQuery=we;vt(yt);const S=t=>(Fe("data-v-415aa340"),t=t(),Oe(),t),St={class:"grid grid-cols-[80px_auto] gap-y-2 mt-10"},wt=S(()=>p("div",{opacity:"80",text:"sm"}," Core ",-1)),At={flex:"~ wrap",gap:"2",m:"b-2"},Lt=["onClick"],Ct=S(()=>p("div",{opacity:"80",text:"sm"}," Add-ons ",-1)),Nt={flex:"~ wrap",gap:"2",m:"b-2"},Rt=["onClick"],Ft=S(()=>p("div",{opacity:"80",text:"sm"}," Sort by ",-1)),Ot={flex:"~ wrap",gap:"2",m:"b-2"},Tt={key:0,class:"select-button active"},Pt=["onClick"],jt=S(()=>p("div",{opacity:"80",text:"sm"}," Filters ",-1)),Dt={flex:"~ gap-4"},Wt={class:"checkbox"},Bt=S(()=>p("span",null,"Has Component",-1)),Vt={class:"checkbox"},Ht=S(()=>p("span",null,"Has Directive",-1)),Kt=S(()=>p("div",{h:"1px",bg:"$vp-c-divider-light",m:"t-4"},null,-1)),zt={flex:"~",class:"children:my-auto",p:"2"},Ut=S(()=>p("i",{"i-carbon-search":"",m:"r-2",opacity:"50"},null,-1)),Yt=S(()=>p("div",{h:"1px",bg:"$vp-c-divider-light",m:"b-4"},null,-1)),Gt={flex:"~ col",gap:"2",class:"relative",p:"t-5"},Jt={key:0,class:"transition mb-2 opacity-60 absolute -top-3 right-0 z-10"},Qt=S(()=>p("i",{"i-carbon-filter-remove":""},null,-1)),Xt={key:0,opacity:"60",class:"!text-16px !tracking-wide !m-0",p:"y-2"},Zt={key:1,"text-center":"","pt-6":""},qt=S(()=>p("div",{m2:"",op50:""}," No result matched ",-1)),es=S(()=>p("i",{"i-carbon-filter-remove":""},null,-1)),ts=_e({__name:"FunctionsList",setup(t){const e=z.filter(g=>!g.startsWith("@")),s=z.filter(g=>g.startsWith("@")),r=["category","name","updated"];Le("click",g=>{g.target.tagName==="A"&&window.dispatchEvent(new Event("hashchange"))});const i=Ce("hash-params",{removeFalsyValues:!0}),n=V(i,"search"),c=V(i,"category"),o=V(i,"component"),a=V(i,"directive"),l=V(i,"sort"),h=W(()=>!n.value&&(!l.value||l.value==="category")),d=W(()=>{let g=Re.filter(m=>!m.internal);return o.value&&(g=g.filter(m=>m.component)),a.value&&(g=g.filter(m=>m.directive)),c.value?g.filter(m=>m.category===c.value):g}),f=W(()=>new B(d.value,{keys:["name","description"]})),x=W(()=>{if(n.value)return f.value.search(n.value).map(g=>g.item);{const g=[...d.value];return l.value==="updated"?g.sort((m,I)=>I.lastUpdated||0-(m.lastUpdated||0)):l.value==="name"?g.sort((m,I)=>m.name.localeCompare(I.name)):g.sort((m,I)=>z.indexOf(m.category||"")-z.indexOf(I.category||"")),g}}),y=W(()=>Boolean(n.value||c.value||o.value||l.value));function M(){l.value=null,c.value=null,o.value=!1,n.value=null}function L(g){c.value=c.value===g?null:g}function w(g){l.value=g}return(g,m)=>{const I=We;return $(),E(D,null,[p("div",St,[wt,p("div",At,[($(!0),E(D,null,U(v(e),_=>($(),E("button",{key:_,class:J(["select-button",{active:v(c)===_}]),onClick:R=>L(_)},Y(_),11,Lt))),128))]),Ct,p("div",Nt,[($(!0),E(D,null,U(v(s),_=>($(),E("button",{key:_,class:J(["select-button",{active:v(c)===_}]),onClick:R=>L(_)},Y(_.slice(1)),11,Rt))),128))]),Ft,p("div",Ot,[v(n)?($(),E("button",Tt," Search ")):H("",!0),($(),E(D,null,U(r,_=>p("button",{key:_,class:J(["select-button capitalize",{active:_===(v(l)||"category"),disabled:v(n)}]),onClick:R=>w(_)},Y(_),11,Pt)),64))]),jt,p("div",Dt,[p("label",Wt,[Z(p("input",{"onUpdate:modelValue":m[0]||(m[0]=_=>q(o)?o.value=_:null),type:"checkbox"},null,512),[[ue,v(o)]]),Bt]),p("label",Vt,[Z(p("input",{"onUpdate:modelValue":m[1]||(m[1]=_=>q(a)?a.value=_:null),type:"checkbox"},null,512),[[ue,v(a)]]),Ht])])]),Kt,p("div",zt,[Ut,Z(p("input",{"onUpdate:modelValue":m[2]||(m[2]=_=>q(n)?n.value=_:null),class:"w-full",type:"text",role:"search",placeholder:"Search..."},null,512),[[Ne,v(n)]])]),Yt,p("div",Gt,[v(y)?($(),E("div",Jt,[p("button",{class:"select-button flex gap-1 items-center !px-2 !py-1",onClick:m[3]||(m[3]=_=>M())},[Qt,te(" Clear Filters ")])])):H("",!0),($(!0),E(D,null,U(v(x),(_,R)=>{var b;return $(),E(D,{key:_.name},[v(h)&&_.category!==((b=v(x)[R-1])==null?void 0:b.category)?($(),E("h3",Xt,Y(_.category),1)):H("",!0),xe(I,{fn:_},null,8,["fn"])],64)}),128)),v(x).length?H("",!0):($(),E("div",Zt,[qt,p("button",{class:"select-button flex-inline gap-1 items-center !px-2 !py-1",onClick:m[4]||(m[4]=_=>M())},[es,te(" Clear Filters ")])]))])],64)}}});const ss=ye(ts,[["__scopeId","data-v-415aa340"]]),as=JSON.parse('{"title":"Functions","description":"","frontmatter":{},"headers":[],"relativePath":"functions.md"}'),ns={name:"functions.md"},rs=p("h1",{id:"functions",tabindex:"-1"},[te("Functions "),p("a",{class:"header-anchor",href:"#functions","aria-hidden":"true"},"#")],-1);function is(t,e,s,r,i,n){const c=ss;return $(),E("div",null,[rs,xe(c)])}const ls=ye(ns,[["render",is]]);export{as as __pageData,ls as default};
