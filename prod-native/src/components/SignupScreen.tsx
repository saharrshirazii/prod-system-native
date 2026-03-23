import { StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import React , { useState }from 'react';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { colors } from '../utils/color'
import { TextInput } from 'react-native';
import { Image } from 'react-native/';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../type/types';

const SignupScreen = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [secureEntry, setSecureEntry] = useState<boolean>(true);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleLogin = () => {
        navigation.navigate("LOGIN")
    };

    const handleSignup = () => {
        if (!email.includes('@') || password.length < 6 || phone.length < 5) {
            Alert.alert("Fel", "Vänligen fyll i alla fält korrekt.");
            return;
        }

        console.log("Registrerar:", { email, password, phone });
        // After signup logic, usually you go to login or the app
        navigation.replace("TABNAV");
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
                <Text style={styles.headingText}>Låt{"\n"}Oss{"\n"}Börja</Text>
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
                    value={email}
                    onChangeText={(text: string) => setEmail(text)}
                    autoCapitalize="none"
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                    <SimpleLineIcons name={'lock'} size={25} color={colors.secondary} />
                    <TextInput 
                    secureTextEntry={secureEntry} 
                    style={styles.textInput} 
                    placeholder='Ange ditt lösenord' 
                    placeholderTextColor={colors.secondary} 
                    value={password}
                    onChangeText={(text: string) => setPassword(text)}
                    />
                    <TouchableOpacity onPress={()=>{
                        setsecureEntry((prev)=>!prev);
                    }}>
                        <SimpleLineIcons name={'eye'} size={20} color={colors.secondary} />
                    </TouchableOpacity>
                </View>

                {/* Phone Number */}
                 <View style={styles.inputContainer}>
                    <SimpleLineIcons name={'screen-smartphone'} size={30} color={colors.secondary} />
                    <TextInput 
                    keyboardType= "phone-pad" 
                    style={styles.textInput}
                    placeholder='Ange ditt telefonnummer' 
                    placeholderTextColor={colors.secondary} 
                    value={phone}
                    onChangeText={(text: string) => setPhone(text)}/>
                    
                </View>
                
               {/* Button */}
                <TouchableOpacity  style={styles.loginButtonWrapper} onPress={handleSignup}> 
                    <Text style={styles.loginButtonText}>Registrera dig</Text>
                </TouchableOpacity>
                <Text style={styles.continueText}>Eller fortsätt med</Text>
                <TouchableOpacity style={styles.googleButtonContainer}>
                    <Image source = {require("../../assets/googleicon.png")} style={styles.googleImage}/>
                    <Text style={styles.googleText}>Google</Text>
                </TouchableOpacity>
                <View style = {styles.footerContainer}>
                    <Text style = {styles.accountText}>Har du redan ett konto?</Text>
                    <TouchableOpacity onPress={handleLogin}>
                    <Text style = {styles.signupText}>Logga in</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default SignupScreen

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
