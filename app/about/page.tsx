import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="page-shell">
            <div className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:px-10 md:pt-28">
                <header className="section-reveal grid gap-6 border-b border-[var(--line)] pb-10 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="space-y-5">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 18l-6-6 6-6"
                                />
                            </svg>
                            Back to portfolio
                        </Link>
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">About</p>
                        <h1 className="font-serif text-4xl leading-tight md:text-5xl">Dugasa Gemechu</h1>
                        <p className="text-sm leading-7 text-[var(--muted)] md:text-base">
                            An architect known for calm, detail-first spaces that respect culture, climate, and material
                            honesty. Dugasa leads projects from early concept to built form across civic, residential,
                            and mixed-use work in East Africa.
                        </p>
                        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                            <span className="rounded-full border border-[var(--line)] px-3 py-2">Principal Architect</span>
                            <span className="rounded-full border border-[var(--line)] px-3 py-2">Urban + Civic</span>
                            <span className="rounded-full border border-[var(--line)] px-3 py-2">Sustainable Systems</span>
                        </div>
                    </div>
                    <div className="media-frame overflow-hidden rounded-3xl">
                        <img
                            src="/architect.jpg"
                            alt="Portrait of architect Dugasa Gemechu"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </header>

                <section className="section-reveal section-reveal-delay-1 mt-10 grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
                    <div className="surface soft-outline rounded-3xl p-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Background</p>
                        <h2 className="mt-3 font-serif text-3xl leading-tight">Education and formation</h2>
                        <div className="mt-5 space-y-4 text-sm">
                            <div className="flex items-start gap-4 border-b border-[var(--line)] pb-4">
                                <p className="font-serif text-2xl text-[var(--paper)]">2019</p>
                                <div>
                                    <p className="font-semibold">BSc Architecture</p>
                                    <p className="text-[var(--muted)]">University of Gondar</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <p className="font-serif text-2xl text-[var(--paper)]">2023</p>
                                <div>
                                    <p className="font-semibold">MSc Construction Management</p>
                                    <p className="text-[var(--muted)]">Addis Ababa University</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="surface soft-outline rounded-3xl p-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Experience</p>
                        <h2 className="mt-3 font-serif text-3xl leading-tight">Practice highlights</h2>
                        <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                            <li>Led civic and residential projects from concept to construction delivery.</li>
                            <li>Directed multidisciplinary teams across architecture, interior, and landscape scopes.</li>
                            <li>Focused on climate-responsive design strategies and long-life material palettes.</li>
                            <li>Collaborated with public institutions on community-oriented cultural facilities.</li>
                        </ul>
                    </div>
                </section>

                <section className="section-reveal section-reveal-delay-2 mt-10 grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
                    <div className="surface soft-outline rounded-3xl p-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Certificates</p>
                        <h2 className="mt-3 font-serif text-3xl leading-tight">Professional credentials</h2>
                        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                            Dugasa holds multiple certifications in construction oversight, sustainable systems,
                            and project delivery. Replace the placeholders below with certificate images when ready.
                        </p>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="media-frame overflow-hidden rounded-2xl">
                                    <img
                                        src="/architect1.jpg"
                                        alt={`Certificate placeholder ${item}`}
                                        className="h-40 w-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="surface soft-outline rounded-3xl p-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Values</p>
                        <h2 className="mt-3 font-serif text-3xl leading-tight">What guides the work</h2>
                        <div className="mt-5 grid gap-4 text-sm text-[var(--muted)]">
                            <div className="rounded-2xl border border-[var(--line)] p-4">
                                <p className="font-semibold text-[var(--paper)]">Material clarity</p>
                                <p className="mt-2">Honest assemblies and grounded palettes that age with grace.</p>
                            </div>
                            <div className="rounded-2xl border border-[var(--line)] p-4">
                                <p className="font-semibold text-[var(--paper)]">Climate response</p>
                                <p className="mt-2">Passive strategies that keep spaces cool, bright, and efficient.</p>
                            </div>
                            <div className="rounded-2xl border border-[var(--line)] p-4">
                                <p className="font-semibold text-[var(--paper)]">Human rhythm</p>
                                <p className="mt-2">Plans that celebrate daily rituals and community connection.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-reveal section-reveal-delay-3 mt-10">
                    <div className="footer-shell rounded-3xl px-6 py-8 md:px-8">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Ready to connect</p>
                                <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
                                    Let us shape a thoughtful space together.
                                </h2>
                            </div>
                            <a
                                href="mailto:dhugasa.gemachu@studio.com"
                                className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition hover:bg-[#000000]"
                            >
                                Contact Dugasa
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
