import{_ as s,c as n,o as a,a as l}from"./app.6d8b6ff3.js";const d=JSON.parse('{"title":"\u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5\u8BF4\u660E","slug":"\u5B89\u88C5\u8BF4\u660E","link":"#\u5B89\u88C5\u8BF4\u660E","children":[]},{"level":2,"title":"Demos","slug":"demos","link":"#demos","children":[]},{"level":2,"title":"\u7528\u6CD5 Example","slug":"\u7528\u6CD5-example","link":"#\u7528\u6CD5-example","children":[]}],"relativePath":"guide/index.md"}'),p={name:"guide/index.md"},o=l(`<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h1><p>MpxUse\u662F\u57FA\u4E8E<a href="https://mpxjs.cn/api/composition-api.html" target="_blank" rel="noreferrer">Composition API</a>\u7684\u5B9E\u7528\u7A0B\u5E8F\u51FD\u6570\u96C6\u5408. \u6211\u4EEC\u5047\u8BBE\u60A8\u5DF2\u7ECF\u719F\u6089<a href="https://mpxjs.cn/articles/2.8-release.html" target="_blank" rel="noreferrer">Composition API</a>\u7684\u57FA\u672C\u601D\u60F3\u5728\u7EE7\u7EED\u4E4B\u524D\u3002</p><h2 id="\u5B89\u88C5\u8BF4\u660E" tabindex="-1">\u5B89\u88C5\u8BF4\u660E <a class="header-anchor" href="#\u5B89\u88C5\u8BF4\u660E" aria-hidden="true">#</a></h2><blockquote><p>\u{1F3A9} mpx\u7248\u672C\u9700\u89812.8\u4EE5\u4E0A\u624D\u652F\u6301\u7EC4\u5408\u5F0FComposition API!</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">npm i @mpxjs/mpxuse-core</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">npm i @mpxjs/mpxuse-core</span></span>
<span class="line"></span></code></pre></div><h2 id="demos" tabindex="-1">Demos <a class="header-anchor" href="#demos" aria-hidden="true">#</a></h2><p>\u53EFclone<a href="https://github.com/mpx-ecology/mpxuse" target="_blank" rel="noreferrer">\u4ED3\u5E93</a>\u6267\u884C</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">pnpm i</span></span>
<span class="line"><span style="color:#B8A965;">cd</span><span style="color:#DBD7CAEE;"> demo </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CAEE;"> pnpm i</span></span>
<span class="line"><span style="color:#DBD7CAEE;">npm run watch</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">pnpm i</span></span>
<span class="line"><span style="color:#998418;">cd</span><span style="color:#393A34;"> demo </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> pnpm i</span></span>
<span class="line"><span style="color:#393A34;">npm run watch</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7528\u6CD5-example" tabindex="-1">\u7528\u6CD5 Example <a class="header-anchor" href="#\u7528\u6CD5-example" aria-hidden="true">#</a></h2><p>\u53EA\u9700\u4ECE<code>@mpxjs/mpxuse-core</code>\u4E2D\u5BFC\u5165\u6240\u9700\u7684\u51FD\u6570</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">useCounter</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@mpxjs/mpxuse-core</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#666666;">{</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">count</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">inc</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">dec</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">set</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">reset</span><span style="color:#CB7676;"> </span><span style="color:#666666;">}</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">useCounter</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#80A665;">defineExpose</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">count</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">inc</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">dec</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">set</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">reset</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useCounter</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@mpxjs/mpxuse-core</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#999999;">{</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">count</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">inc</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">dec</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">set</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">reset</span><span style="color:#AB5959;"> </span><span style="color:#999999;">}</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">useCounter</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#59873A;">defineExpose</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">count</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">inc</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">dec</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">set</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">reset</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;</span><span style="color:#FDAEB7;">view</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;</span><span style="color:#FDAEB7;">view</span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;">Count: {{ count }}</span><span style="color:#666666;">&lt;/</span><span style="color:#FDAEB7;">view</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">button</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">bindtap</span><span style="color:#666666;">=</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">inc</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      Increment</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">button</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">button</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">bindtap</span><span style="color:#666666;">=</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">dec</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      Decrement</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">button</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">button</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">bindtap</span><span style="color:#666666;">=</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">inc(5)</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      Increment (+5)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">button</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">button</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">bindtap</span><span style="color:#666666;">=</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">dec(5)</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      Decrement (-5)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">button</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">button</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">bindtap</span><span style="color:#666666;">=</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">set(100)</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      Set (100)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">button</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">button</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">bindtap</span><span style="color:#666666;">=</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">reset</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      Reset</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">button</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;/</span><span style="color:#FDAEB7;">view</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;</span><span style="color:#B31D28;">view</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;</span><span style="color:#B31D28;">view</span><span style="color:#999999;">&gt;</span><span style="color:#393A34;">Count: {{ count }}</span><span style="color:#999999;">&lt;/</span><span style="color:#B31D28;">view</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">button</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">bindtap</span><span style="color:#999999;">=</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">inc</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      Increment</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">button</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">button</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">bindtap</span><span style="color:#999999;">=</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">dec</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      Decrement</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">button</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">button</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">bindtap</span><span style="color:#999999;">=</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">inc(5)</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      Increment (+5)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">button</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">button</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">bindtap</span><span style="color:#999999;">=</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">dec(5)</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      Decrement (-5)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">button</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">button</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">bindtap</span><span style="color:#999999;">=</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">set(100)</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      Set (100)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">button</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">button</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">bindtap</span><span style="color:#999999;">=</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">reset</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      Reset</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">button</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;/</span><span style="color:#B31D28;">view</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u6709\u5173\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605<a href="/mpxuse/functions.html">\u51FD\u6570\u5217\u8868</a>\u3002</p>`,13),e=[o];function t(c,r,y,A,i,D){return a(),n("div",null,e)}const E=s(p,[["render",t]]);export{d as __pageData,E as default};
