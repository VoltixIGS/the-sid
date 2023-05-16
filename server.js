const express = require("express");
const app = express();

let broadcaster;
const port = 3000;

//const http = require("http");
//const server = http.createServer(app);
const fs = require('fs')
const http = require('http')

const server = http.createServer(app)


var publicdir = __dirname + '/public';

app.use(function(req, res, next) {
  if (req.path.indexOf('.') === -1) {
    var file = publicdir + req.path + '.html';
    fs.exists(file, function(exists) {
      if (exists)
        req.url += '.html';
      next();
    });
  }
  else
    next();
});
app.use(express.static(publicdir));

//app.use(express.static(__dirname + "/public"));
//app.use(express.static(__dirname + "/public"), {extensions:['html']})
app.use(express.static(__dirname + '/static', { dotfiles: 'allow' }))

server.listen(port, () => console.log(`Server is running on port ${port}`));