import type { Passive } from "~/types";

interface PassiveDisplayProps {
    passive: Passive;
}


export const PassiveDisplay = ({ passive }: PassiveDisplayProps) => {
    const { key, effect: { direction, value, attribute } } = passive;
    
    const symbol = direction === 'positive' ? '+' : '-';

    return (
        <div key={key}>
            <p style={{ textTransform: 'capitalize'}}>{symbol}{value} {attribute}</p>
        </div>
    )
}