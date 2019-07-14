const Cart = require("../Cart");
const { honda, mazda } = require("../ProductSample/Car");
let { ironman, batman, superman } = require("../ProductSample/TShirt");
describe("Test Cart Class", () => {
  test("should create 1 instance at a time", () => {
    let cart1 = new Cart();
    let cart2 = new Cart();
    expect(cart1).toEqual(cart2);
  });
  let cart = new Cart();
  beforeEach(() => {
    cart.removeAll();
    return cart;
  });
  test("should add 1 item to the cart", () => {
    cart.add(honda);
    expect(cart.show().length).toEqual(1);
  });
  test("should add 2 item to the cart", () => {
    cart.add(honda);
    cart.add(ironman);
    expect(cart.show().length).toEqual(2);
  });
  test("should increase the quantity when dupplicate item in the cart", () => {
    cart.add(honda);
    cart.add(honda);
    expect(cart.show()[0].quantity).toEqual(2);
  });
  test("should return the right quantity of the product --> 3", () => {
    cart.add(honda);
    cart.add(honda, 2);
    expect(cart.show()[0].quantity).toEqual(3);
  });
  test("should remove the item", () => {
    let productID = "6hhdahd72efasd";
    cart.add(honda);
    cart.add(batman);
    cart.removeItem(productID);
    expect(cart.show().length).toEqual(1);
  });
  test("should remove the quantity of the item", () => {
    let productID = "6hhdahd72efasd";
    cart.add(honda, 3);
    cart.add(batman);
    cart.removeItemWithQuantity(productID, 2);
    expect(cart.show().length).toEqual(2);
    expect(cart.getItem(productID).quantity).toEqual(1);
  });
  test("should get total cost", () => {
    honda.setPrice(10);
    mazda.setPrice(20);
    cart.add(honda);
    cart.add(mazda);
    expect(cart.getTotalCost().total).toEqual(30);
  });
  test("should get total cost after promo", () => {
    honda.setPrice(10);
    honda.setDiscount(20);
    mazda.setPrice(20);
    mazda.setDiscount(20);
    cart.add(honda);
    cart.add(mazda, 1);
    expect(cart.getTotalCost().totalAfterDiscount).toEqual(24);
  });
  test("should get saving after promo", () => {
    honda.setPrice(10);
    honda.setDiscount(20);
    mazda.setPrice(20);
    mazda.setDiscount(20);
    cart.add(honda);
    cart.add(mazda, 1);
    expect(cart.getTotalCost().saving).toEqual(6);
  });
});
