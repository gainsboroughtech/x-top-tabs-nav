import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const Following = () => {
  const { refresh } = useLocalSearchParams<{ refresh: string }>();
  return (
    <View>
      <Text>Following {refresh}</Text>
    </View>
  );
};

export default Following;
