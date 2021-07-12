import { Icon } from 'react-native-vector-icons/Icon';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {marginTop: 50},
  body: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 601,
    justifyContent:'center',
    alignItems:'center',
  },

  btnLogin:{
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent:'center',
    width: 200,
    height: 30,
    borderRadius: 5,
    marginBottom: 10,
  },

  icon:{
    backgroundColor: '#FFF',  
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginBottom: 30,
  }
});
