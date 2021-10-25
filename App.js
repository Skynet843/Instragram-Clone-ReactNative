import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, StatusBar} from 'react-native';
import MainRouter from './src/router/index'

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <MainRouter/>
        </NavigationContainer>
    </View>
  )
}

export default App;
