import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import LoginForm from './components/LoginForm';
import Welcome from './screens/Welcome';
import About from './screens/About';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NowPlaying from './screens/NowPlaying';

export default function App() {
    const [user, setUser] = useState({})
    const Tab = createBottomTabNavigator();

    return (
        
            user.username
                ? <NavigationContainer >
                    <Tab.Navigator>
                        <Tab.Screen name="Welcome">
                            {(navProps) => <Welcome {...navProps} user={user} />}
                        </Tab.Screen>
                        <Tab.Screen name="NowPlaying">
                            {(navProps) => <NowPlaying {...navProps} />}
                        </Tab.Screen>
                        <Tab.Screen name="About">
                            {(navProps) => <About {...navProps} />}
                        </Tab.Screen>
                    </Tab.Navigator>
                </NavigationContainer>
                : <LoginForm setUser={setUser}/>
    
            // <TouchableOpacity
            //     style={styles.button}
            //     onPress={() => setUser({})}
            //     >
            //     <Text>Return</Text>
            // </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E5E5E5',
    },
    button: {
        marginLeft: 150,
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        padding: 10,
        borderRadius: 60,
        width: 130,
        marginTop: 160,
        opacity: 0.9
    },
});