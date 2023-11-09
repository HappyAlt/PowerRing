import React from 'react';
import './Product.css';
import { ProductProps } from '../models/productmodel';

export function Product(props: ProductProps){
    return(
        <div className='Products'>
            <h1>{props.name}</h1>
            <img src={props.image} alt={props.name}></img>
            <h2>{props.price}g</h2>
        </div>
    )
}