class Mobile {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
  discount() {
    let disc = this.price - this.price / 10;
    return disc;
  }
}
const mb = new Mobile("Samsung", 50000);
console.log(mb.brand);
console.log("10% discont with value " + mb.discount());