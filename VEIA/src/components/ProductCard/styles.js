const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: 165,
    padding: 8,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  foto: {
    borderRadius: 5,
    height: 120,
    width: 120,
    marginBottom: 5,
  },
  nomeProduto: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  categoriaProduto: {
    fontSize: 12,
    fontWeight: '100',
    color: '#A9A9A9',
    marginBottom: 5,
  },
  precoProduto: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
