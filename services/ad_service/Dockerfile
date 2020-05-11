FROM openjdk:8
COPY ./out/artifacts/ad_service_jar/* ./
EXPOSE 8283
ENTRYPOINT ["java","-jar","/ad_service.jar","--server.port=8283"]
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