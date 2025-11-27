'use client';
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";
import ItemList from "./item-list";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

export default function Page(){
    const{user, firebaseSignOut }=useUserAuth();  
    const [item, setItem]=useState([]);
    const[selectedItem, setSelectedItem]=useState("");
    const router=useRouter();

    useEffect(()=>{
        if(user){
            loadItems()
        }
    }, [user])

    const loadItems= async ()=> {
        setItem(getItems(user.uid))
        console.log(item)
    }

    const logout=async()=>{
        await firebaseSignOut();
        router.push("/week-9");
    }
    const handleAddItem=async (newItem)=>{
        const addItems= await addItem(user.uid,newItem)
        if (item.length>0 && addItems){
            setItem([...item, newItem]);
        }

        else{
            setItem([newItem])
        }        
       
    }

    const handleSelectedItem=(itemName)=>{
        const cleanedName=itemName.split(",")[0].trim().replace(/[^\w\s]/g, '').toLowerCase();
        setSelectedItem(cleanedName);
    }

    if(user===null){
        return(<h1>You have to sign in to access this page</h1>)
    }

    return(
        <div className="min-h-screen bg-gradient-to-r from-emerald-100 to-white">
            {/* Logout button top right */}
            <div className="flex justify-end p-4">
                <button 
                    className='bg-red-100 py-2 px-3 font-medium rounded-lg hover:bg-red-200 active:bg-red-300 cursor-pointer' 
                    onClick={logout}
                >
                    Logout
                </button>
            </div>
            
            {/* Main content - two columns */}
            <div className="flex flex-row gap-6 p-6">
                {/* Shopping List - Left Side */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Shopping List</h1>
                    <NewItem AddItem={handleAddItem}/>
                    <ItemList itemData={item} selectItem={handleSelectedItem}/>
                </div>
                
                {/* Meal Ideas - Right Side */}
                <div className="flex-1 bg-emerald-50 p-6 rounded-lg shadow-md">
                    <MealIdeas ingredient={selectedItem}/>
                </div>
            </div>
        </div>
    )
}