import * as yup from "yup";

/*"yup" is a package that allows to validate emails, passwords and others in an easier way,
this is neccesary because react native isn't html, so is necessary to specify many things.
*/
export const LoginValidationSchemes = yup.object().shape({
    email: yup.string()
    .email("It must be a valid Email!").
    required("Email is required!"),
    password: yup.string()
    .min(5, "Too short!")
    .required("Password is required!")
})