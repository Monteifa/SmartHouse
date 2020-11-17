import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1B26',
  },

  deviceHeader: {
    paddingLeft: 16,
    paddingRight: 24,
    paddingBottom: 24,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  deviceText: {
    fontSize: 22,
    color: '#fff',
    lineHeight: 30,
    fontWeight: 'bold',
  },

  deviceList: {
    paddingLeft: 16,
    paddingBottom: 24,
    paddingRight: 16,
    paddingTop: 16,
  },

  deviceListContainer: {
    alignItems: 'center',
    margin: 4,
    padding: 20,
  },

  deviceItem: {
    width: 160,
    height: 150,
    backgroundColor: '#25282F',
    borderRadius: 12,
    marginBottom: 24,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 16,
    marginHorizontal: 16,
  },

  deviceName: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
    marginTop: 40,
  },

  deviceStatus: {
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default styles;
