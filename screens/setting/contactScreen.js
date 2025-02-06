import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';

export default function ContactScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.titlePage}>
                <View style={styles.titleContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Akun')}>
                        <Image style={styles.imageHeader} source={require('../../assets/Arrow_left_white.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.textHeader}> Hubungi Kami</Text>
                </View>
            </View>

            <ScrollView>

                {/* Main Section */}
                <Text style={styles.textSection}>Untuk keluhan, kritik, dan saran aplikasi BeritaKu, Anda dapat menghubungi :</Text>

                <TouchableOpacity style={[styles.container1, styles.containerChoise]}>
                    <Image style={styles.iconChoise} source={require('../../assets/whatsApp.png')}/>
                    <View style={styles.containerText}>
                        <Text style={styles.headerChoise}>+62 1234567890</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.container2, styles.containerChoise]}>
                    <Image style={styles.iconBacaNanti} source={require('../../assets/hubungi_icon.png')}/>
                    <View style={styles.containerText2}>
                        <Text style={styles.headerChoise}>+62 0987654321</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.container3, styles.containerChoise]}>
                    <Image style={styles.iconChoise} source={require('../../assets/mail.png')}/>
                    <View style={styles.containerText}>
                        <Text style={styles.headerChoise}>hotline@beritaku</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{ flex: 1},

    // Title Page //
    titlePage:{ backgroundColor: '#210E43', height: 80 },
    titleContainer: {top: 40, left: 20, flexDirection: 'row', alignItems: 'center'},
    imageHeader: {width: 24, height: 24},
    textHeader: {marginLeft: 10, color: 'white', fontSize: 13, fontWeight: 700},

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