/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, type Dispatch, type PropsWithChildren } from "react"
import { ClassTypes } from "../types";

type CharacterReducerActionType = 'name-change' | 'class-change'

interface CharacterReducerAction {
    type: CharacterReducerActionType,
    updates: Partial<CharacterState>;
}

interface CharacterState {
    name: string;
    class: string;
}

const defaultCharacter: CharacterState = {
    name: 'Adira',
    class: ClassTypes.Warrior
};

const characterReducer = (state: CharacterState, action: CharacterReducerAction): CharacterState => {
    // need a better way to handle the defaults, or chance that we're missing the update
    switch (action.type) {
        case 'name-change': 
            return {
                ...state,
                name: action.updates.name ?? ''
            }
        case 'class-change':
            return {
                ...state,
                class: action.updates.class ?? ''
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