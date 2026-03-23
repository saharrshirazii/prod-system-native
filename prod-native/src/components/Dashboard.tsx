import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../type/types'
import { colors } from '../utils/color'

const Dashboard = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Timer")}
      >
        <Text style={styles.buttonText}>Starta Pomodora</Text>

      </TouchableOpacity>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 10,
    },

    subtitle: {
        fontSize: 18, 
        color: colors.secondary,
        marginBottom: 40,
    },

    button: {
        backgroundColor: colors.primary,
        paddingVertical: 15, 
        paddingHorizontal: 40, 
        borderRadius: 100,
    },

    buttonText: {
        color: colors.white,
        fontSize: 18, 
        fontWeight: '500',
    }
})