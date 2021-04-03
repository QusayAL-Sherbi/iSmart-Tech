let StaticServer = require('static-server');
let server = new StaticServer({
  rootPath: './dist/',
  port: 8000
});

server.start(() => console.log('Server Started At Port ', server.port));