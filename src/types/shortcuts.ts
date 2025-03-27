export interface Shortcut {
    id: string;
    combination: string[];
    description: string;
    category: ShortcutCategory;
    osVersion?: string[];
}

// Define all available shortcut categories
export type ShortcutCategory =
    | "System"
    | "Text Editing"
    | "Window Management"
    | "Screenshots"
    | "Finder"
    | "Browser"
    | "Custom";

export interface KeyboardKey {
    label: string;
    shortcuts: Shortcut[];
    width?: string;
    height?: string;
}

export interface TooltipPosition {
    x: number;
    y: number;
}

export interface ShortcutFilter {
    categories: ShortcutCategory[];
    searchTerm: string;
    osVersion?: string;
}
