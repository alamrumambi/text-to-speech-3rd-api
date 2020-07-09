const express = require('express');

const app = express(), port = 3001;

app.use(express.static('public'));
app.listen(port, () => console.log(`listen on port ${port}`));