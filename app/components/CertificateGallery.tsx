"use client";

import { useState } from "react";

type CertificateImage = {
    src: string;
    alt: string;
};

type CertificateItem = CertificateImage & {
    title: string;
    year?: string;
    featured?: boolean;
};

type CertificateGalleryProps = {
    certificates: CertificateItem[];
};

export default function CertificateGallery({ certificates }: CertificateGalleryProps) {
    const [activeImage, setActiveImage] = useState<CertificateImage | null>(null);

    const featuredItem = certificates.find((item) => item.featured) ?? certificates[0];
    const galleryItems = certificates.filter((item) => item !== featuredItem);

    return (
        <>
            <div className="mt-6 grid gap-4">
                {featuredItem ? (
                    <button
                        type="button"
                        onClick={() => setActiveImage(featuredItem)}
                        className="group relative overflow-hidden rounded-3xl text-left"
                        aria-label={`Open ${featuredItem.alt}`}
                    >
                        <img
                            src={featuredItem.src}
                            alt={featuredItem.alt}
                            className="h-64 w-full object-cover sm:h-72"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-3 p-5 text-white">
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-white/70">Featured</p>
                                <p className="mt-1 font-serif text-2xl">{featuredItem.title}</p>
                            </div>
                            {featuredItem.year ? (
                                <span className="rounded-full border border-white/40 px-3 py-1 text-xs uppercase tracking-[0.2em]">
                                    {featuredItem.year}
                                </span>
                            ) : null}
                        </div>
                    </button>
                ) : null}
                <div className="grid gap-3 sm:grid-cols-2">
                    {galleryItems.map((item) => (
                        <button
                            key={item.src}
                            type="button"
                            onClick={() => setActiveImage(item)}
                            className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] text-left"
                            aria-label={`Open ${item.alt}`}
                        >
                            <div className="media-frame overflow-hidden">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                                />
                            </div>
                            <div className="flex items-center justify-between gap-4 px-4 py-3">
                                <div>
                                    <p className="text-sm font-semibold text-[var(--paper)]">{item.title}</p>
                                    <p className="text-xs text-[var(--muted)]">{item.alt}</p>
                                </div>
                                {item.year ? (
                                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                                        {item.year}
                                    </span>
                                ) : null}
                            </div>
                        </button>
                    ))}
                </div>
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
