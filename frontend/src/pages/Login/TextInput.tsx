import { useField } from "formik";

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string,
    name: string
}

export default function TextInput({label, ...props}: InputProps){
    const [field, meta] = useField(props);
    return(
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input 
                className="border-1 rounded-sm"
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? 
                <p className="text-sm text-red-400">{meta.error}</p> : 
                null
            }
        </>   
    )
}
