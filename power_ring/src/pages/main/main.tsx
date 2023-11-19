import { useState, useContext } from 'react';
import { Product } from '../../components/Product/Product';
import { products } from '../../data/Data';
import { ChosenProducts } from '../../components/ChosenProducts/ChosenProducts';
import { GContext } from '../../contexts/gcontext';
import { Link } from 'react-router-dom';

import './main.css';

export function Main(){
    
    const {chosens, setChosens} = useContext(GContext)

    function addChosen(ID:number){
        const FIndex = chosens.findIndex(item => item.ID == ID)
        
        if(FIndex == -1){
            setChosens([... chosens,{ID,Qnt:1}])
        }
    }

    function removeChosen(ID:number){
        const FIndex = chosens.findIndex(item => item.ID == ID)
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
                {products.filter(product => chosens.some(item => item.ID == product.ID)).map( item => <ChosenProducts key={item.ID} product={item} click={removeChosen}/>)}
                <Link to='/Cart/'><button></button></Link>
            </div>
        </div>
    )
}