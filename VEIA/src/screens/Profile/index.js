import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Header} from '../../components/Header';

import {Footer} from '../../components/Footer';

import {styles} from './styles';

export const Profile = ({navigation}) => {
  return (
    <>
      <LinearGradient style={{flex: 1}} colors={['#6A5ACD', '#836FFF']}>
        <View style={styles.container}>
          <Header navigation={navigation} />
          <View style={styles.body}>
            <Text>PERFILZIM AE PAE!</Text>
          </View>
          <Footer navigation={navigation} />
        </View>
      </LinearGradient>
    </>
  );
};
