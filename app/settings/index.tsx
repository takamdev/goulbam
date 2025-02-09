import { Icon } from '@rneui/themed'
import { Link } from 'expo-router';
import React from 'react'
import { StatusBar, Text } from 'react-native'
import { View } from 'react-native'
import { Image } from 'react-native';

function index() {
  return (
   <View>
  <StatusBar barStyle="dark-content" backgroundColor="#fff" />

     {/** avatar user section start */}
     <View className='flex flex-col justify-center items-center mt-5'>
       <Icon name="account-circle" size={100} />
       <Text className='text-2xl font-bold'>Loic Dev  
       </Text>
     </View>
          {/** avatar user section end */}

    {/** Account setting  section start */}
     <View className='p-3 mt-10'>
         <Text className='text-xl   font-bold'>Account Settings</Text>

         <View className='mt-5 mx-3 flex flex-col gap-5'>
            <View className='flex flex-row w-full justify-between border-b border-slate-300'>
                <View className='flex flex-row items-center'>
                <Icon name="person" size={40} />
                <Text className='text-xl font-bold'>Account Settings</Text>
                </View>
                <Image source={require('@/assets/icons/chevron.png')} style={{width: 40,height: 40}} />
            </View>

            <View className='flex flex-row justify-between border-b border-slate-300'>
                <View className='flex flex-row items-center'>
                <Icon name="wallet" size={40} />
                <Text className='text-xl font-bold'>Payments and Payouts</Text>
                </View>
                <Image source={require('@/assets/icons/chevron.png')} style={{width: 40,height: 40}} />
            </View>

            <View className='flex flex-row justify-between border-b border-slate-300'>
                <View className='flex flex-row items-center'>
                <Icon name="notifications" size={40} />
                <Text className='text-xl font-bold'>Notifications</Text>
                </View>
                <Image source={require('@/assets/icons/chevron.png')} style={{width: 40,height: 40}} />
            </View>

            <View className='flex flex-row justify-between border-b border-slate-300'>
                <View className='flex flex-row items-center'>
                <Icon name="lock" size={40} />
                <Text className='text-xl font-bold'>Privacy and Sharing</Text>
                </View>
                <Image source={require('@/assets/icons/chevron.png')} style={{width: 40,height: 40}} />
            </View>

            <View className='flex flex-row justify-end'><Link href="/" className='mt-4 text-2xl text-red-500'>Log out</Link></View>
         </View>

        
     </View>

         {/** Account setting  section end */}

   </View>
  )
}

export default index