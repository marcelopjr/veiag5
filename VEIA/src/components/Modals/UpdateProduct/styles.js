const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  viewBtn: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  btnCadastrar: {
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
  modalStyle: {
    backgroundColor: '#F0F2F5',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 30,
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
});
