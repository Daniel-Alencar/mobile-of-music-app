import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './style';

interface propsBackground {
  children: JSX.Element
}

const Background = (props: propsBackground) => {
  return(
    <SafeAreaView style={styles.safeAreaView}>
      <LinearGradient
          colors={['#464779', '#1b1a1f']}
          style={styles.linearGradiant}
      >
        {props.children}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Background;
