# Docker Commands to Run the MySQL Database in Docker



## Instructions for Developer

**Note:** Before running any of the commands below, make sure that you have [Docker](https://www.docker.com/products/docker-desktop) installed and is running in the background.




###  1. Build the mysql image
`docker build -t nikriksapp-db:latest .`

### 2. Create the Nikrik's Network

`docker network create --subnet=172.18.0.0/16 nikriks`

__Note:__ Creating the Nikrik's network is required in order for the database and backend to connect. But if this is only for pushing to DockerHub, creating the network is not needed.

### 3. Run the image under the nikriks network at port 3310
`docker run --name nikriksapp-db --network nikriks --ip 172.18.0.2 -p 3310:3306 -d nikriksapp-db:latest`

### 5. Add tag to image
`docker tag nikriksapp-db zarexalvindaria/nikriksapp-db:latest`

### 5. Push image to DockerHub
`docker push zarexalvindaria/nikriksapp-db:latest`



----------------------------

## Instructions for Tester

### 1. Create the Nikrik's Network

`docker network create --subnet=172.18.0.0/16 nikriks`

__Note: __ Creating the Nikrik's network is required in order for the database and backend to connect.

### 2. Pull the MySQL image from DockerHub
`docker pull zarexalvindaria/nikriksapp-db:latest`

### 3. Run the image under the nikriks network at port 3310
`docker run --name nikriksapp-db --network nikriks --ip 172.18.0.2 -p 3310:3306 -d zarexalvindaria/nikriksapp-db:latest`