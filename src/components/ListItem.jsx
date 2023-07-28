import React from "react";
import {View, Text} from "react-native";
import StyledText from "./StyledText.jsx";

const ListItem = (props) => {
	return (
		<View key={props.id}>
					<StyledText fontSize='header' fontWeight='bold' color='primary'>
						{props.name}
					</StyledText>
					<StyledText>
						{props.episodes} episodios
					</StyledText>
		</View>
	)
		
};

export default ListItem