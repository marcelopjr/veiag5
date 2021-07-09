import React, {useContext, useState} from 'react';
import { Text, TouchableOpacity, View, Alert, DatePickerAndroid } from 'react-native';

import { Modalize } from "react-native-modalize";

import { InputNewProduct } from '../Inputs/InputNewProduct';

import ProductService from '../../services/ProductService'


import DatePicker from 'react-native-date-picker'
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

export const NewProduct = ({modalizeRef}) => {
  const productService = new ProductService();
  const [nomeProduto, setnomeProduto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [qtdEstoque, setQtdEstoque] = useState("");
  const [price, setPrice] = useState("");
  const [idCategoria, setidCategoria] = useState("");
  const [idFuncionario, setidFuncionario] = useState("");

  const handleSubmit = () => {

    const data = {
      nome: nomeProduto,
      descricao: descricao,
      qtdEstoque: parseInt(qtdEstoque),
      valor: parseFloat(price),
      idCategoria: parseInt(idCategoria),
      idFuncionario: parseInt(idFuncionario),
      dataFabricacao: '2021-07-09T20:40:31.849Z',
    }
    productService.createProduto(data).then(resp => console.log(resp))
}

  return (
    <>
            <Modalize
              ref={modalizeRef}
            >
              <View style={{ marginBottom: 8 }}>
                <InputNewProduct
                  placeholder={"Nome do Produto"}
                  value={nomeProduto}
                  onChange={e => setnomeProduto(e.nativeEvent.text)}
                />
              </View>
              <View style={{ marginBottom: 8 }}>
                <InputNewProduct
                  placeholder={"Descricao"}
                  value={descricao}
                  onChange={e => setDescricao(e.nativeEvent.text)}
                />
              </View>
              <View style={{ marginBottom: 8 }}>
                <InputNewProduct
                  placeholder={"Quantidade em estoque"}
                  keyboardType={"numeric"}
                  value={qtdEstoque.toString()}
                  onChange={e => setQtdEstoque(e.nativeEvent.text)}
                />
              </View>
              <View style={{ marginBottom: 8 }}>
                <InputNewProduct
                  placeholder={"Preco"}
                  keyboardType={"numeric"}
                  value={price.toString()}
                  onChange={e => setPrice(e.nativeEvent.text)}
                />
              </View>
              <View style={{ marginBottom: 8 }}>
                <InputNewProduct
                  placeholder={"id Categoria"}
                  keyboardType={"numeric"}
                  value={idCategoria.toString()}
                  onChange={e => setidCategoria(e.nativeEvent.text)}
                />
              </View>
              <View style={{ marginBottom: 8 }}>
                <InputNewProduct
                  placeholder={"id Funcionario"}
                  keyboardType={"numeric"}
                  value={idFuncionario.toString()}
                  onChange={e => setidFuncionario(e.nativeEvent.text)}
                />
              </View>
              
              <TouchableOpacity 
                style={{
                  backgroundColor:'#F4A460',
                  alignItems:'center',
                  width:200,
                  borderRadius:7,
                  marginTop:10,
                  alignSelf:'center',
                  paddingVertical:5,
                }}       
                onPress={() => handleSubmit()}       
              >
                <Text style={{fontSize:15}}>
                  CADASTRAR PRODUTO
                </Text>
              </TouchableOpacity>
            </Modalize>
    </>
  )
}
