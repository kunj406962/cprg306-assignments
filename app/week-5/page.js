import NewItem from "./new-item";
export default function Page(){
    return(
        <main className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">This is the week-5 page</h1>
            <NewItem />
        </main>
    )
}