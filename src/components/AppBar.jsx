import React from "react";
import {View, StyleSheet, TouchableWithoutFeedback, 
        ScrollView} from "react-native";
import Constants from "expo-constants";
import theme from "../theme.js";
import StyledText from "./StyleText";
import {Link, useLocation } from "react-router-native";

/*This component represents the structure of every navigation tab, and inside of it
you can see there's a logic section.*/
const AppBarTap = ({ children, to})=>{
    /*First it takes the actual location and compares it with the "to" prop, then a true or false value
    is saved inside the "active" variable, then this same variable is used to do a short-circuit evaluation,
    that allows to apply the "styles.active" only when "active" is true.
    */
    const {pathname} = useLocation();
    const active = pathname === to;

    const textStyles=[
        styles.text,
        active && styles.active
    ]
    
    return(
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight="bold" style={textStyles}>
            {children}
            </StyledText>
        </Link>
    )
}

export const AppBar = () =>{
    return(
        <View style={styles.container }>
            {/*Here we can see the scrollview used to show the navigation bar, inside of it, you can see
            every one of the navigation tabs*/}
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTap to="/">Respositories</AppBarTap>
                <AppBarTap to="/signin">Sign in</AppBarTap>
                <AppBarTap to="/configurations">Configurations</AppBarTap>
                <AppBarTap to="/bookmarks">Bookmarks</AppBarTap>
           </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight +10,
        paddingBottom:10,
        paddingLeft: 10
    },
    text:{
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10
    },
    active:{
        color:  theme.appBar.textPrimary
    },
    scroll: {
        paddingBottom:10
    }
})