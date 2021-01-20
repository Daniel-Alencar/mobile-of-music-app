import React from 'react';
import { StyleSheet  } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

interface propsPlusButton {
	onPress?: ((pointerInside: boolean) => void),
}

export default function PlusButton(props: propsPlusButton) {
	return(
		<RectButton style={styles.plusButton} onPress={props.onPress} >
			<Feather name="plus" size={30} color="#000"/>
		</RectButton>
	);
}

const styles = StyleSheet.create({
	plusButton: {
    backgroundColor: 'white',
    height: 60,
    width: 60,

    borderRadius: 50,

    position: 'absolute',
    bottom: 20,
    right: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
});