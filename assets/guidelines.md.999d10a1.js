import{_ as s,c as n,o as a,a as l}from"./app.6d8b6ff3.js";const E=JSON.parse('{"title":"\u53C2\u8003\u6307\u5357","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E38\u89C4","slug":"\u5E38\u89C4","link":"#\u5E38\u89C4","children":[]},{"level":2,"title":"ShallowRef","slug":"shallowref","link":"#shallowref","children":[]},{"level":2,"title":"Watch \u9009\u9879","slug":"watch-\u9009\u9879","link":"#watch-\u9009\u9879","children":[]}],"relativePath":"guidelines.md"}'),p={name:"guidelines.md"},o=l(`<h1 id="\u53C2\u8003\u6307\u5357" tabindex="-1">\u53C2\u8003\u6307\u5357 <a class="header-anchor" href="#\u53C2\u8003\u6307\u5357" aria-hidden="true">#</a></h1><p>\u4EE5\u4E0B\u662FMpxUse\u51FD\u6570\u7684\u6307\u5BFC\u539F\u5219\u3002\u60A8\u8FD8\u53EF\u4EE5\u5C06\u5B83\u4EEC\u4F5C\u4E3A\u521B\u4F5C\u81EA\u5DF1\u7684\u53EF\u7EC4\u5408\u51FD\u6570\u6216\u5E94\u7528\u7A0B\u5E8F\u7684\u53C2\u8003\u3002</p><h2 id="\u5E38\u89C4" tabindex="-1">\u5E38\u89C4 <a class="header-anchor" href="#\u5E38\u89C4" aria-hidden="true">#</a></h2><ul><li>\u5C3D\u53EF\u80FD\u4F7F\u7528<code>ref</code>\u800C\u4E0D\u662F<code>reactive</code></li><li>\u5C3D\u53EF\u80FD\u4F7F\u7528options\u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\uFF0C\u4EE5\u4FBF\u5C06\u6765\u6269\u5C55\u65F6\u66F4\u52A0\u7075\u6D3B\u3002</li><li>\u5305\u88C5\u5927\u91CF\u6570\u636E\u65F6\uFF0C\u8BF7\u4F7F\u7528<code>shallowRef</code>\u800C\u4E0D\u662F<code>ref</code>\u3002</li><li>\u5728\u5185\u90E8\u4F7F\u7528<code>watch</code>\u6216<code>watchEffect</code>\u65F6\uFF0C\u8FD8\u5E94\u5C3D\u53EF\u80FD\u914D\u7F6E<code>immediate</code>\u548C<code>flush</code>\u9009\u9879</li><li>\u9002\u5F53\u65F6\u673A\u6E05\u695A\u526F\u4F5C\u7528\uFF0C\u53EF\u4EE5\u7684\u8BDD\u8FD4\u56DE\u6E05\u695A\u51FD\u6570\u66B4\u9732\u7ED9\u7528\u6237</li><li>\u907F\u514D\u4F7F\u7528\u63A7\u5236\u53F0\u65E5\u5FD7</li><li>\u5F53\u51FD\u6570\u4E3A\u5F02\u6B65\u65F6\uFF0C\u8FD4\u56DEPromiseLike</li></ul><p>\u540C\u65F6\u9605\u8BFB: <a href="./guide/best-practice.html">\u6700\u4F73\u5B9E\u8DF5</a></p><h2 id="shallowref" tabindex="-1">ShallowRef <a class="header-anchor" href="#shallowref" aria-hidden="true">#</a></h2><p>\u5305\u88C5\u5927\u91CF\u6570\u636E\u65F6\uFF0C\u8BF7\u4F7F\u7528<code>shallowRef</code>\u800C\u4E0D\u662F<code>ref</code>\u3002</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">useMyFunction</span><span style="color:#666666;">&lt;</span><span style="color:#5DA9A7;">T</span><span style="color:#666666;">&gt;(</span><span style="color:#BD976A;">value</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">MaybeRef</span><span style="color:#666666;">&lt;</span><span style="color:#5DA9A7;">string</span><span style="color:#666666;">&gt;)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#CB7676;">const </span><span style="color:#BD976A;">data</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">shallowRef</span><span style="color:#666666;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">data</span><span style="color:#666666;">.</span><span style="color:#BD976A;">value</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">xxx</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">...</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">useMyFunction</span><span style="color:#999999;">&lt;</span><span style="color:#2E808F;">T</span><span style="color:#999999;">&gt;(</span><span style="color:#B07D48;">value</span><span style="color:#999999;">: </span><span style="color:#2E808F;">MaybeRef</span><span style="color:#999999;">&lt;</span><span style="color:#2E808F;">string</span><span style="color:#999999;">&gt;)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const </span><span style="color:#B07D48;">data</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">shallowRef</span><span style="color:#999999;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">data</span><span style="color:#999999;">.</span><span style="color:#B07D48;">value</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">xxx</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">...</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="watch-\u9009\u9879" tabindex="-1">Watch \u9009\u9879 <a class="header-anchor" href="#watch-\u9009\u9879" aria-hidden="true">#</a></h2><p>\u5728\u5185\u90E8\u4F7F\u7528<code>watch</code>\u6216<code>watchEffect</code>\u65F6\uFF0C\u8FD8\u5E94\u5C3D\u53EF\u80FD\u914D\u7F6E<code>immediate</code>\u548C<code>flush</code>\u9009\u9879\u3002 \u4F8B\u5982 <a href="https://mpxuse.org/shared/watchDebounced/" target="_blank" rel="noreferrer"><code>watchDebounced</code></a></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">type</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">WatchOptions</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@mpxjs/core</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;">// extend the watch options</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">interface</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA9A7;">WatchDebouncedOptions</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">WatchOptions</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">debounce</span><span style="color:#CB7676;">?</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">number</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">watchDebounced</span><span style="color:#666666;">(</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">source</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">any</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">cb</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">any</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">options</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">WatchDebouncedOptions</span><span style="color:#666666;"> =</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{},</span></span>
<span class="line"><span style="color:#666666;">):</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA9A7;">WatchStopHandle</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">watch</span><span style="color:#666666;">(</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#BD976A;">source</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">/* ... */</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#BD976A;">options</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;">// pass watch options</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">type</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">WatchOptions</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@mpxjs/core</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// extend the watch options</span></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#2E808F;">WatchDebouncedOptions</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#59873A;">WatchOptions</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">debounce</span><span style="color:#AB5959;">?</span><span style="color:#999999;">: </span><span style="color:#2E808F;">number</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">watchDebounced</span><span style="color:#999999;">(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">source</span><span style="color:#999999;">: </span><span style="color:#2E808F;">any</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">cb</span><span style="color:#999999;">: </span><span style="color:#2E808F;">any</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">options</span><span style="color:#999999;">: </span><span style="color:#2E808F;">WatchDebouncedOptions</span><span style="color:#999999;"> =</span><span style="color:#393A34;"> </span><span style="color:#999999;">{},</span></span>
<span class="line"><span style="color:#999999;">):</span><span style="color:#393A34;"> </span><span style="color:#2E808F;">WatchStopHandle</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#59873A;">watch</span><span style="color:#999999;">(</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B07D48;">source</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">/* ... */</span><span style="color:#393A34;"> </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B07D48;">options</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// pass watch options</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre></div>`,11),e=[o];function c(t,r,y,i,A,D){return a(),n("div",null,e)}const h=s(p,[["render",c]]);export{E as __pageData,h as default};