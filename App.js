import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { getExpoPushTokenAsync } from "expo-notifications";

function useNotifications() {
  // This code just needs to be defined to crash the app, doesnt need to be called.
  getExpoPushTokenAsync();
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
