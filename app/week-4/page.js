import NewItem from "./new-item";
export const metadata = {
  title: "Week 4",
};
export default function Page(){
    return(
        <main>
            <h1 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">This is the week-4 page</h1>
            <NewItem />
        </main>
    )
}