var WebSocket = require("ws");
var wss = new WebSocket.Server({port:5000});
const exec = require("child_process").spawnSync;

wss.on("connection", (ws) => {
  wss.on("message", (msg) => {
    var submission = JSON.parse(msg);
    var lang = submission.lang;
    var code = submission.code;
    var ret = {
      "judge_status": "WJ",
      "lang": "",
      "code": "",
      "compile_output": "",
      "exec_time": "0"
    };
    ret.lang = lang;
    ret.code = code;
    if (lang=="C++17"){
      var res = exec("g++ -std=gnu++17 -Wall -Wextra -",{
        input: code,
        timeout: 10000
      });
    }
    ws.send("Judge Status: "+"TEST STATUS");
  });
});
