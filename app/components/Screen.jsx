import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <GestureHandlerRootView>{children}</GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
export default Screen;
