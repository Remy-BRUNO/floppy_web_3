import Link from "next/link"
import styles from "../styles/Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} Rémy - Développeur Next.js freelance|{" "}
      <Link href="/mentions-legales">Mentions légales</Link>
    </footer>
  )
}
