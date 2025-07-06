# 使用基础镜像
FROM openjdk:8-jdk-alpine

# 维护者信息
LABEL maintainer="yourname@yourdomain.com"

# 创建工作目录
WORKDIR /home/jshERP
# 拷贝 JAR 包
COPY . /home/jshERP


# 暴露端口（Spring Boot 默认 8080）
EXPOSE 9999

# 启动命令
CMD ["sh", "-c", "./start.sh"]