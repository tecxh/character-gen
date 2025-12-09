import { useCharacter, useCharacterDispatch, useData } from "~/lib/context"
import { CommonChoiceDisplay } from "../CommonChoiceDisplay";

export const DeityChoiceScreen = () => {
    const { deities, abilities } = useData();
    const { deity: charDeity } = useCharacter();
    const dispatch = useCharacterDispatch();

    const selectedDeity = deities.find((deity) => deity.key === charDeity)
    const deityAbilities = abilities.filter((ability) => selectedDeity?.abilities.includes(ability.key));

    return (
        <div>
            <p>There are many gods in the pantheon, for whom is your veneration?</p>
            <select value={charDeity} onChange={(e) => {
                if (dispatch) {
                    dispatch({
                        type: 'deity',
                        updates: {
                            deity: e.target.value
                        }
                    })
                }
            }}>
                <option>--</option>
                {deities.map((deity) => <option value={deity.key}>{deity.label}</option>)}
            </select>
            {selectedDeity && <CommonChoiceDisplay label={selectedDeity.label} flavorText={selectedDeity?.flavorText} abilities={deityAbilities}/>}
        </div>
    )
}