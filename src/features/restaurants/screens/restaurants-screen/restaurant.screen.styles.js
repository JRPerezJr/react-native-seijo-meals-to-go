import styled from 'styled-components/native';
import { View, FlatList } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

// export const StyledSafeAreaView = styled(SafeAreaView)`
//   flex: 1;
//   margin-top: ${StatusBar.currentHeight}px;
// `;

export const StyledSearchbarView = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Loading = styled(ActivityIndicator).attrs({
  size: 'large',
  animating: true,
  color: Colors.red800,
})`
  margin-left: -25px;
`;
