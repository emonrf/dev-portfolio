import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <div className="py-5 text-center">
            {/* Social media links */}
                <p className="text-sm mt-2 opacity-50">
                    &copy; {new Date().getFullYear()} Emanuel Feria. All rights reserved.
                </p>
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
        </div>
    )
}

export default Footer;