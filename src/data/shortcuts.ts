import { Shortcut } from "../types/shortcuts";

export const shortcuts: Shortcut[] = [
    // Text Editing
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
        id: "select-all",
        combination: ["Cmd", "A"],
        description: "Select all items",
        category: "Text Editing",
    },
    {
        id: "find",
        combination: ["Cmd", "F"],
        description: "Find in document",
        category: "Text Editing",
    },
    {
        id: "find-next",
        combination: ["Cmd", "G"],
        description: "Find next occurrence",
        category: "Text Editing",
    },
    {
        id: "find-previous",
        combination: ["Cmd", "Shift", "G"],
        description: "Find previous occurrence",
        category: "Text Editing",
    },
    {
        id: "bold",
        combination: ["Cmd", "B"],
        description: "Bold text",
        category: "Text Editing",
    },
    {
        id: "italic",
        combination: ["Cmd", "I"],
        description: "Italicize text",
        category: "Text Editing",
    },
    {
        id: "underline",
        combination: ["Cmd", "U"],
        description: "Underline text",
        category: "Text Editing",
    },
    {
        id: "delete-word",
        combination: ["Opt", "Delete"],
        description: "Delete word to the left",
        category: "Text Editing",
    },
    {
        id: "delete-line",
        combination: ["Cmd", "Delete"],
        description: "Delete line to the left",
        category: "Text Editing",
    },

    // System
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
        id: "force-quit",
        combination: ["Cmd", "Opt", "Esc"],
        description: "Force quit applications",
        category: "System",
    },
    {
        id: "lock-screen",
        combination: ["Cmd", "Ctrl", "Q"],
        description: "Lock screen",
        category: "System",
    },
    {
        id: "logout",
        combination: ["Cmd", "Shift", "Q"],
        description: "Log out of macOS",
        category: "System",
    },
    {
        id: "logout-immediate",
        combination: ["Cmd", "Opt", "Shift", "Q"],
        description: "Log out immediately without confirmation",
        category: "System",
    },

    // Window Management
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
        id: "minimize-all",
        combination: ["Cmd", "Opt", "M"],
        description: "Minimize all windows of the front app",
        category: "Window Management",
    },
    {
        id: "close-window",
        combination: ["Cmd", "W"],
        description: "Close front window",
        category: "Window Management",
    },
    {
        id: "close-all-windows",
        combination: ["Cmd", "Opt", "W"],
        description: "Close all windows of the app",
        category: "Window Management",
    },
    {
        id: "new-tab",
        combination: ["Cmd", "T"],
        description: "Open new tab",
        category: "Window Management",
    },

    // Finder
    {
        id: "new-finder-window",
        combination: ["Cmd", "N"],
        description: "Open new Finder window",
        category: "Finder",
    },
    {
        id: "new-folder",
        combination: ["Cmd", "Shift", "N"],
        description: "Create new folder",
        category: "Finder",
    },
    {
        id: "show-desktop",
        combination: ["Cmd", "Mission Control"],
        description: "Show desktop",
        category: "Finder",
    },
    {
        id: "show-computer",
        combination: ["Cmd", "Shift", "C"],
        description: "Open Computer window",
        category: "Finder",
    },
    {
        id: "show-desktop-folder",
        combination: ["Cmd", "Shift", "D"],
        description: "Open Desktop folder",
        category: "Finder",
    },
    {
        id: "show-documents",
        combination: ["Cmd", "Shift", "O"],
        description: "Open Documents folder",
        category: "Finder",
    },
    {
        id: "show-downloads",
        combination: ["Cmd", "Opt", "L"],
        description: "Open Downloads folder",
        category: "Finder",
    },
    {
        id: "show-utilities",
        combination: ["Cmd", "Shift", "U"],
        description: "Open Utilities folder",
        category: "Finder",
    },
    {
        id: "show-icloud",
        combination: ["Cmd", "Shift", "I"],
        description: "Open iCloud Drive",
        category: "Finder",
    },

    // Screenshots
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
        id: "screenshot-window",
        combination: ["Cmd", "Shift", "4", "Space"],
        description: "Take screenshot of window",
        category: "Screenshots",
    },
    {
        id: "screen-recording",
        combination: ["Cmd", "Shift", "5"],
        description: "Take screenshot or screen recording",
        category: "Screenshots",
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
