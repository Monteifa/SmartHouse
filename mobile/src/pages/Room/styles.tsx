import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1B26',
  },

  roomHeader: {
    paddingHorizontal: 16,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  roomName: {
    color: '#fff',
    fontSize: 22,
    lineHeight: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  deviceList: {
    paddingLeft: 16,
    paddingBottom: 24,
    paddingRight: 16,
  },

  deviceListContainer: {
    alignItems: 'center',
    padding: 48,
  },

  deviceItem: {
    width: 140,
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
