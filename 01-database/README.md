# Docker Commands to Run the MySQL Database in Docker



## Instructions for Developer


###  Build the mysql image
`docker build -t petsupplyapp-db:latest .`

### Run the image at port 3310
`docker run --name petsupplyapp-db -p 3310:3306 -d petsupplyapp-db:latest`

### Add tag to image
`docker tag petsupplyapp-db zarexalvindaria/petsupplyapp-db:latest`

### Push image to DockerHub
`docker push zarexalvindaria/petsupplyapp-db:latest`



----------------------------

## Instructions for Tester

### Pull the MySQL image from DockerHub
`docker pull zarexalvindaria/petsupplyapp-db:latest`

### Run the Docker image at port 3310
`docker run --name petsupplyapp-db -p 3310:3306 -d zarexalvindaria/petsupplyapp-db:latest`