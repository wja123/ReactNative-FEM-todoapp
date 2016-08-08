import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    fontStyle: 'italic',
    margin: 5
  },
  form: {
    height: height * 0.05,
    width: width * 0.7,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor:'white',
    flexDirection: 'row'
  },
  input: {
    flex: 0.7,
    textAlign: 'center'
  },
  addbutton: {
    flex: 0.3,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'grey',
    borderStyle: 'solid',
    borderLeftWidth: 2,
    borderLeftColor: 'black'
  },
  listItem: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: 'left'
  },
  addButtonText: {
    fontWeight: "bold",
    color: "white"
  }
});