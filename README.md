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

## AWS ECS + Fargate + Aurora Serverless 部署指南（方案一：同任务多容器）

### 容器划分：
- `jshERP-boot`：后端 Spring Boot 应用容器
- `redis`：缓存服务容器（使用 Redis 官方镜像，密码通过环境变量注入）
- `nginx`：前端服务容器，代理静态文件和转发 API 请求到 jshERP 后端

### 环境变量建议：
- `REDIS_HOST=redis`
- `REDIS_PORT=6379`
- `REDIS_PASSWORD=1234abcd`
- `SPRING_REDIS_PASSWORD=${REDIS_PASSWORD}`

> Spring Boot 配置文件需读取 `spring.redis.password=${REDIS_PASSWORD}`

### 前端注意事项：
- 前端代码打包前需在 `jshERP-web/index.html` 和 `js` 文件中写死 API 地址（如 `http://<后端服务地址>/jshERP-boot/api/`）

### 镜像构建与推送：
```bash
# 登录 AWS ECR
aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin 696899996656.dkr.ecr.ap-southeast-1.amazonaws.com

# 构建后端镜像
docker build -t jsherp .

# 标记镜像
docker tag jsherp:latest 696899996656.dkr.ecr.ap-southeast-1.amazonaws.com/jsherp:latest

# 推送到 ECR
docker push 696899996656.dkr.ecr.ap-southeast-1.amazonaws.com/jsherp:latest
```

### 启动说明：
- 使用 AWS ECS Task Definition 定义三容器服务，Redis 端口不对外暴露，仅容器内部互通。
- `start.sh` 会被 `CMD` 执行启动 jshERP 后端。
- Redis 容器使用默认命令行启动，带 `--requirepass`。
- Nginx 使用 `jshERP-web/nginx.conf` 中配置，并映射 80 端口。

更多部署自动化配置建议将写入 GitHub Actions。

## GitHub Actions 自动部署（待补充）

未来将添加以下内容：

- 自动化构建并推送 Docker 镜像至 AWS ECR
- 更新 ECS 服务（含三容器 Task Definition）
- 持久化构建缓存加快 CI
- Redis 密码和 Aurora 数据库连接信息通过 GitHub Secrets 注入
- 构建失败时发送邮件或 Telegram 通知

请确保您在仓库设置中已配置以下 GitHub Secrets：
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `ECR_REPOSITORY`（例：`696899996656.dkr.ecr.ap-southeast-1.amazonaws.com/jsherp`）
- `REDIS_PASSWORD`
- `AURORA_JDBC_URL`
- `AURORA_USERNAME`
- `AURORA_PASSWORD`
