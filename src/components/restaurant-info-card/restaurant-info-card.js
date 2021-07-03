import React from 'react';
import { CardAppComponent } from '../card/card.component';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'The Tasty Moose',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://weneedfun.com/wp-content/uploads/2015/10/Beautiful-Food-Photos-2.jpg',
    ],
    address = '1234 Any St. Any Town, USA',
    isOpenNow = true,
    rating = '5',
    isClosedTemporarily = true,
    placeId,
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
            placeId,
          },
        }}
      />
    </>
  );
};
