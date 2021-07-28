import styled from 'styled-components/native';

import { View } from 'react-native';
import { Avatar, TextInput, Button } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';

export const CartIconContainer = styled(View)`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
  icon: 'cart-off',
})`
  background-color: ${props => props.bg || props.theme.colors.brand.primary};
`;

export const NameInput = styled(TextInput).attrs({
  label: 'Full Name',
})`
  margin: ${props => props.theme.space[3]};
`;

export const AddressInput1 = styled(TextInput).attrs({
  label: 'Address1',
})`
  margin: ${props => props.theme.space[3]};
`;

export const AddressInput2 = styled(TextInput).attrs({
  label: 'Address2',
})`
  margin: ${props => props.theme.space[3]};
`;

export const CityInput = styled(TextInput).attrs({
  label: 'City',
})`
  margin: ${props => props.theme.space[3]};
`;

export const StateInput = styled(TextInput).attrs({
  label: 'State',
})`
  margin: ${props => props.theme.space[3]};
`;

export const CountryInput = styled(TextInput).attrs({
  label: 'Country',
})`
  margin: ${props => props.theme.space[3]};
`;

export const ZipCodeInput = styled(TextInput).attrs({
  label: 'ZipCode',
})`
  margin: ${props => props.theme.space[3]};
`;

export const PayButton = styled(Button).attrs({
  icon: 'cash-usd',
  mode: 'contained',
  color: colors.brand.primary,
})`
  width: 80%;
  align-self: center;
  padding: ${props => props.theme.space[2]};
`;

export const ClearButton = styled(Button).attrs({
  icon: 'cart-off',
  mode: 'contained',
  color: colors.ui.error,
})`
  width: 80%;
  align-self: center;
  padding: ${props => props.theme.space[2]};
`;
