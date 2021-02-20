CREATE DATABASE event360db;
CREATE USER event360dbuser WITH PASSWORD 'one-22';
ALTER ROLE event360dbuser SET client_encoding TO 'utf8';
ALTER ROLE event360dbuser SET default_transaction_isolation TO 'read committed';
ALTER ROLE event360dbuser SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE event360db TO event360dbuser;
