import { ClassTypes } from "../types";
import { useCharacter, useCharacterDispatch } from "../lib/CharacterContext";


export const ClassMenu = () => {
    const character = useCharacter();
    const dispatch = useCharacterDispatch();

    return (
        <div>
            <p>Select a Class</p>
            <select value={character.class} onChange={(e) => {
                if (dispatch) {
                    dispatch({
                        type: 'class-change',
                        updates: {
                            class: e.target.value as ClassTypes
                        }
                    })
                }
            }}>
                <option>--</option>
                <option value={ClassTypes.Caster}>Caster</option>
                <option value={ClassTypes.Warrior}>Warrior</option>
                {/* <option value={ClassTypes.BlessedKnight}>Blessed Knight</option> */}
                {/* <option value={ClassTypes.Berzerker}>Berserker</option> */}
            </select>

        </div>
    )
}