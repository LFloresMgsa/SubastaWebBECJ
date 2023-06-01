
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");


const catalogsubastaRoutes = require("./routes/evento.routes.js");
const cors=require("cors");

// settings
const app = express();
const PORT = 5001;
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

app.set("port", PORT);

// Middlewares

app.use(cors(corsOptions)); // Use this after the variable declaration
app.use(bodyParser.json());

// Routes

app.use("/api/evento", catalogsubastaRoutes );


// pagina inicial

app.get("/", function (require, response) {
    response.send("<h3>Pagina inicial de MYSQL</h3>");
});

// pagina secundarias

app.get("/about", function (require, response) {
    response.sendFile("about.html",{
        root: path.join(__dirname, "./views")
    });
});

app.get("/contact", function (require, response) {
    response.sendFile("contact.html",{
        root: path.join(__dirname, "./views")
    });
});

// init server
app.listen(PORT, function () {
    console.log("server running port 5000");
});