FROM mysql
MAINTAINER zarexalvindaria@gmail.com
LABEL org.opencontainers.image.source https://github.com/zarexalvindaria/nikriks

# Set environment param
ENV MYSQL_DATABASE=full-stack-nikriks
ENV	MYSQL_ROOT_PASSWORD=gaj3LpyMNzJFg9
	
# Copy sql files and run
ADD scripts/01-create-user.sql /docker-entrypoint-initdb.d
ADD scripts/03-refresh-db-products.sql /docker-entrypoint-initdb.d
ADD scripts/04-countries-and-regions.sql /docker-entrypoint-initdb.d
ADD scripts/05-create-order-tables.sql /docker-entrypoint-initdb.d
ADD scripts/06-distinct.sql /docker-entrypoint-initdb.d

# Expose database to port 3306
EXPOSE 3306