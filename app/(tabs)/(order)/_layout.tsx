import { Stack } from "expo-router";

export default function OrderLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="cart" key={1} />
			<Stack.Screen name="address" key={2} />
		</Stack>
	);
}
