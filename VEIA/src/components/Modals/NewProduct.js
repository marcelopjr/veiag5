import React, {useContext, useState, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {Picker} from '@react-native-picker/picker';

import {Modalize} from 'react-native-modalize';

import {InputNewProduct} from '../Inputs/InputNewProduct';

import CategoriaService from '../../services/CategoriaService';
import FuncionarioService from '../../services/FuncionarioService';

import ProductContext from '../ProductContext/ProductContext';

export const NewProduct = ({modalizeRef}) => {
  const {newProduct} = useContext(ProductContext);
  const [categoria, setCategoria] = useState([]);
  const categoriaService = new CategoriaService();
  const [funcionario, setFuncionario] = useState([]);
  const funcionarioService = new FuncionarioService();
  const [nomeProduto, setnomeProduto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [qtdEstoque, setQtdEstoque] = useState('');
  const [price, setPrice] = useState('');
  const [idCategoria, setidCategoria] = useState('');
  const [idFuncionario, setidFuncionario] = useState('');

  function resetValues() {
    setnomeProduto('');
    setDescricao('');
    setQtdEstoque('');
    setPrice('');
    setidCategoria('');
    setidFuncionario('');
  }

  useEffect(() => {
    categoriaService.getCategoria().then(data => setCategoria(data));
    funcionarioService.getFuncionario().then(data => setFuncionario(data));
  }, []);

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
      nomeProduto === '' ||
      descricao === '' ||
      qtdEstoque === '' ||
      price === '' ||
      idCategoria === '' ||
      idFuncionario === ''
    ) {
      alert('Preencha os campos!');
    } else {
      newProduct(data);
      resetValues();

      modalizeRef.current?.close();
    }
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
          {/* <InputNewProduct
            placeholder={'id Categoria'}
            keyboardType={'numeric'}
            // value={idCategoria.toString()}
            onChange={e => setidCategoria(e.nativeEvent.text)}
          /> */}
          <Picker
            selectedValue={idCategoria}
            style={{height: 50, width: '100%'}}
            onValueChange={(itemValue, itemIndex) => setidCategoria(itemValue)}>
            <Picker.Item label="SELECIONE UMA CATEGORIA" value="" />
            {categoria.map(item => {
              return (
                <Picker.Item label={item.nome} value={item.id} key={item.id} />
              );
            })}
          </Picker>
        </View>
        <View style={{marginBottom: 8}}>
          {/* <InputNewProduct
            placeholder={'id Funcionario'}
            keyboardType={'numeric'}
            // value={idFuncionario.toString()}
            onChange={e => setidFuncionario(e.nativeEvent.text)}
          /> */}

          <Picker
            selectedValue={idFuncionario}
            style={{height: 50, width: '100%'}}
            onValueChange={(itemValue, itemIndex) =>
              setidFuncionario(itemValue)
            }>
            <Picker.Item label="SELECIONE UM FUNCIONARIO" value="" />
            {funcionario.map(item => {
              return (
                <Picker.Item label={item.nome} value={item.id} key={item.id} />
              );
            })}
          </Picker>
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
