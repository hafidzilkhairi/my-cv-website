import type { Experience } from "@/data/cv";

const metricPattern =
  /(60%|6-day|50\+ seconds|under 5 seconds|5 minutes|80%|6-10ms|0\.3-1ms|Outbox Pattern|OpenTelemetry|Redis)/;

function emphasizeMetrics(text: string) {
  return text.split(metricPattern).map((part, index) =>
    metricPattern.test(part) ? (
      <strong className="font-semibold text-neutral-950" key={`${part}-${index}`}>
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="rounded-lg border border-[var(--line)] bg-white/60 p-5 sm:p-6">
      <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <h3 className="text-lg font-semibold text-neutral-950">
            {experience.role}
          </h3>
          <p className="mt-1 text-sm font-medium text-[var(--accent-dark)]">
            {experience.company}
          </p>
        </div>
        <p className="text-sm text-neutral-500">{experience.period}</p>
      </div>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-700">
        {experience.bullets.map((bullet) => (
          <li className="grid grid-cols-[auto_1fr] gap-3" key={bullet}>
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
            />
            <span>{emphasizeMetrics(bullet)}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
