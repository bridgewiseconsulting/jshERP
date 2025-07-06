# 使用 Nginx 官方镜像
FROM nginx:1.25-alpine

# 维护者信息
LABEL maintainer="yourname@yourdomain.com"

# 删除默认 Nginx 页面
RUN rm -rf /usr/share/nginx/html/*

# 拷贝前端构建内容（静态资源）
COPY . /usr/share/nginx/html/

# 拷贝自定义 Nginx 配置文件（如有 API 转发规则）
COPY nginx.conf /etc/nginx/nginx.conf

# 暴露端口（默认 80）
EXPOSE 80

# 启动 Nginx（默认 ENTRYPOINT 和 CMD 不需要改）