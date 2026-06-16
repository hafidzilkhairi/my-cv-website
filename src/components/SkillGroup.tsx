import type { SkillGroup as SkillGroupType } from "@/data/cv";

type SkillGroupProps = {
  group: SkillGroupType;
};

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <article className="rounded-lg border border-[var(--line)] bg-white/60 p-5">
      <h3 className="text-sm font-semibold text-neutral-950">{group.title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li
            className="rounded-full border border-[var(--line)] bg-[var(--background)] px-3 py-1.5 text-xs font-medium text-neutral-700"
            key={skill}
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
