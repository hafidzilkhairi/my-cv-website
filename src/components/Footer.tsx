import { ContactLink } from "@/components/ContactLink";
import { profile } from "@/data/cv";

export function Footer() {
  return (
    <footer
      className="mx-auto flex w-full max-w-6xl flex-col gap-5 border-t border-[var(--line)] px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8"
      id="contact"
    >
      <p className="text-sm text-neutral-600">Built by Hafidzil Khairi</p>
      <div className="flex flex-wrap gap-4">
        {profile.links.map((link) => (
          <ContactLink key={link.href} link={link} />
        ))}
      </div>
    </footer>
  );
}
