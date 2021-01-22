import React from 'react';
import {View, Dimensions, StyleSheet, ScrollView, StyleProp, ViewStyle } from 'react-native';

interface propsDefaultScreen {
  content: JSX.Element,
  scrollViewContentContainerStyle?: StyleProp<ViewStyle>
}

export default function DefaultScreen(props: propsDefaultScreen) {
  return (
    <View style={styles.container}>

      <View style={styles.contentContainerView}>

        <ScrollView 
          style={styles.contentContainer}
          contentContainerStyle={props.scrollViewContentContainerStyle}
        >
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

    borderColor: '#f0f',
    borderWidth: 0,
  },
  contentContainerView: {
    borderColor: '#00f',
    borderWidth: 0,

    height: '100%',
  },
  contentContainer: {
    borderColor: '#f00',
    borderWidth: 0,
  },
});