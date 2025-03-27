import React, { useCallback, useState } from "react";
import { searchShortcuts } from "../../data/shortcuts";
import type { Shortcut } from "../../types/shortcuts";

interface SearchBarProps {
    onSearchResults: (results: Shortcut[]) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearchResults }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = useCallback(
        (term: string) => {
            setSearchTerm(term);
            const results = searchShortcuts(term);
            onSearchResults(results);
        },
        [onSearchResults]
    );

    return (
        <div className="w-full max-w-md">
            <div className="relative">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search shortcuts..."
                    className="w-full px-4 py-2 text-gray-700 bg-white dark:bg-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
