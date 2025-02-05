import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';

export default function Berita1Screen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.titlePage}>
                <Image source={require('../assets/WHITE.png')} style={styles.pageLogo}/>
            </View>

            <View style={styles.pageInfoContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.iconInfo} source={require('../assets/home.png')}/>
                </TouchableOpacity>
                <Text style={styles.infoPage}> | Politik dan Hukum</Text>
            </View>

            <ScrollView>
                <Text style={styles.headerText}>
                    Ramai-Ramai Kritik Interupsi PDI Perjuangan Soal Kenaikan PPN 12%: Inkonsisten, Cuci Tangan, dan Mantap Kali Bikin Kontennya
                </Text>
                <Text style={styles.dateText}>
                    23 Dec 2024 14:05 WIB
                </Text>
                <Image style={styles.pictureText} source={require('../assets/berita1.png')}/>
                <Image style={styles.socialMedia} source={require('../assets/frame_social.png')}/>
                <Text style={styles.textBerita}>
                    Sejumlah fraksi di DPR-RI mengkritik langkah fraksi PDI Perjuangan yang menolak pemberlakuan kenaikan pajak pertambahan nilai (PPN) menjadi 12 persen pada 1 Januari 2025. Mereka menilai penolakan PDI Perjuangan menggambarkan sikap politik yang inkosisten.
                </Text>
                <Text style={styles.textBerita}>
                    Ketua Komisi XI DPR RI dari Fraksi Golkar Mukhamad Misbakhun misalnya, menyebut PDI Perjuangan bersikap mencla-mencle lantaran saat masih berkuasa mereka mendukung kenaikan pajak tersebut.
                </Text>
                <Text style={styles.textBerita}>
                    "Sikap politik mencla-mencle PDI Perjuangan seperti ini harus diketahui oleh semua rakyat Indonesia banyak. Ketika berkuasa berkata apa, ketika tidak menjadi bagian dari kekuasaan seakan-akan paling depan menyuarakan kepentingan rakyat. Berpolitiklah secara elegan," kata Misbakhun dikutip Antara di Jakarta, Senin (23/12/2024).
                </Text>
                <Text style={styles.textBerita}>
                    Misbakhun mengungkapkan PDI Perjuangan berperan dalam kenaikan PPN karena mereka merupakan Ketua Panitia Kerja (Panja) Rancangan Undang-Undang Harmonisasi Peraturan Perpajakan (HPP) yang bergulir pada periode kepemimpinan DPR RI sebelumnya.
                </Text>
                <Text style={styles.textBerita}>
                    "Mereka terlibat dalam proses politik pembuatan undang-undang itu, bahkan kader PDI Perjuangan Dolfie OFP (Dolfie Othniel Frederic Palit) menjadi Ketua Panja RUU Ketentuan Umum dan Tata Cara Perpajakan (KUP) saat pertama kali RUU itu diberikan nama, lalu berubah disetujui menjadi UU Harmonisasi Peraturan Perpajakan (HPP)," tuturnya.
                </Text>
                <Text style={styles.textBerita}>
                    Misbakhun mengatakan sebagai anggota Panja RUU HPP, dirinya ikut menyaksikan dan mengetahui dinamika pembahasan mengenai kenaikan tarif PPN menjadi 12 persen dalam RUU tersebut.
                </Text>
            </ScrollView>
            <StatusBar style="auto" />
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