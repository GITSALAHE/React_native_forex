import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Linking, Pressable } from 'react-native';

import axios from "axios"

const WalletNav = ({ navigation, route }) => {
    const { userData, data } = route.params;

    useEffect(() => {
        getWalletValue();
    });
    const [Wallet, SetWallet] = useState([])
    const [Sold, SetSold] = useState([])

    const getWalletValue = async () => {
        await axios.get(`https://foreeeeex.herokuapp.com/api/user/info/${userData.email}`).then((walletdata) => {
            SetWallet(walletdata.data.walletSold)
            SetSold(walletdata.data.sold)
        })
        .catch((e) => {
            console.log(e)
        })
    }
  return (
    <View style={styles.bg}>
        <View style={styles.userInfo}>
            <Image source={{uri: `${userData.photo_url}`}} style={{width:40, height:40,borderRadius:30}} />
            <Text style={styles.userInfoTxt}> {userData.name} </Text>
        </View>
        <View>
        <Text style={styles.walletNum}>you have:  {Wallet} $ in wallet</Text>
        <Text style={styles.walletNum}>you have:  {Sold} $ in your account</Text>
        </View>
        
    </View>
  );
};

export default WalletNav;

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "#2A7FFF",
        flex:1,
      
      },
    userInfo: {
        
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "baseline"
    },
    userInfoTxt: {
        fontWeight: "bold",
        color: '#ffffff',
    },
    walletNum: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 100,
        textAlign: "center",
        color: '#ffffff',
    }
});

