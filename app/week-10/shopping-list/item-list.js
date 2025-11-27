'use client'
import Item from "./item";

import { useState } from "react";

export default function ItemList({itemData, selectItem}){ 
    const [sortBy, setSortBy]=useState("name");
    const[groupBy, setGroupBy]=useState(false);
    const[selectedItem, setSelectedItem]=useState("");
    const onSelect=(itemName)=>{
        setSelectedItem(itemName);
        selectItem(itemName);
    }

    const myCompare=(a,b,sortBy)=>{
        if (sortBy==="name"){
            if (a.name.toLowerCase()<b.name.toLowerCase()) return -1;
            else if (a.name.toLowerCase()>b.name.toLowerCase()) return 1;
            return 0;
        }
        else if (sortBy==="category"){
            if (a.category.toLowerCase()<b.category.toLowerCase()) return -1;
            else if (a.category.toLowerCase()>b.category.toLowerCase()) return 1;
            return 0;
        }
    }

    let items= []
    if(itemData.length>0){
        items= [...itemData].sort((a,b)=>myCompare(a,b,sortBy));
    }
    
    
    const sortButtonCss="submit-btn border-3 border-green-500 bg-green-100 py-3 px-4 font-medium rounded-lg hover:bg-green-200 active:bg-green-300 cursor-pointer"
    
    const sortButtonActive="submit-btn border-3 border-green-500 bg-green-100 py-3 px-4 font-medium rounded-lg bg-green-300"
    
    const groupedNames = items.reduce((acc, item) => {
    
        const key = item.category;
        if (!acc[key]) acc[key] = [];
        acc[key].push([item.name, item.quantity]); // Only store names and quantities making the keys the categories
        return acc;
    }, {});    
   
    return(
        <div className="flex flex-col w-fit ">
            <div className="flex justify-around bg-green-100 p-3 space-x-3">
                <button onClick={()=>{setSortBy("name"); setGroupBy(false);}} className={(sortBy==="name" && groupBy===false)?sortButtonActive:sortButtonCss}>Sort By Name</button>
                <button onClick={()=>{setSortBy("category"); setGroupBy(false);}} className={(sortBy==="category" && groupBy===false)?sortButtonActive:sortButtonCss}>Sort By Category</button>
                <button onClick={()=>setGroupBy(true)} className={(groupBy===true)?sortButtonActive:sortButtonCss}>Group By Category</button>
            </div>
            
            <ul className="flex flex-col items-stretch">
                {(!groupBy)?(items.map(item=>(
                    <Item key={item.id} item={item} onSelect={onSelect}/>
                    )))
                :(
                    Object.keys(groupedNames).map(category => (
                        <li key={category}>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">{category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}</h2>
                            <ul>
                                {groupedNames[category].map(([name, quantity], index) => (
                                    <li key={index} className="my-2 px-1 py-1 border-3 border-green-500 text-center text-green-600 rounded-lg hover:bg-green-500 hover:text-white transition duration-300 w-full">
                                        <h3>{name}</h3>
                                        <p>Get {quantity}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))
                )
                    
                }
                
            </ul>
        </div>
        
    )
}