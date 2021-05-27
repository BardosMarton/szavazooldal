const express = require('express');

const app = express();

app.use(express.static('public'));

/*app.get("/", function(request, response) {
    response.send(index);
});*/

app.listen(9000);