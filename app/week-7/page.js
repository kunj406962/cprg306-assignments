'use client';
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page(){
    const [item, setItem]=useState(itemsData);

    const handleAddItem=(newItem)=>{
        setItem([...item, newItem]);
    }

    return(
        <div className="bg-gradient-to-r from-emerald-100 to-white p-6 flex flex-col items-center min-h-screen"> 
            <h1 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">Shopping List</h1>
            <NewItem AddItem={handleAddItem}/>
            <ItemList itemData={item}/>
        </div>
    )
}