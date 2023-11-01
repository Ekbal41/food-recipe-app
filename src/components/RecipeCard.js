import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
} from "react-native";
import React from "react";
import { colors, recipeList } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = () => {
	const navigation = useNavigation();
	return (
		<View style={{ flex: 1, marginBottom: 5 }}>
			<FlatList
				data={recipeList}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => navigation.navigate("RecipeDetail", { item: item })}
						style={{
							backgroundColor: colors.COLOR_LIGHT,
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.1,
							shadowRadius: 7,
							borderRadius: 16,
							marginVertical: 7,
							alignItems: "center",
							paddingHorizontal: 8,
							paddingVertical: 26,
							width: "48%",
						}}
					>
						<Image
							source={item.image}
							style={{ width: 150, height: 150, resizeMode: "center" }}
						/>
						<Text style={{fontWeight: 500}}>{item.name}</Text>
						<View style={{ flexDirection: "row", marginTop: 8 }}>
							<Text
								style={{ color: colors.COLOR_PRIMARY, marginRight: 4 }}
							>{item.time}</Text>
							<Text> | </Text>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<Text style={{ marginRight: 4 }}>{item.rating}</Text>
								<FontAwesome
									name="star"
									size={16}
									color={colors.COLOR_PRIMARY}
								/>
							</View>
						</View>
					</Pressable>
				)}
				numColumns={2}
				columnWrapperStyle={{
					justifyContent: "space-between",
					borderRadius: 16,


				}}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default RecipeCard;

const styles = StyleSheet.create({});
