import{_ as s,o as a,c as n,V as p}from"./chunks/framework.1b5edb90.js";const C=JSON.parse('{"title":"Prompt","description":"","frontmatter":{},"headers":[],"relativePath":"guide/prompt.md","filePath":"guide/prompt.md"}'),e={name:"guide/prompt.md"},l=p(`<h1 id="prompt" tabindex="-1">Prompt <a class="header-anchor" href="#prompt" aria-label="Permalink to &quot;Prompt&quot;">​</a></h1><h2 id="prompt-style" tabindex="-1">Prompt Style <a class="header-anchor" href="#prompt-style" aria-label="Permalink to &quot;Prompt Style&quot;">​</a></h2><p>In most terminal emulators, the prompt style appears before the cursor. This is from the backing shell (e.g bash, zsh, fish) that prints it in the terminal.</p><p>For example:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">user@host:~ $ ▊</span></span></code></pre></div><p>Or even</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">┌[user@host]</span></span>
<span class="line"><span style="color:#A6ACCD;">└$ ▊</span></span></code></pre></div><p>In the same way, we can organize the flow of input with a prompt style just before the cursor.</p><p>Suppose the state of our app defines the <code>username</code> and <code>hostname</code> like so</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> state </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">hostname</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">web</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><p>We can create a function to write our prompt style to the terminal, let it be <code>ask()</code>.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ask</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">term</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">┌[</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">username</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hostname</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">]</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">term</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">└$ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="pause-resume" tabindex="-1">Pause &amp; Resume <a class="header-anchor" href="#pause-resume" aria-label="Permalink to &quot;Pause &amp; Resume&quot;">​</a></h2><p>Using <a href="./../api/#term-pause">term.pause()</a> will pause or deactivate the terminal from recieving user input whereas <a href="./../api/#term-resume">term.resume()</a> will do the opposite.</p><div class="warning custom-block"><p class="custom-block-title">Note</p><p>In both cases, <em>input</em> is affected but not the <em>output</em>. You can still do write operations even when the input is deactivated.</p></div><p><strong>Example:</strong> Pause input for five (5) seconds and resume thereafter.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> term </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">XTerminal</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">term</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">term</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pause</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> term</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resume</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>In the five seconds, any keypress won&#39;t do anything.</p><hr><p>Suppose that you want to do an async operation, it is a good practice to <a href="./../api/#term-pause">pause</a> the terminal for input and <a href="./../api/#term-resume">resume</a> later when the operation is done.</p><p>Whenever the input is recieved, we can pause the terminal and handle the async operation first.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">term</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">input</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">term</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pause</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// do something</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">term</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resume</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>Everytime we write the prompt style, we may want to be able to capture the next command input from the user. In this case, we can use the <a href="./../api/#term-resume">term.resume()</a> method.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ask</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">term</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">┌[</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">username</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hostname</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">]</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">term</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">└$ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line diff add"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">term</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resume</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="focus-blur" tabindex="-1">Focus &amp; Blur <a class="header-anchor" href="#focus-blur" aria-label="Permalink to &quot;Focus &amp; Blur&quot;">​</a></h2><p>You can programmatically focus the terminal input, toggling the keyboard in case of mobile devices, using the <a href="./../api/#term-focus">term.focus()</a> method on the terminal instance.</p><p>Let&#39;s focus the input everytime we ask for input.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ask</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">term</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writeln</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">┌[</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">username</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hostname</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">term</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">└$ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">term</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resume</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line diff add"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">term</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">focus</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>In the same way, we might want to blur the terminal for some reason, let&#39;s say after entering data and pressing the enter key. We can achieve that using the <code>data</code> event and the <a href="./../api/#term-blur">term.blur()</a> method.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">term</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">term</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">blur</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="next-step" tabindex="-1">Next Step <a class="header-anchor" href="#next-step" aria-label="Permalink to &quot;Next Step&quot;">​</a></h2><p>Learn about the history stack that stores all inputs</p>`,32),o=[l];function t(r,c,y,D,F,i){return a(),n("div",null,o)}const m=s(e,[["render",t]]);export{C as __pageData,m as default};
