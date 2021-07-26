import React, { useContext, useState } from 'react';

import { TouchableOpacity } from 'react-native';

import {
  RestaurantList,
  Loading,
  LoadingContainer,
  ErrorContainer,
} from './restaurant.screen.styles';

import { RestaurantsContext } from '../../../../services/restaurants/mock/restaurants.context';
import { FavoritesContext } from '../../../../services/favorites/favorites.context';

import { StyledSafeAreaView } from '../../../../components/utilities/safe-area.component';
import { AppSearchBar } from '../../components/search/search.component';
import { FavoritesBar } from '../../../../components/favorites/favorites-bar/favorites-bar.component';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { RestaurantInfoCard } from '../../components/restaurant-info-card/restaurant-info-card';
import { FadeInView } from '../../../../components/animations/fade.animation';
import { LocationContext } from '../../../../services/location/location.context';
import { StyledText } from '../../../../components/typography/text.component';

export const RestaurantsScreen = ({ navigation }) => {
  const { error: locationError } = useContext(LocationContext);
  const { isLoading, restaurants, error } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  const hasError = !!error || !!locationError;

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
        {isLoading && (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        )}
        {hasError && (
          <Spacer position="left" size="large">
            <ErrorContainer>
              <StyledText variant="error">
                Something went wrong retrieving the data
              </StyledText>
            </ErrorContainer>
          </Spacer>
        )}
        {!hasError && (
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
