const http = require("http");

http
  .createServer(function(request, response) {
    console.log("request received and understood");
    response.end("si, donde es mi plata!!!!!", "utf-8");
  })
  .listen(3000);
console.log("server started");