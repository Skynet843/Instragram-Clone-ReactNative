import React from 'react';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeRoutes from './homeRoutes';

const Tab = createBottomTabNavigator();
const Router = () => {
  return (
    
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              size = size + 3;
              if (route.name == 'Home') {
                return <Foundation name="home" size={size} color={color} />;
              }
              if (route.name == 'Discovery') {
                return focused ? (
                  <FontAwesome5 name="search" size={size} color={color} />
                ) : (
                  <Feather name="search" size={size} color={color} />
                );
              }
              if (route.name == 'Post') {
                return focused ? (
                  <Ionicons name="add-circle" size={size} color={color} />
                ) : (
                  <Ionicons
                    name="add-circle-outline"
                    size={size}
                    color={color}
                  />
                );
              }
              if (route.name == 'Notifications') {
                return focused ? (
                  <AntDesign name="heart" size={size} color={color} />
                ) : (
                  <AntDesign name="hearto" size={size} color={color} />
                );
              }
              if (route.name == 'Profile') {
                return focused ? (
                  <Ionicons name="person" size={size} color={color} />
                ) : (
                  <Ionicons name="person-outline" size={size} color={color} />
                );
              }
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'grey',
            tabBarShowLabel: false,
            headerShown: false,
          })}>
          <Tab.Screen name="Home" component={HomeRoutes} />
          <Tab.Screen name="Discovery" component={DiscoveryScreen} />
          <Tab.Screen name="Post" component={CreatePostScreen} />
          <Tab.Screen name="Notifications" component={NotificationScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
     
  );
};
export default Router;
