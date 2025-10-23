'use client';
import MealIdeas from "./meal-ideas";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page(){
    const [item, setItem]=useState(itemsData);
    const[selectedItem, setSelectedItem]=useState("");
    const handleAddItem=(newItem)=>{
        setItem([...item, newItem]);
    }

    const handleSelectedItem=(itemName)=>{
        const cleanedName=itemName.split(",")[0].trim().replace(/[^\w\s]/g, '').toLowerCase();
        setSelectedItem(cleanedName);
    }

    return(
        <div className="flex">
            <div className="bg-gradient-to-r from-emerald-100 to-white p-6 flex flex-col items-center min-h-screen"> 
            <h1 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">Shopping List</h1>
            <NewItem AddItem={handleAddItem}/>
            <ItemList itemData={item} selectItem={handleSelectedItem}/>            
            </div>
            <MealIdeas className={"bg-emerald-100 p-6 flex flex-col items-center min-h-screen"} ingredient={selectedItem}/>
        </div>
        
    )
}