# Docker Commands to Update the Spring Boot Backend in Google Cloud



## Instructions for Developer

**Note:** Before running any of the commands below, make sure that you have [Docker](https://www.docker.com/products/docker-desktop) installed and is running in the background.

### 1. Build the backend image

`docker build -t nikriksapp-cloud-backend:latest .`

### 2. Add tag to image

`docker tag nikriksapp-cloud-backend gcr.io/firm-reef-340401/nikriksapp-cloud-backend`

### 5. Push image to DockerHub

`docker push gcr.io/firm-reef-340401/nikriksapp-cloud-backend`











-------------------







# Docker Commands to Run the Spring Boot Backend in Docker



## Instructions for Developer

**Note:** Before running any of the commands below, make sure that you have [Docker](https://www.docker.com/products/docker-desktop) installed and is running in the background.

### 1. If you have not created the NikRik's network yet from the [database instructions](https://github.com/zarexalvindaria/nikriks/tree/main/01-database), create the network 

`docker network create --subnet=172.18.0.0/16 nikriks`


###  2. Build the backend image
`docker build -t nikriksapp-backend:latest .`

### 3. __Run the image under the nikriks network specifying its ip address and port at 172.18.0.3: 8443__
`docker run --name nikriksapp-backend --network nikriks --ip 172.18.0.3 -p 8443:8443 -d nikriksapp-backend:latest`

### 4. Add tag to image
`docker tag nikriksapp-backend zarexalvindaria/nikriksapp-backend:latest`

### 5. Push image to DockerHub
`docker push zarexalvindaria/nikriksapp-backend:latest`



----------------------------

## Instructions for Tester

### 1. If you have not created the Nikrik's Network yet from the [database instructions](https://github.com/zarexalvindaria/nikriks/tree/main/01-database), create the network 

`docker network create --subnet=172.18.0.0/16 nikriks`

### 2. Pull Nikrik's Backend Spring Boot image from DockerHub
`docker pull zarexalvindaria/nikriksapp-backend:latest `

### 3. __Run the image under the nikriks-network specifying its ip address and port at 172.18.0.3: 8443__
`docker run --name nikriksapp-backend --network nikriks --ip 172.18.0.3 -p 8443:8443-d zarexalvindaria/nikriksapp-backend:latest`

