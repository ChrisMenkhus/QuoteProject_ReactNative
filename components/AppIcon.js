import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function AppIcon(props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: props.align ? props.align : "center",
        justifyContent: "center",
      }}
    >
      <MaterialIcons
        name={props.name}
        size={props.size ? props.size : 32}
        color={props.color ? props.color : "black"}
        onPress={() => props.onPress()}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   buttonborder: {
//     margin: 10,
//     borderRadius: borderradius,
//     backgroundColor: "#000",
//     height: 60,
//   },
// });
