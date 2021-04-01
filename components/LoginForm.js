import React, { useState }from 'react'
import { Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function LoginForm({setUser}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        setUser({username})
    }
    return (
        <ScrollView style={StyleSheet.form}>
            <Image source={require('/Users/razsarwar/flatiron/capstone/pema-frontend/assets/pema-login.png')} style={styles.Image} />
            <Text style={styles.Text}>P E M A</Text>
            <TextInput
                onChangeText={(text) => setUsername(text)}
                style={styles.loginInput}
                placeholder="Username"
                value={username}
                />
            <TextInput
                onChangeText={(text) => setPassword(text)}
                style={styles.loginInput}
                placeholder="Password"
                value={password}
                secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}>
                <Text>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setUser({})}>
                    <Text>Return</Text>
                </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#ffffff',
    },
    loginInput: {
        marginLeft: 160,
        marginBottom: -90,
        marginTop: 100,
        flex: 0.5,
        fontSize: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 20,
        width: 150,
    },
    Text: {
        margin: 140,
        marginTop: -450,
        textAlign: 'center',
        fontSize: 20,
        width: 150
    },
    button: {
        marginLeft: 150,
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        padding: 10,
        borderRadius: 60,
        width: 130,
        marginTop: 160,
        opacity: 0.5
    },
    Image: {
        flex: 3,
        resizeMode: 'cover',
        opacity: 0.5,
        width: 420,
        height: 600,
        borderBottomRightRadius: 220,
        borderBottomLeftRadius: 220
    }
})
