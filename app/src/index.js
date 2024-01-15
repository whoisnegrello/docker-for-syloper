const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", async (req, res) => {
  const apisResponses = {};
  try {
    const nodeServerResponse = await fetch("http://server-node:3000");
    apisResponses["node"] = await nodeServerResponse.json();

    const phpServerResponse = await fetch("http://server-php:80");
    apisResponses["php"] = await phpServerResponse.json();
  } catch (error) {
    console.log(error);
  }

  res.json(apisResponses);
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
