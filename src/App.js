import {useState } from 'react';

import CartProvider from './Store/CartProvider';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);

  const showCartHandler = () => {
    setCartVisibility(true);
  };

  const hideCartHandler = () => {
    setCartVisibility(false);
  };

  return (
    <CartProvider>
      {cartVisibility && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
