import { profile } from "@/data/cv";

const navItems = [
  { label: "Summary", href: "#summary" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-6 sm:px-8">
      <a
        className="text-sm font-semibold tracking-[0.16em] text-neutral-950 uppercase focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
        href="#top"
      >
        {profile.name}
      </a>
      <nav
        aria-label="Primary navigation"
        className="hidden items-center gap-6 text-sm text-neutral-600 sm:flex"
      >
        {navItems.map((item) => (
          <a
            className="transition hover:text-neutral-950 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
