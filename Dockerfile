FROM nginx

COPY nginx.conf /etc/nginx
COPY conf.d /etc/nginx/conf.d