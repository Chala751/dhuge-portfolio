import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

type ProjectPageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="page-shell">
            <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:px-10 md:pt-14">
                <header className="section-reveal space-y-6 border-b border-[var(--line)] pb-10">
                    <Link href="/" className="back-link">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                        </svg>
                        Back to portfolio
                    </Link>
                    <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
                        <div className="space-y-4">
                            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{project.type}</p>
                            <h1 className="font-serif text-4xl leading-tight md:text-5xl">{project.name}</h1>
                            <p className="text-sm leading-7 text-[var(--muted)] md:text-base">
                                {project.summary}
                            </p>
                            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                                <span className="rounded-full border border-[var(--line)] px-3 py-2">
                                    Human-centered planning
                                </span>
                                <span className="rounded-full border border-[var(--line)] px-3 py-2">
                                    Climate-responsive design
                                </span>
                                <span className="rounded-full border border-[var(--line)] px-3 py-2">
                                    Durable materials
                                </span>
                            </div>
                        </div>
                        <div className="mono-card mono-card-light rounded-3xl p-5 text-sm">
                            <div className="grid gap-4">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Location</p>
                                    <p className="mt-2 font-semibold">{project.location}</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Year</p>
                                    <p className="mt-2 font-semibold">{project.year}</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Area</p>
                                    <p className="mt-2 font-semibold">{project.area}</p>
                                </div>
                            </div>
                            <div className="mt-6 rounded-2xl border border-[var(--line)] p-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Focus</p>
                                <p className="mt-2 text-sm text-[var(--muted)]">
                                    Spatial clarity, daylight, and efficient circulation for long-term resilience.
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="section-reveal section-reveal-delay-1 mt-10">
                    <div className="media-frame overflow-hidden rounded-3xl">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="h-auto max-h-[360px] w-full object-contain"
                        />
                    </div>
                    <div className="mt-6 grid gap-4 text-sm text-[var(--muted)] md:grid-cols-3">
                        <div className="rounded-2xl border border-[var(--line)] p-4">
                            <p className="text-xs uppercase tracking-[0.2em]">Program</p>
                            <p className="mt-2">{project.type}</p>
                        </div>
                        <div className="rounded-2xl border border-[var(--line)] p-4">
                            <p className="text-xs uppercase tracking-[0.2em]">Site</p>
                            <p className="mt-2">{project.location}</p>
                        </div>
                        <div className="rounded-2xl border border-[var(--line)] p-4">
                            <p className="text-xs uppercase tracking-[0.2em]">Scale</p>
                            <p className="mt-2">{project.area}</p>
                        </div>
                    </div>
                </section>

                <section className="section-reveal section-reveal-delay-2 mt-10">
                    <div className="grid gap-6 md:grid-cols-2">
                        {project.images.map((image, index) => (
                            <div
                                key={`${project.slug}-${index}`}
                                className="media-frame overflow-hidden rounded-3xl"
                            >
                                <img
                                    src={image}
                                    alt={`${project.name} view ${index + 1}`}
                                    className="h-auto w-full object-cover object-center sm:h-64 md:h-80"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
