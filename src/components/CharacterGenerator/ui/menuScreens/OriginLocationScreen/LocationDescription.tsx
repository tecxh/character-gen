import { useCharacter, useData } from "~lib/context"
import { PassiveDisplay } from "~components/common/PassiveDisplay";

export const LocationDescription = () => {
    const { bio: { originLocation } } = useCharacter();
    const { locations, passives } = useData();

    if (!originLocation) return null;
    const location = locations.find((location) => location.key === originLocation);
    const locationPassive = passives.filter((passive) => location?.passives.includes(passive.key))[0]
    
    // dont want to have to opt chain, should be able to find a way to 
    // let TS know this wont be undefined
    return (
        <div>
            <h2 style={{ textTransform: 'capitalize'}}>{location?.label}</h2>
            <p>{location?.flavorText}</p>
            <h3>Passive</h3>
            <PassiveDisplay passive={locationPassive} />
            <h3>Regional Ability</h3>
            <p>{location?.abilities}</p>
        </div>
    )
}