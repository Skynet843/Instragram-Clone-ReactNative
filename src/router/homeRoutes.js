import React from 'react';
import {View, Image} from 'react-native';
import HomeScreen from '../screens/homeScreen/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import logo from '../assets/images/logo.png';

const HomeStack = createNativeStackNavigator();
const HomeRoutes = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="StackHome"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerTitleAlign: 'center',
          headerLeft: () => {
            return (
              <View style={{marginLeft: 5}}>
                <Feather name="camera" size={25} color="#000" />
              </View>
            );
          },
          headerRight: () => {
            return (
              <View style={{marginRight: 5}}>
                <Feather name="send" size={25} color="#000" />
              </View>
            );
          },
          headerTitle: () => {
            return (
              <Image
                source={logo}
                style={{width: 150, resizeMode: 'contain', height: 40}}
              />
            );
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
