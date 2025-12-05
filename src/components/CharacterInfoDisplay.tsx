import { useCharacter } from "../lib/CharacterContext"
import { useData } from "../lib/DataContext";

export const CharacterInfoDisplay = () => {
    const character = useCharacter();
    const { locations } = useData();

    const { bio: { originLocation } } = character;
    const location = locations.find((location) => location.key === originLocation);
    
    return (
        <div>
            <p>{character.name}</p>
            <p>{character.class}</p>
            <p>{location?.personLabel}</p>
        </div>
    )
}