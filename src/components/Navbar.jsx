import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const sun = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  );

  const moon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
  );

  return (
    <nav className="bg-white dark:bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">Emanuel Feria</span>
        </a>
        
        <div className="flex items-center md:order-2">
          {/* Theme toggle button - visible on all screen sizes */}
          <button 
            type="button"
            onClick={toggleTheme}
            className="p-2 mr-2 bg-white dark:bg-black text-black dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {theme === 'dark' ? sun : moon}
          </button>
          
          {/* Social icons - always on right side on desktop */}
          <div className="hidden md:flex items-center">
            <a href="https://github.com/emonrf" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white mx-2">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/emanuelrf" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white mx-2">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="mailto:emanuel.rferia@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white mx-2">
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 dark:text-gray-400 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 ml-2"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        
        {/* Desktop menu and mobile menu */}
        <div className={`items-center justify-center ${isMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col p-4 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white dark:bg-black text-center">
            <li>
              <a href="#about" className="block py-2 px-3 text-gray-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-500 md:p-0">About</a>
            </li>
            <li>
              <a href="#projects" className="block py-2 px-3 text-gray-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-500 md:p-0">Projects</a>
            </li>
            <li>
              <a href="#timeline" className="block py-2 px-3 text-gray-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-500 md:p-0">Timeline</a>
            </li>
            <li>
              <a href="#contact" className="block py-2 px-3 text-gray-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-500 md:p-0">Contact</a>
            </li>
          </ul>
          
          {/* Mobile social icons - only visible when menu is open on mobile */}
          <div className="flex justify-center items-center space-x-4 mt-4 md:hidden">
            <a href="https://github.com/emonrf" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/emanuelrf" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="mailto:emanuel.rferia@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white">
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;