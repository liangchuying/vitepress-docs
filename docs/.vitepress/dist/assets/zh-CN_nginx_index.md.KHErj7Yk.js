import{_ as s,c as i,o as a,V as n}from"./chunks/framework.BbAbY5cn.js";const c=JSON.parse('{"title":"nginx","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/nginx/index.md","filePath":"zh-CN/nginx/index.md"}'),p={name:"zh-CN/nginx/index.md"},l=n(`<h1 id="nginx" tabindex="-1">nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;nginx&quot;">​</a></h1><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#测试nginx配置文件是否正确</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">nginx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -t</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#修改配置后重新加载生效</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">nginx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -s reload </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#4.查看防火墙状态 </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">systemctl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> status firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#5.开启防火墙 </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">systemctl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> start firewalld  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#6.关闭防火墙 </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">systemctl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stop firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看开放的端口号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">firewall-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">cmd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> --list-all  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#开放8000端口</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">sudo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> firewall-cmd --add-port=8000/tcp --permanent </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#重载入添加的端口：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">firewall-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">cmd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> --reload</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#移除指定端口： sucess 表示成功</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">firewall-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">cmd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> --permanent --remove-port=123/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查询指定端口是否开启成功：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">firewall-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">cmd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> --query-port=123/tcp </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#yes:表示开启 no:表示未开启</span></span></code></pre></div><h3 id="虚拟serve-配置文件" tabindex="-1">虚拟serve 配置文件 <a class="header-anchor" href="#虚拟serve-配置文件" aria-label="Permalink to &quot;虚拟serve 配置文件&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 配置反向代理的参数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   8080</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 监听的端口</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xx_domain </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#访问的域名 </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ## 1. 用户访问 http://xx_domain，则反向代理到 https://github.com</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    location / {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        proxy_pass  https://github.com;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_redirect </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    off</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Host             $host;        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 传递域名</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  X-Real-IP        $remote_addr; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 传递ip</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  X-Scheme         $scheme;      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 传递协议</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  X-Forwarded-For  $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /api/ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Other proxy settings if needed</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    proxy_redirect </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">off;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $host; </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #ip为后端服务地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="nginx配置参数中文详细说明" tabindex="-1">Nginx配置参数中文详细说明： <a class="header-anchor" href="#nginx配置参数中文详细说明" aria-label="Permalink to &quot;Nginx配置参数中文详细说明：&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#定义Nginx运行的用户和用户组</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">user </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">www www;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#nginx进程数,建议设置为等于CPU总核心数.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">worker_processes </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">8;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#全局错误日志定义类型,[ debug | info | notice | warn | error | crit ]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">error_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/log/nginx/error.log info;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#进程文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pid </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/run/nginx.pid;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#一个nginx进程打开的最多文件描述符数目,理论值应该是最多打开文件数（系统的值ulimit -n）与nginx进程数相除,但是nginx分配请求并不均匀,所以建议与ulimit -n的值保持一致.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">worker_rlimit_nofile </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">65535;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#工作模式与连接数上限</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">events</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#参考事件模型,use [ kqueue | rtsig | epoll | /dev/poll | select | poll ]; epoll模型是Linux 2.6以上版本内核中的高性能网络I/O模型,如果跑在FreeBSD上面,就用kqueue模型.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">epoll;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#单个进程最大连接数（最大连接数=连接数*进程数）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">worker_connections </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">65535;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设定http服务器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">include </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mime.types; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#文件扩展名与文件类型映射表</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">default_type </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">application/octet-stream; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#默认文件类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#charset utf-8; #默认编码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server_names_hash_bucket_size </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">128; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#服务器名字的hash表大小</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">client_header_buffer_size </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">32k; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#上传文件大小限制</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">large_client_header_buffers </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">4 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设定请求缓</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">client_max_body_size </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">8m; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设定请求缓</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开启目录列表访问,合适下载服务器,默认关闭.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">autoindex </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">on; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示目录</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">autoindex_exact_size </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">on; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示文件大小 默认为on,显示出文件的确切大小,单位是bytes 改为off后,显示出文件的大概大小,单位是kB或者MB或者GB</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">autoindex_localtime </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">on; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示文件时间 默认为off,显示的文件时间为GMT时间 改为on后,显示的文件时间为文件的服务器时间</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">sendfile </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">on; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开启高效文件传输模式,sendfile指令指定nginx是否调用sendfile函数来输出文件,对于普通应用设为 on,如果用来进行下载等应用磁盘IO重负载应用,可设置为off,以平衡磁盘与网络I/O处理速度,降低系统的负载.注意：如果图片显示不正常把这个改成off.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">tcp_nopush </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">on; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 防止网络阻塞</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">tcp_nodelay </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">on; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 防止网络阻塞</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">keepalive_timeout </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">120; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># (单位s)设置客户端连接保持活动的超时时间,在超过这个时间后服务器会关闭该链接</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># FastCGI相关参数是为了改善网站的性能：减少资源占用,提高访问速度.下面参数看字面意思都能理解.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fastcgi_connect_timeout </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">300;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fastcgi_send_timeout </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">300;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fastcgi_read_timeout </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">300;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fastcgi_buffer_size </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">64k;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fastcgi_buffers </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">4 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fastcgi_busy_buffers_size </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">128k;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fastcgi_temp_file_write_size </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">128k;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># gzip模块设置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">gzip </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">on; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#开启gzip压缩输出</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">gzip_min_length </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1k; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#允许压缩的页面的最小字节数,页面字节数从header偷得content-length中获取.默认是0,不管页面多大都进行压缩.建议设置成大于1k的字节数,小于1k可能会越压越大</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">gzip_buffers </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">4 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#表示申请4个单位为16k的内存作为压缩结果流缓存,默认值是申请与原始数据大小相同的内存空间来存储gzip压缩结果</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">gzip_http_version </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.1; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#压缩版本（默认1.1,目前大部分浏览器已经支持gzip解压.前端如果是squid2.5请使用1.0）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">gzip_comp_level </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#压缩等级.1压缩比最小,处理速度快.9压缩比最大,比较消耗cpu资源,处理速度最慢,但是因为压缩比最大,所以包最小,传输速度快</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">gzip_types </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text/plain application/x-javascript text/css application/xml;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#压缩类型,默认就已经包含text/html,所以下面就不用再写了,写上去也不会有问题,但是会有一个warn.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">gzip_vary </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">on;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#选项可以让前端的缓存服务器缓存经过gzip压缩的页面.例如:用squid缓存经过nginx压缩的数据</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#开启限制IP连接数的时候需要使用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#limit_zone crawler $binary_remote_addr 10m;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##upstream的负载均衡,四种调度算法(下例主讲)##</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#虚拟主机的配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 监听端口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 域名可以有多个,用空格隔开</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ably.com;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># HTTP 自动跳转 HTTPS</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rewrite</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> ^(.*) https://$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server_name$1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">permanent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 监听端口 HTTPS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">443</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ssl;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ably.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置域名证书</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_certificate </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C:\\WebServer\\Certs\\certificate.crt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_certificate_key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C:\\WebServer\\Certs\\private.key;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_session_cache </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">shared:SSL:1m;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_session_timeout </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">5m;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_protocols </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SSLv2 SSLv3 TLSv1;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_ciphers </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_prefer_server_ciphers </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">on;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.html index.htm index.php;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/data/www/;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .*\\.(php|php5)?$</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fastcgi_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">127.0.0.1:9000;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fastcgi_index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.php;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">include </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fastcgi.conf;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置地址拦截转发，解决跨域验证问题</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /oauth/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://localhost:13580/oauth/;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HOST $host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 图片缓存时间设置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> .*\\.(gif|jpg|jpeg|png|bmp|swf)$ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">expires </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">10d;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># JS和CSS缓存时间设置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> .*\\.(js|css)?$ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">expires </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1h;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 日志格式设定</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">log_format </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">access </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote_addr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> - $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote_user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> [$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">time_local</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">] &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">request</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">body_bytes_sent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_referer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_user_agent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_x_forwarded_for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定义本虚拟主机的访问日志</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">access_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/log/nginx/access.log access;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设定查看Nginx状态的地址.StubStatus模块能够获取Nginx自上次启动以来的工作状态，此模块非核心模块，需要在Nginx编译安装时手工指定才能使用</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /NginxStatus </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">stub_status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> on;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">access_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">on;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">auth_basic </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;NginxStatus&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">auth_basic_user_file </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">conf/htpasswd;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#htpasswd文件的内容可以用apache提供的htpasswd工具来产生.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Nginx多台服务器实现负载均衡：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.Nginx负载均衡服务器：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">IP：192.168.0.4（Nginx-Server）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2.Web服务器列表：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Web1:192.168.0.5（Nginx-Node1/Nginx-Web1） ；Web2:192.168.0.7（Nginx-Node2/Nginx-Web2）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3.实现目的：用户访问Nginx-Server（“http://mongo.demo.com:8888”）时，通过Nginx负载均衡到Web1和Web2服务器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Nginx负载均衡服务器的nginx.conf配置注释如下：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">events</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">epoll;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">worker_connections </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">65535;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##upstream的负载均衡,四种调度算法##</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#调度算法1:轮询.每个请求按时间顺序逐一分配到不同的后端服务器,如果后端某台服务器宕机,故障系统被自动剔除,使用户访问不受影响</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> webhost </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 192.168.0.5:6666 ;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 192.168.0.7:6666 ;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#调度算法2:weight(权重).可以根据机器配置定义权重.权重越高被分配到的几率越大</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> webhost </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 192.168.0.5:6666 </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">weight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server 192.168.0.7:6666 </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">weight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#调度算法3:ip_hash. 每个请求按访问IP的hash结果分配,这样来自同一个IP的访客固定访问一个后端服务器,有效解决了动态网页存在的session共享问题</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upstream webhost {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ip_hash;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 192.168.0.5:6666 ;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 192.168.0.7:6666 ;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#调度算法4:url_hash(需安装第三方插件).此方法按访问url的hash结果来分配请求,使每个url定向到同一个后端服务器,可以进一步提高后端缓存服务器的效率.Nginx本身是不支持url_hash的,如果需要使用这种调度算法,必须安装Nginx 的hash软件包</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> webhost </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 192.168.0.5:6666 ;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 192.168.0.7:6666 ;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">hash </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$request_uri;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#调度算法5:fair(需安装第三方插件).这是比上面两个更加智能的负载均衡算法.此种算法可以依据页面大小和加载时间长短智能地进行负载均衡,也就是根据后端服务器的响应时间来分配请求,响应时间短的优先分配.Nginx本身是不支持fair的,如果需要使用这种调度算法,必须下载Nginx的upstream_fair模块</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#虚拟主机的配置(采用调度算法3:ip_hash)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mongo.demo.com;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#对 &quot;/&quot; 启用反向代理</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://webhost;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_redirect </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">off;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#后端的Web服务器可以通过X-Forwarded-For获取用户真实IP</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#以下是一些反向代理的配置,可选.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">client_max_body_size </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">10m; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#允许客户端请求的最大单文件字节数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">client_body_buffer_size </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">128k; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#缓冲区代理缓冲用户端请求的最大字节数,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_connect_timeout </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">90; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#nginx跟后端服务器连接超时时间(代理连接超时)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_send_timeout </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">90; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#后端服务器数据回传时间(代理发送超时)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_read_timeout </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">90; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#连接成功后,后端服务器响应时间(代理接收超时)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_buffer_size </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">4k; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设置代理服务器（nginx）保存用户头信息的缓冲区大小</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_buffers </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">4 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#proxy_buffers缓冲区,网页平均在32k以下的设置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_busy_buffers_size </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">64k; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#高负荷下缓冲大小（proxy_buffers*2）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_temp_file_write_size </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">64k;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设定缓存文件夹大小,大于这个值,将从upstream服务器传</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">负载均衡操作演示如下：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">操作对象：192.168.0.4（Nginx-Server）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建文件夹准备存放配置文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">mkdir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -p /opt/confs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">vim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /opt/confs/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编辑内容如下：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">events</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">epoll;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">worker_connections </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">65535;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> webhost </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ip_hash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 192.168.0.5:6666 ;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 192.168.0.7:6666 ;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mongo.demo.com;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://webhost;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_redirect </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">off;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">client_max_body_size </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">10m;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">client_body_buffer_size </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">128k;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_connect_timeout </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">90;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_send_timeout </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">90;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_read_timeout </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">90;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_buffer_size </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">4k;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_buffers </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">4 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_busy_buffers_size </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">64k;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_temp_file_write_size </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">64k;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 然后保存并退出</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动负载均衡服务器192.168.0.4（Nginx-Server）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">docker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> run -d -p 8888:80 --name nginx-server -v /opt/confs/nginx.conf:/etc/nginx/nginx.conf --restart always nginx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">操作对象：192.168.0.5（Nginx-Node1/Nginx-Web1）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建文件夹用于存放web页面</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">mkdir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -p /opt/html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">vim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /opt/html/index.html</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编辑内容如下：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;div&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">The</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> host is 192.168.0.5(Docker02) - Node 1!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 然后保存并退出</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动192.168.0.5（Nginx-Node1/Nginx-Web1）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">docker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> run -d -p 6666:80 --name nginx-node1 -v /opt/html:/usr/share/nginx/html --restart always nginx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">操作对象：192.168.0.7（Nginx-Node2/Nginx-Web2）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建文件夹用于存放web页面</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">mkdir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -p /opt/html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">vim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /opt/html/index.html</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编辑内容如下：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;div&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">The</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> host is 192.168.0.7(Docker03) - Node 2!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 然后保存并退出</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动192.168.0.7（Nginx-Node2/Nginx-Web2）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">docker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> run -d -p 6666:80 --name nginx-node2 -v $(pwd)/html:/usr/share/nginx/html --restart always nginx</span></span></code></pre></div><h4 id="注意" tabindex="-1">注意： <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意：&quot;">​</a></h4><div class="language-tex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tex</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">但是需要注意的是，这个跨域只针对开发模式有效</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  host: &quot;0.0.0.0&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  port: viteEnv.VITE_PORT,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  open: viteEnv.VITE_OPEN,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  cors: true,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // Load proxy configuration from .env.development</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  proxy: createProxy(viteEnv.VITE_PROXY)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">一旦打包之后，前端配置的跨域就不起作用了，打包后就必须部署在web服务器上，脱离了 vue的代理配置。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">如果是部署在nginx上，反向代理配置如下：</span></span></code></pre></div>`,8),h=[l];function k(t,e,E,r,d,g){return a(),i("div",null,h)}const D=s(p,[["render",k]]);export{c as __pageData,D as default};
