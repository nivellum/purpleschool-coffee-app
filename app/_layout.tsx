import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

export default function RootLayout() {
	const insets = useSafeAreaInsets();

	const [loaded, error] = useFonts({
		LineSeedJpBold: require("../assets/fonts/LINESeedJP-Bold.ttf"),
		LineSeedJpExtraBold: require("../assets/fonts/LINESeedJP-ExtraBold.ttf"),
		LineSeedJpRegular: require("../assets/fonts/LINESeedJP-Regular.ttf"),
		LineSeedJpThin: require("../assets/fonts/LINESeedJP-Thin.ttf"),
	});

	if (error) console.log(error);
	if (!loaded) return null;

	return (
		<>
			<StatusBar style="light" backgroundColor="#000000" />
			<SafeAreaProvider>
				<Stack
					screenOptions={{ headerShown: false, contentStyle: { paddingTop: insets.top } }}
				>
					<Stack.Screen name="index" />
				</Stack>
			</SafeAreaProvider>
		</>
	);
}
