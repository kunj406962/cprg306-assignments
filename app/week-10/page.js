"use client";
import { useRouter } from "next/navigation";
import { useUserAuth } from "./_utils/auth-context";
export default function Page() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn} = useUserAuth();
    const router=useRouter();
    const goToShoppingList=()=>{
        router.push("/week-10/shopping-list");
    }
    const logIn=async()=>{
        try{
            await gitHubSignIn();
            goToShoppingList();
        }catch(error){
            console.log("Error logging in:", error);
        }
    }

    console.log(user)
    return(
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-r from-emerald-100 to-white ">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">Welcome to the Firebase Auth Demo</h1>
            {user ? ( 
                <div>
                    <p>You are logged in as {user.displayName}</p>
                    <button className='submit-btn w-full bg-green-100 py-3 px-4 font-medium rounded-lg hover:bg-green-200 active:bg-green-300 cursor-pointer' 
                    onClick={goToShoppingList}>
                        Go to Shopping List
                    </button>
                </div>):(
                <div>
                    <p>You are not logged in.</p>
                    <button className='submit-btn w-full bg-green-100 py-3 px-4 font-medium rounded-lg hover:bg-green-200 active:bg-green-300 cursor-pointer'
                    onClick={logIn}>
                        Login with GitHub
                    </button>
                </div>
            )}
        </div>
    )
}

