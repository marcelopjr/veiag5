import LinearGradient from 'react-native-linear-gradient';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%', 
        backgroundColor: '#FFF',
        marginBottom: 15,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        
    },

    nomeProduto:{
        fontSize: 16,
        paddingLeft: 20,
        width: 190,

    },

    btn:{
        marginLeft: 10,
    }
});