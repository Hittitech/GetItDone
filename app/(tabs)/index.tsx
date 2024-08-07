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
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import LoginScreen from "../screens/LoginScreen";
import ImageInputList from "../components/imageInputList";
import ListingEditScreen from "../screens/ListingEditScreen";

export default function HomeScreen() {
  return (
    <Screen style={styles.container}>
      <ListingEditScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
