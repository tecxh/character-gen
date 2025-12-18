import { Fragment, useState } from "react";
import type { Ability } from "~/types"

interface AbilityDisplayProps {
    ability: Ability;
}

export const AbilityDisplay = ({ ability }: AbilityDisplayProps) => {
    // stateful hover for now, less than ideal but not ready to commit to a UI library yet
    const [hover, setHover] = useState(false)

    return (
        <Fragment>
            <p onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{ability.label}</p>
            {hover && <div style={{ backgroundColor: 'gray', zIndex: 2, display: 'inline' }}>{ability.flavorText}</div>}
        </Fragment>
    )
}  