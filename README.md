# Nikrik's Batangas Lomi atbp Web Application



## About
NikRik’s Batangas Lomi atbp., is a startup food business located in Pasay City offering short orders and party trays such as Specials (lomi, miki guisado, and pansit), A La Carte (crispy pork sisig, creamy tofu, lechon kawali, etc.), Extras (toppings, rice, egg fried rice) and Rice Meals (pork sisig with rice).



## Preview 
<img src="https://raw.githubusercontent.com/zarexalvindaria/nikriks/main/00.%20full-cloud/00-starter-files/images/nikriks_screenshot.png">



## How to Run:

1. Download and install [Docker](https://www.docker.com/products/docker-desktop).

2. Make sure Docker is running.

3. Open __command prompt/Powershell__ or __Git Bash__ to create the network bridge named `nikriks` for the database and Spring boot backend application.

   `docker network create --subnet=172.18.0.0/16 nikriks`

4. Pull the docker images in your local docker installation in the following order: **Database**, **Backend**, and **Frontend**



### A. Database

1. __Pull the MySQL image from DockerHub__

   `docker pull zarexalvindaria/nikriksapp-db:latest`

2. __Run the image under the nikriks network at port 3310__

   `docker run --name nikriksapp-db --network nikriks --ip 172.18.0.2 -p 3310:3306 -d zarexalvindaria/nikriksapp-db:latest`

3.  Wait for at least 5 minutes to allow the database to run and accept connection.

### B. Backend

1. __Pull Nikrik's Backend Spring Boot image from DockerHub__

   `docker pull zarexalvindaria/nikriksapp-docker-backend:latest`

2. __Run the image under the nikriks network specifying its host ip and port at 172.18.0.3: 8443__
   
   `docker run --name nikriksapp-docker-backend --network nikriks --ip 172.18.0.3 -p 8443:8443 -d zarexalvindaria/nikriksapp-docker-backend:latest`


###  C. Frontend

__If using GitHub Pages:__ The application can now be accessed at https://nikriks.github.io/.

__Note:__ Since GitHub pages does not support SPA, the workaround is to create a 404.html page similar with the index.html file. Make sure to make a 404 page when rebuilding a new frontend version.

__Optional (If Dockerized)__

1. __Pull Nikrik's Frontend Angular image from DockerHub__

   `docker pull zarexalvindaria/nikriksapp-frontend:latest`

2. __Run the Docker image at port 4200__

   `docker run --name nikriksapp-frontend -p 4200:80 -d zarexalvindaria/nikriksapp-frontend:latest`
