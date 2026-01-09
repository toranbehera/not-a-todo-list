import { Formik } from "formik";
import { object, string } from "yup";
import FormLayout from "./FormLayout";
import TextInput from "./TextInput";
import { useNavigate } from "react-router";
import axios from "axios";

const validationSchema = object({
    email: string()
        .email('Invalid email address')
        .required('Required'),
    password: string()
        .required('Required')
})

export default function Login(){
    const navigate = useNavigate();
    const url = 'http://localhost:5000/api/auth/login';

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
                try {
                    const res = await axios.post(url, values);
                    const {message, token} = res.data;

                    console.log(token);
                    alert(message);

                    navigate('/');
                } catch (error: any) {
                    if (error.response) {
                        alert(error.response.data.message);
                    } else if (error.request) {
                        alert("No res received from server");
                    } else {
                        alert(error.message);
                    }
                }
            }}
        >
            <FormLayout title="Login">
                <TextInput
                    label="email"
                    name="email"
                    type="email"
                />
                <TextInput
                    label="password"
                    name="password"
                    type="string"
                />
                <button 
                    type="submit"
                    className="mt-5 button"
                >
                    Submit
                </button>
                <a 
                    href="http://localhost:5173/signup"
                    className="[all:revert]"
                >
                    Don't have an account? Sign up
                </a>
            </FormLayout>
        </Formik>
        
    )
}
