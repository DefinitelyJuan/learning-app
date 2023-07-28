import React from "react";
import {Text, StyleSheet} from "react-native";
import theme from "../theme.js";

const styles = StyleSheet.create(
	{
		text: {
			color: theme.colors.textPrimary,
			fontSize: theme.fontSizes.body,
			fontFamily: theme.fonts.main,
			fontWeight: theme.fontWeights.normal
		},
		colorPrimary: {
			color: theme.colors.Primary
		},
		colorSecondary: {
			color: theme.colors.Secondary
		},
		bold: {
			fontWeight: theme.fontWeights.bold
		},
		header:{
			fontSize: theme.fontSizes.header
		}
	}
)

export default function StyledText({children, color, fontSize, fontWeight, style, ...restOfProps}){
	const TextStyles = [
		styles.text,
		color == 'primary' && styles.colorPrimary,
		color == 'secondary' && styles.colorSecondary,
		fontSize == 'header' && styles.header,
		fontWeight == 'bold' && styles.bold
	]

	return (
		<Text style={TextStyles} {...restOfProps}>
			{children}
		</Text>
	)
}