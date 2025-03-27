import { motion } from "framer-motion";
import React, { useRef } from "react";

interface KeyProps {
    label: string;
    width?: string;
    height?: string;
    shortcuts?: string[];
    isActive?: boolean;
    isPartOfCombination?: boolean;
    onClick?: () => void;
    onHover?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Key: React.FC<KeyProps> = ({
    label,
    width = "w-14",
    height = "h-14",
    shortcuts = [],
    isActive = false,
    isPartOfCombination = false,
    onClick,
    onHover,
}) => {
    const keyRef = useRef<HTMLDivElement>(null);

    const getHighlightClass = () => {
        if (isActive && isPartOfCombination) {
            return "bg-blue-500 dark:bg-blue-600  ";
        } else if (isActive) {
            return "bg-blue-100 dark:bg-blue-900  ";
        } else if (isPartOfCombination) {
            return "bg-blue-50 dark:bg-blue-800 ";
        }
        return "text-gray-800 dark:text-gray-200";
    };

    return (
        <motion.div
            ref={keyRef}
            className={`
                ${width} ${height}
                bg-white dark:bg-gray-800
                ${getHighlightClass()}
                rounded-lg shadow-md
                flex items-center justify-center
                cursor-pointer
                transition-all duration-200
                hover:bg-gray-100 dark:hover:bg-gray-700
                relative
                ${isActive ? "ring-2 ring-blue-500 dark:ring-blue-400" : ""}
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            onMouseEnter={(e) => onHover?.(e)}
        >
            <span className="text-sm text-black dark:text-white font-medium">
                {label}
            </span>
            {shortcuts.length > 0 && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full" />
            )}
        </motion.div>
    );
};

export default Key;
