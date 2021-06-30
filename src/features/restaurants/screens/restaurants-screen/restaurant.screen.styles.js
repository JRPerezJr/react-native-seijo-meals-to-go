import styled from 'styled-components';
import { StatusBar, SafeAreaView, View } from 'react-native';

const bar = StatusBar.currentHeight;

export const StyledSafeAreaView = styled(SafeAreaView)({
  flex: 1,
  marginTop: bar,
});

export const StyledSearchbarView = styled(View)`
  padding: 16px;
`;

export const StyledListView = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;
