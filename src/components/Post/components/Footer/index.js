import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, LogBox} from 'react-native';
import styles from './styles';
import {
  ChatBubbleBlack,
  SendBlack,
  BookmarkBlack,
  HeartOutlineBlack,
  HeartFillRed,
} from '../../../../assets/icons/icons';

const Footer = ({likesCount: likesCountProp, caption, postedAt}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    setIsLiked(!isLiked);
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  return (
    <View style={styles.footer_container}>
      <View style={styles.icon_container}>
        <View style={styles.left_container}>
          <Pressable onPress={onLikePressed}>
            {isLiked ? <HeartFillRed /> : <HeartOutlineBlack />}
          </Pressable>
          <ChatBubbleBlack />
          <SendBlack />
        </View>
        <View style={styles.right_container}>
          <BookmarkBlack />
        </View>
      </View>
      <Text style={styles.likes_count}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.posted_at}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
