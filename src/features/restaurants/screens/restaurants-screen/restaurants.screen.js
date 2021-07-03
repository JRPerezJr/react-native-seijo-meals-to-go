import React, { useContext } from 'react';

import { Searchbar } from 'react-native-paper';

import {
  StyledSearchbarView,
  RestaurantList,
  Loading,
  LoadingContainer,
} from './restaurant.screen.styles';

import { RestaurantInfoCard } from '../../../../components/restaurant-info-card/restaurant-info-card';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { StyledSafeAreaView } from '../../../../components/utilities/safe-area.component';
import { RestaurantsContext } from '../../../../services/restaurants/mock/restaurants.context';
import { AppSearchBar } from '../../components/search/search.component';

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <>
      <StyledSafeAreaView>
        <AppSearchBar />
        {isLoading ? (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        ) : (
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <>
                  <Spacer position="bottom" size="large">
                    <RestaurantInfoCard restaurant={item} />
                  </Spacer>
                </>
              );
            }}
            keyExtractor={item => item.name}
          />
        )}
      </StyledSafeAreaView>
    </>
  );
};
