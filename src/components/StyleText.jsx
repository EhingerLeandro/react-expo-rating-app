import React from "react";
import {Text, StyleSheet} from "react-native";
import theme from "../theme.js";

/*Here "Stylesheet.create" imports an object called "theme" and then reuses its properties to asign values inside
css properties like fontSize, fontWeight, color, ect... */
const styles = StyleSheet.create({
    text:{
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary:{
        color:theme.colors.textPrimary
    },
    colorSecondary:{
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subHeading:{
        fontSize: theme.fontSizes.subHeading
    },
    small:{
        fontSize: 14
    },
    textAlignCenter:{
        textAlign: "center",
    }
})

/*Here in this component a short-circuit evaluation is used to apply the styles, only when the comparison is true 
the second part can be used, otherwise it would be avoided.*/
export default function StyledText ({children, align, color, fontSize, fontWeight, style, ...restOfProps}){
    const textStyles = [
        styles.text,
        align === "center" && styles.textAlignCenter,
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorSecondary,
        fontSize === "subHeading" && styles.subHeading,
        fontWeight === "bold" && styles.bold, 
        style
    ]

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}