import { useCharacter } from "~/lib/context"
import { AbilityRow } from "./AbilityRow"

export const DeityAbilitiesScreen = () => {
    const { abilitySlots } = useCharacter();

    return (
        <div>
            <p>the gods bless us in many ways, how have they taken to you?</p>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                {abilitySlots.map((abilitySlot) => <AbilityRow slot={abilitySlot} />)}
            </div>
        </div>
    )
}