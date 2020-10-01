import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";

import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import AppIcon from "./components/AppIcon.js";
import QuotePage from "./components/QuotePage.js";
import SettingsPage from "./components/SettingsPage.js";
import BookmarksPage from "./components/BookmarksPage.js";

import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Parisienne_400Regular } from "@expo-google-fonts/parisienne";
import { Imprima_400Regular } from "@expo-google-fonts/imprima";
import { ShadowsIntoLightTwo_400Regular } from "@expo-google-fonts/shadows-into-light-two";
import { AppLoading } from "expo";
import Toast from "react-native-simple-toast";
import { useLinkProps } from "@react-navigation/native";

export default function App() {
  const [activepage, setactivepage] = useState("quotes");
  const [fontstyle, setfontstyle] = useState("Parisienne_400Regular");
  const [fontsize, setfontsize] = useState(30);
  const [stateloaded, setstateloaded] = useState(false);
  const [favoritequotes, setfavoritequotes] = useState(new Array());
  const [selectedquote, setselectedquote] = useState(0);

  const addfavoritequote = (id) => {
    if (!favoritequotes.some((element) => element === id)) {
      storeData("favoritequotes", [...favoritequotes, id]);
      setfavoritequotes((favoritequotes) => [...favoritequotes, id]);
    }
    // getData("favoritequotes").then((data) => {
    //   console.log(data);
    // });
  };

  let [fontsLoaded] = useFonts({
    Parisienne_400Regular,
    Imprima_400Regular,
    ShadowsIntoLightTwo_400Regular,
  });

  useEffect(() => {
    const Initialize = new Promise(function (res, rej) {
      getData("fontsize").then((fsize) => {
        getData("fontstyle").then((fstyle) => {
          getData("favoritequotes").then((fquotes) => {
            getData("selectedquote").then((squote) => {
              res({
                fontsize: JSON.parse(fsize) || fontsize,
                fontstyle: JSON.parse(fstyle) || fontstyle,
                favoritequotes: JSON.parse(fquotes) || [],
                selectedquote: JSON.parse(squote) || 0,
              });
            });
          });
        });
      });
    });

    Initialize.then((data) => {
      setstateloaded(true);

      setfontsize(data.fontsize);
      setfontstyle(data.fontstyle);
      setfavoritequotes(data.favoritequotes);
      // setselectedquote(data.selectedquote);

      // console.log("selected quote: " + selectedquote);
      // console.log("favorite quotes: " + favoritequotes);
    });
  }, [stateloaded]);

  const getData = async (key) => {
    try {
      return new Promise(async function (res, rej) {
        const data = await AsyncStorage.getItem("@" + key);
        const parsed = JSON.parse(data);
        res(data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(
        "@" + key,
        typeof value !== Array ? JSON.stringify(value) : value
      );
    } catch (e) {
      console.log(e);
    }
  };

  const clearAllData = async () => {
    try {
      await AsyncStorage.getAllKeys()
        .then((keys) => AsyncStorage.multiRemove(keys))
        .then((isvalid) => {
          Toast.show("data cleared", Toast.SHORT);
          setfavoritequotes([]);
          setselectedquote(0);
          setfontstyle("Parisienne_400Regular");
          setfontsize(30);
        });
    } catch (e) {
      Toast.show("data cant be removed", Toast.SHORT);
    }
  };

  const quotes = [
    {
      quote:
        "All we have to decide is what to do with the time that is given us.",
      source: "Gandalf, J.R.R Tolkien",
    },
    {
      quote:
        "It is not despair, for despair is only for those who see the end beyond all doubt. We do not.",
      source: "Gandalf, J.R.R Tolkien",
    },
    {
      quote: "For even the very wise cannot see all ends.",
      source: "Gandalf, J.R.R Tolkien",
    },
    {
      quote: "Fly you fools",
      source: "Gandalf, J.R.R Tolkien",
    },
    {
      quote:
        "Go back to the abyss! Fall into nothingness that awaits you and your master!",
      source: "Gandalf, J.R.R Tolkien",
    },
  ];

  if (!fontsLoaded || !stateloaded) {
    // return <AppLoading />;
    return (
      <View>
        <Text style={{ textAlign: "center" }}>Loading</Text>
      </View>
    );
  } else
    return (
      <SafeAreaView style={styles(activepage).container}>
        <LinearGradient
          colors={
            activepage === "quotes"
              ? ["#FFB238", "#FF773D", "#FF773D", "#FF773D"]
              : ["#5FC8BA", "#0BFFDF", "#0BFFDF", "#0BFFDF", "#0BFFDF"]
          }
          style={styles().linearGradient}
        >
          <View style={styles().topbar}>
            {activepage === "settings" || activepage === "bookmarks" ? (
              <AppIcon
                onPress={() => setactivepage("quotes")}
                name="arrow-back"
                align="flex-start"
                color="white"
              />
            ) : (
              <AppIcon
                onPress={() => setactivepage("bookmarks")}
                name="book"
                align="flex-start"
                color="white"
              />
            )}
            {activepage === "settings" ? null : (
              <AppIcon
                onPress={() => setactivepage("settings")}
                name="settings"
                align="flex-end"
                color="white"
              />
            )}
          </View>
          <View style={styles().titlecontainer}>
            <Text style={styles().title}>
              Becca's Quotes
              {/* {favoritequotes instanceof Array
                ? favoritequotes.map((r) => {
                    return r;
                  })
                : null} */}
            </Text>
          </View>
          <View style={styles(activepage).pagecontainer}>
            {activepage === "quotes" ? (
              <QuotePage
                setactivepage={() => setactivepage("quotes")}
                fontstyle={fontstyle}
                fontsize={fontsize}
                favoritequotes={favoritequotes}
                selectedquote={selectedquote}
                setfavoritequotes={setfavoritequotes}
                setselectedquote={setselectedquote}
                storeData={storeData}
                addfavoritequote={addfavoritequote}
                quotes={quotes}
              />
            ) : activepage === "settings" ? (
              <SettingsPage
                setactivepage={setactivepage}
                fontsize={fontsize}
                setfontsize={setfontsize}
                fontstyle={fontstyle}
                setfontstyle={setfontstyle}
                storeData={storeData}
                clearAllData={clearAllData}
              />
            ) : activepage === "bookmarks" ? (
              <BookmarksPage
                setactivepage={setactivepage}
                favoritequotes={favoritequotes}
                quotes={quotes}
              />
            ) : null}
          </View>

          <StatusBar style="auto" />
        </LinearGradient>
      </SafeAreaView>
    );
}

const styles = (activepage) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    linearGradient: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "green",
    },
    pagecontainer: {
      flex: 1,
      width: "100%",
      position: "absolute",
      height: "80%",
      bottom: 0,
      backgroundColor: "white",
      borderTopLeftRadius: activepage === "quotes" ? 100 : 0,
      borderTopRightRadius:
        activepage === "settings" || activepage === "bookmarks" ? 100 : 0,
    },
    topbar: {
      flex: 1,
      position: "absolute",
      flexDirection: "row",
      width: "90%",
      alignItems: "center",
      justifyContent: "center",
      top: 35,
    },
    titlecontainer: {
      // flex: 1,
      position: "absolute",
      top: "12%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      textAlign: "center",
      color: "white",
      fontSize: 38,
      fontFamily: "Parisienne_400Regular",
    },
    bottombar: {
      flex: 1,
      flexDirection: "row",
      position: "absolute",
      bottom: 0,
      justifyContent: "space-between",
      width: "92%",
    },
    buttonContainer: {
      flex: 1,
    },
    buttonContainer2: {
      flex: 2,
    },
  });
