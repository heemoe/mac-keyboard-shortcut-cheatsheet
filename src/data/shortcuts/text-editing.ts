import { Shortcut } from "../../types/shortcuts";

export const textEditingShortcuts: Shortcut[] = [
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
];
