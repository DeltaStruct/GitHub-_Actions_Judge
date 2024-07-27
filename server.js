var server = require("ws").server;
var wss = new server({port:5000});

wss.on("connection", (ws) => {
  wss.on("message", (msg) => {
    ws.send("Judge Status: "+"TEST STATUS");
  });
});
