"use client"

import { ClipboardClock, ScrollText } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"

export function Navbar() {
    const pathname = usePathname();

    const linkClass = (path: string) =>
        `px-4 py-2 rounded-md text-sm font-medium transition flex items-center gap-2
         ${pathname === path
            ? "bg-blue-600 text-white"
            : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"}`;


    return (
        <nav className="w-full border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-5xl mx-auto flex gap-2 p-4">
                <Link href="/" className={linkClass("/")}>
                    <ScrollText size={18} />
                    Análise
                </Link>

                <Link href="/logs" className={linkClass("/logs")}>
                    <ClipboardClock size={18} />
                    Logs
                </Link>
            </div>
        </nav>
    )
}