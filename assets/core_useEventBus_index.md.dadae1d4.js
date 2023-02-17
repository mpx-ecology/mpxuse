import{_ as t,a as c}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.049ea2ab.js";import{_ as r,c as y,b as n,d as s,e as l,a as o,o as A,r as D}from"./app.6d8b6ff3.js";const x=JSON.parse('{"title":"useEventBus","description":"","frontmatter":{"category":"Utilities"},"headers":[{"level":2,"title":"\u7528\u6CD5","slug":"\u7528\u6CD5","link":"#\u7528\u6CD5","children":[]},{"level":2,"title":"Type Declarations","slug":"type-declarations","link":"#type-declarations","children":[]},{"level":2,"title":"\u6E90\u7801","slug":"\u6E90\u7801","link":"#\u6E90\u7801","children":[]},{"level":2,"title":"\u8D21\u732E\u8005","slug":"\u8D21\u732E\u8005","link":"#\u8D21\u732E\u8005","children":[]},{"level":2,"title":"\u66F4\u65B0\u65E5\u5FD7","slug":"\u66F4\u65B0\u65E5\u5FD7","link":"#\u66F4\u65B0\u65E5\u5FD7","children":[]}],"relativePath":"core/useEventBus/index.md"}'),i={name:"core/useEventBus/index.md"},E=s("h1",{id:"useeventbus",tabindex:"-1"},[l("useEventBus "),s("a",{class:"header-anchor",href:"#useeventbus","aria-hidden":"true"},"#")],-1),B=o(`<p>\u4E00\u4E2A\u57FA\u7840\u7684 event bus.</p><h2 id="\u7528\u6CD5" tabindex="-1">\u7528\u6CD5 <a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">useEventBus</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@mpxjs/mpxuse-core</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">bus</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">useEventBus</span><span style="color:#666666;">&lt;</span><span style="color:#5DA9A7;">string</span><span style="color:#666666;">&gt;(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">news</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#80A665;">listener</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">event</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">string</span><span style="color:#666666;">)</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#CB7676;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#CB7676;">  </span><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">\`</span><span style="color:#C98A7D;">news: </span><span style="color:#666666;">\${</span><span style="color:#C98A7D;">event</span><span style="color:#666666;">}</span><span style="color:#C98A7DAA;">\`</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;">// listen to an event</span></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">unsubscribe</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">bus</span><span style="color:#666666;">.</span><span style="color:#80A665;">on</span><span style="color:#666666;">(</span><span style="color:#BD976A;">listener</span><span style="color:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;">// fire an event</span></span>
<span class="line"><span style="color:#BD976A;">bus</span><span style="color:#666666;">.</span><span style="color:#80A665;">emit</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">The Tokyo Olympics has begun</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;">// unregister the listener</span></span>
<span class="line"><span style="color:#80A665;">unsubscribe</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#758575DD;">// or</span></span>
<span class="line"><span style="color:#BD976A;">bus</span><span style="color:#666666;">.</span><span style="color:#80A665;">off</span><span style="color:#666666;">(</span><span style="color:#BD976A;">listener</span><span style="color:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;">// clearing all listeners</span></span>
<span class="line"><span style="color:#BD976A;">bus</span><span style="color:#666666;">.</span><span style="color:#80A665;">reset</span><span style="color:#666666;">()</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useEventBus</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@mpxjs/mpxuse-core</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">bus</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">useEventBus</span><span style="color:#999999;">&lt;</span><span style="color:#2E808F;">string</span><span style="color:#999999;">&gt;(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">news</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#59873A;">listener</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">event</span><span style="color:#999999;">: </span><span style="color:#2E808F;">string</span><span style="color:#999999;">)</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#AB5959;">  </span><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">\`</span><span style="color:#B56959;">news: </span><span style="color:#999999;">\${</span><span style="color:#B56959;">event</span><span style="color:#999999;">}</span><span style="color:#B56959AA;">\`</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// listen to an event</span></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">unsubscribe</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">bus</span><span style="color:#999999;">.</span><span style="color:#59873A;">on</span><span style="color:#999999;">(</span><span style="color:#B07D48;">listener</span><span style="color:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// fire an event</span></span>
<span class="line"><span style="color:#B07D48;">bus</span><span style="color:#999999;">.</span><span style="color:#59873A;">emit</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">The Tokyo Olympics has begun</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// unregister the listener</span></span>
<span class="line"><span style="color:#59873A;">unsubscribe</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#A0ADA0;">// or</span></span>
<span class="line"><span style="color:#B07D48;">bus</span><span style="color:#999999;">.</span><span style="color:#59873A;">off</span><span style="color:#999999;">(</span><span style="color:#B07D48;">listener</span><span style="color:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// clearing all listeners</span></span>
<span class="line"><span style="color:#B07D48;">bus</span><span style="color:#999999;">.</span><span style="color:#59873A;">reset</span><span style="color:#999999;">()</span></span>
<span class="line"></span></code></pre></div><p>\u5378\u8F7D\u7EC4\u4EF6\u65F6\uFF0C\u5728\u7EC4\u4EF6\u201Csetup\u201D\u5185\u90E8\u6CE8\u518C\u7684\u4FA6\u542C\u5668\u5C06\u81EA\u52A8\u6CE8\u9500\u3002</p><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2>`,5),u=s("details",null,[s("summary",{op50:"",italic:""},"Show Type Declarations"),s("div",{class:"language-typescript"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",{class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"declare"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"EventBusListener"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#5DA9A7"}},"T"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"unknown"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"P"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"any"),s("span",{style:{color:"#666666"}},">"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BD976A"}},"event"),s("span",{style:{color:"#666666"}},": "),s("span",{style:{color:"#5DA9A7"}},"T"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BD976A"}},"payload"),s("span",{style:{color:"#CB7676"}},"?"),s("span",{style:{color:"#666666"}},": "),s("span",{style:{color:"#5DA9A7"}},"P")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"=>"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"declare"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"EventBusEvents"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#5DA9A7"}},"T"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"P"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"any"),s("span",{style:{color:"#666666"}},">"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"EventBusListener"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#5DA9A7"}},"T"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"P"),s("span",{style:{color:"#666666"}},">[]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"declare"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"EventBusKey"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#5DA9A7"}},"T"),s("span",{style:{color:"#666666"}},">"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"symbol")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"declare"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"EventBusIdentifier"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#5DA9A7"}},"T"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"unknown"),s("span",{style:{color:"#666666"}},">"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"=")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"|"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"EventBusKey"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#5DA9A7"}},"T"),s("span",{style:{color:"#666666"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"|"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"|"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"number")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"interface"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"UseEventBusReturn"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#5DA9A7"}},"T"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"P"),s("span",{style:{color:"#666666"}},">"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#758575DD"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"   * Subscribe to an event. When calling emit, the listeners will execute.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"   * "),s("span",{style:{color:"#666666"}},"@"),s("span",{style:{color:"#4D9375"}},"param"),s("span",{style:{color:"#758575DD"}}," "),s("span",{style:{color:"#BD976A"}},"listener"),s("span",{style:{color:"#758575DD"}}," watch listener.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"   * "),s("span",{style:{color:"#666666"}},"@"),s("span",{style:{color:"#4D9375"}},"returns"),s("span",{style:{color:"#758575DD"}}," a stop function to remove the current callback.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#80A665"}},"on"),s("span",{style:{color:"#666666"}},": ("),s("span",{style:{color:"#BD976A"}},"listener"),s("span",{style:{color:"#666666"}},": "),s("span",{style:{color:"#5DA9A7"}},"EventBusListener"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#5DA9A7"}},"T"),s("span",{style:{color:"#666666"}},", "),s("span",{style:{color:"#5DA9A7"}},"P"),s("span",{style:{color:"#666666"}},">) => "),s("span",{style:{color:"#5DA9A7"}},"Fn")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#758575DD"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"   * Similar to `on`, but only fires once")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"   * "),s("span",{style:{color:"#666666"}},"@"),s("span",{style:{color:"#4D9375"}},"param"),s("span",{style:{color:"#758575DD"}}," "),s("span",{style:{color:"#BD976A"}},"listener"),s("span",{style:{color:"#758575DD"}}," watch listener.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"   * "),s("span",{style:{color:"#666666"}},"@"),s("span",{style:{color:"#4D9375"}},"returns"),s("span",{style:{color:"#758575DD"}}," a stop function to remove the current callback.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#80A665"}},"once"),s("span",{style:{color:"#666666"}},": ("),s("span",{style:{color:"#BD976A"}},"listener"),s("span",{style:{color:"#666666"}},": "),s("span",{style:{color:"#5DA9A7"}},"EventBusListener"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#5DA9A7"}},"T"),s("span",{style:{color:"#666666"}},", "),s("span",{style:{color:"#5DA9A7"}},"P"),s("span",{style:{color:"#666666"}},">) => "),s("span",{style:{color:"#5DA9A7"}},"Fn")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#758575DD"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"   * Emit an event, the corresponding event listeners will execute.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"   * "),s("span",{style:{color:"#666666"}},"@"),s("span",{style:{color:"#4D9375"}},"param"),s("span",{style:{color:"#758575DD"}}," "),s("span",{style:{color:"#BD976A"}},"event"),s("span",{style:{color:"#758575DD"}}," data sent.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#80A665"}},"emit"),s("span",{style:{color:"#666666"}},": ("),s("span",{style:{color:"#BD976A"}},"event"),s("span",{style:{color:"#CB7676"}},"?"),s("span",{style:{color:"#666666"}},": "),s("span",{style:{color:"#5DA9A7"}},"T"),s("span",{style:{color:"#666666"}},", "),s("span",{style:{color:"#BD976A"}},"payload"),s("span",{style:{color:"#CB7676"}},"?"),s("span",{style:{color:"#666666"}},": "),s("span",{style:{color:"#5DA9A7"}},"P"),s("span",{style:{color:"#666666"}},") => "),s("span",{style:{color:"#5DA9A7"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#758575DD"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"   * Remove the corresponding listener.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"   * "),s("span",{style:{color:"#666666"}},"@"),s("span",{style:{color:"#4D9375"}},"param"),s("span",{style:{color:"#758575DD"}}," "),s("span",{style:{color:"#BD976A"}},"listener"),s("span",{style:{color:"#758575DD"}}," watch listener.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#80A665"}},"off"),s("span",{style:{color:"#666666"}},": ("),s("span",{style:{color:"#BD976A"}},"listener"),s("span",{style:{color:"#666666"}},": "),s("span",{style:{color:"#5DA9A7"}},"EventBusListener"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#5DA9A7"}},"T"),s("span",{style:{color:"#666666"}},">) => "),s("span",{style:{color:"#5DA9A7"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#758575DD"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"   * Clear all events")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#80A665"}},"reset"),s("span",{style:{color:"#666666"}},": () => "),s("span",{style:{color:"#5DA9A7"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"declare"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"useEventBus"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#5DA9A7"}},"T"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"unknown"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"P"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"any"),s("span",{style:{color:"#666666"}},">(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BD976A"}},"key"),s("span",{style:{color:"#666666"}},": "),s("span",{style:{color:"#5DA9A7"}},"EventBusIdentifier"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#5DA9A7"}},"T"),s("span",{style:{color:"#666666"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"):"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"UseEventBusReturn"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#5DA9A7"}},"T"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#5DA9A7"}},"P"),s("span",{style:{color:"#666666"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"declare"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"EventBusListener"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#2E808F"}},"T"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"unknown"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"P"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"any"),s("span",{style:{color:"#999999"}},">"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"event"),s("span",{style:{color:"#999999"}},": "),s("span",{style:{color:"#2E808F"}},"T"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"payload"),s("span",{style:{color:"#AB5959"}},"?"),s("span",{style:{color:"#999999"}},": "),s("span",{style:{color:"#2E808F"}},"P")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"declare"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"EventBusEvents"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#2E808F"}},"T"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"P"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"any"),s("span",{style:{color:"#999999"}},">"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"EventBusListener"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#2E808F"}},"T"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"P"),s("span",{style:{color:"#999999"}},">[]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"declare"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"EventBusKey"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#2E808F"}},"T"),s("span",{style:{color:"#999999"}},">"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"symbol")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"declare"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"EventBusIdentifier"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#2E808F"}},"T"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"unknown"),s("span",{style:{color:"#999999"}},">"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"=")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"EventBusKey"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#2E808F"}},"T"),s("span",{style:{color:"#999999"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"number")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"interface"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"UseEventBusReturn"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#2E808F"}},"T"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"P"),s("span",{style:{color:"#999999"}},">"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * Subscribe to an event. When calling emit, the listeners will execute.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * "),s("span",{style:{color:"#999999"}},"@"),s("span",{style:{color:"#1E754F"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#B07D48"}},"listener"),s("span",{style:{color:"#A0ADA0"}}," watch listener.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * "),s("span",{style:{color:"#999999"}},"@"),s("span",{style:{color:"#1E754F"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," a stop function to remove the current callback.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#59873A"}},"on"),s("span",{style:{color:"#999999"}},": ("),s("span",{style:{color:"#B07D48"}},"listener"),s("span",{style:{color:"#999999"}},": "),s("span",{style:{color:"#2E808F"}},"EventBusListener"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#2E808F"}},"T"),s("span",{style:{color:"#999999"}},", "),s("span",{style:{color:"#2E808F"}},"P"),s("span",{style:{color:"#999999"}},">) => "),s("span",{style:{color:"#2E808F"}},"Fn")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * Similar to `on`, but only fires once")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * "),s("span",{style:{color:"#999999"}},"@"),s("span",{style:{color:"#1E754F"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#B07D48"}},"listener"),s("span",{style:{color:"#A0ADA0"}}," watch listener.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * "),s("span",{style:{color:"#999999"}},"@"),s("span",{style:{color:"#1E754F"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," a stop function to remove the current callback.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#59873A"}},"once"),s("span",{style:{color:"#999999"}},": ("),s("span",{style:{color:"#B07D48"}},"listener"),s("span",{style:{color:"#999999"}},": "),s("span",{style:{color:"#2E808F"}},"EventBusListener"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#2E808F"}},"T"),s("span",{style:{color:"#999999"}},", "),s("span",{style:{color:"#2E808F"}},"P"),s("span",{style:{color:"#999999"}},">) => "),s("span",{style:{color:"#2E808F"}},"Fn")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * Emit an event, the corresponding event listeners will execute.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * "),s("span",{style:{color:"#999999"}},"@"),s("span",{style:{color:"#1E754F"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#B07D48"}},"event"),s("span",{style:{color:"#A0ADA0"}}," data sent.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#59873A"}},"emit"),s("span",{style:{color:"#999999"}},": ("),s("span",{style:{color:"#B07D48"}},"event"),s("span",{style:{color:"#AB5959"}},"?"),s("span",{style:{color:"#999999"}},": "),s("span",{style:{color:"#2E808F"}},"T"),s("span",{style:{color:"#999999"}},", "),s("span",{style:{color:"#B07D48"}},"payload"),s("span",{style:{color:"#AB5959"}},"?"),s("span",{style:{color:"#999999"}},": "),s("span",{style:{color:"#2E808F"}},"P"),s("span",{style:{color:"#999999"}},") => "),s("span",{style:{color:"#2E808F"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * Remove the corresponding listener.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * "),s("span",{style:{color:"#999999"}},"@"),s("span",{style:{color:"#1E754F"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#B07D48"}},"listener"),s("span",{style:{color:"#A0ADA0"}}," watch listener.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#59873A"}},"off"),s("span",{style:{color:"#999999"}},": ("),s("span",{style:{color:"#B07D48"}},"listener"),s("span",{style:{color:"#999999"}},": "),s("span",{style:{color:"#2E808F"}},"EventBusListener"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#2E808F"}},"T"),s("span",{style:{color:"#999999"}},">) => "),s("span",{style:{color:"#2E808F"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * Clear all events")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#59873A"}},"reset"),s("span",{style:{color:"#999999"}},": () => "),s("span",{style:{color:"#2E808F"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"declare"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"useEventBus"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#2E808F"}},"T"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"unknown"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"P"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"any"),s("span",{style:{color:"#999999"}},">(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"key"),s("span",{style:{color:"#999999"}},": "),s("span",{style:{color:"#2E808F"}},"EventBusIdentifier"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#2E808F"}},"T"),s("span",{style:{color:"#999999"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"):"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"UseEventBusReturn"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#2E808F"}},"T"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2E808F"}},"P"),s("span",{style:{color:"#999999"}},">")]),l(`
`),s("span",{class:"line"})])])])],-1),C=o('<h2 id="\u6E90\u7801" tabindex="-1">\u6E90\u7801 <a class="header-anchor" href="#\u6E90\u7801" aria-hidden="true">#</a></h2><p><a href="https://github.com/mpx-ecology/mpxuse/blob/master/packages/core/useEventBus/index.ts" target="_blank" rel="noreferrer">\u6E90\u7801</a> \u2022 <a href="https://github.com/mpx-ecology/mpxuse/blob/master/packages/core/useEventBus/index.md" target="_blank" rel="noreferrer">\u6587\u6863</a></p><h2 id="\u8D21\u732E\u8005" tabindex="-1">\u8D21\u732E\u8005 <a class="header-anchor" href="#\u8D21\u732E\u8005" aria-hidden="true">#</a></h2>',3),d=s("h2",{id:"\u66F4\u65B0\u65E5\u5FD7",tabindex:"-1"},[l("\u66F4\u65B0\u65E5\u5FD7 "),s("a",{class:"header-anchor",href:"#\u66F4\u65B0\u65E5\u5FD7","aria-hidden":"true"},"#")],-1);function v(h,F,m,_,b,f){const a=D("FunctionInfo"),e=t,p=c;return A(),y("div",null,[E,n(a,{fn:"useEventBus"}),B,u,C,n(e,{fn:"useEventBus"}),d,n(p,{fn:"useEventBus"})])}const k=r(i,[["render",v]]);export{x as __pageData,k as default};