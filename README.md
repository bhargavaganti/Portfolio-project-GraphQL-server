# Portfolio project - GraphQL server 

## Summary

This server provides an option to manage online courses in one place. 
With this API its possible to build some cool dashboards to track one's progress in self development.


Technologies used :

    * NodeJS
    * Express
    * MySQL
    * GraphQL

## Install

Donwload the project and run : 
```
npm install
```
Next step :
* Create MySQL database. 
* Go to project root, create a folder named 'config'.
* Go to config folder 
* Create index.js file with following code filling in your personal details : 

```javascript
module.exports = {
    mysql: {
        host: '##Your host##',
        user: '##username##',
        password: '##password##',
        insecureAuth: true,
        database: '##Your database name##',
        multipleStatements: true
    },
    server: {
        port: '##Your port##',
        endpoint: '/graphql-api',
        playground: '/'
    },
}
```

## Run
In root project folder in consule run command :
```
npm start
```

