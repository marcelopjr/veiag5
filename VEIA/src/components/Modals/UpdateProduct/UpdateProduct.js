import React, {useState, useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {styles} from './styles';

import ProductContext from '../../ProductContext/ProductContext';

import {InputNewProduct} from '../../Inputs/InputNewProduct';
import {Modalize} from 'react-native-modalize';
import {Formik} from 'formik';
import * as yup from 'yup';

import ProductService from '../../../services/ProductService';

export const UpdateProduct = ({modalizeRef, product}) => {
  const {updateProduct} = useContext(ProductContext);
  const [nomeProduto, setNomeProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
  const [qtdEstoqueProduto, setQtdEstoqueProduto] = useState('');
  const [valorProduto, setValorProduto] = useState('');
  const [produto, setProduto] = useState();
  const produtoService = new ProductService();

  function resetValues() {
    setNomeProduto('');
    setDescricaoProduto('');
    setQtdEstoqueProduto('');
    setValorProduto('');
  }

  function atualizarProduto(values) {
    const data = {
      nome: values.nomeProduto ? values.nomeProduto : product.nome,
      descricao: values.descricaoProduto
        ? values.descricaoProduto
        : product.descricao,
      qtdEstoque: values.qtdEstoqueProduto
        ? parseInt(values.qtdEstoqueProduto)
        : product.qtdEstoque,
      valor: values.valorProduto
        ? parseFloat(values.valorProduto)
        : product.valor,
      idCategoria: parseInt(product.idCategoria),
      idFuncionario: parseInt(product.idFuncionario),
      dataFabricacao: product.dataFabricacao,
    };

    updateProduct(data, product.id);
    resetValues();
    modalizeRef.current?.close();

    // console.log(data, product.id);
  }

  const validations = yup.object().shape({
    nomeProduto: yup
      .string()
      .min(5, 'Nome deve conter 5 ou mais caracteres')
      .max(60, 'Nome deve conter 60 ou menos caracteres'),
    descricaoProduto: yup
      .string()
      .min(5, 'A descrição deve conter 10 ou mais caracteres')
      .max(60, 'Nome deve conter 100 ou menos caracteres'),
    qtdEstoqueProduto: yup
      .number('Somente numero permetido')
      .min(1, 'Quantidade Minina de 1')
      .max(10000, 'Quantidade maxima excedida'),
    valorProduto: yup
      .number('Somente numero permetido')
      .min(1, 'Quantidade Minina de 1')
      .max(1000000000, 'Quantidade maxima excedida'),
  });

  return (
    <>
      <Modalize
        ref={modalizeRef}
        handleStyle={{backgroundColor: '#6A5ACD'}}
        handlePosition={'inside'}
        modalHeight={450}
        modalStyle={styles.modalStyle}>
        <Formik
          enableReinitialize
          validationSchema={validations}
          onSubmit={values => atualizarProduto(values)}
          initialValues={{
            nomeProduto,
            descricaoProduto,
            qtdEstoqueProduto,
            valorProduto,
          }}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View style={{}}>
              <Text style={styles.titleModal}>
                Preencha o campo que voce deseja alterar
              </Text>
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
                  placeholder={product ? product.nome : 'Nome Produto'}
                />
              </View>

              <View style={{marginBottom: 8}}>
                <View style={styles.viewNames}>
                  <Text style={styles.fieldName}>Descricao:</Text>
                  {errors.descricaoProduto && (
                    <Text style={styles.msgError}>
                      {' '}
                      {errors.descricaoProduto}
                    </Text>
                  )}
                </View>

                <InputNewProduct
                  onChangeText={handleChange('descricaoProduto')}
                  onBlur={handleBlur('descricaoProduto')}
                  onChange={e => setDescricaoProduto(e.nativeEvent.text)}
                  placeholder={
                    product ? product.descricao : 'Descricao Produto'
                  }
                />
              </View>

              <View style={{marginBottom: 8}}>
                <View style={styles.viewNames}>
                  <Text style={styles.fieldName}>Estoque:</Text>
                  {errors.qtdEstoqueProduto && (
                    <Text style={styles.msgError}>
                      {' '}
                      {errors.qtdEstoqueProduto}
                    </Text>
                  )}
                </View>

                <InputNewProduct
                  onChangeText={handleChange('qtdEstoqueProduto')}
                  onBlur={handleBlur('qtdEstoqueProduto')}
                  onChange={e => setQtdEstoqueProduto(e.nativeEvent.text)}
                  placeholder={
                    product ? product.qtdEstoque.toString() : 'Nome Produto'
                  }
                  keyboardType={'numeric'}
                />
              </View>
              <View style={{marginBottom: 8}}>
                <View style={styles.viewNames}>
                  <Text style={styles.fieldName}>Valor:</Text>
                  {errors.valorProduto && (
                    <Text style={styles.msgError}> {errors.valorProduto}</Text>
                  )}
                </View>
                <InputNewProduct
                  onChangeText={handleChange('valorProduto')}
                  onBlur={handleBlur('valorProduto')}
                  onChange={e => setValorProduto(e.nativeEvent.text)}
                  placeholder={
                    product ? product.valor.toString() : 'Valor Produto'
                  }
                  keyboardType={'numeric'}
                />
              </View>
              <View style={styles.viewBtn}>
                <TouchableOpacity
                  style={styles.btnCadastrar}
                  onPress={handleSubmit}>
                  <Text style={{fontSize: 15}}>ATUALIZAR</Text>
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
