import React from "react"; 
import { Image, View, StyleSheet, Platform} from "react-native";
import theme from "../theme.js";
import StyledText from "./StyleText";
import {RepositoryStats} from "./RepositoryStats";

//This component has an "image", a button with blue color, and the names of the language 
const RepositoryHeading=(props)=>(
    <View style={{flexDirection:"row", paddingBottom:2}}>
        <View style={{paddingRight:10}}>
            <Image style={styles.image} source={{uri: props.info.ownerAvatarUrl}}/>
        </View>
        <View style={{flex:1}}>
            <StyledText fontSize="subHeading" fontWeight="bold">{props.info.fullName}</StyledText>
            <StyledText color="secondary">{props.info.description}</StyledText>
            <StyledText style={styles.language}>{props.info.language}</StyledText>
        </View>
    </View>
)

//In this part two components are integrated in "RepositoryItems".
const RepositoryItem = (props) =>{
    return(
    <View key={props.info.id} style={styles.container}>
        <RepositoryHeading {...props}/>
        <RepositoryStats {...props}/>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingBottom:5, 
        paddingTop:2.5
    },
    language:{
        color:"#fff",
        backgroundColor: Platform.OS === "android" ? theme.colors.slateBlue : "purple" ,
        padding:8,
        alignSelf:"flex-start",
        borderRadius:5,
        overflow:"hidden"
    }, 
    image:{
        width:50,
        height:50,
        borderRadius:5,
        marginTop:5,
        marginLeft:5
    } 
})

export default RepositoryItem;
