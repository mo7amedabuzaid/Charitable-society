import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  function drop() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    function handaleClick(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handaleClick);

    return () => {
      document.removeEventListener("mousedown", handaleClick);
    };
  }, []);

  return (
    <>
      <div className="sticky z-50 top-0 left-0 rounded-b-2xl   right-0 bg-white  container mx-auto flex items-center justify-between px-4 py-4 md:px-10 lg:px-20 ">
        <button
          onClick={() => navigate("/donate")}
          className="bg-primary text-white py-1 px-3  rounded-2xl hover:cursor-pointer hover:bg-primary-light text-small  sm:font-medium  duration-[.3s]"
        >
          Donate Now
        </button>

        <div className=" hidden   md:block">
          <NavLink
            to="/"
            className=" text-primary py-1 px-3 mr-3  rounded-2xl hover:cursor-pointer hover:bg-primary-light text-small sm:text-lg font-bold  duration-[.3s]"
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className=" text-primary py-1 px-3 mr-3  rounded-2xl hover:cursor-pointer hover:bg-primary-light text-small sm:text-lg font-bold  duration-[.3s]"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className=" text-primary py-1 px-3  rounded-2xl hover:cursor-pointer hover:bg-primary-light text-small sm:text-lg font-semibold sm:font-bold   duration-[.3s]"
          >
            About
          </NavLink>
        </div>

        <p className="text-primary  sm:font-bold text-lg sm:text-[24px] leading-8">
          Lumina Impact
        </p>
        <div ref={menuRef} className="relative md:hidden ">
          <button
            onClick={() => drop()}
            className="text-primary  hover:scale-110 transition-all duration-300 hover:text-primary-light  hover:cursor-pointer text-[15px]  sm:text-[20px] sm:block md:hidden "
          >
            <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>

          {isOpen ? (
            <div className="absolute z-50 top-full rounded-xl shadow-lg right-0  w-48  flex flex-col mt-2 py-2  items-start gap-2   px-1 border border-gray-700  bg-white">
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/projects"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                  }`
                }
              >
                Projects
              </NavLink>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/about"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                  }`
                }
              >
                About
              </NavLink>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
