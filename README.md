# GoogleSignIn

This projects uses AngularJS(frontend) and NodeJS(backend) with Satellizer to implement the SignIn logic (Oauth2) in an easy way.

It uses a nginx.conf file to proxy the communication from the client to the backend.

Client is gonna be served using port 3000 and backend using port 18000.

WebClient is gonna be responding on port 80 as usual, thanks to nginx.

1#: https://angularjs.org/
2#: https://nodejs.org/en/
3#: https://github.com/sahat/satellizer

## frontend

### preconditions
In order to setup the frontend 

### execution

```
gulp serve
```

## backend

### preconditions

```
npm install async
npm install bcryptjs
npm install body-parser
npm install colors
npm install cors
npm install express
npm install morgan
npm install jwt-simple
npm install moment
npm install mongoose
npm install request
```

### execution

```
node server.js
```

## nginx

Nginx is used to proxy all the data from the client calls to the backend as it is required a two-step communication when implementing Oauth2
