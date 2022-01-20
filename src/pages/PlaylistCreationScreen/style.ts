import { StyleSheet } from "react-native";
import { windowWidth } from "../../settingsDefault";

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',

    height: '100%',
    backgroundColor: '#000',
  },

  uploadCoverView: {
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

  inputsContainer: {
    borderWidth: 0,
    borderColor: '#f0f',

    height: 150,
    width: '100%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  textOfTextInput: {
    color: '#fff',
    fontSize: 16
  },
  input: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 15,

    width: '90%',
    height: 50,
  },
  playlistPrivadaContainer: {
    borderWidth: 0,
    borderColor: '#00f',

    height: 35,

    flexDirection: 'row',
    alignItems: 'center'
  },
  selector: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,

    height: 18,
    width: 18,

    marginRight: 5,
  },

  buttonsContainer: {
    borderWidth: 0,
    borderColor: '#f0f',

    height: 120,
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  Button: {
    height: 60,
    width: 160,
    borderRadius: 50,
    borderWidth: 0,
    borderColor: '#f0f',

    backgroundColor: '#35d244',

    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
});

export default styles;