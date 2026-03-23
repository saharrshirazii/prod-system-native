import { StyleSheet, Text, View,TouchableOpacity, Dimensions } from 'react-native'
import {useState, useEffect, useRef} from 'react'
import {POMODORA} from '../constants/pomodoraConfig';
import { Entypo } from '@expo/vector-icons';

const Timer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pomodora-sidan är här!</Text>

      <Entypo name="controller-play" size={24} color="black" /> 
      <Entypo name="controller-paus" size={24} color="black" />
      <Entypo name="controller-stop" size={24} color="black" />
    </View>
    
  )
}

export default Timer

const styles = StyleSheet.create({
  container: {
    flex: 1,                   // fyller hela skärmen
    justifyContent: 'center',   // vertikalt centrerad
    alignItems: 'center',       // horisontellt centrerad
    backgroundColor: '#f5f5f5' // ljus bakgrund så det syns tydligt
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  }
})