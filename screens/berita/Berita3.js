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
                <Text style={styles.infoPage}> | Otomotif</Text>
            </View>

            <ScrollView>
                <Text style={styles.headerText}>
                    Catat Waktunya, Ganjil Genap di Jalur Puncak Berlaku mulai Hari Ini
                </Text>
                <Text style={styles.dateText}>
                    23 Dec 2024 14:05 WIB
                </Text>
                <Image style={styles.pictureText} source={require('../../assets/berita3.png')}/>
                <Image style={styles.socialMedia} source={require('../../assets/frame_social.png')}/>
                <Text style={styles.textBerita}>
                    Jalur Puncak masih menjadi salah satu destinasi Pajak pertambahan nilai (PPN) dikenakan atas transaksi yang memanfaatkan fintech, termasuk QRIS (Quick Response Indonesian Standard). Sehingga, kenaikan pajak menjadi 12 persen tahun 2025 mendatang otomatis akan ikut memengaruhi transaksi yang menggunakan QRIS.
                </Text>
                <Text style={styles.textBerita}>
                    Namun, meningkatnya jumlah kendaraan yang melintas seringkali menyebabkan kemacetan parah. Untuk mengatasi masalah ini, pihak berwenang menerapkan sistem Ganji Genap di Jalur Puncak. Pajak pertambahan nilai (PPN) dikenakan atas transaksi yang memanfaatkan fintech, termasuk QRIS (Quick Response Indonesian Standard). Sehingga, kenaikan pajak menjadi 12 persen tahun 2025.
                </Text>
                <Text style={styles.textBerita}>
                    Pengendara mobil dan motor yang menuju ke arah Puncak, Bogor, pada akhir pekan ini diimbau mengatur waktu perjalanan dan memperhatikan aturan yang berlaku.
                </Text>
                <Text style={styles.textBerita}>
                    Seperti diketahui, Satlantas Polres Bogor memberlakukan rekayasa lalu lintas ganjil genap untuk mengurangi kemacetan di kawasan tersebut. Selasa, Rabu, Kamis, tanggal 24, 25, 26 Desember 2024 jalur Puncak diberlakukan ganjil genap Selasa (24/12/2024).
                </Text>
                <Text style={styles.textBerita}>
                    Bagi kendaraan yang ber-TNKB atau berpelat nomor polisi tidak sesuai dengan tanggal diberlakukannya ganjil genap akan diputarbalik oleh petugas keterangan tersebut.
                </Text>
                <Text style={styles.textBerita}>
                    Sebagai informasi, kebijakan ganjil genap tersebut sesuai dengan Peraturan Menteri Perhubungan RI Nomor PM 84 Tahun 2021. Oleh karena itu, petugas mengimbau pengendara untuk menaati peraturan yang berlaku di lapangan. Sistem pemberlakuan ganjil genap ini akan menyesuaikan dengan tanggal hari ini, misal Selasa tanggal 24 Desember 2024 akan berlaku bagi kendaraan berpelat genap.
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