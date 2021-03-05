const express = require('express'); 

const app = express();

app.get('/projects', (request, response) => {
    return  response.json({ message : "Hey guys, this is how that you start a basic backend haha!"});
} );

app.listen(3333, () => {

    console.log ('Back-end started 😎');

});

