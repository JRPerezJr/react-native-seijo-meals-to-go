import React, { useState, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const saveFavorites = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@favorites', jsonValue);
    } catch (e) {
      console.log('There was an error saving favorites');
    }
  };

  const loadFavorites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favorites');
      return jsonValue != null ? setFavorites(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log('There was an error fetching favorites');
    }
  };

  const add = restaurant => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = restaurant => {
    const newFavorites = favorites.filter(
      x => x.placeId !== restaurant.placeId
    );

    setFavorites(newFavorites);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

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
