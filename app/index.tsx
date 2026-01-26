import { Image, Animated, StyleSheet, Text, View } from "react-native";
import Button from "../shared/components/button/Button";

import { useEffect, useRef } from "react";
import { Color, FontFamily, FontSize, Spacing } from "../shared/tokens";
import { Link } from "expo-router";

const coffeeImage = require("../assets/images/coffee.png");

export default function StartScreen() {
	const animatedHeadingTranslate = useRef(new Animated.Value(-100)).current;
	const animatedHeadingOpacity = useRef(new Animated.Value(0)).current;

	const animateHeading = () => {
		Animated.parallel([
			Animated.timing(animatedHeadingTranslate, {
				toValue: 0,
				duration: 1000,
				useNativeDriver: true,
			}),
			Animated.timing(animatedHeadingOpacity, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,
			}),
		]).start();
	};

	useEffect(() => {
		animateHeading();

		return () => {
			animatedHeadingTranslate.stopAnimation();
			animatedHeadingOpacity.stopAnimation();
		};
	}, []);
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={coffeeImage} />
			<View style={styles.textContainer}>
				<Animated.Text
					style={[
						styles.title,
						{
							transform: [{ translateY: animatedHeadingTranslate }],
							opacity: animatedHeadingOpacity,
						},
					]}
				>
					Одно из самых вкусных кофе в городе!
				</Animated.Text>
				<Text style={styles.subtitle}>
					Свежие зёрна, настоящая арабика и бережная обжарка
				</Text>
				<Link asChild href="/catalog">
					<Button title="Начать" />
				</Link>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Color.black,
		justifyContent: "space-between",
		flex: 1,
	},
	textContainer: {
		flex: 1,
		padding: Spacing.lg,
		paddingBottom: Spacing.xl,
		justifyContent: "flex-end",
		zIndex: 1,
		flexShrink: 0,
	},
	title: {
		color: Color.white,
		textAlign: "center",
		fontSize: FontSize.xl,
		marginBottom: Spacing.xs,
		fontFamily: FontFamily.bold,
	},
	subtitle: {
		color: Color.silver,
		textAlign: "center",
		fontSize: FontSize.sm,
		marginBottom: Spacing.md,
		fontFamily: FontFamily.regular,
	},
	image: {
		width: "100%",
		objectFit: "scale-down",
		resizeMode: "center",
		zIndex: 0,
		top: "-25%",
		position: "absolute",
	},
});
