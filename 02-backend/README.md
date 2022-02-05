# Docker Commands to Run the Spring Boot Backend in Docker



## Instructions for Developer


###  Build the backend image
`docker build -t nikriksapp-backend:latest spring-boot-ecommerce`

### Run the image at port 8080
`docker run --name nikriksapp-backend -d nikriksapp-backend:latest`

### Add tag to image
`docker tag nikriksapp-frontend zarexalvindaria/nikriksapp-backend:latest`

### Push image to DockerHub
`docker push zarexalvindaria/nikriksapp-backend:latest`



----------------------------

## Instructions for Tester

### Pull Nikrik's Backend Spring Boot image from DockerHub
`docker pull zarexalvindaria/nikriksapp-backend:latest `

### Run the Docker image at port 8080
`docker run --name nikriksapp-backend -d nikriksapp-backend:latest`