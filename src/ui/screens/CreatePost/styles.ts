import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colors';
import { AVATAR_SIZE } from '../../components/FeedPost/style';

export const IMAGE_PICKER_ICON_SIZE = 30;

const styles = StyleSheet.create({
  screen: { padding: 10 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
  },
  name: { marginLeft: 10, fontWeight: '500', color: COLORS.black },
  buttonView: { marginTop: 'auto' },
  imagePicker: { marginLeft: 'auto' },
  imagePickerIcon: {
    width: IMAGE_PICKER_ICON_SIZE,
    height: IMAGE_PICKER_ICON_SIZE,
    tintColor: COLORS.green,
  },
  selectedImage: {
    width: '50%',
    aspectRatio: 4 / 3,
    alignSelf: 'center',
  },
});

export default styles;
