import styles from "./Contact.module.css"
import Image from "next/image"

export default function Contact() {
  return (
    <>
      <main className={styles.container}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.text}>
          Une idée en tête ? <br />
          Besoin d’un site rapide, efficace et taillé sur-mesure?
        </p>
        <p className={styles.text}>
          Besoin d'un site sur mesure? <br />
          Contactez-moi pour discuter de votre projet et obtenir un devis
          personnalisé adapté à vos besoins et à votre budget.
        </p>
        <p className={styles.text}>
          👉 Envoyez-moi un message et construisons ensemble votre projet!
        </p>
        <a
          href="mailto:bruno.remy.web@gmail.com"
          className={styles.ctaButton}
          aria-label="Envoyer un mail à Rémy"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-messages-square-icon lucide-messages-square"
          >
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" />
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
          </svg>
          Envoyer un mail
        </a>
        <div className={styles.illustration}>
          <Image
            src={"./images/mail.svg"}
            width={280}
            height={300}
            alt="illustration envoi courriel"
          />
        </div>
        <div className={styles.socials}>
          <div className={styles.social}>
            <a
              href="https://www.instagram.com/floppy_web/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aller sur la page instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram-icon lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>{" "}
              Instagram
            </a>
          </div>
          <div className={styles.social}>
            <a
              href="https://www.linkedin.com/in/r%C3%A9my-bruno/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aller sur la page Linkedin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin-icon lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              Linkedin
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
