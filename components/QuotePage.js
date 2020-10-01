import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "./AppButton.js";
import AppIcon from "./AppIcon.js";
import Toast from "react-native-simple-toast";

export default function QuotePage(props) {
  let favoritequotes = props.favoritequotes || [];
  const selectedquote = props.selectedquote;
  const setfavoritequotes = props.setfavoritequotes;
  const setselectedquote = props.setselectedquote;
  const quotes = props.quotes;

  // useEffect(() => {
  //   console.log(favoritequotes);
  // }, [favoritequotes]);

  const addfavoritequote3 = (id) => {
    if (!favoritequotes.includes(id)) {
      let tempquotes = favoritequotes.concat([id]);
      props.setfavoritequotes(tempquotes);
      props.storeData("favoritequotes", tempquotes);
      favoritequotes = tempquotes;
      console.log(tempquotes);
    } else {
      Toast.show("You already liked this quote.", Toast.SHORT);
    }
  };

  const handleselectedquote = (n) => {
    let final =
      props.selectedquote + n <= quotes.length - 1
        ? props.selectedquote + n
        : props.selectedquote + n >= quotes.length - 1
        ? props.selectedquote
        : props.selectedquote;

    props.setselectedquote(final);
    props.storeData("selectedquote", final);
  };

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <View style={styles().textbody}>
        <Text
          style={styles(props.fontsize, props.fontstyle).textbodyfont}
          numberOfLines={8}
        >
          {quotes[props.selectedquote].quote}
        </Text>
        <Text
          style={styles(props.fontsize - 2, props.fontstyle).textbodyfontsmall}
        >
          {quotes[props.selectedquote].source}
        </Text>
      </View>
      <View style={styles().bottombar}>
        <View style={styles().buttonContainer}>
          <AppButton title="favorite">
            <AppIcon
              name="bookmark"
              onPress={() => props.addfavoritequote(selectedquote)}
              color="#0c0f0aff"
            />
          </AppButton>
        </View>
        <View style={styles().buttonContainer}>
          <AppButton title="share">
            <AppIcon name="share" color="#0c0f0aff" />
          </AppButton>
        </View>
        <View style={styles().buttonContainer2}>
          <AppButton
            onPress={() => handleselectedquote(1)}
            title="next"
            dark={true}
            fontstyle="Parisienne_400Regular"
          >
            next
          </AppButton>
        </View>
      </View>
    </View>
  );
}

const styles = (size, style) =>
  StyleSheet.create({
    textbody: {
      width: "100%",
      padding: 10,
      marginTop: -35,
      justifyContent: "center",
      alignItems: "center",
      color: "#0c0f0aff",
      height: "100%",
    },
    textbodyfont: {
      fontSize: size,
      margin: 10,
      color: "#0c0f0aff",
      textAlign: "center",
      marginTop: 50,
      fontFamily: style,
    },
    textbodyfontsmall: {
      fontSize: size - 8,
      margin: 10,
      color: "#0c0f0aff",
      textAlign: "left",
      marginTop: 10,
      marginLeft: 55,
      fontFamily: style,
      width: "100%",
    },
    bottombar: {
      flex: 1,
      flexDirection: "row",
      position: "absolute",
      bottom: 0,
      justifyContent: "space-between",
      width: "95%",
      marginLeft: 10,
      marginRight: 10,
    },
    buttonContainer: {
      flex: 1,
      margin: 2,
    },
    buttonContainer2: {
      flex: 2,
      margin: 2,
    },
  });
