"use client";

import { useState } from "react";
import CategoryFilter from "../components/filter/CategoryFilter";
import KeyboardLayout from "../components/keyboard/KeyboardLayout";
import Tooltip from "../components/keyboard/Tooltip";
import ShortcutList from "../components/shortcut/ShortcutList";
import ThemeToggle from "../components/theme/ThemeToggle";
import { useTheme } from "../contexts/ThemeContext";
import { getShortcutsByKey, shortcuts } from "../data/shortcuts";
import type {
    Shortcut,
    ShortcutCategory,
    TooltipPosition,
} from "../types/shortcuts";

const categories: ShortcutCategory[] = [
    "System",
    "Text Editing",
    "Window Management",
    "Screenshots",
    "Finder",
    "Browser",
    "Custom",
];

export default function Home() {
    const { isDark, toggleTheme } = useTheme();
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [activeShortcuts, setActiveShortcuts] = useState<Shortcut[]>([]);
    const [activeShortcut, setActiveShortcut] = useState<Shortcut | null>(null);
    const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({
        x: 0,
        y: 0,
    });
    const [selectedCategory, setSelectedCategory] =
        useState<ShortcutCategory>("Text Editing");
    const [highlightedKeys, setHighlightedKeys] = useState<string[]>([]);

    const handleKeyHover = (key: string, event: React.MouseEvent<Element>) => {
        const keyShortcuts = getShortcutsByKey(key);
        const filteredShortcuts = selectedCategory
            ? keyShortcuts.filter(
                  (shortcut) => shortcut.category === selectedCategory
              )
            : keyShortcuts;

        if (filteredShortcuts.length > 0) {
            const rect = event.currentTarget.getBoundingClientRect();
            setTooltipPosition({
                x: rect.left + rect.width / 2,
                y: rect.top,
            });
            setActiveShortcuts(filteredShortcuts);
            setActiveShortcut(filteredShortcuts[0]); // Show first shortcut combination
            setTooltipVisible(true);
        } else {
            setTooltipVisible(false);
            setActiveShortcut(null);
        }
    };

    const handleKeyClick = (key: string) => {
        const keyShortcuts = getShortcutsByKey(key);
        if (keyShortcuts.length > 0) {
            setActiveShortcut(keyShortcuts[0]);
        }
    };

    const handleCategoryChange = (newCategories: ShortcutCategory[]) => {
        // For single selection, take the first item or keep the default
        setSelectedCategory(
            newCategories.length > 0 ? newCategories[0] : "Text Editing"
        );
        setTooltipVisible(false);
        setActiveShortcut(null);
    };

    const handleShortcutHover = (shortcut: Shortcut) => {
        setActiveShortcut(shortcut);
        setHighlightedKeys(shortcut.combination);
    };

    const handleShortcutLeave = () => {
        setActiveShortcut(null);
        setHighlightedKeys([]);
    };

    return (
        <main className="min-h-screen bg-gray-100 dark:bg-gray-950 flex flex-col items-center justify-center p-4">
            <div className="absolute top-4 right-4">
                <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8">
                Mac Keyboard Shortcuts
            </h1>
            <div className="w-full max-w-4xl space-y-6">
                <div className="flex flex-col gap-4">
                    <CategoryFilter
                        categories={categories}
                        selectedCategories={[selectedCategory]}
                        onCategoryChange={handleCategoryChange}
                    />
                    <ShortcutList
                        shortcuts={shortcuts}
                        selectedCategory={selectedCategory}
                        onShortcutHover={handleShortcutHover}
                        onShortcutLeave={handleShortcutLeave}
                        activeShortcut={activeShortcut}
                    />
                </div>
                <div className="relative">
                    <KeyboardLayout
                        onKeyHover={handleKeyHover}
                        onKeyClick={handleKeyClick}
                        highlightedKeys={highlightedKeys}
                        activeShortcut={activeShortcut}
                    />
                    <Tooltip
                        isVisible={tooltipVisible}
                        shortcuts={activeShortcuts}
                        position={tooltipPosition}
                    />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    Hover over any key to see available shortcuts
                </p>
            </div>
        </main>
    );
}
