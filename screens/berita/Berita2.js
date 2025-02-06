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
                <Text style={styles.infoPage}> | Ekonomi dan Bisnis</Text>
            </View>

            <ScrollView>
                <Text style={styles.headerText}>
                    Jika QRIS Kena PPN 12 Persen, Pajaknya Ditanggung Penjual atau Pembeli?
                </Text>
                <Text style={styles.dateText}>
                    23 Dec 2024 14:05 WIB
                </Text>
                <Image style={styles.pictureText} source={require('../../assets/berita2.png')}/>
                <Image style={styles.socialMedia} source={require('../../assets/frame_social.png')}/>
                <Text style={styles.textBerita}>
                    Pajak pertambahan nilai (PPN) dikenakan atas transaksi yang memanfaatkan fintech, termasuk QRIS (Quick Response Indonesian Standard). Sehingga, kenaikan pajak menjadi 12 persen tahun 2025 mendatang otomatis akan ikut memengaruhi transaksi yang menggunakan QRIS.
                </Text>
                <Text style={styles.textBerita}>
                    Sebagaimana diketahui, PPN atas transaksi via QRIS telah berjalan sejak tahun 2022, dan pajaknya dibebankan kepada merchant, atau toko yang menjual. Namun, pajaknya bukan dari nilai top up, saldo, maupun nilai transaksi jual beli, melainkan atas jasa layanan penggunaan uang elektronik atau dompet digital. Sebagian masyarakat masih menganggap bahwa pajak QRIS akan dibebankan kepada pembeli, namun faktanya tidak demikian.
                </Text>
                <Text style={styles.textBerita}>
                    Ditjen Pajak Kementerian Keuangan menegaskan bahwa pajak pertambahan nilai pada jasa layanan QRIS dibebankan kepada pemilik outlet atau merchant, bukan kepada pembeli atau konsumen.
                </Text>
                <Text style={styles.textBerita}>
                    (24/12/2024), dalam transaksi QRIS, PPN dikenakan pada merchant discount rate (MDR). MDR adalah biaya yang dibebankan kepada merchant (penjual) atas setiap transaksi yang dilakukan melalui kartu kredit atau debit, termasuk juga QRIS. Artinya, tarif PPN pada transaksi QRIS akan ditanggung oleh merchant, bukan konsumen seperti yang selama ini disalahpahami oleh masyarakat. Artinya, tarif PPN pada transaksi QRIS akan ditanggung oleh merchant, bukan konsumen seperti yang selama ini disalahpahami oleh masyarakat.
                </Text>
                <Text style={styles.textBerita}>
                    Untuk diketahui, biaya MDR QRIS yang dikenakan pada merchant untuk transaksi di atas Rp 500.000 adalah 0,3 persen. Sementara untuk transaksi dibawah Rp 500.000 tidak dikenakan biaya alias gratis. Fiskal Kementerian Keuangan menegaskan, masyarakat pengguna alat QRIS tidak dibebani. Pengenaan pajak QRIS dibebankan kepada penjual dan pengguna layanan transaksi di platform teknologi finansial. Jadi, dampak penyesuaian PPN 12 persen tidak akan dirasakan oleh masyarakat yang menggunakan QRIS untuk melakukan pembelian.
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