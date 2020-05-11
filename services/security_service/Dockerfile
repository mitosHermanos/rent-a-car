FROM openjdk:8
COPY ./out/artifacts/security_service_jar/* ./
EXPOSE 8288
ENTRYPOINT ["java","-jar","/security_service.jar","--server.port=8288"]