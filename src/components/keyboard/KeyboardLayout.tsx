import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Shortcut } from "../../types/shortcuts";
import Key from "./Key";

// Define keyboard layout data
const keyboardLayout = {
    row1: [
        "Esc",
        "F1",
        "F2",
        "F3",
        "F4",
        "F5",
        "F6",
        "F7",
        "F8",
        "F9",
        "F10",
        "F11",
        "F12",
        "Del",
    ],
    row2: [
        "`",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "-",
        "=",
        "Bksp",
    ],
    row3: [
        "Tab",
        "Q",
        "W",
        "E",
        "R",
        "T",
        "Y",
        "U",
        "I",
        "O",
        "P",
        "[",
        "]",
        "\\",
    ],
    row4: [
        "Caps",
        "A",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        ";",
        "'",
        "Enter",
    ],
    row5: ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
    row6: ["Ctrl", "Opt", "Cmd", "Space", "Cmd", "Opt", "←", "↓", "→"],
};

interface KeyboardLayoutProps {
    onKeyHover?: (key: string, event: React.MouseEvent<Element>) => void;
    onKeyClick?: (key: string) => void;
    highlightedKeys?: string[];
    activeShortcut?: Shortcut | null;
}

export const KeyboardLayout: React.FC<KeyboardLayoutProps> = ({
    onKeyHover,
    onKeyClick,
    highlightedKeys = [],
    activeShortcut = null,
}) => {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const [combinationKeys, setCombinationKeys] = useState<string[]>([]);

    useEffect(() => {
        if (activeShortcut) {
            setCombinationKeys(activeShortcut.combination);
        } else {
            setCombinationKeys([]);
        }
    }, [activeShortcut]);

    const handleKeyHover = (
        key: string,
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        setActiveKey(key);
        onKeyHover?.(key, event);
    };

    const handleKeyClick = (key: string) => {
        onKeyClick?.(key);
    };

    const isKeyHighlighted = (key: string) => {
        return highlightedKeys.includes(key);
    };

    const isPartOfCombination = (key: string) => {
        return combinationKeys.includes(key);
    };

    const renderRow = (keys: string[], rowIndex: number) => (
        <div className="flex gap-1 justify-center" key={`row-${rowIndex}`}>
            {keys.map((key, index) => {
                let width = "w-14";
                if (key === "Space") width = "w-64";
                else if (["Shift", "Enter", "Caps", "Tab"].includes(key))
                    width = "w-20";
                else if (key === "Bksp") width = "w-20";

                const isActive = activeKey === key || isKeyHighlighted(key);
                const isInCombination = isPartOfCombination(key);

                return (
                    <Key
                        key={`${key}-${index}`}
                        label={key}
                        width={width}
                        isActive={isActive}
                        isPartOfCombination={isInCombination}
                        onHover={(event) => handleKeyHover(key, event)}
                        onClick={() => handleKeyClick(key)}
                    />
                );
            })}
        </div>
    );

    return (
        <motion.div
            className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col gap-1">
                {Object.values(keyboardLayout).map((row, index) =>
                    renderRow(row, index)
                )}
            </div>
        </motion.div>
    );
};

export default KeyboardLayout;
