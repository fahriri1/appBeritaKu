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
    textSection: {fontSize: 13, fontWeight: 400, left: 37, width: 328, marginTop: 50},
    containerChoise:{ 
        width: 328,
        height: 50,
        top: 20,
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
});