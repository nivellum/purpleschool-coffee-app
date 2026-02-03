import { Link } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Button from "../../../../shared/components/button/Button";

const catalogData = [
	{ id: "CapuchinoChocolade", title: "Капучино с шоколадом" },
	{ id: "CapuchinoMilk", title: "Капучино с молоком" },
	{ id: "CapuchinoCheese", title: "Капучино сырный" },
	{ id: "CapuchinoCaramel", title: "Капучино с карамелью" },
];

const renderItem = ({ item }) => {
	return (
		<View>
			<Link asChild href={"(home)/catalog/".concat(item.id)}>
				<Button style={styles.item} title={item.title} />
			</Link>
		</View>
	);
};

export default function CatalogScreen() {
	return (
		<View style={styles.container}>
			<Text>Catalog</Text>
			<FlatList data={catalogData} renderItem={renderItem} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", alignItems: "center", rowGap: 30 },
	item: {
		margin: 10,
	},
});
