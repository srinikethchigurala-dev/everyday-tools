import "./globals.css";
export const metadata = {
  title: { default: "Everyday Tools — Free Online Calculators & Converters", template: "%s | Everyday Tools" },
  description: "Free, simple online calculators, unit converters, and image tools. Fast tools that work right in your browser.",
  metadataBase: new URL("https://YOUR-DOMAIN.example"),
  applicationName: "Everyday Tools",
  openGraph: { title: "Everyday Tools", description: "Useful free online tools in one simple place.", type: "website" },
  robots: { index: true, follow: true }
};
export default function RootLayout({children}) {
  return <html lang="en"><body>{children}</body></html>;
}
<meta name="google-site-verification" content="E8Mi4OPcnrnN9QhwBZhFaBuSmvhkCeo0weOsJ61xXis" />
