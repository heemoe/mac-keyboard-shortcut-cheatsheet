import { browserShortcuts } from "./browser";
import { customShortcuts } from "./custom";
import { finderShortcuts } from "./finder";
import { screenshotsShortcuts } from "./screenshots";
import { systemShortcuts } from "./system";
import { textEditingShortcuts } from "./text-editing";
import { windowManagementShortcuts } from "./window-management";

// Export all category shortcuts
export {
    browserShortcuts,
    customShortcuts,
    finderShortcuts,
    screenshotsShortcuts,
    systemShortcuts,
    textEditingShortcuts,
    windowManagementShortcuts,
};

// Export as a map for easier access by category name
export const shortcutsByCategory = {
    Browser: browserShortcuts,
    Custom: customShortcuts,
    Finder: finderShortcuts,
    Screenshots: screenshotsShortcuts,
    System: systemShortcuts,
    "Text Editing": textEditingShortcuts,
    "Window Management": windowManagementShortcuts,
};
