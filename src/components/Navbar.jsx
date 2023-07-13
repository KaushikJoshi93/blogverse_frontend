'use client';
import { useAuth } from "@/hooks/useAuth";
import useCookie from "@/hooks/useCookie";
import Link from "next/link";
import { useEffect, useState } from "react";



const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { cookie } = useCookie();
  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      logout();
      setShowDropdown(false)
    } catch (err) {
      console.log(err)
    }
  }
  const UserAvatarDropDown = (props) => (
    <div className={`relative ${props.className}`}>
      <button className="focus:outline-none" onClick={() => setShowDropdown(!showDropdown)}>
        <img className="w-10 h-10 rounded-full ml-4" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar" />
      </button>
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
          <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">{props.username ?? ""}</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Edit Profile</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Settings</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={handleLogout}>Logout</a>
        </div>
      )}
    </div>
  )
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#414e68] bg-opacity-60 backdrop-filter backdrop-blur-lg backdrop-opacity-70 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">Blogverse</Link>
          </div>
          <div className="flex gap-4">
            {cookie ? <UserAvatarDropDown className="block md:hidden" username={cookie.name} /> : ""}
            <div className="sm:hidden">
              <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setShow(!show)}>
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden items-center  sm:flex">
            <Link href="/" className="text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link href="/blogs" className="text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium">Blogs</Link>
            <Link href="/contact" className="text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            {
              (cookie && cookie.role == "admin") ?
                <Link href="/admin/dashboard" className="text-gray-300 bg-green-700 hover:bg-green-500 px-3 py-2 rounded-md text-sm font-medium" >Dashboard</Link> :
                ""
            }
            {!cookie ?
              <>
                <Link href="/login" className="text-gray-300 bg-orange-400 hover:bg-orange-700 px-3 py-2 rounded-md text-sm font-medium" >Login</Link>
                <Link href="/register" className="text-gray-300 bg-blue-400 hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium ml-4" >Register</Link>
              </> :
              <UserAvatarDropDown username={cookie.name} />
            }

          </div>
        </div>
      </div>
      {show ? <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 ">
          <Link href="/" className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setShow(!show)}>Home</Link>
          <Link href="/about" className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setShow(!show)}>About</Link>
          <Link href="/blogs" className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setShow(!show)}>Blogs</Link>
          <Link href="/contact" className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setShow(!show)}>Contact</Link>
          {
              (cookie && cookie.role == "admin") ?
                <Link href="/admin/dashboard" className="text-gray-300  bg-green-700 hover:bg-green-500 px-3 py-2 rounded-md text-sm font-medium" onClick={() => setShow(!show)}>Dashboard</Link> :
                ""
          }
          {!cookie ?
            <>
              <Link href="/login" className="text-gray-300 bg-orange-400 hover:bg-orange-700 block px-3 py-2 rounded-md text-base font-medium ml-2 mr-2" onClick={() => setShow(!show)}>Login</Link>
              <Link href="/register" className="text-gray-300 bg-blue-400 hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium ml-2 mr-2 mt-2" onClick={() => setShow(!show)}>Register</Link>
            </> : ""
          }


        </div>
      </div> : ""}
    </nav>


  )
}

export default Navbar;