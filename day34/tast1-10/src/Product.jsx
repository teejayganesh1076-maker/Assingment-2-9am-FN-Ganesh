function Product({name,price}){
    return(
        <div className="product">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>

    )
}
function ProductList() {
  return (
    <div>
      <Product name="Laptop" price={1200} />
      <Product name="Phone" price={800} />
    </div>
  );
}