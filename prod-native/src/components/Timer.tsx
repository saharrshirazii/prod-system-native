import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Timer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pomodora-sidan är här!</Text>
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