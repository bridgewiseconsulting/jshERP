# Use official Redis image as base
FROM redis:6.2-alpine

# Set Redis password
ENV REDIS_PASSWORD=1234abcd

# Create a redis.conf with password protection
RUN echo "requirepass ${REDIS_PASSWORD}" > /usr/local/etc/redis/redis.conf

# Override default command to use our redis.conf
CMD ["redis-server", "/usr/local/etc/redis/redis.conf"]