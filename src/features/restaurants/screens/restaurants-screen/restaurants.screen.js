import React, { useContext, useState } from 'react';

import { TouchableOpacity } from 'react-native';

import {
  RestaurantList,
  Loading,
  LoadingContainer,
} from './restaurant.screen.styles';

import { RestaurantsContext } from '../../../../services/restaurants/mock/restaurants.context';
import { FavoritesContext } from '../../../../services/favorites/favorites.context';

import { StyledSafeAreaView } from '../../../../components/utilities/safe-area.component';
import { AppSearchBar } from '../../components/search/search.component';
import { FavoritesBar } from '../../../../components/favorites/favorites-bar/favorites-bar.component';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { RestaurantInfoCard } from '../../components/restaurant-info-card/restaurant-info-card';
import { FadeInView } from '../../../../components/animations/fade.animation';

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <StyledSafeAreaView>
        <AppSearchBar
          isFavoritesToggled={isToggled}
          onFavoritesToggle={() => setIsToggled(!isToggled)}
        />
        {isToggled && (
          <FavoritesBar
            favorites={favorites}
            onNavigate={navigation.navigate}
          />
        )}
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
                    <FadeInView>
                      <RestaurantInfoCard restaurant={item} />
                    </FadeInView>
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
