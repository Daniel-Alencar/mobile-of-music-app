import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',

    flex: 1,
    backgroundColor: '#000',
  },

  uploadCoverView: {
    borderWidth: 0,
    borderColor: '#f0f',

    height: 170,

    alignItems: 'center',
  },
  uploadMusicButton: {
    borderWidth: 0,
    borderColor: '#f00',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    padding: 15,
  },
  uploadMusicText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },

  inputsContainer: {
    borderWidth: 0,
    borderColor: '#f0f',

    height: 150,
    width: '100%',

    alignItems: 'center',
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

    color: '#fff',

    paddingLeft: 20,
    paddingRight: 20,
  },
  playlistPrivadaContainer: {
    borderWidth: 0,
    borderColor: '#00f',

    height: 45,

    flexDirection: 'row',
    alignItems: 'center',
  },
  selector: {
    height: 18,
    width: 18,

    marginRight: 15,
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