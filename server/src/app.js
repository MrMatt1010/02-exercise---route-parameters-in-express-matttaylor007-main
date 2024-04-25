const express = require("express");
const cors = require("cors");
const app = express();
const properties = require("./properties.json");
const getPropertyById = require("./getPropertyById");

app.use(cors());
app.use(express.json());

app.get("/properties", (request, response) => {
  return response.status(200).send(properties);
});

app.get("/properties/:id", (request, response) => {
  const { id } = request.params;
  const property = getPropertyById(properties, id);

  if (property === undefined) {
    return response.status(404).send({ message: "Cannot find property" });
  }

  return response.status(200).send(property);
});

module.exports = app;
