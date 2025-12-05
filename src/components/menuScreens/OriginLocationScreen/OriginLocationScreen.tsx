import { useCharacterDispatch } from "../../../lib/CharacterContext"
import { Button } from "../../common"
import { LocationDescription } from "./LocationDescription";

export const OriginLocationScreen = () => {
    // handles location or origin, akin to race selection in dnd or pathfinder
    const dispatch = useCharacterDispatch();

    const handleLocationSelect = (newLocation: string) => {
        if (dispatch)
            dispatch({
                type: 'origin-location',
                updates: {
                    bio: {
                        originLocation: newLocation,
                    }
                }
            })
    }

    return (
        <div>
            <p>Every journey starts somewhere, from where do you hail?</p>
            <Button label="Sparta" onClick={() => handleLocationSelect('sparta')}/>
            <Button label="Athens" onClick={() => handleLocationSelect('athens')}/>
            <Button label="Corinth" onClick={() => handleLocationSelect('corinth')}/>
            <Button label="Thebes" onClick={() => handleLocationSelect('thebes')}/>
            <Button label="Crete" onClick={() => handleLocationSelect('crete')}/>
            <LocationDescription />
        </div>
    )
}