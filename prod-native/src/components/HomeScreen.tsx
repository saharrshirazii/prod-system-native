import {  Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"; 
import React from 'react';
import { colors } from "../utils/color";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../type/types"


type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "HOME"
>;


const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  
  const handleLogin = () => {
    navigation.navigate("LOGIN");
  };

   const handleSignup = () => {
    navigation.navigate("SIGNUP");
  };


  return (
    <View style={styles.container}>
      <Image source = {require("../../assets/logo.jpg")} style = {styles.logo}/>
      <Image source = {require("../../assets/main.jpg")} style = {styles.bannerImage}/>
      <Text style = {styles.title}>Welcome to your app</Text>
      <Text style = {styles.subTitle}>Please login</Text>
     
      <View style = {styles.butonContainer}>
        <TouchableOpacity style={[styles.loginButtonWrapper , {backgroundColor: colors.primary},]} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginButtonWrapper]} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Sign-Up</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.white,
    alignItems: "center",
    },
      logo:{
        width:140,
        height: 40,
        marginTop: 100,
      },
      bannerImage:{
        height: 300,
        width: 231,
        marginVertical: 50,
      },
      title:{
        fontSize: 24,
        marginTop: 30,
        marginHorizontal: 20,
        textAlign: "center",
        color: colors.primary,
        fontWeight: "bold",
      },
      subTitle:{
        fontSize: 20,
        textAlign: "center",
        color: colors.secondary,
        fontFamily: "playfair",
        marginVertical: 20,
      },
      butonContainer:{
        flexDirection: "row",
        marginTop: 30,
        borderWidth: 2,
        borderColor: colors.primary,
        width: "80%",
        height: 60,
        borderRadius: 100,
      },
      loginButtonWrapper: {
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        borderRadius: 98,
        // backgroundColor: colors.primary,


      },
      loginButtonText: {
        color: colors.white,
        fontSize: 18,
      },
      // signupButtonWrapper:{
      //   backgroundColor: colors.white,
      //   justifyContent: "center",
      //   alignItems: "center",
      //   width: "50%",
      //   borderRadius: 98,

      // },
      signupButtonText:{
        fontSize:18,
        backgroundColor: colors.white,
      }

})