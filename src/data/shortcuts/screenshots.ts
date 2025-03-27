import { Shortcut } from "../../types/shortcuts";

export const screenshotsShortcuts: Shortcut[] = [
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
