import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';

export default function SimpanScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.titlePage}>
                <Image source={require('../assets/WHITE.png')} style={styles.pageLogo}/>
            </View>

            <ScrollView>

                {/* Main News Section */}
                <TouchableOpacity style={styles.mainNewsContainer} onPress={() => navigation.navigate('Berita1')}>
                    <Image style={styles.imageNewsMain} source={require('../assets/berita1.png')}/>
                    <View style={styles.textMainNewsContainer}>
                        <Text style={styles.h3}>BeritaKu Daily</Text>
                        <Text style={styles.h1}>Ramai-Ramai Kritik Interupsi PDI Perjuangan Soal Kenaikan PPN 12%: Inkonsisten, Cuci Tangan, dan Mantap…</Text>
                        <Text style={styles.h2}>Sejumlah fraksi di DPR-RI mengkritik langkah fraksi PDI Perjuangan yang menolak pemberlakuan kenaikan pajak pertambahan nilai (PPN) menjadi 12% pada 1 Januari 2025.</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>

            <View style={styles.navigationBar}>
                <TouchableOpacity style={styles.navigationIcon} onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.icon} source={require('../assets/home.png')}/>
                    <Text style={styles.textIcon}>Beranda</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navigationIcon}>
                    <Image style={styles.icon} source={require('../assets/icon_simpan_selected.png')}/>
                    <Text style={[styles.textIconSlected, styles.textIcon]}>Disimpan</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navigationIcon } onPress={() => navigation.navigate('Akun')}>
                    <Image style={styles.icon} source={require('../assets/akun_icon.png')}/>
                    <Text style={styles.textIcon}>Akun</Text>
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

    // Main News //
    mainNewsContainer: { flexDirection: 'row', marginLeft: 40, marginTop: 20},
    imageNewsMain: {width: 105, height: 95, borderRadius: 10},
    textMainNewsContainer: { 
        justifyContent: 'center', 
        width: 212,
        borderTopWidth: 1, 
        borderBottomWidth: 1,
        paddingLeft: 10,
    },

    // Text Style //
    h3:{ fontSize: 7, fontWeight: 500, color: '#134B70'},
    h1:{ fontSize: 8, fontWeight: 500, color: 'black'},
    h2:{ fontSize: 6, fontWeight: 400, color: 'gray'},

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