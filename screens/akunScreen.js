import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';

export default function AkunScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.titlePage}>
                <Image source={require('../assets/WHITE.png')} style={styles.pageLogo}/>
            </View>

            <ScrollView>

                {/* Main Section */}
                <View style={styles.containerUsername}>
                    <Image style={styles.imageUsername} source={require('../assets/username.png')}/>
                    <Text style={styles.username}>Fahri</Text>
                </View>

                <TouchableOpacity style={[styles.container1, styles.containerChoise]} onPress={() => navigation.navigate('KelolaAkun')}>
                    <Image style={styles.iconChoise} source={require('../assets/Akun_icon.png')}/>
                    <View style={styles.containerText}>
                        <Text style={styles.headerChoise}>Kelola Akun</Text>
                        <Text style={styles.textChoise}>Lihat dan Atur Akun Anda</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.container2, styles.containerChoise]} onPress={() => navigation.navigate('Simpan')}>
                    <Image style={styles.iconBacaNanti} source={require('../assets/Baca_nanti_icon.png')}/>
                    <View style={styles.containerText2}>
                        <Text style={styles.headerChoise}>Baca Nanti</Text>
                        <Text style={styles.textChoise}>Daftar yang Anda Simpan untuk Dibaca Nanti</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.container3, styles.containerChoise]} onPress={() => navigation.navigate('Setting')}>
                    <Image style={styles.iconChoise} source={require('../assets/pengaturan_icon.png')}/>
                    <View style={styles.containerText}>
                        <Text style={styles.headerChoise}>Pangaturan</Text>
                        <Text style={styles.textChoise}>Atur Fitur untuk Akun Anda</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.container4, styles.containerChoise]} onPress={() => navigation.navigate('Contact')}>
                    <Image style={styles.iconChoise} source={require('../assets/hubungi_icon.png')}/>
                    <View style={styles.containerText}>
                        <Text style={styles.headerChoise}>Hubungi Kami</Text>
                        <Text style={styles.textChoise}>Pusat Bantuan dan Hubungi Kami </Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>

            <View style={styles.navigationBar}>
                <TouchableOpacity style={styles.navigationIcon} onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.icon} source={require('../assets/home.png')}/>
                    <Text style={styles.textIcon}>Beranda</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navigationIcon} onPress={() => navigation.navigate('Simpan')}>
                    <Image style={styles.icon} source={require('../assets/icon_simpan.png')}/>
                    <Text style={styles.textIcon}>Disimpan</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navigationIcon}>
                    <Image style={styles.icon} source={require('../assets/akun_icon_selected.png')}/>
                    <Text style={[styles.textIconSlected, styles.textIcon]}>Akun</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{ flex: 1},

    // Title Page //
    titlePage:{ backgroundColor: '#210E43', height: 80 },
    pageLogo:{ top: 30, left: 25,},

    // Username //
    containerUsername:{
        flexDirection: 'row',
        alignItems: 'center',
        width: 328,
        height: 60,
        elevation: 3,
        shadowColor: 'grey',
        shadowOpacity: '80',
        borderRadius: 5,
        top: 40,
        left: 37,
    },
    imageUsername: {width: 45, height: 45, left: 10},
    username: {fontSize: 16, fontWeight: 700, left: 20},

    // Choise //
    containerChoise:{ 
        width: 328,
        height: 50,
        top: 40,
        left: 37,
        marginTop: 20,
        flexDirection: 'row', 
        alignItems: 'center', 
        borderWidth: 1,
        borderRadius: 10,
    },
    container1:{paddingLeft: 16},
    containerText: {paddingLeft: 16},

    container2:{paddingLeft: 20},
    containerText2: {paddingLeft: 20},

    container3:{paddingLeft: 16},
    container4:{paddingLeft: 16},

    iconChoise: { width: 20, height: 20},
    iconBacaNanti: { width: 12, height: 18},
    headerChoise: {fontSize: 12, fontWeight: 500}, 
    textChoise: {fontSize: 9, fontWeight: 400, color: '#98A2B3'},

    // Navigation //
    navigationBar: { flexDirection: 'row', justifyContent: 'center', height:70},
    navigationIcon: {
        marginRight: 35, 
        marginLeft: 35, 
        marginTop: 15, 
        marginBottom: 5, 
        alignItems: 'center'
    },
    icon: {width: 25, height: 25},
    textIcon: {fontSize: 10, fontWeight: 500},
    textIconSlected: {color: '#134B70'}
});