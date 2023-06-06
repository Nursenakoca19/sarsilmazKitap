import React, {useEffect, useState} from 'react';
import AppNavigator from './src/navigation/app.navigator';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <NavigationContainer>
      <AppNavigator/>

    </NavigationContainer>
  );
};

export default App;
