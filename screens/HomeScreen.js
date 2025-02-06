import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';

export default function HomeScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.titlePage}>
                <Image source={require('../assets/WHITE.png')} style={styles.pageLogo}/>
            </View>

            {/* Search Section */}
            <TouchableOpacity style={styles.searchContainer} onPress={() => navigation.navigate('Search')}>
                <Image style={styles.iconSearch} source={require('../assets/Search.png')}/>
                <Text style={styles.searchText}> Berita Hari Ini </Text>
                <Image style={styles.iconSearch} source={require('../assets/Search.png')}/>
            </TouchableOpacity>
            
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

                {/* Separator Section */}
                <View style={styles.separatorContainer}>
                    <Text style={styles.separatorText}> TERKINI </Text>
                </View>

                {/* Tekini Section */}
                <View style={styles.containerTerkini}>
                    <View style={styles.containerRowTerkini}>
                        <TouchableOpacity style={styles.newsContainerTerkini} onPress={() => navigation.navigate('Berita2')}>
                            <Image style={styles.imageNewsTerkini} source={require('../assets/berita2.png')}/>
                            <Text style={styles.textKategoriTerkini}>EKONOMI & BISNIS</Text>
                            <Text style={styles.textMainTerkini}>Jika QRIS Kena PPN 12 Persen, Pajaknya Ditanggung Penjual atau Pembeli?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.newsContainerTerkini} onPress={() => navigation.navigate('Berita3')}>
                            <Image style={styles.imageNewsTerkini} source={require('../assets/berita3.png')}/>
                            <Text style={styles.textKategoriTerkini}>OTOMOTIF</Text>
                            <Text style={styles.textMainTerkini}>Catat Waktunya, Ganjil Genap di Jalur Puncak Berlaku mulai Hari Ini</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.newsContainerTerkini} onPress={() => navigation.navigate('Berita4')}>
                            <Image style={styles.imageNewsTerkini} source={require('../assets/berita4.png')}/>
                            <Text style={styles.textKategoriTerkini}>REGIONAL</Text>
                            <Text style={styles.textMainTerkini}>Jam Operasional Monas Saat Natal 2024</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerRowTerkini}>
                        <TouchableOpacity style={styles.newsContainerTerkini} onPress={() => navigation.navigate('Berita5')}>
                            <Image style={styles.imageNewsTerkini} source={require('../assets/berita5.png')}/>
                            <Text style={styles.textKategoriTerkini}>SPIRITUALITAS</Text>
                            <Text style={styles.textMainTerkini}>Terowongan Silaturahmi Dibuka untuk yang Beribadah di Katedral, Ini Ketentuannya...</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.newsContainerTerkini} onPress={() => navigation.navigate('Berita6')}>
                            <Image style={styles.imageNewsTerkini} source={require('../assets/berita6.png')}/>
                            <Text style={styles.textKategoriTerkini}>POLITIK & HUKUM</Text>
                            <Text style={styles.textMainTerkini}>3 Hakim yang Bebaskan Ronald Tannur Didakwa Terima Suap Rp 1 Miliar dan 308 Dollar…</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.newsContainerTerkini} onPress={() => navigation.navigate('Berita7')}>
                            <Image style={styles.imageNewsTerkini} source={require('../assets/berita7.png')}/>
                            <Text style={styles.textKategoriTerkini}>POLITIK & HUKUM</Text>
                            <Text style={styles.textMainTerkini}>Perjalanan Harvey Moeis dalam Kasus Korupsi Timah, dari Peran hingga Vonis</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <TouchableOpacity style={styles.newsContainer}>
                        <Image style={styles.imageNews} source={require('../assets/berita8.png')}/>
                        <View style={styles.containerTextNews}>
                            <Text style={styles.mainNews}>Puncak Arus Mudik, 40.448 Kendaraan Masuk Semarang melalui Jalan Tol</Text>
                            <View style={styles.subTextNews}>
                                <Text style={styles.topikNews}>REGIONAL</Text>
                                <Text style={styles.separatorNews}>.</Text>
                                <Text style={styles.waktuNews}>2 Menit yang Lalu</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.newsContainer}>
                        <Image style={styles.imageNews} source={require('../assets/berita9.png')}/>
                        <View style={styles.containerTextNews}>
                            <Text style={styles.mainNews}>H-1 Natal, Kondisi Lalu Lintas di Kawasan Malioboro Terpantau Ramai Lancar</Text>
                            <View style={styles.subTextNews}>
                                <Text style={styles.topikNews}>OTOMOTIF</Text>
                                <Text style={styles.separatorNews}>.</Text>
                                <Text style={styles.waktuNews}>14 Menit yang Lalu</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.newsContainer}>
                        <Image style={styles.imageNews} source={require('../assets/berita10.png')}/>
                        <View style={styles.containerTextNews}>
                            <Text style={styles.mainNews}>Sejumlah Rekayasa Lalu Lintas jika Akses Menuju Bandara Ngurah Rai Bali</Text>
                            <View style={styles.subTextNews}>
                                <Text style={styles.topikNews}>REGIONAL</Text>
                                <Text style={styles.separatorNews}>.</Text>
                                <Text style={styles.waktuNews}>38 Menit yang Lalu</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.newsContainer}>
                        <Image style={styles.imageNews} source={require('../assets/berita11.png')}/>
                        <View style={styles.containerTextNews}>
                            <Text style={styles.mainNews}>Libur Nataru 2024/2025, Cek Daftar Lengkap Tarif Tol Trans Jawa</Text>
                            <View style={styles.subTextNews}>
                                <Text style={styles.topikNews}>REGIONAL</Text>
                                <Text style={styles.separatorNews}>.</Text>
                                <Text style={styles.waktuNews}>2 Menit yang Lalu</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View style={styles.navigationBar}>
                <TouchableOpacity style={styles.navigationIcon}>
                    <Image style={styles.icon} source={require('../assets/homeSelected.png')}/>
                    <Text style={[styles.textIconSlected, styles.textIcon]}>Beranda</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navigationIcon} onPress={() => navigation.navigate('Simpan')}>
                    <Image style={styles.icon} source={require('../assets/icon_simpan.png')}/>
                    <Text style={styles.textIcon}>Disimpan</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navigationIcon} onPress={() => navigation.navigate('Akun')}>
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

    // Search //
    searchContainer: { 
        flexDirection: 'row', 
        width: 370, 
        height: 40,
        alignItems: 'center',
        borderWidth: 1, 
        borderRadius: 10,
        marginLeft: 20,
        marginTop: 10,
    },
    iconSearch:{padding: 10, left: 5},
    searchText:{width: 300, left: 5},

    // Main News //
    mainNewsContainer: { flexDirection: 'row', marginLeft: 40, marginTop: 10},
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

    // Separator //
    separatorContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        borderLeftWidth: 4, 
        height: 28, 
        marginLeft: 40,
        marginTop: 10
    },
    separatorText: {fontSize: 13, fontWeight: 700, paddingLeft: 9},

    // Terkini //
    containerTerkini: {left: 40, top: 10},

    containerRowTerkini: {flexDirection: 'row', width: 331, marginBottom: 15},

    newsContainerTerkini: {marginRight: 10, height: 115, width: 97},
    imageNewsTerkini: {width: 97, height: 62, borderRadius: 10},
    textKategoriTerkini: {fontSize: 6, fontWeight: 600, color: '#134B70', marginTop: 5},
    textMainTerkini: {fontSize: 7, fontWeigh: 500, width: 90, marginTop: 5},

    // NEWS //
    newsContainer: {flexDirection: 'row', left: 40, width: 238, marginTop:10},
    imageNews: {width: 100, height: 62, borderRadius: 10},
    containerTextNews: {paddingLeft: 10, width: 240}, 

    mainNews: {fontSize: 10, fontWeight: 500, width: 212},

    subTextNews: {flexDirection: 'row'},
    topikNews: {fontSize: 7, fontWeight: 400, color: '#134B70'},
    separatorNews: {fontSize: 30, bottom: 28, left: 5},
    waktuNews: {fontSize: 7, fontWeigh: 400, left: 10, color: '#508C9B'},

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