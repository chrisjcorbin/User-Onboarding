import * as yup from 'yup';

const formSchema = yup.object().shape({
    email: yup
        .string()
        .email("Valid email address required")
        .required("Email is required"),
    name: yup
        .string()
        .min(3, "Username must be at least 3 characters long")
        .required("Username is required"),
    password: yup
        .string()
        .min(5, "Password must be at least 5 characters long")
        .required("Password is required")
})

export default formSchema;