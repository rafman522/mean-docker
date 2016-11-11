FROM nginx:latest

COPY . /usr/share/nginx/html

ENV DEVICE_API_URL http://localhost:8080/

ENTRYPOINT ["/usr/share/nginx/html/startup.sh"]