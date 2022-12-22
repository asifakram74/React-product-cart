import React, { useState, useEffect } from "react";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(1)

  const handleRemove = (id) => {
    const cartFilter = cart.filter((item) => item.id !== id);
    setCart(cartFilter);
    handlePrice();
  };

  console.log("Price",price);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
        return(
            ans += item.price   
            )
        })
        setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (

   <>
     <article className="articles">
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.thumbnail} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Total -{price}</span>
      </div>
    </article>
   </>
  );
};

export default Cart;
