FROM mysql
MAINTAINER zarexalvindaria@gmail.com

# Set environment param
ENV MYSQL_DATABASE=full-stack-ecommerce
ENV	MYSQL_ROOT_PASSWORD=gaj3LpyMNzJFg9
	
# Copy sql files and run
ADD scripts/01-create-user.sql /docker-entrypoint-initdb.d
ADD scripts/02-create-products.sql /docker-entrypoint-initdb.d

EXPOSE 3306