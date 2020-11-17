import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1B26',
  },

  roomHeader: {
    paddingLeft: 16,
    paddingRight: 24,
    paddingBottom: 24,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  roomText: {
    fontSize: 22,
    color: '#fff',
    lineHeight: 30,
    fontWeight: 'bold',
  },

  roomList: {
    paddingLeft: 16,
    paddingBottom: 24,
    paddingRight: 16,
    paddingTop: 16,
  },

  roomListContainer: {
    flexDirection: 'row',
    height: 1000,
  },

  roomListSide1: {
    flex: 1,
  },

  roomListSide2: {
    flex: 1,
    alignItems: 'flex-end',
  },

  roomItem: {
    width: 156,
    height: 150,
    backgroundColor: '#25282F',
    borderRadius: 12,
    marginBottom: 24,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },

  roomName: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
    marginTop: 40,
  },

  roomDesc: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 2,
  },

  roomItemAdd: {
    width: 156,
    height: 150,
    backgroundColor: 'transparent',
    borderRadius: 12,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#25282F',
    borderWidth: 2,
  },

  circle: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: '#25282F',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
