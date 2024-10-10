import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../../assets/logo.png";      // Current logo for light theme
import darkLogo from "../../assets/dark-logo.png"; // New logo for dark theme

export const Navlinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Cars",
    link: "/#cars",
  },
  {
    id: 3,
    name: "About US",
    link: "/#about",
  },
  {
    id: 4,
    name: "Contact Us",
    link: "/#booking",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`relative z-10 shadow-lg w-full duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* Conditional Logo for Light and Dark Themes */}
          <div className="flex items-center">
            <img
              src={theme === "dark" ? darkLogo : logo} // Keep current logo for light theme and use darkLogo for dark theme
              alt="Rent"
              className="h-20 mr-2"
            />
            <span className="text-3xl font-bold font-serif text-gray-700 dark:text-white">
              Rent
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className={`text-lg font-medium py-2 px-4 rounded-md transition-all duration-500 ${
                      theme === "dark" 
                        ? "text-gray-100 hover:bg-gray-700" // Dark mode link styles
                        : "text-gray-800 hover:bg-blue-600 hover:text-white" // Light mode link styles
                    }`}
                  >
                    {name}
                  </a>
                </li>
              ))}

              {/* Dark Mode Toggle */}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-3xl cursor-pointer text-yellow-500 hover:scale-110 hover:drop-shadow-lg transition-transform duration-300"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-3xl cursor-pointer text-blue-600 hover:scale-110 hover:drop-shadow-lg transition-transform duration-300"
                />
              )}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-3xl cursor-pointer text-yellow-500 hover:scale-110 hover:drop-shadow-lg transition-transform duration-300"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-3xl cursor-pointer text-blue-600 hover:scale-110 hover:drop-shadow-lg transition-transform duration-300"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all hover:scale-110 hover:drop-shadow-lg duration-300"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all hover:scale-110 hover:drop-shadow-lg duration-300"
                size={30}
              />
            )}
          </div>
        </div>
      </div>

      {/* Responsive Menu */}
      <ResponsiveMenu showMenu={showMenu} theme={theme} />
    </div>
  );
};

export default Navbar;
