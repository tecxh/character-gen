import { Button as BaseButton } from "@base-ui/react";

interface ButtonProps {
    onClick: () => void;
    label: string;
}

export const Button = ({ onClick, label }: ButtonProps) => {
    return (
        <BaseButton onClick={onClick}>{label}</BaseButton>
    )
}