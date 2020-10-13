# node-jwt

create package.json file with default option 

npm init --yes

npm i express jsonwebtoken dotenv

for dev environment only 

npm i --save-dev nodemon

we made some changes inside package.json file 

then to start server please run this command

npm run devStart

to test api services please install rest client in vs code.

request.rest is file name where I am testing my rest apis, 

to use this file please install rest client in vs code.

I added one more server file authServer.js

and added also in package.json file

now we have two server js files, one is server.js listening at 3000 and authServer.js listening at 4000.

One server we used to generate jwt other for hitting rest apis.

to start this server use command

npm run devStartAuth

then we first get access token once expired can get access token again by using refresh token.

