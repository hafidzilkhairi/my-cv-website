import type { ProfileLink } from "@/data/cv";

type ContactLinkProps = {
  link: ProfileLink;
  variant?: "plain" | "button" | "secondary";
};

export function ContactLink({ link, variant = "plain" }: ContactLinkProps) {
  const isExternal = link.href.startsWith("http");
  const className =
    variant === "button"
      ? "inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
      : variant === "secondary"
        ? "inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--line)] bg-white/55 px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:border-[var(--accent)] hover:text-[var(--accent-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
        : "text-sm font-medium text-[var(--accent-dark)] underline decoration-transparent transition hover:decoration-current focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]";

  return (
    <a
      aria-label={`${link.label}: ${link.href}`}
      className={className}
      href={link.href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {link.label}
    </a>
  );
}
