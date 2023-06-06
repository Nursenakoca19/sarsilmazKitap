import React, {useEffect, useState} from 'react';
import AppNavigator from './src/navigation/app.navigator';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {navigatorRef} from './src/services/navigationService';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <NavigationContainer ref={navigatorRef}>
    <AppNavigator/>

    </NavigationContainer>
  );
};

export default App;
