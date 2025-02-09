import { Link } from "expo-router";
import { View, Text, ImageBackground, StatusBar } from "react-native";

export default function HomeScreen() {
   return (
      
      <ImageBackground
         className="w-full h-screen top-0"
         source={require("@/assets/images/welcome.jpg")}
      >
        {/*"img backgroung for welcome view"*/}
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

         <View className="flex relative h-3/4   items-center">
            <Text className="text-2xl top-0 z-50 mt-32 font-bold  text-green-500">
                Bienvenue au restaurant {'\n'}
               <Text className="text-center">GoulBam</Text>
            </Text>
            <Text className="text-lg top-0 text-justify px-3 z-50 my-5  font-bold  text-white">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
               consequuntur ab voluptatem ipsam ad a maiores praesentium sit
               porro hic, voluptate vitae quod placeat incidunt minima dicta
               laborum quia id!
            </Text>
            {/*"go to login if not authantificate or Food authantificated"*/}
            <Link className=" text-2xl text-zinc-100 font-semibold bg-red-600 p-5 rounded-md top-0 z-50" href="/login">
                 passer une commande
            </Link>
         </View>
      </ImageBackground>
   );
}
