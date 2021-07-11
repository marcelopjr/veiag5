import React from 'react';
import {
  View,
  Text,
  TextInput,
  DrawerLayoutAndroidComponent,
} from 'react-native';

export const InputNewProduct = ({
  placeholder,
  value,
  onChange,
  keyboardType,
}) => {
  return (
    <View>
      <TextInput
        value={value}
        keyboardType={keyboardType}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          paddingLeft: 10,
          borderRadius: 5,
          marginHorizontal: 10,
          marginTop: 5,
          borderWidth: 2,
          borderColor: '#6A5ACD',
        }}
      />
    </View>
  );
};
