import Link from "next/link";
import { projects } from "./data/projects";
import NavBar from "./components/NavBar";

export default function Home() {
  const categoryOrder = [
    "Pavilion",
    "School",
    "Residential",
    "Church",
    "Corridor",
    "Urban Agriculture",
    "Hospital",
    "Others",
  ];
  const groupedProjects = categoryOrder.map((category) => ({
    category,
    items: projects.filter((project) => project.category === category),
  }));

  return (
    <main className="page-shell">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:px-10 md:pt-28">
        <NavBar />

        <header className="section-reveal flex flex-col gap-8 border-b border-[var(--line)] pb-10 pt-8 md:gap-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
            <div className="space-y-6">
              <p className="chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em]">
                Dugassa Gemechu Ayana
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
                  href="#featured-projects"
                  className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition hover:bg-[#e5e5e5]"
                >
                  View My Projects
                </a>
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
                  <p className="font-serif text-3xl">25+</p>
                  <p className="text-[var(--muted)]">Projects Delivered</p>
                </div>
                <div>
                  <p className="font-serif text-3xl">08+</p>
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
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="media-frame overflow-hidden rounded-2xl">
                  <img src="/architect4.jpg" alt="Current focus project 1" className="h-20 w-full object-cover" />
                </div>
                <div className="media-frame overflow-hidden rounded-2xl">
                  <img src="/architect5.jpg" alt="Current focus project 2" className="h-20 w-full object-cover" />
                </div>
                <div className="media-frame overflow-hidden rounded-2xl">
                  <img src="/architect6.jpg" alt="Current focus project 3" className="h-20 w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="featured-projects"
          className="section-reveal section-reveal-delay-1 mt-12 md:mt-16"
        >
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
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">Dugassa Gemechu Ayana</h2>
              <p className="text-sm leading-7 text-[var(--muted)] md:text-base">
                An architect focused on material clarity, climate-responsive form, and spaces that honor
                cultural memory. Dugassa leads projects from concept through delivery with a calm,
                detail-first approach.
              </p>
              <div>
                <Link
                  href="/about"
                  className="btn-primary inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition hover:bg-[#e5e5e5]"
                >
                  View Detail About Me
                </Link>
              </div>
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

          <div className="space-y-10">
            {groupedProjects.map((group) => (
              <div key={group.category} className="space-y-6">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <h3 className="font-serif text-2xl md:text-3xl">{group.category} Projects</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    {group.items.length ? `${group.items.length} Projects` : "Coming Soon"}
                  </p>
                </div>
                {group.items.length ? (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {group.items.map((project, index) => (
                      <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className={`section-reveal section-reveal-delay-${index + 1} surface soft-outline card-hover rounded-3xl p-5`}
                      >
                        <div className="media-frame mb-4 overflow-hidden rounded-2xl">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="h-48 w-full object-cover object-center"
                          />
                        </div>
                        <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{project.type}</p>
                        <h3 className="mt-2 font-serif text-2xl leading-tight">{project.name}</h3>
                        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.note}</p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-3xl border border-[var(--line)] p-6 text-sm text-[var(--muted)]">
                    Projects in this category will be added soon.
                  </div>
                )}
              </div>
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

        <footer className="footer-shell section-reveal section-reveal-delay-3 mt-12 -mx-6 px-6 py-12 md:mt-16 md:-mx-10 md:px-10">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="footer-logo flex h-12 w-12 items-center justify-center rounded-2xl border font-serif text-xl">
                  DG
                </div>
                <div>
                  <p className="footer-meta text-xs uppercase tracking-[0.22em]">Architecture Studio</p>
                  <p className="footer-meta text-sm">Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <p className="text-sm text-[var(--muted)]">
                Contemporary architecture focused on cultural clarity, climate-responsive design, and
                enduring craftsmanship.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Contact</p>
              <p className="text-[var(--muted)]">+251 910 840 015</p>
              <p className="text-[var(--muted)]">dugassagemechu2013@gmail.com</p>
              <p className="text-[var(--muted)]">dugassa.studio</p>
            </div>

            <div className="space-y-3 text-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Address</p>
              <p className="text-[var(--muted)]">Kirkos Sub-City, Addis Ababa</p>
              <p className="text-[var(--muted)]">Ethiopia</p>
              <div className="pt-3">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Socials</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href="https://web.facebook.com/dhugepeace"
                    className="social-icon social-facebook inline-flex h-10 w-10 items-center justify-center rounded-full border"
                    aria-label="Facebook"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M13.5 8.5V7.2c0-.7.5-1.2 1.2-1.2h1.8V3.5h-2.3c-2.2 0-3.7 1.5-3.7 3.7v1.3H8.3v2.5h2.2V20h3V11h2.3l.4-2.5h-2.7z" />
                    </svg>
                  </a>
                  <a
                    href="https://t.me/ArchitectDu"
                    className="social-icon social-telegram inline-flex h-10 w-10 items-center justify-center rounded-full border"
                    aria-label="Telegram"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M21.7 3.9a1 1 0 0 0-1.1-.2L2.6 10.7a1 1 0 0 0 .1 1.9l4.6 1.6 2 4.8a1 1 0 0 0 1.7.2l2.6-2.9 4.7 3.4a1 1 0 0 0 1.6-.6l3-14a1 1 0 0 0-.2-.8ZM9 14.8l-.7 2.5-1.1-2.7 9.8-8.2-8 8.4z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/dhugaadhaaf/"
                    className="social-icon social-instagram inline-flex h-10 w-10 items-center justify-center rounded-full border"
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5-3.4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/251910840015"
                    className="social-icon social-whatsapp inline-flex h-10 w-10 items-center justify-center rounded-full border"
                    aria-label="WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M12 3a9 9 0 0 0-7.8 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3Zm0 16.2a7.2 7.2 0 0 1-3.7-1L8 18l-2.7.7.7-2.6-.2-.4A7.2 7.2 0 1 1 12 19.2Zm4-5.3c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-1-.4-1.9-1.1-2.6-2-.2-.2-.2-.4 0-.5l.6-.7c.2-.2.2-.4.1-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.6.6-.9 1.4-.8 2.2.2 1.7 1.4 3.4 3.2 4.8 1.8 1.4 4.1 2.1 5.8 1.8.8-.1 1.6-.5 2-1.2.2-.4.2-.7.1-.8-.1-.1-.2-.2-.4-.3Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dugassa-gemechu-b0a606271/"
                    className="social-icon social-linkedin inline-flex h-10 w-10 items-center justify-center rounded-full border"
                    aria-label="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M6.5 8.5H3.8V20h2.7V8.5Zm.2-3.2a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0ZM20.4 20h-2.7v-5.6c0-1.3-.5-2.2-1.8-2.2-1 0-1.6.7-1.9 1.3-.1.2-.1.6-.1.9V20H11V8.5h2.6v1.6h.1c.4-.7 1.3-1.8 3.1-1.8 2.3 0 4 1.5 4 4.7V20Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-[var(--line)] pt-6 text-xs text-[var(--muted)]">
            © 2026 Dugassa Gemechu Studio. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}
