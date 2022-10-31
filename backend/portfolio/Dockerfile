FROM openjdk:8-jdk-alpine

#CMD ["./gradlew", "clean", "build"]
ARG JAR_FILE=build/libs/portfolio-0.0.1-SNAPSHOT.jar

WORKDIR /root
COPY ${JAR_FILE} app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]