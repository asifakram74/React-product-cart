import React, { useState, useEffect } from "react";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);


  const handleChangeAddition = ( index) =>{
    let a = [...cart]
    a[index].quantity += 1
    setCart(a)
    handlePrice();
  }
  
  const handleChangeSubtract = (index) =>{
   
    let a = [...cart]
    a[index].quantity -= 1
    setCart(a)
    handlePrice();
  }
  const handleRemove = (id) => {
    const cartFilter = cart.filter((item) => item.id !== id);
    setCart(cartFilter);
    handlePrice();
  };



  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      return (
        ans += item.price*item.quantity
      )
    })
    setPrice(ans);
  };



  useEffect(() => {
    handlePrice();
    
  },[price]);

  return (

    <>
      <article className="articles">
        {cart.map((item , index) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.thumbnail} alt="" />
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={() => handleChangeAddition(index)}>+</button>
              <button>{item.quantity}</button>
              <button onClick={() => handleChangeSubtract(index)}>-</button>
            </div>
            <div>
              <span>{item.price*item.quantity}</span>
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
