import React from "react";
import {  StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./src/components/HomeScreen";
import LoginScreen from "./src/components/LoginScreen"
import SignupScreen from "./src/components/SignupScreen"
import Timer from "./src/components/Timer"
import { RootStackParamList } from "./src/type/types";


const Stack = createNativeStackNavigator<RootStackParamList>();


const App = () =>{
  return(
  <NavigationContainer>
    <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="TIMER"   // starta direkt på Timer-sidan, radera när du är klar.
        >
      <Stack.Screen name={"HOME"} component={HomeScreen} />
      <Stack.Screen name={"LOGIN"} component={LoginScreen} />
      <Stack.Screen name={"SIGNUP"} component={SignupScreen} />
      <Stack.Screen name={"TIMER"} component={Timer} />



    </Stack.Navigator>
</NavigationContainer>     

  )
}


export default App;



const styles = StyleSheet.create({
})
