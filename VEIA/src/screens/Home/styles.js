const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {marginTop: 50},
  header: {
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  body: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 601,
  },
  menu: {
    backgroundColor: '#fff',
    width: '100%',
    height: 70,
  },
});
