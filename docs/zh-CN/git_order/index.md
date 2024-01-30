# git/npm/yarn/pnpm 常用指令

### git代理
#### 设置
```js
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 代理地址
git config --global http.proxy 代理地址
```
#### 查看
```js
git config --global  --get https.proxy
git config --global  --get https.proxy
```
#### 取消
```js
git config --global --unset http.proxy
git config --global --unset https.proxy
```

### npm 设置代理
```js
npm config set proxy http://10.22.129.20:8080
npm config set proxy https://10.22.129.20:8080
```

### yarn 设置代理
#### 切换源为国内淘宝镜像

```js
yarn config set registry https://registry.npm.taobao.org
```
#### 查看代理
```js
yarn config list
```
#### 设置
```js
yarn config set proxy  http://username:password@server:port
yarn config set https-proxy http://username:password@server:port
```
#### 取消
```js
yarn config set proxy  http://username:password@server:port
yarn config set https-proxy http://username:password@server:port
```