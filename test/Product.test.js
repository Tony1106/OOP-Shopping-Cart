const ProductFactory = require("../ProductFactory");

describe("test the product factory", () => {
  test("should create a car", () => {
    let attributes = {
      id: "6hhdahd72efasd",
      brand: "honda",
      type: "sudan",
      color: "yellow",
      price: 2000,
      title: "Brand new car 2018",
      productType: "Car"
    };
    let product = new ProductFactory();
    let car1 = product.create(attributes);
    expect(car1.type).toEqual("Car");
    expect(car1.attributes.brand).toEqual("honda");
  });
  test("should create a T-shirt", () => {
    let attributes = {
      id: "aasdwq3432da",
      size: "XS",
      color: "white",
      height: 30,
      price: 20,
      title: "Hot T Shirt for people",
      productType: "TShirt"
    };
    let product = new ProductFactory();
    let TShirt1 = product.create(attributes);
    expect(TShirt1.type).toEqual("T Shirt");
    expect(TShirt1.attributes.height).toEqual(30);
  });
});
