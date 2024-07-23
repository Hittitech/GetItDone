import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

import colors from "../config/colors.js";

const AppButton = ({ title, onPress, color = "primary" }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, { backgroundColor: color }]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
