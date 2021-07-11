import React, {useContext, useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';

import {UpdateProduct} from '../Modals/UpdateProduct/UpdateProduct';

import ProductContext from '../ProductContext/ProductContext';

export const ProductSet = ({product, onOpenModalUpdateProduct, setProduct}) => {
  const {updateProduct, deleteProduct} = useContext(ProductContext);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.foto}>
          <Image
            source={{uri: product.fotoLink}}
            style={{width: 100, height: 100}}
          />
        </View>
        <View>
          <Text style={styles.nomeProduto}>{product.nome}</Text>
          <Text style={styles.nomeProduto}>{product.nomeCategoria}</Text>
          <Text style={styles.nomeProduto}>{product.valor}</Text>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            onPress={() => {
              onOpenModalUpdateProduct();
              setProduct(product);
            }}
            style={{marginBottom: 20}}>
            <MaterialCommunityIcons name="square-edit-outline" size={30} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => deleteProduct(product)}>
            <FeatherIcons name="trash" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
