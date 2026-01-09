import { Form } from "formik";
import type { PropsWithChildren } from "react";

type layoutProps = PropsWithChildren<{
    title: string;
}>

export default function FormLayout({title, children}: layoutProps){
    return (
        <Form className="flex flex-col justify-self-center border-1 border-black/5 gap-5 rounded-lg shadow-xl p-5">
            <h1 className="text-center font-bold text-xl">{title}</h1>
            {children}
        </Form>
    )
}
