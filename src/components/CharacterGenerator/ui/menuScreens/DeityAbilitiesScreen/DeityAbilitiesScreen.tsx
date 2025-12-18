import { AbilityRow } from "./AbilityRow"

export const DeityAbilitiesScreen = () => {
    return (
        <div>
            <p>the gods bless us in many ways, how have they taken to you?</p>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <AbilityRow type={'location'} />
                <AbilityRow type={'class'} />
                <AbilityRow type={'deity'} />
                <AbilityRow type={'deity'} />
                <AbilityRow type={'deity'} />
            </div>
        </div>
    )
}