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

        <h2 className={styles.title}>
          Floppy <span>Web</span>
        </h2>
        <section>
          <h1>
            Je crée des sites web qui rendent votre entreprise visible et
            transforment vos visiteurs en clients.
          </h1>
          <p>
            Développeur web freelance certifié, je conçois des sites modernes,
            rapides et optimisés pour votre image de marque.
          </p>
          <Link
            href="/contact"
            aria-label="Aller vers la page contact"
            className={styles.cta_button}
          >
            Demander un audit offert
          </Link>
        </section>
        <section className={styles.value_equation}>
          <h2>Pourquoi travailler avec moi ?</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>✅ Résultat désiré</h3>
              <p>
                Un site qui améliore votre visibilité et renforce votre image de
                marque.
              </p>
            </div>
            <div className={styles.card}>
              <h3>🔒 Probabilité de succès</h3>
              <p>
                Certifié <em>Développeur web & web mobile</em> + protocole de
                livraison clair.
              </p>
            </div>
            <div className={styles.card}>
              <h3>⏳ Temps</h3>
              <ul>
                <li>Site 1 page (contenu fourni) → 2 à 3 semaines</li>
                <li>Site 3 à 8 pages (contenu fourni) → 3 à 4 semaines</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>🤝 Effort</h3>
              <p>
                Seulement 2 rendez-vous (≈1h30 au total) + vous me fournissez
                logo, images, textes.
              </p>
            </div>
            <div className={styles.card}>
              <h3>🚫 Risque</h3>
              <p>
                Zéro risque : 3 mois de maintenance offerte + protocole de
                livraison clair.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.credibility}>
          <h2>Mon engagement</h2>
          <p>
            Avec ma certification <strong>Développeur Web & Web Mobile</strong>{" "}
            et une méthode claire, je vous accompagne de la conception à la mise
            en ligne de votre site.
          </p>
          <p>
            Chaque projet est traité comme une vitrine : je mets un point
            d’honneur à livrer un site qui vous rend fier et qui attire vos
            clients.
          </p>
        </section>
        <section className={styles.cta_final}>
          <h2>Faites de votre site web un levier de croissance</h2>
          <p>
            Votre site ne doit pas être une carte de visite poussiéreuse.
            Transformons-le en un outil qui attire, rassure et convertit.
          </p>
          <Link
            href="/contact"
            aria-label="Aller vers la page contact"
            className={styles.cta_button}
          >
            Réserver un appel découverte
          </Link>
        </section>
      </main>
    </>
  )
}
