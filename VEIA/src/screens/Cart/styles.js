const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {marginTop: 50},
  body: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 559,
  },
  cartAlert: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 15,
  },
});
