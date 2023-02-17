import{_ as e,a as c}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.049ea2ab.js";import{_ as r,c as t,b as n,d as s,e as a,a as y,o as i,r as A}from"./app.6d8b6ff3.js";const O=JSON.parse('{"title":"logicOr","description":"","frontmatter":{"category":"@Math","alias":"or","related":"logicAnd, logicNot"},"headers":[{"level":2,"title":"\u7528\u6CD5","slug":"\u7528\u6CD5","link":"#\u7528\u6CD5","children":[]},{"level":2,"title":"\u7C7B\u578B\u58F0\u660E","slug":"\u7C7B\u578B\u58F0\u660E","link":"#\u7C7B\u578B\u58F0\u660E","children":[]},{"level":2,"title":"\u6E90\u7801","slug":"\u6E90\u7801","link":"#\u6E90\u7801","children":[]},{"level":2,"title":"\u8D21\u732E\u8005","slug":"\u8D21\u732E\u8005","link":"#\u8D21\u732E\u8005","children":[]},{"level":2,"title":"\u66F4\u65B0\u65E5\u5FD7","slug":"\u66F4\u65B0\u65E5\u5FD7","link":"#\u66F4\u65B0\u65E5\u5FD7","children":[]}],"relativePath":"math/logicOr/index.md"}'),D={name:"math/logicOr/index.md"},d=s("h1",{id:"logicor",tabindex:"-1"},[a("logicOr "),s("a",{class:"header-anchor",href:"#logicor","aria-hidden":"true"},"#")],-1),h=y(`<p>ref\u7684<code>\u6216</code></p><h2 id="\u7528\u6CD5" tabindex="-1">\u7528\u6CD5 <a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">logicOr</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@mpxjs/mpxuse-math</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">whenever</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@mpxjs/mpxuse-core</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">a</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">ref</span><span style="color:#666666;">(</span><span style="color:#4D9375;">true</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">b</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">ref</span><span style="color:#666666;">(</span><span style="color:#4D9375;">false</span><span style="color:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#80A665;">whenever</span><span style="color:#666666;">(</span><span style="color:#80A665;">logicOr</span><span style="color:#666666;">(</span><span style="color:#BD976A;">a</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">b</span><span style="color:#666666;">),</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">either a or b is truthy!</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">logicOr</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@mpxjs/mpxuse-math</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">whenever</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@mpxjs/mpxuse-core</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">a</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">ref</span><span style="color:#999999;">(</span><span style="color:#1E754F;">true</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">b</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">ref</span><span style="color:#999999;">(</span><span style="color:#1E754F;">false</span><span style="color:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#59873A;">whenever</span><span style="color:#999999;">(</span><span style="color:#59873A;">logicOr</span><span style="color:#999999;">(</span><span style="color:#B07D48;">a</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">b</span><span style="color:#999999;">),</span><span style="color:#393A34;"> </span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">either a or b is truthy!</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7C7B\u578B\u58F0\u660E" tabindex="-1">\u7C7B\u578B\u58F0\u660E <a class="header-anchor" href="#\u7C7B\u578B\u58F0\u660E" aria-hidden="true">#</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#758575DD;">/**</span></span>
<span class="line"><span style="color:#758575DD;"> * \`OR\` conditions for refs.</span></span>
<span class="line"><span style="color:#758575DD;"> *</span></span>
<span class="line"><span style="color:#758575DD;"> * </span><span style="color:#666666;">@</span><span style="color:#4D9375;">see</span><span style="color:#758575DD;"> </span><span style="color:#BD976A;">https://mpxuse.cn/logicOr</span></span>
<span class="line"><span style="color:#758575DD;"> */</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">logicOr</span><span style="color:#666666;">(</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">...</span><span style="color:#BD976A;">args</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">MaybeComputedRef</span><span style="color:#666666;">&lt;</span><span style="color:#5DA9A7;">any</span><span style="color:#666666;">&gt;[]</span></span>
<span class="line"><span style="color:#666666;">):</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA9A7;">ComputedRef</span><span style="color:#666666;">&lt;</span><span style="color:#5DA9A7;">boolean</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">logicOr</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">as</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">or</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;"> * \`OR\` conditions for refs.</span></span>
<span class="line"><span style="color:#A0ADA0;"> *</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#999999;">@</span><span style="color:#1E754F;">see</span><span style="color:#A0ADA0;"> </span><span style="color:#B07D48;">https://mpxuse.cn/logicOr</span></span>
<span class="line"><span style="color:#A0ADA0;"> */</span></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">logicOr</span><span style="color:#999999;">(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">...</span><span style="color:#B07D48;">args</span><span style="color:#999999;">: </span><span style="color:#2E808F;">MaybeComputedRef</span><span style="color:#999999;">&lt;</span><span style="color:#2E808F;">any</span><span style="color:#999999;">&gt;[]</span></span>
<span class="line"><span style="color:#999999;">):</span><span style="color:#393A34;"> </span><span style="color:#2E808F;">ComputedRef</span><span style="color:#999999;">&lt;</span><span style="color:#2E808F;">boolean</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">logicOr</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">as</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">or</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6E90\u7801" tabindex="-1">\u6E90\u7801 <a class="header-anchor" href="#\u6E90\u7801" aria-hidden="true">#</a></h2><p><a href="https://github.com/mpx-ecology/mpxuse/blob/master/packages/math/logicOr/index.ts" target="_blank" rel="noreferrer">\u6E90\u7801</a> \u2022 <a href="https://github.com/mpx-ecology/mpxuse/blob/master/packages/math/logicOr/index.md" target="_blank" rel="noreferrer">\u6587\u6863</a></p><h2 id="\u8D21\u732E\u8005" tabindex="-1">\u8D21\u732E\u8005 <a class="header-anchor" href="#\u8D21\u732E\u8005" aria-hidden="true">#</a></h2>`,8),B=s("h2",{id:"\u66F4\u65B0\u65E5\u5FD7",tabindex:"-1"},[a("\u66F4\u65B0\u65E5\u5FD7 "),s("a",{class:"header-anchor",href:"#\u66F4\u65B0\u65E5\u5FD7","aria-hidden":"true"},"#")],-1);function E(g,C,m,f,u,_){const l=A("FunctionInfo"),o=e,p=c;return i(),t("div",null,[d,n(l,{fn:"logicOr"}),h,n(o,{fn:"logicOr"}),B,n(p,{fn:"logicOr"})])}const v=r(D,[["render",E]]);export{O as __pageData,v as default};
