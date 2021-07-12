const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  viewBtn: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  btnProcurar: {
    backgroundColor: '#32CD32',
    alignItems: 'center',
    width: 100,
    height: 40,
    borderRadius: 7,
    marginTop: 10,
    justifyContent: 'center',
    paddingVertical: 5,
    borderWidth: 1,
  },
  btnCancelar: {
    backgroundColor: '#8B0000',
    alignItems: 'center',
    width: 100,
    height: 40,
    borderRadius: 7,
    marginTop: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    paddingVertical: 5,
    borderWidth: 1,
  },
  titleModal: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 5,
  },
  viewNames: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fieldName: {
    fontSize: 13,
    color: '#606060',
    marginLeft: 10,
  },
  msgError: {
    fontSize: 13,
    color: '#FF0000',
    marginRight: 15,
  },
  prod:{
    alignSelf:'center',
    alignItems:'center',
    marginTop:50,
    width:'85%',
    borderRadius:20,
    paddingBottom:10,
    paddingTop:10,
  },
  image:{
    height: 150, 
    width: 150, 
    marginBottom:10, 
    borderRadius:10,
  },
  nomeProduto:{
    fontSize: 20,
    marginBottom:5,
  },
  descricao:{
    fontSize:15,
    marginBottom:5,
  },
  valor:{
    fontSize: 18,
    marginBottom:5,
  },
});