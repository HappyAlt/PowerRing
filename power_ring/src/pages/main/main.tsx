import React from 'react';
import { useState } from 'react';
import './main.css';
import { Product } from '../../components/Product';
import { products } from '../../data/Data';

export function Main(){
    
    const [chosens, setChosens] = useState<number[]>([])

    function addOrRemoveChosen(ID:number){
        const FIndex = chosens.findIndex(item => item == ID)
        if(FIndex != -1){
            const temp = [... chosens]

            temp.splice(FIndex, 1)
            setChosens(temp)
        }else{
            setChosens([... chosens,ID])
        }
//        const find = products.find(product => product.ID == ID)
    }
    
    return (
        <div className='main'>
            <div className='DisplayProducts'>
                {products.map( item => <Product key={item.ID} product={item} click={addOrRemoveChosen}/>)}
            </div>

            <div className='ChosenProducts'>
                {products.filter(product => chosens.includes(product.ID)).map( item => <Product key={item.ID} product={item} click={addOrRemoveChosen}/>)}
            </div>
        </div>
    )
}