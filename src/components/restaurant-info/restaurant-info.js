import React from 'react';
// import { Text } from 'react-native';
import { CardAppComponent } from '../card/card.component';

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'The Tasty Moose',
    icon = 'some icon',
    photos = [
      'https://weneedfun.com/wp-content/uploads/2015/10/Beautiful-Food-Photos-2.jpg',
    ],
    address = '1234 Any St. Any Town, USA',
    isOpenNow = true,
    rating = '5',
    isClosedTemporarily = true,
  } = restaurant;
  return (
    <>
      <CardAppComponent
        restaurantData={{
          props: {
            name,
            icon,
            photos,
            address,
            isOpenNow,
            rating,
            isClosedTemporarily,
          },
        }}
      />
    </>
  );
};
