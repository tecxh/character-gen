import { useCharacter } from "../../../lib/CharacterContext"
import { useData } from "../../../lib/DataContext";

export const LocationDescription = () => {
    const { bio: {originLocation} } = useCharacter();
    const { locations } = useData();

    if (!originLocation) return null;
    const location = Object.values(locations).find((location) => location.key === originLocation);
    
    return (
        <div>
            <h2 style={{ textTransform: 'capitalize'}}>{location.label}</h2>
            <p>{location.flavorText}</p>
            <h3>Passives</h3>
            <p>{location.passives}</p>
            <h3>Abilities</h3>
            <p>{location.abilities}</p>
        </div>
    )
}