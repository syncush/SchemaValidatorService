const server = require('./src/server');

server.listen(server.get('PORT') || process.env.PORT || 3000);
