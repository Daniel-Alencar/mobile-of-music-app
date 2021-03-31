import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: '#000000ff',

    height: '100%',
    width: '100%',
  },

  shortInformationsContainer: {
    height: 300,

    borderWidth: 0,
    borderColor: "#f00",
  },
  artistImage: {
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 0,
    borderColor: "#f00",

    height: '100%',
    width: '100%',
  },
  artistName: {
    color: '#fff',
    fontSize: 40,

    padding: 6,
  },
  followButton: {
    borderColor: '#42E12C',
    borderWidth: 1,
    borderRadius: 50,

    height: 25,
    paddingLeft: 15,
    paddingRight: 15,

    justifyContent: 'center',
    alignItems: 'center',
  },


  shuffleButtonContainer: {
    borderColor: '#f0f',
    borderWidth: 0,
    backgroundColor: '#000',

    height: 27.5,
    marginBottom: 30,

    alignItems: 'center',
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
  },
});

export default styles;