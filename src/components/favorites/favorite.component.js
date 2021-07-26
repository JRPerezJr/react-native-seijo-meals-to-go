import React, { useContext } from 'react';

import { FavoriteButton, AntDesignIcon } from './favorites.styles';

import { FavoritesContext } from '../../services/favorites/favorites.context';

export const Favorite = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

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
