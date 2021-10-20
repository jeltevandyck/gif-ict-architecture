const express = require('express');
const bp = require('body-parser');

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({extended: "false"}));

app.listen(3000, () => console.log('server ready'));

app.get('/api/pictures/:uuid', (req, res) => {
   res.status(200);
   res.send("Success! " + req.params.uuid); 
});

app.post('/api/pictures/:filename/:base64', (req, res) => {
    res.status(200);
    res.send("Success! " + req.params.filename + " " + req.params.base64);
});