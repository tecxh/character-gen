interface ButtonProps {
    onClick: () => void;
    label: string;
}

export const Button = ({ onClick, label }: ButtonProps) => {
    return (
        <button onClick={onClick}>{label}</button>
    )
}