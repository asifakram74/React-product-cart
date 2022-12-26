import {  useState } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Website from './Components/Website/Website';
import Cart from './Components/Cart/Cart';



const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([])
  


  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) 
    return;
    item.quantity = 1;
    setCart([...cart, item]);
  };

  const handleChange = (item) =>{
    // setCart(item.[index].quantity)
  }

  
  return (
    <>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Website handleClick={handleClick}  />
      ) : (
        <Cart cart={cart} setCart={setCart} 
         />
      )}
    </>
  )
}

export default App