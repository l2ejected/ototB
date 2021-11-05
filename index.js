// FileName: index.js
// Import express
let path = require('path');
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
let cors = require('cors');
// Initialize the app
let app = express();

// Import routes
let apiRoutes = require("./api-routes");

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH');
    next();
});

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb+srv://cs3219ototb:FzRbXYZabxuWK3ru@cluster0.djz8x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true});
var db = mongoose.connection;

// Added check for db connection
if(!db)
    console.log("Error connecting db");
else
    console.log("DB connected successfully");

// Set up server port
var port = process.env.PORT || 8080

// app.use(express.static(path.resolve(__dirname, './client/build')));

// Send msg for default URL
app.get('/', (req, res) => res.send('Hello World with Express and Nodemon + mongoDB. This is the backend.'));

// Use Api routes in the App
app.use('/api', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running taskb1 on port " + port);
});

module.exports = app;
