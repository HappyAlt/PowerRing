import React from 'react';
import { useState } from 'react'

interface ChosenProps {
    ID: number
    Qnt: number
}

interface GContextProps {
    chosens: ChosenProps[]
    setChosens: (ID: ChosenProps[]) => void
    ChangeChosenValue: (ID: number, Qnt: number) => void
    HowMany(ID: number): number
}

export const GContext = React.createContext<GContextProps>({} as GContextProps);

export const GProvider = ({children}: {children: React.ReactNode}) => {
    
    const [chosens, setChosens] = useState<ChosenProps[]>([])

    function ChangeChosenValue(ID:number, Qnt:number){

        if(Qnt > 10 || Qnt < 1) return;

        const FIndex = chosens.findIndex(item => item.ID == ID)

        if(FIndex != -1){
            const temp = [... chosens]

            temp[FIndex].Qnt = Qnt

            setChosens(temp)
        }
    }

    function HowMany(ID:number){
        const Find = chosens.find(item => item.ID == ID)

        if(Find){
            return Find.Qnt
        }return 0
    }
    
    return (<GContext.Provider value = {{chosens, setChosens, ChangeChosenValue, HowMany}} >
        {children}
    </GContext.Provider>)
}

export default GProvider