const proxyRouter = require("express").Router();
const axios = require("axios");

proxyRouter.get("/", async (req, res) => {
  const url = "https://api.schiphol.nl/public-flights/flights"
  const response = await axios.get(url, {
    headers: {
      Accept: "application/json",
      app_id: "9f7e1173",
      app_key: "8216a1026e6600c0b104e66cbbce6ac7",
      ResourceVersion: "v4",
    },
    params: req.query
  })

  return res.json(response.data)
});

module.exports = proxyRouter
