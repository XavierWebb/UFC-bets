import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeHolder?: string;
}

export const TextInput = ({ placeHolder = "", ...props }: InputProps) => {
    return (
        <input
            placeholder={placeHolder}
            className="w-full rounded-xl p-3 m-2 bg-real-grey"
            {...props}
        />
    );
};