FROM node:alpine as builder
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install


RUN npm run build

# => Run container
FROM nginx:1.15.2-alpine

# Nginx config
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

# Static build
COPY --from=builder /app/build /usr/share/nginx/html/

# Default port exposure
EXPOSE 80

WORKDIR /usr/share/nginx/html


# Start Nginx server
CMD ["/bin/sh", "-c", "nginx -g \"daemon off;\""]
