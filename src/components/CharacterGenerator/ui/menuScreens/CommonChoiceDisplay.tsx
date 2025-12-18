import { AbilityDisplay, PassiveDisplay } from "~/components/common";
import type { Ability, Passive } from "~/types";

interface CommonChoiceDisplayProps {
    label: string;
    flavorText: string;
    passives?: Passive[];
    abilities?: Ability[];
}

export const CommonChoiceDisplay = (props: CommonChoiceDisplayProps) => {
    const { label, flavorText, passives, abilities } = props;

    return (
        <div>
            <h2 style={{ textTransform: 'capitalize'}}>{label}</h2>
            <p>{flavorText}</p>
            {passives && <h3>Passives</h3>}
            {passives?.map((passive) => <PassiveDisplay passive={passive} />)}
            {abilities && <h3>Abilities</h3>}
            {abilities?.map((ability) => <AbilityDisplay ability={ability}/>)}
        </div>
    )
}