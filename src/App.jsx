import Products from './Products'
import Cart from './Cart'
import { useState } from 'react'


function App() {
  const [showCart, setShowCart] = useState(false);

  function handleCart() {
    setShowCart(!showCart);
  }
  return (
    <>
    <button className='viewCrt' onClick={handleCart}>{showCart? 'X': 'View Cart'}</button>
    {showCart? <Cart/> : <Products/>}
    </>
  )
}

export default App
