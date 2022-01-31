# Docker Commands to Run the MySQL Database in Docker



## Instructions for Developer


###  Build the mysql image
`docker build -t nikriksapp-db:latest .`

### Run the image at port 3310
`docker run --name nikriksapp-db -p 3310:3306 -d nikriksapp-db:latest`

### Add tag to image
`docker tag nikriksapp-db zarexalvindaria/nikriksapp-db:latest`

### Push image to DockerHub
`docker push zarexalvindaria/nikriksapp-db:latest`



----------------------------

## Instructions for Tester

### Pull the MySQL image from DockerHub
`docker pull zarexalvindaria/nikriksapp-db:latest`

### Run the Docker image at port 3310
`docker run --name nikriksapp-db -p 3310:3306 -d zarexalvindaria/nikriksapp-db:latest`