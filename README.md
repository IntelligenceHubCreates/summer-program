# 🧠 Manvay's Summer Intelligence Program

A full production-ready Next.js 14 app for a 30-day cognitive development program for a 7-year-old.

## Features

- 📅 **Daily Schedule** — structured timetable with screen time rules
- 📖 **Day Scripts** — all 30 days with step-by-step parent scripts, exact dialogue, and guided questions
- 🌅 **Parent Prep** — night-before checklist for every single day, with interactive checkboxes (saves to localStorage)
- 🛠️ **Daily Tools** — exactly what to gather before each session
- 🔄 **Weekly Rotation** — Mon–Sun theme system for all 4 weeks
- ✅ **Progress Tracker** — 30-day grid with milestone rewards (saves to localStorage)
- 💡 **Parent Tips** — professional parenting principles and ready-made scripts

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **Google Fonts** — Fredoka One, Nunito, DM Sans

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Deploy — no environment variables needed

## Project Structure

```
manvay-app/
├── app/
│   ├── layout.tsx        # Root layout with Google Fonts
│   ├── page.tsx          # Main page with tab routing
│   └── globals.css       # Global styles + Tailwind
├── components/
│   ├── layout/
│   │   ├── Header.tsx    # Hero header
│   │   ├── Nav.tsx       # Sticky tab navigation
│   │   └── TabContext.tsx # Tab state context
│   ├── overview/
│   │   ├── Overview.tsx  # Overview tab
│   │   ├── Schedule.tsx  # Daily schedule tab
│   │   ├── WeeklyRotation.tsx
│   │   └── TipsTab.tsx
│   ├── days/
│   │   ├── DaysTab.tsx   # Week selector + day list
│   │   ├── DayCard.tsx   # Accordion day card
│   │   ├── StepCard.tsx  # Individual script step
│   │   └── PrepBox.tsx   # Night-before prep checklist
│   ├── tracker/
│   │   └── Tracker.tsx   # 30-day progress grid
│   └── prep/
│       └── PrepTab.tsx   # Full prep tab by week
├── lib/
│   ├── data.ts           # All 30 days of content + weekly rotation
│   ├── useLocalStorage.ts # localStorage hook
│   └── utils.ts          # cn() utility
├── types/
│   └── index.ts          # TypeScript interfaces
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## Customization

All content is in `lib/data.ts`. To customize:
- Change the child's name in `app/layout.tsx` metadata and `components/layout/Header.tsx`
- Edit any day's script, tools, or prep in `lib/data.ts`
- Adjust colors in `tailwind.config.ts`
