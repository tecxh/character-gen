/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, type PropsWithChildren } from "react"

import type { Ability, Deity, Location, OriginalClass, Passive } from '~/types';
import locData from '~/data/locations.json';
import passiveData from '~data/passives.json'
import classData from '~data/classes.json';
import deityData from '~data/deities.json';
import abilityData from '~data/abilities.json';

interface IDataContext {
    locations: Location[];
    passives: Passive[];
    classes: OriginalClass[];
    deities: Deity[];
    abilities: Ability[];
}

const dataContextValue = {
    locations: locData.locations,
    passives: passiveData.passives,
    classes: classData.classes,
    deities: deityData.deities,
    abilities: abilityData.abilities,
}

const DataContext = createContext<IDataContext>(dataContextValue);
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children}: PropsWithChildren) => {
    return (
        <DataContext.Provider value={dataContextValue}>
            {children}
        </DataContext.Provider>
    )
}
