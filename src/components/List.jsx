import React from "react";
import {View, Text, FlatList} from "react-native";
import animes from "./data.js";
import ListItem from "./ListItem.jsx"
import { StyleSheet } from "react-native";

const List = () => {
	return (
		<FlatList data={animes} ItemSeparatorComponent={<View
			style={{
				borderBottomColor: 'black',
				borderBottomWidth: StyleSheet.hairlineWidth,
			}}
/>} renderItem = {({item: anime}) => 
		<ListItem {...anime} ></ListItem>}>
			
		</FlatList>
	)
}; 
export default List


