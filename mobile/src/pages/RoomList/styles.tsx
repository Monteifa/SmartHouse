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
    alignItems: 'center',
    margin: 4,
    padding: 20,
  },
});

export default styles;
