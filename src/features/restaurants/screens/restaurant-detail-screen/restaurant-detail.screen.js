import React, { useState, useContext } from 'react';

import { ScrollView } from 'react-native';

import { Divider, List } from 'react-native-paper';

import { Spacer } from '../../../../components/spacer/spacer.component';
import { StyledSafeAreaView } from '../../../../components/utilities/safe-area.component';
import { colors } from '../../../../infrastructure/theme/colors';
import { CartContext } from '../../../../services/cart/cart.context';
import { OrderButton } from '../../components/order-button/order-button.styles';
import { RestaurantInfoCard } from '../../components/restaurant-info-card/restaurant-info-card';

export const RestaurantDetailScreen = ({ navigation, route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;

  const { addToCart } = useContext(CartContext);

  return (
    <StyledSafeAreaView>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={props => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <Divider />
          <List.Item title="Breakfast Sandwich" />
          <Divider />
          <List.Item title="Breakfast Burrito" />
          <Divider />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Lunch"
          left={props => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger and Fries" />
          <Divider />
          <List.Item title="Fish and Chips" />
          <Divider />
          <List.Item title="Chicken Sandwich" />
          <Divider />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Dinner"
          left={props => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Angus Steak" />
          <Divider />
          <List.Item title="Chicken Curry Rice" />
          <Divider />
          <List.Item title="Smoked Salmon" />
          <Divider />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Drinks"
          left={props => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coke" />
          <Divider />
          <List.Item title="Vodka" />
          <Divider />
          <List.Item title="Sake" />
          <Divider />
        </List.Accordion>
      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton
          onPress={() => {
            addToCart({ item: 'Special', price: 1299 }, restaurant);
            navigation.navigate('Checkout');
          }}
        >
          Order Special Only 12.99!
        </OrderButton>
      </Spacer>
    </StyledSafeAreaView>
  );
};
