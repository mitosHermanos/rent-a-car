FROM openjdk:8-jdk-alpine
COPY entrypoint.sh /entrypoint.sh
COPY target/admin_service-0.0.1-SNAPSHOT.jar admin_service-0.0.1-SNAPSHOT.jar
RUN chmod +x /entrypoint.sh
EXPOSE 8284
CMD ["/entrypoint.sh"]
