import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

const ListingDetailScreen = () => {
  return (
    <Screen>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/images/jacket.jpg")}
        />
        <View style={styles.textContainer}>
          <AppText style={styles.title}>Red Jacket For Sale</AppText>
          <AppText style={styles.price}>$100</AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={require("@/assets/images/react-logo.png")}
              title={"Adnan Sami"}
              subtitle={"5 listings"}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 30,
  },
});
