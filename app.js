const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

// Endpoints
app.use("/api", require("./api/users").router);

app.listen(port, () => {
    console.log("Listening on port: " + port);
});
