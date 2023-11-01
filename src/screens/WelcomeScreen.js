import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center", padding: "20px" }}>
			<Image
				source={require("../../assets/images/welcome1.png")}
				style={{ marginTop: 70, width: "100%", height: "50%", marginBottom:50 }}
			/>

			<Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
				40K+ Premium Recipes
			</Text>

			<Text
				style={{
					fontSize: 40,
					fontWeight: "bold",
					color: "#3c444c",
					marginTop: 15,
					marginBottom: 40,
				}}
			>
				Cook Like A Chef
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("RecipeList")}
				style={{
					backgroundColor: "#f96163",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Let's Go
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
