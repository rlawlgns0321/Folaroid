FROM openjdk:8-jdk-alpine
RUN ./gradlew bootJAR
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]