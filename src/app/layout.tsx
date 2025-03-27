import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "../contexts/ThemeContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mac Keyboard Shortcuts",
    description: "Interactive guide to Mac keyboard shortcuts",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.className} antialiased`}
                suppressHydrationWarning
            >
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
} 
