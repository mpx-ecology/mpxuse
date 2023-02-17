import{_ as e,a as t}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.049ea2ab.js";import{_ as c,c as r,b as a,d as s,e as n,a as y,o as A,r as i}from"./app.6d8b6ff3.js";const S=JSON.parse('{"title":"useSum","description":"","frontmatter":{"category":"@Math"},"headers":[{"level":2,"title":"\u7528\u6CD5","slug":"\u7528\u6CD5","link":"#\u7528\u6CD5","children":[]},{"level":2,"title":"\u7C7B\u578B\u58F0\u660E","slug":"\u7C7B\u578B\u58F0\u660E","link":"#\u7C7B\u578B\u58F0\u660E","children":[]},{"level":2,"title":"\u6E90\u7801","slug":"\u6E90\u7801","link":"#\u6E90\u7801","children":[]},{"level":2,"title":"\u8D21\u732E\u8005","slug":"\u8D21\u732E\u8005","link":"#\u8D21\u732E\u8005","children":[]},{"level":2,"title":"\u66F4\u65B0\u65E5\u5FD7","slug":"\u66F4\u65B0\u65E5\u5FD7","link":"#\u66F4\u65B0\u65E5\u5FD7","children":[]}],"relativePath":"math/useSum/index.md"}'),u={name:"math/useSum/index.md"},B=s("h1",{id:"usesum",tabindex:"-1"},[n("useSum "),s("a",{class:"header-anchor",href:"#usesum","aria-hidden":"true"},"#")],-1),d=y(`<p>\u83B7\u53D6\u6570\u7EC4\u7684\u54CD\u5E94\u5F0F\u548C</p><h2 id="\u7528\u6CD5" tabindex="-1">\u7528\u6CD5 <a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">useSum</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@mpxjs/mpxuse-math</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">array</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">ref</span><span style="color:#666666;">([</span><span style="color:#4C9A91;">1</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#4C9A91;">2</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#4C9A91;">3</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#4C9A91;">4</span><span style="color:#666666;">])</span></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">sum</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">useSum</span><span style="color:#666666;">(</span><span style="color:#BD976A;">array</span><span style="color:#666666;">)</span><span style="color:#CB7676;"> </span><span style="color:#758575DD;">// Ref&lt;10&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useSum</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@mpxjs/mpxuse-math</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">array</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">ref</span><span style="color:#999999;">([</span><span style="color:#2F798A;">1</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#2F798A;">2</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#2F798A;">3</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#2F798A;">4</span><span style="color:#999999;">])</span></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">sum</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">useSum</span><span style="color:#999999;">(</span><span style="color:#B07D48;">array</span><span style="color:#999999;">)</span><span style="color:#AB5959;"> </span><span style="color:#A0ADA0;">// Ref&lt;10&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">useSum</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@mpxjs/mpxuse-math</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">a</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">ref</span><span style="color:#666666;">(</span><span style="color:#4C9A91;">1</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">b</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">ref</span><span style="color:#666666;">(</span><span style="color:#4C9A91;">3</span><span style="color:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">sum</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">useSum</span><span style="color:#666666;">(</span><span style="color:#BD976A;">a</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">b</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#4C9A91;">2</span><span style="color:#666666;">)</span><span style="color:#CB7676;"> </span><span style="color:#758575DD;">// Ref&lt;6&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useSum</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@mpxjs/mpxuse-math</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">a</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">ref</span><span style="color:#999999;">(</span><span style="color:#2F798A;">1</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">b</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">ref</span><span style="color:#999999;">(</span><span style="color:#2F798A;">3</span><span style="color:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">sum</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">useSum</span><span style="color:#999999;">(</span><span style="color:#B07D48;">a</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">b</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#2F798A;">2</span><span style="color:#999999;">)</span><span style="color:#AB5959;"> </span><span style="color:#A0ADA0;">// Ref&lt;6&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7C7B\u578B\u58F0\u660E" tabindex="-1">\u7C7B\u578B\u58F0\u660E <a class="header-anchor" href="#\u7C7B\u578B\u58F0\u660E" aria-hidden="true">#</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">useSum</span><span style="color:#666666;">(</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">array</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">MaybeComputedRef</span><span style="color:#666666;">&lt;</span><span style="color:#5DA9A7;">MaybeComputedRef</span><span style="color:#666666;">&lt;</span><span style="color:#5DA9A7;">number</span><span style="color:#666666;">&gt;[]&gt;</span></span>
<span class="line"><span style="color:#666666;">):</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA9A7;">ComputedRef</span><span style="color:#666666;">&lt;</span><span style="color:#5DA9A7;">number</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">useSum</span><span style="color:#666666;">(</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">...</span><span style="color:#BD976A;">args</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">MaybeComputedRef</span><span style="color:#666666;">&lt;</span><span style="color:#5DA9A7;">number</span><span style="color:#666666;">&gt;[]</span></span>
<span class="line"><span style="color:#666666;">):</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA9A7;">ComputedRef</span><span style="color:#666666;">&lt;</span><span style="color:#5DA9A7;">number</span><span style="color:#666666;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">useSum</span><span style="color:#999999;">(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">array</span><span style="color:#999999;">: </span><span style="color:#2E808F;">MaybeComputedRef</span><span style="color:#999999;">&lt;</span><span style="color:#2E808F;">MaybeComputedRef</span><span style="color:#999999;">&lt;</span><span style="color:#2E808F;">number</span><span style="color:#999999;">&gt;[]&gt;</span></span>
<span class="line"><span style="color:#999999;">):</span><span style="color:#393A34;"> </span><span style="color:#2E808F;">ComputedRef</span><span style="color:#999999;">&lt;</span><span style="color:#2E808F;">number</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">useSum</span><span style="color:#999999;">(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">...</span><span style="color:#B07D48;">args</span><span style="color:#999999;">: </span><span style="color:#2E808F;">MaybeComputedRef</span><span style="color:#999999;">&lt;</span><span style="color:#2E808F;">number</span><span style="color:#999999;">&gt;[]</span></span>
<span class="line"><span style="color:#999999;">):</span><span style="color:#393A34;"> </span><span style="color:#2E808F;">ComputedRef</span><span style="color:#999999;">&lt;</span><span style="color:#2E808F;">number</span><span style="color:#999999;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6E90\u7801" tabindex="-1">\u6E90\u7801 <a class="header-anchor" href="#\u6E90\u7801" aria-hidden="true">#</a></h2><p><a href="https://github.com/mpx-ecology/mpxuse/blob/master/packages/math/useSum/index.ts" target="_blank" rel="noreferrer">\u6E90\u7801</a> \u2022 <a href="https://github.com/mpx-ecology/mpxuse/blob/master/packages/math/useSum/index.md" target="_blank" rel="noreferrer">\u6587\u6863</a></p><h2 id="\u8D21\u732E\u8005" tabindex="-1">\u8D21\u732E\u8005 <a class="header-anchor" href="#\u8D21\u732E\u8005" aria-hidden="true">#</a></h2>`,9),m=s("h2",{id:"\u66F4\u65B0\u65E5\u5FD7",tabindex:"-1"},[n("\u66F4\u65B0\u65E5\u5FD7 "),s("a",{class:"header-anchor",href:"#\u66F4\u65B0\u65E5\u5FD7","aria-hidden":"true"},"#")],-1);function D(C,h,E,f,g,_){const l=i("FunctionInfo"),p=e,o=t;return A(),r("div",null,[B,a(l,{fn:"useSum"}),d,a(p,{fn:"useSum"}),m,a(o,{fn:"useSum"})])}const F=c(u,[["render",D]]);export{S as __pageData,F as default};
