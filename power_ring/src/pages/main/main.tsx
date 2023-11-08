import React from 'react';
import './main.css';
import { Product } from '../../components/Product';

export function Main(){
    return (
        <div className='main'>
            <Product name='Teste' url='Teste' price={2}></Product>
        </div>
    )
}