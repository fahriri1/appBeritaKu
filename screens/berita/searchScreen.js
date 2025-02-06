import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';

export default function SearchScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.titlePage}>
                <View style={styles.titleContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image style={styles.imageHeader} source={require('../../assets/Arrow_left_white.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.searchContainer} onPress={() => navigation.navigate('Search')}>
                        <Image style={styles.iconSearch} source={require('../../assets/Search_white.png')}/>
                        <Text style={styles.searchText}> Berita Hari Ini </Text>
                        <Image style={styles.iconSearch} source={require('../../assets/Search_white.png')}/>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView>

                {/* Main Section */}
                <View style={styles.containerPilihan}>
                    <Text style={styles.mainText}>Pilih Topik</Text>

                    {/* ROW ONE */}
                    <View style={styles.rowCard}>
                        <TouchableOpacity style={styles.cardPilihan}>
                            <Text style={styles.textPilihan}>Berita Utama</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardPilihan}>
                            <Text style={styles.textPilihan}>Politik & Hukum</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardPilihan}>
                            <Text style={styles.textPilihan}>Ekonomi & Bisnis</Text>
                        </TouchableOpacity>
                    </View>

                    {/* ROW TWO */}
                    <View style={styles.rowCard}>
                        <TouchableOpacity style={styles.cardPilihan}>
                            <Text style={styles.textPilihan}>Teknologi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardPilihan}>
                            <Text style={styles.textPilihan}>Hiburan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardPilihan}>
                            <Text style={styles.textPilihan}>Olahraga</Text>
                        </TouchableOpacity>
                    </View>

                    {/* ROW THREE */}
                    <View style={styles.rowCard}>
                        <TouchableOpacity style={styles.cardPilihan}>
                            <Text style={styles.textPilihan}>Kesehatan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardPilihan}>
                            <Text style={styles.textPilihan}>Pendidikan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardPilihan}>
                            <Text style={styles.textPilihan}>Travel & Kuliner</Text>
                        </TouchableOpacity>
                    </View>

                    {/* ROW FOUR */}
                    <View style={styles.rowCard}>
                        <TouchableOpacity style={styles.cardPilihan}>
                            <Text style={styles.textPilihan}>Lingkungan & Sains</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardPilihan}>
                            <Text style={styles.textPilihan}>Regional</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardPilihan}>
                            <Text style={styles.textPilihan}>Internasional</Text>
                        </TouchableOpacity>
                    </View>

                    {/* ROW FIVE */}
                    <View style={styles.rowCard}>
                        <TouchableOpacity style={styles.cardPilihan}>
                            <Text style={styles.textPilihan}>Otomotif</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardPilihan}>
                            <Text style={styles.textPilihan}>Gaya Hidup</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardPilihan}>
                            <Text style={styles.textPilihan}>Spiritualitas</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.containerZone}>
                    <Text style={styles.mainText}>Zona Berita</Text>
                    <TouchableOpacity style={styles.zoneCard}>
                        <Image style={styles.zoneIcon} source={require('../../assets/pinLock.png')}/>
                        <View style={styles.zoneTextContainer}>
                            <Text style={styles.zoneHeader}>Tanggerang</Text>
                            <Text style={styles.zoneText}>+50 Berita Baru Hari Ini</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.zoneCard}>
                        <Image style={styles.zoneIcon} source={require('../../assets/pinLock.png')}/>
                        <View style={styles.zoneTextContainer}>
                            <Text style={styles.zoneHeader}>Depok</Text>
                            <Text style={styles.zoneText}>+50 Berita Baru Hari Ini</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.zoneCard}>
                        <Image style={styles.zoneIcon} source={require('../../assets/pinLock.png')}/>
                        <View style={styles.zoneTextContainer}>
                            <Text style={styles.zoneHeader}>Yogyakarta</Text>
                            <Text style={styles.zoneText}>+50 Berita Baru Hari Ini</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.zoneCard}>
                        <Image style={styles.zoneIcon} source={require('../../assets/pinLock.png')}/>
                        <View style={styles.zoneTextContainer}>
                            <Text style={styles.zoneHeader}>Bandung</Text>
                            <Text style={styles.zoneText}>+50 Berita Baru Hari Ini</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.zoneCard}>
                        <Image style={styles.zoneIcon} source={require('../../assets/pinLock.png')}/>
                        <View style={styles.zoneTextContainer}>
                            <Text style={styles.zoneHeader}>Bogor</Text>
                            <Text style={styles.zoneText}>+50 Berita Baru Hari Ini</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.zoneCard}>
                        <Image style={styles.zoneIcon} source={require('../../assets/pinLock.png')}/>
                        <View style={styles.zoneTextContainer}>
                            <Text style={styles.zoneHeader}>Bekasi</Text>
                            <Text style={styles.zoneText}>+50 Berita Baru Hari Ini</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.zoneCard}>
                        <Image style={styles.zoneIcon} source={require('../../assets/pinLock.png')}/>
                        <View style={styles.zoneTextContainer}>
                            <Text style={styles.zoneHeader}>Jakarta</Text>
                            <Text style={styles.zoneText}>+50 Berita Baru Hari Ini</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{ flex: 1},

    // Title Page //
    titlePage:{ backgroundColor: '#210E43', height: 80 },
    titleContainer: {top: 30, left: 20, flexDirection: 'row', alignItems: 'center'},
    imageHeader: {width: 24, height: 24},
    textHeader: {marginLeft: 10, color: 'white', fontSize: 13, fontWeight: 700},

    // Search //
    searchContainer: { 
        flexDirection: 'row', 
        width: 300, 
        height: 40,
        alignItems: 'center',
        borderWidth: 1, 
        borderRadius: 10,
        borderColor: 'white',
        marginLeft: 20,
    },
    iconSearch:{padding: 10, left: 5},
    searchText:{width: 230, left: 5, color: 'white'},

    // Main //
    mainText:{fontSize: 13, fontWeight: 600, marginBottom: 5},

    containerPilihan:{left:40, marginTop: 15},
    rowCard:{flexDirection: 'row', gap:19, marginBottom: 10},
    cardPilihan:{
        borderWidth: 1, 
        borderRadius:30, 
        width:97, 
        height: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textPilihan:{fontSize: 9, fontWeight: 700},

    containerZone:{left: 40, marginTop: 15},
    zoneCard: {
        width: 330,
        padding: 10,
        borderWidth: 1, 
        borderRadius: 10, 
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: 10,
    },
    zoneIcon: {width: 24, height: 24, left: 10},
    zoneTextContainer: {left: 25},
    zoneHeader: {fontSize: 10, fontWeight: 500},
    zoneText: {fontSize: 8, fontWeight: 400, marginTop: 3, color:'#508C9B'}

});