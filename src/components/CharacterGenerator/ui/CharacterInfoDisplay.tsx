import { useCharacter } from "../../../lib/CharacterContext"
import { useData } from "../../../lib/DataContext";

export const CharacterInfoDisplay = () => {
    const character = useCharacter();
    const { locations, classes } = useData();

    const { bio: { originLocation }, class: charClass } = character;
    const location = locations.find((location) => location.key === originLocation);
    const selectedClass = classes.find((originalClass) => originalClass.key === charClass)
    
    return (
        <div>
            <p>{character.name}</p>
            <span>{location?.personLabel + ' '}</span>
            <span>{selectedClass?.label}</span>
        </div>
    )
}