// import json server
const jsonserver = require('json-server');
// create a server for media app
const mediaAppServer = jsonserver.create();
// setup path for json file
const router = jsonserver.router('db.json')
// return middleware usse by json server
const middleware = jsonserver.defaults()
// setup pport number
const port = process.env.port || 4000
// use middleware in app
mediaAppServer.use(middleware)
mediaAppServer.use(router)
// 
mediaAppServer.listen(port,()=>{
    console.log('listing on port ' +port);
})

