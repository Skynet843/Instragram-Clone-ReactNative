import React from 'react';
import {View, Text} from 'react-native';
import ProfilePicture from '../../../ProfilePicture/index';
import styles from './styles';
import {VerticalDotBlack} from '../../../../assets/icons/icons'

const Header = ({imageUri, userName}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left_container}>
        <ProfilePicture uri={imageUri} size={40} />
        <Text style={styles.user_name}>{userName}</Text>
      </View>

      <View style={styles.icon_container}>
        <VerticalDotBlack />
      </View>
    </View>
  );
};

export default Header;
