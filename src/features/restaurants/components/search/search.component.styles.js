import styled from 'styled-components/native';
import { View } from 'react-native';

// export const StyledSafeAreaView = styled(SafeAreaView)`
//   flex: 1;
//   margin-top: ${StatusBar.currentHeight}px;
// `;

export const StyledSearchbarView = styled(View)`
  padding: ${props => props.theme.space[3]};
`;
