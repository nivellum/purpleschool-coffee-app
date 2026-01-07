import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import {
  Sora_400Regular,
  Sora_600SemiBold,
  useFonts,
} from "@expo-google-fonts/sora";

const coffeeImage = require("../assets/coffee.png");

export default function Index() {
  let [fontLoaded] = useFonts({
    Sora_400Regular,
    Sora_600SemiBold,
  });

  if (!fontLoaded) return null;
  else
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={coffeeImage} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Одно из самых вкусных кофе в городе!</Text>
          <Text style={styles.subtitle}>
            Свежие зёрна, настоящая арабика и бережная обжарка
          </Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Начать</Text>
          </Pressable>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    justifyContent: "space-between",
    flex: 1,
  },
  textContainer: {
    flex: 1,
    padding: 30,
    paddingBottom: 43,
    justifyContent: "flex-end",
    zIndex: 1,
    flexShrink: 0
    
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 34,
    marginBottom: 8,
    fontFamily: "Sora_600SemiBold",
  },
  subtitle: {
    color: "#A9A9A9",
    textAlign: "center",
    fontSize: 14,
    marginBottom: 24,
    fontFamily: "Sora_400Regular",
  },
  button: {
    backgroundColor: "#C67C4E",
    textAlign: "center",
    padding: 21,
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent:"center"
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Sora_600SemiBold",
    fontSize: 16,
    lineHeight: 20
  },
  image: {
    width: "100%",
    objectFit: "scale-down",
    resizeMode: "center",
    zIndex: 0,
    top: "-25%",
    position: "absolute"

  },
});
