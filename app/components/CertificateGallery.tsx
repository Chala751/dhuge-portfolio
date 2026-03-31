"use client";

import { useState } from "react";

type CertificateImage = {
    src: string;
    alt: string;
};

type CertificateGalleryProps = {
    featured: CertificateImage;
    gallery: CertificateImage[];
};

export default function CertificateGallery({ featured, gallery }: CertificateGalleryProps) {
    const [activeImage, setActiveImage] = useState<CertificateImage | null>(null);

    const allImages = [featured, ...gallery];

    return (
        <>
            <div className="mt-6 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <button
                    type="button"
                    onClick={() => setActiveImage(featured)}
                    className="media-frame overflow-hidden rounded-2xl text-left"
                    aria-label="Open featured certificate"
                >
                    <img
                        src={featured.src}
                        alt={featured.alt}
                        className="h-48 w-full object-cover sm:h-56"
                    />
                </button>
                <div className="grid gap-3">
                    {[
                        "Graduation Certificate",
                        "Project Planning",
                        "Contract Administration",
                        "Sustainable Design",
                    ].map((label, index) => (
                        <div
                            key={label}
                            className="flex items-center justify-between rounded-2xl border border-[var(--line)] px-4 py-3 text-sm"
                        >
                            <div>
                                <p className="font-semibold text-[var(--paper)]">{label}</p>
                                <p className="text-xs text-[var(--muted)]">Certificate {index + 1}</p>
                            </div>
                            <span className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                                2020-
                                {index + 21}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {gallery.map((item) => (
                    <button
                        key={item.src}
                        type="button"
                        onClick={() => setActiveImage(item)}
                        className="media-frame overflow-hidden rounded-2xl text-left"
                        aria-label={`Open ${item.alt}`}
                    >
                        <img src={item.src} alt={item.alt} className="h-32 w-full object-cover sm:h-28" />
                    </button>
                ))}
            </div>

            {activeImage ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
                    <div className="relative w-full max-w-4xl">
                        <button
                            type="button"
                            onClick={() => setActiveImage(null)}
                            className="absolute -top-10 right-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white"
                            aria-label="Close certificate preview"
                        >
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
                            </svg>
                        </button>
                        <div className="overflow-hidden rounded-3xl bg-[#0b0b0b]">
                            <img src={activeImage.src} alt={activeImage.alt} className="h-auto w-full object-contain" />
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
