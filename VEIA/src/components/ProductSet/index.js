import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {styles} from './styles';


export const ProductSet = ({product}) => {
  return (
    <>  
        <View style = {styles.container}>
            <View style = {styles.foto}>
                <Image source={{uri: product.fotoLink}} style={{width: 100, height: 100}}/>
            </View>
            <View>
                <Text style = {styles.nomeProduto}>{product.nome}</Text>
                <Text style = {styles.nomeProduto}>{product.nomeCategoria}</Text>
                <Text style = {styles.nomeProduto}>{product.valor}</Text>
            </View>
            <View style = {styles.btn}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name='square-edit-outline' size={30}/>
                </TouchableOpacity>
                    
                <TouchableOpacity>
                    <FeatherIcons name='trash' size={30}/>
                </TouchableOpacity>

            </View>
        </View>
        
    </>    
    )
}
