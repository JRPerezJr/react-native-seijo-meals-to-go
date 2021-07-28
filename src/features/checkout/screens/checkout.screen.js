import React, { useContext, useState } from 'react';

import { CartContext } from '../../../services/cart/cart.context';

import { StyledSafeAreaView } from '../../../components/utilities/safe-area.component';
import { CreditCardInput } from '../components/credit-card.component';
import { ScrollView } from 'react-native';
import {
  AddressInput1,
  AddressInput2,
  CartIcon,
  CartIconContainer,
  CityInput,
  ClearButton,
  CountryInput,
  NameInput,
  PayButton,
  StateInput,
  ZipCodeInput,
} from '../components/checkout.styles';
import { StyledText } from '../../../components/typography/text.component';
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card/restaurant-info-card';
import { Spacer } from '../../../components/spacer/spacer.component';
import { List } from 'react-native-paper';

export const CheckoutScreen = () => {
  const { cart, restaurant, clearCart, sum } = useContext(CartContext);

  const [name, setName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');

  if (!cart.length || !restaurant) {
    return (
      <StyledSafeAreaView>
        <CartIconContainer>
          <CartIcon />
          <StyledText>Your cart is empty!</StyledText>
        </CartIconContainer>
      </StyledSafeAreaView>
    );
  }
  return (
    <StyledSafeAreaView>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <StyledText>Your Order</StyledText>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }) => {
              return (
                <List.Item key={item} title={`${item} - $${price / 100}`} />
              );
            })}
          </List.Section>
          <StyledText>Total: ${sum / 100}</StyledText>
        </Spacer>
        <NameInput value={name} onChangeText={txt => setName(txt)} />
        <AddressInput1
          value={address1}
          onChangeText={txt => setAddress1(txt)}
        />
        <AddressInput2
          value={address2}
          onChangeText={txt => setAddress2(txt)}
        />
        <CityInput value={city} onChangeText={txt => setCity(txt)} />
        <StateInput value={state} onChangeText={txt => setState(txt)} />
        <ZipCodeInput value={zipCode} onChangeText={txt => setZipCode(txt)} />
        <CountryInput value={country} onChangeText={txt => setCountry(txt)} />
        <Spacer position="top" size="large">
          {name.length > 0 &&
            address1.length > 0 &&
            city.length > 0 &&
            state.length > 0 &&
            zipCode.length > 0 &&
            country.length > 0 && (
              <CreditCardInput
                name={name}
                address1={address1}
                address2={address2}
                city={city}
                state={state}
                zipCode={zipCode}
                country={country}
              />
            )}
        </Spacer>
        <Spacer position="top" size="xxl" />
        <PayButton onPress={() => console.log('pay now')}>Pay</PayButton>
        <Spacer position="top" size="large">
          <ClearButton onPress={clearCart}>Clear Cart</ClearButton>
        </Spacer>
      </ScrollView>
    </StyledSafeAreaView>
  );
};
