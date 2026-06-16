import type { Highlight } from "@/data/cv";

type HighlightCardProps = {
  highlight: Highlight;
};

export function HighlightCard({ highlight }: HighlightCardProps) {
  return (
    <article className="rounded-lg border border-[var(--line)] bg-white/60 p-5">
      <p className="text-2xl font-semibold tracking-normal text-neutral-950">
        {highlight.value}
      </p>
      <h3 className="mt-3 text-sm font-semibold text-neutral-950">
        {highlight.label}
      </h3>
      <p className="mt-2 text-sm leading-6 text-neutral-600">
        {highlight.detail}
      </p>
    </article>
  );
}
