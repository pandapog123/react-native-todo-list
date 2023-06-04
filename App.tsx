import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./components/home";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Home />
    </>
  );
}
