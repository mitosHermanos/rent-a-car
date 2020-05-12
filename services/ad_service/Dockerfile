#<<<<<<< HEAD
#FROM openjdk:8
#COPY ./out/artifacts/ad_service_jar/* ./
#EXPOSE 8283
#ENTRYPOINT ["java","-jar","/ad_service.jar","--server.port=8283"]
#File -> Project Strcture
#Artifacts
#+ -> JAR -> From module with dependencies
#Uneti main klasu
#Otkaciti copy to the output directory and link via manifest
#Postaviti META-INF u textbox dole u .../src/resources, na istom nivou kao test i main
#Ok
#Apply, Ok
#Build -> Build Artifacts, pa  izaberi jar i izbuilduj ga
#Otvori terminal:
#$ docker build .
#$ docker run -it -p 127.0.0.1:8283:8283 <id_image>
#Da vidis kontejnere ili image, kucaj "docker ps" ili "docker images"
#=======
FROM openjdk:8-jdk-alpine
COPY entrypoint.sh /entrypoint.sh
COPY target/ad_service-0.0.1-SNAPSHOT.jar ad_service-0.0.1-SNAPSHOT.jar
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
