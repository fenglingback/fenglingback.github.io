## 1. 代理类型
  
> 相关文章：https://www.quora.com/Can-we-track-the-real-IP-behind-a-proxy、https://gist.github.com/Warm-rain/7712b5f90a880aaa66651704d3e8ccff

- 透明代理（Transparent）

> [!TIP]  
> 透明代理为您提供所有信息。它告诉您用户正在通过`Via`标头使用代理，并且原始 IP 地址使用`X-Forwarded-For`标头。如果用户想保持私密性，`透明代理是最糟糕的选择`。然而，透明代理有合法的用例，例如网络内容过滤，并且一些透明代理还可能提供缓存功能，从而增强用户的浏览体验。

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0 
... 
Host: 147.71.73.41 
Via: 1.1 ubuntu-s-1vcpu-1gb-fra1-01-1562023622664-s-1vcpu-1gb-fra1-09 (squid/3.5.27) 
X-Forwarded-For: 5.157.248.142
Cache-Control: max-age=0
Connection: keep-alive
```

> X-Forwarded-For中的第一个IP地址是用户的 IP 地址，`如果有多层代理，后面的 IP 地址是中间代理的 IP 地址`。


- 匿名代理（Anonymous）

> [!TIP]  
> 匿名代理不会泄露原始 IP 地址。但是，它确实通过“Via”标头告诉您用户位于代理后面，这将告诉您用户正在使用哪个代理软件。匿名代理可以被视为精英代理和透明代理之间的中间立场。

```
Host: 35.96.34.11 
... 
Cache-Control: max-age=0 
Via: HTTP/1.1 forward.http.proxy:3128 
Connection: keep-alive 
```


- 精英代理（Elite）

> [!TIP]  
> 精英代理将隐藏用户的 IP 地址以及他使用代理服务器的事实。与透明代理不同，精英代理不提供 X-Forwarded-For 标头并提供最大程度的安全性。无法知道用户的原始 IP 地址，或者他是否正在使用代理。

```
Host: 5.51.12.41 
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0 
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8 
Accept-Language: en-US,en;q=0.5 
Accept-Encoding: gzip, deflate 
Connection: Keep-Alive 
Upgrade-Insecure-Requests: 1 
Cache-Control:max-age=0 
```


## 2. 检查代理高匿性

- 如果 X_FORWARDED_FOR 显示你的真实IP，说明是透明代理。
- 如果 X_FORWARDED_FOR 只显示代理IP，说明是匿名代理。
- 如果没有显示真实IP或代理信息，则是精英代理。

### 检测网站
http://web.chacuo.net/netproxycheck
https://httpbin.org/headers



## 3. 免费代理池

https://proxyscrape.com/free-proxy-list

[lalifeier/proxy-scraper](https://github.com/lalifeier/proxy-scraper)


## 4. 验证代理

- https://proxy-seller.com/zh/tools/proxy-checker/，检查代理是否可用

- 请求https://httpbin.org/ip，查看返回响应的IP是否与代理IP一致。


## 5. 代码

