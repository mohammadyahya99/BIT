const e = require("express");
const { response } = require("express");
const express = require("express");
const { param } = require("jquery");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
const port = 3001;

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];

app.get("/priceCheck/:name", (request, response) => {
  const name = request.params.name;
  const ItemObject = store.find((element) => {
    return element.name === name;
  });
  let itemPrice;
  if (ItemObject) {
    itemPrice = { price: ItemObject.price };
  } else {
    itemPrice = { price: null };
  }
  response.send(itemPrice);
});

app.get("/buy/:name", (request, response) => {
  const name = request.params.name;
  let ItemBought;
  store.forEach((item) => {
    if (item.name == name && item.inventory > 0) {
      item.inventory--;
      ItemBought = item;
    }
  });
  response.send(ItemBought);
});

app.listen(port, function () {
  console.log(`port: ${port}`);
});

app.get("/sale/", function (request, response) {
  const parameter = request.query;
  if (Object.keys(parameter) == "admin" && parameter.admin == "true") {
    store.forEach((item) => {
      if (item.inventory > 10) {
        item.price = item.price / 2;
      }
    });
    response.send(store);
  } else response.send({});
});
