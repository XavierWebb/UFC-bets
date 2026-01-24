import type React from "react"

type Variant = "primary" | "secondary" | "tertiary"

interface ButtonProps {
    children: React.ReactNode,
    onClick?: () => void,
    variant?: Variant
    type?: 'button' | 'submit'
    disabled?: boolean
}

export const Button = ({
    children,
    onClick,
    variant = 'primary',
    type = 'button',
    disabled = false,
}: ButtonProps) => {

    const bgClass = disabled
        ? "bg-gray-500 cursor-not-allowed opacity-60"
        : variant === "secondary"
            ? "bg-blue hover:bg-light-blue"
            : variant === 'primary'
                 ? "bg-red hover:bg-light-red"
                 : variant == 'tertiary'
                    ? 'bg-transparent text-white hover:text-gray-400'
                    : ''

    return (
        <button 
            className={`font-konkhmer-regular font-bold m-4 text-2xl text-center 
                rounded-lg py-3 px-8 text-white
                transition-all duration-500 cursor-pointer
                ${bgClass}
            `}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
