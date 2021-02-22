# 图片组件

## 安装

```
npm i maishu-image-components
```

## 配置

```ts
ImageService.serviceHost = "http://192.168.2.94:2880/image";
ImageService.headers["application-id"] = "7bbfa36c-8115-47ad-8d47-9e52b58e7efd";
```

其中：

1. **serviceHost**， 图片服务的 URL 地址
2. **headers["application-id"]**，应用编号，如果请求是通过网关，可以不设置

## 运行示例

1. 进入项目文件夹
2. 运行命令 ```node-static ./samples```
3. 在浏览器输入 ```http://127.0.0.1:49532```
