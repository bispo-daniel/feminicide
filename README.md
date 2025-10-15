# Feminicide: Learn, See, Act

An educational, data-driven web app that **explains what feminicide is, how it happens, what the law says, and how to get help**—then invites visitors to take a short, privacy-first **Vulnerability Test** (Likert scale) to reflect on risk and discover concrete safety actions.

> **Audience:** students, educators, journalists, and anyone seeking clear information and quick guidance.
> **Tone:** empathetic, factual, and actionable.

---

## Why this project exists

Feminicide is not only a statistic; it’s the lethal outcome of gender-based violence. This project turns research and legislation into **plain-language slides**, **interactive visuals**, and **one-click help paths**—so people can learn fast and act faster.

---

## What you’ll find inside

### 1) Story-driven Home (slide carousel)

A horizontal narrative split into bite-size slides:

* **Introduction & definitions**
* **How it happens** (patterns and escalation)
* **National data** (map + time series)
* **Law & rights** (Maria da Penha + Feminicide)
* **Intersectionality** (who’s most impacted and why)
* **What’s next** (prevention, policy, research)
* **Study further** (curated resources)
* **Call to action** → Try the Vulnerability Test

### 2) Data & Charts

* **Brazil map (2024)** by state (UF)
* **Historical trend (2015–2024)**
* Built with **Highcharts** (including the Brazil topojson map), optimized for quick reading and screen readers.

### 3) Vulnerability Test (Likert, 5 options)

A 7-item, two-minute self-reflection tool that:

* Uses **Likert scale** (Never → Always).
* Flags **critical risk factors** (e.g., threats, weapons access, strangulation, escalation, separation).
* Returns a **clear result**: *Attention*, *Alert*, or *Maximum Alert*.
* Offers **immediate actions** with large, accessible buttons:

  * **Call 190** (emergency)
  * **Call 180** / WhatsApp **(61) 9610-0180** (guidance & reporting)
  * **Email**: [central180@mulheres.gov.br](mailto:central180@mulheres.gov.br)
* Includes a downloadable **quick safety plan** (no login, no tracking).

> This is **informational**, not diagnostic. If there is imminent danger, call **190**.

### 4) Accessibility & Safety by design

* **No analytics** on sensitive screens, **no local storage**, **no cookies** for answers.
* **Quick-exit** button (instantly opens a neutral page).
* Keyboard-first navigation, high-contrast UI, concise copy.
* Clear privacy notice: responses are processed locally and **not saved**.

### 5) Content foundations

* Brazilian legal framework (Maria da Penha; Feminicide as an autonomous crime).
* Recognized risk factors from international danger assessment research.
* Official help channels and guidance are embedded in-app for **one-tap access**.

---

## Tech highlights (at a glance)

* **Angular (standalone components)** + **Tailwind CSS**
* **Swiper** (web components) for the narrative carousel
* **Highcharts** for maps/series (Brazil map module)
* Lightweight, mobile-first, and content-centric

---

## Project structure (high level)

```
src/
  app/
    pages/
      home/          # Slide-based narrative
      quiz/          # Vulnerability Test (Likert)
    components/      # Reusable UI: info text, cards, image-cards
    app.routes.ts    # '' (Home), '/quiz' (Test)
```

---

## Contributing

* Keep tone **empathetic** and **evidence-based**.
* Prefer **plain language** over jargon.
* Any new feature touching sensitive flows must respect **privacy-by-default** and **safety-first** UX.
