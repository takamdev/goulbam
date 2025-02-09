import InputLabel from "@/components/InputLabel";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, ImageBackground, Button, StatusBar } from "react-native";
import { useRouter } from 'expo-router';


export default function HomeScreen() {
  const router = useRouter();
  // init stat for the sign form
  const [email,setEmail] = useState<string>("")
  const [passWord,setPassword]=useState<string>("")
  
  // message for invalad email
  const [message,setMessage] = useState(false)
  //regex for email
  const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  // init state for the validation form
  const [valid,setValid]=useState([false,false])

  // validation and connexion
const sign = ()=>{
  // verifation the empty fields
  setValid([email?.trim().length === 0, passWord?.trim().length === 0]);
  if (email?.trim().length === 0 || passWord?.trim().length === 0) return;
  
  // validation email
  const isvalid = email_regex.test(email)
  if(!isvalid) setMessage(true)


    router.replace("/home")
  
}


   return (
      <ImageBackground
         className="w-full h-screen top-0"
         source={require("@/assets/images/welcome.jpg")}
      >
        {/*"img backgroung for login view"*/}
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

         <View className="flex  relative h-3/4  items-center">
            <Text className="text-3xl top-0 z-50 mt-32 font-bold  text-green-500">
               Connectez-vous
            </Text>
            {/*"login View"*/}

            <View style={{backgroundColor:"white",width:"95%"}} className={`flex  rounded-md  flex-col justify-center items-center my-5  z-50 h-1/2`}>
               <InputLabel isPassword={false} value={email} onChange={(text) => setEmail(text)} label="Email"/>
               {
                message&& <Text className="text-red-500 self-start ms-4">email invalide</Text>
               }
               {
                valid[0]&& <Text className="text-red-500 self-start ms-4">ce champ est requis</Text>
               }

               <InputLabel isPassword={true} value={passWord} onChange={(text) => setPassword(text)}  label="Mot de passe"/>
               {
                valid[1]&& <Text className="text-red-500 self-start ms-4">ce champ est requis</Text>
               }
            </View>
            {/*"go to login if not authantificate or Food authantificated"*/}
            <Text onPress={sign} role="button" className="text-white text-2xl  w-1/2 text-center  bg-red-600 p-5 rounded-md top-0 z-50" >
                 Connexion
            </Text>
         </View>
      </ImageBackground>
   );
}
