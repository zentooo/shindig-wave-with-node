var http = require("http"),
    io = require("socket.io"),
    util = require("util"),
    server = http.createServer();

server.listen(9000);
var socket = io.listen(server);

socket.on('connection', function(client) {

  client.on("connect", function() {
    util.puts("connected");
  });

  client.on("message", function(data) {
    client.broadcast(data);
  });

  client.on("disconnect", function() {
    util.puts("disconnected");
  });

  client.send( { type: "gadget_state", content: { positions: [] } } );
});
