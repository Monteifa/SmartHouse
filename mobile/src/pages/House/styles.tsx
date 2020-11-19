import { BackHandler, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1B26',
  },

  header: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 40,
    alignItems: 'center',
  },

  headerContainer: {
    flex: 1,
    marginRight: 24,
  },

  welcomeText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'bold',
  },

  usernameText: {
    color: '#fff',
    fontSize: 22,
    lineHeight: 30,
    fontWeight: 'bold',
  },

  info: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    paddingBottom: 24,
  },

  infoBar: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#25282F',
    borderRadius: 12,
  },

  divider: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
    lineHeight: 22,
  },

  favoriteHeader: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  favoriteText: {
    fontSize: 22,
    color: '#fff',
    lineHeight: 30,
    fontWeight: 'bold',
  },

  deviceScroller: {
    flex: 1,
    marginTop: 8,
    marginLeft: 8,
  },

  deviceContainer: {
    height: 120,
    width: 120,
    borderRadius: 12,
    backgroundColor: '#25282F',
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  deviceName: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 4,
  },

  recentHeader: {
    paddingLeft: 16,
    paddingTop: 40,
  },

  recentText: {
    fontSize: 22,
    color: '#fff',
    lineHeight: 30,
    fontWeight: 'bold',
  },

  recentScroller: {
    flex: 1,
    marginTop: 24,
    marginLeft: 8,
    paddingBottom: 40,
  },

  recentContainer: {
    height: 120,
    width: 120,
    borderRadius: 12,
    backgroundColor: '#25282F',
    marginHorizontal: 8,
  },

  // title: {
  //   fontSize: 16,
  //   paddingHorizontal: 20,
  //   paddingVertical: 20,
  //   fontWeight: 'bold',
  // },

  // roomItem: {
  //   height: 90,
  //   width: '90%',
  //   alignSelf: 'center',
  //   backgroundColor: '#25282F',
  //   borderRadius: 10,
  //   marginBottom: 20,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },

  // roomName: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   color: '#fff',
  //   marginLeft: 10,
  // },

  // deviceNumber: {
  //   paddingHorizontal: 20,
  //   fontSize: 14,
  //   color: '#808080',
  // },

  // icon: {
  //   marginLeft: 20,
  // },

  // iconNext: {
  //   marginLeft: 280,
  //   position: 'absolute',
  // },
});

export default styles;
