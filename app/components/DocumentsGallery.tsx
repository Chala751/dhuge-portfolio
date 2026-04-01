"use client";

import { useState } from "react";

type DocumentItem = {
    title: string;
    subtitle: string;
    href: string;
};

type DocumentsGalleryProps = {
    items: DocumentItem[];
};

export default function DocumentsGallery({ items }: DocumentsGalleryProps) {
    const [activeDoc, setActiveDoc] = useState<DocumentItem | null>(null);

    return (
        <>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {items.map((doc) => (
                    <button
                        key={doc.href}
                        type="button"
                        onClick={() => setActiveDoc(doc)}
                        className="group flex h-full flex-col justify-between rounded-2xl border border-[var(--line)] p-4 text-left transition hover:-translate-y-1 hover:border-[var(--paper)]"
                        aria-label={`Open ${doc.title} document`}
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-sm font-semibold text-[var(--paper)]">{doc.title}</p>
                                <p className="mt-1 text-xs text-[var(--muted)]">{doc.subtitle}</p>
                            </div>
                            <span className="rounded-full border border-[var(--line)] px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                                PDF
                            </span>
                        </div>
                        <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)] group-hover:text-[var(--paper)]">
                            View document
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
                            </svg>
                        </div>
                    </button>
                ))}
            </div>

            {activeDoc ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
                    <div className="relative w-full max-w-5xl">
                        <div className="mb-3 flex items-center justify-between">
                            <button
                                type="button"
                                onClick={() => setActiveDoc(null)}
                                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white"
                                aria-label="Back to About"
                            >
                                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                                </svg>
                                Back to About
                            </button>
                            <a
                                href={activeDoc.href}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white"
                            >
                                Open in new tab
                            </a>
                        </div>
                        <div className="overflow-hidden rounded-3xl bg-[#0b0b0b]">
                            <iframe
                                src={activeDoc.href}
                                title={activeDoc.title}
                                className="h-[70vh] w-full"
                            />
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
