# MEAN-Docker
Reference architecture for creating a MEAN application and hosting in Docker and using NGINX to serve static content. 

# Notes:
This reference architecture was implemented using docker for windows but should work anywhere.

# Required:
* [VS Code](https://code.visualstudio.com/)
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

> NOTE: There are some issues with Docker 1.12.0-rc3  use the command docker-compose up -d to start the containers.

Browse to http://{Docker-IP-Address}:{Port}/api/devices

## Validating that the services are up
You can browse using from any browser to http://localhost:8080/api/devices of if your using a bash shell use the curl command.

> curl --head http://localhost:8080/api/devices

# Debugging with VS Code
Debugging support in VS Code was implemented using [Yeaoman](http://yeoman.io) and [generator-docker](https://github.com/Microsoft/generator-docker).

To get started, run through the following steps:

1. Start VS Code
2. Open the folder at the root of this repo (File -> Open)
3. From VS Code, open the command palette (Mac: [⌘] + [P], Windows: [CTRL] + [P])
4. Enter: `task composeForDebug` This will compose your containers using the dockerTask.sh script
5. \[F5\] (Mac: [fn] + [F5]) to start the node debugger within the container
    1. _Since the implementation uses `nodemon -L --debug-brk`, the debugger will break on the first line of your main file, so that you can debug the initialization of your app_

Once you have completed those steps, you should be free to put breakpoints anywhere in your file to debug the node.js server side code.  For starters, try putting a break point in the root get method and then navigate to http://{Docker-IP-Address}:8080/api/devices.

> NOTE: If you make changes and need to recompile, just stop the debugger and repeat steps 3-6.

> NOTE: If you stop the debugger at any point and wish to start debugging again without recompiling, you can easily re-attach to the existing container just with step 5.  However, since the app was already running, you will not be able to debug the initialization of the app again.


## Available VS Code Tasks
Tasks are executed thrugh the VS Code command palette (Mac: [⌘] + [P], Windows: [CTRL] + [P]).  Once you have opened the command palette, type task followed by whitespace and then any of the commands listed below:

After every task is ran, the scripts will output "Finished!!!".

### composeForDebug
As shown in the previous section the `composeForDebug` command will not only build the image from the Dockerfile.debug file, but will also start the containers so they can be debugged.

Usage: From the command palette, provide `task composeForDebug`. 

### stop
The `stop` command will stop all of the running containers using `docker-compose stop`.

Usage: From the command palette, provide `task stop`.

### down
Similar to the `stop` command, the `down` command will also stop the running containers.  In addition, it will also remove the containers.

Usage: From the command palette, provide `task down`.

### startDebugging
The `startDebugging` command is similar to the `composeForDebug` comman in that it starts the containers in debugging mode (REMOTE_DEBUGGING=1).  The difference between the two commands is that `startDebugging` does not attempt to recompile the base image.

Thus, `startDebugging` should only be used if you a) restarted Docker and the containers didn't start afterward or b) previously submitted either a `stop` or `down` task.

Usage: From the command palette, provide `task startDebugging`.