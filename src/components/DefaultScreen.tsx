import React from 'react';
import {View, Dimensions, StyleSheet, ScrollView } from 'react-native';

interface propsDefaultScreen {
    content: JSX.Element,
}

export default function DefaultScreen(props: propsDefaultScreen) {
  return (
    <View style={styles.container}>

      <View style={styles.contentContainerView}>
        <ScrollView style={styles.contentContainer}>
            {props.content}
        </ScrollView>
      </View>

    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%',
    width: windowWidth,
  },
  contentContainerView: {
    borderColor: '#00f',
    borderWidth: 0,
  },
  contentContainer: {
    borderColor: '#0f0',
    borderWidth: 0,
  },
});