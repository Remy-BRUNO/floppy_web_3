import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import DarkModeToggle from "@/components/DarkModeToggle"
import BurgerMenu from "@/components/BurgerMenu"
import Head from "next/head"
import Script from "next/script"

export const metadata = {
  title: "Rémy | Développeur Next.js Freelance",
  description:
    "Création de sites web modernes et performants avec Next.js. Boostez votre business avec un site élégant et rapide.",
  openGraph: {
    title: "Rémy — Développeur Web Freelance Next.js",
    description:
      "Création de sites modernes et performants avec Next.js. Boostez votre business avec un site sur-mesure.",
    url: "https://floppy-web.fr/",
    images: [
      {
        url: "https://floppy-web.fr/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aperçu du site Floppy Web",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17334509888"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17334509888');
          `}
        </Script>
      </Head>
      <body>
        <Navbar />
        <DarkModeToggle />
        <BurgerMenu />
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
