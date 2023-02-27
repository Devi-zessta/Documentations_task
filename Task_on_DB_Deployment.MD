The task is about creating a PostgreSQL database in AWS EC2 and connecting it to DBeaver.



The steps are as follows:

1)Log in to your AWS account.
2)create an EC2 instance.
3)create a security group with the following inbound rules: 
->Custom TCP: 5432, Source: Anywhere (or specific IP for more security)
->SSH TCP:22, Source: Anywhere
4)connect to the terminal.
5)*sudo apt-get update && sudo apt-get -y upgrade*
 using 'sudo apt-get update' on an EC2 instance is essential to ensure that your system is running the latest software packages and is secure against known vulnerabilities.
 'sudo apt-get -y upgrade' command installs the latest available versions of all the installed packages on the system. This ensures that your system is up-to-date and secure against known vulnerabilities and bugs.
6)*sudo apt-get install postgresql postgresql-contrib*
  'sudo apt-get install postgresql' installs the PostgreSQL server and the client utilities that allow you to interact with the server, such as psql.
  'sudo apt-get install postgresql postgresql-contrib' installs the PostgreSQL server along with additional contrib modules, which are extensions that provide additional functionality to the server. Some of the contrib modules that are included with this package are pgcrypto for cryptographic functions, pgstattuple for detailed statistics about table rows, and hstore for storing sets of key-value pairs.

So the difference is that 'sudo apt-get install postgresql postgresql-contrib' installs additional modules, while 'sudo apt-get install postgresql' installs only the PostgreSQL server and the client utilities.

Now PostgreSQL has been initiated, however it wil only listen to localhost, so we need to edit the configuration of the PostgreSQL.
->To check status of server 
*sudo systemctl status postgresql*
->To start server 
*sudo systemctl start postgresql*

->But first we need to change the password of the user postgres (default user)
7)*sudo -u postgres psql*
 *postgres=#\password​*

->we can also switch to postgres user using the following commands.

*sudo su - postgres*
*psql*

-> to exit command prompt 
*\q*

->To exit postgres user session
*exit*

->Now update configuration for remote access for clients.
8)# Edit pg_hba.conf in vim
*sudo vim /etc/postgresql/10/main/pg_hba.conf*
in place of 10 keep version of postgres.you can know by going to postgre user and then type *ls* command
"postgres@ip-172-31-5-32:~$ *ls*
15"

# Near bottom of file after local rules, add rule (allows remote access):
host    all             all             0.0.0.0/0               md5

# save file​


9)# Edit config in vim
*sudo vim /etc/postgresql/15/main/postgresql.conf*

# Change line 59 to listen to external requests:
listen_address='*'
  
# save file​

10)restart the server 
*sudo systemctl restart postgresql*

Now you may connect to the EC2 postgresql using the public DNS provided  and port 5432.
11)Create database.
*sudo su postgres*
*psql*
postgres=# CREATE DATABASE <database_name>;
postgres=# CREATE USER <user> with encrypted password '<password>';
postgres=# GRANT ALL PRIVILEGES ON DATABASE <database_name> TO <user>;​


->To see list of Databases 
switch from ubuntu user to  postgres user
*sudo su -postgres*
*psql*
*\l*

-> to access particular db
switch from ubuntu user to  postgres user
*sudo su -postgres*
*psql*
*\c <database_name>*

->To create table
*CREATE TABLE table_name (
    column1 datatype1,
    column2 datatype2,
    column3 datatype3,
    ...
);
*

Replace "table_name" with the name you want to give to the new table, and replace "column1", "column2", "column3", etc. with the names you want to give to the columns in the table. Replace "datatype1", "datatype2", "datatype3", etc. with the data types you want to assign to the columns.

For example, to create a table named "users" with columns for "id", "name", and "email", you could use the following command:

*
Copy code
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
); 
*

->to insert into table 
*INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);*

->to view data inside table
*  SELECT * FROM table_name;   *

To connect to DBeaver
1)Open DBeaver on your local system and click the "New Connection" button in the toolbar.

2)In the "New Connection" dialog box, select the database type that you want to connect to, and enter the necessary connection details, including the IP address of your EC2 instance, the port number used by your database, and your database username and password.

3)Click the "Test Connection" button to confirm that you can connect to your database.

4)Once the connection is successful, you can save your connection details and use DBeaver to interact with your database.


​