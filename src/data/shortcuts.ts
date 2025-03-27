import { Shortcut } from "../types/shortcuts";

export const shortcuts: Shortcut[] = [
    {
        id: "copy",
        combination: ["Cmd", "C"],
        description: "Copy selected item",
        category: "Text Editing",
    },
    {
        id: "paste",
        combination: ["Cmd", "V"],
        description: "Paste copied item",
        category: "Text Editing",
    },
    {
        id: "cut",
        combination: ["Cmd", "X"],
        description: "Cut selected item",
        category: "Text Editing",
    },
    {
        id: "undo",
        combination: ["Cmd", "Z"],
        description: "Undo last action",
        category: "Text Editing",
    },
    {
        id: "redo",
        combination: ["Cmd", "Shift", "Z"],
        description: "Redo last action",
        category: "Text Editing",
    },
    {
        id: "save",
        combination: ["Cmd", "S"],
        description: "Save current document",
        category: "System",
    },
    {
        id: "spotlight",
        combination: ["Cmd", "Space"],
        description: "Open Spotlight search",
        category: "System",
    },
    {
        id: "screenshot",
        combination: ["Cmd", "Shift", "3"],
        description: "Take screenshot of entire screen",
        category: "Screenshots",
    },
    {
        id: "screenshot-selection",
        combination: ["Cmd", "Shift", "4"],
        description: "Take screenshot of selected area",
        category: "Screenshots",
    },
    {
        id: "force-quit",
        combination: ["Cmd", "Opt", "Esc"],
        description: "Force quit applications",
        category: "System",
    },
    {
        id: "switch-apps",
        combination: ["Cmd", "Tab"],
        description: "Switch between applications",
        category: "Window Management",
    },
    {
        id: "minimize",
        combination: ["Cmd", "M"],
        description: "Minimize window",
        category: "Window Management",
    },
    {
        id: "new-finder-window",
        combination: ["Cmd", "N"],
        description: "Open new Finder window",
        category: "Finder",
    },
    {
        id: "find",
        combination: ["Cmd", "F"],
        description: "Find in document",
        category: "Text Editing",
    },
    {
        id: "select-all",
        combination: ["Cmd", "A"],
        description: "Select all items",
        category: "Text Editing",
    },
];

export const getShortcutsByKey = (key: string): Shortcut[] => {
    return shortcuts.filter((shortcut) => shortcut.combination.includes(key));
};

export const searchShortcuts = (term: string): Shortcut[] => {
    const searchTerm = term.toLowerCase();
    return shortcuts.filter(
        (shortcut) =>
            shortcut.description.toLowerCase().includes(searchTerm) ||
            shortcut.combination.join(" ").toLowerCase().includes(searchTerm) ||
            shortcut.category.toLowerCase().includes(searchTerm)
    );
};

export const getShortcutsByCategory = (category: string): Shortcut[] => {
    return shortcuts.filter((shortcut) => shortcut.category === category);
};
