import { Button,Icon } from "@rneui/themed";
import { useState } from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import { Image } from 'react-native';

export default function HomeScreen() {
   const [showScreen,setShowSreen]=useState(true)


   return (
      <ScrollView key="product" >

         <View className="w-screen">
               <StatusBar barStyle="dark-content" backgroundColor="#fff" />
               {/* traking section start */}
            <View className="mt-5 px-2">
               
               <Text style={{backgroundColor:"#7cc425"}} className='text-sm text-white p-3 w-1/2 my-3 rounded-md' >En Route</Text>

               <Text className="text-sm my-3">Commande N°20251525358 du 09/02/2025 à livrer entre 08h-10h</Text>

               <View className="flex  flex-row  justify-between mx-10">

                  <View className="flex flex-row items-center px-2" style={{backgroundColor:"#60a5fa"}}><Icon size={20} color="white"  name="check"/> <Text className='text-sm text-white py-3   rounded-md' >Completer</Text></View>
                  <View  className="flex flex-row items-center px-2 "  style={{backgroundColor:"#f97316"}}  ><Icon size={20} color="white"  name="close"/><Text className='text-sm text-white py-3 px-2  rounded-md'>Annuler</Text></View>
               
               </View>
               <View className="flex  flex-row  justify-between mx-10 my-5">
               
                  <View  className="flex flex-row items-center px-2" style={{backgroundColor:"#9ca3af"}} ><Icon size={20} color="white"  name="close"/><Text className='text-sm text-white py-3 px-2 rounded-md'>Absent</Text></View>
                  <View  className="flex flex-row items-center px-2" style={{backgroundColor:"#ef4444"}} ><Icon size={20} color="white"  name="close" /><Text className='text-sm text-white py-3 px-2  rounded-md'>Refuser</Text></View>
               </View>
            </View>
            {/* traking section end */}

            {/* order data section start */}

            <View className="w-full">
               <View className="flex flex-row justify-between px-14 border-b border-gray-400">
                  <Text onPress={()=>{setShowSreen(true)}} className={`text-lg ${showScreen&&"border-gray-500 border-b "}  px-5`}>Client</Text>
                  <Text onPress={()=>{setShowSreen(false)}} className={` text-lg ${!showScreen&&"border-b border-gray-500"}  px-5`}>Destination</Text>
               </View>
            {/* client screnn */}
            {
               showScreen ? (
                  <View>
                        <View className="mt-5 p-5">
                           <Text className="font-semibold ">Client: 
                              
                           </Text>
                           <Text className="text-sm">
                           Stes Fruits {'\n'}
                           17  rue des Fruits ,75018,paris
                           </Text>
                           <Text className="mt-2" style={{color:"#7cc425"}}>
                              06257845635
                           </Text>
                        </View>

                        <View className="p-5">

                           <Text className="font-semibold">Commande: 
                              
                           </Text>
                           <Text className="text-lg">
                              Hambouger
                           </Text>
                           <View>
                              <Image style={{height:180}}
                                 className='w-full' 
                                 source={require('@/assets/images/food_2.png')}/>
                           </View>
                        </View>
                  </View>
               ):(
                  //  destination screen
                  <View>
                   <Text className="">
                     <Image
                       style={{height:300}}
                       className='w-full'
                     source={require('@/assets/images/map.png')}/>
                   </Text>
                 </View>
              
               )
            }
              

           
            
            </View>
           
         </View> 
      </ScrollView>
     
      );
}
