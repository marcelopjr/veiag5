import React, {useState, useEffect, useContext} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './styles';
import {ProductCard} from '../../components/ProductCard';
import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';

import ProductContext from '../../components/ProductContext/ProductContext';

export const Home = ({navigation}) => {
  const {products, getProductsAtt} = useContext(ProductContext);
  const [update, isUpdate] = useState(false);
  const numColumns = 2;

  const onRefresh = () => {
    getProductsAtt();
  };

  return (
    <>
      <LinearGradient style={{flex: 1}} colors={['#6A5ACD', '#836FFF']}>
        <View style={styles.container}>
          <Header navigation={navigation} />

          <View style={styles.body}>
            <FlatList
              data={products}
              renderItem={({item}) => <ProductCard product={item} />}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              numColumns={numColumns}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              refreshing={update}
              onRefresh={() => getProductsAtt()}
            />
          </View>

          <Footer navigation={navigation} />
        </View>
      </LinearGradient>
    </>
  );
};
