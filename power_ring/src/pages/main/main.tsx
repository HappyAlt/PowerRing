import { useState } from 'react';
import { Product } from '../../components/Product/Product';
import { products } from '../../data/Data';
import { ChosenProducts } from '../../components/ChosenProducts/ChosenProducts';

import './main.css';

export function Main(){
    
    const [chosens, setChosens] = useState<number[]>([])

    function addChosen(ID:number){
        const FIndex = chosens.findIndex(item => item == ID)
        
        if(FIndex == -1){
            setChosens([... chosens,ID])
        }
    }

    function removeChosen(ID:number){
        const FIndex = chosens.findIndex(item => item == ID)
        if(FIndex != -1){
            const temp = [... chosens]

            temp.splice(FIndex, 1)
            setChosens(temp)
        }
    }

    return (
        <div className='main'>
            <div className='DisplayProducts'>
                {products.map( product => <Product key={product.ID} product={product} click={addChosen}/>)}
            </div>

            <div className='ChosenProducts'>
                {products.filter(product => chosens.includes(product.ID)).map( item => <ChosenProducts key={item.ID} product={item} click={removeChosen}/>)}
            </div>
        </div>
    )
}