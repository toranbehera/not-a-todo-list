import { Link } from "react-router";
import { selectCurrentUsername } from "../app/features/auth/authSlice";
import { useAppSelector } from "../hooks/reduxHooks";

export default function Navbar(){
    const username = useAppSelector(selectCurrentUsername);

    return(
        <>
            <div 
                className="flex justify-between bg-black text-white text-xl p-6 shadow-lg w-full top-0 z-50"
                id="navbar"
            >
                <header className="font-bold text-2xl">TaskMaster</header>
                <button className="md:hidden" popoverTarget="nav-menu">☰</button>
                <nav className="flex gap-4 hidden md:flex" >
                    <Link to='/' className="hover:underline">Tasks</Link>
                    <Link to='/login' className="hover:underline">{username ? username : "Login/Signup"}</Link>
                </nav>
            </div>

            {/* navigation menu when the screen shrinks */}
            <nav 
                className="md:hidden shadow-xs border-2 border-gray-200 px-5 py-2 top-20 w-full" 
                popover="auto" 
                id="nav-menu"
            >
                <div className="flex gap-8 justify-self-end">
                    <Link className="hover:underline" to='/'>Tasks</Link>
                    <Link className="hover:underline" to='/login'>{username ? username : "Login/Signup"}</Link>   
                </div>
            </nav>
        </>
        
    )
}
