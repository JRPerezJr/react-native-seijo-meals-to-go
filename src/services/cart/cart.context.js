import React, { createContext, useState, useEffect, useContext } from 'react';

import { AuthenticationContext } from '../authentication/authentication.context';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (!cart.length) {
      setSum(0);
      return;
    }
    const newSum = cart.reduce((acc, { price }) => {
      return (acc += price);
    }, 0);
    setSum(newSum);
  }, [cart]);

  const add = (item, rest) => {
    if (!restaurant || restaurant.placeId !== rest.placeId) {
      setRestaurant(rest);
      setCart([item]);
    } else {
      setCart([...cart, item]);
    }
  };

  const clearCart = () => {
    setCart([]);
    setRestaurant(null);
  };
  return (
    <CartContext.Provider
      value={{
        addToCart: add,
        clearCart: clearCart,
        restaurant,
        cart,
        sum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
