var express = require("express");
var app = express();

var path = require("path");

var HTTP_PORT = process.env.PORT || 8085;

app.use(express.static(path.resolve(__dirname + '/dist')));

app.use((req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(HTTP_PORT, function() {
    console.log("Server Listening on Port: " + HTTP_PORT);
})
