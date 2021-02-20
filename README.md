# Deployment Instructions
1. **Installing python and libraries**

	`$sudo apt update`

	`$sudo apt install python3-pip python3-dev libpq-dev postgresql postgresql-contrib nginx curl`
---
2. **Creating the PostgreSQL Database and User**

	`$sudo -u postgres psql`

	`postgres=# CREATE DATABASE event360db;`

	`postgres=# CREATE USER eventusr WITH PASSWORD 'one-twenty2';`

	`postgres=# ALTER ROLE eventusr SET client_encoding TO 'utf8';`

	`postgres=# ALTER ROLE eventusr SET default_transaction_isolation TO 'read committed';`

	`postgres=# ALTER ROLE eventusr SET timezone TO 'UTC';`

	`postgres=# GRANT ALL PRIVILEGES ON DATABASE event360db TO eventusr;`

	`postgres=# \q`
---

3. **Pulling the latest source from git repository**

	`$git clone https://github.com/buildtechdev/event360.git`

	`$pip install -r ./_deploy_/requirements.txt`

---

4. **Creating a Python Virtual Environment**

	`$sudo apt install python3-venv`

	`$python3 -m venv _venv_`

	`$source ./_venv_/bin/activate`

---
5. **Creating local settings**
	Create a file called `local_settings.py` on your server along side of `settings.py` and add the following:

	SECRET_KEY

	ALLOWED_HOSTS

	DATABASES

	DEBUG

	EMAIL_*
---
6. **Applying local settings**

	`$python manage.py makemigrations`

	`$python manage.py migrate`

	`$python manage.py collectstatic`

---
7. **Installing webapp container (runtime server)**

	`$pip install gunicorn`

	`$sudo cp ./_deploy_/gunicorn.socket /etc/systemd/system/`

	`$sudo cp ./_deploy_/gunicorn.service /etc/systemd/system/`

---
8. **Deactivating virtual env**

	`$deactivate`

---
9. **Copying Nginx config**

	`$sudo cp ./_deploy_/nginx.conf /etc/nginx/sites-available/event360`

	`$sudo ln -s /etc/nginx/sites-available/event360 /etc/nginx/sites-enabled`

	`$sudo systemctl restart nginx`

---
10. **Making the web control executable**

	`$chmod +x ~/event360/_deploy_/webserver.sh`

---
11. **Starting and Controlling the webapp**

	*[Starting the webserver]*

	`$sudo ~/event360/_deploy_/webserver.sh start`

  	*[Stopping the webserver]*

	`$sudo ~/event360/_deploy_/webserver.sh stop`

	*[Restarting the webserver]*

	`$sudo ~/event360/_deploy_/webserver.sh restart`
	
	*[Checking the webserveri status]*

	`$sudo ~/event360/bin/webserver.sh status`
	
---
12. Access the HTTP site

	[http://54.169.127.12/](http://54.169.127.12/)