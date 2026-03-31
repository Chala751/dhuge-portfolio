"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="nav-shell fixed inset-x-0 top-0 z-40 border-b border-[var(--line)] px-6 py-4 backdrop-blur md:px-10">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="soft-outline surface flex h-12 w-12 items-center justify-center rounded-2xl font-serif text-xl">
                        DG
                    </div>
                    <div className="space-y-1">
                        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-[var(--paper)] sm:text-xs">
                            Architecture Studio
                        </p>
                        <p className="text-xs text-[var(--paper)] sm:text-sm">Addis Ababa, Ethiopia</p>
                    </div>
                </div>

                <div className="hidden items-center gap-3 sm:flex">
                    <div className="accent-pill rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em]">
                        Open for 2026 commissions
                    </div>
                    <ThemeToggle />
                </div>

                <button
                    type="button"
                    className="theme-toggle inline-flex h-10 w-10 items-center justify-center rounded-full border bg-transparent sm:hidden"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={isOpen ? "M6 18 18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
                        />
                    </svg>
                </button>
            </div>

            {isOpen ? (
                <div className="mt-4 flex flex-col gap-3 border-t border-[var(--line)] pt-4 sm:hidden">
                    <div className="accent-pill self-start rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em]">
                        Open for 2026 commissions
                    </div>
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Theme</p>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
