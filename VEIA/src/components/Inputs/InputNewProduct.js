import React from 'react';
import { View, Text, TextInput, DrawerLayoutAndroidComponent } from 'react-native';

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
                    backgroundColor: '#DAA520',
                    paddingLeft: 10,
                    borderRadius: 5,
                    marginHorizontal: 10,
                    marginTop: 5,
                  }}
            />
        </View>
    );
};