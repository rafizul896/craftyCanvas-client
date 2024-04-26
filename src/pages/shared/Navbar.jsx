import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const currentTheme = localStorage.getItem('currentTheme')
    const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');
    console.log(theme)

    const handleToggle = e => {
        console.log(e.target.checkbox)
        if (e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }

    useEffect(() => {
        localStorage.setItem('currentTheme', theme)
        document.querySelector('html').setAttribute('data-theme', currentTheme);
    }, [theme])

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("LogOut Success", {
                    theme: "colored"
                });
            })
    }
    const links = <>
        <NavLink to="/"  className={({ isActive }) => isActive ? "text-red-400" : "text-black"}>Home</NavLink>
        <NavLink to="/allCraftItems"  className={({ isActive }) => isActive ? "text-red-400" : "text-black"}>All Art & craft Items</NavLink>
        <NavLink to="/addCraftItem"  className={({ isActive }) => isActive ? "text-red-400" : "text-black"}>Add Craft Item</NavLink>
        <NavLink to="/myArtCraft"  className={({ isActive }) => isActive ? "text-red-400" : "text-black"}>My Art&Craft List</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 px-0">
            <div className="navbar-start gap-2">
                <div className="dropdow">
                    <div onClick={() => setOpen(!open)} className="lg:hidden text-xl md:text-2xl">
                        {
                            open ? <IoClose /> : <FiMenu />
                        }
                    </div>
                    <ul className={`${open ? 'block' : 'hidden'} absolute menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-[200px] h-[200p] flex gap-5 text-center items-center justify-center`}>
                        {links}
                    </ul>
                </div>
                <a className="text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold gap-5">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2 md:gap-3">
                <div>
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input onClick={handleToggle} type="checkbox" className="theme-controller" />
                        {/* sun icon */}
                        <svg className="swap-off fill-current w-10 h-10 text-[#0ea5e9]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        {/* moon icon */}
                        <svg className="swap-on fill-current w-10 h-10 text-[#0ea5e9]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>

                {
                    user ?
                        <div className="flex items-center gap-5 md:gap-10 z-50">
                            <div className="flex gap-3 md:gap-5 z-50" data-tip={user.displayName}>
                                <div className="dropdown dropdown-hover">
                                    <summary tabIndex={0} role="button" className="m-1 list-none w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img className="rounded-full w-full h-full object-cover" src={user ? user.photoURL : ""} />
                                    </summary>
                                    <ul tabIndex={0} className="p-2 shadow-xl menu dropdown-content z-[1] bg-base-100 rounded-box w-36 absolute right-0 text-center gap-2 border">
                                        <li>{user.displayName}</li>
                                        <li>
                                            <button onClick={handleLogOut} className="py-2 px-3 md:px-5 bg-[#6a60e2] text-white rounded-md">Logout</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        :
                        <>
                            <Link to="/login">
                                <button className="py-2 px-3 md:px-5 bg-[#6a60e2] text-white rounded-md">Login</button>
                            </Link>
                            <Link to="/register">
                                <button className="py-2 px-3 md:px-5 bg-[#6a60e2] text-white rounded-md">Register</button>
                            </Link>
                        </>

                }
            </div>
        </div>
    );
};

export default Navbar;