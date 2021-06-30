import React from 'react';
import {
  StyledListView,
  StyledSafeAreaView,
  StyledSearchbarView,
} from './restaurant.screen.styles';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../../../../components/restaurant-info/restaurant-info';

export const RestaurantsScreen = () => {
  return (
    <>
      <StyledSafeAreaView>
        <StyledSearchbarView>
          <Searchbar />
        </StyledSearchbarView>
        <StyledListView>
          <RestaurantInfo />
        </StyledListView>
      </StyledSafeAreaView>
    </>
  );
};
