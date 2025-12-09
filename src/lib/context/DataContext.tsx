/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, type PropsWithChildren } from "react"

import type { Location, OriginalClass, Passive } from '~/types';
import locData from '~/data/locations.json';
import passiveData from '~/data/passives.json'
import classData from '~/data/classes.json';

interface IDataContext {
    locations: Location[];
    passives: Passive[];
    classes: OriginalClass[];
}

const dataContextValue = {
    locations: locData.locations,
    passives: passiveData.passives,
    classes: classData.classes,
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
