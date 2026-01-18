import type React from "react";
import { Tittle } from "../components/texts";

type ButtonProps = {
    children?: React.ReactNode,
    title?: string,
}

export const BaseModal = ({
    children,
    title = "Base Modal Title"
}: ButtonProps) => {
    return (
        <>
            <div className="z-10 fixed h-screen w-screen backdrop-blur-xs justify-center items-center flex">
                <div className="flex flex-col z-0 bg-black w-1/4 max-h-11/12 text-white  items-center p-10 border-gray-900 border-3 rounded-4xl">
                    <Tittle>{title}</Tittle>
                    {children}
                </div>
            </div>
        </>
    )
};