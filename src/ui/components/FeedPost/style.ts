import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colors';

const AVATAR_SIZE = 40;
const LIKE_ICON_SIZE = 20;
const FOOTER_BUTTON_ICON_SIZE = 16;

const styles = StyleSheet.create({
  post: { width: '100%', marginVertical: 10, backgroundColor: COLORS.white },
  header: {
    flexDirection: 'row',
    padding: 10,
  },
  headerImage: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
  },
  userNameAndTime: { justifyContent: 'center', marginLeft: 12 },
  name: { fontWeight: '500', color: COLORS.black },
  createTime: { color: COLORS.black },
  dotsIcon: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -8,
  },
  body: {},
  bodyText: {
    color: COLORS.black,
    paddingHorizontal: 10,
    lineHeight: 20,
  },
  bodyImage: { width: '100%', aspectRatio: 1, marginTop: 10 },
  footer: { paddingHorizontal: 10 },
  statsRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.lightGray,
  },
  likeIcon: { width: LIKE_ICON_SIZE, height: LIKE_ICON_SIZE },
  likedBy: { marginLeft: 5, color: COLORS.gray },
  noOfShares: { marginLeft: 'auto', color: COLORS.gray },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  iconButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonImage: {
    width: FOOTER_BUTTON_ICON_SIZE,
    height: FOOTER_BUTTON_ICON_SIZE,
  },
  iconButtonText: {
    color: COLORS.gray,
    marginLeft: 5,
    fontWeight: '500',
  },
});

export default styles;
