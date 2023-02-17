# Use official openjdk image as the base image
FROM openjdk:latest

# Add the jar file and save it as app.jar
ADD spring-boot-nikriks/target/spring-boot-nikriks-0.0.1-SNAPSHOT.jar app.jar

# Set the application's entry point and file to run
ENTRYPOINT ["java", "-jar", "/app.jar"]

# Expose port 8443
EXPOSE 8443