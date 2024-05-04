import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

const Page = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Link href="/details">Details page</Link> */}
      <Link href="/details" asChild>
        <Button title="Open Details" />
      </Link>

      <Link href="/(tabs)/following" asChild>
        <Button title="Following" />
      </Link>

      <Link
        href={{
          pathname: '/(tabs)/following',
          params: { refresh: 1 },
        }}
        asChild>
        <Button title="Following Params" />
      </Link>
    </View>
  );
};

export default Page;
