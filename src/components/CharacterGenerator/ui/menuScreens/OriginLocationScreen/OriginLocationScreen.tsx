import { useCharacterDispatch, useData } from "~lib/context"
import { Button } from "~components/common"
import { LocationDescription } from "./LocationDescription";
import type { Location } from "~/types";

export const OriginLocationScreen = () => {
    // handles location or origin, akin to race selection in dnd or pathfinder
    const dispatch = useCharacterDispatch();
    const { locations } = useData();

    const handleLocationSelect = (newLocation: Location) => {
        if (dispatch)
            dispatch({
                type: 'origin-location',
                updates: {
                    bio: {
                        originLocation: newLocation.key,
                    },
                    abilities: newLocation.abilities,
                }
            })
    }

    return (
        <div>
            <p>Every journey starts somewhere, from where do you hail?</p>
            {locations.map((location) => {
                return <Button label={location.label} onClick={() => handleLocationSelect(location)} />
            })}
            <LocationDescription />
        </div>
    )
}