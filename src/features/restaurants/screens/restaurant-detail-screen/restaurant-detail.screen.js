import React, { useState } from 'react';

import { ScrollView } from 'react-native';

import { List } from 'react-native-paper';

import { StyledSafeAreaView } from '../../../../components/utilities/safe-area.component';
import { RestaurantInfoCard } from '../../../../components/restaurant-info-card/restaurant-info-card';

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
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
          <List.Item title="Breakfast Sandwich" />
          <List.Item title="Breakfast Burrito" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={props => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger and Fries" />
          <List.Item title="Fish and Chips" />
          <List.Item title="Chicken Sandwich" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={props => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Angus Steak" />
          <List.Item title="Chicken Curry Rice" />
          <List.Item title="Smoked Salmon" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={props => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coke" />
          <List.Item title="Vodka" />
          <List.Item title="Sake" />
        </List.Accordion>
      </ScrollView>
    </StyledSafeAreaView>
  );
};
