# Deployment of Django project on AWS
We will push the project on GITHUB, then from github we will clone it to aws EC2 instance.
Before pushing make sure your code include the following lines. In settings.py 
ALLOWED_HOSTS = ['*']
In Installed_apps include 'whitenoise.runserver_nostatic'
In MiddleWare include 'whitenoise.middleware.WhiteNoiseMiddleware'

**Creating EC2 instance**
* Create a new account in AWS. It is an ROOT user.
* After creating the account select the region. It is best to go for Mumbai region.
* In services select Iam service and create IamUser, provide the necessary permissions.
* In IamUser select the region as Mumbai and in service select EC2.
* Launch a new EC2 instance by 
   * selecting the OS as ubuntu.
   * Instance type as t2.micro which is free.
   * provide the keypair. If you doni't have one then create a new keypair.
   * In network setting create a new security group and include SSH and give the permission that it can be accessed from anywhere.
   * Storage is bydefault 8GiB but it is good to increase it to 10GiB.
   * Now launch the new EC2 instance.
Wait for some time to get the instance running and now we will deploy the project using nginx and gunicorn.

**Deployment of project**
Connect the Ec2 instance by clicking on connect.It will provie you an terminal.
1. Let’s update the server’s package index and install python, pip, and Nginx server using the command 
*sudo apt update*
*sudo apt install python3-pip python3-dev nginx*

2. Create a python virtual environment by using 
*sudo pip3 install virtualenv*
*sudo apt install python3-virtualenv*

3. Let’s create a project directory to host our Django application and create a virtual environment inside that directory. 
*git clone https://github.com/Anup-Zessta/DjangoDeploy.git*. If you don't have an existing project you can use mine.
*cd DjangoDeploy* then
*virtualenv env*

4. It will create a virtual environment named env. Let's activate it and install the required packages.
*source env/bin/activate*
*pip install -r requirements.txt*

5. If you are using postgresql as your database then follow the steps to setup postgres.
In settings.py DATABASE include *'PORT': '5432'*
You can edit the files from terminal using vim editor. Type vim -filename-, then to insert press i then after edit save by using Esc, then Shift:wq .
Install postgres by *sudo apt-get -y install postgresql*. Start the postgres by *sudo -u postgres psql*. \password to set the password and \connect -database name- to connect to the database. Note that Password and Database name must be same as in your settings.py.
At the end type \q to quit.

6. If you have any migrations to run, perform that action by
*python manage.py makemigrations*
*python manage.py migrate*
*python manage.py collectstatic*

7. Install Django gunicorn.
*pip install django gunicorn*

8. Now we will configure the gunicorn.
Let’s create a system socket file for gunicorn:
*sudo vim /etc/systemd/system/gunicorn.socket*

Paste the contents below and save the file:
[Unit]
Description=gunicorn socket
[Socket]
ListenStream=/run/gunicorn.sock
[Install]
WantedBy=sockets.target

Next, we will create a service file for gunicorn:
*sudo vim /etc/systemd/system/gunicorn.service*

Paste the contents below inside this file:
[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target
[Service]
User=ubuntu
Group=www-data
WorkingDirectory=/home/ubuntu/DjangoDeploy
ExecStart=/home/ubuntu/DjangoDeploy/env/bin/gunicorn \
          --access-logfile - \
          --workers 3 \
          --bind unix:/run/gunicorn.sock \
          django_demo.wsgi:application
[Install]
WantedBy=multi-user.target

Note: In WorkingDirectory after ubuntu give your own Folder name. In ExecStart in first line after ubuntu give your own Folder name and in last line give your project name where wsgi file is present. like- projectname.wsgi:application

Lets now start and enable the gunicorn socket
*sudo systemctl start gunicorn.socket*
*sudo systemctl enable gunicorn.socket*

Check if already a file exists, the file name is default and if it exists then remove it.
*cd /etc/nginx/sites-enabled/* then type *ls*
*sudo rm -r default* .Type *cd* to come to your home directory.

9. Create a configuration file for Nginx using the following command.
First we will deactivate the virtual environment by *deactivate*

We will create a new file by 
*sudo vim /etc/nginx/sites-available/blog* Note- blog is the name of file you can give any name.

Paste the below contents inside the file created.
server {
    listen 80 default_server;
    server_name _;
    location = /favicon.ico { access_log off; log_not_found off; }
    location /assets/ {
        root /home/ubuntu/DjangoDeploy;
    }
    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }
}

Activate the configuration using the following command:
*sudo ln -s /etc/nginx/sites-available/blog /etc/nginx/sites-enabled/* Note- My file name is blog is it is blog, change as your file name.

Run this command to load a static file
*$ sudo gpasswd -a www-data ubuntu*

Restart nginx and allow the changes to take place.
*sudo systemctl restart nginx*

10. Now we will check if it is working or not.
Go to the project directory and start virtual environment.
and execute the command
*sudo service gunicorn restart*
*sudo service nginx restart*
Copy Public IP Address and open it in new tab. Cheers! it is working.

If you are having any issue then run
*sudo tail -f /var/log/nginx/error.log* to check errors.
Ctrl+C to close it.

To know if nginx working fine.
*sudo systemctl status nginx*

To stop the server type *exit*.