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

    const buttonCssActive="quantity-btn w-10 h-10 rounded-full bg-green-100 text-2xl text-green-700 flex items-center justify-center hover:bg-green-200 active:bg-green-300 cursor-pointer"
    const buttonCssInactive="quantity-btn w-10 h-10 rounded-full bg-gray-200 text-2xl text-gray-400 flex items-center justify-center cursor-not-allowed"
    
    return(
        <div className='flex items-center space-x-5'>

            <button onClick={decreaseQuantity} className={(quantity!=1) ? buttonCssActive : buttonCssInactive}>-</button>
            <span className='flex items-center justify-center text-green-700'>{quantity}</span>
            <button onClick={increaseQuantity} className={(quantity!=20) ? buttonCssActive : buttonCssInactive}>+</button>

        </div>
    )
}