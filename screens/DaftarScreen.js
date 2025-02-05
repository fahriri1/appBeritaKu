import React, { useState } from 'react';
import { StyleSheet, Pressable, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

export default function DaftarScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(require('../assets/check_box.png'));

    const handleLogin = () => {
        if(isChecked == require('../assets/check_box_fill.png')){
            navigation.replace('Home');
        }else{
            alert('Mohon Isi Persetujuan');
        }
    };

    const toggleImage = () => {
        setIsChecked((prevImage) =>
            prevImage === require('../assets/check_box.png')
            ? require('../assets/check_box_fill.png')
            : require('../assets/check_box.png')
        );
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

            <Text style={styles.header} >DAFTAR</Text>
            <View style={styles.input}>
                <TextInput 
                    style={styles.form} 
                    placeholder='Masukan Nama'
                    value={username}
                    onChangeText={setUsername}/>
            </View>

            <View style={styles.input}>
                <TextInput
                    style={styles.form}
                    placeholder='Masukan Email' 
                    keyboardType='email-address'
                    autoCapitalize="none" 
                    value={email}
                    onChangeText={setEmail}/>
            </View>

            <View style={styles.input}>
                <TextInput 
                    style={styles.form} 
                    keyboardType='phone-pad'
                    placeholder='Masukan No Telfon'
                    value={phone}
                    onChangeText={setPhone}/>
            </View>

            <View style={styles.input}>
                <TextInput 
                    style={styles.form} 
                    placeholder='Masukan Kata Sandi'
                    value={password}
                    secureTextEntry={true}
                    onChangeText={setPassword}/>
            </View>

            <View style={styles.input}>
                <TextInput 
                    style={styles.form} 
                    placeholder='Konfirmasi Kata Sandi'
                    value={password}
                    secureTextEntry={true}
                    onChangeText={setPassword}/>
            </View>

            <Pressable onPress={toggleImage} style={styles.checkboxContainer}>
                <Image source={isChecked} style={styles.icon} />
                <Text style={styles.textLabel}>Saya Menyetujui</Text>
                <TouchableOpacity>
                    <Text style={[styles.textLabel, styles.textCTA]}>Syarat & Ketentuan </Text>
                </TouchableOpacity>
                <Text style={styles.textLabel}>yang Berlaku</Text>
            </Pressable>

            {/* Button HTML */}
            <TouchableOpacity style={[styles.buttonMasuk, styles.button]} onPress={handleLogin}>
                <Text style={styles.buttonText}>Daftar</Text>
            </TouchableOpacity>

            <View style={styles.viewTextDaftarDisini}>
                <Text style={styles.textLabel}>Sudah punya akun?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={[styles.textLabel, styles.textCTA]}>Masuk</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{ flex: 1},

    logo: { width: 174, height: 70, top: 120, left: 108},
    arrow: { top:63, left:24},
    icon: {width: 24, height: 24},
    header: { fontWeight: 700, fontSize: 28, top: 125, left: 142},

    // Form Styles //
    input: {
        top: 145,
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
    form: { width: 280},

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
        top: 180,
        left: 45,
    },

    viewTextDaftarDisini: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        top: 200,
    },
    textCTA: {
        marginLeft: 5,
        color: '#134B70',
    }, 

    checkboxContainer: { flexDirection: 'row', alignItems: 'center', top: 150, left: 45},
});