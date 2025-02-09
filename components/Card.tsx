import React, { useState } from 'react'
import {  Text, View } from 'react-native'

import { Image } from 'react-native';
import { Button } from '@rneui/themed';
interface props {
    img:any
    prize:string
    desc:string
}

const Card: React.FC<props> = ({ img,prize,desc }) => {


  
 return (
   <View className='w-full relative h-full'>
        <Image
        style={{height:180}}
         className='w-full'
         source={img}
         />
     <Text style={{padding:5}}>
      {
        desc
      }
     </Text>

     <View style={{marginTop:30}} className='flex w-full flex-row justify-between items-center'>
        <Text className='font-bold text-2xl'>
           {prize}$
        </Text>

        <Button size='sm'   style={{borderRadius:25}} title="Ajouter au panier" color="success"/>
     </View>
   </View>
  )
}

export default Card

