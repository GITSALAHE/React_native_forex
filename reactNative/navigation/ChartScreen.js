import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Linking, Pressable } from 'react-native';

import axios from "axios"

const ChartScreen = ({ navigation, route }) => {
    const { userData, data, cryptoPrice } = route.params;

    const webView = () => {
        navigation.navigate("WebviewNav", { userData, data });
    }
    const walletFun = () => {
        navigation.navigate("WalletNav", { userData, data })
    }
    const buyFun = () => {
        let GetUserData = {email: userData.email, price: cryptoPrice}

        axios.post("https://foreeeeex.herokuapp.com/api/user/buy", GetUserData).then(() => {
            console.log("data updated")
          })
          .catch((e) => {
            alert('you have not money')
          })
    }
    const sellFun = () => {
        let GetUserData = {email: userData.email, price: cryptoPrice}

        axios.post("https://foreeeeex.herokuapp.com/api/user/sell", GetUserData).then(() => {
            console.log("data updated")
          })
          .catch((e) => {
            alert('you have not money')
          })
    }

  return (
    <View style={styles.bg} >
        <View style={styles.userInfo}>
            <Image source={{uri: `${userData.photo_url}`}} style={{width:40, height:40,borderRadius:30}} />
            <Text style={styles.userInfoTxt}> {userData.name} </Text>
        </View>

        <Pressable onPress={webView} style={{marginTop: 100}} >
            <Text style={{fontWeight: "bold", textAlign: "center"}} >View chart</Text>
        </Pressable>

        <View style={styles.btnGroup}>
            <Pressable onPress={walletFun} style={styles.BTN}>
                <Text style={{fontWeight: "bold"}} >YOUR WALLET</Text>
            </Pressable>
            <Pressable onPress={buyFun} style={styles.BTN}>
                <Text style={{fontWeight: "bold"}} >BUY</Text>
            </Pressable>
            <Pressable onPress={sellFun} style={styles.BTN}>
                <Text style={{fontWeight: "bold",}} >SELL</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default ChartScreen;

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "#2A7FFF",
        
      },
    userInfo: {
        flex: 1,
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    userInfoTxt: {
        fontWeight: "bold",
        
    },
    btnGroup: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },
    BTN: {
        padding: 20,
        textAlign: "center",
        backgroundColor: "#2AF3F5",
        margin: 10,
        marginBottom: 100,
        borderRadius: 20,
    },
});
