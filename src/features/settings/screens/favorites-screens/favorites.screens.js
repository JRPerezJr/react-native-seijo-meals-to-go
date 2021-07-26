import React, { useContext } from 'react';

import { FavoritesContext } from '../../../../services/favorites/favorites.context';

import { StyledSafeAreaView } from '../../../../components/utilities/safe-area.component';

import { RestaurantInfoCard } from '../../../restaurants/components/restaurant-info-card/restaurant-info-card';
import { RestaurantList } from '../../../restaurants/screens/restaurants-screen/restaurant.screen.styles';

import { TouchableOpacity } from 'react-native';
import { Spacer } from '../../../../components/spacer/spacer.component';

import { FavoritesSafeArea } from './favorites.screen.styles';
import { StyledText } from '../../../../components/typography/text.component';

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <StyledSafeAreaView>
      <RestaurantList
        data={favorites}
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
    </StyledSafeAreaView>
  ) : (
    <FavoritesSafeArea>
      <StyledText variant="label">No favorites yet</StyledText>
    </FavoritesSafeArea>
  );
};
