import React, {useContext} from 'react';
import {Text, View, Image} from 'react-native';

import {styles} from './styles';

import {ButtonAddCart} from '../Buttons/ButtonAddCart';

import CartContext from '../CartContext/CartContext';

export const ProductCard = ({product}) => {
  const {addProduct} = useContext(CartContext);
  const amount = 1;

  const productCart = {
    id: product.id,
    nome: product.nome,
    descricao: product.descricao,
    valor: product.valor,
    idCategoria: product.idCategoria,
    nomeCategoria: product.nomeCategoria,
    idFuncionario: product.idFuncionario,
    nomeFuncionario: product.nomeFuncionario,
    qtdEstoque: product.qtdEstoque,
    dataFabricacao: product.dataFabricacao,
    fotoLink: product.fotoLink,
    amount: 1,
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.foto}>
          {product.fotoLink === null ? (
            <Image
              source={{
                uri: 'https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png',
              }}
              style={{height: '100%', width: '100%'}}
            />
          ) : (
            <Image
              source={{
                uri: product.fotoLink,
              }}
              style={{height: '100%', width: '100%'}}
            />
          )}

          {/* <Image
            source={{
              uri: product.fotoLink,
            }}
            style={{height: '100%', width: '100%'}}
          /> */}
        </View>

        <View>
          <Text style={styles.nomeProduto}>{product.nome}</Text>

          <Text style={styles.categoriaProduto}>{product.nomeCategoria}</Text>

          <Text style={styles.precoProduto}>R$ {product.valor}</Text>
        </View>

        <ButtonAddCart onPress={() => addProduct(productCart, amount)} />
      </View>
    </>
  );
};
