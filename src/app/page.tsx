import Image from "next/image";
import SlideNav from "@/components/SlideNav";
import SignupDemo from "@/components/SignupDemo";

const IMPROVEMENTS: { before: string; after: string }[] = [
  { before: "Password field before email", after: "Email first, then password" },
  { before: "Email split into 3 separate inputs", after: "One email input" },
  { before: "“I do not accept” — negative phrasing", after: "“I accept” — plain and positive" },
  { before: "Terms checkbox pre-checked", after: "Unchecked until the person checks it" },
  { before: "“Cancel” styled as the primary button", after: "“Log in” is the only primary action" },
  { before: "No validation feedback", after: "Real-time password rules as you type" },
  { before: "No email validation", after: "Inline error: “Please enter a valid email address”" },
  { before: "A countdown timer adds pressure", after: "No timer" },
  { before: "“Send to bottom” help widget", after: "Removed — nothing left to misread" },
];

export default function Home() {
  return (
    <>
      <SlideNav />
      <main className="deck">
        {/* Cover */}
        <section className="slide flex flex-col justify-center px-6 sm:px-16 md:pl-32">
          <p className="mb-6 text-sm text-paper/50">
            userinyerface.com/game.html — a UX case study
          </p>
          <h1 className="font-display max-w-3xl text-5xl leading-[1.08] sm:text-7xl">
            A signup form built to fight the person filling it in.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-paper/70">
            User Inyerface is a deliberately frustrating site, built to
            catalogue the dark patterns real products still ship. This is a
            teardown of its signup form, and a redesign that trusts the
            person using it.
          </p>
        </section>

        {/* Agenda */}
        <section className="slide flex flex-col justify-center px-6 sm:px-16 md:pl-32">
          <ol className="max-w-xl space-y-8">
            {[
              "What the original form does",
              "Where it works against you",
              "The redesign, sketched and built",
              "The specification behind it",
              "What actually changed",
            ].map((item, i) => (
              <li key={item} className="flex items-baseline gap-6">
                <span className="font-display text-2xl text-paper/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl sm:text-3xl">{item}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* 1. Overview */}
        <section
          id="overview"
          className="slide flex flex-col justify-center px-6 sm:px-16 md:pl-32"
        >
          <span className="font-display text-lg text-paper/40">01</span>
          <h2 className="font-display mt-3 max-w-2xl text-4xl leading-tight sm:text-5xl">
            The first screen sets the tone: a timer, four steps, and a form
            already working against you.
          </h2>
          <div className="mt-12 grid max-w-2xl gap-x-12 gap-y-6 text-paper/70 sm:grid-cols-2">
            <p>
              <span className="text-paper">Logo and title.</span> “User
              Inyerface” sits above the form, playing it straight.
            </p>
            <p>
              <span className="text-paper">A running timer.</span> Counts up
              from the moment the page loads, in full view.
            </p>
            <p>
              <span className="text-paper">Step indicators.</span> Four steps
              are promised before the form even starts.
            </p>
            <p>
              <span className="text-paper">The form itself.</span> Password,
              email, a terms checkbox, and three buttons — each one a
              small decision the design gets wrong.
            </p>
          </div>
        </section>

        {/* 2. Main Pain Points */}
        <section
          id="problems"
          className="slide flex flex-col justify-center px-6 py-14 sm:px-16 md:pl-32"
        >
          <span className="font-display text-lg text-paper/40">02</span>
          <h2 className="font-display mt-2 max-w-2xl text-3xl leading-tight sm:text-4xl">
            Main pain points.
          </h2>

          <div className="mt-8 space-y-4">
            <div className="grid gap-2 border-t border-ink-line pt-4 sm:grid-cols-[2rem_1fr_2fr] sm:gap-4">
              <span className="font-display text-paper/40">1</span>
              <h3 className="text-paper/80">Deceptive checkbox</h3>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded border border-fail/40 bg-fail-soft px-3 py-1.5 text-fail">
                  ☑ I do not accept the Terms &amp; Conditions
                </span>
                <span className="text-paper/50">
                  Pre-checked, so it tricks people into declining without
                  realizing it
                </span>
              </div>
            </div>

            <div className="grid gap-2 border-t border-ink-line pt-4 sm:grid-cols-[2rem_1fr_2fr] sm:gap-4">
              <span className="font-display text-paper/40">2</span>
              <h3 className="text-paper/80">Wrong button hierarchy</h3>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded border border-paper/20 px-3 py-1.5 text-paper/60">
                  Next
                </span>
                <span className="rounded bg-fail px-3 py-1.5 font-medium text-white">
                  Cancel
                </span>
                <span className="text-paper/50">
                  Cancel is styled as the primary action; the real Next is
                  plain text and easy to miss
                </span>
              </div>
            </div>

            <div className="grid gap-2 border-t border-ink-line pt-4 sm:grid-cols-[2rem_1fr_2fr] sm:gap-4">
              <span className="font-display text-paper/40">3</span>
              <h3 className="text-paper/80">Illogical field order</h3>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded border border-fail/40 bg-fail-soft px-3 py-1.5 text-fail">
                  Password before email
                </span>
                <span className="text-paper/50">
                  Breaks the natural signup flow people expect
                </span>
              </div>
            </div>

            <div className="grid gap-2 border-t border-ink-line pt-4 sm:grid-cols-[2rem_1fr_2fr] sm:gap-4">
              <span className="font-display text-paper/40">4</span>
              <h3 className="text-paper/80">Fragmented email input</h3>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded border border-fail/40 bg-fail-soft px-3 py-1.5 text-fail">
                  username · domain · .com ▾
                </span>
                <span className="text-paper/50">
                  Split into 3 inputs, adding complexity for no reason
                </span>
              </div>
            </div>

            <div className="grid gap-2 border-t border-ink-line pt-4 sm:grid-cols-[2rem_1fr_2fr] sm:gap-4">
              <span className="font-display text-paper/40">5</span>
              <h3 className="text-paper/80">Unnecessary pressure</h3>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded border border-fail/40 bg-fail-soft px-3 py-1.5 font-display text-fail">
                  00:47
                </span>
                <span className="text-paper/50">
                  A running timer creates anxiety and rush in a signup form
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Wireframe sketches */}
        <section
          id="wireframe"
          className="slide flex flex-col justify-center px-6 py-8 sm:px-16 md:pl-32"
        >
          <span className="font-display text-lg text-paper/40">03</span>
          <h2 className="font-display mt-2 max-w-2xl text-3xl leading-tight sm:text-4xl">
            The redesign, sketched first.
          </h2>
          <p className="mt-2 max-w-2xl text-paper/60">
            Before any code, the layout and validation states were worked out
            by hand.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-lg bg-paper">
              <a
                href="/wireframes/sketch-layout.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-[46vh] w-full cursor-zoom-in"
                aria-label="Open layout wireframe at full size in a new tab"
              >
                <Image
                  src="/wireframes/sketch-layout.jpg"
                  alt="Hand-drawn wireframe of the signup form: logo, description, email box, password field, terms checkbox in black with a blue link, and a Login/Sign in CTA"
                  fill
                  className="object-cover object-top"
                />
              </a>
              <figcaption className="border-t border-ink/10 px-4 py-2.5 text-sm text-ink/60">
                Layout and copy — CTA reads &ldquo;Login&rdquo; or
                &ldquo;Sign in&rdquo;, checkbox text in black, link in blue
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg bg-paper">
              <a
                href="/wireframes/sketch-validation.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-[46vh] w-full cursor-zoom-in"
                aria-label="Open validation wireframe at full size in a new tab"
              >
                <Image
                  src="/wireframes/sketch-validation.jpg"
                  alt="Hand-drawn wireframe of email and password validation: inline error 'Please enter a valid email address', five password rules with pass/fail marks, and a type spec of 16px normal body text and 13-14px thin error text"
                  fill
                  className="object-cover object-top"
                />
              </a>
              <figcaption className="border-t border-ink/10 px-4 py-2.5 text-sm text-ink/60">
                Validation states and type spec — the rules behind slide 05
              </figcaption>
            </figure>
          </div>
        </section>

        {/* 4. Redesign */}
        <section
          id="redesign"
          className="slide flex flex-col justify-center px-6 py-10 sm:px-16 md:pl-32"
        >
          <span className="font-display text-lg text-paper/40">04</span>
          <h2 className="font-display mt-2 max-w-2xl text-3xl leading-tight sm:text-4xl">
            Same fields. The difference is what the form assumes about you.
          </h2>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-fail/30 bg-ink-panel p-6 sm:p-7">
              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="text-paper/40">Step 1 of 4</span>
                <span className="font-display text-fail">00:47</span>
              </div>
              <div className="mb-4 w-full border-b border-paper/25 pb-2 text-paper/35">
                Choose Password
              </div>
              <div className="mb-4 flex gap-1.5 text-sm text-paper/50">
                <span className="rounded-sm border border-paper/20 px-2 py-1.5">
                  username
                </span>
                <span className="pt-1.5">@</span>
                <span className="rounded-sm border border-paper/20 px-2 py-1.5">
                  domain
                </span>
                <span className="rounded-sm border border-paper/20 px-2 py-1.5">
                  .com ▾
                </span>
              </div>
              <label className="mb-4 flex items-start gap-3 text-sm text-fail">
                <span>☑</span>
                <span>I do not accept the Terms &amp; Conditions</span>
              </label>
              <div className="flex items-center gap-3">
                <span className="text-sm text-paper/40">Next</span>
                <span className="rounded bg-fail px-6 py-2.5 text-sm font-medium text-white">
                  Cancel
                </span>
                <span className="text-sm text-paper/40">Reset</span>
              </div>
            </div>

            <div className="rise-in">
              <SignupDemo />
            </div>
          </div>
        </section>

        {/* 5. Specifications */}
        <section
          id="specs"
          className="slide flex flex-col justify-center px-6 py-14 sm:px-16 md:pl-32"
        >
          <span className="font-display text-lg text-paper/40">05</span>
          <h2 className="font-display mt-3 max-w-2xl text-4xl leading-tight sm:text-5xl">
            The specification.
          </h2>

          <div className="mt-12 grid gap-16 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-sm text-paper/50">Type scale</h3>
              <div className="space-y-6 border-t border-ink-line pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-base">Body text</span>
                  <span className="text-sm text-paper/40">16px · normal / medium</span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[13px] font-light text-paper/70">
                    Validation and error text
                  </span>
                  <span className="text-sm text-paper/40">13–14px · thin</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-sm text-paper/50">Color usage</h3>
              <div className="space-y-4 border-t border-ink-line pt-6">
                {[
                  { label: "Body text", swatch: "bg-paper" },
                  { label: "Terms & Conditions link", swatch: "bg-signal" },
                  { label: "Validation passed", swatch: "bg-pass" },
                  { label: "Validation failed", swatch: "bg-fail" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-4">
                    <span className={`h-3 w-3 rounded-full ${row.swatch}`} />
                    <span className="text-paper/80">{row.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Summary */}
        <section
          id="summary"
          className="slide flex flex-col justify-center px-6 py-10 sm:px-16 md:pl-32"
        >
          <span className="font-display text-lg text-paper/40">06</span>
          <h2 className="font-display mt-2 max-w-2xl text-3xl leading-tight sm:text-4xl">
            Nine small decisions, reversed.
          </h2>

          <div className="mt-6 max-w-3xl divide-y divide-ink-line border-t border-ink-line">
            {IMPROVEMENTS.map((row) => (
              <div
                key={row.before}
                className="grid grid-cols-1 gap-1.5 py-2.5 sm:grid-cols-2 sm:gap-8"
              >
                <p className="text-sm text-fail/80">{row.before}</p>
                <p className="text-sm text-pass">{row.after}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="slide flex flex-col justify-center px-6 sm:px-16 md:pl-32">
          <h2 className="font-display max-w-2xl text-4xl leading-tight sm:text-5xl">
            Good UX is mostly the absence of tricks.
          </h2>
          <ol className="mt-10 max-w-xl space-y-4">
            {[
              "Follow conventions people already know",
              "Say what you mean, in positive terms",
              "Show feedback as it happens, not after",
              "Give one clear action, not three",
              "Remove whatever doesn’t help",
            ].map((item, i) => (
              <li key={item} className="flex items-baseline gap-4 text-paper/80">
                <span className="font-display text-sm text-paper/40">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
          <p className="mt-16 text-sm text-paper/40">
            UI/UX design activity — wireframe refinement
          </p>
        </section>
      </main>
    </>
  );
}
