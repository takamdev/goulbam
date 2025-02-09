import React from 'react';
import { Text, TextInput, View, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface InputLabelProps {
  label: string;
  placeholder?: string;
  onChange:(text:string)=>void;
  value?:string,
  isPassword:boolean
}

const InputLabel: React.FC<InputLabelProps> = ({ label, placeholder,onChange,value,isPassword }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
       secureTextEntry={isPassword}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="gray"
        value={value}
        onChangeText={(text)=>{onChange(text)
        
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "95%",
    margin:10
  } as ViewStyle,
  label: {
    marginBottom: 5,
    fontWeight:"bold",
    fontSize:15
  } as TextStyle,
  input: {
    width: "100%",
    height:50,
    paddingHorizontal:7,
    paddingVertical: 1,
    opacity:.5,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius:10,
    fontSize:18
  } as TextStyle,
});

export default InputLabel;
