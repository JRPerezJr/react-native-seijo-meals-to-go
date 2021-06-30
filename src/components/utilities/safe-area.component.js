import styled from 'styled-components/native';
import { StatusBar, SafeAreaView } from 'react-native';

// export const StyledSafeAreaView = styled(SafeAreaView)`
//   flex: 1;
//   margin-top: ${StatusBar.currentHeight}px;
// `;

export const StyledSafeAreaView = styled(SafeAreaView)({
  flex: 1,
  marginTop: StatusBar.currentHeight,
});
