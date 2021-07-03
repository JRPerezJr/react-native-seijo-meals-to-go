import React, { useContext } from 'react';

import { TouchableOpacity } from 'react-native';

import {
  RestaurantList,
  Loading,
  LoadingContainer,
} from './restaurant.screen.styles';

import { RestaurantsContext } from '../../../../services/restaurants/mock/restaurants.context';

import { StyledSafeAreaView } from '../../../../components/utilities/safe-area.component';
import { AppSearchBar } from '../../components/search/search.component';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { RestaurantInfoCard } from '../../../../components/restaurant-info-card/restaurant-info-card';

export const RestaurantsScreen = ({ navigation }) => {
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
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('RestaurantDetail', {
                      restaurant: item,
                    })
                  }
                >
                  <Spacer position="bottom" size="large">
                    <RestaurantInfoCard restaurant={item} />
                  </Spacer>
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.name}
          />
        )}
      </StyledSafeAreaView>
    </>
  );
};
