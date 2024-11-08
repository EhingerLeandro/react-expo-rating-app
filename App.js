import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from "./src/components/Main.jsx";
import {NativeRouter} from "react-router-native";

export default function App() {
  console.log("Probando")
  return <>
    {/*This component called "StatusBar" is predefined by react native, and its style inverted is also predefined.*/}
    <StatusBar style="inverted"/>
    <NativeRouter>
      <Main/>
    </NativeRouter>
  </>
}

//This is a way to style the component, you can recalled the object inside "styles" to use it later.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
