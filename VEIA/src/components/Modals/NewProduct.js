import React, {useContext, useState} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Modalize } from "react-native-modalize";

import { InputNewProduct } from '../Inputs/InputNewProduct';

export const NewProduct = ({modalizeRef}) => {
  const [nomeProduto, setnomeProduto] = useState("");
  const [nomeCategoria, setnomeCategoria] = useState("");
  const [price, setPrice] = useState(0);
  
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
                  placeholder={"Categoria"}
                  value={nomeCategoria}
                  onChange={e => setnomeCategoria(e.nativeEvent.text)}
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
              <TouchableOpacity style={{backgroundColor:'#999'}}>
                <Text >
                  CADASTRAR PRODUTO
                </Text>
              </TouchableOpacity>
            </Modalize>
    </>
  )
}
