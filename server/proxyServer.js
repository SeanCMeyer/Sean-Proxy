const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 1339;
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));

app.listen(PORT, () => `Proxy listening on port: ${PORT}`);
