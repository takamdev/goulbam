import React, { useState } from 'react'
import {  Text, View } from 'react-native'
import {  Icon} from '@rneui/themed';
import SearchBAr from '@/components/SearchBAr';
import { Link } from 'expo-router';

function index() {
  const [value,setValue]=useState('')
  return (
   <View>
    {/** header start */}
     <View className='flex flex-row justify-between align-items-center  px-5 py-5 w-screen'>
      <Link href="/settings"><Icon name="account-circle" size={40} /></Link>
      <Text className='text-2xl font-semibold'>Les meilleur plats</Text>

      <View className='relative'>
         <Icon name="shopping-cart" className='text-slate-300' color='#cbd5e1' size={40} />
         <Text className='absolute text-white bg-red-600 rounded-full px-1 font-semibold right-0 -top-2'>0</Text>
      </View>
     </View>
   {/** header end */}

 {/** searchbar start */}

     <View className='flex flex-row justify-between align-items-center  px-5 py-5 w-screen'>
       <SearchBAr value={value} onChange={(text)=>{setValue(text)}}/>
     </View>
  {/** searchbar end */}


   </View>
  )
}

export default index


// modal cart

import {Alert, Modal, StyleSheet, Pressable} from 'react-native';

const Modal_comp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });