import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  Pressable,
  Button,
  Alert,
  TextInput,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "../screens/WelcomeScreen";
import ViewImageScreen from "../screens/ViewImageScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../components/Card";
import ListingDetailScreen from "../screens/ListingDetailScreen";
import MessagesScreen from "../screens/MessagesScreen";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import AccountScreen from "../screens/AccountScreen";
import ListingScreen from "../screens/ListingScreen";
import AppTextInput from "../components/AppTextInput";
import AppPicker from "../components/AppPicker";
import { useState } from "react";

const categories = [
  {
    value: 1,
    label: "mobiles",
  },
  {
    value: 2,
    label: "tablets",
  },
  {
    value: 3,
    label: "precious",
  },
];

export default function HomeScreen() {
  const [category, setCategory] = useState();
  return (
    <Screen style={styles.container}>
      <AppPicker
        selectedItem={category}
        //@ts-ignore
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        placeholder={"category"}
        icon={"apps"}
      />
      <AppTextInput placeholder="email" icon={"email"} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
