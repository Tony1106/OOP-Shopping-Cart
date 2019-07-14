const ProductFactory = require("../ProductFactory");

const samples = {
  honda: {
    id: "6hhdahd72efasd",
    brand: "honda",
    type: "sudan",
    color: "yellow",
    price: 2000,
    title: "Brand new car 2018",
    productType: "Car"
  },
  mazda: {
    id: "324adasdasdgv",
    brand: "mazda",
    type: "hatch",
    color: "red",
    price: 5000,
    title: "Car for sell",
    productType: "Car"
  },
  mecs: {
    id: "asdasq3eaddsd",
    brand: "mecs",
    type: "sudan",
    color: " black",
    price: 10000,
    title: "Luxury car 2019",
    productType: "Car"
  },
  holden: {
    id: "dsd32adasd32",
    brand: "holden",
    type: "sudan",
    color: "green",
    price: 4000,
    title: "Old car for sell",
    productType: "Car"
  }
};
let productFactory = new ProductFactory();
let honda = productFactory.create(samples.honda);
honda.setPrice(3000);
honda.setDescription("Buy today get 50% off");
let mazda = productFactory.create(samples.mazda);
let mecs = productFactory.create(samples.mecs);
let holden = productFactory.create(samples.holden);
module.exports = {
  honda,
  mazda,
  mecs,
  holden
};
