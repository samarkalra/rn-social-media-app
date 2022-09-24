import { View } from 'react-native';
import React from 'react';
import AppStyles from './constants/styles';
import { FeedPost } from './ui/components/FeedPost';
import { Post } from './ui/components/FeedPost/type';

const post: Post = {
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

const App = () => {
  return (
    <View style={AppStyles.whiteScreen}>
      <FeedPost post={post} />
    </View>
  );
};

export default App;
