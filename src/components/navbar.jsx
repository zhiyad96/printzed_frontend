
import React, { useState, useRef, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <nav
      ref={navRef}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-black/60 backdrop-blur-md px-6 py-4 rounded-xl text-white max-w-6xl w-[90%]">


      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">Logo</h1>
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <ul className="flex gap-6">
            <li><a href="#home">Home</a></li>
            <li><a href="#portfolio">Code Works</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#teams">Our Team</a></li>
          </ul>
          <button className="bg-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-600">
            Contact Us
          </button>
        </div>
      </div>

      {/* =============================responsive mode ==================== */}

      {menuOpen && (
        <div className="flex flex-col items-center gap-4 mt-4 md:hidden">
          <ul className="flex flex-col gap-3 text-center">
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>Code Works</a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>Services</a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>Our Team</a>
            </li>
          </ul>
          <button className="bg-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-600">
            Contact Us
          </button>
        </div>
      )}


    </nav>
  );
}

export default Navbar;