import { ProductProps, ProductsComProps } from '../../models/productmodel';
import { useState, useContext } from 'react';
import './ChosenProducts.css';
import { GContext } from '../../contexts/gcontext';

export function ChosenProducts (props:ProductsComProps){

    const {product} = props

    const {chosens, setChosens, ChangeChosenValue, HowMany} = useContext(GContext)

    return(
        <div className='ChosenProducts'>
            <h1>{product.name}</h1>
            <h2>{product.price*HowMany(product.ID)}g</h2>
            <input type="number" min='1' max='10' value={HowMany(product.ID)} onChange={c => ChangeChosenValue(product.ID, Number(c.target.value))}/>
            <button onClick={() => {props.click(product.ID)}}/>
        </div>
    )
}