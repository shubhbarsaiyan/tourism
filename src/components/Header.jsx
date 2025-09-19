import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/public/Jharkhand_logo.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50) // activate after 50px scroll
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent absolute"
      }`}
    >
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-12 w-auto h-35 w-50" alt="Logo" />
          </Link>

          {/* Links */}
          <div className="flex items-center lg:order-2">
            <Link 
              to="/login"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                scrolled 
                  ? "text-white bg-green-600 hover:bg-green-700" 
                  : "text-black bg-white hover:bg-gray-200"
              }`}
            >
              Log in
            </Link>
          </div>

          {/* Navigation links */}
          <div className="hidden lg:flex gap-8">
  <Link
    to="/"
    className={`relative inline-block px-2 py-1 group transition-colors ${
      scrolled
        ? "text-black hover:text-green-600"
        : "text-white hover:text-green-200"
    }`}
  >
    Home
    <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
  </Link>
<a
  href="#tripplanner"  
  className={`relative inline-block px-2 py-1 group transition-colors ${
    scrolled
      ? "text-black hover:text-green-600"
      : "text-white hover:text-green-200"
  }`}
>
  Trip planner
  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
</a>
 <a
  href="#bookings"  
  className={`relative inline-block px-2 py-1 group transition-colors ${
    scrolled
      ? "text-black hover:text-green-600"
      : "text-white hover:text-green-200"
  }`}
>
  Bookings
  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
</a>
<a
  href="#topdestination"  
  className={`relative inline-block px-2 py-1 group transition-colors ${
    scrolled
      ? "text-black hover:text-green-600"
      : "text-white hover:text-green-200"
  }`}
>
  Top Destination
  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
</a>
<a
  href="#footer"  
  className={`relative inline-block px-2 py-1 group transition-colors ${
    scrolled
      ? "text-black hover:text-green-600"
      : "text-white hover:text-green-200"
  }`}
>
  Contact us
  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
</a>

</div>
        </div>
      </nav>
    </header>
  )
}