import React from 'react';
import { useState } from 'react'

interface GContextProps {
    chosens: number[]
    setChosens: (ID: number[]) => void
}

export const GContext = React.createContext<GContextProps>({} as GContextProps);

export const GProvider = ({children}: {children: React.ReactNode}) => {
    
    const [chosens, setChosens] = useState<number[]>([])
    
    return (<GContext.Provider value = {{chosens, setChosens}} >
        {children}
    </GContext.Provider>)
}

export default GProvider