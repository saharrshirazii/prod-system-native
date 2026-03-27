import { StyleSheet, Text, TouchableOpacity, View , Alert} from 'react-native';
import React , { useState }from 'react';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { colors } from '../utils/color'
import { TextInput } from 'react-native';
import { Image } from 'react-native/';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../type/types';

const LoginScreen = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [secureEntry, setsecureEntry] = useState<boolean>(true);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleSignup = () => {
        navigation.navigate("SIGNUP")
    }

    const handleLogin = () => {
        const emailValidation = /\S+@\S+\.\S+/;
        if(!emailValidation.test(email)){
            Alert.alert("Fel", "Vänligen ange en giltig e-postadress.");
            return;
        }
        if (password.length < 6) {
            Alert.alert("Fel", "Lösenordet måste vara minst 6 tecken långt.");
            return;
        }

        console.log("Inloggning lyckades!");
        navigation.replace("TIMER");    
    };



    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
                <Ionicons
                    name={"arrow-back-outline"}
                    color={colors.primary}
                    size={30}
                />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Hej!{"\n"}Välkommen{"\n"}Tillbaka</Text>
            </View>
            <View style={styles.formContainer}>

                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <Ionicons name={'mail-outline'} size={25} color={colors.secondary} />
                    <TextInput 
                    keyboardType='email-address' 
                    style={styles.textInput} 
                    placeholder='Ange din e-postadress' 
                    placeholderTextColor={colors.secondary} 
                    onChangeText={(e) => setEmail(e)}
                    autoCapitalize="none"/>
                    
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                    <SimpleLineIcons name={'lock'} size={25} color={colors.secondary} />
                    <TextInput 
                    secureTextEntry={secureEntry} 
                    style={styles.textInput} 
                    placeholder='Ange ditt lösenord' 
                    placeholderTextColor={colors.secondary} 
                    onChangeText={(text) => setPassword(text)}/>
                    <TouchableOpacity onPress={()=>{
                        setsecureEntry((prev)=>!prev);
                    }}>
                        <SimpleLineIcons name={'eye'} size={20} color={colors.secondary} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgetPasswordText}>Glömt lösenordet?</Text>
                </TouchableOpacity>

                {/* Login Button */}
                <TouchableOpacity  style={styles.loginButtonWrapper} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Logga In</Text>
                </TouchableOpacity>
                <Text style={styles.continueText}>Eller fortsätt med</Text>
                <TouchableOpacity style={styles.googleButtonContainer}>
                    <Image source = {require("../../assets/googleicon.png")} style={styles.googleImage}/>
                    <Text style={styles.googleText}>Google</Text>
                </TouchableOpacity>
                <View style = {styles.footerContainer}>
                    <Text style = {styles.accountText}>Har du inget konto?</Text>
                    <TouchableOpacity onPress={handleSignup}>
                      <Text style = {styles.signupText}>Registrera dig</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: 40,
        padding: 20
    },
    backButtonWrapper: {
        height: 40,
        width: 40,
        backgroundColor: colors.gray,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"

    },
    textContainer: {
        marginTop: 40,
    },
    headingText: {
        fontSize: 40,
        fontWeight: "bold",
        color: colors.primary,
    },
    formContainer: {
        marginTop: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 100,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        marginTop: 20,

    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,

    },
    forgetPasswordText:{
        textAlign: 'right',
        marginTop: 20,
        color: colors.primary,
    },
    loginButtonWrapper: {
        backgroundColor: colors.primary,
        borderRadius: 100,
        marginTop: 20,

    },
    loginButtonText: {
        fontSize: 20,
        color: colors.white,
        textAlign: 'center',
        padding: 10,
    },
    continueText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 12,
        color: colors.primary,
    },
    googleButtonContainer: {
        backgroundColor: colors.white,
        borderColor: colors.secondary,
        borderWidth: 2,
        borderRadius: 100,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        marginTop: 20,
        justifyContent: 'center',
    },
    googleImage:{
        width:18,
        height:18,
    },
    googleText:{
        fontSize: 20,
        color: colors.primary,
        textAlign: 'center',
        padding: 10,
    },
    footerContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        gap: 5,

    },
    accountText: {
        color: colors.primary,
    },
    signupText: {
        color: colors.primary,
        fontWeight: 'bold',
    },

})