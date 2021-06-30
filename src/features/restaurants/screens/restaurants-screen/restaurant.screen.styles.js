import styled from 'styled-components';
import { StatusBar, SafeAreaView, View } from 'react-native';

// export const StyledSafeAreaView = styled(SafeAreaView)`
//   flex: 1;
//   margin-top: ${StatusBar.currentHeight}px;
// `;

export const StyledSafeAreaView = styled(SafeAreaView)({
  flex: 1,
  marginTop: StatusBar.currentHeight,
});

export const StyledSearchbarView = styled(View)`
  padding: 16px;
`;

export const StyledListView = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;
