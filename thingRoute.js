const express = require('express');
const thingRouter = express.Router();

thingRouter.get('/', function (req, res) {
    res.send('GET route on thing.' + process.env.DB_URL);
});
thingRouter.post('/', function (req, res) {
    res.send('POST route on thing.');
});

//export this router to use in our index.js
module.exports = thingRouter;