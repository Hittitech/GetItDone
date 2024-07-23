import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({ title, subTitle, image, link }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
  textContainer: {
    padding: 20,
  },
});
