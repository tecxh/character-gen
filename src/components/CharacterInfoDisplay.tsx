import { useCharacter } from "../lib/CharacterContext"

export const CharacterInfoDisplay = () => {
    const character = useCharacter();
    
    return (
        <div>
            <p>{character.name}</p>
            <p>{character.class}</p>
            <p>{character.bio.originLocation}</p>
        </div>
    )
}