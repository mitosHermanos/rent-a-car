FROM openjdk:8
COPY ./out/artifacts/auth_service_jar/* ./
EXPOSE 8285
ENTRYPOINT ["java","-jar","/auth_service.jar","--server.port=8285"]