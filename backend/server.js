let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dbConfig = require('./database/db');

// connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
        console.log('Database successfully connected');
    },
    error => {
        console.log('Database could not be connected: ' + error);
    }
);

// setting up passport with express js
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

// routes
const blogPostRoute = require('./routes/blog_post_route');
app.use('/blogpost', blogPostRoute);

// create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port);
});

// find 404 and hand over to error handler
app.use((req, res, next) => {
    res.status(404);
    res.send('404: File Not Found');
});

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});