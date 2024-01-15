const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function (req, res) {
    res.json({
        status : 200,
        healthy : true
    });
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
