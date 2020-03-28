import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  { createStackNavigator } from '@react-navigation/stack';

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

const appStack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer >
            <appStack.Navigator screenOptions={{ headerShown: false }}>

                <appStack.Screen component={ Incidents } name="Incidents"/>
                <appStack.Screen component={ Detail } name="Detail"/>

            </appStack.Navigator>
        </NavigationContainer>
    )
}