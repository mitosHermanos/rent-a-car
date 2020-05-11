FROM openjdk:8
#ARG --server.port=8282
COPY ./out/artifacts/agentski_bekend_jar/* ./
EXPOSE 8282
ENTRYPOINT ["java","-jar","/agentski_bekend.jar","--server.port=8282"]
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
#$ docker run -it -p 127.0.0.1:8282:8282 <id_image>
