import { Shortcut } from "../../types/shortcuts";

export const systemShortcuts: Shortcut[] = [
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
];
