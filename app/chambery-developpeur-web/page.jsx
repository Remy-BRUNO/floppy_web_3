import Head from "next/head"
import Link from "next/link"
import styles from "./chamberyPage.module.css"
import Image from "next/image"

export default function ChamberyPage() {
  return (
    <>
      <Head>
        <title>
          Développeur Web Freelance Chambéry | Création de Sites Next.js
        </title>
        <meta
          name="description"
          content="Développeur web freelance basé à Chambéry en Savoie (73). Sites modernes, rapides et SEO-friendly grâce à Next.js. Devis personnalisé gratuit !"
        />
        <meta
          property="og:title"
          content="Développeur Web à Chambéry — Sites Next.js Performants"
        />
        <meta
          property="og:description"
          content="Création de sites internet professionnels à Chambéry et en Savoie. Design moderne, optimisation SEO et performance au top."
        />
        <meta
          property="og:image"
          content="https://floppy-web.fr/images/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://floppy-web.fr/chambery-developpeur-web"
        />
      </Head>

      <main className={styles.local}>
        <h1>Votre Développeur Web Freelance à Chambéry (Savoie 73)</h1>

        <p>
          Vous êtes une entreprise, une association ou un indépendant basé à
          Chambéry ou en Savoie (73) ? Je crée des sites web sur-mesure,
          modernes et rapides, conçus pour mettre en valeur votre activité
          locale. Spécialisé Next.js pour des performances optimales et un
          référencement Google béton.
        </p>

        <h2>Pourquoi travailler avec un développeur local ?</h2>
        <ul>
          <li>✅ Une communication simplifiée, proche et réactive.</li>
          <li>
            🚀 Une expertise technique Next.js pour des sites ultra-rapides.
          </li>
          <li>📱 Design responsive, adapté à tous les écrans</li>
          <li>
            📈 Un site optimisé pour le référencement local Savoie / Chambéry.
          </li>
        </ul>

        <p>
          Contactez-moi pour un <strong>devis gratuit et personnalisé</strong> !
          Ensemble, donnons vie à votre projet web en Savoie.
        </p>

        <Link href="/services" aria-label="Aller vers la page services">
          Consultez mes services
        </Link>
        <div className={styles.illustration}>
          <Image
            alt="Développeur web freelance Chambéry — création site Next.js"
            width={280}
            height={280}
            src={"/images/web-devices.svg"}
          />
        </div>
        <Link
          href="/contact"
          className={styles.cta_button}
          aria-label="Aller vers la page contact pour demander un devis"
        >
          Demander un devis gratuit
        </Link>
      </main>
    </>
  )
}
