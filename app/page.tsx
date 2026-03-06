export default function Home() {
  const projects = [
    {
      name: "Abyssinia Cultural Pavilion",
      type: "Civic / 2025",
      note: "A layered brick-and-light concept that frames public gathering around courtyards and shaded passages.",
      tone: "from-[#c96f45]/60 via-[#dba07b]/40 to-[#f4e2d4]/40",
    },
    {
      name: "Ridge House Compound",
      type: "Residential / 2024",
      note: "Terraced living spaces embedded into slope geometry with passive cooling and framed valley views.",
      tone: "from-[#2b4a3f]/70 via-[#517065]/45 to-[#dfe6e3]/40",
    },
    {
      name: "Addis Work Loft",
      type: "Commercial / 2023",
      note: "Adaptive reuse of an industrial shell into a collaborative studio with daylight-first interior planning.",
      tone: "from-[#54534f]/70 via-[#8a877f]/45 to-[#ece7db]/45",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 pb-12 pt-8 md:px-10 md:pt-12">
      <header className="section-reveal flex flex-col gap-8 border-b border-[var(--line)] pb-10 md:gap-12">
        <div className="flex items-center justify-between">
          <p className="font-serif text-2xl tracking-wide md:text-3xl">DG</p>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
            Architecture Studio
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
          <div className="space-y-6">
            <p className="inline-block rounded-full border border-[var(--line)] bg-[var(--paper)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--forest)]">
              Dhugasa Gemachu
            </p>
            <h1 className="font-serif text-5xl leading-[0.96] md:text-7xl">
              Designing spaces that feel calm, clear, and lived-in.
            </h1>
            <p className="max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
              An architecture portfolio focused on contextual design, sustainable material logic, and
              spatial experiences that connect culture with contemporary life.
            </p>
          </div>

          <div className="grid-paper section-reveal section-reveal-delay-1 rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-5 md:p-6">
            <div className="mb-6 border-b border-[var(--line)] pb-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Current Focus</p>
              <p className="mt-2 font-serif text-2xl leading-tight">Civic and residential projects across East Africa</p>
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
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl md:text-4xl">Featured Projects</h2>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Selected Works</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`section-reveal section-reveal-delay-${index + 1} rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-4`}
            >
              <div className={`mb-4 h-44 rounded-xl bg-gradient-to-br ${project.tone}`} />
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{project.type}</p>
              <h3 className="mt-2 font-serif text-2xl leading-tight">{project.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-reveal section-reveal-delay-2 mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Design Ethos</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight">Architecture with emotional precision</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Each project starts from listening: site, climate, history, and people. The outcome is
            architecture that ages well and remains useful beyond trends.
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Process</p>
          <div className="mt-4 space-y-4 text-sm">
            <div className="flex items-start gap-4 border-b border-[var(--line)] pb-4">
              <p className="font-serif text-2xl">01</p>
              <p>Context mapping and concept development rooted in local identity.</p>
            </div>
            <div className="flex items-start gap-4 border-b border-[var(--line)] pb-4">
              <p className="font-serif text-2xl">02</p>
              <p>Iterative spatial studies with structural and environmental alignment.</p>
            </div>
            <div className="flex items-start gap-4">
              <p className="font-serif text-2xl">03</p>
              <p>Detail-focused execution with material clarity and lasting craftsmanship.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="section-reveal section-reveal-delay-3 mt-12 rounded-2xl border border-[var(--line)] bg-[var(--forest)] px-6 py-8 text-[#f7f3ec] md:mt-16 md:px-8 md:py-10">
        <p className="text-xs uppercase tracking-[0.2em] text-[#d5d0c4]">Start a Project</p>
        <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl font-serif text-3xl leading-tight md:text-5xl">
            Ready to shape a space that belongs to its place?
          </h2>
          <a
            href="mailto:dhugasa.gemachu@studio.com"
            className="inline-flex items-center justify-center rounded-full bg-[#f7f3ec] px-6 py-3 text-sm font-semibold text-[var(--forest)] transition hover:bg-[#ece4d8]"
          >
            Contact Dhugasa
          </a>
        </div>
      </footer>
    </main>
  );
}
