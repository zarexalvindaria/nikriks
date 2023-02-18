# Docker Commands to Build the Spring Boot Backend



## Instructions for Developer

**Note:** Before running any of the commands below, make sure that you have [Docker](https://www.docker.com/products/docker-desktop) installed and is running in the background.

### 1. Build the Java code into jar file

__Note:__ The jar file will be saved under the `\spring-boot-nikriks\target` directory.

`mvn package`

### 2. Build the backend image
__Note:__ You should be in the `\spring-boot-nikriks` directory for this to work.

`docker build -t nikriksapp-docker-backend:latest .`

### 3. Add tag to image

`docker tag nikriksapp-cloud-backend zarexalvindaria/nikriksapp-docker-backend`

### 4. Push image to DockerHub

__Note:__ You need to be logged in to Docker and authorized to write to the Docker image, otherwise this will not work.

`docker push zarexalvindaria/nikriksapp-docker-backend`



-------------------



# Docker Commands to Run the Spring Boot Backend in Docker



## Instructions for Tester

### 1. If you have not created the Nikrik's network yet from the [database instructions](https://github.com/zarexalvindaria/nikriks/tree/main/01-database), create the network 

`docker network create --subnet=172.18.0.0/16 nikriks`

### 2. Pull Nikrik's Backend Spring Boot image from DockerHub
`docker pull zarexalvindaria/nikriksapp-docker-backend:latest `

### 3. __Run the image under the nikriks-network specifying its ip address and port at 172.18.0.3: 8443__
`docker run --name nikriksapp-docker-backend --network nikriks --ip 172.18.0.3 -p 8443:8443-d zarexalvindaria/nikriksapp-docker-backend:latest`

