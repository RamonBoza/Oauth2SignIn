# GoogleSignIn

This projects uses AngularJS(https://angularjs.org/) and NodeJS(https://nodejs.org/en/) with Satellizer(https://github.com/sahat/satellizer) to implement the SignIn logic (Oauth2) in an easy way.

It uses a nginx.conf file to proxy the communication from the client to the backend.

Client is gonna be served using port 3000 and backend using port 18000.

WebClient is gonna be responding on port 80 as usual, thanks to nginx.


## frontend

### preconditions
This project is configured using Bower ( http://bower.io ) and Gulp ( http://gulpjs.com ) tools

* npm ( https://www.npmjs.com ): brew install npm && npm install -g npm
* Bower ( http://bower.io ): npm install -g bower
* Gulp ( http://gulpjs.com ): npm install -g gulp
* Yeoman ( http://yeoman.io ): npm install -g yo
* generator-gulp-angular ( https://github.com/swiip/generator-gulp-angular ): npm install -g generator-gulp-angular

To create the project, the following command was executed
```
yo gulp-angular
```

then, to install satellizer dependency:
```
bower install satellizer --save
```


### execution
When we want to deploy a server that will expose the client we just execute:

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

Nginx is used to proxy all the data from the client calls to the backend as it is required a two-step communication when implementing Oauth2.
