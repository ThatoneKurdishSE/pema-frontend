import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import LoginForm from './components/LoginForm'

export default function App() {
  const [user, setUser] = useState({})

  return (
    <View style={styles.container}>
      {user.username
        ? <Text style={styles.text}> Welcome {user.username}</Text>
        : <LoginForm setUser={setUser}/>
      }
      <Button title={} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'space-around',
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  }
});
