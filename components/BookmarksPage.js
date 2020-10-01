import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "./AppButton.js";
import Dropdown from "./Dropdown.js";

export default function BookmarksPage(props) {
  const bookmarkedquotes = props.favoritequotes;
  const quotes = props.quotes;
  return (
    <View style={styles().container}>
      <View style={styles().leftcolumn}>
        {bookmarkedquotes.map((i, id) => {
          // console.log("map id = " + id);
          // console.log("map i = " + i);

          return (
            <View style={styles().labelcontainer} key={i + "id"}>
              <Text numberOfLines={1} style={styles(24).labeltext}>
                {quotes[i].quote}
              </Text>
              <Text numberOfLines={1} style={styles(24).labeltext2}>
                {quotes[i].source}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = (size, style) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
    },
    optioncontainer: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    leftcolumn: {
      flex: 1,
      height: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    rightcolumn: {
      flex: 1,
      margin: 10,
    },
    labelcontainer: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 7,
      marginBottom: 20,
      borderBottomWidth: 1,
      width: "90%",
    },
    labeltext: {
      fontSize: size,
      alignItems: "flex-start",
    },
    labeltext2: {
      fontSize: size - 8,
      alignSelf: "flex-end",
    },
    buttoncontainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    buttonContainer2: {
      flex: 1,
    },
  });
