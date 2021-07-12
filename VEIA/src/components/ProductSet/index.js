import React, {useContext, useRef} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';

import {UpdateProduct} from '../Modals/UpdateProduct/UpdateProduct';

import ProductContext from '../ProductContext/ProductContext';

import {formatNumber} from '../Formatador/Formatador'

export const ProductSet = ({product, onOpenModalUpdateProduct, setProduct}) => {
  const {updateProduct, deleteProduct} = useContext(ProductContext);

  function confirmDelete(produto) {
    Alert.alert(
      'Deletar Produto',
      'Voce tem certeza que deseja deleter este produto?',
      [
        {text: 'Cancelar', onPress: () => console.log('Fechado')},
        {text: 'Confirmar', onPress: () => deleteProduct(produto)},
      ],
    );
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.foto}>
          {product.id > 9 ? (
            <Image
              source={{
                uri: 'https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png',
              }}
              style={{width: 100, height: 100}}
            />
          ) : (
            <Image
              source={{
                uri: product.fotoLink,
              }}
              style={{width: 100, height: 100}}
            />
          )}
        </View>
        <View>
          <Text style={styles.nomeProduto}>{product.nome}</Text>
          <Text style={styles.nomeProduto}>{product.nomeCategoria}</Text>
          <Text style={styles.nomeProduto}>R$ {formatNumber(product.valor)}</Text>
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

          <TouchableOpacity onPress={() => confirmDelete(product)}>
            <FeatherIcons name="trash" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
