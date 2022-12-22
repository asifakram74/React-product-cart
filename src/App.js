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
    setCart([...cart, item]);
  };

  const handleChange = (item, index) => {
    const a = cart.indexOf(item);
    const b = cart;
    b[a].amount += index;

    if (b[a].amount === 0) b[a].amount = 1;
    setCart([...b]);
  };
 
  
  return (
    <>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Website handleClick={handleClick}  />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </>
  )
}

export default App