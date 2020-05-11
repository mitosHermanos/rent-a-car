FROM openjdk:8
COPY ./out/artifacts/gps_service_jar/* ./
EXPOSE 8286
ENTRYPOINT ["java","-jar","/gps_service.jar","--server.port=8286"]