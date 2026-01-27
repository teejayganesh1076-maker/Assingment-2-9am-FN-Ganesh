class Product{
constructor (name,price){
    this.name=name;
    this.price=price;
}
discountedPrice(){
 
    return `${this.name} :it is  orignial price :${this.price}`
}
}
class DigitalProduct extends Product{
constructor(name,price,laptop,brand){
    super(name,price)
    this.laptop=laptop;
    this.brand=brand;
}
discountedPrice(){
      let discount = (this.price * 10) / 100;
    let finalPrice = this.price - discount;
    console.log( `${this.name} :it is  orignial price :${this.price} Laptop type : ${this.laptop}, Brand : ${this.brand}, After 10% discount : ${finalPrice}`)
}

}
const dig=new DigitalProduct("Ganesh",20000,"Touch laptop","lenovo");
dig.discountedPrice();