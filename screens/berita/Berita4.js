import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';

export default function Berita1Screen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.titlePage}>
                <Image source={require('../../assets/WHITE.png')} style={styles.pageLogo}/>
            </View>

            <View style={styles.pageInfoContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.iconInfo} source={require('../../assets/home.png')}/>
                </TouchableOpacity>
                <Text style={styles.infoPage}> | Regional</Text>
            </View>

            <ScrollView>
                <Text style={styles.headerText}>
                    Jam Operasional Monas Saat Natal 2024
                </Text>
                <Text style={styles.dateText}>
                    23 Dec 2024 14:05 WIB
                </Text>
                <Image style={styles.pictureText} source={require('../../assets/berita4.png')}/>
                <Image style={styles.socialMedia} source={require('../../assets/frame_social.png')}/>
                <Text style={styles.textBerita}>
                    Pengelola Monumen Nasional (Monas)  memberlakukan jam operasional berbeda dari hari biasanya pada libur Natal 2024 hingga Tahun Baru 2025. Dikutip dari salah satu unggahan di akun Instagram resmi monas @monumen.nasional, disebutkan bahwa Monas akan beroperasi dari pagi hingga malam hari. Kabar Gembira! Untuk menyambut Natal dan tahun baru, Monas kini kembali buka hingga malam, @monumen.nasional, dikutip Selasa (24/12/2024).
                </Text>
                <Text style={styles.textBerita}>
                    Dengan jam operasional yang diperpanjang, para pengunjung memiliki kesempatan untuk menikmati pemandangan Jakarta pada malam hari dari puncak Monas. Berikut jadwal kunjungan ke Monas selama libur Natal 2024 dan Tahun Baru 2025:
                </Text>
                <Text style={styles.textBerita}>
                    Selasa-Jumat
                        • Jam operasional: 08.00-18.00 WIB
                        • Loket ditutup: 17.00 WIB
                        Kuota pengunjung untuk naik ke puncak Monas dibatasi 1.800 orang
                </Text>
                <Text style={styles.textBerita}>
                    Sabtu-Minggu atau libur Natal sampai Tahun Baru
                        • Jam operasional: 08.00 - 22.00 WIB
                        • Loket ditutup: 21.00 WIB
                        Kuota pengunjung untuk naik ke puncak Monas dibatasi hingga 2.400 orang
                </Text>
                <Text style={styles.textBerita}>
                    Untuk merayakan Natal 2024 dan Tahun Baru 2025, pengelola Monas menghadirkan acara bernama "Pekan Monas" dengan berbagai atraksi spektakuler sebagai berikut:
                </Text>
                <Text style={styles.textBerita}>
                    Pencahayaan Taman Spesial Akhir Tahun
                        • Tanggal: 28-31 Desember 2024
                        • Waktu: 18.00-22.00 WIB
                        • Lokasi: Sisi Barat Monas
                        • Keterangan: "Taman Monas penuh lampu indah untuk suasana Natal yang
                        damai dan perayaan Tahun Baru yang ceria!"
                </Text>
            </ScrollView>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{ flex: 1},

    // Title Page //
    titlePage:{ backgroundColor: '#210E43', height: 80 },
    pageLogo:{ top: 30, left: 25,},

    // Page Info //
    pageInfoContainer: { 
        flexDirection: 'row', 
        borderBottomWidth: 1, 
        borderColor: 'gray', 
        paddingLeft: 20, 
        paddingTop: 10, 
        paddingBottom: 10},
    iconInfo: {width: 24, height: 24}, 
    infoPage: {fontSize: 14, fontWeight: 700},

    //Berita//
    headerText:{ fontSize: 15, fontWeight: 700, paddingLeft: 20, paddingTop: 20},
    dateText: {fontSize: 10, fontWeight: 400, paddingLeft: 20, paddingTop: 5},
    pictureText: {top: 5, left: 20, width: 370, height: 250},
    socialMedia: {top: 5, left: 290},
    textBerita: {
        fontSize: 12, 
        fontWeight: 400, 
        paddingLeft: 20, 
        paddingRight: 20, 
        paddingTop: 10, 
        textAlign: 'justify'
    }
});