import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import styled from "styled-components";

export default function Dropdown(props) {
  const fontstyle = props.fontstyle ? props.fontstyle : false;
  const fontsize = props.fontsize ? props.fontsize : 40;
  return (
    <View style={styles().buttonborder}>
      <TouchableOpacity style={styles().buttonbase}>
        <Text style={styles().buttonlabel}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  );
}

const borderwidth = 0.8;
const borderradius = 5;

const styles = (fontstyle, size, margin) =>
  StyleSheet.create({
    buttonborder: {
      flex: 1,
      borderRadius: borderradius,
      backgroundColor: "#000",
      height: 60,
      margin: 10,
    },
    buttonbase: {
      margin: borderwidth,
      borderRadius: borderradius,
      backgroundColor: "#FFF",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonlabel: {
      color: "black",
      textAlign: "center",
      fontSize: size,
      fontFamily: fontstyle ? fontstyle : null,
    },
  });
