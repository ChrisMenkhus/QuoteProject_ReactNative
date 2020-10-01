import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "./AppButton.js";
import Dropdown from "./Dropdown.js";

export default function SettingsPage(props) {
  const handlefontsize = (newsize) => {
    props.storeData("fontsize", newsize);
    props.setfontsize(newsize);
  };

  const handlefontstyle = (newstyle) => {
    props.storeData("fontstyle", newstyle);
    props.setfontstyle(newstyle);
  };

  const clearalldata = () => {
    props.clearAllData();
  };

  return (
    <View style={styles().container}>
      <View style={styles().leftcolumn}>
        <View style={styles().labelcontainer}>
          <Text style={styles(24).labeltext}>font-size</Text>
        </View>
        <View style={styles().labelcontainer}>
          <Text style={styles(24).labeltext}>font family</Text>
        </View>
        <View style={styles().labelcontainer}>
          <Text style={styles(24).labeltext}>clear data</Text>
        </View>
      </View>

      <View style={styles().rightcolumn}>
        <View style={styles().buttoncontainer}>
          <View style={styles().buttonContainer2}>
            <AppButton
              margin={2}
              onPress={() => handlefontsize(24)}
              fontsize={24}
              dark={props.fontsize === 24 ? true : false}
            >
              24
            </AppButton>

            <AppButton
              margin={2}
              onPress={() => handlefontsize(30)}
              fontsize={30}
              dark={props.fontsize === 30 ? true : false}
            >
              30
            </AppButton>

            <AppButton
              margin={2}
              onPress={() => handlefontsize(34)}
              fontsize={34}
              dark={props.fontsize === 34 ? true : false}
            >
              34
            </AppButton>
          </View>
        </View>
        <View style={styles().buttoncontainer}>
          <View style={styles().buttonContainer2}>
            <AppButton
              margin={2}
              onPress={() => handlefontstyle("Imprima_400Regular")}
              dark={props.fontstyle === "Imprima_400Regular" ? true : false}
              fontstyle="Imprima_400Regular"
              fontsize={26}
            >
              Imprima
            </AppButton>
            <AppButton
              margin={2}
              onPress={() => handlefontstyle("Parisienne_400Regular")}
              dark={props.fontstyle === "Parisienne_400Regular" ? true : false}
              fontstyle="Parisienne_400Regular"
              fontsize={26}
            >
              Parisienne
            </AppButton>
            <AppButton
              margin={2}
              onPress={() => handlefontstyle("ShadowsIntoLightTwo_400Regular")}
              dark={
                props.fontstyle === "ShadowsIntoLightTwo_400Regular"
                  ? true
                  : false
              }
              fontstyle="ShadowsIntoLightTwo_400Regular"
              fontsize={26}
            >
              Shadows
            </AppButton>
          </View>
        </View>
        <View style={styles().buttoncontainer}>
          <View style={styles().buttonContainer2}>
            <AppButton
              margin={2}
              onPress={() => clearalldata()}
              fontstyle="Imprima_400Regular"
              fontsize={26}
            >
              Delete
            </AppButton>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* <View style={{ flex: 1 }}>
          <AppButton
            onPress={() => props.setactivepage("quotes")}
            title="next"
            dark={false}
          >
            cancel
          </AppButton>
        </View>
        <View style={{ flex: 1 }}>
          <AppButton title="next" dark={true}>
            save
          </AppButton>
        </View> */}
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
      justifyContent: "space-around",
      alignItems: "center",
    },
    rightcolumn: {
      flex: 1,
      margin: 10,
    },
    labelcontainer: {
      marginLeft: 20,
      marginRight: 0,
    },
    labeltext: {
      fontSize: size,
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
