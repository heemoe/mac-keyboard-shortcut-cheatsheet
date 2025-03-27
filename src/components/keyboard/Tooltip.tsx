import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface TooltipProps {
    isVisible: boolean;
    shortcuts: Array<{
        combination: string[];
        description: string;
        category: string;
    }>;
    position: {
        x: number;
        y: number;
    };
}

export const Tooltip: React.FC<TooltipProps> = ({
    isVisible,
    shortcuts,
    position,
}) => {
    return (
        <AnimatePresence>
            {isVisible && shortcuts.length > 0 && (
                <motion.div
                    className="fixed z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        left: position.x,
                        top: position.y,
                        transform: "translate(-50%, -100%)",
                    }}
                >
                    <div className="space-y-3">
                        {shortcuts.map((shortcut, index) => (
                            <div
                                key={index}
                                className="border-b last:border-b-0 pb-2 last:pb-0"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    {shortcut.combination.map(
                                        (key, keyIndex) => (
                                            <React.Fragment key={keyIndex}>
                                                <span className="bg-gray-100 dark:bg-gray-700 text-black dark:text-white px-2 py-1 rounded text-sm font-medium">
                                                    {key}
                                                </span>
                                                {keyIndex <
                                                    shortcut.combination
                                                        .length -
                                                        1 && (
                                                    <span className="text-gray-400">
                                                        +
                                                    </span>
                                                )}
                                            </React.Fragment>
                                        )
                                    )}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {shortcut.description}
                                </p>
                                <span className="text-xs text-gray-400 mt-1 inline-block">
                                    {shortcut.category}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div
                        className="absolute w-3 h-3 bg-white dark:bg-gray-800 rotate-45"
                        style={{
                            left: "50%",
                            bottom: "-6px",
                            transform: "translateX(-50%)",
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Tooltip;
