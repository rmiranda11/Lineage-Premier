var path = require("path");
let express = require('express');
var serveStatic = require('serve-static');

let app = express();


module.exports = function(app) {
    
    app.use(express.static('public'));


    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname+ "./../public/home.html"))
    });

    app.get("/about", function(req,res){
        res.sendFile(path.join(__dirname + "./../public/about.html"))
    });

    app.get("/contact", function(req,res){
        res.sendFile(path.join(__dirname + "./../public/contact.html"))
    });

    app.get("/admin", function(req,res){
        res.sendFile(path.join(__dirname + "./../public/admin.html"))
    });

    // app.listen(PORT, function() {
    //   console.log("App listening on PORT " + PORT);
    // });

}