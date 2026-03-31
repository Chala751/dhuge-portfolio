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
                    <Link
                        href="/"
                        className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]"
                    >
                        Back to portfolio
                    </Link>
                    <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
                        <div className="space-y-4">
                            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{project.type}</p>
                            <h1 className="font-serif text-4xl leading-tight md:text-5xl">{project.name}</h1>
                            <p className="text-sm leading-7 text-[var(--muted)] md:text-base">
                                {project.summary}
                            </p>
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
                        </div>
                    </div>
                </header>

                <section className="section-reveal section-reveal-delay-1 mt-10">
                    <div className="media-frame overflow-hidden rounded-3xl">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="h-auto w-full object-contain"
                        />
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
                                    className="h-64 w-full object-cover object-center md:h-80"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
