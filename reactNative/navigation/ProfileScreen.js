import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Pressable } from "react-native";

const ProfileScreen = ({ route, navigation }) => {
  const DATA= [
    {
      id: 1,
      symbol: "SPX",
      name: "EUR / U.S. DOLLAR",
      img: "https://thumbs.dreamstime.com/b/diagramme-marchand-de-logo-candlestick-analysant-sur-le-march%C3%A9-boursier-de-forex-92713719.jpg",
      redirectTo: "https://www.tradingview.com/symbols/SPX/",
      price: 10
    },
    {
      id: 2,
      symbol: "TVC-IXIC",
      name: "BRITISH POUND / U.S. DOLLAR",
      img: "https://thumbs.dreamstime.com/b/diagramme-marchand-de-logo-candlestick-analysant-sur-le-march%C3%A9-boursier-de-forex-92713719.jpg",
      redirectTo: "https://www.tradingview.com/symbols/TVC-IXIC/",
      price: 20
    },
    {
      id: 3,
      symbol: "DJ-DJI",
      name: "AUSTRALIAN DOLLAR / JAPANESE YEN",
      img: "https://thumbs.dreamstime.com/b/diagramme-marchand-de-logo-candlestick-analysant-sur-le-march%C3%A9-boursier-de-forex-92713719.jpg",
      redirectTo: "https://www.tradingview.com/symbols/DJ-DJI/",
      price: 30
    }
  ]

  const { userData, user } = route.params;
  console.log("user from google", userData);

  return (
    <View style={styles.bg}>
      <View style={styles.userInfo}>
        <Image source={{uri: `${userData.photo_url}`}} style={{width:40, height:40,borderRadius:10}} />
        <Text style={styles.userInfoTxt}> Welcome {userData.name}</Text>
      </View>

      <SafeAreaView style={styles.areaView}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.cryptoLists}>
            {
              DATA.map((data, i) => {
                return (
                  <View style={styles.cryptoListsData} key={i}>
                    <View style={styles.cryptoListsTopData}>
                      <Image source={{uri: `${data.img}`}}  style={{width:40, height:40,borderRadius:30}} />
                      <Text style={styles.userInfoTxt}>{data.symbol}</Text>
                      <Text style={styles.userInfoTxt}>{data.name}</Text>
                      <Text style={styles.userInfoTxt}>{data.price} $</Text>

                    <Pressable style={[styles.button, styles.buttonOpen]} onPress={() =>{ navigation.navigate("Chart", { userData, data: data.redirectTo, cryptoPrice: data.price }); }}>
                      {/* navigation.navigate("Chart", { user }); */}
                      <Text>SHOW chart</Text>
                    </Pressable>

                    </View>
                    {/* <Text style={styles.cryptoListsTxt}>{data.price} $</Text> */}
                  </View>
                )
              })
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#2A7FFF",
  },
  userInfo: {
    flex: 1,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    
  },
  userInfoTxt: {
    fontWeight: "bold",
    color: '#ffffff',
  },
  // item: {
  //   padding: 20,
  //   margin: 10,
  //   marginTop: 20,
  //   backgroundColor: "#ffdfdf",
  //   borderRadius: 20
  // },
  // title: {
  //   fontSize: 20,
  // },
  cryptoLists: {
    marginTop: 10
  },
  cryptoListsData: {
    padding: 20,
    margin: 5,
    backgroundColor: "#2AA5AB",
    borderRadius: 5
  },
  scrollView: {

    marginHorizontal: 20,
  },
  areaView: {
    marginTop: 40,
    marginBottom: 60
  },
  cryptoListsTxt: {
    fontSize: 20,
    fontWeight: "bold"
  },
  cryptoListsTopData: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2AF3F5",
  }
});

// firebase@^5.7.3
// https://assets.coincap.io/assets/icons/btc@2x.png

// https://docs.expo.io/versions/latest/sdk/webview/