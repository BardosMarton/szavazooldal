const express = require('express');
const mongoose = require('mongoose');
const config = require('./config.json');

mongoose.connect(config.databaseurl);

const app = express();

app.use(express.static('public'));

/*app.get("/", function(request, response) {
    response.send(index);
});*/

const schema = new mongoose.Schema({
    nev: String,
    szavazatok: Number
});

const model = mongoose.model('Opciok', schema, 'Opciok');

app.use(express.urlencoded());

app.post("/szavazas", function(request, response) {
    
    console.log(request.body);

    model.findOne({nev: request.body.osszeg}, function(err, doc) {
        if (doc) {
            console.log(request.body.osszeg + ' már létezik');

            doc.szavazatok++;
            doc.save();
        }
        else {
            console.log(request.body.osszeg + ' még nem létezik');
            new model({
                nev: request.body.osszeg,
                szavazatok: 1
            }).save();
        }
    });
    
    response.redirect('/');
});

app.listen(9000);