const express = require("express");
const thingRouter = require("./thingRoute");
const bodyParser = require("body-parser");
let mongoose = require('mongoose');
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Define Schema
const UserModel = mongoose.model('User', new mongoose.Schema({
    email: String,
    userid: Number,
    username: String
}))


app.get("/", function (req, res) {
    UserModel.find()
        .then(doc => {
            res.send(doc);
        })
        .catch(err => {
            console.error(err)
        })
});

// app.get('/:id', function (req, res) {
//     res.send('The id you specified is ' + req.params.id);
// });


app.post("/", function (req, res) {
    let user = new UserModel({
        email: 'ADA.LOVELACE@GMAIL.COM',
        userid: 2,
        username: "ADA-WONG"
    })
    user.save()
        .then(doc => {
            res.send(doc);
        })
        .catch(err => {
            console.error(err)
        })
});

app.use("/thing", thingRouter);

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
