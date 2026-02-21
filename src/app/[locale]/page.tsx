import { T, DateTime, Num } from "gt-next";
import { getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next";
import Countdown from "@/components/Countdown";

function Disclaimer() {
  return (
    <div className="bg-neutral-900 border-b border-neutral-800 py-2 text-center">
      <T>
        <p className="text-xs text-neutral-500">
          This is an example app built with{" "}
          <a
            href="https://generaltranslation.com"
            className="underline hover:text-neutral-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            General Translation
          </a>{" "}
          to demonstrate multilingual event pages. It is not a real event.
        </p>
      </T>
    </div>
  );
}

export default async function Home() {
  const gt = await getGT();

  const speakers = [
    {
      name: "Dr. Elena Vasquez",
      role: gt("Keynote Speaker"),
      bio: gt("Leading researcher in computational linguistics with over 15 years of experience building multilingual NLP systems."),
    },
    {
      name: "Kenji Tanaka",
      role: gt("Workshop Lead"),
      bio: gt("Full-stack engineer specializing in internationalized web applications. Creator of several open-source i18n tools."),
    },
    {
      name: "Amara Osei",
      role: gt("Panel Moderator"),
      bio: gt("Product manager focused on localization strategy for global SaaS products. Previously led i18n at three Fortune 500 companies."),
    },
    {
      name: "Luca Moretti",
      role: gt("Lightning Talk"),
      bio: gt("Developer advocate passionate about making translation workflows accessible to small teams and indie developers."),
    },
  ];

  const schedule = [
    { time: new Date("2026-09-15T09:00:00Z"), title: gt("Registration and Welcome Coffee") },
    { time: new Date("2026-09-15T10:00:00Z"), title: gt("Keynote: The Future of Multilingual Software") },
    { time: new Date("2026-09-15T11:30:00Z"), title: gt("Workshop: Building i18n-First Applications") },
    { time: new Date("2026-09-15T13:00:00Z"), title: gt("Lunch Break") },
    { time: new Date("2026-09-15T14:00:00Z"), title: gt("Panel: Localization at Scale") },
    { time: new Date("2026-09-15T15:30:00Z"), title: gt("Lightning Talks") },
    { time: new Date("2026-09-15T17:00:00Z"), title: gt("Networking Reception") },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Disclaimer />

      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              {gt("TranslateConf 2026")}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/event-landing-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label={gt("View on GitHub")}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="mb-16 text-center">
          <T>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-100 mb-4">
              TranslateConf 2026
            </h2>
            <p className="text-lg text-neutral-400 mb-2">
              The premier conference for multilingual software engineering
            </p>
            <p className="text-sm text-neutral-500 mb-8">
              San Francisco, CA
            </p>
          </T>
          <div className="text-sm text-neutral-400 mb-6">
            <T>
              <DateTime>{new Date("2026-09-15T09:00:00Z")}</DateTime>
              {" -- "}
              <DateTime>{new Date("2026-09-17T17:00:00Z")}</DateTime>
            </T>
          </div>
          <Countdown />
          <div className="mt-8">
            <T>
              <p className="text-sm text-neutral-500">
                Join <Num>{2847}</Num> attendees already registered
              </p>
            </T>
          </div>
        </section>

        {/* Schedule */}
        <section className="mb-16">
          <h3 className="text-xl font-semibold text-neutral-100 mb-6">
            {gt("Day 1 Schedule")}
          </h3>
          <div className="space-y-0">
            {schedule.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-3 border-b border-neutral-800">
                <div className="text-sm text-neutral-500 sm:w-40 shrink-0">
                  <DateTime
                    options={{ hour: "numeric", minute: "2-digit", timeZone: "America/Los_Angeles" }}
                  >
                    {item.time}
                  </DateTime>
                </div>
                <div className="text-neutral-200">{item.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Speakers */}
        <section className="mb-16">
          <h3 className="text-xl font-semibold text-neutral-100 mb-6">
            {gt("Speakers")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {speakers.map((speaker, i) => (
              <div key={i} className="border border-neutral-800 rounded-lg p-5">
                <div className="text-base font-medium text-neutral-100 mb-1">
                  {speaker.name}
                </div>
                <div className="text-sm text-neutral-500 mb-3">
                  {speaker.role}
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {speaker.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Venue */}
        <section className="mb-16">
          <T>
            <h3 className="text-xl font-semibold text-neutral-100 mb-4">
              Venue
            </h3>
            <p className="text-neutral-400 mb-2">
              <a href="https://www.moscone.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-200">Moscone Center</a>, San Francisco
            </p>
            <p className="text-sm text-neutral-500">
              747 Howard Street, San Francisco, CA 94103
            </p>
          </T>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-neutral-800">
          <T>
            <h3 className="text-2xl font-semibold text-neutral-100 mb-3">
              Reserve your spot
            </h3>
            <p className="text-neutral-400 mb-6">
              Early bird pricing available until <DateTime>{new Date("2026-06-01")}</DateTime>
            </p>
          </T>
          <T>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-neutral-100 text-neutral-900 font-medium rounded-lg hover:bg-neutral-200 transition-colors"
            >
              Register Now
            </a>
          </T>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-8">
        <div className="max-w-3xl mx-auto px-6">
          <T>
            <p className="text-sm text-neutral-600 text-center">
              Built with{" "}
              <a href="https://generaltranslation.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-400">General Translation</a>
              {" "}and{" "}
              <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-400">Next.js</a>
              {" "}to demonstrate multilingual event pages.
            </p>
          </T>
        </div>
      </footer>
    </div>
  );
}
