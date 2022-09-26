import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colors';
import { IMAGE_PICKER_ICON_SIZE } from '../CreatePost/styles';

const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: COLORS.white,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    color: COLORS.gray,
  },
  icon: {
    marginLeft: 'auto',
    width: IMAGE_PICKER_ICON_SIZE,
    height: IMAGE_PICKER_ICON_SIZE,
    tintColor: COLORS.green,
  },
});

export default styles;
