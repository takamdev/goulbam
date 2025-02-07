import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View className='flex justify-center items-center'>
      <Text className='text-3xl text-green-600'>Login</Text>


      <Link href="/">Home</Link>
    </View>
  );
}

