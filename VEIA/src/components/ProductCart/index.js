import React, {useContext} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

import FeatherIcons from 'react-native-vector-icons/Feather';

import {styles} from './styles';

import CartContext from '../CartContext/CartContext';

export const ProductCart = ({product}) => {
  const {removeProduct, productIncrement, productDecrement} =
    useContext(CartContext);

  return (
    <View style={styles.container}>
      <View style={styles.infos}>
        <View style={styles.image}>
          <Image
            source={{
              uri: product.fotoLink,
            }}
            style={{height: 80, width: 80, marginRight: 10}}
          />
        </View>

        <View style={styles.escritas}>
          <Text style={{fontWeight: 'bold'}}>{product.nome}</Text>
          <Text style={{fontWeight: '100', fontSize: 12}}>
            {product.nomeCategoria}
          </Text>
          <View style={styles.valueQuantity}>
            <Text style={{fontWeight: 'bold'}}>R$ {product.valor}</Text>

            <TouchableOpacity style={{marginLeft: 25}}>
              <FeatherIcons
                name="minus"
                size={20}
                onPress={() => productDecrement(product)}
              />
            </TouchableOpacity>

            <Text>x{product.amount}</Text>

            <TouchableOpacity>
              <FeatherIcons
                name="plus"
                size={20}
                onPress={() => productIncrement(product)}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.btn}>
        <TouchableOpacity onPress={() => removeProduct(product.id)}>
          <FeatherIcons name="trash" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
