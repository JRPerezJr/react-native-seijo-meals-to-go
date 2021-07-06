import React, { useContext } from 'react';
import { FavoritesContext } from '../../../../services/favorites/favorites.content';
import { AntDesignIcon, FavoriteButton } from './favorites.styles';

export const Favorite = () => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  return (
    <FavoriteButton>
      <AntDesignIcon />
    </FavoriteButton>
  );
};
