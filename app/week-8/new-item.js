'use client';

import {useState} from 'react';

export default function NewItem({AddItem}){
    const categories=["produce", "dairy", "bakery", "meat", "pantry", "frozen", "other"]
    const[quantity, setQuantity]=useState(1)
    const[name, setName]=useState("")
    const[category, setCategory]=useState("Produce")

    

    const increaseQuantity=(event)=>{
        event.preventDefault()
        if(quantity<20){
            setQuantity(quantity+1)
        }
    }

    const decreaseQuantity=(event)=>{
        event.preventDefault()
        if (quantity>1){
            setQuantity(quantity-1)
        }
    }

    const generateId=()=>{
        return crypto.randomUUID()
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        if(name===""){
            alert("Please enter an item name.")
            return
        }
        else{
            const newItem={id:generateId() ,name: name, category: category, quantity: quantity}
            AddItem(newItem)
            setName("")
            setCategory("Produce")
            setQuantity(1)
        }
        
    }

    const buttonCssActive="quantity-btn w-10 h-10 rounded-full bg-green-100 text-2xl text-green-700 flex items-center justify-center hover:bg-green-200 active:bg-green-300 cursor-pointer"
    const buttonCssInactive="quantity-btn w-10 h-10 rounded-full bg-gray-200 text-2xl text-gray-400 flex items-center justify-center cursor-not-allowed"
    
    return(
        <form className='flex flex-col p-10 items-center border border-green-300' onSubmit={handleSubmit}>
            <input type="text" 
                placeholder='Item Name' 
                className='input w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent' 
                value={name} 
                onChange={(e)=>setName(e.target.value)}
            />
            <select
                value={category}
                className='input w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent' 
                onChange={(e)=>setCategory(e.target.value)}
                required>
                {categories.map((cat, index)=>(
                    <option key={index} value={cat}>{cat}</option>
                ))}
            </select>
            <div className='flex items-center space-x-5 mb-4 border border-green-200 p-4'>

                <button onClick={decreaseQuantity} className={(quantity!=1) ? buttonCssActive : buttonCssInactive}>-</button>
                <span className='flex items-center justify-center text-green-700'>{quantity}</span>
                <button onClick={increaseQuantity} className={(quantity!=20) ? buttonCssActive : buttonCssInactive}>+</button>

            </div>
            <button 
                type='submit'
                className='submit-btn w-full bg-green-100 py-3 px-4 font-medium rounded-lg hover:bg-green-200 active:bg-green-300 cursor-pointer'
            >
                Add Item
            </button>
        </form>
    )
}