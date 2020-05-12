#<<<<<<< HEAD
#FROM openjdk:8
#COPY ./out/artifacts/gps_service_jar/* ./
#EXPOSE 8286
#ENTRYPOINT ["java","-jar","/gps_service.jar","--server.port=8286"]
#=======
FROM openjdk:8-jdk-alpine
COPY entrypoint.sh /entrypoint.sh
COPY target/gps_service-0.0.1-SNAPSHOT.jar gps_service-0.0.1-SNAPSHOT.jar
COPY consul-client.json /consul-config/consul-client.json
RUN apk --no-cache add \
    curl \
    unzip \
    && curl https://releases.hashicorp.com/consul/1.7.2/consul_1.7.2_linux_amd64.zip -o consul.zip \
    && unzip consul.zip \
    && chmod +x consul \
    && rm -f consul.zip \
    && chmod +x /entrypoint.sh \
    && apk --no-cache del \
    && mkdir consul-data \
    curl \
    unzip
CMD ["/entrypoint.sh"]
#>>>>>>> 0634ac0cffb801351d31455a94e7f99c6114e078
