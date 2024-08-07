import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import Screen from "../components/Screen";

export default function WelcomeScreen() {
  return (
    <Screen>
      <ImageBackground
        blurRadius={10}
        style={styles.background}
        source={require("../../assets/images/background.jpeg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("@/assets/images/react-logo.png")}
          />
          <Text style={styles.tagLine}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton title={"Login"} />
          <AppButton title={"Register"} color={colors.secondary} />
        </View>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 10,
  },
});
