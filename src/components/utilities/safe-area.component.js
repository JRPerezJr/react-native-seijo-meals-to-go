import styled from 'styled-components/native';
import { StatusBar, SafeAreaView } from 'react-native';
import { colors } from '../../infrastructure/theme/colors';

// export const StyledSafeAreaView = styled(SafeAreaView)`
//   flex: 1;
//   margin-top: ${StatusBar.currentHeight}px;
// `;

export const StyledSafeAreaView = styled(SafeAreaView)({
  flex: 1,
  marginTop: StatusBar.currentHeight,
  backgroundColor: colors.bg.primary,
});
