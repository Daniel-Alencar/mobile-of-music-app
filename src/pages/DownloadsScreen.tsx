import React from 'react';
import {View, Dimensions, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PlaylistsScreen() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>
      </Text>
    </View>
  );
}


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    borderWidth: 0,

    backgroundColor: '#000',
    height: windowHeight - 50,
    width: windowWidth,
  },
});