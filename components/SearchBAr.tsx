

import React, { Fragment } from 'react';
import {  TextInput, View, StyleSheet, TextStyle } from 'react-native';
import {  Icon} from '@rneui/themed';
interface InputLabelProps {

  onChange:(text:string)=>void;
  value?:string
}

const SearchBAr: React.FC<InputLabelProps> = ({ onChange,value }) => {
  return (
    <View className='w-full '>
      <TextInput
        style={styles.input}
        placeholder="search food"
        placeholderTextColor="gray"
        value={value}
        onChangeText={(text)=>{onChange(text)
        
        }}
      />
      <View className='flex flex-row  w-full'>
        
        <Icon style={{paddingStart:10,paddingTop:10,opacity:.5}}   name="search" size={40} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  input: {
    width: "100%",
    height:60,
    paddingStart:50,
    paddingHorizontal:7,
    paddingVertical: 1,
    opacity:.5,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius:10,
    fontSize:18,
    position:"absolute"
  } as TextStyle,
});

export default SearchBAr;
