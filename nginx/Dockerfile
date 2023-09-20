FROM nginx:latest

COPY nginx.conf.template /etc/nginx/nginx.conf.template

RUN rm /etc/nginx/conf.d/default.conf

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

CMD ["/entrypoint.sh"]