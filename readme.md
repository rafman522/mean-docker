# MEAN-Docker
Referece architecture for creating a MEAN application and hosting in Docker and using NGINX to serve static content. 

# Notes:
This reference architecture was implemented using docker for windows but should work anywhere.

# Required:
* Any text editor, I've just been opening files in VS since I already have it installed.
* [Docker (latest)](https://www.docker.com/) 

## Optional (To run without docker)
* [node.js](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)

# Building the Project
To build the project you will use 'docker-compose'.

Open a terminal, I like to use the bash shell that comes with git, and cd to the src folder for the repository.  The type -

> docker-compose build

This will build the docker containers needed for the example.

To run the application use the 'up' command.

> docker-compose up

Browse to http://{Docker-IP-Address}:{Port}/devices

