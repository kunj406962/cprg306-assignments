'use client';

import {useState} from 'react';

export default function NewItem(){
    const[quantity, setQuantity]=useState(1)

    const increaseQuantity=()=>{
        if(quantity<20){
            setQuantity(quantity+1)
        }
    }

    const decreaseQuantity=()=>{
        if (quantity>1){setQuantity(quantity-1)}
    }

    const buttonCss="quantity-btn w-10 h-10 rounded-full bg-green-100 text-2xl text-green-700 flex items-center justify-center hover:bg-green-200 active:bg-green-300"

    return(
        <div className='flex items-center space-x-5'>
            <button onClick={decreaseQuantity} className={buttonCss}>-</button>
            <span className='flex items-center justify-center text-green-700'>{quantity}</span>
            <button onClick={increaseQuantity} className={buttonCss}>+</button>
        </div>
    )
}