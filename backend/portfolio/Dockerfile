FROM openjdk:8-jdk-alpine
CMD ["./gradlew", "clean", "build"]
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar

ENV TZ=Asia/Seoul
RUN apt-get install -y tzdata

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]