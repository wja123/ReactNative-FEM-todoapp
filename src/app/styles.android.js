import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef235f'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'yellow'
  },
  input: {
    position: 'relative',
    height: height*0.10,
    width: width*0.5,
    textAlign: 'center',
    borderStyle: 'solid',
    borderColor:'yellow',
    borderWidth: 2
  },
  newTodo:{
    height: 100,
    color: 'black'
  }
});