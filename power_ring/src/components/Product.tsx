import React from 'react';
import './Product.css';

export function Product(props:{name:string, url:string, price:number}){
    return(
        <div className='Products'>
            <h1>{props.name}</h1>
            <img src={props.url} alt={props.name}></img>
            <h2>${props.price}</h2>
        </div>
    )
}