import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  Pressable,
  Button,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "../screens/WelcomeScreen";
import ViewImageScreen from "../screens/ViewImageScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../components/Card";

import AppText from "../components/AppText.jsx";
import AppButton from "../components/AppButton";

export default function HomeScreen() {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: "#f8f4f4",
          padding: 20,
          paddingTop: 100,
        },
      ]}
    >
      <Card
        title={"Red Jacket For Sale"}
        subTitle={"$100"}
        link={""}
        image={require("@/assets/images/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
