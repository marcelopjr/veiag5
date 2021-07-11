const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#fff',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  btnHome: {
    height: '100%',
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCart: {
    height: '100%',
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRightColor: '#808080',
    borderLeftColor: '#808080',
  },
  btnProfile: {
    height: '100%',
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
