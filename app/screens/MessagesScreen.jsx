import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id != message.id);
    setMessages(newMessages);
  };
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
            onPress={() => {}}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 1,
              title: "T1",
              description: "D1",
              image: require("@/assets/images/react-logo.png"),
            },
          ])
        }
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
