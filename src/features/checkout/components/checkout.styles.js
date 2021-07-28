import styled from 'styled-components/native';

import { View } from 'react-native';
import { Avatar } from 'react-native-paper';

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
