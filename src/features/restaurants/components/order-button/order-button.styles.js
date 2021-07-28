import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import { colors } from '../../../../infrastructure/theme/colors';

export const OrderButton = styled(Button).attrs({
  color: colors.brand.primary,
  icon: 'cash-usd',
  mode: 'contained',
})`
  padding: ${props => props.theme.space[2]};
  width: 80%;
  align-self: center;
`;
