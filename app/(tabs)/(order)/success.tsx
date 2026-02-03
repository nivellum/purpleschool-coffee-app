import { StyleSheet, Text, View } from "react-native";

export default function SuccessScreen() {
	return (
		<View style={styles.container}>
			<Text>Success</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		rowGap: 30,
	},
});
