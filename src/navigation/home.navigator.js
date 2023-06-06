import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/home'
import router from '../constants/router'
import {LoginStack} from './login.navigator'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export function HomeStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={router.home} component={HomeScreen} options={{headerShown: false}} />
    </Tab.Navigator>
  )
}
