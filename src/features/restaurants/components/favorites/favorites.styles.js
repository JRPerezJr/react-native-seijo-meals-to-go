import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export const AntDesignIcon = styled(AntDesign)({
  name: 'heart',
  size: 24,
  color: 'red',
})``;
