import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Dashboard from './Dashboard';
import Timer from './Timer';
import LogoutScreen from './LogoutScreen';
import { colors } from '../utils/color';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={Dashboard} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="grid" size={22} color={color} />,
        }}
      />
      <Tab.Screen 
        name="Timer" 
        component={Timer} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="timer" size={22} color={color} />,
        }}
      />
      <Tab.Screen 
        name="Logga ut" 
        component={LogoutScreen} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="log-out" size={22} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;