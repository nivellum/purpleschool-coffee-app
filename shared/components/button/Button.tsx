import { useRef } from "react";
import {
	Pressable,
	PressableProps,
	ViewStyle,
	StyleProp,
	StyleSheet,
	Text,
	Animated,
	GestureResponderEvent,
} from "react-native";
import { Color, FontFamily, FontSize, Radii, Spacing } from "../../tokens";

type ButtonProps = {
	title: string;
	style?: StyleProp<ViewStyle>;
} & PressableProps;

export default function Button({ title, style, onPressIn, onPressOut, ...rest }: ButtonProps) {
	const animatedColor = useRef(new Animated.Value(0)).current;
	const interpolatedColor = animatedColor.interpolate({
		inputRange: [0, 1],
		outputRange: [Color.orange[500], Color.orange[700]],
	});

	const onPressInAnimated = (event: GestureResponderEvent) => {
		Animated.timing(animatedColor, {
			toValue: 1,
			duration: 100,
			useNativeDriver: true,
		}).start();

		onPressIn && onPressIn(event);
	};

	const onPressOutAnimated = (event: GestureResponderEvent) => {
		Animated.timing(animatedColor, {
			toValue: 0,
			duration: 100,
			useNativeDriver: true,
		}).start();

		onPressOut && onPressOut(event);
	};

	return (
		<Pressable onPressIn={onPressInAnimated} onPressOut={onPressOutAnimated} {...rest}>
			<Animated.View style={[styles.button, { backgroundColor: interpolatedColor }, style]}>
				<Text style={styles.text}>{title}</Text>
			</Animated.View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		textAlign: "center",
		padding: Spacing.md,
		borderRadius: Radii.md,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		textAlign: "center",
		color: Color.white,
		fontFamily: FontFamily.bold,
		fontSize: FontSize.md,
		lineHeight: Spacing.md,
	},
});
