import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const Layout = () => {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: '#131620',
        tabBarIndicatorStyle: {
          backgroundColor: '#ff00ff',
          height: 3,
        },
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontSize: 14,
        },
      }}>
      <MaterialTopTabs.Screen name="index" options={{ title: 'Hi' }} />
      <MaterialTopTabs.Screen name="following" />
    </MaterialTopTabs>
  );
};

export default Layout;
