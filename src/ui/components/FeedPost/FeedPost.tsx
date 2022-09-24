import {
  View,
  Text,
  Pressable,
  PressableStateCallbackType,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { Post } from '../../../App';
import LikeImage from '../../assets/images/like.png';
import LikeIcon from '../../assets/images/like-button.png';
import CommentIcon from '../../assets/images/comment.png';
import ShareIcon from '../../assets/images/share.png';
import styles from './style';

type FeedPostProps = {
  post: Post;
};

const pressableStyles: (
  state: PressableStateCallbackType
) => StyleProp<ViewStyle> = ({ pressed }) => [
  {
    opacity: pressed ? 0.75 : 1,
    marginLeft: 'auto',
  },
];

const FeedPost: React.FC<FeedPostProps> = ({ post }) => {
  return (
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
          <Pressable
            android_ripple={{ borderless: true }}
            style={styles.iconButton}
          >
            <Image source={LikeIcon} style={styles.iconButtonImage} />
            <Text style={styles.iconButtonText}>Like</Text>
          </Pressable>
          <Pressable
            android_ripple={{ borderless: true }}
            style={styles.iconButton}
          >
            <Image source={CommentIcon} style={styles.iconButtonImage} />
            <Text style={styles.iconButtonText}>Comment</Text>
          </Pressable>
          <Pressable
            android_ripple={{ borderless: true }}
            style={styles.iconButton}
          >
            <Image source={ShareIcon} style={styles.iconButtonImage} />
            <Text style={styles.iconButtonText}>Share</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export { FeedPost };
