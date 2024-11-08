import React from "react";
import {Text, View, StyleSheet } from "react-native";
import RepositoryList from "../components/RepositoryList";
import {AppBar} from "../components/AppBar";
import {Route, Routes} from "react-router-native";
import LogIn from "../pages/LogIn.jsx";

//Here we are determining all the pages that will be displayed, so to speak.
const Main =()=>{
    return(
        /*In this part "flex:1" allows to render correctly all the extension of the flatList,
        otherwise it would have some part of the flatList being cut.*/
        <View style={{flex:1}} >
            <AppBar/>  
            <Text style={styles.mainPoster}>
                Leo Lopez Rating List APP 
            </Text>
            {/*Here we are using react router native to navigate through all the components inside the app*/ }
            <Routes>
                {/*In the first Route an imported component called "RepositoryList" is used, in the case of the
                other Routes, the text tag is used in order to simulate a component. */}
                <Route path='/' element={<RepositoryList />} />
                <Route path='/signin' element={
                    <LogIn/>} />
                <Route path='/configurations' element={
                    <Text style={{margin:20, padding:10, borderRadius:10,
                        color:"black", fontWeight:"bold", backgroundColor:"lightblue"}}>
                        Working on It
                    </Text>} />
                <Route path='/bookmarks' element={
                    <Text style={{margin:20, padding:10, borderRadius:10,
                    color:"purple", fontWeight:"bold", backgroundColor:"pink"}}>
                        Working on It
                    </Text>} />
                {/* <Route path='*' element={<Navigate to='/' />} /> */}
            </Routes>
        </View>
    )
}

const styles = StyleSheet.create({
    mainPoster:{
        margin:1, padding:10, borderRadius:10, textAlign:"center",
        color:"darkblue", fontWeight:"bold", backgroundColor:"lightblue",
        fontFamily:"monospace", fontSize:20, borderColor:"slateblue", borderWidth:3
    }
            
})

export default Main;