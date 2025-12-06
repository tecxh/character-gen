import { useCharacter, useCharacterDispatch } from "../../../lib/CharacterContext";
import { useData } from "../../../lib/DataContext";

export const OriginClassScreen = () => {
    const character = useCharacter();
    const dispatch = useCharacterDispatch();

    const { classes } = useData();

    return (
        <div>
            <p>The lands are fraught with danger, how have you protected yourself?</p>
            <select value={character.class} onChange={(e) => {
                if (dispatch) {
                    dispatch({
                        type: 'class',
                        updates: {
                            class: e.target.value
                        }
                    })
                }
            }}>
                <option>--</option>
                {classes.map((originalClass) => <option value={originalClass.key}>{originalClass.label}</option>)}
            </select>

        </div>
    )
}