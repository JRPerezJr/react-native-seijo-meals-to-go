import React, { useContext } from 'react';

import { FavoriteButton, AntDesignIcon } from './favorites.styles';

import { FavoritesContext } from '../../services/favorites/favorites.content';

export const Favorite = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  // console.log(favorites.length);
  // console.log(restaurant);

  const isFavorite = favorites.find(r => r.placeId === restaurant.placeId);

  return (
    <FavoriteButton
      onPress={() =>
        !isFavorite
          ? addToFavorites(restaurant)
          : removeFromFavorites(restaurant)
      }
    >
      <AntDesignIcon
        name={isFavorite ? 'heart' : 'hearto'}
        color={isFavorite ? 'red' : 'white'}
      />
    </FavoriteButton>
  );
};
