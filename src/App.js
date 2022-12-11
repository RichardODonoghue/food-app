import { useState } from 'react';

import LogRocket from 'logrocket';

import CartProvider from './Store/CartProvider';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  LogRocket.init('3j5gn7/reactmeals');
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
