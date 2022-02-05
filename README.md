# Nikrik's Batangas Lomi atbp Web Application



## About

To be added..



## How to Run:

1. Download and install [Docker](https://www.docker.com/products/docker-desktop).

2. Make sure Docker is running.

3. Create the network bridge with name `nikriks-network` for the database and Spring boot backend application.

   `docker network create --subnet=172.18.0.0/16 nikriks-network`

4. Pull the docker images in your local docker installation in the following order: **Database**, **Backend**, and **Frontend**



### A. Database

1. __Pull the MySQL image from DockerHub__

   `docker pull zarexalvindaria/nikriksapp-db:latest`

2. __Run the image under the nikriks-network at port 3310__

   `docker run --name nikriksapp-db --network nikriks-network --ip 172.18.0.2 -p 3310:3306 -d nikriksapp-db:latest`


### B. Backend

1. __Pull Nikrik's Backend Spring Boot image from DockerHub__

   `docker pull zarexalvindaria/nikriksapp-backend:latest `

2. __Run the image under the nikriks-network specifying its ip address and port at 172.18.0.3: 8080__
   
   `docker run --name nikriksapp-backend --network nikriks-network --ip 172.18.0.3 -p 8080:8080 -d nikriksapp-backend:latest`


###  C. Frontend

1. __Pull Nikrik's Frontend Angular image from DockerHub__

   `docker pull zarexalvindaria/nikriksapp-frontend:latest`

2. __Run the Docker image at port 4200__

   `docker run --name nikriksapp-frontend -p 4200:80 -d nikriksapp-frontend:latest`



The application can now be accessed at http://localhost:4200.
