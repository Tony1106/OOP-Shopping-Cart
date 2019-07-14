const ProductFactory = require("../ProductFactory");

const samples = {
  superman: {
    id: "aasdwq3432da",
    size: "XS",
    color: "white",
    height: 30,
    price: 20,
    title: "Hot T Shirt for people",
    productType: "TShirt"
  },
  batman: {
    id: "asdq3eqwdad",
    size: "M",
    color: "black",
    height: 30,
    price: 20,
    title: "Hot T Shirt for batman",
    productType: "TShirt"
  },
  ironman: {
    id: "asd23dadad",
    size: "M",
    color: "metal",
    height: 40,
    price: 25,
    title: "Hot T Shirt for Iron Man",
    productType: "TShirt"
  }
};
//Create product factory insctance
let productFactory = new ProductFactory();

//Create product instance base on option
let superman = productFactory.create(samples.superman);
superman.setPrice(3000);
superman.setDescription("Buy today get 50% off");
let ironman = productFactory.create(samples.ironman);
let batman = productFactory.create(samples.batman);

module.exports = {
  superman,
  batman,
  ironman
};
