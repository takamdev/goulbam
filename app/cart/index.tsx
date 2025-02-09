import React, { useState } from 'react'
import {  StatusBar, Text, View } from 'react-native'
import {  Icon} from '@rneui/themed';
import { Link } from 'expo-router';
function index() {
  const [value,setValue]=useState('')
  


  return (
   <View>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View className='flex flex-row justify-end my-5 px-3'>      
        <Link style={{backgroundColor:"#7cc425"}} className='text-sm text-white p-3 rounded-md' href="/map">Suivre des commandes</Link>
      </View>
   </View>
  )
}

export default index

