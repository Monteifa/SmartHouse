import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1B26',
  },

  header: {
    paddingLeft: 16,
    paddingRight: 24,
    paddingBottom: 8,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headerText: {
    color: '#fff',
    fontSize: 22,
    lineHeight: 30,
    fontWeight: 'bold',
  },

  notificationContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },

  notificationItem: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#25282F',
    borderRadius: 12,
    marginBottom: 24,
  },

  divider: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  notificationText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
    lineHeight: 22,
  },
});

export default styles;
