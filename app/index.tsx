import { Link } from "expo-router";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

export default function HomeScreen() {
   return (
      <ImageBackground
         className="w-full h-screen top-0"
         source={require("@/assets/images/welcome.jpg")}
      >
        {"img backgroung for welcome view"}

         <View className="flex mt-28 relative h-3/4  items-center">
            <Text className="text-3xl top-0 z-50 mt-32 font-bold  text-green-600">
                Bienvenue au restaurand {'\n'}
               <Text className="text-center">GoulBam</Text>
            </Text>
            <Text className="text-lg top-0 text-justify px-3 z-50 my-5  font-bold  text-white">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
               consequuntur ab voluptatem ipsam ad a maiores praesentium sit
               porro hic, voluptate vitae quod placeat incidunt minima dicta
               laborum quia id!
            </Text>
            {"go to login if not authantificate or Food authantificated"}
            <Link className="text-white bg-red-600 p-5 rounded-md top-0 z-50" href="/login">
                 passer une commande
            </Link>
         </View>
      </ImageBackground>
   );
}
