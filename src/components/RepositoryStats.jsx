import React from "react";
import StyledText from "./StyleText";
import {View} from "react-native";

/*This section is very intersting because it takes a numerical value and then transform it in a new format,
in this case you represent thousand with "k" symbol. You can realize it uses a ternary operator, 
so that the new format only appears when the value is bigger than 1000.
only  */
const parseThousands = value =>{
    return value >= 1000 ? 
    `${Math.round(value/100)/10}k`:
    value;
}

export const RepositoryStats = props =>{
    /*In this other section we can see all the text tags, used in order to render
     the numerical information, in this case you can see how inside every text tag with numbers,
     the "parseThousands" function is called, so the "k" is showed instead of thousand or zeros.*/
    return(
        <View style={{flexDirection:"row", justifyContent: "space-around"}}>
            <View>
                {/*This is StyledText uses the most complicated system of styling,
                and you can check it in StyleText*/}
                <StyledText align="center" fontWeight="bold" >Stars</StyledText>
                <StyledText align="center" >{parseThousands(props.info.startgazerCount)}</StyledText>
            </View>
            <View>
                <StyledText fontWeight="bold">Forks</StyledText>
                <StyledText align="center" >{parseThousands(props.info.forCounts)}</StyledText>
            </View>
            <View>
                <StyledText fontWeight="bold">Review</StyledText>
                <StyledText align="center" >{parseThousands(props.info.ratingAvarage)}</StyledText>
            </View>
            <View>
                <StyledText fontWeight="bold">Rating</StyledText>
                <StyledText align="center" >{parseThousands(props.info.reviewCount)}</StyledText>
            </View>
        </View>
    )
}