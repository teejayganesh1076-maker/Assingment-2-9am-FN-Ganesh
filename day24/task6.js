class Product{
constructor (name,price){
    this.name=name;
    this.price=price;
}
discountedPrice(){
      let discount = (this.price * 10) / 100;
    let finalPrice = this.price - discount;
    return `${this.name} :it is  orignial price :${this.price} After 10% discount${finalPrice}`
}
}
const pro=new Product("ganesh",20000);
console.log(pro.discountedPrice())