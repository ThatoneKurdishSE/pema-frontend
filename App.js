import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import LoginForm from './components/LoginForm'

export default function App() {
  const [user, setUser] = useState({})

  return (
    <ScrollView style={styles.container}>
      {user.username
        ? <Text style={styles.text}> Welcome {user.username}</Text>
        : <LoginForm setUser={setUser}/>

      }
                      <TouchableOpacity
                    style={styles.button}
                    onPress={() => setUser({})}>
                <Text>Return</Text>
                </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
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
});
