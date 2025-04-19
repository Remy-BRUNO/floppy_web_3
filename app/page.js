import Link from "next/link"
import styles from "./page.module.css"
import Image from "next/image"
import logo from "/public/Logo_Floppy.png"

export default function HomePage() {
  return (
    <>
      <main className={styles.hero}>
        <Image
          src={logo}
          alt="logo floppy web"
          className={styles.logo}
          priority
        />

        <h1 className={styles.title}>
          Floppy <span>Web</span>
        </h1>
        <h2>Salut, moi c’est Rémy 👋</h2>
        <h3>Développeur Web Freelance — spécialisé Next.js</h3>
        <p>
          Je crée des sites modernes, rapides et élégants pour booster votre
          visibilité et votre business.
        </p>
        <p>Pour un devis personnalisé, n’hésitez pas à me contacter.</p>
        <Link
          href="/contact"
          aria-label="Aller vers la page contact"
          className={styles.cta_button}
        >
          Discutons ensemble
        </Link>
      </main>
    </>
  )
}
