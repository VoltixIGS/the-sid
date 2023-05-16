const express = require("express");
const app = express();

let broadcaster;
const port = 3000;

//const http = require("http");
//const server = http.createServer(app);
const fs = require('fs')
const http = require('http')

const server = http.createServer(app)

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + '/static', { dotfiles: 'allow' }))

server.listen(port, () => console.log(`Server is running on port ${port}`));