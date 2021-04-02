import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card, Button} from 'react-native-elements';

export default function Welcome({user, navigation}) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.text}>Welcome, {user.username}.
                    Start here
                </Text>
                <Image source={require('../assets/homePagePic.jpeg')} style={styles.Image}/>
                    <TouchableOpacity onPress={()=> navigation.navigate('NowPlaying')}>
                        <Card containerStyle={{borderRadius: 35, width: 400, backgroundColor: 'black', opacity: 0.8}}>
                            <Card.Title style={{fontSize: 20, fontWeight: 'normal',}}>
                                At Home - 10 minutes
                                |
                                لە ماڵەوە - ١٠ خولەک
                                |
                                في البيت - ١٠ دقائق
                            </Card.Title>
                                    <Card.Image source={require('../assets/g9n.jpeg')}>
                                </Card.Image>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('NowPlaying')}>
                        <Card containerStyle={{borderRadius: 35, width: 400, backgroundColor: 'black', opacity: 0.8}}>
                            <Card.Title style={{fontSize: 20, fontWeight: 'normal',}}>Anxiety - 5 minutes
                                        |
                                        دڵەڕاوکێ - ٥ خولەک
                                        |
                                        القلق - ٥ دقائق
                            </Card.Title>
                                <Card.Image source={require('../assets/photo-1488875482628-eee706cbfad5.jpeg')}>
                                    <Button
                                    buttonStyle={{opacity: 0., color: 'black', borderRadius: 200, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                    title='Play'/>
                            </Card.Image>
                        </Card>
                    </TouchableOpacity>
                    <Card containerStyle={{borderRadius: 35, width: 400, backgroundColor: 'black', opacity: 0.8}}>
                        <Card.Title style={{fontSize: 20, fontWeight: 'normal',}}>Happiness - 32 minutes
                            خۆشبەختی - ٣٢ خولەک
                            |
                            السعادة - ٣٢ دقائق
                        </Card.Title>
                                <Card.Image source={require('../assets/happiness.jpeg')}>
                            </Card.Image>
                    </Card>
                    <TouchableOpacity onPress={()=> navigation.navigate('NowPlaying')}>
                        <Card containerStyle={{borderRadius: 35, width: 400, backgroundColor: 'black', opacity: 0.8}}>
                            <Card.Title style={{fontSize: 20, fontWeight: 'normal',}}>Jealousy - 13 minutes 
                                دڵپیسی - ١٣ خولەک
                                |
                                الغيرة - ١٣ دقائق
                            </Card.Title>
                                <Card.Image source={require('../assets/jealous.jpeg')}>
                            </Card.Image>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('NowPlaying')}>
                        <Card containerStyle={{borderRadius: 35, width: 400, backgroundColor: 'black', opacity: 0.8}}>
                            <Card.Title style={{fontSize: 20, fontWeight: 'normal',}}>Openness - 15 minutes
                                کراوەیی - ١٥ خولەک
                                |
                                النفتاح - ١٥ دقائق
                            </Card.Title>
                                    <Card.Image source={require('../assets/open.jpeg')}>
                                </Card.Image>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('NowPlaying')}>    
                        <Card containerStyle={{borderRadius: 35, width: 400, backgroundColor: 'black', opacity: 0.8}}>
                            <Card.Title style={{fontSize: 20, fontWeight: 'normal',}}>Before Eating - 4 minutes
                                پێش نانخواردن - ٤ خولەک
                                |
                                قبل الاكل - ٤ دقائق
                            </Card.Title>
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
        marginBottom: -250,
        lineHeight: 200,
        alignSelf: 'center',
        color: "black",
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: "center",
        height: 200,
        width: 300,
        textAlignVertical: 'center',
    },
    Image: {
        height: 250,
        width: 500,
        opacity: 0.5,
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