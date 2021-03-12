import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: '#000',
    height: '100%',
    width: '100%',
  },
  shortInformationsContainer: {
    borderColor: '#0ff',
    borderWidth: 1,

    height: 300,
  },

  shuffleButtonContainer: {
    borderColor: '#f0f',
    borderWidth: 1,
    backgroundColor: '#000',

    height: 27.5,

    alignItems: 'center',
  },
  shuffleButtonContainerFalse: {
    borderColor: '#f00',
    borderWidth: 1,

    height: 55,
  },

  shuffleButton: {
    borderRadius: 30,
    backgroundColor: '#42E12C',

    height: 55,
    width: 220,

    justifyContent: 'center',
    alignItems: 'center',

    position: 'relative',
  },
  shuffleButtonText: {
    color: '#fff',
    fontSize: 18,
  }
});

export default styles;