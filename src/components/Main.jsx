import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";
import List from "./List";
const Main = () => {
	return (
		<View style={{marginTop: Constants.statusBarHeight, flexGrow:1}}>
			<List></List>
		</View>
	)
}

export default Main