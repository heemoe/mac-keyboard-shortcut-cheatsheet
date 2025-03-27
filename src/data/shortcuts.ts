import { Shortcut, ShortcutCategory } from "../types/shortcuts";
import * as categoryShortcuts from "./shortcuts/index";

// Combine all shortcuts from different categories
export const shortcuts: Shortcut[] = [
    ...categoryShortcuts.browserShortcuts,
    ...categoryShortcuts.customShortcuts,
    ...categoryShortcuts.finderShortcuts,
    ...categoryShortcuts.screenshotsShortcuts,
    ...categoryShortcuts.systemShortcuts,
    ...categoryShortcuts.textEditingShortcuts,
    ...categoryShortcuts.windowManagementShortcuts,
];

// Get all available categories as an array
export const categories: ShortcutCategory[] = Object.keys(
    categoryShortcuts.shortcutsByCategory
) as ShortcutCategory[];

// Helper to get shortcuts by specific key
export const getShortcutsByKey = (key: string): Shortcut[] => {
    return shortcuts.filter((shortcut) => shortcut.combination.includes(key));
};

// Helper to search shortcuts by term
export const searchShortcuts = (term: string): Shortcut[] => {
    const searchTerm = term.toLowerCase();
    return shortcuts.filter(
        (shortcut) =>
            shortcut.description.toLowerCase().includes(searchTerm) ||
            shortcut.combination.join(" ").toLowerCase().includes(searchTerm) ||
            shortcut.category.toLowerCase().includes(searchTerm)
    );
};

// Helper to get shortcuts by category
export const getShortcutsByCategory = (
    category: ShortcutCategory
): Shortcut[] => {
    return shortcuts.filter((shortcut) => shortcut.category === category);
};

// Direct access to shortcuts by category
export const getShortcutsByCategoryName = (
    category: ShortcutCategory
): Shortcut[] => {
    return categoryShortcuts.shortcutsByCategory[category] || [];
};
