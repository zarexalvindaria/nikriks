# Docker Commands to Run the Spring Boot Backend in Docker



## Instructions for Developer

**Note:** Before running any of the commands below, make sure that you have [Docker](https://www.docker.com/products/docker-desktop) installed and it is running in the background.

### 1. If you have not created the Nikrik's Network yet from the [database instructions](https://github.com/zarexalvindaria/nikriks/tree/main/01-database), create the network 

`docker network create --subnet=172.18.0.0/16 nikriks-network`


###  2. Build the backend image
`docker build -t nikriksapp-backend:latest spring-boot-ecommerce`

### 3. __Run the image under the nikriks-network specifying its ip address and port at 172.18.0.3: 8080__
`docker run --name nikriksapp-backend --network nikriks-network --ip 172.18.0.3 -p 8080:8080 -d nikriksapp-backend:latest`

### 4. Add tag to image
`docker tag nikriksapp-frontend zarexalvindaria/nikriksapp-backend:latest`

### 5. Push image to DockerHub
`docker push zarexalvindaria/nikriksapp-backend:latest`



----------------------------

## Instructions for Tester

### 1. If you have not created the Nikrik's Network yet from the [database instructions](https://github.com/zarexalvindaria/nikriks/tree/main/01-database), create the network 

`docker network create --subnet=172.18.0.0/16 nikriks-network`

### 2. Pull Nikrik's Backend Spring Boot image from DockerHub
`docker pull zarexalvindaria/nikriksapp-backend:latest `

### 3. __Run the image under the nikriks-network specifying its ip address and port at 172.18.0.3: 8080__
`docker run --name nikriksapp-backend -d nikriksapp-backend:latest`