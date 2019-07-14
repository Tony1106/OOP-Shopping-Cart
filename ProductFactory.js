//Place to create product base on product type
class ProductFactory {
  create(options) {
    let { productType } = options;

    //Switch case return a new product instance base on product type
    switch (productType) {
      case "TShirt":
        return new TShirt(options);
        break;
      case "Car":
        return new Car(options);
        break;

      default:
        throw Error("There is no type of product is match");
        break;
    }
  }
}

//Create behavior for product object
class Product {
  constructor() {
    this.attributes = {};
  }
  show() {
    console.log(this.attributes);
  }
  setPrice(newPrice) {
    this.attributes.price = newPrice;
    return this.attributes;
  }
  setDescription(newDescription) {
    this.attributes.description = newDescription;
    return this.attributes;
  }
  setDiscount(discount) {
    this.discount = discount;
    return this;
  }
}

//Define specific product class
class TShirt extends Product {
  constructor(options) {
    super();
    this.type = "T Shirt";
    this.discount = 1;
    let { id, size, color, height, price, title } = options;
    this.attributes = { id, size, color, height, price, title };
  }
}

class Car extends Product {
  constructor(options) {
    super();
    this.type = "Car";
    this.discount = 1;
    let { id, brand, type, color, price, title } = options;
    this.attributes = { id, brand, type, color, price, title };
  }
}
module.exports = ProductFactory;
