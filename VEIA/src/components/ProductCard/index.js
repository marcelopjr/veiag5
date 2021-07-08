import React from 'react';
import {Text, View, Image} from 'react-native';

import {styles} from './styles';

import {ButtonAddCart} from '../Buttons/ButtonAddCart';

export const ProductCard = ({product}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.foto}>
          <Image
            source={{
              uri: product.fotoLink,
            }}
            style={{height: '100%', width: '100%'}}
          />
        </View>

        <View>
          <Text style={styles.nomeProduto}>{product.nome}</Text>

          <Text style={styles.categoriaProduto}>{product.nomeCategoria}</Text>

          <Text style={styles.precoProduto}>R$ {product.valor}</Text>
        </View>

        <ButtonAddCart />
      </View>
    </>
  );
};
