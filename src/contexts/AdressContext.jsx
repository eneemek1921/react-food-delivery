import { createContext, useContext, useEffect, useState } from "react";


const AdressContext = createContext()
const ADRESS_STORAGE_KEY = 'food-adress';

export default function AdressContextProvider({children}) {
    const [adress, setAdress] = useState(() => {
        const saved = localStorage.getItem(ADRESS_STORAGE_KEY)
        return saved ? JSON.parse(saved) : null;
    })

    useEffect(() => {
        if (adress) {
            localStorage.setItem(ADRESS_STORAGE_KEY, JSON.stringify(adress))
        } else {
            localStorage.removeItem(ADRESS_STORAGE_KEY);
        }
    }, [adress])

    const addAdress = (data) => {
        setAdress(data)
    }

    return (
        <AdressContext.Provider value={{ adress, setAdress, addAdress }}>
            {children}
        </AdressContext.Provider>
    )
}

export function useAdress() {
    return useContext(AdressContext);
}