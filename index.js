const express = require("express");
const app = express();

const PORT = process.env.ENV || 8888;
app.listen(PORT);
