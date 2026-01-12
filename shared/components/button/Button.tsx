import {
  Pressable,
  PressableProps,
  ViewStyle,
  StyleProp,
  StyleSheet,
  Text,
} from "react-native";

type ButtonProps = {
  title: string;
  style?: StyleProp<ViewStyle>;
} & PressableProps;

export default function Button({ title, style, ...rest }: ButtonProps) {
  return (
    <Pressable style={[styles.button, style]} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#C67C4E",
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
