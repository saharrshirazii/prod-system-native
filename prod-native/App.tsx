import React from "react";
import {  StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./src/components/HomeScreen";
import LoginScreen from "./src/components/LoginScreen"


const Stack = createNativeStackNavigator();


const App = () =>{
  return(
  <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={"HOME"} component={HomeScreen} />
      <Stack.Screen name={"LOGIN"} component={LoginScreen} />

    </Stack.Navigator>
</NavigationContainer>     

  )
}


export default App;



const styles = StyleSheet.create({
})