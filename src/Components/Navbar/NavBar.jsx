import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const toggleNav = ()=>{
        setOpen(!open);
    }
  return (
   <>
        <nav className='w-full p-6 flex items-center justify-between gap-4 md:px-14 fixed z-[99]  border-b-2 h-[60px] lg:h-[100px] bg-white'>
            <div className="flex items-center justify-between ">
                <div id="logo" className="md:text-[32px]">
                    <Link to='/' className='font-normal text-green-600'><span className='font-medium text-lg text-black md:text-[34px] '>Eco</span>buy</Link>
                </div>
                
            </div>

{/* Search Box */}
            <div className="w-full flex items-center px-2 py-1 border-2 rounded-md md:w-[50%] lg:text-[16px]">
                <input type="text" name="search" id="search" placeholder="Search here..." className="outline-none w-full "  />
                <IoSearchSharp className="lg:text-[25px]" />
            </div>

{/* items */}
<div className="hidden lg:flex " >
    <ul className="flex items-center justify-between gap-4 md:text-[25px]">
       
        <li><Link to="/cart"><IoCartSharp /> </Link> </li>
        <li><Link to="/profile"><FaUser /></Link></li>
    </ul>
</div>

{/* Hambreguer */}
            <div className="lg:hidden" onClick={toggleNav}>
                <GiHamburgerMenu />
                </div>
        </nav>
   </>
  )
}

export default NavBar