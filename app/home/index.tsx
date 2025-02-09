import React, { useRef, useState } from 'react'
import {  StatusBar, Text, View } from 'react-native'
import {  Icon} from '@rneui/themed';
import SearchBAr from '@/components/SearchBAr';
import { Link } from "expo-router";
import { SelectList } from 'react-native-dropdown-select-list'
import { Image } from 'react-native';
import Card from '@/components/Card';
import { ScrollView} from 'react-native';
function index() {
  const [value,setValue]=useState('')
  const [selected, setSelected] = React.useState("");
  const food_cat = [
    {key:'1', value:'Fruit'},
    {key:'2', value:'cat2'},
    {key:'3', value:'cat3'},
    
]
// scroll to top
const scrollViewRef = useRef<ScrollView>(null);

const scrollToTop = () => {
  scrollViewRef.current?.scrollTo({
    y: 0,
    animated: true,
  });
};
const data = [
  {
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, commodi?",
    prize:"150",
    img:"images/food_23.png"
  },
  {
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, commodi?",
    prize:"150",
    img:"images/food_23.png"
  },
  {
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, commodi?",
    prize:"150",
    img:"images/food_23.png"
  },
  {
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, commodi?",
    prize:"150",
    img:"images/food_23.png"
  },
  {
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, commodi?",
    prize:"150",
    img:"images/food_23.png"
  }
]
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />

     <View>
    {/** header start */}
     <View className='flex flex-row justify-between align-items-center  px-5 pt-5 w-screen'>
      <Link href="/settings"><Icon name="account-circle" size={40} /></Link>
      <Text className='text-xl font-semibold'>Les meilleurs plats</Text>

      <View className='relative'>
        <Link href='/cart'> <Icon name="shopping-cart"  className='text-slate-300' color='#cbd5e1' size={40} /></Link>
         <Text className='absolute text-white bg-red-600 rounded-full px-1 font-semibold right-0 -top-2'>0</Text>
      </View>
     </View>
   {/** header end */}

 {/** searchbar start */}

     <View className='flex flex-row justify-between align-items-center  px-5 my-4 w-screen'>
       <SearchBAr value={value} onChange={(text)=>{setValue(text)}}/>
     </View>
  {/** searchbar end */}


   {/** filter section start */}

    <View className='flex flex-row justify-between align-items-center  px-5 py-5 w-screen'>
     
     <Text>
     <Image 
        source={require('@/assets/icons/widgets_24dp.png')} 
        style={{
          width: 40,
          height: 40,
        }} 
      />
     
     <Image 
        source={require('@/assets/icons/widget_small_24dp.png')} 
        style={{
          width: 40,
          height: 40,
        }} 
      />
     </Text>


      <SelectList 
          placeholder='Filtre'
          setSelected={(val:string) => setSelected(val)} 
          data={food_cat} 
          save="value"
      />
    </View>
  {/** filter section end */}








   </View>

      {/** product section start */}
      <ScrollView key="product" ref={scrollViewRef}>

      {
        data.map((item,index)=>{
          return (
            <View key={index} style={{
              height: 330,
              marginLeft:10,
              marginRight:10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Card  prize={item.prize} desc={item.desc} img={require('./../../assets/images/food_1.png')}/>
          </View>

          )
        })
      }
    

<View className=' bg-green-500' style={{height: 300}}>
              
  <Text className='text-white ms-auto text-2xl px-10 pt-10' onPress={scrollToTop}>To top</Text>
  <View className='flex flex-row justify-between mt-4 border-t border-white px-10 pt-5'>
    <Link href="https://facebook.com"> <Image source={require('@/assets/icons/facebook.png')} style={{width: 40,height: 40}} /></Link>
    <Link href="https://x.com"> <Image source={require('@/assets/icons/twitter.png')} style={{width: 40,height: 40}} /></Link>
    <Link href="https://www.instagram.com/"> <Image source={require('@/assets/icons/insta.png')} style={{width: 40,height: 40}} /></Link>
    <Link href="https://youtube.com"> <Image source={require('@/assets/icons/youtube.png')} style={{width: 40,height: 40}} /></Link>
  </View>
  <Text className='text-white text-lg  mt-5 px-5'>
    <Link href="/settings">imprint/privacy</Link><View style={{ width: 1 }} /> | <View style={{ width: 1 }} />
    <Link href="/settings">termes/conditions</Link> 
    <View style={{ width: 1 }} />| <Link href="/settings">feedback</Link>
  </Text>
</View>


   </ScrollView>
  
  {/** product section end */}









    </>
  
  )
}

export default index

