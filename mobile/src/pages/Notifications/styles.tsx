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
});

export default styles;
