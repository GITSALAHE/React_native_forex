import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Google from "expo-google-app-auth";

import axios from 'axios'

const LoginScreen = ({ navigation }) => {
  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        androidClientId: `607696297500-d29dk1ssear0btfbo847146s9rv8lvev.apps.googleusercontent.com`,
        scopes: ['profile', 'email'],
      });

      let userData = {name: user.name, email: user.email, photo_url: user.photoUrl}

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        // loginResult.user.name

        axios.post("https://foreeeeex.herokuapp.com/api/user/signUp", userData).then(() => {
          console.log("data inserted")
        })
        .catch((e) => {
          console.log("data not inserted")
        })
        navigation.navigate("Profile", { userData, user });
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Login with Google" onPress={signInAsync} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: '70%',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
