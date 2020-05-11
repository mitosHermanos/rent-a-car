FROM openjdk:8
COPY ./out/artifacts/admin_service_jar/* ./
EXPOSE 8284
ENTRYPOINT ["java","-jar","/admin_service.jar","--server.port=8284"]