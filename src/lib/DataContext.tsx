/* eslint-disable react-refresh/only-export-components */
// supplies data via hooks to any component that needs it
import locData from '../data/locations.json';


import { createContext, useContext, type PropsWithChildren } from "react"
import type { Location } from '../types';

// type IDataContext = Record<string, Record<string, unknown>>

// extend union as data types grow
type IDataContext = Record<string, Array<Location>>;

const dataContextValue = {
    locations: locData.locations,
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
