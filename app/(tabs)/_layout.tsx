import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
	const insets = useSafeAreaInsets();

	return (
		<>
			<StatusBar style="dark" />

			<Tabs screenOptions={{ headerShown: false, sceneStyle: { paddingTop: insets.top } }}>
				<Tabs.Screen name="(home)" />
				<Tabs.Screen name="(order)" />
			</Tabs>
		</>
	);
}
