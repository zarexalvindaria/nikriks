# Use official openjdk image as the base image
FROM openjdk:latest

# Add the jar file and save it as app.jar
ADD spring-boot-ecommerce/target/spring-boot-ecommerce-0.0.1-SNAPSHOT.jar app.jar

# Set the application's entry point and file to run
ENTRYPOINT ["java", "-jar", "/app.jar"]

# Expose port 8080
EXPOSE 8080