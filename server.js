const express = require('express');

const mongodb = require('./data/database');
const bodyParser = require('body-parser')
const app = express();

const port = process.env.PORT || 8080;

// Middleware that allows use of form data in requests
app.use(bodyParser.json())
    .use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {console.log(`Database is listening and node is running on port ${port}`)});
    }
})
