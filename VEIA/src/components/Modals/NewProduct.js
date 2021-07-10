import React, {useContext, useState} from 'react';
import {Text, TouchableOpacity, View, Alert} from 'react-native';

import {Modalize} from 'react-native-modalize';

import {InputNewProduct} from '../Inputs/InputNewProduct';

import ProductService from '../../services/ProductService';

import ProductContext from '../ProductContext/ProductContext';

export const NewProduct = ({modalizeRef}) => {
  const {newProduct} = useContext(ProductContext);
  const [nomeProduto, setnomeProduto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [qtdEstoque, setQtdEstoque] = useState('');
  const [price, setPrice] = useState('');
  const [idCategoria, setidCategoria] = useState('');
  const [idFuncionario, setidFuncionario] = useState('');

  const handleSubmit = () => {
    const data = {
      nome: nomeProduto,
      descricao: descricao,
      qtdEstoque: parseInt(qtdEstoque),
      valor: parseFloat(price),
      idCategoria: parseInt(idCategoria),
      idFuncionario: parseInt(idFuncionario),
      dataFabricacao: '2019-10-01T00:00:00Z',
    };
    if (
      data.nome === '' &&
      data.descricao === '' &&
      data.qtdEstoque === '' &&
      data.valor === '' &&
      data.idCategoria === '' &&
      data.idFuncionario === ''
    ) {
      alert('Preencha os campos!');
    } else {
      newProduct(data);
    }
    modalizeRef.current?.close();
  };

  return (
    <>
      <Modalize ref={modalizeRef}>
        <View style={{marginBottom: 8}}>
          <InputNewProduct
            placeholder={'Nome do Produto'}
            // value={nomeProduto}
            onChange={e => setnomeProduto(e.nativeEvent.text)}
          />
        </View>
        <View style={{marginBottom: 8}}>
          <InputNewProduct
            placeholder={'Descricao'}
            // value={descricao}
            onChange={e => setDescricao(e.nativeEvent.text)}
          />
        </View>
        <View style={{marginBottom: 8}}>
          <InputNewProduct
            placeholder={'Quantidade em estoque'}
            keyboardType={'numeric'}
            // value={qtdEstoque.toString()}
            onChange={e => setQtdEstoque(e.nativeEvent.text)}
          />
        </View>
        <View style={{marginBottom: 8}}>
          <InputNewProduct
            placeholder={'Preco'}
            keyboardType={'numeric'}
            // value={price.toString()}
            onChange={e => setPrice(e.nativeEvent.text)}
          />
        </View>
        <View style={{marginBottom: 8}}>
          <InputNewProduct
            placeholder={'id Categoria'}
            keyboardType={'numeric'}
            // value={idCategoria.toString()}
            onChange={e => setidCategoria(e.nativeEvent.text)}
          />
        </View>
        <View style={{marginBottom: 8}}>
          <InputNewProduct
            placeholder={'id Funcionario'}
            keyboardType={'numeric'}
            // value={idFuncionario.toString()}
            onChange={e => setidFuncionario(e.nativeEvent.text)}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#F4A460',
            alignItems: 'center',
            width: 200,
            borderRadius: 7,
            marginTop: 10,
            alignSelf: 'center',
            paddingVertical: 5,
          }}
          onPress={() => handleSubmit()}>
          <Text style={{fontSize: 15}}>CADASTRAR PRODUTO</Text>
        </TouchableOpacity>
      </Modalize>
    </>
  );
};
