let Cart = require("./Cart");
let cart = new Cart();

let { honda, mazda, mecs, holden } = require("./ProductSample/Car");
let { ironman, batman, superman } = require("./ProductSample/TShirt");
cart.add(honda, 2, 25);
cart.add(batman, 2);

cart.add(ironman);
console.log(cart.add(ironman).length);

cart.add(ironman);
cart.add(ironman, 2);
cart.add(batman);
cart.add(holden, 5);
// cart.show();
cart.removeItem("dsd32adasd32", 2);
// cart.show();
cart.getTotalCost();
