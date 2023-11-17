import { click } from '@testing-library/user-event/dist/click';
import { ProductProps, ProductsComProps } from '../../models/productmodel';
import { useState } from 'react';
import './ChosenProducts.css';

export function ChosenProducts (props:ProductsComProps){

    const [qtd, setQtd] = useState(1)

    const {product} = props

    return(
        <div className='ChosenProducts'>
            <h1>{product.name}</h1>
            <h2>{product.price*qtd}g</h2>
            <input type="number" min='1' max='10' value={qtd} onChange={c => setQtd(Number(c.target.value))}/>
            <button onClick={() => {props.click(product.ID)}}/>
        </div>
    )
}