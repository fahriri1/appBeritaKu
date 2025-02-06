import React, { useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Button, Image, Modal, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingScreen({ navigation }) {
    const [emailStorage, setEmailStorage] = useState('');
    const [usernameStorage, setUsernameStorage] = useState('');
    const [phoneStorage, setPhoneStorage] = useState('');

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    
    const [modalVisible, setModalVisible] = useState(false);

    const getData = async() => {
        var value = await AsyncStorage.getItem('username');
        setUsernameStorage(value);

        value = await AsyncStorage.getItem('email');
        setEmailStorage(value);

        value = await AsyncStorage.getItem('phone');
        setPhoneStorage(value);
    }

    const handleChanceData = async() => {
        if(email !='' && username != '' && phone != ''){
            try {
                await AsyncStorage.setItem('username', username);
                await AsyncStorage.setItem('email', email);
                await AsyncStorage.setItem('phone', phone);
                getData();
                setModalVisible(true);
            } catch (error) {
                console.error('Error saving data:', error);
            }
        }else{
            alert('Data Mohon Diisikan');
        }
    };

    useEffect(() => {
        getData();
    }, []);
    
    return (
        <View style={styles.container}>
            <View style={styles.titlePage}>
                <View style={styles.titleContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Akun')}>
                        <Image style={styles.imageHeader} source={require('../../assets/Arrow_left_white.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.textHeader}> Kelola Akun</Text>
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
                        <Text style={styles.modalText}>Data Anda Berhasil Diubah!</Text>
                        <Button title="Tutup" onPress={() => setModalVisible(false)} />
                    </View>
                    </View>
                </Modal>

                <View style={styles.headerContainer}>
                    <Image source={require('../../assets/username.png')}/>
                    <Text style={styles.Header}>{usernameStorage}</Text>
                    <Text style={styles.SubHeader}>{emailStorage}</Text>
                    <Text style={styles.SubHeader}>{phoneStorage}</Text>
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.inputLabel}>Nama Lengkap</Text>
                    <View style={styles.input}>
                        <TextInput 
                            style={styles.form} 
                            placeholder='Admin'
                            value={username}
                            onChangeText={setUsername}/>
                    </View>
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.inputLabel}>No Telepon</Text>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.form}
                            placeholder='+62 892121234' 
                            value={phone}
                            secureTextEntry={true}
                            onChangeText={setPhone}/>
                    </View>
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.form}
                            placeholder='Admin@gmail.com' 
                            value={email}
                            onChangeText={setEmail}/>
                    </View>
                </View>

                <TouchableOpacity style={[styles.buttonMasuk, styles.button]} onPress={() => handleChanceData()}>
                    <Text style={styles.buttonText}>Ubah</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonMasuk, styles.button]} onPress={() => navigation.navigate('Akun')}>
                    <Text style={styles.buttonText}>Keluar</Text>
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
    headerContainer:{alignItems: 'center', top: 20},
    Header:{fontSize: 15, fontWeight: 700, marginBottom: 5},
    SubHeader:{fontSize: 12, fontWeight: 400, marginBottom: 5},    

    // Form Styles //
    containerInput:{ top: 50, left: 45 },
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
        top: 100,
        left: 45,
        width: 328,
        height: 40,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#134B70',
        borderRadius: 10,
        marginTop: 20,
    },

    buttonText:{
        forntSize: 14,
        fontWeight: 700,
        color: 'white',
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
        fontSize: 15,
        fontWeight: 700,
        marginTop: 10,
        marginBottom: 20,
    },
});