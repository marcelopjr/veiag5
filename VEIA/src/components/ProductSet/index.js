import React from 'react';
import {View, Text, Image} from 'react-native';
import { color } from 'react-native-reanimated';

import {styles} from './styles';


export const ProductSet = ({product}) => {
  return (
    <>  
        <View styles ={styles.container}>
            <View styles={styles.foto}>
                <Image source={{uri: product.fotoLink}} style={{width: 100, height: 100}}/>
            </View>
            <View>
                <Text styles = {{fontSize: 5}}>{product.nome}</Text>
            </View>
        </View>
        
    </>    
    )
}
