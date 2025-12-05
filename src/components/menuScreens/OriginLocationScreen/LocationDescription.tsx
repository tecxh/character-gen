import { useCharacter } from "../../../lib/CharacterContext"

export const LocationDescription = () => {
    const character = useCharacter();

    if (!character.bio.originLocation) return null;

    return (
        <div>
            <h2 style={{ textTransform: 'capitalize'}}>{character.bio.originLocation}</h2>
            <p>From your time in {character.bio.originLocation} you blah blah blah</p>
            <h3>Passives</h3>
            <p>list of passives from {character.bio.originLocation}</p>
            <h3>Abilities</h3>
            <p>list of abilities from {character.bio.originLocation}</p>
        </div>
    )
}