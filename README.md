# README #

### What is this repository for? ###

This repository is for the web application for the System of engagement.

### How do I get set up? ###

run the following commands in the command prompt to start the app:

1. npm install 
	(This will install all the packages in node_modules folder)
	
2. npm run start
	(This will run the webpack-dev-server in development enviroment at port 8080)

The above two commands should be good enough to start the app. 

Some of the npm tasks that can be run separately:

1. npm run build:dev
	(This will build the application and put the bundle inside the dist folder at root level in development node. The bundle will not be 
	 minimized and even the .js.map files will also be exposed for debugging. This will also open the webpack stats
	 web pages automatically)
	 
2. npm run build
	(Similar to npm run build:dev but wont open the webpack stats web pages automatically)
	
3. npm run build:prod
	(This will build the application and put the bundle inside the dist folder at root level in production node. The bundle will be 
	 minimized and .js.map files will not be created for debugging. Wont open any web page)

7. npm run lint
	(This Will run the eslint and stylelint. The eslint will automatically fix some of the basic linting errors)
	
8. npm run lint:scripts
	(This will run only eslint)
	
9. npm run lint:styles
	(This will run only stylelint)	
	
Please check the tools/webpack/paths.js file to change the path of the folder/files according to the project.