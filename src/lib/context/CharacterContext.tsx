/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, type Dispatch, type PropsWithChildren } from "react"
import type { AbilityType } from "~/types";

type CharacterReducerActionType = 'name' | 'class' | 'origin-location' | 'deity'

interface CharacterReducerActionUpdates {
    name?: string;
    class?: string;
    location?: string;
    deity?: string;
    abilities?: string[];
}

interface CharacterReducerAction {
    type: CharacterReducerActionType,
    updates: CharacterReducerActionUpdates;
}

interface AbilitySlot {
    abilityKey?: string;
    reservedFor: AbilityType;
}
interface CharacterState {
    name: string;
    class?: string;
    deity?: string;
    // new
    location?: string;
    abilities: string[];
    abilitySlots: [AbilitySlot, AbilitySlot, AbilitySlot, AbilitySlot, AbilitySlot]; // strict limit of five
}

const defaultCharacter: CharacterState = {
    name: 'Adira',
    abilities: [],
    abilitySlots: [
        {
            abilityKey: '',
            reservedFor: 'location'
        },
        {
            abilityKey: '',
            reservedFor: 'class'
        },
        {
            abilityKey: '',
            reservedFor: 'deity'
        },
        {
            abilityKey: '',
            reservedFor: 'deity'
        },
        {
            abilityKey: '',
            reservedFor: 'deity'
        },
    ]
};

const characterReducer = (state: CharacterState, action: CharacterReducerAction): CharacterState => {
    // need a better way to handle the defaults, or chance that we're missing the update
    switch (action.type) {
        case 'name': 
            return {
                ...state,
                name: action.updates.name ?? ''
            }
        case 'class': {
            const { updates: { abilities, class: charClass }} = action
            const newAbilitySlots = state.abilitySlots;
            newAbilitySlots[1].abilityKey = abilities ? abilities[0] : '';

            return {
                ...state,
                class: charClass ?? '',
                abilitySlots: newAbilitySlots
            }}
        case 'origin-location': {
            const { updates: { abilities, location }} = action
            const newAbilitySlots = state.abilitySlots;
            newAbilitySlots[0].abilityKey = abilities ? abilities[0] : '';
            // pretty ungraceful ngl

            return {
                ...state,
                location,
                abilitySlots: newAbilitySlots,
            }}
        case 'deity':
            return {
                ...state,
                deity: action.updates.deity,
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