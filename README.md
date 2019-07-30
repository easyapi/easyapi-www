EasyAPI官网 https://www.easyapi.com
--------

EasyAPI官网，是一个纯静态项目工程，右上角使用Ajax调用EasyAPI获取账号信息接口，当账户登录显示用户信息。

## 开发建议
- 公共样式表、脚步、图片放到easyapi-static项目中
- 根据需要独立建立静态文件，css，images，js（命名参照jhipster框架，Bootstrap等）
- 样式表使用less语法编写

## 命名规范

- 使用kebab-case（短横线）命名方式
- 图片资源采用的命名规范
- CSS命名规范
- 常规名称命名方案，参见EasyAPI中英文翻译

## 目录结构

``` bash
├── README.md
├── product                 #产品目录
├── info                    #信息页
├── solution                #私有化解决方案
├── changelog               #更新日志
└── static                  #静态文件

```

    
## 常见问题
	
**1. 样式图片等无法访问，访问本地静态资源**

    请单独运行easyapi-static项目(https://github.com/easyapi/easyapi-static)，端口使用80，访问地址http://localhost。
    使用SwitchHosts，设置127.0.0.1 static.easyapi.com。
