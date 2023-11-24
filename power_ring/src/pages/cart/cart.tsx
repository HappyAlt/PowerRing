import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GContext } from '../../contexts/gcontext';

import { products } from '../../data/Data';

import './cart.css';

export function Cart(){

    const {chosens, setChosens, ChangeChosenValue, HowMany} = useContext(GContext)

    const [totalProducts, setTotalProducts] = useState<any>()
    const [totalPrice, setTotalPrice] = useState(0)

    function updateTotalProducts(){
        const productList = products.filter( i => chosens.some(item => item.ID == i.ID))
        const temp = productList.map(item => item.name)
        setTotalProducts(temp.join(', '))
    }
    function  updateTotalPrice(){
        const productList = products.filter( i => chosens.some(item => item.ID == i.ID))
        const temp = productList.map(item => item.price*HowMany(item.ID))

        let Sum = 0

        temp.forEach(item => {Sum = item + Sum})

        setTotalPrice(Sum)
    }

    useEffect(() => {updateTotalProducts(); updateTotalPrice()}, [chosens])

    return(
        <div className='Cart'>
            <h1>Items in cart:</h1>
            <p>{totalProducts}</p>
            <p>{totalPrice}</p>
            <Link to='/'><button></button></Link>
        </div>
    )
}