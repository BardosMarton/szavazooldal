const express = require('express');

const app = express();

app.use(express.static('public'));

/*app.get("/", function(request, response) {
    response.send(index);
});*/

app.use(express.urlencoded());

app.post("/szavazas", function(request, response) {
    console.log(request.body);
    response.redirect('/');
});

app.listen(9000);