import { Shortcut } from "../../types/shortcuts";

export const finderShortcuts: Shortcut[] = [
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
];
