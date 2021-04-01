import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card, Button} from 'react-native-elements';

export default function Welcome({user, navigation}) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.text}>Welcome, {user.username}.</Text>
                <Image source={require('../assets/homePagePic.jpeg')} style={styles.Image}/>
                    <TouchableOpacity onPress={()=> navigation.navigate('NowPlaying')}>
                        <Card containerStyle={{borderRadius: 35, width: 200,}}>
                            <Card.Title>At Home - 10 minutes</Card.Title>
                                    <Card.Image source={require('../assets/g9n.jpeg')}>
                                </Card.Image>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('NowPlaying')}>
                        <Card containerStyle={{borderRadius: 35, width: 200,}}>
                            <Card.Title>Anxiety - 5 minutes</Card.Title>
                                <Card.Image source={require('../assets/photo-1517191434949-5e90cd67d2b6.jpeg')}>
                                    <Button
                                    buttonStyle={{opacity: 0., color: 'black', borderRadius: 200, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                    title='Play'/>
                            </Card.Image>
                        </Card>
                    </TouchableOpacity>
                    <Card containerStyle={{borderRadius: 35, width: 200,}}>
                        <Card.Title style={{fontSize: 13,}}>Happiness - 32 minutes.</Card.Title>
                                <Card.Image source={require('../assets/happiness.jpeg')}>
                            </Card.Image>
                    </Card>
                    <TouchableOpacity onPress={()=> navigation.navigate('NowPlaying')}>
                        <Card containerStyle={{borderRadius: 35, width: 200,}}>
                            <Card.Title>Jealousy - 13 minutes.</Card.Title>
                                <Card.Image source={require('../assets/jealous.jpeg')}>
                                    <Button
                                    buttonStyle={{opacity: 0., color: 'black', borderRadius: 200, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                    title='Play'/>
                            </Card.Image>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('NowPlaying')}>
                        <Card containerStyle={{borderRadius: 35, width: 200,}}>
                            <Card.Title style={{fontSize: 13,}}>Openness - 15 minutes.</Card.Title>
                                    <Card.Image source={require('../assets/open.jpeg')}>
                                </Card.Image>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('NowPlaying')}>    
                        <Card containerStyle={{borderRadius: 35, width: 200,}}>
                            <Card.Title>Eating - 4 minutes.</Card.Title>
                                    <Card.Image source={require('../assets/eat.jpeg')}>
                                </Card.Image>
                        </Card>
                    </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    welcomeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        fontWeight: 'bold',
    },
    text: {
        marginBottom: -200,
        lineHeight: 200,
        alignSelf: 'center',
        color: "black",
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: "center",
        height: 200,
        width: 170,
        textAlignVertical: 'center',
    },
    Image: {
        height: 200,
        width: 500,
        opacity: 0.4,
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
    },
    TMText: {
        marginTop: 30,
        height: 100,
        backgroundColor: 'black',
        opacity: 0.6,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,
    },
})