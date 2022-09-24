import { StyleSheet } from 'react-native';
import COLORS from './colors';

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  whiteScreen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  grayScreen: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
});

export default AppStyles;
