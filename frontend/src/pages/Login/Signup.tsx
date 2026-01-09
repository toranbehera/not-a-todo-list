import { Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router";
import FormLayout from "./FormLayout";
import TextInput from "./TextInput";
import axios from "axios";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .required('Required')
})

export default function Signup() {
  const navigate = useNavigate();
  const url = 'http://localhost:5000/api/auth/register'

  return (
    <Formik
      initialValues = {{ 
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }}
      validationSchema = {validationSchema}
      onSubmit = {async (values) => {
        try{
          const res = await axios.post(url, {name: `${values.firstName} ${values.lastName}`, email: values.email, password: values.password});
          const {message} = res.data;

          alert(message);
          navigate('/');
        } catch(error: any){
          alert(error.response.data.message);
        }   
      }}
    >
      <FormLayout title="Sign up">
        <TextInput
          label="First name"
          name="firstName"
          type="text"
        />
        <TextInput
          label="Last name"
          name="lastName"
          type="text"
        />
        <TextInput
          label="Email"
          name="email"
          type="email"
        />
        <TextInput
          label="Password"
          name="password"
          type="text"
        />
        <button 
          type="submit"
          className="mt-5 button"
        >
            Submit
        </button>
        <a 
          href="http://localhost:5173/login"
          className="[all:revert]"
        >
          Already have an account? Log in
        </a>
      </FormLayout>
    </Formik>
  );
};
