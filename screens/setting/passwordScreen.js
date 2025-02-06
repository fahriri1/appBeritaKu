import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Button, Image, Modal, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function SettingScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleLogin = () => {
        if(email=='admin@gmail.com' && password=='1234'){
            navigation.replace('Home');
        }else{
            alert('Invalid username or password');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.titlePage}>
                <View style={styles.titleContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Akun')}>
                        <Image style={styles.imageHeader} source={require('../../assets/Arrow_left_white.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.textHeader}> Ubah Sandi</Text>
                </View>
            </View>

            <ScrollView>

                {/* Main Section */}
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalText}>This is a Popup!</Text>
                        <Button title="Close" onPress={() => setModalVisible(false)} />
                    </View>
                    </View>
                </Modal>

                <View style={styles.headerContainer}>
                    <Text style={styles.passwordHeader}>Atur Ulang Kata Sandi</Text>
                    <Text style={styles.passwordSubHeader}>Buat kata sandi baru</Text>
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.inputLabel}>Masukan Kata Sandi Baru</Text>
                    <View style={styles.input}>
                        <TextInput 
                            style={styles.form} 
                            placeholder='Masukan Kata Sandi'
                            value={password}
                            secureTextEntry={true}
                            onChangeText={setPassword}/>
                    </View>
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.inputLabel}>Masukan Ulang Kata Sandi Baru</Text>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.form}
                            placeholder='Konfirmasi Kata Sandi' 
                            value={password}
                            secureTextEntry={true}
                            onChangeText={setPassword}/>
                    </View>
                </View>

                <TouchableOpacity style={[styles.buttonMasuk, styles.button]} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Simpan Perubahan</Text>
                </TouchableOpacity>


            </ScrollView>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{ flex: 1},

    // Title Page //
    titlePage:{ backgroundColor: '#210E43', height: 80 },
    titleContainer: {top: 40, left: 20, flexDirection: 'row', alignItems: 'center'},
    imageHeader: {width: 24, height: 24},
    textHeader: {marginLeft: 10, color: 'white', fontSize: 13, fontWeight: 700},

    // Header Page //
    headerContainer:{alignItems: 'center', top: 100},
    passwordHeader:{fontSize: 15, fontWeight: 700},
    passwordSubHeader:{fontSize: 12, fontWeight: 400},    

    // Form Styles //
    containerInput:{ top: 180, left: 45 },
    inputLabel: {fontSize: 15, fontWeight: 700, marginBottom: 5},
    input: {
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
    form: { width: 280 },

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

    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 20,
        marginBottom: 20,
    },
});