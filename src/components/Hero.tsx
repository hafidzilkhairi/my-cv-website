import { ContactLink } from "@/components/ContactLink";
import { profile } from "@/data/cv";

const linkedin = profile.links.find((link) => link.kind === "linkedin");
const github = profile.links.find((link) => link.kind === "github");
const email = profile.links.find((link) => link.kind === "email");

export function Hero() {
  return (
    <section
      className="mx-auto grid w-full max-w-6xl gap-10 px-5 pt-10 pb-12 sm:px-8 sm:pb-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-end"
      id="top"
    >
      <div>
        <p className="text-sm font-semibold tracking-[0.18em] text-[var(--accent-dark)] uppercase">
          {profile.role}
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl leading-[1.02] font-semibold tracking-normal text-neutral-950 sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700">
          {profile.headline}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {linkedin ? (
            <ContactLink
              link={{ ...linkedin, label: "Connect on LinkedIn" }}
              variant="button"
            />
          ) : null}
          {github ? <ContactLink link={github} variant="secondary" /> : null}
          {email ? <ContactLink link={email} variant="secondary" /> : null}
        </div>
      </div>
      <aside className="rounded-lg border border-[var(--line)] bg-white/60 p-5">
        <dl className="grid gap-5 text-sm">
          <div>
            <dt className="text-xs font-semibold tracking-[0.18em] text-neutral-500 uppercase">
              Location
            </dt>
            <dd className="mt-1 font-medium text-neutral-950">
              {profile.location}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold tracking-[0.18em] text-neutral-500 uppercase">
              Focus
            </dt>
            <dd className="mt-1 font-medium text-neutral-950">
              Go, microservices, observability, reliability
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold tracking-[0.18em] text-neutral-500 uppercase">
              Experience
            </dt>
            <dd className="mt-1 font-medium text-neutral-950">
              6+ years building production backend systems
            </dd>
          </div>
        </dl>
      </aside>
    </section>
  );
}
