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
  padding: ${props => props.theme.space[3]};
`;

export const StyledListView = styled(View)`
  flex: 1;
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;
