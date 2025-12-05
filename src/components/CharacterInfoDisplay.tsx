import { useCharacter } from "../lib/CharacterContext"

export const CharacterInfoDisplay = () => {
    const character = useCharacter();
    
    return (
        <div>
            <p>{character.name}</p>
            <p>{character.class}</p>
        </div>
    )
}