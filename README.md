# SpringBoot-Angular-Product-Management-App

Project for managing products
----------

things needed for this to run: -maven -jdk -npm

to create view layer, cd into /front-end and 
```
"npm run build"
```
this will clean static folder and build new html and js files

then to start app with in-memory h2 database 
in main directory run 
```
"./mvnw spring-boot:run -P dev"
```

it starts application in development profile, no mysql or other DB needed