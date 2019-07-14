//Init th instance
let instance = null;

//Only accept 1 instance create at a time
module.exports = class Cart {
  constructor() {
    if (Cart.instance) {
      return Cart.instance;
    }
    Cart.instance = this;
    this.items = [];
    return this;
  }
  add(product, quantity = 1) {
    //Discount is percent %. ex: 25%
    let addItem = { ...product, quantity };
    let isProductExists = false;
    if (this.items.length === 0) return this.items.push(addItem);

    this.items.map((item, index) => {
      if (item.attributes.id === product.attributes.id) {
        quantity += item.quantity;
        this.items[index].quantity = quantity;
        isProductExists = true;
      }
    });
    if (!isProductExists) this.items.push(addItem);
    return this.items;
  }
  show() {
    return this.items;
  }
  removeItemWithQuantity(id, quantity) {
    if (!quantity) {
      this.removeItem(id);
    } else {
      this.items = this.items.map(item => {
        if (item.attributes.id === id) {
          if (quantity >= item.quantity) {
            this.removeItem(id);
          } else {
            item.quantity -= quantity;
          }
        }
        return item;
      });
    }
    return this.items;
  }

  removeItem(id) {
    this.items = this.items.filter(item => item.attributes.id != id);
    return this.items;
  }
  getItem(id) {
    return this.items.filter(item => item.attributes.id === id)[0];
  }
  removeAll() {
    this.items = [];
  }
  getTotalCost() {
    let total = 0;
    let totalAfterDiscount = 0;
    let saving = 0;
    this.items.map(item => {
      let itemTotalCost = item.quantity * item.attributes.price;
      let itemTotalSave =
        (item.quantity * item.attributes.price * item.discount) / 100;
      total += itemTotalCost;
      if (item.discount === 1) {
        totalAfterDiscount += itemTotalCost;
      } else {
        totalAfterDiscount += itemTotalCost - itemTotalSave;
        saving += itemTotalSave;
      }
    });

    return { total, totalAfterDiscount, saving };
  }
};
