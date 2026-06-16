import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

export function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section className="scroll-mt-20 py-12 sm:py-16" id={id}>
      <div className="mb-8 max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-[var(--accent-dark)] uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-normal text-neutral-950 sm:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
