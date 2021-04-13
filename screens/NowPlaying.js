import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
//import { Audio } from 'expo-av';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function nowPlaying() {

    // const [sound, setSound] = useState()

    // function playSound(){
    //     Audio.Sound.createAsync(
    //         require('./assets/')
    //     );
    // };
    return (
        <ScrollView>
            <View style={styles.Container}>
                <TouchableOpacity style={styles.enButton}>
                    <Text style={styles.enText}>Play</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.kuButton}>
                    <Text style={styles.kuText}> دەستپێكە</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.arButton}>
                    <Text style={styles.arText}> ابدا</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    Container: {
        height: 1700,
        width: 500,
        backgroundColor: '#b0a9b0',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    enButton: {
        backgroundColor: 'grey',
        marginTop: 50,
        marginBottom: 100,
        width: 400,
        height: 400,
        borderRadius: 800,
    },
    enText: {
        fontSize: 80,
        marginTop: 150,
        textAlign: 'center',
        opacity: 0.2,
    },
    kuButton: {
        backgroundColor: 'grey',
        marginTop: 90,
        marginLeft: -100,
        marginBottom: 100,
        width: 400,
        height: 300,
        borderRadius: 800,
    },
    
    kuText: {
        marginTop: 80,
        fontSize: 80,
        opacity: 0.2,
        textAlign: 'center',
    },
    arButton: {
        backgroundColor: 'grey',
        marginTop: 100,
        marginBottom: 100,
        width: 400,
        height: 400,
        borderRadius: 800,
    },
    arText: {
        fontSize: 80,
        marginTop: 150,
        textAlign: 'center',
        opacity: 0.2,
    },
});
