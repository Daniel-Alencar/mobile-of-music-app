import React, { useRef, useEffect } from 'react';
import {View, Dimensions, StyleSheet, ScrollView } from 'react-native';

import { useDispatch } from 'react-redux';

interface propsDefaultScreen {
  content: JSX.Element,
  contentOutsideFromScrollView?: JSX.Element,
}

export default function DefaultScreen(props: propsDefaultScreen) {

  return (
    <View style={styles.container}>

      <View style={styles.contentContainerView}>

        <ScrollView 
          style={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {props.content}
        </ScrollView>

        {props.contentOutsideFromScrollView}
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