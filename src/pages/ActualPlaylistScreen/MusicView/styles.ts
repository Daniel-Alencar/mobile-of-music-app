import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderColor: '#ff0',
    borderWidth: 0,

    height: 60,
    width: "100%",

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  left: {
    borderColor: '#f00',
    borderWidth: 0,

    height: 50,

    flexDirection: 'row',
  },
  selectButton: {
    borderColor: '#0f0',
    borderWidth: 0,

    justifyContent: 'center',
    alignItems: 'center',

    width: 50,
  },
  image: {
    height: 50,
    width: 50,
  },
  textContainer: {
    borderColor: '#0f0',
    borderWidth: 0,

    justifyContent: 'center',

    marginLeft: 10,
  },
  musicName: {
    color: "#fff",
    fontSize: 15,
  },
  artistName: {
    color: "#c4c4c4",
    fontSize: 12,
  },
  right: {},
});

export default styles;