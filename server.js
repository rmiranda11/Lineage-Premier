let express = require('express');
let bodyParser = require("body-parser");
let path = require("path");
var mysql = require("mysql");
var http = require("http");
var fs = require("fs");
var serveStatic = require('serve-static');



let app = express();
let PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));




require("./routes/html-routes")(app);

    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
