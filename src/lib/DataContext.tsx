/* eslint-disable react-refresh/only-export-components */
// supplies data via hooks to any component that needs it
import locations from '../data/locations.json';


import { createContext, useContext, type PropsWithChildren } from "react"

type IDataContext = Record<string, Record<string, unknown>>

const dataContextValue = {
    locations
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
