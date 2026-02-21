# Event Landing Page

A multilingual conference landing page built with General Translation, featuring a live countdown, speaker cards, and a day-of schedule.

**[Live Demo](https://event-landing-page.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app demonstrates how to build a fully internationalized event landing page using [gt-next](https://generaltranslation.com/docs). It showcases locale-aware date/time formatting, number formatting, and broad `<T>` wrapping for natural translations across Spanish, French, Japanese, and Chinese.

## GT Features Used

- `<T>` — JSX translation (wide wrapping for full-context translations)
- `<DateTime>` — Locale-aware date and time formatting
- `<Num>` — Number formatting
- `getGT` — Server-side string translations
- `<LocaleSelector>` — Built-in language picker
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/event-landing-page.git
cd event-landing-page
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
