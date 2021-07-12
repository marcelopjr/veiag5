import React, {useContext, useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import {Modalize} from 'react-native-modalize';
import { InputNewProduct } from '../../Inputs/InputNewProduct';
import { styles } from '../FindById/styles';

import ProductService from '../../../services/ProductService';

export const FindById = ({modalizeRef, product}) => {
  const [idProduto, setIdProduto] = useState();
  const [produto, setProduto] = useState();
  const productService = new ProductService();

  function resetValues() {
    setIdProduto();
    setProduto();
  }

  function acharProduto(id) {
    productService.getProdutoById(id).then(res => setProduto(res)).catch(Error => alert('Produto não encontrado')) 
  }

  return (
      <Modalize 
      ref={modalizeRef}
        modalHeight={500}
        handleStyle={{backgroundColor: '#6A5ACD'}}
        handlePosition={'inside'}
        modalStyle={{
          backgroundColor: '#F0F2F5',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          padding: 30,
        }}>
        <View>
          <Text style={styles.titleModal}>Procurar produto pelo ID</Text>

          <View>
            <InputNewProduct
                  value={idProduto}
                  //onChangeText={handleChange('idProduto')}
                  keyboardType={'numeric'}
                  onChange={e => setIdProduto(e.nativeEvent.text)}
                  placeholder={'Id'}
            />
            <View style={styles.viewBtn}>
              <TouchableOpacity
                style={styles.btnProcurar}
                onPress={() => {
                  acharProduto(idProduto);
                  resetValues();
                }}>
                <Text>PROCURAR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnCancelar}
                onPress={() => {
                  modalizeRef.current?.close();
                  resetValues();
                }}>
                <Text>CANCELAR</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View style= {styles.prod}>
            {produto? 
            <>
              <Image
                source={{
                  uri: produto.fotoLink,
                }}
                style={styles.image}
              />
              <Text style={styles.nomeProduto}>{produto.nome}</Text>
              <Text style={styles.descricao}>{produto.descricao}</Text>
              <Text style={styles.valor}>R$ {produto.valor}</Text>
            </>:
            null}
          </View>
          

        </View>
          
      </Modalize>
    );
};

