FROM openjdk:8
#ARG --server.port=8282
COPY ./out/artifacts/agentski_bekend_jar/agentski_bekend.jar app.jar
EXPOSE 8282
ENTRYPOINT ["java","-jar","/app.jar","--server.port=8282"]