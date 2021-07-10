const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: 100,
    borderRadius: 5,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infos: {
    flexDirection: 'row',
  },
  image: {
    borderRightWidth: 2,
    borderRightColor: '#808080',
  },
  escritas: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  valueQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    justifyContent: 'center',
  },
});
