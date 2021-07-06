import React, { useState, createContext, useEffect } from 'react';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const add = restaurant => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = restaurant => {
    const newFavorites = favorites.filter(x => x.placId !== restaurant.placId);

    setFavorites(newFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
