import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GContext } from '../../contexts/gcontext';

import { products } from '../../data/Data';

import './cart.css';

export function Cart(){

    const {chosens, setChosens} = useContext(GContext)

    return(
        <div className='Cart'>
            {products.filter(product => chosens.some( item => item.ID == product.ID)).map(product => <>
            
            <h1 key={product.ID}>{product.name}</h1>

            </>)}
            <Link to='/'><button></button></Link>
        </div>
    )
}