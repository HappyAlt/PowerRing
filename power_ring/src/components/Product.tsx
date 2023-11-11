import React from 'react';
import './Product.css';
import { ProductProps } from '../models/productmodel';

interface ProductsComProps {
    product:ProductProps,
    click: (e:number) => void
}

export function Product(props: ProductsComProps){

    const {product} = props

    return(
        <div className='Products'>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name}></img>
            <h2>{product.price}g</h2>
            <button onClick={() => {props.click(product.ID)}}/>
        </div>
    )
}