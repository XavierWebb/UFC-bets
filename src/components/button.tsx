import type React from "react"

type Variant = "primary" | "secondary" 

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
        : variant === "primary"
            ? "bg-red hover:bg-light-red"
            : variant === 'secondary'
                    ? 'bg-transparent text-white hover:text-gray-400' : ''

    return (
        <button
            className={`        
            font-konkhmer-regular font-bold
            text-xl md:text-2xl
            m-1 md:m-4
            rounded-lg py-2 md:py-3 px-6 md:px-8
            text-white text-center
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
