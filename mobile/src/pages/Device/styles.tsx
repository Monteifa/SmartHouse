import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1B26',
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: 300,
    height: 300,
    backgroundColor: '#105000',
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonInside: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonInsideOn: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonOff: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: '#7C0101',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 40,
  },

  textOn: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  textOff: {
    color: 'black',
  },
});

export default styles;
