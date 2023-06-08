import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Habits from '../pages/Habits';

import SvgHome from '../assets/img/home.svg';
import SvgHabits from '../assets/img/habits.svg';

const Tab = createBottomTabNavigator();

export default function AppRote() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({ 
                headerShown: false,
                tabBarIcon: ({ color }) => {
                    let Icon = SvgHome;
        
                    if (route.name === 'Habits') {
                      Icon = SvgHabits;
                    }
        
                    return <Icon color={color} />
                  },
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: '#A7A7A7'
            })}>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='Habits' component={Habits} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}