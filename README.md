# jshERP
├── Dockerfile
├── docs
│   ├── 说明.txt
│   └── 管伊佳ERP-用户手册v3.5.pdf
├── jshERP-boot             #后端目录 
│   ├── bin                 #启动 目录
│   ├── config              #配置文件目录
│   ├── docs
│   ├── lib                 #jar包目录
│   ├── restart.sh          #重启脚本 
│   ├── start.sh             
│   └── stop.sh
├── jshERP-web              #前端 打包代码
│   ├── css
│   ├── doc
│   ├── img
│   ├── index.html
│   ├── js
│   ├── nginx.conf          #Nginx 配置文件 
│   └── static
└── README.md

## 部署组件说明

- `Dockerfile`：构建后端服务的 Docker 镜像。
- `jshERP-boot/lib/`：包含构建后的 Spring Boot 可执行 JAR 文件。
- `jshERP-boot/config/application.properties`：服务配置，包括数据库、Redis 等。
- `jshERP-boot/start.sh`：后端服务启动脚本。
- `jshERP-web/`：前端静态页面资源目录。
- `jshERP-web/nginx.conf`：Nginx 配置文件，建议用于前后端统一代理。
- `docs/说明.txt` 和 `用户手册.pdf`：用户文档。
