import Link from "next/link";
import CertificateGallery from "../components/CertificateGallery";
import DocumentsGallery from "../components/DocumentsGallery";

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
                        <h1 className="font-serif text-4xl leading-tight md:text-5xl">Dugassa Gemechu Ayana</h1>
                        <p className="text-sm leading-7 text-[var(--muted)] md:text-base">
                            An architect known for calm, detail-first spaces that respect culture, climate, and material
                            honesty. Dugassa leads projects from early concept to built form across civic, residential,
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
                        <p className="mt-3 text-sm text-[var(--muted)]">
                            Academic foundations that shaped the studio approach to material clarity and
                            construction delivery.
                        </p>
                        <div className="media-frame mt-5 overflow-hidden rounded-2xl">
                            <img
                                src="/architect7.jpg"
                                alt="Education and formation"
                                className="h-72 w-full object-contain"
                            />
                        </div>
                        <div className="mt-6 space-y-4 text-sm">
                            <div className="rounded-2xl border border-[var(--line)] p-4">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="font-semibold">BSc Architecture</p>
                                        <p className="text-[var(--muted)]">University of Gondar</p>
                                    </div>
                                    <p className="font-serif text-2xl text-[var(--paper)]">2018</p>
                                </div>
                                <p className="mt-3 text-[var(--muted)]">
                                    Focused on spatial composition, tectonics, and contextual design research.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-[var(--line)] p-4">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="font-semibold">MA Project Management</p>
                                        <p className="text-[var(--muted)]">Select College ,Addis Ababa </p>
                                    </div>
                                    <p className="font-serif text-2xl text-[var(--paper)]">2024</p>
                                </div>
                                <p className="mt-3 text-[var(--muted)]">
                                    Specialization in project delivery systems, cost control, and site coordination.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="surface soft-outline rounded-3xl p-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Experience</p>
                        <h2 className="mt-3 font-serif text-3xl leading-tight">Practice highlights</h2>
                        <p className="mt-3 text-sm text-[var(--muted)]">
                            A decade of collaborative leadership across civic, residential, and cultural work.
                        </p>
                        <div className="mt-5 grid gap-4 text-sm text-[var(--muted)]">
                            <div className="rounded-2xl border border-[var(--line)] p-4">
                                <p className="font-semibold text-[var(--paper)]">Project leadership</p>
                                <p className="mt-2">Led projects from concept to construction delivery with clear milestones.</p>
                            </div>
                            <div className="rounded-2xl border border-[var(--line)] p-4">
                                <p className="font-semibold text-[var(--paper)]">Team direction</p>
                                <p className="mt-2">Directed multidisciplinary teams across architecture, interior, and landscape scopes.</p>
                            </div>
                            <div className="rounded-2xl border border-[var(--line)] p-4">
                                <p className="font-semibold text-[var(--paper)]">Climate response</p>
                                <p className="mt-2">Prioritized passive strategies and durable material palettes.</p>
                            </div>
                            <div className="rounded-2xl border border-[var(--line)] p-4">
                                <p className="font-semibold text-[var(--paper)]">Public collaboration</p>
                                <p className="mt-2">Partnered with institutions on community-oriented cultural facilities.</p>
                            </div>
                        </div>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            <div className="media-frame overflow-hidden rounded-2xl">
                                <img
                                    src="/architect3.jpg"
                                    alt="Experience project 1"
                                    className="h-32 w-full object-cover"
                                />
                            </div>
                            <div className="media-frame overflow-hidden rounded-2xl">
                                <img
                                    src="/architect4.jpg"
                                    alt="Experience project 2"
                                    className="h-32 w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-reveal section-reveal-delay-2 mt-10 grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
                    <div className="surface soft-outline rounded-3xl p-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Certificates</p>
                        <h2 className="mt-3 font-serif text-3xl leading-tight">Professional credentials</h2>
                        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                            Dugassa holds multiple certifications in construction oversight, sustainable systems,
                            and project delivery.
                        </p>
                        <CertificateGallery
                            certificates={[
                                {
                                    src: "/certificate.png",
                                    alt: "Graduation certificate",
                                    title: "Graduation Certificate",
                                    year: "",
                                    featured: true,
                                },
                                {
                                    src: "/certificate1.png",
                                    alt: "Project planning certificate",
                                    title: "Project Planning",
                                    year: "",
                                },
                                {
                                    src: "/certificate2.png",
                                    alt: "Contract administration certificate",
                                    title: "Contract Administration",
                                    year: "",
                                },
                                {
                                    src: "/certificate3.png",
                                    alt: "Sustainable design certificate",
                                    title: "Sustainable Design",
                                    year: "",
                                },
                                {
                                    src: "/certificate4.png",
                                    alt: "Grade report certificate",
                                    title: "Grade Report",
                                    year: "",
                                },
                                {
                                    src: "/certificate5.png",
                                    alt: "MA project management certificate",
                                    title: "MA certificate",
                                    year: "",
                                },
                                {
                                    src: "/certificate6.png",
                                    alt: "Certificate of participation in construction management",
                                    title: "Construction Management Participation",
                                    year: "",
                                },
                                {
                                    src: "/certificate7.png",
                                    alt: "Certificate of completion in construction management",
                                    title: "Construction Management Completion",
                                    year: "",
                                },
                            ]}
                        />
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
                        <div className="mt-6">
                            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Documents</p>
                            <DocumentsGallery
                                items={[
                                    {
                                        title: "CV",
                                        subtitle: "Profile overview",
                                        href: "/dugassa%20cv.pdf",
                                    },
                                    {
                                        title: "Dugassa Doc",
                                        subtitle: "Credentials + awards",
                                        href: "/dugassa%20doc.pdf",
                                    },
                                    {
                                        title: "Experience",
                                        subtitle: "Project history",
                                        href: "/dugassa%20exp.pdf",
                                    },
                                ]}
                            />
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
