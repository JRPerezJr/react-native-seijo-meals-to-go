import React from 'react';

import { Searchbar } from 'react-native-paper';

import {
  StyledSearchbarView,
  RestaurantList,
} from './restaurant.screen.styles';

import { RestaurantInfoCard } from '../../../../components/restaurant-info-card/restaurant-info-card';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { StyledSafeAreaView } from '../../../../components/utilities/safe-area.component';

export const RestaurantsScreen = () => {
  return (
    <>
      <StyledSafeAreaView>
        <StyledSearchbarView>
          <Searchbar />
        </StyledSearchbarView>
        <RestaurantList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
            { name: 9 },
            { name: 10 },
            { name: 11 },
            { name: 12 },
            { name: 13 },
            { name: 14 },
          ]}
          renderItem={() => (
            <>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard />
              </Spacer>
            </>
          )}
          keyExtractor={item => item.name}
        />
      </StyledSafeAreaView>
    </>
  );
};
