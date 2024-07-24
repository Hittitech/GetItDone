import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem"; // Ensure ListItem is correctly imported
import AppText from "../components/AppText";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("@/assets/images/react-logo.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("@/assets/images/react-logo.png"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("@/assets/images/react-logo.png"),
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
