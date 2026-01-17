import { useRef } from "react";
import {
  Pressable,
  PressableProps,
  ViewStyle,
  StyleProp,
  StyleSheet,
  Text, Animated,
  GestureResponderEvent
} from "react-native";

type ButtonProps = {
  title: string;
  style?: StyleProp<ViewStyle>;
} & PressableProps;

export default function Button({ title, style, onPressIn, onPressOut, ...rest }: ButtonProps) {

  const animatedColor = useRef(new Animated.Value(0)).current;
  const interpolatedColor = animatedColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["#C67C4E", "#975b36ff"]
  })

  const onPressInAnimated = (event: GestureResponderEvent) => {
    Animated.timing(animatedColor, {toValue: 1, duration: 100, useNativeDriver: true}).start();
    onPressIn && onPressIn(event);
  }

   const onPressOutAnimated = (event: GestureResponderEvent) => {
    Animated.timing(animatedColor, {toValue: 0, duration: 100, useNativeDriver: true}).start();
    onPressOut && onPressOut(event);
  }

  return (
    <Pressable onPressIn={onPressInAnimated} onPressOut={onPressOutAnimated} {...rest}>
      <Animated.View style={[styles.button, {backgroundColor: interpolatedColor}, style]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    textAlign: "center",
    padding: 21,
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Sora_600SemiBold",
    fontSize: 16,
    lineHeight: 20,
  },
});
