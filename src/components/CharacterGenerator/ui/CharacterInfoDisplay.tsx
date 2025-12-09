import { useCharacter, useData } from "~lib/context"

export const CharacterInfoDisplay = () => {
    const character = useCharacter();
    const { locations, classes, deities } = useData();

    const { bio: { originLocation }, class: charClass, deity: charDeity } = character;
    const location = locations.find((location) => location.key === originLocation);
    const selectedClass = classes.find((originalClass) => originalClass.key === charClass)
    const selectedDeity = deities.find((deity) => deity.key === charDeity)
    
    return (
        <div>
            <p>{character.name}</p>
            <span>{location?.personLabel + ' '}</span>
            <span>{selectedClass?.label}</span>
            {selectedDeity && <p>Devout of {selectedDeity.label}</p>}
        </div>
    )
}