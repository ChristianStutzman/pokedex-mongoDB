const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('./client/dist'));

const port = 3000;
app.listen(port, () => {
  console.log(`Server started! Listening on http://localhost:${port}`);
});