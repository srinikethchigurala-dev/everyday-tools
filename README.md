# Everyday Tools — Next.js + Vercel starter

A responsive global utilities website starter. Includes a searchable catalog, percentage/discount/tip/age/BMI calculators, unit converter, word counter, browser-side image resizing/format conversion, starter policy pages, robots.txt, sitemap.xml and an AdSense placement placeholder.

## Requirements
- Node.js 20.9+
- npm
- A GitHub account (recommended), Vercel account and domain

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Build
```bash
npm run build
```
This project uses Next static export. The export output is `out/`.

## Deploy to Vercel
1. Create a Git repository and upload these files.
2. Import the repository in Vercel.
3. Framework preset: Next.js. Build command: `npm run build`. Output directory: `out`.
4. Deploy and attach your own domain.

## Before launch — required owner setup
1. Replace `YOUR-DOMAIN.example` in `app/layout.jsx`, `public/robots.txt`, and `public/sitemap.xml` with your real HTTPS domain.
2. Replace placeholder About, Privacy, Terms, Contact content with truthful details and applicable legal/privacy disclosures.
3. Test the tools on phones and desktop, including edge cases and accessibility.
4. Add a favicon, site identity, support email and real contact channel.
5. Configure Search Console, verify domain ownership, submit `/sitemap.xml`, then monitor indexing and queries.
6. Apply to AdSense only after the site is ready. Approval is not guaranteed.
7. If approved, add Google's provided AdSense script/publisher ID using official instructions and replace the ad placeholders with compliant placements.
8. Obtain the exact `ads.txt` seller record shown in your AdSense account. Replace the example comments in `public/ads.txt`. Do not copy the dummy publisher number.
9. Assess consent/cookie requirements for the countries you serve. Use an appropriate consent solution where required.

## SEO notes
- Use unique, helpful content on each indexable landing page; don't publish thin or duplicated pages.
- The starter uses one interactive SPA-like homepage for the tools catalog. For stronger search landing pages, implement dedicated crawlable route pages for each major tool with distinct title/description, examples, instructions, and visible tool UI before scaling up.
- Search ranking or AdSense acceptance is never guaranteed. Focus on original usefulness, reliability, good navigation and performance.

## Tool notes and limitations
- BMI is a screening estimate for adults, not a diagnosis.
- Unit conversions include decimal (SI) and binary data units; use matching unit choices.
- Browser image export uses a chosen width and height (default 800×600), so it may change aspect ratio. Select intended dimensions. Unsupported image codecs can fail depending on browser.
- Countdown timer is a minimal starter example and doesn't currently run a continuous visual countdown.
- Currency conversion, live rates, advanced photo editing, and cloud upload are not included.
