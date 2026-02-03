import { Stack } from "expo-router";

export default function HomeLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="catalog/index" />
			<Stack.Screen name="catalog/[id]" />
		</Stack>
	);
}
