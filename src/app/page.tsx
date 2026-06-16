import { ExperienceCard } from "@/components/ExperienceCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HighlightCard } from "@/components/HighlightCard";
import { Section } from "@/components/Section";
import { SkillGroup } from "@/components/SkillGroup";
import {
  certification,
  education,
  experiences,
  highlights,
  profile,
  skillGroups,
} from "@/data/cv";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Section
            eyebrow="Summary"
            id="summary"
            title="Production-minded backend engineering"
          >
            <p className="max-w-4xl text-base leading-8 text-neutral-700 sm:text-lg">
              {profile.summary}
            </p>
          </Section>

          <Section eyebrow="Highlights" id="highlights" title="Selected outcomes">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((highlight) => (
                <HighlightCard highlight={highlight} key={highlight.label} />
              ))}
            </div>
          </Section>

          <Section
            eyebrow="Experience"
            id="experience"
            title="Backend systems in production"
          >
            <div className="space-y-5">
              {experiences.map((experience) => (
                <ExperienceCard
                  experience={experience}
                  key={`${experience.company}-${experience.period}`}
                />
              ))}
            </div>
          </Section>

          <Section eyebrow="Skills" id="skills" title="Technical toolkit">
            <div className="grid gap-4 md:grid-cols-2">
              {skillGroups.map((group) => (
                <SkillGroup group={group} key={group.title} />
              ))}
            </div>
          </Section>

          <Section eyebrow="Education" id="education" title="Education">
            <article className="rounded-lg border border-[var(--line)] bg-white/60 p-5 sm:p-6">
              <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-950">
                    {education.degree}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--accent-dark)]">
                    {education.school}
                  </p>
                </div>
                <p className="text-sm text-neutral-500">{education.period}</p>
              </div>
              <p className="mt-4 text-sm leading-6 text-neutral-700">
                GPA: {education.gpa}
              </p>
              <p className="mt-2 text-sm leading-6 text-neutral-700">
                Thesis: {education.thesis}
              </p>
            </article>
          </Section>

          <Section
            eyebrow="Certification"
            id="certification"
            title="Certification"
          >
            <article className="rounded-lg border border-[var(--line)] bg-white/60 p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-neutral-950">
                {certification.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">
                {certification.issuer}
              </p>
              <a
                className="mt-4 inline-flex text-sm font-semibold text-[var(--accent-dark)] underline decoration-transparent transition hover:decoration-current focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
                href={certification.href}
                rel="noreferrer"
                target="_blank"
              >
                View credential profile
              </a>
            </article>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
