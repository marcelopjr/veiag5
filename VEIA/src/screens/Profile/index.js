import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Header} from '../../components/Header';

import {Footer} from '../../components/Footer';

import { InputLogin } from '../../components/Inputs/InputLogin'; 

import {styles} from './styles';
import { color } from 'react-native-reanimated';

import IoniconsIcons from 'react-native-vector-icons/Ionicons';

export const Profile = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <LinearGradient style={{flex: 1}} colors={['#6A5ACD', '#836FFF']}>
        <View style={styles.container}>
          <Header navigation={navigation} />
          <View style={styles.body}>
            <View style={styles.icon}>
              <IoniconsIcons name="person-outline" size={150} color={'#000'} />
            </View>
          
          <TextInput
            style={{
              backgroundColor: 'white',
              height:'7%',
              width: '80%',
              borderRadius: 5,
              borderColor: 'black',
              borderWidth: 1,
              marginBottom: 20,
              paddingLeft: 10
            }}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.nativeEvent.text)}
          />
          <TextInput
            style={{
              backgroundColor: 'white',
              height:'7%',
              width: '80%',
              borderRadius: 5,
              borderColor: 'black',
              borderWidth: 1,
              marginBottom: 20,
              paddingLeft: 10
            }}
            placeholder="Password"
            onChange={(e) => setPassword(e.nativeEvent.text)}
            value={password}
          />  
            <TouchableOpacity style={styles.btnLogin}>
              <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLogin}>
              <Text>Esqueci a senha</Text>
            </TouchableOpacity>
          </View>
          <Footer navigation={navigation} />
        </View>
      </LinearGradient>
    </>
  );
};
