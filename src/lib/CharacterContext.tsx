/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, type Dispatch, type PropsWithChildren } from "react"

type CharacterReducerActionType = 'name' | 'class' | 'origin-location'

interface CharacterReducerAction {
    type: CharacterReducerActionType,
    updates: Partial<CharacterState>;
}

interface CharacterBio {
    originLocation?: string;
}

interface CharacterState {
    name: string;
    class?: string;
    // new
    bio: CharacterBio
}

const defaultCharacter: CharacterState = {
    name: 'Adira',
    class: '',
    bio: {}
};

const characterReducer = (state: CharacterState, action: CharacterReducerAction): CharacterState => {
    // need a better way to handle the defaults, or chance that we're missing the update
    switch (action.type) {
        case 'name': 
            return {
                ...state,
                name: action.updates.name ?? ''
            }
        case 'class':
            return {
                ...state,
                class: action.updates.class ?? ''
            }
        case 'origin-location':
            return {
                ...state,
                bio: {
                    ...state.bio,
                    originLocation: action.updates.bio?.originLocation
                }
            }
        default:
            return state;
    }
};

const CharacterContext = createContext<CharacterState>(defaultCharacter);
const CharacterDispatchContext = createContext<Dispatch<CharacterReducerAction> | undefined>(undefined);


export const CharacterProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(characterReducer, defaultCharacter)

    return (
        <CharacterContext.Provider value={state}>
            <CharacterDispatchContext.Provider value={dispatch}>
                {children}
            </CharacterDispatchContext.Provider>
        </CharacterContext.Provider>
    )
}

export const useCharacter = () => useContext(CharacterContext);
export const useCharacterDispatch = () => useContext(CharacterDispatchContext);