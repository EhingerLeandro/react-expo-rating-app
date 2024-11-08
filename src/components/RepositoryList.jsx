import React from "react";
import  { Text, FlatList} from "react-native";
import repositories from "../data/repositories.js";
import RepositoryItem from "./RepositoryItem.jsx";

const RepositoryList = () =>{
    return(
        // This flatlist is an optimal way to render an array of objects in an app
        // "data" takes the source of information 
        /* "renderItem" is a way to replace .map(), in this case you use item to represent 
        each object inside the array, you can change the name of item using this "{item: otherName}" 
        in this example an imported component called "RepositoryItem" is used to be rendered for every item.*/
        <FlatList
            data={repositories}
            ItemSeparatorComponent={()=> <Text></Text>}
            renderItem={({item: repo})=>(
                <RepositoryItem info = {repo}/>
            )}
        />
    )
}

export default RepositoryList;
