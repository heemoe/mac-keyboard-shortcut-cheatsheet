import { motion } from "framer-motion";
import React from "react";
import { Shortcut, ShortcutCategory } from "../../types/shortcuts";

interface ShortcutListProps {
    shortcuts: Shortcut[];
    selectedCategory: ShortcutCategory | null;
    onShortcutHover: (shortcut: Shortcut) => void;
    onShortcutLeave: () => void;
    activeShortcut: Shortcut | null;
}

const ShortcutList: React.FC<ShortcutListProps> = ({
    shortcuts,
    selectedCategory,
    onShortcutHover,
    onShortcutLeave,
    activeShortcut,
}) => {
    // Filter shortcuts by the selected category
    const filteredShortcuts = selectedCategory
        ? shortcuts.filter((shortcut) => shortcut.category === selectedCategory)
        : shortcuts;

    // Format the shortcut combination with "+" between keys
    const formatCombination = (combination: string[]): string => {
        return combination.join(" + ");
    };

    // If no category is selected or no shortcuts to display
    if (!selectedCategory || filteredShortcuts.length === 0) {
        return (
            <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                {!selectedCategory
                    ? "Select a category to view shortcuts"
                    : "No shortcuts found for this category"}
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 bg-white dark:bg-gray-800 rounded-lg shadow p-4"
        >
            <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                {selectedCategory} Shortcuts
            </h2>
            <ul className="space-y-2">
                {filteredShortcuts.map((shortcut) => (
                    <motion.li
                        key={shortcut.id}
                        whileHover={{ scale: 1.01 }}
                        onMouseEnter={() => onShortcutHover(shortcut)}
                        onMouseLeave={onShortcutLeave}
                        className={`
              p-2 rounded cursor-pointer transition-colors
              ${
                  activeShortcut?.id === shortcut.id
                      ? "bg-blue-50 dark:bg-blue-900"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }
            `}
                    >
                        <div className="flex justify-between items-center">
                            <span className="font-mono text-blue-600 dark:text-blue-400">
                                {formatCombination(shortcut.combination)}
                            </span>
                            <span className="text-gray-700 dark:text-gray-300">
                                {shortcut.description}
                            </span>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

export default ShortcutList;
