FROM nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf.template
ARG FRONTEND_PORT=3000
ARG BACKEND_PORT=1337
ARG DOLLAR=$
RUN envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
RUN cat /etc/nginx/conf.d/default.conf