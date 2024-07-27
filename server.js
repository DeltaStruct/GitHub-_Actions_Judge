var server = require("ws").server;
var wss = new server({port:5000});
const exec = require("child_process").exec;

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
      exec("g++")
    }
    ws.send("Judge Status: "+"TEST STATUS");
  });
});
