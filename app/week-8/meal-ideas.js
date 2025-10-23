'use client';
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient){
    const response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data= (await response).json();
    return data;
}

export default function MealIdeas({ingredient, className}){
    const [mealIdeas, setMealIdeas]=useState([]);
    
    const loadMealIdeas=async()=>{
        if(!ingredient){
            return
        }
        const data= await fetchMealIdeas(ingredient);
        setMealIdeas(data.meals);
    }

    useEffect(()=>{
        loadMealIdeas();
    }, [ingredient]);

    return(
        <div>
            {(!ingredient) ? <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">Select an item to see meal ideas</h2> 
                :
                (
                    <div className={className}>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">Meal Ideas with "{ingredient}"</h2>
                        {
                            !mealIdeas ? (
                                <p>No meal ideas found.</p>
                            ) : (
                                <ul className="col columns-2"> 
                                    {mealIdeas.map(meal=>(
                                        <li key={meal.idMeal} className="mb-2 px-1 py-1 border-3 border-green-500 text-center text-green-600 rounded-lg hover:bg-green-500 hover:text-white transition duration-300 w-full">
                                            <h3>{meal.strMeal}</h3>
                                        </li>
                                    ))}
                                </ul>
                            )
                        }
                    </div>
                )}
            
        </div>
    )
}