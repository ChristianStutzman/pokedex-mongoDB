const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router.js');

app.use(bodyParser.json());
app.use(express.static('./client/dist'));
app.use('/api', router);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started! Listening on http://localhost:${port}`);
});