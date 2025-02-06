import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async() => {
        const email_ = await AsyncStorage.getItem('email');
        const password_ = await AsyncStorage.getItem('password');

        if(email==email_ && password == password_){
            navigation.replace('Home');
        }else{
            alert('Invalid username or password');
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
                <Image source={require('../assets/Arrow_left.png')} style={[styles.arrow, styles.icon]} />
            </TouchableOpacity>

            <Image
                source={require('../assets/PRIMARY.png')}
                style={styles.logo}
            />

            <Text style={styles.header} >MASUK</Text>
            <View style={styles.input}>
                <Image source={require('../assets/call-outline.png')} style={styles.icon}/>
                <TextInput 
                    style={styles.form} 
                    placeholder='Masukan No Telfon atau email'
                    value={email}
                    onChangeText={setEmail}/>
            </View>

            <View style={styles.input}>
                <Image source={require('../assets/Lock.png')} style={styles.icon}/>
                <TextInput
                    style={styles.form}
                    placeholder='Masukan Kata Sandi' 
                    value={password}
                    secureTextEntry={true}
                    onChangeText={setPassword}/>
            </View>

            <Text style={[styles.text1, styles.textLabel]}>Lupa Password?</Text>

            {/* Button HTML */}
            <TouchableOpacity style={[styles.buttonMasuk, styles.button]} onPress={handleLogin}>
                <Text style={styles.buttonText}>Masuk</Text>
            </TouchableOpacity>

            <View style={styles.viewTextDaftarDisini}>
                <Text style={styles.textLabel}>Belum punya akun?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Daftar')}>
                    <Text style={[styles.textLabel, styles.textCTA]}>Daftar disini</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{ flex: 1},

    logo: { width: 174, height: 70, top: 162, left: 108},
    arrow: { top:63, left:24},
    icon: {width: 24, height: 24},
    header: { fontWeight: 700, fontSize: 28, top: 169, left: 142},

    // Form Styles //
    input: {
        top: 180,
        left: 45,
        width: 328,
        height: 40,
        justifyContent: 'center', 
        flexDirection: 'row', 
        alignItems: 'center',
        gap: 9,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 15,
    },
    form: { width: 262 },

    textLabel: {color: 'black', fontSize: 12, fontWeight: 600,},
    text1: {top: 185, left: 255},

    // Button Styles //
    button: {
        width: 328,
        height: 40,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#134B70',
        borderRadius: 10,
    },
    buttonText:{
        forntSize: 14,
        fontWeight: 700,
        color: 'white',
    },

    buttonMasuk:{
        top: 200,
        left: 45,
    },

    viewTextDaftarDisini: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        top: 215,
    },
    textCTA: {
        marginLeft: 5,
        color: '#134B70',
    }
});