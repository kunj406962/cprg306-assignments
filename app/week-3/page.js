import ItemList from "./item-list";
export default function page(){
    return(
        <div className="bg-gradient-to-r from-emerald-100 to-white p-6"> 
            <h1 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">Shopping List</h1>
            <ItemList/>
        </div>
    )
}