import type React from "react";

interface TextProps {
  children: React.ReactNode;
}

export const Tittle = ({children}: TextProps) => {
    return (
        <h1 className="text-white font-inter text-4xl font-extrabold m-4">
            {children}
        </h1>
    )
}

export const Text_One = ({children}: TextProps) => {
    return (
        <p className="text-white font-koho text-xl m-4">
            {children}
        </p>
    )
}
export const Text_Two = ({children}: TextProps) => {
    return (
        <p className="text-white font-koho text-xl md:text-2xl m-4">
            {children}
        </p>
    )
}