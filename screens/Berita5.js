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
                <Text style={styles.infoPage}> | Spiritualitas</Text>
            </View>

            <ScrollView>
                <Text style={styles.headerText}>
                    Terowongan Silaturahmi Dibuka untuk yang Beribadah di Katedral, Ini Ketentuannya...
                </Text>
                <Text style={styles.dateText}>
                    23 Dec 2024 14:05 WIB
                </Text>
                <Image style={styles.pictureText} source={require('../assets/berita5.png')}/>
                <Image style={styles.socialMedia} source={require('../assets/frame_social.png')}/>
                <Text style={styles.textBerita}>
                Terowongan Silaturahmi yang menghubungkan Masjid Istiqlal dan Gereja Katedral akan dibuka untuk mendukung kebutuhan umat dalam pelaksanaan misa malam Natal dan misa Natal. Pasalnya, bagi umat yang hendak beribadah pada malam misa natal dan misa natal di Gereja Katedral bisa memarkirkan kendaraan di Masjid Istiqlal.
                </Text>
                <Text style={styles.textBerita}>
                    “Nanti bisa parkir di basement, dan khusus untuk umat yang akan beribadah, bisa menggunakan Terowongan Silaturahmi untuk mencapai area Katedral Jakarta,” ujar Hubungan Masyarakat (Humas) Keuskupan Agung Jakarta dan Gereja Katedral Susyana Suwadie pada Selasa (24/12/2024).
                </Text>
                <Text style={styles.textBerita}>
                    Pemeriksaan akan berlangsung sebanyak dua kali, yaitu menjelang memasuki basement dan Terowongan Silaturahmi. “Ini dikhususkan hanya untuk teman-teman yang parkir di Masjid Istiqlal untuk beribadah. Jadi mohon kesabaran bagi teman-teman yang dari umum lainnya, nanti ada waktunya yang kami akan siapkan,” kata dia.
                </Text>
                <Text style={styles.textBerita}>
                    Meski begitu, tersedia beberapa titik kantong parkir bagi umat yang hendak melangsungkan ibadat di Gereja Katedral. Kantong parkir itu meliputi Kantor Pos Jakarta Pusat, SMP Santa Ursula, area Lapangan Banteng dan juga Kemenag RI. Bagi umat yang hadir tanpa melalui registrasi terlebih dahulu, Gereja Katedral tetap menyediakan tempat, yakni di area Plaza Maria. “Untuk yang sudah melakukan registrasi, mohon hadir 30 menit sebelumnya, paling lambat. Karena nanti sesudah itu, kursi nanti bisa kemungkinan"
                </Text>
                <Text style={styles.textBerita}>
                Berikut jadwal ibadat Natal 2024 di Gereja Katedral:
                Misa Malam Natal, Selasa, 24 Desember 2024
                1. Misa I (online & offline) pukul 17.00 WIB dipimpin Romo Albertus Hani Rudi Hartoko
                2. Misa II (online & offline) pukul 20.00 WIB dipimpin oleh Romo Yohanes Deodatus
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