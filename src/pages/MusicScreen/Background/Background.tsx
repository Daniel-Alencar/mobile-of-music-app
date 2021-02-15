import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

interface propsBackground {
  children: JSX.Element
}

const Background = (props: propsBackground) => {
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
          colors={['#464779', '#1b1a1f']}
          style={{
            flex: 1
          }}
      >
        {props.children}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Background;