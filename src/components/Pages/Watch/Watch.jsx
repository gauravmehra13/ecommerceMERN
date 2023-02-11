import React, { useState, useEffect } from 'react';


function ProductCard({ product }) {


  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h5>{product.name}</h5>
      Price:<span>{product.newPrice}</span>
      <Cart product={product} />
    </div>
  );
}

function CartPage() {
  const [cart, setCart] = useState([]);

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.name} ({product.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
}

function Accessories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://ecommerce-backend-brm6-egmwpw3i8-gauravmehra13.vercel.app/watch')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      <h1 style={{backgroundColor:"black",color:"white",fontFamily:"cursive"}}>Galaxy Watch</h1>
      <div className="product-list">
        {data.map(product => (
          <>
            <ProductCard key={product.id} product={product} />
          </>
        ))}
      </div>
      <CartPage />
    </div>
  );
}

function Cart({ product }) {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = (type) => {
    if (type === "add") {
      setQuantity(quantity + 1)
    }
    else {
      setQuantity(quantity - 1)
    }

  };
  return (
    <>
      {quantity === 0 ? (<button onClick={() => handleAddToCart('add')}>Add to Cart ({quantity})</button>) : (
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%"
        }}>
          <button onClick={() => handleAddToCart('minus')}>-</button> {quantity} <button onClick={() => handleAddToCart('add')}>+</button></div>
      )}
    </>
  )
}

export default Accessories;
