import { Shortcut } from "../../types/shortcuts";

export const windowManagementShortcuts: Shortcut[] = [
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
];
