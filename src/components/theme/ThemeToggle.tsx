import { motion } from "framer-motion";
import React from "react";

interface ThemeToggleProps {
    isDark: boolean;
    onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
    isDark,
    onToggle,
}) => {
    return (
        <motion.button
            onClick={onToggle}
            className={`
        relative inline-flex items-center justify-center
        w-12 h-6 rounded-full
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-500
        ${isDark ? "bg-blue-600" : "bg-gray-200"}
      `}
            whileTap={{ scale: 0.95 }}
        >
            <motion.div
                className={`
          absolute left-1
          w-4 h-4 rounded-full
          bg-white
          transition-transform duration-200
          ${isDark ? "translate-x-6" : "translate-x-0"}
        `}
                layout
            />
            <span className="sr-only">Toggle theme</span>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className={`
          absolute w-3 h-3
          transition-opacity duration-200
          ${isDark ? "opacity-0" : "opacity-100"}
        `}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                />
            </motion.svg>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className={`
          absolute w-3 h-3
          transition-opacity duration-200
          ${isDark ? "opacity-100" : "opacity-0"}
        `}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
            </motion.svg>
        </motion.button>
    );
};

export default ThemeToggle;
