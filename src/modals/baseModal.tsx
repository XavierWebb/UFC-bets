import type React from "react";
import { Tittle } from "../components/texts";
import { useObserver } from "../common/observer";

type ButtonProps = {
    children?: React.ReactNode,
    title?: string,
}

export const BaseModal = ({
    children,
    title = "Base Modal Title"
}: ButtonProps) => {
    const {ref, visible} = useObserver()

    return (
        <>
            <div 
                ref={ref}
                className={`
                z-10 fixed h-screen w-screen backdrop-blur-xs justify-center items-center flex
                transition-all duration-500
                ${visible ? "opacity-100" : "opacity-0"}
                `}
            >
                <div className="flex flex-col z-0 bg-black w-1/3 max-h-11/12 text-white  items-center p-10 border-gray-900 border-3 rounded-4xl">
                    <Tittle>{title}</Tittle>
                    {children}
                </div>
            </div>
        </>
    )
};