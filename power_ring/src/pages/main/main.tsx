import React from 'react';
import './main.css';
import { Product } from '../../components/Product';

export function Main(){
    return (
        <div className='main'>
            <Product name='Teste' image='Teste' price={2}></Product>
        </div>
    )
}