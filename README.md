# Nikrik's Batangas Lomi atbp Web Application



## About

To be added..



## How to Run:

1. Download and install [Docker](https://www.docker.com/products/docker-desktop).

2. Pull the docker images in your local docker installation in the following order: **Database**, **Backend**, and **Frontend**

   

### Database

1. __Pull the MySQL image from DockerHub__

   `docker pull zarexalvindaria/nikriksapp-db:latest`

2. __Run the Docker image at port 3310__

   `docker run --name nikriksapp-db -p 3310:3306 -d zarexalvindaria/nikriksapp-db:latest`



### Backend

1. __Pull Nikrik's Backend Spring Boot image from DockerHub__

   `docker pull zarexalvindaria/nikriksapp-backend:latest `

2. __Run the Docker image at port 8080__

   `docker run --name nikriksapp-backend -d nikriksapp-backend:latest`

###  Frontend
1. __Pull Nikrik's Frontend Angular image from DockerHub__

   `docker pull zarexalvindaria/nikriksapp-frontend:latest`

2. __Run the Docker image at port 4200__

   `docker run --name nikriksapp-frontend -p 4200:80 -d nikriksapp-frontend:latest`



The application can now be accessed at http://localhost:4200.
