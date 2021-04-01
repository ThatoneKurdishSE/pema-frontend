import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native'
import { Audio } from 'expo-av';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function nowPlaying() {

    const [sound, setSound] = useState()

    // function playSound(){
    //     Audio.Sound.createAsync(
    //         require('./assets/')
    //     );
    // };
    return (
            <View style={styles.Container}>
                <TouchableOpacity  onPress={playSound} style={styles.button}>

                    <Text>     Play</Text>
                </TouchableOpacity>
            </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'red',
        width: 70,
        height: 30,
        borderRadius: 150,
    }
});
