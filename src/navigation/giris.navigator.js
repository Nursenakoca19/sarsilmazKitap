import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import girisScreen from '../screens/giris';
import router from '../constants/router'


const Stack = createStackNavigator();

export  function GirisStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                options={{ title: ('Geri'), headerShown: false }}
                name={router.giris}
                component={girisScreen}
            />

        </Stack.Navigator>
    );
}
