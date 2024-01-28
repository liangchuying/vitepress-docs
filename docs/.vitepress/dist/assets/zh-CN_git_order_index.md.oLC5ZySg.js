import{_ as s,c as i,o as a,V as t}from"./chunks/framework.BbAbY5cn.js";const c=JSON.parse('{"title":"git/npm/yarn/pnpm 常用指令","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/git_order/index.md","filePath":"zh-CN/git_order/index.md"}'),n={name:"zh-CN/git_order/index.md"},h=t(`<h1 id="git-npm-yarn-pnpm-常用指令" tabindex="-1">git/npm/yarn/pnpm 常用指令 <a class="header-anchor" href="#git-npm-yarn-pnpm-常用指令" aria-label="Permalink to &quot;git/npm/yarn/pnpm 常用指令&quot;">​</a></h1><h3 id="git代理" tabindex="-1">git代理 <a class="header-anchor" href="#git代理" aria-label="Permalink to &quot;git代理&quot;">​</a></h3><h4 id="设置" tabindex="-1">设置 <a class="header-anchor" href="#设置" aria-label="Permalink to &quot;设置&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">global http.proxy </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7890</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">global https.proxy 代理地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">global http.proxy 代理地址</span></span></code></pre></div><h4 id="查看" tabindex="-1">查看 <a class="header-anchor" href="#查看" aria-label="Permalink to &quot;查看&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">global  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">get https.proxy</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">global  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">get https.proxy</span></span></code></pre></div><h4 id="取消" tabindex="-1">取消 <a class="header-anchor" href="#取消" aria-label="Permalink to &quot;取消&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">global </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">unset http.proxy</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">global </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">unset https.proxy</span></span></code></pre></div><h3 id="npm-设置代理" tabindex="-1">npm 设置代理 <a class="header-anchor" href="#npm-设置代理" aria-label="Permalink to &quot;npm 设置代理&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm config set proxy </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//10.22.129.20:8080</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm config set proxy </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//10.22.129.20:8080</span></span></code></pre></div><h3 id="yarn-设置代理" tabindex="-1">yarn 设置代理 <a class="header-anchor" href="#yarn-设置代理" aria-label="Permalink to &quot;yarn 设置代理&quot;">​</a></h3><h4 id="切换源为国内淘宝镜像" tabindex="-1">切换源为国内淘宝镜像 <a class="header-anchor" href="#切换源为国内淘宝镜像" aria-label="Permalink to &quot;切换源为国内淘宝镜像&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn config set registry </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//registry.npm.taobao.org</span></span></code></pre></div><h4 id="查看代理" tabindex="-1">查看代理 <a class="header-anchor" href="#查看代理" aria-label="Permalink to &quot;查看代理&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn config list</span></span></code></pre></div><h4 id="设置-1" tabindex="-1">设置 <a class="header-anchor" href="#设置-1" aria-label="Permalink to &quot;设置&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn config set proxy  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//username:password@server:port</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn config set https</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">proxy </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//username:password@server:port</span></span></code></pre></div><h4 id="取消-1" tabindex="-1">取消 <a class="header-anchor" href="#取消-1" aria-label="Permalink to &quot;取消&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn config set proxy  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//username:password@server:port</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn config set https</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">proxy </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//username:password@server:port</span></span></code></pre></div>`,19),e=[h];function p(l,k,r,d,o,g){return a(),i("div",null,e)}const y=s(n,[["render",p]]);export{c as __pageData,y as default};
