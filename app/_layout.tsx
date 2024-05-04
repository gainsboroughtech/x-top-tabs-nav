import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';

const Layout = () => {
  return (
    // animation: 'slide_from_bottom',
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="(tabs)"
        options={{
          // headerStyle: {
          //   backgroundColor: 'blue',
          // },
          headerLeft: () => (
            <Image
              source={{
                uri: 'https://sharkfindevelopment.com/img/logo_icon.png',
              }}
              style={{ width: 30, height: 30, borderRadius: 20 }}
            />
          ),
          headerTitle: () => (
            <Image
              source={{
                uri: 'https://sharkfindevelopment.com/static/media/logo.39286ba0.png',
              }}
              style={{ width: 60, height: 30, borderRadius: 2 }}
            />
          ),
          headerRight: () => <Ionicons name="settings-outline" size={24} color="black" />,
        }}
      />
      <Stack.Screen name="details" options={{ headerTitle: 'Details', headerBackTitle: 'Back' }} />
    </Stack>
  );
};

export default Layout;
