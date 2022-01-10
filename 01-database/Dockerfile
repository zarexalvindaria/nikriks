FROM mysql
MAINTAINER zarexalvindaria@gmail.com

# Set environment param
ENV MYSQL_DATABASE=full-stack-petsupply
ENV	MYSQL_ROOT_PASSWORD=gaj3LpyMNzJFg9
	
# Copy sql files and run
ADD scripts/01-create-user.sql /docker-entrypoint-initdb.d
ADD scripts/refresh-db-products.sql /docker-entrypoint-initdb.d

# Expose database to port 3306
EXPOSE 3306