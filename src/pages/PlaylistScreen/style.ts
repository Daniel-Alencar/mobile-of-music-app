import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: '#000',

    flex: 1,
    width: '100%',

    borderWidth: 0,
    borderColor: "#f00",
  },
  linearGradient: {
    zIndex: -1,
    position: 'relative',
  },
  shortInformationsContainer: {
    borderColor: '#0ff',
    borderWidth: 0,

    height: 270,

    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',
  },
  playlistImage: {
    height: 160,
    width: 160,
  },
  playlistName: {
    color: '#fff',
    fontSize: 18,

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
    marginBottom: 0,

    alignItems: 'center',

    position: 'relative',
    zIndex: 10,

    elevation: 50,
  },
  shuffleButton: {
    borderColor: '#f0f',
    borderWidth: 0,
    borderRadius: 30,
    backgroundColor: '#42E12C',

    height: 55,
    width: 180,

    justifyContent: 'center',
    alignItems: 'center',

    position: 'relative',

    zIndex: 10,
  },
  shuffleButtonText: {
    color: '#fff',
    fontSize: 15,
  },

  downloadContainer: {
    borderColor: '#f00',
    borderWidth: 0,

    backgroundColor: '#000',

    zIndex: 10,

    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  downloadText: {
    color: '#fff',
    marginLeft: 20,
  },
  switchButton: {
    margin: 20,
  },
});

export default styles;