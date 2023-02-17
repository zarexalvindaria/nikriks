# Docker Commands to Run the Angular Frontend in Docker



## Instructions for Developer


###  Build the frontend image
`docker build -t nikriksapp-frontend:latest .`

### Run the image at port 4200
`docker run --name nikriksapp-frontend -p 4200:80 -d nikriksapp-frontend:latest`

### Add tag to image
`docker tag nikriksapp-frontend zarexalvindaria/nikriksapp-frontend:latest`

### Push image to DockerHub
`docker push zarexalvindaria/nikriksapp-frontend:latest`



----------------------------

## Instructions for Tester

### Pull Nikrik's Frontend Angular image from DockerHub
`docker pull zarexalvindaria/nikriksapp-frontend:latest`

### Run the Docker image at port 4200
`docker run --name nikriksapp-frontend -p 4200:80 -d zarexalvindaria/nikriksapp-frontend:latest`