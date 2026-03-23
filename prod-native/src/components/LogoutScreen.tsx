import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../type/types';
import { colors } from '../utils/color';

const LogoutScreen = ()=>{
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return(
        <View style={styles.container}>
            <Text
            style={styles.title}>LOGGA UT</Text>
            <TouchableOpacity
            style={styles.button}
            onPress={()=> navigation.replace("HOME")}
            >
                <Text style={styles.buttonText}>Logga ut</Text>
            </TouchableOpacity>
        </View>
    )
};

export default LogoutScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },

    title: {
        fontSize: 20, 
        marginBottom: 20, 
        color: colors.secondary,
    },

    button: {
        backgroundColor: colors.primary,
        paddingVertical: 15, 
        paddingHorizontal: 50,
        borderRadius: 100,
    },

    buttonText: {
        color: colors.white,
        fontWeight: 'bold'
    }
})