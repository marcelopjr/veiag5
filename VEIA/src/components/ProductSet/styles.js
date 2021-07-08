const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%', 
        backgroundColor: '#FFF',
        marginBottom: 15,
        borderRadius: 5,
        padding: 10,
        justifyContent: 'space-between'
        
    },

    nomeProduto:{
        fontSize: 15,
    },

    btn:{
        justifyContent: 'space-between',
        paddingVertical: 10,
    }
});