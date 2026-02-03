import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../../shared/components/button/Button";

export default function CartScreen() {
	return (
		<View style={styles.container}>
			<Text>Cart</Text>
			<Link asChild href="(order)/address">
				<Button title="Address" />
			</Link>
			<Link asChild href="(order)/success">
				<Button title="Order" />
			</Link>
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
