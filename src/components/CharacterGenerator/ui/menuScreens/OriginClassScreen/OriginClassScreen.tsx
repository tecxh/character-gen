import { useCharacter, useCharacterDispatch, useData } from "~/lib/context";
import { ClassDescription } from "./ClassDescription";

export const OriginClassScreen = () => {
    const character = useCharacter();
    const dispatch = useCharacterDispatch();

    const { classes } = useData();

    return (
        <div>
            <p>The lands are fraught with danger, how have you protected yourself?</p>
            <select value={character.class} onChange={(e) => {
                if (dispatch) {
                    const selectedClass = classes.find((originClass) => originClass.key === e.target.value)

                    dispatch({
                        type: 'class',
                        updates: {
                            class: selectedClass?.key,
                            abilities: selectedClass?.abilities
                        }
                    })
                }
            }}>
                <option>--</option>
                {classes.map((originalClass) => <option value={originalClass.key}>{originalClass.label}</option>)}
            </select>
            <ClassDescription />
        </div>
    )
}