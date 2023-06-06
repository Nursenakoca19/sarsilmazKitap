import React, {useEffect} from 'react';
import {HomeStack} from './home.navigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import router from '../constants/router';
import {LoginStack} from './login.navigator';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const MainNavigation = () => {
  return <TabNavigation />;
};

const WIDTH = 65;

function TabNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={router.login} component={LoginStack} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
const AppNavigator = () => {
  return <MainNavigation />;
};

export default AppNavigator;
