import React from 'react'
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default function Signup() {
    return (
        <View>
            <Text>Sign-up with your email address!</Text>
            <TextInput>Name</TextInput>
            <TextInput>Email</TextInput>
            <TextInput>Password</TextInput>
            <TextInput>Confirm Password</TextInput>
            <Text>Or sign up using:</Text>
            <Button>Google</Button>
            <Button>Apple-Health</Button>
            <Button>Twitter</Button>
        </View>
    )
}
