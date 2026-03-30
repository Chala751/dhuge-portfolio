export default function Home() {
  const projects = [
    {
      name: "Abyssinia Cultural Pavilion",
      type: "Civic / 2025",
      note: "A layered brick-and-light concept that frames public gathering around courtyards and shaded passages.",
      tone: "from-[#0f0f0f]/80 via-[#2a2a2a]/60 to-[#f0f0f0]/35",
      image: "/architect1.jpg",
    },
    {
      name: "Ridge House Compound",
      type: "Residential / 2024",
      note: "Terraced living spaces embedded into slope geometry with passive cooling and framed valley views.",
      tone: "from-[#151515]/85 via-[#3a3a3a]/60 to-[#e6e6e6]/35",
      image: "/architect2.jpg",
    },
    {
      name: "Addis Work Loft",
      type: "Commercial / 2023",
      note: "Adaptive reuse of an industrial shell into a collaborative studio with daylight-first interior planning.",
      tone: "from-[#1a1a1a]/85 via-[#4a4a4a]/60 to-[#f2f2f2]/35",
      image: "/architect3.jpg",
    },
  ];

  return (
    <main className="page-shell">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:px-10 md:pt-14">
        <header className="section-reveal flex flex-col gap-8 border-b border-[var(--line)] pb-10 md:gap-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="soft-outline surface flex h-12 w-12 items-center justify-center rounded-2xl font-serif text-xl">
                DG
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Architecture Studio</p>
                <p className="text-sm text-[var(--muted)]">Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <div className="accent-pill rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em]">
              Open for 2026 commissions
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
            <div className="space-y-6">
              <p className="chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em]">
                Dhugasa Gemachu
                <span className="h-2 w-2 rounded-full bg-[var(--paper)]" aria-hidden />
              </p>
              <h1 className="font-serif text-5xl leading-[0.96] md:text-7xl">
                Designing spaces with
                <span className="text-gradient"> calm intention</span>
                and lived-in clarity.
              </h1>
              <p className="max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
                An architecture portfolio focused on contextual design, sustainable material logic, and
                spatial experiences that connect culture with contemporary life.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:dhugasa.gemachu@studio.com"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--paper)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-[#e5e5e5]"
                >
                  Start a Project
                </a>
                <button className="soft-outline surface inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-[var(--paper)] transition hover:-translate-y-0.5">
                  View Studio Profile
                </button>
              </div>
            </div>

            <div className="grid-paper section-reveal section-reveal-delay-1 surface soft-outline rounded-3xl p-6">
              <div className="mb-6 border-b border-[var(--line)] pb-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Current Focus</p>
                <p className="mt-2 font-serif text-2xl leading-tight">
                  Civic, residential, and cultural projects across East Africa
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-serif text-3xl">18+</p>
                  <p className="text-[var(--muted)]">Projects Delivered</p>
                </div>
                <div>
                  <p className="font-serif text-3xl">07</p>
                  <p className="text-[var(--muted)]">Years of Practice</p>
                </div>
                <div>
                  <p className="font-serif text-3xl">04</p>
                  <p className="text-[var(--muted)]">Cities</p>
                </div>
                <div>
                  <p className="font-serif text-3xl">100%</p>
                  <p className="text-[var(--muted)]">Client-tailored Process</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="section-reveal section-reveal-delay-1 mt-12 md:mt-16">
          <div className="surface soft-outline grid grid-cols-1 items-center gap-8 rounded-3xl p-6 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
            <div className="relative">
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-[#ffffff]/20 via-transparent to-[#ffffff]/5 blur-lg" />
              <div className="relative overflow-hidden rounded-[1.75rem]">
                <img
                  src="/architect.jpg"
                  alt="Portrait of architect Dhugasa Gemachu"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Studio Founder</p>
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">Dhugasa Gemachu</h2>
              <p className="text-sm leading-7 text-[var(--muted)] md:text-base">
                An architect focused on material clarity, climate-responsive form, and spaces that honor
                cultural memory. Dhugasa leads projects from concept through delivery with a calm,
                detail-first approach.
              </p>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                <span className="rounded-full border border-[var(--line)] px-3 py-2">Principal Architect</span>
                <span className="rounded-full border border-[var(--line)] px-3 py-2">Urban + Civic</span>
                <span className="rounded-full border border-[var(--line)] px-3 py-2">Sustainable Systems</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-reveal section-reveal-delay-1 mt-12 md:mt-16">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Portfolio</p>
              <h2 className="font-serif text-3xl md:text-4xl">Featured Projects</h2>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Selected Works</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className={`section-reveal section-reveal-delay-${index + 1} surface soft-outline card-hover rounded-3xl p-5`}
              >
                <div className="mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-48 w-full object-cover object-center"
                  />
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{project.type}</p>
                <h3 className="mt-2 font-serif text-2xl leading-tight">{project.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-reveal section-reveal-delay-2 mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-[0.95fr_1.05fr]">
          <div className="surface soft-outline rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Design Ethos</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight">Architecture with emotional precision</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Each project starts from listening: site, climate, history, and people. The outcome is
              architecture that ages well and remains useful beyond trends.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              <span className="rounded-full border border-[var(--line)] px-3 py-2">Passive-first planning</span>
              <span className="rounded-full border border-[var(--line)] px-3 py-2">Material honesty</span>
              <span className="rounded-full border border-[var(--line)] px-3 py-2">Cultural continuity</span>
            </div>
          </div>

          <div className="surface soft-outline rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Process</p>
            <div className="mt-4 space-y-4 text-sm">
              <div className="flex items-start gap-4 border-b border-[var(--line)] pb-4">
                <p className="font-serif text-2xl text-[var(--paper)]">01</p>
                <p>Context mapping and concept development rooted in local identity.</p>
              </div>
              <div className="flex items-start gap-4 border-b border-[var(--line)] pb-4">
                <p className="font-serif text-2xl text-[var(--paper)]">02</p>
                <p>Iterative spatial studies with structural and environmental alignment.</p>
              </div>
              <div className="flex items-start gap-4">
                <p className="font-serif text-2xl text-[var(--paper)]">03</p>
                <p>Detail-focused execution with material clarity and lasting craftsmanship.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="section-reveal section-reveal-delay-3 mt-12 rounded-3xl bg-[var(--paper)] px-6 py-10 text-[var(--ink)] md:mt-16 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Start a Project</p>
              <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight md:text-5xl">
                Ready to shape a space that belongs to its place?
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:dhugasa.gemachu@studio.com"
                className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-[var(--paper)] transition hover:bg-[#000000]"
              >
                Contact Dhugasa
              </a>
              <button className="inline-flex items-center justify-center rounded-full border border-[var(--ink)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-[#e5e5e5]">
                Download Profile
              </button>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
