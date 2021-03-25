import React, { useState }from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

export default function LoginForm(props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        props.setUser({
            username,
            password
        })
    }
    return (
        <View style={StyleSheet.form}>
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
                <Button title="Submit" onPress={handleSubmit}/>
        </View>
    )
}
const styles = StyleSheet.create({
    form: {
        flex: 1
    },
    loginInput: {
        fontSize: 45,
        backgroundColor: 'beige',
        borderRadius: 40,
        margin: 12,
        borderColor: 'black'
    }
})
