import React, {useContext, useState, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {Picker} from '@react-native-picker/picker';

import {Modalize} from 'react-native-modalize';

import {InputNewProduct} from '../../Inputs/InputNewProduct';

import CategoriaService from '../../../services/CategoriaService';
import FuncionarioService from '../../../services/FuncionarioService';

import ProductContext from '../../ProductContext/ProductContext';

import {styles} from './styles';
import {Formik} from 'formik';
import * as yup from 'yup';

export const NewProduct = ({modalizeRef}) => {
  const {newProduct} = useContext(ProductContext);
  const [categoria, setCategoria] = useState([]);
  const categoriaService = new CategoriaService();
  const [funcionario, setFuncionario] = useState([]);
  const funcionarioService = new FuncionarioService();

  const [nomeProduto, setNomeProduto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [qtdEstoque, setQtdEstoque] = useState('');
  const [price, setPrice] = useState('');
  const [idCategoria, setIdCategoria] = useState('');
  const [idFuncionario, setIdFuncionario] = useState('');

  function resetValues() {
    setNomeProduto('');
    setDescricao('');
    setQtdEstoque('');
    setPrice('');
    setIdCategoria('');
    setIdFuncionario('');
  }

  const validations = yup.object().shape({
    nomeProduto: yup
      .string()
      .min(5, 'Nome deve conter 5 ou mais caracteres')
      .max(60, 'Nome deve conter 60 ou menos caracteres')
      .required('Informe o nome'),
    descricao: yup
      .string()
      .min(5, 'A descrição deve conter 10 ou mais caracteres')
      .max(60, 'Nome deve conter 100 ou menos caracteres')
      .required('Informe a descricao'),
    qtdEstoque: yup
      .number('Somente numero permetido')
      .min(1, 'Quantidade Minina de 1')
      .max(10000, 'Quantidade maxima excedida')
      .required('Insira a quantidae do produto em estoque'),
    price: yup
      .number('Somente numero permetido')
      .min(1, 'Quantidade Minina de 1')
      .max(1000000000, 'Quantidade maxima excedida')
      .required('Insira o valor em reais do produto'),
    idCategoria: yup.string().required('Escolha uma categoria'),
    idFuncionario: yup.string().required('Escolha um funcionario'),
  });

  useEffect(() => {
    categoriaService.getCategoria().then(data => setCategoria(data));
    funcionarioService.getFuncionario().then(data => setFuncionario(data));
  }, []);

  const novoProduto = values => {
    const data = {
      nome: values.nomeProduto,
      descricao: values.descricao,
      qtdEstoque: parseInt(values.qtdEstoque),
      valor: parseFloat(values.price),
      idCategoria: parseInt(values.idCategoria),
      idFuncionario: parseInt(values.idFuncionario),
      dataFabricacao: '2019-10-01T00:00:00Z',
    };

    newProduct(data);
    resetValues();
    modalizeRef.current?.close();
  };

  function registerProduct() {
    console.log('gg r');
  }

  return (
    <>
      <Modalize
        ref={modalizeRef}
        modalHeight={620}
        handleStyle={{backgroundColor: '#6A5ACD'}}
        handlePosition={'inside'}
        modalStyle={{
          backgroundColor: '#F0F2F5',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          padding: 30,
        }}>
        <Formik
          enableReinitialize
          validationSchema={validations}
          onSubmit={values => novoProduto(values)}
          initialValues={{
            nomeProduto,
            descricao,
            qtdEstoque,
            price,
            idCategoria,
            idFuncionario,
          }}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View>
              <Text style={styles.titleModal}>Cadastrar um novo Produto</Text>

              <View style={{marginBottom: 8}}>
                <View style={styles.viewNames}>
                  <Text style={styles.fieldName}>Nome:</Text>
                  {errors.nomeProduto && (
                    <Text style={styles.msgError}> {errors.nomeProduto}</Text>
                  )}
                </View>

                <InputNewProduct
                  onChangeText={handleChange('nomeProduto')}
                  onBlur={handleBlur('nomeProduto')}
                  onChange={e => setNomeProduto(e.nativeEvent.text)}
                />
              </View>

              <View style={{marginBottom: 8}}>
                <View style={styles.viewNames}>
                  <Text style={styles.fieldName}>Descricao:</Text>
                  {errors.descricao && (
                    <Text style={styles.msgError}> {errors.descricao}</Text>
                  )}
                </View>

                <InputNewProduct
                  onChangeText={handleChange('descricao')}
                  onBlur={handleBlur('descricao')}
                  onChange={e => setDescricao(e.nativeEvent.text)}
                />
              </View>

              <View style={{marginBottom: 8}}>
                <View style={styles.viewNames}>
                  <Text style={styles.fieldName}>Estoque:</Text>
                  {errors.qtdEstoque && (
                    <Text style={styles.msgError}> {errors.qtdEstoque}</Text>
                  )}
                </View>

                <InputNewProduct
                  onChangeText={handleChange('qtdEstoque')}
                  onBlur={handleBlur('qtdEstoque')}
                  onChange={e => setQtdEstoque(e.nativeEvent.text)}
                  keyboardType={'numeric'}
                />
              </View>
              <View style={{marginBottom: 8}}>
                <View style={styles.viewNames}>
                  <Text style={styles.fieldName}>Valor R$:</Text>
                  {errors.price && (
                    <Text style={styles.msgError}> {errors.price}</Text>
                  )}
                </View>
                <InputNewProduct
                  onChangeText={handleChange('price')}
                  onBlur={handleBlur('price')}
                  onChange={e => setPrice(e.nativeEvent.text)}
                  keyboardType={'numeric'}
                />
              </View>

              <View style={{marginBottom: 8}}>
                <View style={styles.viewNames}>
                  <Text style={styles.fieldName}></Text>
                  {errors.idCategoria && (
                    <Text style={styles.msgError}> {errors.idCategoria}</Text>
                  )}
                </View>
                <Picker
                  selectedValue={idCategoria}
                  style={{height: 50, width: '100%'}}
                  onValueChange={(itemValue, itemIndex) =>
                    setIdCategoria(itemValue)
                  }>
                  <Picker.Item label="SELECIONE UMA CATEGORIA" value="" />
                  {categoria.map(item => {
                    return (
                      <Picker.Item
                        label={item.nome}
                        value={item.id}
                        key={item.id}
                      />
                    );
                  })}
                </Picker>
              </View>
              <View style={{marginBottom: 8}}>
                <View style={styles.viewNames}>
                  <Text style={styles.fieldName}></Text>
                  {errors.idFuncionario && (
                    <Text style={styles.msgError}> {errors.idFuncionario}</Text>
                  )}
                </View>
                <Picker
                  selectedValue={idFuncionario}
                  style={{height: 50, width: '100%', borderWidth: 1}}
                  onValueChange={(itemValue, itemIndex) =>
                    setIdFuncionario(itemValue)
                  }>
                  <Picker.Item label="SELECIONE UM FUNCIONARIO" value="" />
                  {funcionario.map(item => {
                    return (
                      <Picker.Item
                        label={item.nome}
                        value={item.id}
                        key={item.id}
                      />
                    );
                  })}
                </Picker>
              </View>

              <View style={styles.viewBtn}>
                <TouchableOpacity
                  style={styles.btnCadastrar}
                  onPress={handleSubmit}>
                  <Text style={{fontSize: 15}}>CADASTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.btnCancelar}
                  onPress={() => {
                    modalizeRef.current?.close();
                    resetValues();
                  }}>
                  <Text style={{fontSize: 15}}>CANCELAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </Modalize>
    </>
  );
};
