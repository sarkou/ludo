const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

//demarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
