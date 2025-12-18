import { useCharacter, useData } from "~lib/context"

export const CharacterInfoDisplay = () => {
    const character = useCharacter();
    const { locations, classes, deities } = useData();

    const { location: charLocation, class: charClass, deity: charDeity, abilitySlots } = character;
    const location = locations.find((location) => location.key === charLocation);
    const selectedClass = classes.find((originalClass) => originalClass.key === charClass)
    const selectedDeity = deities.find((deity) => deity.key === charDeity)
    
    return (
        <div>
            <p>{character.name}</p>
            {location && <span>{location?.personLabel + ' '}</span>}
            {selectedClass && <span>{selectedClass?.label}</span>}
            {selectedDeity && <p>Devout of {selectedDeity.label}</p>}
            <hr />
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                {abilitySlots.map((abilitySlot) => <span>{abilitySlot.abilityKey}</span>)}
            </div>
        </div>
    )
}