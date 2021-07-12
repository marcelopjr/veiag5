const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {marginTop: 50},
  body: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    height: 601,
  },

  btnAdd:{
    position:'absolute', 
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'#32CD32',
    padding: 10,
    bottom:80,
    left: 10,
    borderRadius:30,
  },

  textAdd:{
    fontSize:40
  },

  btnSearch:{
    position:'absolute', 
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'#32CD32',
    padding: 10,
    bottom: 145,
    left: 10,
    borderRadius:30,
  },

});
