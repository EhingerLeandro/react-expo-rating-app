import react from "react";
import {Text, TextInput, View, Button, StyleSheet} from "react-native";
import {Formik, useField} from "formik";
import {StyledTextInput} from "./StyledTextInput";
import StyledText from "../components/StyleText.jsx";
import {LoginValidationSchemes} from "../loginValidation/LoginValidationSchemes";

//This initial values are needed to use formik correctly
const initValues = {
    email:"",
    password:""
}

const styles = StyleSheet.create({
        error:{
            color:"red",
            fontSize:15,
            marginBottom:10,
            marginTop:5
        },
        form:{
            margin:12
        } 
})

export default function LogInPage(){
    /*This "Formik" is a library, it is used to manage forms*/

    /*Here this component is created in order to handle the information 
    from the inputs, it uses useField which comes from formik package.*/
    // In the next snippet, -name- represents each input's name.
    const FormikInputValue = ({name, ...props})=>{
        const[field, meta, helpers] = useField(name);
        
        return(
            <>
                <StyledTextInput
                    error={meta.error}
                    value={field.value}
                    onChangeText={value=> helpers.setValue(value)}
                    {...props}
                />
                {meta.error && 
                <StyledText style={styles.error}>
                    {meta.error}
                </StyledText>}
            </>
        )
    }
    
    return ( 
        /*Here, in this part the formik takes the input requirements
        through  validationSchema, it also needs some intial values */
        <Formik validationSchema={LoginValidationSchemes} initialValues={initValues}
        onSubmit={values=> console.log(values)}>
            {({handleSubmit})=>{
                return(
                    <View style={styles.form}>
                        <FormikInputValue
                            name="email"
                            placeholder="Email"
                        />
                        <FormikInputValue
                            name="password"
                            placeholder="Password"
                            secureTextEntry
                        />
                        <Button onPress={handleSubmit}
                        title="Log In"/>
                    </View>
                )
            }}
        </Formik>
    )
    /*This is other sintax which is older, in this case it renders a function as a 
    children, and injects handlers to the props of that function from
    formik, this was before useState appeared .*/
    /* 
    return ( 
    <Formik initialValues={initValues}
    onSubmit={values=> console.log(values)}>
        {({handleChange, handleSubmit, values})=>{
            return(
                <View style={styles.form}>
                    <StyledTextInput
                        placeholder="Email"
                        value={values.email}
                        onChangeText={handleChange("email")}
                    />
                    <StyledTextInput
                        placeholder="Password"
                        value={values.password}
                        onChangeText={handleChange("password")}
                    />
                    <Button onPress={handleSubmit}
                    title="Log In"/>
                </View>
            )
        }}
    </Formik>)
    */
}