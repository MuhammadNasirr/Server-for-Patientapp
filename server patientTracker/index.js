const http = require('http');
const app = require('./app');

// Server setup
const port = process.env.PORT || 3050;
const server = http.createServer(app);

server.listen(port, () => {
  console.log('Running on port', port);
});