const express = require('express');
const app = express();
const port = process.env.PORT || 3080;
const results = [];

app.get('/', (req,res) => {
    res.json(results);
});

app.listen(port, () => {
    console.log(`API server listening on the port::${port}`);
});