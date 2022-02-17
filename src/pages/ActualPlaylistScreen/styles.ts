import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonsContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,

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