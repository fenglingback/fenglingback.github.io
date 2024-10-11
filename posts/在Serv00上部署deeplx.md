# 在Serv00上部署deeplx



## 面板配置

1. 登入面板

2. 允许运行自己的服务：导航到`Additional services` → `Run your own applications`，点击 `enable`

3. 开放端口：导航到`Port reservation` → `Add port`，port选`random`，port type选`TCP`，Description随便写，点击`Add`后记住给出的端口号

4. 添加自己的子域：导航到 `WWW websites` → `Add new website`，在分配给你的域名 `用户名.serv00.net` 上，创建你自己的子域 `xxx.用户名.serv00.net`，并填入domain，点击 `Advanced settings`，依次选择：Website type -> `Proxy`、Proxy target -> `localhost`、Proxy Port -> `刚才开放的端口号`，不要勾选 `Use HTTPS`，点击 `Add`



## 下载[DeepLX-Serverless](https://github.com/guobao2333/DeepLX-Serverless/releases)

解压zip文件，编辑 `server.js`，找到下面代码的位置，把 `default` 的值改成 `你开放的端口号`，保存

```javascript
const argv = yargs(hideBin(process.argv))
.option('port', {
    alias: 'p',
    describe: '端口号',
    coerce: coerce_port,
    default: 你的端口号
})
```



## 上传文件

1. 回到面板，点击 `File manager` 进入文件管理页面

2. 导航到`domains/你的子域/public_html`，点击 `send` → `From computer`，弹出的窗口点击 `Select files on your computer`，选中解压后的文件中的 `package.json`、`server.js`、`test.js`、`translate.js` 后上传



## 登录ssh并安装需要的node包

登入ssh后，输入：

```shell
cd domains/你的子域/public_html/ && npm i
```



## 启动服务

> [!TIP]  
> `-d` 表示在后台运行，`-m` 表示在断开连接时继续运行

```shell
screen -d -m npm run start
```

> [!IMPORTANT]  
> 关闭服务：`screen -X -S <会话ID> quit`  
> 查看所有会话ID：`screen -ls`  
> 进入某个会话：`screen -r <会话ID>`  
> 退出会话：按下`Ctrl` + `A`后松开，再按下 `D`  



## 配置重启任务

> [!IMPORTANT]  
> 因为Serv00会不定时重启，所以需要配置自动任务，在重启机器时启动服务

1. 面板中导航到 `Cron jobs` → `Add cron job`

2. 依次选择：Specify time → `After reboot`、Form type → `Advanced`

3. 在 `Command` 中输入下面的命令，`comment` 可以随意写，点击 `Add`

```shell
cd domains/你的子域/public_html/ && screen -d -m npm run start
```

