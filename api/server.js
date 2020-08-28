const express = require('express');
const app = express();
const routes = require('./routes');
require('./database');

app.use(express.json());
app.use(routes);
app.listen(3000,() => console.log(`API running on port 3000 ...`));