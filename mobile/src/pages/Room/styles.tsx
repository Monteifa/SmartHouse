import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003D73',
  },

  deviceList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginRight: '5%',
    marginLeft: '5%',
    marginTop: 16,
  },

  deviceItem: {
    width: '45%',
    height: 160,
    backgroundColor: '#0077FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default styles;
