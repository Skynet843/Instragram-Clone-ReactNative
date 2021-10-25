import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20,color:"white"}}>This is Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
