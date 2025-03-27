import React from "react";
import type { ShortcutCategory } from "../../types/shortcuts";

interface CategoryFilterProps {
    categories: ShortcutCategory[];
    selectedCategories: ShortcutCategory[];
    onCategoryChange: (categories: ShortcutCategory[]) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
    categories,
    selectedCategories,
    onCategoryChange,
}) => {
    const handleCategoryToggle = (category: ShortcutCategory) => {
        if (selectedCategories.includes(category)) {
            onCategoryChange(selectedCategories.filter((c) => c !== category));
        } else {
            onCategoryChange([...selectedCategories, category]);
        }
    };

    return (
        <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => handleCategoryToggle(category)}
                    className={`
            px-3 py-1 rounded-full text-sm font-medium
            transition-colors duration-200
            ${
                selectedCategories.includes(category)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }
            hover:bg-blue-600 hover:text-white
          `}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
