import { StyleSheet } from "react-native";
import { windowWidth } from "../../settingsDefault";

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: '#000',
    flex: 1,

    borderColor: '#ff0',
    borderWidth: 0,
  },

  uploadMusicView: {
    borderWidth: 0,
    borderColor: '#f0f',

    height: 100,

    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadMusicButton: {
    borderWidth: 0,
    borderColor: '#f0f',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    padding: 15,
  },
  uploadMusicText: {
    color: '#fff',
    fontSize: 18
  },

  musicsScrollView: {
    flex: 1,

    borderWidth: 0,
    borderColor: '#00f',
  },

  addPlaylistButton: {
    position: 'absolute',
    zIndex: 1,
    bottom: 20,
    left: (windowWidth / 2) - (180 / 2),

    height: 65,
    width: 180,
    borderRadius: 50,
    borderWidth: 0,
    borderColor: '#f0f',

    backgroundColor: '#35d244',

    alignItems: 'center',
    justifyContent: 'center',
  },
  addPlaylistButtonText: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
});

export default styles;