import type React from "react"

type Variant = "primary" | "secondary"

interface ButtonProps {
    children: React.ReactNode,
    onClick?: ()=> void,
    variant?: Variant
}


export const Button = ({
    children,
    onClick,
    variant = 'primary',
}: ButtonProps ) => {

  const bgClass =
    variant === "secondary"
        ? "bg-blue hover:bg-light-blue"
        : "bg-red hover:bg-light-red"

    return (
        <button 
            className={`font-konkhmer-regular font-bold m-4 text-2xl text-center 
                rounded-lg cursor-pointer py-3 px-8 text-white
                transition-all duration-500
                ${bgClass}
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}