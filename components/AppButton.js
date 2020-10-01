import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import styled from "styled-components";

export default function AppButton(props) {
  const fontstyle = props.fontstyle ? props.fontstyle : false;
  const fontsize = props.fontsize ? props.fontsize : 40;
  const bgcolor = props.bgcolor ? props.bgcolor : null;
  return (
    <View
      style={
        props.dark
          ? styles(null, null, props.margin || null).buttonborderdark
          : styles(null, null, props.margin || null).buttonborder
      }
    >
      <TouchableOpacity
        onPress={props.onPress}
        style={
          props.dark
            ? styles(null, null, null, bgcolor).buttonbasedark
            : styles(null, null, null, bgcolor).buttonbase
        }
      >
        <Text
          style={
            props.dark
              ? styles(fontstyle, fontsize).buttonlabeldark
              : styles(fontstyle, fontsize).buttonlabel
          }
        >
          {props.children}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const borderwidth = 0.8;
const borderradius = 10;
const fontsize = 34;

const styles = (fontstyle, size, margin, bgcolor) =>
  StyleSheet.create({
    buttonborder: {
      // margin: margin ? margin : 10,
      margin: 2,
      borderRadius: borderradius,
      backgroundColor: "#000",
      // height: 60,
      height: margin !== null ? 40 : 60,
    },
    buttonbase: {
      margin: borderwidth,
      // margin:
      borderRadius: borderradius,
      backgroundColor: bgcolor || "#FFF",
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

    buttonborderdark: {
      // margin: margin ? margin : 10,
      margin: 2,
      borderRadius: borderradius,
      backgroundColor: "#000",
      height: margin !== null ? 40 : 60,
    },
    buttonbasedark: {
      margin: borderwidth,
      borderRadius: borderradius,
      backgroundColor: bgcolor || "#0c0f0aff",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonlabeldark: {
      textAlign: "center",
      color: "white",
      fontSize: size,
      fontFamily: fontstyle ? fontstyle : null,
    },
  });
