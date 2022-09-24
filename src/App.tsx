import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import LikeImage from './assets/images/like.png';

const AVATAR_SIZE = 40;
const LIKE_ICON_SIZE = 20;

const post = {
  id: 'p1',
  createdAt: '19 m',
  User: {
    id: 'u1',
    image:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg',
    name: 'Vadim Savin',
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
  numberOfLikes: 11,
  numberOfShares: 2,
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  post: { width: '100%', marginVertical: 10, backgroundColor: '#FFFFFF' },
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
  name: { fontWeight: '500', color: '#000000' },
  createTime: { color: '#000000' },
  dotsIcon: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -8,
  },
  body: {},
  bodyText: {
    color: '#000000',
    paddingHorizontal: 10,
    lineHeight: 20,
  },
  bodyImage: { width: '100%', aspectRatio: 1, marginTop: 10 },
  footer: { paddingHorizontal: 10 },
  statsRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
  },
  likeIcon: { width: LIKE_ICON_SIZE, height: LIKE_ICON_SIZE },
  likedBy: { marginLeft: 5, color: 'gray' },
  noOfShares: { marginLeft: 'auto', color: 'gray' },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  iconButton: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconButtonText: { color: 'gray', marginLeft: 5, fontWeight: '500' },
});

const pressableStyles: (
  state: PressableStateCallbackType
) => StyleProp<ViewStyle> = ({ pressed }) => [
  {
    opacity: pressed ? 0.75 : 1,
    marginLeft: 'auto',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      {/* Post Component */}
      <View style={styles.post}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={{ uri: post.User.image }} style={styles.headerImage} />

          <View style={styles.userNameAndTime}>
            <Text style={styles.name}>{post.User.name}</Text>
            <Text style={styles.createTime}>{post.createdAt}</Text>
          </View>

          <Pressable
            android_ripple={{
              borderless: true,
            }}
            style={pressableStyles}
          >
            <Text style={styles.dotsIcon}>...</Text>
          </Pressable>
        </View>

        {/* Body */}
        <View style={styles.body}>
          <Text style={styles.bodyText}>{post.description}</Text>
          <Image
            source={{ uri: post.image }}
            resizeMode="cover"
            style={styles.bodyImage}
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.statsRow}>
            <Image source={LikeImage} style={styles.likeIcon} />
            <Text style={styles.likedBy}>
              Elon Musk and {post.numberOfLikes} others
            </Text>
            <Text style={styles.noOfShares}>{post.numberOfShares} shares</Text>
          </View>

          <View style={styles.buttonsRow}>
            <Pressable android_ripple={{ borderless: true }}>
              <Text style={styles.iconButtonText}>Like</Text>
            </Pressable>
            <Pressable android_ripple={{ borderless: true }}>
              <Text style={styles.iconButtonText}>Comment</Text>
            </Pressable>
            <Pressable
              android_ripple={{ borderless: true }}
              style={styles.iconButton}
            >
              <Text style={styles.iconButtonText}>Share</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;
