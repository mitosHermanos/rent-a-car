FROM openjdk:8
COPY ./out/artifacts/renting_service_jar/* ./
EXPOSE 8287
ENTRYPOINT ["java","-jar","/renting_service.jar","--server.port=8287"]